import { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <header className='flex items-center bg-blue-500 text-white p-4 shadow-md'>
      <h1 className='text-2xl'>{title}</h1>
    </header>
  );
};

export default Header;