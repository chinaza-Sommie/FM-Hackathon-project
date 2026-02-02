import Logo from '../assets/images/logo-large.svg';
import BestCup from '../assets/images/icon-personal-best.svg';

// - **Neutral 900**: hsl(0, 0%, 7%)
// - **Neutral 800**: hsl(0, 0%, 15%)
// - **Neutral 500**: hsl(240, 3%, 46%)
// - **Neutral 400**: hsl(240, 1%, 59%)
// - **Neutral 0**: hsl(0, 0%, 100%)

function App() {
  return (
    <div className='w-[90%] py-8 px-3'>
        {/* component 1 */}
        <div className='flex justify-between items-center px-5'>
          <div className=''>
            {/* <img src={Logo} alt='platform logo'className='w-[240px]'/> */}
            <img src={Logo} alt='platform logo'/>
          </div>
          <div className='flex items-start '>
            <div className='mr-2'>
              <img src={BestCup} alt='Golden Cup'  />
            </div>
            <div className='text-[hsl(240,1%,59%)] text-[16px] font-bold leading-none'>
              Personal Best: <span className='text-[hsl(0,0%,100%)]'>92 WPM</span>
            </div>
          </div>
        </div>

        {/* component 2 */}
        <div className='flex justify-between items-center mt-15 border-b-2 pb-4 border-[hsl(0,0%,15%)] '>
          <div className='flex items-center text-[16px] text-[hsl(240,1%,59%)] font-semibold'>
            <div className='px-5'> WPM: <span className='ml-1 font-bold text-[17px] text-[hsl(0,0%,100%)]'>40%</span></div>
            <div className='px-5 border-l-2 border-[hsl(0,0%,15%)]'> Acurracy: <span className='ml-1 font-bold text-[17px] text-[hsl(354,63%,57%)]'>94%</span> </div>
            <div className='px-5 border-l-2 border-[hsl(0,0%,15%)]'> Time: <span className='ml-1 font-bold text-[17px] text-[hsl(49,85%,70%)]'>0:46</span> </div>
          </div>
          <div className='flex items-center text-[16px] text-[hsl(240,1%,59%)] font-semibold'>
            <div className='px-5 flex'> Difficulty: 
              <ul className='flex'>
                <li className='px-2 ml-2 border border-[hsl(240,3%,46%)] rounded-md'>Easy</li>
                <li className='px-2 ml-2 border border-[hsl(240,3%,46%)] rounded-md'>Medium</li>
                <li className='px-2 ml-2 border border-[hsl(240,3%,46%)] rounded-md'>Hard</li>
              </ul>
            </div>
            <div className='px-5 flex items-center'> Mode: 
              <ul className='flex'>
                <li className='px-2 ml-2 border border-[hsl(240,3%,46%)] rounded-md'>Timed( 60s )</li>
                <li className='px-2 ml-2 border border-[hsl(240,3%,46%)] rounded-md'>Passage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* component 3 */}
        {/* <div className='text-[hsl(240,1%,59%)] font-semibold text-[35px] px-5 pt-5 leading-16 text-justify'>
            Quantum entanglement—Einstein's "spooky action at a distance\"—continues to perplex physicists and philosophers alike. When two particles become entangled, measuring one instantaneously affects the other, regardless of the distance separating them. This phenomenon doesn't violate relativity (no information travels faster than light), 
            yet it challenges our intuitions about locality, causality, and the nature of reality itself
        </div> */}

        <div className='relative'>
            <div className='text-[hsl(240,1%,59%)] font-semibold text-[35px] px-5 pt-5 leading-16 text-justify border border-red'>
              Quantum entanglement—Einstein's "spooky action at a distance\"—continues to perplex physicists and philosophers alike. When two particles become entangled, measuring one instantaneously affects the other, regardless of the distance separating them. This phenomenon doesn't violate relativity (no information travels faster than light), 
              yet it challenges our intuitions about locality, causality, and the nature of reality itself 
            </div>
           
            <textarea
              placeholder="Quantum entanglement—Einstein"
              className="
                absolute top-0 w-full h-full
                text-[hsl(140,63%,57%)]
                font-semibold text-[35px]
                px-5 pt-5 leading-16 text-justify
                border-0 resize-none
                outline-none focus:outline-none focus:ring-0
                caret-[hsl(240,1%,59%)]
                bg-transparent
              "
            />
            
        </div>
      </div>
  );
}

export default App;
