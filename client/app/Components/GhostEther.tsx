"use client";

import { useEffect, useRef } from "react";
import type * as THREE from "three";

interface GhostEtherProps {
  className?: string;
}

export default function GhostEther({ className = "" }: GhostEtherProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let disposed = false;

    async function boot() {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;

      const W = mountRef.current.clientWidth || window.innerWidth;
      const H = mountRef.current.clientHeight || window.innerHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      Object.assign(renderer.domElement.style, {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      });
      mountRef.current.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
      camera.position.z = 20;

      scene.add(new THREE.AmbientLight(0x002211, 0.15));
      const rim1 = new THREE.DirectionalLight(0x10b981, 2.2);
      rim1.position.set(-8, 6, -4);
      scene.add(rim1);
      const rim2 = new THREE.DirectionalLight(0x34d399, 1.4);
      rim2.position.set(8, -4, -6);
      scene.add(rim2);

      const ghostGroup = new THREE.Group();
      scene.add(ghostGroup);

      const bodyGeo = new THREE.SphereGeometry(2, 48, 48);
      const posAttr = bodyGeo.getAttribute("position") as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < arr.length; i += 3) {
        if (arr[i + 1] < -0.2) {
          const x = arr[i],
            z = arr[i + 2];
          arr[i + 1] =
            -2.0 +
            Math.sin(x * 5) * 0.38 +
            Math.cos(z * 4) * 0.28 +
            Math.sin((x + z) * 3) * 0.16;
        }
      }
      bodyGeo.computeVertexNormals();

      const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x021a10,
        transparent: true,
        opacity: 0.82,
        emissive: new THREE.Color(0x10b981),
        emissiveIntensity: 6.0,
        roughness: 0.1,
        metalness: 0.1,
        side: THREE.DoubleSide,
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      ghostGroup.add(body);

      const socketGeo = new THREE.SphereGeometry(0.45, 16, 16);
      const socketMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const mkSocket = (x: number) => {
        const m = new THREE.Mesh(socketGeo, socketMat);
        m.position.set(x, 0.6, 1.9);
        m.scale.set(1.1, 1.0, 0.6);
        ghostGroup.add(m);
      };
      mkSocket(-0.7);
      mkSocket(0.7);

      const eyeGeo = new THREE.SphereGeometry(0.32, 12, 12);
      const outerGeo = new THREE.SphereGeometry(0.55, 12, 12);
      const eyeColor = new THREE.Color(0x34d399);

      const mkEye = (x: number) => {
        const inner = new THREE.MeshBasicMaterial({
          color: eyeColor,
          transparent: true,
          opacity: 0,
        });
        const outer = new THREE.MeshBasicMaterial({
          color: eyeColor,
          transparent: true,
          opacity: 0,
          side: THREE.BackSide,
        });
        const iMesh = new THREE.Mesh(eyeGeo, inner);
        const oMesh = new THREE.Mesh(outerGeo, outer);
        iMesh.position.set(x, 0.6, 2.05);
        oMesh.position.set(x, 0.6, 2.0);
        ghostGroup.add(iMesh, oMesh);
        return { inner, outer };
      };
      const leftEye = mkEye(-0.7);
      const rightEye = mkEye(0.7);

      const ffGroup = new THREE.Group();
      scene.add(ffGroup);

      type FF = {
        mesh: THREE.Mesh;
        vel: THREE.Vector3;
        phase: number;
        pulseSpeed: number;
        mat: THREE.MeshBasicMaterial;
        light: THREE.PointLight;
      };

      const fireflies: FF[] = [];
      const ffColors = [0x10b981, 0x34d399, 0x6ee7b7, 0x00ff80];

      for (let i = 0; i < 22; i++) {
        const col = ffColors[Math.floor(Math.random() * ffColors.length)];
        const mat = new THREE.MeshBasicMaterial({
          color: col,
          transparent: true,
          opacity: 0.9,
        });
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.025, 4, 4), mat);
        mesh.position.set(
          (Math.random() - 0.5) * 42,
          (Math.random() - 0.5) * 32,
          (Math.random() - 0.5) * 22,
        );
        const glowMat = new THREE.MeshBasicMaterial({
          color: col,
          transparent: true,
          opacity: 0.25,
          side: THREE.BackSide,
        });
        mesh.add(new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), glowMat));
        const light = new THREE.PointLight(col, 1.0, 4, 2);
        mesh.add(light);
        ffGroup.add(mesh);
        fireflies.push({
          mesh,
          vel: new THREE.Vector3(
            (Math.random() - 0.5) * 0.04,
            (Math.random() - 0.5) * 0.04,
            (Math.random() - 0.5) * 0.04,
          ),
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: 1.5 + Math.random() * 3,
          mat,
          light,
        });
      }

      type Particle = THREE.Mesh & {
        userData: {
          life: number;
          decay: number;
          vel: THREE.Vector3;
          rotSpd: THREE.Vector3;
        };
      };

      const particleGroup = new THREE.Group();
      scene.add(particleGroup);
      const pGeos = [
        new THREE.SphereGeometry(0.05, 6, 6),
        new THREE.OctahedronGeometry(0.045, 0),
        new THREE.TetrahedronGeometry(0.04, 0),
      ];
      const pColors = [0x10b981, 0x34d399, 0x6ee7b7];
      const activeParticles: Particle[] = [];
      const particlePool: Particle[] = [];

      for (let i = 0; i < 120; i++) {
        const mat = new THREE.MeshBasicMaterial({
          color: pColors[i % 3],
          transparent: true,
          opacity: 0,
        });
        const p = new THREE.Mesh(pGeos[i % 3], mat) as unknown as Particle;
        p.visible = false;
        p.userData = {
          life: 0,
          decay: 0,
          vel: new THREE.Vector3(),
          rotSpd: new THREE.Vector3(),
        };
        particleGroup.add(p);
        particlePool.push(p);
      }

      function spawnParticle(origin: THREE.Vector3) {
        const p = particlePool.pop();
        if (!p) return;
        p.visible = true;
        p.position.copy(origin);
        p.position.x += (Math.random() - 0.5) * 3;
        p.position.y += (Math.random() - 0.5) * 3 - 0.6;
        p.position.z -= 0.8 + Math.random() * 0.6;
        const s = 0.5 + Math.random() * 0.8;
        p.scale.setScalar(s);
        p.userData.life = 1.0;
        p.userData.decay = 0.005 + Math.random() * 0.005;
        p.userData.vel.set(
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.012 - 0.002,
          (Math.random() - 0.5) * 0.012 - 0.006,
        );
        p.userData.rotSpd.set(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
        );
        (p.material as THREE.MeshBasicMaterial).opacity = Math.random() * 0.9;
        activeParticles.push(p);
      }

      const overlayCanvas = document.createElement("canvas");
      overlayCanvas.width = W;
      overlayCanvas.height = H;
      Object.assign(overlayCanvas.style, {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        mixBlendMode: "screen",
        opacity: "0.18",
      });
      mountRef.current!.appendChild(overlayCanvas);
      const octx = overlayCanvas.getContext("2d")!;

      function drawOverlay(w: number, h: number) {
        octx.clearRect(0, 0, w, h);
        // Scanlines
        for (let y = 0; y < h; y += 3) {
          octx.fillStyle = "rgba(0,0,0,0.6)";
          octx.fillRect(0, y, w, 1);
        }
        const vg = octx.createRadialGradient(
          w / 2,
          h / 2,
          h * 0.35,
          w / 2,
          h / 2,
          h * 0.85,
        );
        vg.addColorStop(0, "rgba(0,0,0,0)");
        vg.addColorStop(1, "rgba(0,0,0,0.75)");
        octx.fillStyle = vg;
        octx.fillRect(0, 0, w, h);
      }
      drawOverlay(W, H);

      const mouse = { x: 0, y: 0 };
      const prevGhostPos = new THREE.Vector3();
      const onMove = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
      };
      window.addEventListener("mousemove", onMove);

      let resizeTo: ReturnType<typeof setTimeout>;
      const onResize = () => {
        clearTimeout(resizeTo);
        resizeTo = setTimeout(() => {
          if (!mountRef.current) return;
          const nw = mountRef.current.clientWidth;
          const nh = mountRef.current.clientHeight;
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
          overlayCanvas.width = nw;
          overlayCanvas.height = nh;
          drawOverlay(nw, nh);
        }, 200);
      };
      window.addEventListener("resize", onResize);

      let t = 0;
      let eyeOpacity = 0;
      let currentMovement = 0;
      let lastParticleTime = 0;
      let frameCount = 0;

      function animate(ts: number) {
        if (disposed) return;
        rafId = requestAnimationFrame(animate);
        t += 0.008;
        frameCount++;

        const tx = mouse.x * 11;
        const ty = mouse.y * 7;
        prevGhostPos.copy(ghostGroup.position);
        ghostGroup.position.x += (tx - ghostGroup.position.x) * 0.07;
        ghostGroup.position.y += (ty - ghostGroup.position.y) * 0.07;

        ghostGroup.position.y +=
          Math.sin(t * 2.4) * 0.03 +
          Math.cos(t * 1.05) * 0.018 +
          Math.sin(t * 3.45) * 0.008;

        const pulse = Math.sin(t * 2.4) * 0.6;
        const breathe = Math.sin(t * 0.9) * 0.12;
        bodyMat.emissiveIntensity = 6.0 + pulse + breathe;

        const dx = tx - ghostGroup.position.x;
        const dy = ty - ghostGroup.position.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        body.rotation.z += ((-dx / len) * 0.08 - body.rotation.z) * 0.06;
        body.rotation.x += ((dy / len) * 0.08 - body.rotation.x) * 0.06;
        body.rotation.y = Math.sin(t * 2.1) * 0.05;
        const sv = 1 + Math.sin(t * 3.15) * 0.02 + pulse * 0.012;
        body.scale.setScalar(sv);

        const mv = prevGhostPos.distanceTo(ghostGroup.position);
        currentMovement = currentMovement * 0.93 + mv * 0.07;
        const tgt = currentMovement > 0.06 ? 1.0 : 0.0;
        eyeOpacity += (tgt - eyeOpacity) * 0.12;
        leftEye.inner.opacity = eyeOpacity;
        leftEye.outer.opacity = eyeOpacity * 0.3;
        rightEye.inner.opacity = eyeOpacity;
        rightEye.outer.opacity = eyeOpacity * 0.3;

        if (currentMovement > 0.005 && ts - lastParticleTime > 90) {
          for (let i = 0; i < 3; i++) spawnParticle(ghostGroup.position);
          lastParticleTime = ts;
        }

        for (let i = activeParticles.length - 1; i >= 0; i--) {
          const p = activeParticles[i];
          p.userData.life -= p.userData.decay;
          (p.material as THREE.MeshBasicMaterial).opacity =
            p.userData.life * 0.85;
          p.position.add(p.userData.vel);
          p.position.x += Math.cos(t * 1.8 + p.position.y) * 0.001;
          p.rotation.x += p.userData.rotSpd.x;
          p.rotation.y += p.userData.rotSpd.y;
          p.rotation.z += p.userData.rotSpd.z;
          if (p.userData.life <= 0) {
            p.visible = false;
            (p.material as THREE.MeshBasicMaterial).opacity = 0;
            particlePool.push(p);
            activeParticles.splice(i, 1);
          }
        }

        fireflies.forEach((ff) => {
          const pulse2 = Math.sin(t * ff.pulseSpeed + ff.phase) * 0.4 + 0.6;
          ff.mat.opacity = 0.9 * pulse2;
          ff.light.intensity = 1.0 * pulse2;
          ff.vel.x += (Math.random() - 0.5) * 0.001;
          ff.vel.y += (Math.random() - 0.5) * 0.001;
          ff.vel.clampLength(0, 0.045);
          ff.mesh.position.add(ff.vel);
          if (Math.abs(ff.mesh.position.x) > 32) ff.vel.x *= -0.6;
          if (Math.abs(ff.mesh.position.y) > 22) ff.vel.y *= -0.6;
          if (Math.abs(ff.mesh.position.z) > 18) ff.vel.z *= -0.6;
        });

        renderer.render(scene, camera);
      }
      animate(0);

      return () => {
        disposed = true;
        cancelAnimationFrame(rafId);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (mountRef.current) {
          if (renderer.domElement.parentNode === mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
          }
          if (overlayCanvas.parentNode === mountRef.current) {
            mountRef.current.removeChild(overlayCanvas);
          }
        }
      };
    }

    let cleanupFn: (() => void) | undefined;
    boot().then((fn) => {
      cleanupFn = fn;
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      cleanupFn?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    />
  );
}
