import { heroes } from "../data/HeroesList";

export const getHeroById = (id) => {

    return heroes.find(heroe => heroe.id === id);
}