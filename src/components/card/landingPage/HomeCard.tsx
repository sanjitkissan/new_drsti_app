import React from 'react';

import { cardArrHome } from '@/src/types';
type prop={
    item: cardArrHome
}
function HomeCard({item}:prop) {
    return (
        <section className={`w-full h-96 p-2 overflow-hidden bg-white border border-black ${item.id==2 && "mt-48"} $ ${item.id==4 && "mt-48"} ${item.id==1 && "-mt-48"} ${item.id==5 && "-mt-48"}`}>
            <img src={ item?.img?.src} alt="img" className='w-full h-full object-cover' />
        </section>
    );
}

export default HomeCard;