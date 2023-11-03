import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name, _id } = item;
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [, refetch] = useCart()
  // const handleAddToCart = item => {
  //   if (user && user?.email) {
  //     const cartItem = {
  //       menuItemId: _id, name, image, price, email: user?.email
  //     }
  //     fetch(`${import.meta.env.VITE_APP_API_URL}/carts`, {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json'
  //       },
  //       body: JSON.stringify(cartItem)
  //     }).then(res => res.json()).then(data => {
  //       if (data.insertedId) {
  //         refetch() // refetch cart to update the cart number
  //         Swal.fire({
  //           position: 'top-end',
  //           icon: 'success',
  //           title: 'Food added on the cart',
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //       }
  //     })
  //   } else {
  //     Swal.fire({
  //       title: 'Please login to order the food?',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Login Now'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate('/login', { state: { from: location } })
  //       }
  //     })
  //   }
  // }

  return (
    <>
      <div className="post-inner shadow-md">
        <div className="post-thumbnail relative">
          <img width="500" height="330" src={image} className="attachment-poco-post-grid-2 size-poco-post-grid-2 wp-post-image" alt="" decoding="async" loading="lazy" />
          <p className="absolute shadow-md z-50 top-0 right-0 bg-[#ffc222] text-white p-2 mt-4">
            ${price}
          </p>
        </div>
        <div className="entry-content p-6">
          <h3 className="entry-title mb-2 font-semibold">
            {name}
          </h3>
          <p className='text-md mb-3'>
            {recipe?.length > 120 ? recipe?.slice(0, 120) : recipe}
          </p>
          <Link
            className="primary-btn second-btn"
            to={`/products/${_id}`}>
            Details
          </Link>
          {/* <button
            onClick={() => handleAddToCart(item)}
            className="primary-btn second-btn">
            Add to Cart
          </button> */}
        </div>
      </div>
    </>
  );
};

export default FoodCard;
