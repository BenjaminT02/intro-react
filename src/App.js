import ContactTable from './ContactTable';
import SearchBar from './SearchBar';

/**
 * Composant racine
 * @return {jsx}
 */
function App() {
  return (
    <div>
      <h1>Filterable React List</h1>
      <SearchBar/>
      <ContactTable/>
    </div>

  );
}

export default App;
