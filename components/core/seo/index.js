import Head from "next/head";

export default function SEO({
  title = "Blog",
  description = "Blog for developers",
  favicon = "favicon.ico",
  lang = "es",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={favicon} />
      <meta property="og:url" content={`https://${lang}`} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
    </Head>
  );
}