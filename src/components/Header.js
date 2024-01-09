import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {

    const onClick = () => {
        console.log("click")
    }
    return (
        <div  className="header">
            <h1>
                {title}
            </h1>
            <Button onClick={onClick} color="green" text="Add" />
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;