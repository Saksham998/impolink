import React from 'react';

const LinkItem = ({ link, copyLink }) => {
  const handleCopy = () => {
    copyLink(link.url);
  };

  return (
    <li>
      <span>{link.url}</span>
      <button onClick={handleCopy}>Save</button>
    </li>
  );
};

export default LinkItem;
