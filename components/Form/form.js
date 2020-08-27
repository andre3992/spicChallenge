import React from "react";
import Button from "react-bootstrap/Button";

export default function Form(props) {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    country: "",
    town: "",
    address: "",
    company: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  return (
    <form className="form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="number"
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          name="birthday"
          value={state.birthday}
          onChange={handleChange}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={state.country}
          onChange={handleChange}
        />
      </label>
      <label>
        Town:
        <input
          type="text"
          name="town"
          value={state.town}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={state.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={state.company}
          onChange={handleChange}
        />
      </label>
      <div onClick={() => props.getDatas(state)} className="buttonSave">
        Save
      </div>
    </form>
  );
}
