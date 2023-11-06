import { Link } from "react-router-dom";

export default function Logo() {
    return (<div className="brand">
        <Link to="/"><img
            src="/images/airlock.gif"
            alt="Airlock india" /></Link>
    </div>)
}