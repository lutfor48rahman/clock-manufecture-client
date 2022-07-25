// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import auth from '../firebase.init';

// const PurchaseDetails = ({ tool }) => {
//     const [user] = useAuthState(auth);
//     const { register, handleSubmit } = useForm();
//     const { name, img } = tool;
//     const onSubmit = data => {
//         // console.log(data);
//         const url = `http://localhost:5000/order`;
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)

//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//             })
//         console.log(data)
//     };

//     return (
//         <div>
//             <div class="card w-96 bg-base-100 shadow-xl p-5">
//                 <h1 className=' mt-6 text-secondary text-2xl font-bold font-serif'><span className='text-primary'>Name :</span> {user.displayName}</h1>
//                 <h1 className=' text-secondary my-2 text-xl font-bold font-serif'><span className='text-primary'>Email :</span> {user.email}</h1>
//                 <figure><img src={tool.img} alt="Shoes" /></figure>
//                 <div class="card-body">
//                     <h2 class="card-title text-2xl font-bold">Name: <span className=' text-secondary'>{tool.name}</span></h2>
//                     <form >
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input className=' mb-2 p-2 border-2 rounded-3 ' type="number" {...register("ratting", { min: 1, max: 5 })} />
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input className=' mb-2 p-2 border-2 rounded-3 ' type="number" {...register("ratting", { min: 1, max: 5 })} />
//                         <input className=' bg-secondary p-2 rounded-3xl mt-4 text-white' type="submit" value='ADD TO ORDER' />
//                     </form>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PurchaseDetails;