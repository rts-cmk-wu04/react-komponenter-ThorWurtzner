import "./Colorbox.css"

function Colorbox(props) {
    return (
        <div style={{backgroundColor: props.color}} className="colorbox">
            <img src={props.icon}></img>
            <div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Colorbox;