import { promises as fs } from "fs";
import path from "path";

function rewriteToLocal(html: string) {
  let out = html;
  const map: Array<[RegExp, string]> = [
    [/https:\/\/framerusercontent\.com/gi, "/framerusercontent.com"],
    [/https:\/\/framer\.com/gi, "/framer.com"],
    [/https:\/\/app\.framerstatic\.com/gi, "/app.framerstatic.com"],
    [/https:\/\/fonts\.gstatic\.com/gi, "/fonts.gstatic.com"],
    [/\/\/code\.tidio\.co/gi, "/code.tidio.co"],
    [/https:\/\/player\.vimeo\.com/gi, "/player.vimeo.com"],
    [/https:\/\/i\.vimeocdn\.com/gi, "/i.vimeocdn.com"],
    [/https:\/\/f\.vimeocdn\.com/gi, "/f.vimeocdn.com"],
  ];
  for (const [re, to] of map) out = out.replace(re, to);
  out = out.replace(/<script[^>]*events\.framer[^>]*><\/script>/gi, "");
  out = out.replace(
    /<noscript>[\s\S]*googletagmanager[\s\S]*<\/noscript>/gi,
    ""
  );
  out = out.replace(
    /<script>[\s\S]*googletagmanager[\s\S]*<\/script>/gi,
    ""
  );
  return out;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const mode = url.searchParams.get("mode");
    const preferRaw = mode === "raw";

    const staticPath = path.resolve(process.cwd(), "public", "site-static");
    let html: string;
    let fromStatic = false;
    try {
      html = await fs.readFile(staticPath, "utf8");
      fromStatic = true;
    } catch {
      const exported = path.resolve(process.cwd(), "..", "therealworld.net", "index.html");
      html = await fs.readFile(exported, "utf8");
    }

    const body = preferRaw || fromStatic ? html : rewriteToLocal(html);
    return new Response(body, {
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
    });
  } catch (e: any) {
    return new Response(e?.message || "Failed to load", { status: 500 });
  }
}
