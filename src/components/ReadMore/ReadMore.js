import "./ReadMore.css";

export default function ReadMore(props) {
    return (
        <div className="readMore">
            <div>
                <img src="./ReadMore/icon.png" />
                <h2>THE NEW YORK TIMES</h2>
            </div>
            <p style={{color: props.textColor}}>{props.text}</p>
            <button style={{color: props.color, border: props.border}}>READ MORE</button>
        </div>
    )
}