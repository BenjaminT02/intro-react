import {createContext} from 'react';
import {data} from './Data';
import {useState} from 'react';

export const ContactContext = createContext();

/**
 *
 * @param {jsx} children JSX enfant du provider
 * @return {jsx} context provider
 */
function ContactContextProvider({children}) {
  const [contact, setContact] = useState(data);
  return (
    <ContactContext.Provider value={{contact, setContact}}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;
