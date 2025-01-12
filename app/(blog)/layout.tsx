import "../globals.css";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Link from "next/link";
import { VisualEditing } from "next-sanity";
import { PortableTextBlock } from "@portabletext/types"; // Import the required types
import CommentSection from "./comentsec/page";
import AboutPage from "./About/page";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata() {
  const settings = await sanityFetch({
    query: settingsQuery,
    stega: false,
  });

  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;

  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore if URL parsing fails
  }

  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description?.[0]?.children?.[0]?.text || demo.description,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await sanityFetch({ query: settingsQuery });
  const footer = (data?.footer || []) as PortableTextBlock[]; // Explicitly cast to PortableTextBlock[]
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#ead4d4] text-[#555A54]`}>
        <AlertBanner />
        <main className="min-h-screen">{children}</main>

        <footer className="bg-accent-1 border-accent-2 border-t">
          <div className="container mx-auto px-5">
            {footer.length > 0 ? (
              <PortableText
                className="prose-sm text-pretty bottom-0 w-full max-w-none bg-white py-12 text-center md:py-20"
                value={footer}
              />
            ) : (
              <div className="flex flex-col items-center py-28 lg:flex-row">
                <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
                  Thanks for visiting.
                </h3>
                <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
                  <Link
                    href="/"
                    className="mx-3 mb-6 border border-[#555A54] bg-[#ead4d4] py-3 px-12 font-bold text-[#555A54] transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        </footer>

        {isDraftMode && <VisualEditing />}
        <CommentSection />
        <AboutPage />
      </body>
    </html>
  );
}