import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData] =useState([])
        const fetchData=()=>{
            axios.get("http://localhost:8080/View").then((response)=>{
                changeData(response.data)
            }
        ).catch().finally()
        } 
        useEffect(()=>{fetchData()},[]
    )
  return (

    <div>
        
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">NAME</th>
                                        <th scope="col">ROLL NO</th>
                                        <th scope="col">ADMISSION NP</th>
                                        <th scope="col">COLLEGE</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                        {
                            data.map(
                                (value, index) => { return   <tr>
                                    <td>{value.name}</td>
                                    <td>{value.rollno}</td>
                                    <td>{value.admno}</td>
                                    <td>{value.college}</td>
                                </tr>
                                
                        }
                    )
                        }
                         </tbody>
                         </table>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default ViewAll