import { styles } from '../style';
import Header from '../components/Header';
import './Hero.css';

function Hero() {
  return (
    <div>
    <div className={`flex items-center w-[100dvw] h-[100dvh] flex-col bg-bgmobile md:bg-bg1 min-[2000px]:bg-bgwide bg-cover bg-no-repeat object-contain overflow-hidden`}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={`${styles.center} justify-between w-[100dvw]`}>
        {/* ????? */}
        <div className={`${styles.center} w-[257px] px-[70px] pt-[300px] pb-[60px]`}>
          <a href="/experimental" rel="noreferrer" className={`${styles.center} ${styles.transition} hover:bg-opacity-100 bg-neutral1 bg-opacity-40 border-solid border-main1 border-[3px] rounded-[30px] w-[102px] h-[854px]`}>
            <div className='w-[100dvw] h-[100dvh] absolute bg-main1'></div>
            <div className='border-solid border-main1 border-[3px] h-[854px] w-0'></div>
          </a>
        </div>
        
        {/* HERO */}
        <div className={`${styles.center} flex-col w-[655px]`}>
          <h1 className={`${styles.h1} text-main1 text-left w-[100%]`}>Designer</h1>
          <h2 className={`${styles.h2} bg-gradient-to-r from-main1 to-neutral2 inline-block text-transparent bg-clip-text text-center`}>and</h2>
          <h1 className={`${styles.h1} text-neutral2 text-right w-[100%]`}>Developer</h1>
        </div>

        {/* LINKS */}
        <div className={`${styles.center} w-[257px] px-[70px] pb-[300px] pt-[60px] gap-[15px]`}>
          <div className={`${styles.center} flex-col gap-[40px] px-[20px] py-[20px] bg-neutral9 rounded-[30px]`}>
            {/* HOME */}
            <div className={`${styles.center} ${styles.transition} group gap-[50px]`}>
              {/* ACTIVE */}
              <a href="" rel="noreferrer" className={`${styles.center} hoover group-hover:rounded-[20px] px-[25px] py-[15px] bg-gradient-to-b from-main1 to-main3 border-neutral1 border-[2px]`}>
                <h5 className={`${styles.h5} ${styles.transition} delay-[250ms] group-hover:text-neutral9 text-center text-neutral3`}>H<br/>O<br/>M<br/>E</h5>
              </a>
              <div className={`${styles.transition} delay-[250ms] group-hover:scale-y-150 border-solid border-neutral3 border-[3px] h-[100px] w-0 absolute translate-x-[80px]`}></div>
            </div>
            
            {/* INFO */}
            <div className={`${styles.center} ${styles.transition} group gap-[50px]`}>
              <a href="/info" rel="noreferrer" className={`${styles.center} ${styles.transition} border-dashed group-hover:border-opacity-100 border-opacity-0 px-[25px] py-[15px] border-neutral1 border-[2px]`}>
                <h5 className={`${styles.h5} ${styles.transition} group-hover:text-main1 text-center text-neutral3`}>I<br/>N<br/>F<br/>O</h5>
              </a>
              <div className={`${styles.transition} group-hover:scale-y-150 border-dashed border-main1 border-[3px] h-[100px] w-0 absolute translate-x-[80px]`}></div>
            </div>

            {/* PROJECTS */}
            <div className={`${styles.center} ${styles.transition} group gap-[50px]`}>
              <a href="/projects" rel="noreferrer" className={`${styles.center} ${styles.transition} border-dashed group-hover:border-opacity-100 border-opacity-0 px-[25px] py-[15px] border-neutral1 border-[2px]`}>
                <h5 className={`${styles.h5} ${styles.transition} group-hover:text-main1 text-center text-neutral3`}>P<br/>R<br/>O<br/>J<br/>E<br/>C<br/>T<br/>S</h5>
              </a>
              <div className={`${styles.transition} group-hover:scale-y-150 border-dashed border-main1 border-[3px] h-[100px] w-0 absolute translate-x-[80px]`}></div>
            </div>

            {/* ????? */}
            <div className={`${styles.center} ${styles.transition} group gap-[50px]`}>
              <a href="/experimental" rel="noreferrer" className={`${styles.center} ${styles.transition} border-dashed group-hover:border-opacity-100 border-opacity-0 px-[25px] py-[15px] border-neutral1 border-[2px]`}>
                <h5 className={`${styles.h5} ${styles.transition} group-hover:text-main1 text-center text-neutral3`}>?<br/>?<br/>?<br/>?<br/>?</h5>
              </a>
              <div className={`${styles.transition} group-hover:scale-y-150 border-dashed border-main1 border-[3px] h-[100px] w-0 absolute translate-x-[80px]`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='h-[1000px]'>

    </div>
    </div>
  );
}

export default Hero;