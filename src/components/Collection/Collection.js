import "./Collection.css";

export default function Collection(props) {
    return (
        <article className="collection">
            <img className="image" src={props.image} />
            <h2>{props.collection}</h2>
            <section>
                <img src={props.icon} />
                <h1>{props.title}</h1>
                <p>{props.author}</p>
            </section>
        </article>
    );
}