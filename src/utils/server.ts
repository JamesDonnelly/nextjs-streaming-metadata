import { serverConfig } from "@/contexts/Auth/config/server";
import { AuthUser } from "@/types/user";
import { getTokens } from "next-firebase-auth-edge";
import { Claims, filterStandardClaims } from "next-firebase-auth-edge/lib/auth/claims";
import { cookies } from "next/headers";
import { DecodedIdToken } from 'next-firebase-auth-edge/lib/auth/types';

export const getUserTokens = async () => (
  await getTokens(await cookies(), {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    cookieName: 'AuthToken',
    cookieSignatureKeys: [process.env.COOKIE_SECRET_CURRENT],
    serviceAccount: serverConfig,
  })
)

export const getUserClaims = async (customDecodedToken?: DecodedIdToken): Promise<Claims> => {
  if (customDecodedToken) {
    return filterStandardClaims(customDecodedToken);
  }

  const tokens = await getUserTokens();
  return filterStandardClaims(tokens?.decodedToken);
}

export const getUser = async (customDecodedToken?: DecodedIdToken): Promise<AuthUser | null> => {
  let decodedToken = customDecodedToken;
  const tokens = await getUserTokens();

  if (!decodedToken) {
    if (!tokens) {
      return null;
    }

    decodedToken = tokens.decodedToken;
  }

  const {
    uid,
    email,
  } = decodedToken;

  const customClaims = filterStandardClaims(decodedToken);
 
  return {
    email: email ?? null,
    customClaims,
    token: tokens?.token,
    uid,
  };
};