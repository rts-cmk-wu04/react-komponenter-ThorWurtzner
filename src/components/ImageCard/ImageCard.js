import "./ImageCard.css";

export default function ImageCard(props) {
    return (
        <article className="imageCard">
            <img src={props.image} />
            <h1 style={{ color: props.color }}>{props.title}</h1>
            <p>{props.text}</p>
        </article>
    );
}