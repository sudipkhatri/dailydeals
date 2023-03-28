import React from 'react';
import { topLists } from '../Assets/topPicks';
import { styles } from '../styles';

const Picks = () => {
  return (
    <div className='w-full min-h-[80vh]  md:my-18'>
        <div className={`${styles.paddingX} w-full mt-20 pt-8 `}>
            <h1 className={`${styles.heroHeadText}`}>This Week Special</h1>
            {/* <p className=''>Some of products that are worth trying. </p> */}
        </div>
        <div className='w-full py-10'>
        {
          topLists.map((list, index)=>{
            const {title, des, link, imageUrl, currentPrice} = list;
            return (
              <div className="flex flex-col md:flex-row justify-center gap-3 md:my-10" key={index}>
                <div className='text-black w-full md:w-6/12 px-4'>
                  <div className="w-full flex justify-center items-center rounded-2xl h-full cursor-pointer shadow px-4 border">
                      <img src={imageUrl} alt={title} className="w-10/12 md:w-6/12 mx-auto my-4 py-4 "/>                   
                  </div>
                </div>
                <div className='text-black w-full md:w-5/12 flex flex-col gap-4 justify-center align-start'>                  
                  <div className={`${styles.paddingX} w-full`}>
                    <p className="text-lg md:text-3xl font-bold">{title}</p>
                  </div>
                  <div className={`${styles.paddingX} w-full mt-3`}>
                    <p className="text-black font-light 2xl:text-[24px] text-[20px] w-11/12 md:w-10/12 mt-0 leading-7">{des}</p>
                    <p className="font-bold text-lg md:text-3xl mt-4"> {currentPrice} </p>
                  </div>
                  <div className={`${styles.paddingX} w-full mt-2`}>
                    <button
                    onClick={()=>window.open(link, "_blank")} 
                    className='text-white font-bold text-lg p-1 w-[140px] rounded-lg bg-green-500 hover:bg-green-700'> Go To Store </button>
                  </div>
                </div>
              </div>
            )
          })
        }
         </div>
    </div>
  )
}

export default Picks
