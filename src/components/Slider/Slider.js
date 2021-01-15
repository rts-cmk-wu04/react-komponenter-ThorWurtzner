import "./Slider.css";

export default function Slider() {
    return (
        <div className="slider">
            <img className="background" src="./Slider/image1.png" />
            <div className="sliderTop">
                <div>
                    <img src="./Slider/logo.png" />
                    <h3>THE NEW YORK TIMES</h3>
                </div>
                <img className="sliderLogo" src="./Slider/heart.png" />
            </div>
            <div>
                <div className="sliderContent">
                    <h1>Must see places for summer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam</p>
                </div>
                <div className="sliderRange">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}