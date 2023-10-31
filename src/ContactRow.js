/**
 * Colonne de contact
 * @param {object} props
 * @return {jsx}
 */
function ContactRow(props) {
  const {name, phone, email} = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
}

export default ContactRow;
