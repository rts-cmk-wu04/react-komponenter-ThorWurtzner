import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./SmallNews.css";

export default function SmallNews() {
    var [smallNewsContent, setSmallNewsContent] = useState([]);

    useEffect(function() {
        fetch("./SmallNews/smallNews.json")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            setSmallNewsContent(data);
          })
      }, [])

    return (
        <div class="smallNews">
            {smallNewsContent.map(content =>
                 <Card  image={content.image}
                        title={content.title}
                        text={content.text}
                        color={content.color} 
                />
            )}
        </div>
    )
};