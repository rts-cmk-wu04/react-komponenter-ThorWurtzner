import "./Travel.css";

// kunne også skrive props.image, props.title osv
export default function Travel(props) {
    return (
        <article className="travel">
            <img src="./Travel/travel.png" />
            <div>
                <h5>TRAVEL</h5>
                <h1>Surfing in Maldives</h1>
                <p>It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
            </div>
        </article>
    )
}