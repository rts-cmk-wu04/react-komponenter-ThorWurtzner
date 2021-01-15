import './App.css';
import { useEffect, useState } from 'react';
import Colorbox from './components/Colorbox/Colorbox.js';
import Travel from './components/Travel/Travel';
import Outdoor from './components/Outdoor/Outdoor';
import Collection from "./components/Collection/Collection";
import News from './components/News/News';
import SmallNews from './components/SmallNews/SmallNews';
import Slider from './components/Slider/Slider';
import ImageCard from './components/ImageCard/ImageCard';
import Vr from './components/Vr/Vr';
import ColorboxSmall from './components/ColorboxSmall/ColorboxSmall';
import Digest from './components/Digest/Digest';
import ReadMore from './components/ReadMore/ReadMore';

function App() {
  var [colorboxContent, setColorboxContent] = useState([]);
  var [collectionContent, setCollectionContent] = useState([]);
  var [newsContent, setNewsContent] = useState([]);
  var [newsCardsContent, setNewsCardsContent] = useState([]);
  var [newsCardsBottomContent, setNewsCardsBottomContent] = useState([]);
  var [colorboxSmallContent, setColorboxSmallContent] = useState([]);
  var [digestContent, setDigestContent] = useState([]);
  var [readMoreContent, setReadMoreContent] = useState([]);

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

    fetch("./News/news.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setNewsContent(data);
      })

    fetch("./NewsCards/newsCards.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setNewsCardsContent(data);
      })

      fetch("./NewsCardsBottom/newsCardsBottom.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setNewsCardsBottomContent(data);
      })

      fetch("./ColorboxSmall/colorboxSmall.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setColorboxSmallContent(data);
      })

      fetch("./Digest/digest.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setDigestContent(data);
      })
      
      fetch("./ReadMore/readMore.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setReadMoreContent(data);
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
        <div>
          <Slider />
          <SmallNews />
          <div className="newsContainerCards">
            {newsCardsContent.map(content => 
              <ImageCard image={content.image}
                         title={content.title}
                         text={content.text}
                         color={content.color}
              />
            )}
          </div>
        </div>
        <News />
      </div>

      <section className="bottom">
        <div>
          {newsCardsBottomContent.map(content => 
              <ImageCard image={content.image}
                         title={content.title}
                         text={content.text}
                         color={content.color}
              />
            )}
          <Vr />
          <section className="smallCardContainer">
            {colorboxSmallContent.map(content => 
              <ColorboxSmall icon={content.icon}
                             title={content.title} 
                             color={content.color}
              />
            )}
          </section>
        </div>
        <div className="newsDigest">
          <header>
            <h1>NEWS DIGEST</h1>
          </header>
          <section>
            {digestContent.map(content => 
              <Digest color={content.color}
                      number={content.number}
                      title={content.title}
                      text={content.text}
                      border={content.border}
              />
            )}
          </section>
        </div>
        <div>
          {readMoreContent.map(content =>
            <ReadMore color={content.color}
                      border={content.border}
                      textColor={content.textColor}
                      text={content.text}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default App;
