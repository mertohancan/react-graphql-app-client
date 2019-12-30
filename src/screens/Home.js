
import React, {useState} from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Grid, Divider } from 'semantic-ui-react'

import PostCard from '../components/PostCard'










function Home() {
  let posts = '';
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  
  
  

  if (data) {
    console.log(loading)
    posts = { data: data.getPosts }
    
  }
  return (
    <Grid columns={1}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
    
      {loading ? (
        
        <h1>Loading posts..</h1>
      ) : 
      
      (
   
        posts.data &&
        posts.data.map(post => (
          <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
            <PostCard post={post} />
          </Grid.Column>
        ))
      )}

    </Grid>
  )
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`

export default Home;