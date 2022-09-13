import { Head } from "$fresh/runtime.ts";

export interface HeadMetaProps {
  title?: string;
  description?: string;
}

const HeadMeta = ({
  title = "Constant G. - Software engineer",
  description = "My new portfolio",
}: HeadMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="stylesheet" href="/styles/globals.css" />
    </Head>
  );
};

export default HeadMeta;
