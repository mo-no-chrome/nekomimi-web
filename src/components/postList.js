// @flow
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PostItem from './postItem';

type Props = {
  posts: Array<Object>
};

export default (props: Props) => {
  const { posts } = props;
  return (
    <List>
      {posts.map(({ post }) => (
        <ListItem key={post.id}>
          <PostItem post={post} />
        </ListItem>
      ))}
    </List>
  );
};

export const query = graphql`
  fragment postList on MarkdownRemarkEdge {
    post: node {
      id
      ...postItem
    }
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0 0 1.5rem;
`;
