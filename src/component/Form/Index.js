import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    handleSubmit(e) {
        this.props.onSubmit(e);
    }

    render() {
        return (
            <div className="">
                <h3 className="font-bold text-lg mb-5">Todo</h3>
                <form
                    onSubmit={this.handleSubmit}
                    className="group relative space-y-3"
                >
                    <Label htmlFor="new-todo" className="">
                        What needs to be done?
                    </Label>
                    <Input
                        id="new-todo"
                        // name={this.props.input}
                        onChange={this.handleChange}
                        value={this.props.input}
                        placeholder="Enter your task"
                        autoComplete="off"
                    />
                    <Button type="submit">Add</Button>
                </form>
            </div>
        );
    }
}
