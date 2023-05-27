import React from 'react';
import './LinkList.css';
import { FiLink } from 'react-icons/fi';
import Button from '@mui/material/Button';

const LinkList = ({ links, copyLink, removeLink }) => {
  return (
    <div>
      {links.map((link) => (
        <div key={link} className="link-item">
          <span className="link-icon"><FiLink /></span>
          <span className="link-url">{link}</span>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{ minWidth: '15px', height: '30px', marginRight: '10px' }}
            onClick={() => copyLink(link)}
          >
            Copy
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            style={{ minWidth: '15px', height: '30px' }}
            onClick={() => removeLink(link)}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default LinkList;