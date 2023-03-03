import React from "react";
import "./Nav.scss";
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <Link to="/"></Link>
                <Link to="/Todos"></Link>
                <Link to="/Homes"></Link>
            </div>
        )
    }
}
export default Nav;