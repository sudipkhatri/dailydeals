import React from 'react';
import Card from './Card';
import { styles } from '../styles';
import { lists } from '../Assets';

const Common = () => {


    //let limit = value === true ? 5 : lists.length;

  return (
    <div className="w-full">
       <div className={`${styles.paddingX} w-full my-8 mt-10 flex items-center`}>
            <h1 className={`font-bold text-3xl pl-3`}>Common Deals &nbsp;</h1>
        </div>
        <div className="w-full flex flex-wrap gap-7 justify-center">
            {
                lists.map((list, index)=>(
                    <Card key={index} {...list}/>
                ))
             }
        </div>
    </div>
  )
}

export default Common
