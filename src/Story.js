import React from 'react';

const Story = ({ story }) => {
  const storyContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10px',
    cursor: 'pointer',
  };

  const avatarStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundImage: `url(${story.avatarUrl})`,
    backgroundSize: 'cover',
    border: '2px solid #dbdbdb',
    marginBottom: '5px',
  };

  const usernameStyle = {
    fontSize: '12px',
  };

  const handleClick = () => {
    console.log(`Viewing story of ${story.username}`);
  };

  return (
    <div style={storyContainerStyle} onClick={handleClick}>
      <div style={avatarStyle}></div>
      <div style={usernameStyle}>{story.username}</div>
    </div>
  );
};

export default Story;
