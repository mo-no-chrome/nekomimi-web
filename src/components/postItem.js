// @flow
import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

type Props = {
  post: Object
};

export default (props: Props) => {
  const { post } = props;
  return (
    <Link to={post.fields.slug}>
      <Wrapper>
        <Date>{post.frontmatter.date}</Date>
        <Title>{post.frontmatter.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
      </Wrapper>
    </Link>
  );
};

export const query = graphql`
  fragment postItem on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "YYYY/MM/DD")
    }
    excerpt
  }
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const Date = styled.div`
  color: #999;
  font-size: 0.8rem;
`;

const Title = styled.h3`
  margin: 0.25rem 0 0;
`;

const Excerpt = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #fb251b;
  overflow: hidden;
`;
