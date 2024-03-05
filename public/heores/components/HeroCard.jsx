import React from 'react'
import { Link } from 'react-router-dom'


const CharactersByHero = ({ alter_ego, characters }) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
}


export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    
    
    
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={`/assets/heroes/${ id }.jpg`}  className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {/* {
                                ( alter_ego !== characters ) && charactesByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } */}
                            {/* <CharactersByHero characters={ characters } alter_ego={ alter_ego } /> */}

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`./hero/${id}`}>
                                More
                            </Link>


                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
};





// return (
//     <Link to={`./hero/${id}`} className="my-card animate__animated animate__fadeIn">
//         <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive" alt={superhero}/>
//         <div className="profile-name">{superhero}</div>
//         <div className="profile-position">{alter_ego}</div>
//         <div className="profile-overview">
//             <div className="profile-overview">
//                 <div className="row">
//                     <div className="col-ms-4">
//                         <h3>{publisher}</h3>
//                         <p>Firts appearance: <br />{first_appearance}</p>
//                         {
//                             (alter_ego !== characters)
//                             && <p>{characters}</p>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </Link>
// );

