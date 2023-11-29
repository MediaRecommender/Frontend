import { Outlet } from "react-router-dom"
import TopBar from "./TopBar"

function MainApp() {
    return (
        <>
            <TopBar/>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default MainApp