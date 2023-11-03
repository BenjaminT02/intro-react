import ContactRow from './ContactRow';


/**
 * Contact table
 * @return {HTMLElement} contactTable
 */
function ContactTable({contact}) {
  /**
 * Table de contact
 * @return {jsx}
 */
  const jsxData = contact.map((elt, index) => (
    <ContactRow
      key={index}
      name={elt.name}
      phone={elt.phone}
      email={elt.email} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {jsxData}
      </tbody>
    </table>
  );
}

export default ContactTable;
