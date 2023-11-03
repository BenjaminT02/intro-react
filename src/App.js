import {useState} from 'react';
import ContactTable from './ContactTable';
import SearchBar from './SearchBar';
import {data} from './Data';

/**
 * Composant racine
 * @return {jsx}
 */
function App() {
  const [contact, setContact] = useState(data);

  return (
    <div>
      <h1>Filterable React List</h1>
      <SearchBar setContact={setContact} />
      <ContactTable contact={contact} />
    </div>

  );
}

export default App;
