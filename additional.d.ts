declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FATHOM_SITE_ID: string;
      NEXT_PUBLIC_FATHOM_URL: string;
    }
  }
}

export {};
