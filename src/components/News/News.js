import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./News.css";

export default function News() {
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
          <article className="news">
            <header>
              <h1>LATEST NEWS</h1>
            </header>
            {newsContent.map(content => 
              <Card image={content.image} 
                      title={content.title} 
                      text={content.text} 
                      color={content.color} 
              />
            )}
            <footer>
              <h2>MORE NEWS</h2>
            </footer>
          </article>
        </>
    );
}