// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./index.css";
// function ProductDetail() {
//   let params = useParams();
//   const [productDetail, setProductDetail] = useState();

//   useEffect(() => {
//     getSingleProductDetail(); 
//   },
//    []);

//   const getSingleProductDetail = () => {
//     fetch(`https://jsonplaceholder.typicode.com/photos/${params.productid}`)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setTimeout(() => {
//           setProductDetail(json);
//         }, 2000);
//       });
//   };

//   let a = null;

//   let b = 110;

//   return (
//     // <div>
//     //   <h1>jkflsdjl {productDetail?.id}</h1>
//     //   <h1>{productDetail?.title}</h1>
//     // </div>

//     <div class="container">
//       {productDetail ? (
//         <div class="card">
//           <div class="card-img">
//             <img height={200} src={productDetail?.thumbnailUrl} />
//           </div>
//           <div class="card-body">
//             <h2 class="card-title">{productDetail?.id}</h2>
//             <p class="card-intro">{productDetail?.title}</p>
//           </div>
//         </div>
//       ) : (
//         <div class="card">
//           <div class="card-img skeleton"></div>
//           <div class="card-body">
//             <h2 class="card-title skeleton"></h2>
//             <p class="card-intro skeleton"></p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductDetail;
