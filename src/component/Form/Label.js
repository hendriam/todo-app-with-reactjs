import React from "react";
import propTypes from "prop-types";

export default function Label({ children, ...props }) {
    const className = [props.className];
    return (
        <label htmlFor={props.htmlFor} className={className.join(" ")}>
            {children}
        </label>
    );
}

Label.propTypes = {
    className: propTypes.string,
    htmlFor: propTypes.string,
};
