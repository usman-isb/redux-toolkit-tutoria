import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom"
import NavBar from "./NavbarPanel";
import { Provider } from "react-redux";
import store from "../store/store";


interface RootLayoutProps {

}

const RootLayout: FunctionComponent<RootLayoutProps> = () => {
    return (
        <>
            <Provider store={store}>
                <NavBar />
                <main>
                    <Outlet />
                </main>
            </Provider>

        </>);
}

export default RootLayout;