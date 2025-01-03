import { useEffect, useState } from "react";
import Plane from "./components/Plane/Plane";
import AddPlaneButton from "./components/AddPlaneButton/AddPlaneButton";
import DashboardArea from "./components/DashboardArea/DashboardArea";
import DisplayArea from "./components/DisplayArea/DisplayArea";
import styles from "./ConfigurablePlanes.module.css";

export default function ConfigurablePlanes({setDocumentTitle}) {
    const [planes, setPlanes] = useState([<Plane />]);
    
    useEffect(() => {
        setDocumentTitle((curr) => `${curr} | Planes`);
    }, [setDocumentTitle]);

    return (
        <div className={styles.configurablePlanes}>
            <DashboardArea planes={planes} />
            <DisplayArea />
            <AddPlaneButton onClick={setPlanes} />
        </div>
    );
}






