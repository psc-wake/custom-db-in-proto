export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const json = { id: params.id };
  return new Response(JSON.stringify(json));
}
