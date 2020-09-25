import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../Basic Components/Button";
class Body extends Component {
  state = { text: "" };
  render() {
    return (
      <div>
        {this.props.todo.map((item) => (
          <div key={item.id}>
            <div>
              <br />
              <Button title="+" onclick={() => this.props.increment(item.id)} />
              <br />
              <Button title="-" onclick={() => this.props.decrement(item.id)} />
              <span
                className={
                  item.value === 0
                    ? "badge m-2 badge-warning"
                    : "badge m-2 badge-primary"
                }
              >
                {" "}
                Person {item.value === 0 ? "Zero" : item.value}
              </span>
              {item.editingmode === true ? (
                <input
                  className="display-none"
                  defaultValue={item.inputValue}
                  onChange={(event) =>
                    this.setState({ text: event.target.value })
                  }
                />
              ) : (
                <span>{item.inputValue}</span>
              )}
              {item.editingmode === true ? (
                <Button
                  title="Save"
                  onclick={() => this.props.onSave(item.id, this.state.text)}
                />
              ) : (
                <Button
                  title="Edit"
                  onclick={() => this.props.onEdit(item.id)}
                />
              )}
              <Button
                title="Delete"
                onclick={() => this.props.remove(item.id)}
              />
            </div>
          </div>
        ))}{" "}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => {
      dispatch({ type: "INCREMENT", id: id });
    },
    decrement: (id) => {
      dispatch({ type: "DECREMENT", id: id });
    },
    remove: (id) => {
      dispatch({ type: "DELETE", id: id });
    },
    onEdit: (id) => {
      dispatch({ type: "EDIT", id: id });
    },
    onSave: (id, text) => {
      dispatch({ type: "SAVE", id: id, text: text });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    todo: state.add,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
