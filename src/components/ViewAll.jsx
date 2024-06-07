import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
        {"name":"aju", "admNo":1014, "rollNo":1},
		    {"name":"anu", "admNo":1025, "rollNo":2},
		    {"name":"manu", "admNo":1403, "rollNo":3},
            {"name":"ebin", "admNo":1035, "rollNo":4},
            {"name":"kiya", "admNo":1995, "rollNo":5},
            {"name":"mohan", "admNo":1225, "rollNo":6}
    
        ]
    )
  return (

    <div>
        
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            data.map(
                                (value, index)=>{return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <br></br>
                                    <div class="card">
                                        <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" height="250px" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                        <p class="card-text">Admission No :{value.admNo}</p>
                                        <p class="card-text">Name :{value.name}</p>
                                        <p class="card-text">Roll No :{value.rollNo}</p>
                                        </div>
                                    </div>
                                </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default ViewAll