import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'
import { HeroCard } from '../components/HeroCard';



export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    hero.publisher === 'DC Comics' ? navigate('/dc') : navigate('/marvel');
  }


  if (!hero) {
    return <Navigate to={'/marvel'} />
  }


  return (
    <>
      <div className="my-card">
        <img
          src={`/assets/heroes/${id}.jpg`}
          className="img img-responsive animate__animated animate__fadeInLeft"
          alt={hero.superhero}
        />
        <div className="profile-name">{hero.superhero}</div>
        <div className="profile-position">{hero.alter_ego}</div>
        <div className="profile-overview">
          <div className="profile-overview">
            <div className="col-ms-4">
              <h3>{hero.publisher}</h3>
              <p>Firts appearance: <br />{hero.first_appearance}</p>
              <p>Characters<br />{hero.characters}</p>
            </div>
          </div>|
        </div>
      </div>

      <div className='col-sm-12'>
        <button type="button" className="btn btn-outline-primary"
          onClick={onNavigateBack}

        >
          Go back
        </button>
      </div>





    </>

  )
}
