import React from "react";

export default function THead() {
    return (
        <thead className="text-sm font-semibold text-left bg-slate-200 ">
            <tr>
                <th className="p-3">#</th>
                <th className="p-3 ">Todo</th>
                <th className="p-3 text-right">Action</th>
            </tr>
        </thead>
    );
}
