import "./Digest.css";

export default function Digest(props) {
    return (
        <div className="digest" style={{ borderBottom: props.border }}>
            <div style={{ backgroundColor: props.color }}>
                <p>{props.number}</p>
            </div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}