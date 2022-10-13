import React, { Component } from "react";
import axios from "axios";
import Form from "./component/Form/Index";
import Table from "./component/Table/Index";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: "",
            isLoadSubmit: false,
            msgSubmit: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
    }

    handleChange(input) {
        this.setState({ text: input });
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:4000/todo/create",
                {
                    name: this.state.text,
                }
            );
            const result = await response.data;
            console.log(result);
            this.setState({ text: "" });
            this.getData();
        } catch (error) {
            console.error(error);
        }
    }

    async handleOnDelete(id) {
        try {
            const response = await axios.delete(
                `http://localhost:4000/todo/delete/${id}`
            );
            const result = await response.data;
            console.log(result);
            this.getData();
        } catch (error) {
            console.error(error);
        }
    }

    async getData() {
        try {
            const response = await axios.get("http://localhost:4000/todo");
            const result = await response.data.data;
            this.setState({ items: result });
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="max-w-lg mx-auto my-10 flex flex-col gap-4">
                <Form
                    input={this.state.text}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
                <Table items={this.state.items} onClick={this.handleOnDelete} />
            </div>
        );
    }
}
