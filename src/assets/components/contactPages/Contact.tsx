import { FC } from 'react';
import { ContactProps } from '../../types/ContactProps';

type Props = {
  contact: ContactProps;
};

const Contact: FC<Props> = ({ contact }) => {
  return (
    <div className='p-2 mb-2 border border-gray-500 rounded space-x-4'>
      <img src={`https://ui-avatars.com/api/?name=${contact.name}`} alt='' />
      <div>
        <h2>{contact.name}</h2>
        <p>
          {contact.email} <br /> {contact.phone}
        </p>
      </div>
      <i className={`material-icons ${contact.isFavorite ? 'text-yellow-500' : 'text-gray-500'}`}>
        {contact.isFavorite ? 'star' : 'star_border'}
      </i>
    </div>
  );
};

export default Contact;