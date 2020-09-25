import React, { Component } from "react";
import Input from "./Basic Components/Input";
import Button from "./Basic Components/Button";
import { connect } from "react-redux";
import Body from "./components/Body";
import Navbar from "./components/Navber";

class App extends Component {
  state = { date: new Date().toLocaleDateString(), curtime: new Date() };
  timedate() {
    setInterval(() => {
      this.setState({ curtime: new Date() });
    }, 1000);
  }
  render() {
    return (
      <div>
        {/* <Navbar label="Enter Task" /> */}
        <nav className="navbar navbar-light bg-light">
          Enter Task
          <Input
            title="Enter Task"
            onChangeText={(e) => this.props.handlechange(e.target)}
          />
          <Button
            title="Add Task"
            onclick={() => this.props.add(this.props.input)}
          />
          <Button
            title="Reset Number of People"
            onclick={() => this.props.reset()}
          />
          <span className="btn btn-danger btn-sm" style={{ fontSize: 12 }}>
            {this.state.date} {this.state.curtime.toLocaleTimeString()}
            {this.timedate()}
          </span>
        </nav>
        <Body />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlechange: (target) => {
      dispatch({ type: "SET_INPUT", value: target.value });
    },
    add: (input) => {
      console.log("Hello");
      let obj = {};

      let inputValue = input;
      let id = Date.now();
      let editindmode = false;
      let value = 0;
      let text = "";
      obj = { inputValue, id, editindmode, value, text };
      console.log(obj);
      dispatch({ type: "ADD_INPUT", value: obj });
    },
    reset: () => {
      dispatch({ type: "RESET" });
    },
  };
};

const mapStateToProps = (state) => {
  return { input: state.input };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
