import { FunctionComponent } from "react";
import Product from "./Product";

interface DashboardProps {

}

const Dashboard: FunctionComponent<DashboardProps> = () => {
    return (<>
        <Product />
    </>);
}

export default Dashboard;