import { Button, Item, TextName } from './ListItem.styled';
import PropTypes from 'prop-types';

export const ListItem = ({
  contactName,
  contactId,
  contactNumber,
  onDeleteContact,
}) => {
  return (
    <Item>
      <TextName>{contactName}: </TextName>
      <p>{contactNumber}</p>
      <Button type="button" onClick={() => onDeleteContact(contactId)}>
        Delete
      </Button>
    </Item>
  );
};

ListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
