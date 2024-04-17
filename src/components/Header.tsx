import { Monofett } from 'next/font/google';
import '../styles/globals.css';

const monofett = Monofett({
  weight: '400', subsets: ["latin"] });

function Header() {
  return <h1 className={`${monofett.className} title`}>Birthday Record</h1>;
}

export default Header;