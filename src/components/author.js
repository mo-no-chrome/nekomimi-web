// @flow
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

type Props = {
  data: Object
};

const Author = (props: Props) => {
  const { data } = props;
  return (
    <Wrapper>
      <Icon fixed={data.icon.childImageSharp.fixed} alt="" />
      <div>
        <Name>汐瀬 なぎ</Name>
        <Description>
          フロントエンドUXエンジニア。趣味は絵を描くこと。
        </Description>
      </div>
    </Wrapper>
  );
};

const query = graphql`
  query {
    icon: file(relativePath: { eq: "images/author.png" }) {
      childImageSharp {
        fixed(width: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default () => (
  <StaticQuery query={query} render={data => <Author data={data} />} />
);

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  border-radius: 3px;
  background-color: #eee;
`;

const Icon = styled(Img)`
  width: 64px;
  height: 64px;
  margin: 0 1rem 0 0;
  border-radius: 50%;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const Description = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
`;
