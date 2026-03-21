import { promises as dns } from "dns";

export const isDomainMailCapable = async (domain: string): Promise<boolean> => {
  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch (error) {
    return false;
  }
};
