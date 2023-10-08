import { list } from "@vercel/blob";
import ts from "typescript";

export const runtime = "edge";

export async function GET(request: Request) {
  const { blobs } = await list();

  // @ts-ignore - TS doesn't know about the `Response.json` property
  return Response.json(blobs);
}
