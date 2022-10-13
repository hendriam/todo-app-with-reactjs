import React from "react";
import Button from "../Form/Button";

export default function TBody(props) {
    const deleteTodo = (el) => {
        props.onClick(el);
    };

    return (
        <tbody className="text-sm divide-y-2 capitalize divide-slate-200">
            {props.items.map((item, index) => (
                <tr key={item._id}>
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3 text-right">
                        <Button
                            type="button"
                            onClick={() => deleteTodo(item._id)}
                            className="bg-red-500 hover:bg-red-400 py-2 px-3 text-xs text-white font-semibold rounded-md"
                        >
                            Remove
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}
