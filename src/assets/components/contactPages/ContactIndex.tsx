import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AddContact from './AddContact';
import AddRandomContact from './AddRandomContact';
import RemoveContact from './RemoveContact';
import FaviroteContact from './FavoriteContact';
import GeneralContact from './GeneralContact';

const ContactIndex = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header title='React Contact' />
      <div className='grid grid-cols-2 py-3'>
        <AddRandomContact />
        <RemoveContact />
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <AddContact />
        <FaviroteContact />
        <GeneralContact />
      </div>

      <Footer />
    </div>
  );
};

export default ContactIndex;