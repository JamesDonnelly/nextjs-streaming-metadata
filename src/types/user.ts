import { UserInfo } from "firebase/auth";
import { Claims } from "next-firebase-auth-edge/lib/auth/claims";

export type AuthUser = Pick<UserInfo, "uid" | "email"> & {
  customClaims: Claims;
  token?: string;
}