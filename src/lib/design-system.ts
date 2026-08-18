export const designSystem = {
  colors: {
    primary: "#0A0A0A",
    accent: "#C9A84C",
    background: "#FAF8F4",
  },
  typography: {
    heading: "Manrope",
    body: "Inter",
  },
  roundness: "8px",
} as const;

/** Production WhatsApp Business number (Mandla Money Main). */
export const WHATSAPP_NUMBER = "+27609305221";
export const WHATSAPP_NUMBER_DISPLAY = "+27 60 930 5221";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`;

/** Production customer & business web apps. */
export const CUSTOMER_APP_URL = "https://customer.mandlamoney.com";
export const BUSINESS_APP_URL = "https://business.mandlamoney.com";
