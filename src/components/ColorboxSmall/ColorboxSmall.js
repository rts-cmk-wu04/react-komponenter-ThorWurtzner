import "./ColorboxSmall.css";

export default function colorboxSmall(props) {
    return (
        <div className="colorboxSmall" style={{ backgroundColor: props.color }}>
            <img src={props.icon} />
            <h1>{props.title}</h1>
        </div>
    )
}