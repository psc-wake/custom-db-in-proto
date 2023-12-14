import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH0_SECRET: z.string().min(1),
    AUTH0_BASE_URL: z.string().url(),
    AUTH0_ISSUER_BASE_URL: z.string().url(),
    AUTH0_CLIENT_ID: z.string().min(1),
    AUTH0_CLIENT_SECRET: z.string().min(1),
    AUTH0_API_CLIENT_ID: z.string().min(1),
    AUTH0_API_CLIENT_SECRET: z.string().min(1),
    AUTH0_AUDIENCE: z.string().min(1),
    AUTH0_SCOPE: z.string().min(1),
  },
  client: {
  },
  runtimeEnv: {
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_API_CLIENT_ID: process.env.AUTH0_API_CLIENT_ID,
    AUTH0_API_CLIENT_SECRET: process.env.AUTH0_API_CLIENT_SECRET,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
  },
});
