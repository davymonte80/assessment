import { LayoutProps } from "@/types/navProps";
import Head from "next/head";

export default function Layout({
  children,
  navbar,
  footer,
  description,
  title
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Savannah" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
      </Head>
      <nav>{navbar}</nav>
      <main>{children}</main>
    </>
  );
}
