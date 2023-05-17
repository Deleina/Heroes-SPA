import React from 'react'
import { HeroCard } from '../components/HeroCard'

export const SearchPage = () => {
  return (
    <>
      <h1>search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Seaching</h4>
          <hr />
          <form>
            <input
              type='text'
              placeholder='search a hero'
              className='form-control'
              name='SearchText'
              autoComplete='off'
            />
            <button className='btn btn-outline-primary mt-1'>
              search
            </button>

          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div className='alert alert-primary'>
            search a hero
          </div>

          <div className='alert alert-danger'>
            No hero with <b>ABC</b>
          </div>

          {/* <HeroCard/> */}
        </div>
      </div>

    </>
  )
}
