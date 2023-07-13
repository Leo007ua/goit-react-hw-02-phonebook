import PropTypes from 'prop-types';
import { Section } from './ContainerStyled';
import ContactForm from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

function Container({
  formAddContact,
  value,
  handleOnChangeFilter,
  filteredContact,
  contactsArray,
  onRemoveContact,
}) {
  return (
    <Section>
      <h1>PhoneBook</h1>

      <ContactForm
        formAddContact={formAddContact}
        cotactsArray={contactsArray}
      />
      <h2>Contacts</h2>
      <Filter value={value} handleOnChangeFilter={handleOnChangeFilter} />
      <Contacts
        filteredContact={filteredContact}
        onRemoveContact={onRemoveContact}
        value={value}
        handleOnChangeFilter={handleOnChangeFilter}
      />
    </Section>
  );
}

Container.propTypes = {
  formAddContact: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleOnChangeFilter: PropTypes.func.isRequired,
  contactsArray: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default Container;
