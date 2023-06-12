import { FunctionComponent } from "react";
import {Outlet} from "react-router-dom"
import NavBarProps from "./NavbarPanel";

interface RootLayoutProps {

}

const RootLayout: FunctionComponent<RootLayoutProps> = () => {
    return (
        <>
            <NavBarProps/>
            <Outlet/>
        </>);
}

export default RootLayout;