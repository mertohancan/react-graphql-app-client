import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import FETCH_POSTS_QUERY from '../queries/fetch';
import PostCard from '../components/PostCard';
import { Text } from '../context/language';

const Title = styled.h1`
  font-size: 2.5em;
  color: black;
`;

const Home = () => {
  let posts = '';
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  if (data) {
    posts = { data: data.getPosts };
  }
  return (
    <Grid columns={1}>
      <Grid.Row className="page-title">
        <Title>
          <Text tid="recentPost" />
        </Title>
      </Grid.Row>

      {loading ? (
        <h1>
          <Text tid="loading" />
        </h1>
      ) : (
        posts.data &&
        posts.data.map(post => (
          <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
            <PostCard post={post} />
          </Grid.Column>
        ))
      )}
    </Grid>
  );
};

export default Home;
