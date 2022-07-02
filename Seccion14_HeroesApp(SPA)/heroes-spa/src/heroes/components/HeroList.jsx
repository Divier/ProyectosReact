import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {

    const heroList = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row">
            {
                heroList.map((hero) =>
                    <HeroCard key={ hero.id } { ...hero }/>
                )
            }
        </div>
    )
}
