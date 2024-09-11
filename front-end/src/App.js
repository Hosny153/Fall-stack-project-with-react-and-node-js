import React from 'react'
import Products from './Components/Products'
export default function App() {
  return (
    <div>
      <Products/>
    </div>



// import React from 'react'
// import axios from 'axios'
// import { useEffect, useState } from 'react'


// export default function Products() {
//     const [products, setproducts] = useState([])
//     useEffect(() => {
//         const getproducts = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:4000/Products`);
//                 setproducts(res.data.Data);
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         getproducts()
//         console.log(products)
//     }, []);
//     return (
//         <>
//             <div className='container'>
//                 {
//                     products.map((ele) => {
//                         return (
//                             <>
//                             <div className='d-flex justify-content-evenly ' >
//                                 <div className="card mt-3" style={{ width: '18rem' }}key={ele.id}>
//                                     <img src={ele.image} className="card-img-top" alt="..." />
//                                     <div className="card-body">
//                                         <h2 className="card-title">{ele.name}</h2>
//                                         <p className="card-text">{ele.descrption}</p>
//                                         <h5 className="card-title">Price: {ele.price}</h5>
//                                         <a href="#" className="btn btn-primary">Buy Now</a>
//                                     </div>
//                                 </div>
//                             </div>
                                
//                             </>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }








  )
}
