import ContactRow from './ContactRow';

/**
 * Table de contacte
 * @return {jsx}
 */
function ContactTable() {
  const data = [
    {
      name: 'Tom Jackson',
      phone: '555-444-333',
      email: 'tom@gmail.com',
    },
    {
      name: 'Mike James',
      phone: '555-777-888',
      email: 'mikejames@gmail.com',
    },
  ];

  const jsxData = data.map((elt) => (
    <ContactRow
      name = {elt.name}
      phone = {elt.phone}
      email = {elt.email}/>
  ));

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      {jsxData}
    </table>
  );
}

export default ContactTable;
