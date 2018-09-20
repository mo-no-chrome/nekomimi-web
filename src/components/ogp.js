// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

type Props = {
  data: Object
};

const Ogp = (props: Props) => {
  const { data } = props;
  const { title, siteUrl, description } = data.site.siteMetadata;
  // staticディレクトリから直接参照します
  const image = `${siteUrl}/ogp.png`;
  return (
    <Helmet>
      <html lang="ja" prefix="og: http://ogp.me/ns#" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;

export default () => (
  <StaticQuery query={query} render={data => <Ogp data={data} />} />
);
