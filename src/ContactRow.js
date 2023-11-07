import {useContext} from 'react';
import {ContactContext} from './ContactContext';

/**
 * Colonne de contact
 * @param {object} props
 * @return {jsx}
 */
function ContactRow({name, phone, email}) {
  const {setContact} = useContext(ContactContext);

  /**
   * gestionnaire d'évènement de suppression de contact
   */
  function handleClickDelete() {
    setContact((prev) => prev.filter((elt) => elt.name !== name));
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td><button type="buttont" onClick={handleClickDelete}>X</button></td>
    </tr>
  );
}

export default ContactRow;
