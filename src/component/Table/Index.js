import React from "react";
import TBody from "./TBody";
import THead from "./THead";

export default function Table(props) {
    return (
        <div className="">
            <h3 className="font-bold text-lg mb-5">List </h3>
            <table className="table-auto w-full border-collapse border border-slate-200 rounded-">
                <THead />
                <TBody items={props.items} onClick={props.onClick} />
            </table>
        </div>
    );
}
