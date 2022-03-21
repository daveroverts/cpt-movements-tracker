declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_FATHOM_SITE_ID: string;
    NEXT_PUBLIC_FATHOM_URL: string;
    DATABASE_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    VATSIM_ID: string;
    VATSIM_SECRET: string;
    VATSIM_ISSUER: string;
    VATSIM_SCOPES: string;
  }
}
