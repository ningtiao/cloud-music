import React from 'react';
import { renderRoutes } from "react-router-config";
function Home (props) {
    const { route } = props;
    console.log(route,'routeroute')
    return (
        <div>
            <div>home</div>
            { renderRoutes (route.routes) }
        </div>
    )
}
export default React.memo(Home);