import { Component } from "react";

class TextField extends Component {
  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.props.onChange({
      ...this.props.value,
      [name]: value
    });
  };

  render() {
    const { value: user } = this.props;
    return (
      <div className="container">
        <input
          //className="form-control"
          name="firstname"
          style={{width :170,marginLeft:60,marginTop:35}}
          value={user.firstname}
          onChange={this.handleChange}
          placeholder="First Name"
          type="text"
        />
        <input
          //className="form-control"
          name="lastname"
          style={{width :170,marginLeft:0,marginTop:35}}
          value={user.lastname}
          onChange={this.handleChange}
          placeholder="Last Name"
          type="text"
        />
      </div>
    );
  }
}

export default TextField;