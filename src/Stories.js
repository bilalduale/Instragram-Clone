import React from 'react';
import Story from './Story';

const Stories = () => {
  const stories = [
    {
      id: 1,
      username: 'user1',
      avatarUrl: 'https://via.placeholder.com/100',
      storyUrl: 'https://via.placeholder.com/800',
    },
    {
      id: 2,
      username: 'user2',
      avatarUrl: 'https://via.placeholder.com/100',
      storyUrl: 'https://via.placeholder.com/800',
    },
  ];

  const storiesContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px 0',
    backgroundColor: '#fff',
    borderBottom: '1px solid #dbdbdb',
    whiteSpace: 'nowrap',
  };

  const storyContainerStyle = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10px',
    cursor: 'pointer',
  };

  const avatarStyle = (avatarUrl) => ({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundImage: `url(${avatarUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '2px solid #dbdbdb',
    marginBottom: '5px',
  });

  const usernameStyle = {
    fontSize: '12px',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '70px',
  };

  return (
    <div style={storiesContainerStyle}>
      {stories.map(story => (
        <div key={story.id} style={storyContainerStyle}>
          <div style={avatarStyle(story.avatarUrl)}></div>
          <div style={usernameStyle}>{story.username}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
