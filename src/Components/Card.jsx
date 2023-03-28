import React from 'react';

const Card = ({title, currentPrice, imageUrl, link, partner}) => {
  

  return (
    <div className='bg-white border p-5 rounded-2xl  sm:w-[250px] w-11/12 cursor-pointer shadow-lg shadow-slate-100' 
    onClick={()=>window.open(link, "_blank")}>
      <div className='w-full h-100'>
       <img src={imageUrl} alt={title} className="w-full h-[300px] md:h-[225px] mx-auto" />
      </div>
       <div className='mt-5 flex'>
        <div className="w-full flex justify-between">
          <p className='text-primary text-[18px] mt-2 font-bold'>
          {currentPrice} 
        </p>
        <img src={partner} alt="title" width={"50px"} height="30px" />
        </div>
      </div>
     
    </div>
  )
}



export default Card
