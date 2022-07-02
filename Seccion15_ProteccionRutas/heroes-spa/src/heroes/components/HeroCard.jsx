import { Link } from 'react-router-dom';

const CharactersByhero = ({alter_ego, characters}) => {

    return (alter_ego !== characters) ? (<p className="card-text">{characters}</p>) : (<></>);
}

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const url = `/assets/heroes/${id}.jpg`;
    /*const charactersByhero = (<p className="card-text">{characters}</p>);*/

    return (
        <div className="col-sm-12 col-md-4 animate__animated animate__bounce animate__delay-0s">
            <div className="card m-1" >
                <div className="row g-0">
                    <div className="col-4">
                        <img src={url} className="img-fluid rounded" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                /*(alter_ego !== characters) && (<p className="card-text">{characters}</p>)*/
                                /*(alter_ego !== characters) && charactersByhero*/
                            }
                            <CharactersByhero characters={characters} alter_ego={alter_ego}/>

                            <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
