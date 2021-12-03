import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ wasSucessfull: true })

    // fetch("/submit-form", {...this.state })
    //   .then(resp => resp.json())
    //   .then(() => {
    //     this.setState({ wasSucessfull: true })
    //   })
    //   .catch(() => {
    //     this.setState({ wasSucessfull: false })
    //   })
  }

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" />
        {this.state.wasSucessfull !== undefined && <p style={{ color: this.state.wasSucessfull ? "green" : "red" }}>Your request was {this.state.wasSucessfull ? "sucessfull" : "unsucessfull"}</p>}
      </form>
    );
  }
}

export default FormComponent;