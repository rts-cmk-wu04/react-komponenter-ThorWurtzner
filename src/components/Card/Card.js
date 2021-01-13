import "./Card.css";

export default function Card(props) {
    return (
        <article class="card">
            <img src={props.image} />
            <div>
                <h1 style={{ color:props.color }}>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </article>
    )
}