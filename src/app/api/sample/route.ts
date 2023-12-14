import { managementClient } from "@/app/lib/auth0ManagementClient";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const users = await managementClient.users.getAll();
  return new Response(JSON.stringify(users));
}

export async function POST(request: Request) {
  const payload = await request.json();
  return new Response(JSON.stringify(payload));
}
