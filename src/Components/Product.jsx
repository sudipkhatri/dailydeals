import React from 'react';
import Card from './Card';
import { lists }from "../Assets/common.js";
import { styles } from '../styles';


const Product = () => {


  return (
    <div className='w-full'>
        <div className={`${styles.paddingX} w-full mt-20 pt-8 flex gap-4 items-center`}>
            <h1 className={`text-3xl font-bold pl-3`}>Trending Deals &nbsp;</h1>           
        </div>
        <div className="mt-10 flex flex-wrap gap-7 justify-center">

            {   
            // slice(0, limit) if you wanna map upto 5 products
                lists.map((list, index)=>(
                    <Card key={index} index={index}  {...list}/> 
                ))
             }

        </div>
    </div>
  )
}

export default Product

