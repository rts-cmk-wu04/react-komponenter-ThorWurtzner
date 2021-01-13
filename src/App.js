import './App.css';
import { useEffect, useState } from 'react';
import Colorbox from './components/Colorbox/Colorbox.js';
import Travel from './components/Travel/Travel';
import Outdoor from './components/Outdoor/Outdoor';
import Collection from "./components/Collection/Collection";
import News from './components/News/News';
import SmallNews from './components/SmallNews/SmallNews';

function App() {
  var [colorboxContent, setColorboxContent] = useState([]);
  var [collectionContent, setCollectionContent] = useState([]);

  useEffect(function() {
    fetch("./Colorbox/colorbox.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setColorboxContent(data);
      })

    fetch("./Collection/collection.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setCollectionContent(data);
    })
  }, [])

  var [newsContent, setNewsContent] = useState([]);

    useEffect(function() {
        fetch("./News/news.json")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            setNewsContent(data);
          })
      }, [])

     

  return (
    <>
      <header className="header">
        <Travel/>
        <Outdoor/>
      </header>

      <div className="colorboxContainer">
        {colorboxContent.map(content => 
           <Colorbox icon={content.icon} 
                     title={content.title} 
                     text={content.text} 
                     color={content.color} 
           />
        )}
      </div>

      <div className="collectionContainer">
        {collectionContent.map(content =>
           <Collection collection={content.collection}
                       image={content.image}
                       icon={content.icon}
                       title={content.title}
                       author={content.author} 
           />
        )}
      </div>

      <div className="newsContainer">
        <SmallNews />
        <News />
      </div>
    </>
  );
}

export default App;
