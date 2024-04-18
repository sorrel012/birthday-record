import { Monofett } from 'next/font/google';
import '../styles/globals.css';

const monofett = Monofett({
  weight: '400',
  subsets: ['latin'],
});

function Header() {
  return (
    <div className="text-center">
      <h1 className={`${monofett.className} title`}>Birthday Record</h1>
    </div>
  );
}

export default Header;
