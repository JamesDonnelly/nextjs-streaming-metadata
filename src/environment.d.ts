declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COOKIE_SECRET_CURRENT: string;
      FIREBASE_PRIVATE_KEY: string;
      NEXT_PUBLIC_FIREBASE_API_KEY: string;
      NEXT_PUBLIC_FIREBASE_APP_ID: string;
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
      NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL: string;
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    }
  }
}

export {}