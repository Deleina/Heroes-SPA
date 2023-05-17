import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard';
import { getHerosByPublisher } from '../helpers/getHerosByPublisher'


export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  // console.log(heroes);

  return (
    <div className='row rows-col-1 row-cols-md-3 g-3'>
      {
        heroes.map(hero => (
          <HeroCard key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  )
}
