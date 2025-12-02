"use client";
import { useEffect } from "react";

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

export default function Page() {
  useEffect(() => {
    window.location.replace("/clone");
  }, []);
  return <div className="text-white p-6">Loading…</div>;
}
