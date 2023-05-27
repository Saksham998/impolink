import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LinkForm = ({ addLink }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() !== '') {
      addLink(url);
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
      <TextField
        label="Enter Link URL"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        fullWidth
        style={{ marginRight: '10px' }}
      />
      <Button type="submit" variant="outlined" color="success" size="small" style={{ minWidth: '80px' }}>
        Save
      </Button>
    </form>
  );
};

export default LinkForm;
