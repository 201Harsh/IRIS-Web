import React from "react";

const Footer = ({
  footerTextRef,
}: {
  footerTextRef: React.RefObject<HTMLHeadingElement | null>;
}) => {
  return (
    <>
      <footer className="footer-section bg-black pt-20 pb-10 px-6 md:px-20 overflow-hidden">
        <div className="w-full flex justify-center mb-16 select-none">
          <h1
            ref={footerTextRef}
            className="text-[20vw] font-black leading-none tracking-tighter bg-clip-text text-transparent"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(90deg, #10b981 0%, #044a33 0%)",
              backgroundRepeat: "no-repeat",
            }}
          >
            IRIS
          </h1>
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div>
            <div className="w-12 h-12 border-2 border-[#10b981] rounded flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-[#10b981]" />
            </div>
            <div className="flex gap-4">
              <span className="hover:text-[#10b981] cursor-pointer">IG</span>
              <span className="hover:text-[#10b981] cursor-pointer">IN</span>
              <span className="hover:text-[#10b981] cursor-pointer">X</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="text-white font-bold mb-2">ABOUT</h5>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms and Condition
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="text-white font-bold mb-2">COMPANY</h5>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Hire From Us
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Discord
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="text-white font-bold mb-2">CONTACT</h5>
            <p className="text-gray-400">Online: 11am - 8pm</p>
            <p className="text-[#10b981]">System Status: ACTIVE</p>
            <p className="text-gray-400 mt-4">Parent Company:</p>
            <p className="text-white font-bold">Vital Studio's</p>
          </div>
        </div>
      </footer>
      +
    </>
  );
};

export default Footer;
