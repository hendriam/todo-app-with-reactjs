import React from "react";
import propTypes from "prop-types";

export default function Input(props) {
    const className = [props.className];
    return (
        <input
            onChange={props.onChange}
            value={props.value}
            className={className.join(" ")}
            id={props.id}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
        />
    );
}

Input.defaultProps = {
    className:
        "focus:ring-2 focus:ring-blue-500 focus:outline-none  w-full text-sm leading-6 text-slate placeholder-slate-400 rounded-md py-2 px-5 ring-2 ring-slate-200 shadow-sm",
};

Input.propTypes = {
    className: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func,
    id: propTypes.string,
    placeholder: propTypes.string,
    autoComplete: propTypes.string,
};
