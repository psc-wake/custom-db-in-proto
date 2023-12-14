import {
  handleAuth,
  handleLogin,
  AppRouteHandlerFnContext,
} from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

export const GET = handleAuth({
  login: (req: NextRequest, ctx: AppRouteHandlerFnContext) => {
    const orgId = new URL(req.url).searchParams.get("org_id");
    const authorizationParams: { [key: string]: string } = {};
    if (orgId) {
      authorizationParams.organization = orgId;
    }
    return handleLogin(req, ctx, { authorizationParams });
  },
});
