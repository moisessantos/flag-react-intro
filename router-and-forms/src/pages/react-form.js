import React from "react";

export default class ReactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      name: "",
      backgroundColor: "grey"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputName, { target }) {
    const newValue = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [inputName]: newValue,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    //chamada a uma API
    // fetch("/submit-form", this.state)
    //   .then(resp => resp.json())
    //   .then(() => {
    //     this.setState({ success: true, backgroundColor: "green" })
    //   })
    //   .catch(() => {
    //     this.setState({ success: false, backgroundColor: "red" })
    //   })

    const success = false;
    this.setState({
      success,
      backgroundColor: "red"
    });
  }

  render() {
    return (
      <>
        <h1>ReactForm</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Household name: </label>
          <input
            type="text"
            value={this.state.name}
            placeholder="Santos"
            onChange={(e) => this.handleChange("name", e)}
          />
          <label>Number of guests:</label>
          <input
            name="NumberOfGuests"
            type="number"
            placeholder="0"
            value={this.state.numberOfGuests}
            onChange={(e) => this.handleChange("numberOfGuests", e)}
          />
          <label>Are you going?</label>
          <input
            name="IsGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={(e) => this.handleChange("isGoing", e)}
          />
          <br />
          <input
            type="submit"
            value={this.state.success ? "Enviado" : "Enviar"}
            disabled={this.state.success}
            style={{ backgroundColor: this.state.backgroundColor }}
          />
        </form>
      </>
    );
  }
}
