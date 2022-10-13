import React from "react";
import PropTypes from "prop-types";

function Button({ children, ...props }) {
    const className = [props.className];

    const onClick = () => {
        if (props.onClick) props.onClick();
    };

    return (
        <button
            type={props.type}
            onClick={onClick}
            className={className.join(" ")}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    className:
        "bg-blue-500 hover:bg-blue-400 text-white rounded-md flex items-center py-2 px-5",
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit"]),
};

export default Button;
