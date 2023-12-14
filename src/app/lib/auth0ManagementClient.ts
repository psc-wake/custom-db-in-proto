import "server-only";
import { ManagementClient } from "auth0";
import { env } from "@/env.mjs";

const domain = new URL(env.AUTH0_ISSUER_BASE_URL).hostname;

export const managementClient = new ManagementClient({
  domain,
  clientId: env.AUTH0_API_CLIENT_ID,
  clientSecret: env.AUTH0_API_CLIENT_SECRET,
});
