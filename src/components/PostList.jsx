import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { usePosts } from '../hooks/blogs';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const PostList = (props) => {
  const classes = useStyles();

  const { userId } = props;

  const posts = usePosts(userId);
  console.log({ posts });

  const renderPostItems = () => {
    if (posts === undefined) return '投稿を取得中...';
    if (!posts || !posts.length) return <p>投稿はまだありません</p>;

    return posts.map((post) => (
      <React.Fragment key={post.id}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt={post.userId} />
          </ListItemAvatar>
          <ListItemText
            primary={post.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {post.userId}
                </Typography>
                {post.body}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    ));
  };

  return (
    <List className={classes.root}>
      <h2>
        {!userId || !userId.length
          ? `ユーザーIDを指定してください。`
          : `ユーザID ${userId} さんの投稿。`}
      </h2>
      {renderPostItems()}
    </List>
  );
};

export default PostList;
