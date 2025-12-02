export async function GET() {
  try {
    const res = await fetch("https://therealworld.net/", {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      cache: "no-store",
    });
    const html = await res.text();
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (e: any) {
    return new Response(e?.message || "Failed to fetch remote site", {
      status: 500,
    });
  }
}
