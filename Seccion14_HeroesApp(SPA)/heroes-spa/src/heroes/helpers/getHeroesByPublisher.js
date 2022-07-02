import { heroes } from '../data/HeroesList';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if( !validPublisher.includes(publisher) ) {
        throw new Error(`${publisher} is not a valid publisher`);
    }
    return heroes.filter(element => element.publisher === publisher);
}