import PropTypes from 'prop-types';
import { FormStyled } from './FormStyled';
import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleOnChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = evt => {
    evt.preventDefault();
    const finded = this.props.contactsArr.find(contact => contact.name === this.state.name);
    if(finded){
      alert(`${this.state.name} is already in contacts`);
      return
    }    
    this.props.formAddContact(this.state);
    this.reset(evt);
  };

  reset = evt => {
    evt.target.reset();
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <>
        <FormStyled onSubmit={this.handleOnSubmit}>
          <label>
            <span>Name</span>
            <input
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            <span>Number</span>
            <input
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleOnChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </FormStyled>
      </>
    );
  }
}

Form.propTypes = {
  formAddContact: PropTypes.func.isRequired,
  contactsArr: PropTypes.array,  
};

export default Form;