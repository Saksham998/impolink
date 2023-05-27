import React, { useState, useEffect } from 'react';
import './App.css';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';


const App = () => {
  const [links, setLinks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLinks = localStorage.getItem('links');
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  const addLink = (newLink) => {
    setLinks([...links, newLink]);
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying link to clipboard:', error);
      });
  };
  

  const removeLink = (linkUrl) => {
    const updatedLinks = links.filter((link) => link !== linkUrl);
    setLinks(updatedLinks);
  };
  

  return (
    <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
      <div>
        <h1 className="app-heading">Link Saver.</h1>
        <LinkForm addLink={addLink} />
        <LinkList links={links} copyLink={copyLink} removeLink={removeLink} />
      </div>
    </div>
  );
  


};

export default App;