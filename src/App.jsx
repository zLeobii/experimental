import { styles } from './style';
import Logo from '../src/assets/important/logo.svg';

function App() {
  return (
    <div className={`${styles.center} w-[100dvw] h-[100dvh] flex-col bg-bgmobile md:bg-bg1 min-[2000px]:bg-bgwide bg-cover bg-no-repeat object-contain overflow-hidden`}>
      {/* HEADER */}
      <div className={`${styles.center}h-auto pt-[30px]`}>
        <img src={Logo} alt="logo" />
      </div>

      {/* MAIN */}
      <div className={`${styles.center} justify-between w-[100%]`}>
        {/* STYLES */}
          <div className={`${styles.center} w-[257px] px-[70px] pt-[300px] pb-[60px]`}>
            <div className={`${styles.center} border-solid border-main1 border-[3px] rounded-[30px] w-[102px] h-[854px]`}>
              <div className='border-solid border-main1 border-[3px] h-[854px] w-0'></div>
            </div>
        </div>
        
        {/* HERO */}
        <div className={`${styles.center} flex-col w-[655px]`}>
          <h1 className={`${styles.h1} text-main2 text-left w-[100%]`}>Designer</h1>
          <h2 className={`${styles.h2} bg-gradient-to-r from-main2 to-neutral2 inline-block text-transparent bg-clip-text text-center`}>and</h2>
          <h1 className={`${styles.h1} text-neutral2 text-right w-[100%]`}>Developer</h1>
        </div>

        {/* LINKS */}
        <div className={`${styles.center} w-[257px] px-[70px] pb-[300px] pt-[60px] gap-[15px]`}>
          <div className={`${styles.center} flex-col gap-[100px] px-[20px] py-[20px] bg-neutral9 rounded-[30px]`}>
            {/* ACTIVE */}
            <div className={`${styles.center} px-[25px] py-[15px] bg-gradient-to-b from-main1 to-main3 border-neutral1 border-[2px] rounded-[20px]`}>
              <h5 className={`${styles.h5} text-center text-neutral9`}>H<br/>O<br/>M<br/>E</h5>
            </div>

            <h5 className={`${styles.h5} text-center text-neutral3`}>I<br/>N<br/>F<br/>O</h5>
            <h5 className={`${styles.h5} text-center text-neutral3`}>P<br/>R<br/>O<br/>J<br/>E<br/>C<br/>T<br/>S</h5>
            <h5 className={`${styles.h5} text-center text-neutral3`}>?<br/>?<br/>?<br/>?<br/>?</h5>
          </div>

          <div className={`${styles.center} flex-col gap-[150px]`}>
            <div className='border-solid border-neutral3 border-[3px] h-[102px] w-0'></div>
            <div className='border-dashed border-main1 border-[3px] h-[102px] w-0'></div>
            <div className='border-dashed border-main1 border-[3px] h-[102px] w-0'></div>
            <div className='border-dashed border-main1 border-[3px] h-[102px] w-0'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;