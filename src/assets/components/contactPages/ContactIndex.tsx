import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AddContact from './AddContact';
import AddRandomContact from './AddRandomContact';
import RemoveContact from './RemoveContact';
import FaviroteContact from './FavoriteContact';
import GeneralContact from './GeneralContact';
import { FC, useState } from 'react';
import { ContactProps } from '../../types/ContactProps';

const ContactIndex: FC = () => {
  const [contactList, setContactList] = useState<ContactProps[]>([
    {
      id: 1,
      name: 'Adel',
      phone: '+358-46-1234567',
      email: 'adel.ansari@example.com',
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Alex',
      phone: '+358-46-1672673',
      email: 'alex.tran@example.com',
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Popa',
      phone: '+358-46-7839849',
      email: 'popa@example.com',
      isFavorite: true,
    },
  ]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header title='React Contact' />
      <div className='grid grid-cols-2 py-3'>
        <AddRandomContact />
        <RemoveContact />
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <AddContact />
        <FaviroteContact contacts={contactList.filter((contact) => contact.isFavorite)} />
        <GeneralContact contacts={contactList.filter((contact) => !contact.isFavorite)} />
      </div>

      <Footer />
    </div>
  );
};

export default ContactIndex;