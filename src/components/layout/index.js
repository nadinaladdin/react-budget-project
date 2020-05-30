import React from 'react'
import Navigation from "./navigation";

const Layout  = (props) => {
    return (
        <div className="layout">
            <div className="container">
                <div className="side-menu">
                    <Navigation/>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Layout;