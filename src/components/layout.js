// @flow
import React, { type Node } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Ogp from './ogp';

type Props = {
  data: Object,
  children: Node
};

const Layout = (props: Props) => {
  const { data, children } = props;
  return (
    <Wrapper>
      <Ogp />
      <Header>
        <h1>{data.site.siteMetadata.title}</h1>
        <LinkList>
          <LinkItem>
            <Link to="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/about">About</Link>
          </LinkItem>
        </LinkList>
      </Header>
      <main>{children}</main>
    </Wrapper>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1070px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default ({ children }: { children: Node }) => (
  <StaticQuery
    query={query}
    render={data => <Layout data={data}>{children}</Layout>}
  />
);
