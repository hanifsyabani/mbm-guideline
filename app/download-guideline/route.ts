import { statSync, createReadStream } from "node:fs";
import { join } from "node:path";
import { Readable } from "node:stream";

export const runtime = "nodejs";

export async function GET() {
  const filePath = join(process.cwd(), "MBM GUIDELINE.docx");

  try {
    const { size } = statSync(filePath);
    const stream = Readable.toWeb(createReadStream(filePath)) as ReadableStream<Uint8Array>;

    return new Response(stream, {
      headers: {
        "Cache-Control": "no-store",
        "Content-Disposition": 'attachment; filename="MBM-Guideline.docx"',
        "Content-Length": String(size),
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
    });
  } catch {
    return new Response("Guideline source file not found.", { status: 404 });
  }
}
