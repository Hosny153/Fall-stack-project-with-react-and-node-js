import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Products() {
    const [Products, setproducts] = useState([])
    useEffect(() => {
        const getproducts = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/Products`)
                setproducts(res.data.Data)
            } catch (err) {
                console.log(err);
            }
        }
        getproducts()
        console.log(Products)
    }, [])
    return (
        <>
        <div className='container'>
        <div className='row'>
            {Products.map((ele) => {
                return (
                    <div className='col-md-4' key={ele.id}>
                        <div className="card mt-5 p-1" style={{ width: '20rem' }}>
                            <img src={ele.image} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h2 className="card-title">{ele.name}</h2>
                                <p className="card-text">{ele.descrption}</p>
                                <h5 className="card-title">Price: {ele.price}</h5>
                                <a href="#" className="btn btn-primary w-100">Buy Now</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
        </>
    )
}
