import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

export default function NavList() {
    return <ul className="nav-list">
        <NavItem dropdown={false} route="/" text="Home" />
        <NavItem dropdown={true} route="/company" text="About">
            <div className="dropdown-wrapper" style={{ width: "150px" }}>
                <ul className="dropdown-list">
                    <li>
                        <NavLink to="/about">
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/exhibition">
                            Exhibition
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">
                            Latest News
                        </NavLink>
                    </li>
                </ul>
            </div>
        </NavItem>
        <NavItem dropdown={true} route="/products" text="Products">
            <div className="dropdown-wrapper" style={{ width: "550px", padding: "15px" }}>
                <ul className="dropdown-list">
                    <legend>What We Manufacture</legend>
                    <li>
                        <NavLink to="/products/rotary-valves">
                            Rotary Valves
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/diverter-valves">
                            Diverter Valves
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/bin-discharger">
                            Bin Discharger
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/pneumatic-impactor">
                            Pneumatic Impactor (PI)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/relief-valve">
                            Relief Valve
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/powder-sampler">
                            Powder Sampler
                        </NavLink>
                    </li>
                </ul>
                <ul className="dropdown-list">
                    <legend>What We Represent</legend>
                    <li>
                        <NavLink to="/products/bfm">
                            BFM Fittings – NEW ZEALAND
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/jacob">
                            JACOB Pipework Components - GERMANY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/solimar-fluidizers">
                            SOLIMAR Fluidizers -USA
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/sterivalves">
                            STERIVALVES - ITALY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/morris-coupling">
                            MORRIS Coupling - USA
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/eclipse-magnetics">
                            ECLIPSE Magnetics -  UK
                        </NavLink>
                    </li>
                </ul>
            </div>
        </NavItem>
        <NavItem dropdown={false} route="/videos" text="Videos" />
        <NavItem dropdown={true} route="/services" text="Services">
            <div className="dropdown-wrapper" style={{ width: "200px" }}>
                <ul className="dropdown-list">
                    <li>
                        <NavLink to="/refurbishment_service.pdf">
                            Refurbishment Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/spare_maintenance.pdf">
                            Spare and Maintenance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/maintenance_manual.pdf">
                            Maintenance Manual
                        </NavLink>
                    </li>
                </ul>
            </div>
        </NavItem>
        <NavItem dropdown={false} route="/careers" text="Careers" />
        <NavItem dropdown={false} route="/contact" text="Contact" />
    </ul>
}