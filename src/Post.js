import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegHeart, FaComment, FaPaperPlane } from 'react-icons/fa';

const PostContainer = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  width: 600px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;
`;

const Username = styled.div`
  font-weight: bold;
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostFooter = styled.div`
  padding: 10px;
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
`;

const Icon = styled.div`
  cursor: pointer;
  font-size: 24px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

const Likes = styled.div`
  font-weight: bold;
  margin: 10px 0;
`;

const Caption = styled.div`
  margin-bottom: 5px;
`;

const CommentsSection = styled.div`
  margin-top: 10px;
  border-top: 1px solid #efefef;
  padding-top: 10px;
`;

const Comment = styled.div`
  margin-bottom: 5px;
`;

const CommentUser = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const ToggleCommentsButton = styled.button`
  background: none;
  border: none;
  color: #3897f0;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
`;

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const toggleComments = () => setShowComments(!showComments);

  return (
    <PostContainer>
      <PostHeader>
        <Avatar />
        <Username>{post.username}</Username>
      </PostHeader>
      <PostImage src={post.imageUrl} alt="Post" />
      <PostFooter>
        <PostActions>
          <Icon onClick={toggleLike}>
            {liked ? <FaHeart color="red" /> : <FaRegHeart />}
          </Icon>
          <Icon>
            <FaComment />
          </Icon>
          <Icon>
            <FaPaperPlane />
          </Icon>
        </PostActions>
        <Likes>{liked ? post.likes + 1 : post.likes} likes</Likes>
        <Caption>
          <b>{post.username}</b> {post.caption}
        </Caption>
        <CommentsSection>
          <ToggleCommentsButton onClick={toggleComments}>
            {showComments ? 'Hide' : 'View'} all {post.comments.length} comments
          </ToggleCommentsButton>
          {showComments &&
            post.comments.map((comment, index) => (
              <Comment key={index}>
                <CommentUser>{comment.username}</CommentUser>
                {comment.text}
              </Comment>
            ))}
        </CommentsSection>
      </PostFooter>
    </PostContainer>
  );
};

export default Post;
