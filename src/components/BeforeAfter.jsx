import { useState } from "react"
import PropTypes from 'prop-types';

export default function BeforeAfter({ beforeImg, afterImg }) {
    const [sliderValue, setSliderValue] = useState(50)

    function moveDivisor(e) {
        setSliderValue(e.target.value)
    }

    return <>
        <div id="comparison">
            <figure style={{ backgroundImage: `url(${beforeImg})` }}>
                <div id="divisor" style={{ width: `${sliderValue}%`, backgroundImage: `url(${afterImg})` }}></div>
            </figure>
            <input type="range" min="0" max="100" value={sliderValue} id="slider" onChange={moveDivisor} />
        </div>
    </>
}

BeforeAfter.propTypes = {
    beforeImg: PropTypes.string,
    afterImg: PropTypes.string,
}