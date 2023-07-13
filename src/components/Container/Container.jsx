import PropTypes from 'prop-types';

import { Section } from './ContainerStyled';


function Container({
    formAddContact,
    value,
    handleOnChangeFilter,
    contactsArray,
    onRemoveContact,
}) {
    return (
        <Section>
            <h1>PhoneBook</h1>

            <ContactForm fotmAddContact = {formAddContact}
            cotactsArray = {contactsArray}
            />
            <h2>Contacts</h2>
            <Filter value = {value}
            handleOnChangeFilter = {handleOnChangeFilter}
            />
        </Section>
    )
}

Container.propTypes = {
    formAddContact: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleOnChangeFilter: PropTypes.func.isRequired,
    contactsArray: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
};

export default Container;