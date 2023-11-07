import {useContext, useState} from 'react';
import {data} from './Data';
import {ContactContext} from './ContactContext';

/**
 * Composant html contenant la search bar
 * @return {jsx}
 */
function SearchBar() {
  const [input, setInput] = useState('');
  const {setContact} = useContext(ContactContext);
  /**
   * Binding onchange
   * @param {Event} event
   */
  function handleChange(event) {
    setInput(event.target.value);
  }
  /**
   * Gestionnaire d'évènement de click sur le bouton filter
   */
  function handleClickFilter() {
    const filteredList = data.filter((elt) => elt.name.includes(input));
    console.log(filteredList);
    setContact(filteredList);
  }
  return (
    <form>
      <input type="text" placeholder="search..." value={input} onChange={handleChange} />
      <button type="button" onClick={handleClickFilter}>Filtrer</button>
    </form>
  );
}

export default SearchBar;
