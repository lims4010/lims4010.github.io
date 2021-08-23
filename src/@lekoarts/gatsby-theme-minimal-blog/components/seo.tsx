import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import useSiteMetadata from "@components/../hooks/use-site-metadata";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
  canonicalUrl?: string;
};

const SEO = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
  canonicalUrl = ``,
}: SEOProps) => {
  const site = useSiteMetadata();

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-minimal-blog" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix(`/favicon-32x32.png?`)}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix(`/favicon-16x16.png?`)}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix(`/apple-touch-icon.png?`)}
      />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {children}
    </Helmet>
  );
};

export default SEO;
