import PropTypes from 'prop-types';
import { Component } from 'react';
import { ContactFormStyled } from './ContactFormStyled';

const IN_STATE = {
    name: '',
    number: '',
  };

  class ContactForm extends Component {
    state = {
        ...IN_STATE,
    };

    handleOnChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const finder = this.props.contactArray.find(contact.name === this.state.name);
        if(finded){
            alert(`${this.state.name} is already in contacts`);
            return
        }
        this.props.formAddContact(this.state);
        this.reset(event);
    };

    reset = event => {
        event.target.reset();
        this.setState({...IN_STATE});
    };

    render(){
        return (
            <>
            <ContactFormStyled onSubmit = {this.handleOnSubmit}>
                <label>
                    <span>Name</span>
                    <input
                    value={this.state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange = {this.handleOnChange}
                    />
                </label>
                <label>
                    <span>Number</span>
                    <input 
                    value = {this.state.number}
                    type = "tel"
                    name = "number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange = {this.handleOnChange}
                    />
                </label>

                <button type='submit'>Add contact</button>
                </ContactFormStyled>
            </>
        )
    }
  }