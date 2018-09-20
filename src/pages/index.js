// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/postList';

type Props = {
  data: Object
};

export default (props: Props) => {
  const { data } = props;
  return (
    <Layout>
      <PostList posts={data.allMarkdownRemark.posts} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      posts: edges {
        ...postList
      }
    }
  }
`;
