// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Author from '../components/author';
import Layout from '../components/layout';

type Props = {
  data: Object
};

export default (props: Props) => {
  const { data } = props;
  const title = `${data.markdownRemark.frontmatter.title} | ${
    data.site.siteMetadata.title
  }`;
  const description = data.markdownRemark.excerpt;
  const url = `${data.site.siteMetadata.siteUrl}${
    data.markdownRemark.fields.slug
  }`;
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
      </Helmet>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <Author />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
