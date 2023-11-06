import { Outlet } from "react-router-dom";
import MainNav from "../components/Navigation/MainNav";
import MainFooter from "../components/Footer/MainFooter";

export default function RootLayout() {
    return <>
        <header>
            <MainNav />
        </header>
        <main>
            <Outlet />
            <div className="gcse-searchresults-only"></div>
        </main>
        <MainFooter />
    </>
}