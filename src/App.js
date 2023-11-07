import ContactTable from './ContactTable';
import SearchBar from './SearchBar';
import ContactForm from './ContactForm';
import ContactContextProvider from './ContactContext';

/**
 * Composant racine
 * @return {jsx}
 */
function App() {
  return (
    <div>
      <h1>Filterable React List</h1>
      <ContactContextProvider>
        <SearchBar />
        <ContactTable />
        <ContactForm />
      </ContactContextProvider>
    </div>

  );
}

export default App;
