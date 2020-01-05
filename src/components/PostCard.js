import React from 'react';
import { Card, Icon, Image, Label, Button } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import posed from 'react-pose';
import PropTypes from 'prop-types';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  draggable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.025,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
});

const PostCard = ({ post: { body, createdAt, id, username, likeCount, commentCount } }) => (
  <Box>
    <Card style={{ margin: 5 }} fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>

      <Card.Content extra style={{ flexDirection: 'row' }}>
        <Button as="div" labelPosition="right">
          <Button color="blue">
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            {likeCount}
          </Label>
        </Button>

        <Button as="div" labelPosition="right" style={{ marginLeft: 5 }}>
          <Button color="blue">
            <Icon name="comments" />
            Comment
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  </Box>
);

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    username: PropTypes.string,
    likeCount: PropTypes.number,
    commentCount: PropTypes.number,
    likes: PropTypes.array,
  }),
};

PostCard.defaultProps = {
  post: 'Naber?',
};

export default PostCard;
