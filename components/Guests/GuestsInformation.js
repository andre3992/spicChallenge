import React, { Component } from "react";
import axios from "../../axios";

export default class guests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }
  getUsersData() {
    axios
      .get(`/users`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    return <div></div>;
  }
}
