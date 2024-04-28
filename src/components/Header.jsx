import { styles } from '../style';
import Logo from '../assets/important/logo.svg';

function Header() {
  return (
    <div className={`${styles.center} h-[90px] w-[100dvw] pt-[30px]`}>
        <img src={Logo} alt="logo" />
    </div>
  );
}

export default Header;