// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

// クエリ結果はprops.dataとして渡されます
type Props = {
  data: Object
};

export default (props: Props) => {
  const { data } = props;
  return (
    <Layout>
      <h1>{`About ${data.site.siteMetadata.title}`}</h1>
      <p>ネコミミのネコミミによるネコミミのためのページ！</p>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
