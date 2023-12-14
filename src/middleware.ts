import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

// /logoutは認証を求めない
export const config = {
  matcher: ["/((?!logout).*)"],
};
