import {navigationList} from "../../routes/navigationList.ts";
import {Link, Outlet} from "react-router-dom";

export function Layout() {

    return (
        <div className="container">
            <div className='content'>
                {navigationList.map(item => {
                    return (<Link key={item.path} to={item.path}>{item.title}</Link>)
                })}
                <Outlet/>
            </div>
        </div>
    )
}