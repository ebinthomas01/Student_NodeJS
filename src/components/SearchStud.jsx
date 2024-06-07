import React from 'react'
import NavBar from './NavBar'

const SearchStud = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="label form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-warning">SEARCH</button>
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default SearchStud