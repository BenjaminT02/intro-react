import {useContext, useState} from 'react';
import {ContactContext} from './ContactContext';

/**
 * Programme permettant de faire des state complexe
 * @return {Obejct} Le formulaire
 */
function ContactForm() {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const {setContact} = useContext(ContactContext);

  /**
     * @param {Event} évènement onchange
     */
  function handleChange({name, value}) {
    setData((prev) => ({...prev, [name]: value}));
  }

  /**
     * gestionnaire d'évènement submit du formulaire
     * @param {Event} event évènement onsubmit
     */
  function handleSubmit(event) {
    event.preventDefault();
    setContact((prev) => [...prev, data]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder='name'
        name="name"
        value={data.name}
        onChange={(e) => handleChange(e.target)}
      />
      <input type="phone"
        placeholder='phone'
        name="phone"
        value={data.phone}
        onChange={(e) => handleChange(e.target)}
      />
      <input type="email"
        placeholder='email'
        name="email"
        value={data.email}
        onChange={(e) => handleChange(e.target)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ContactForm;
