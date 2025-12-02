import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Real World - Official Portal By Andrew Tate",
  description:
    "The Real World is a global community by Andrew Tate where like-minded individuals are striving to acquire an abundance of wealth. Join today.",
  openGraph: {
    type: "website",
    title: "The Real World - Official Portal By Andrew Tate",
    description:
      "The Real World is a global community by Andrew Tate where like-minded individuals are striving to acquire an abundance of wealth. Join today.",
    images: [
      {
        url: "/framerusercontent.com/images/lVFqGPfJm0f8Q6XqNcyZnWvQUe8.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Real World - Official Portal By Andrew Tate",
    description:
      "The Real World is a global community by Andrew Tate where like-minded individuals are striving to acquire an abundance of wealth. Join today.",
    images: [
      "/framerusercontent.com/images/lVFqGPfJm0f8Q6XqNcyZnWvQUe8.webp",
    ],
  },
  icons: {
    icon: [
      {
        url: "/framerusercontent.com/images/CC8uYBLB4SmuXBtpYmFwmakhLHk.webp",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/framerusercontent.com/images/CC8uYBLB4SmuXBtpYmFwmakhLHk.webp",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#060e15] antialiased">{children}</body>
    </html>
  );
}
