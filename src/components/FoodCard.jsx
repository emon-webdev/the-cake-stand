import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { AuthContext } from "../providers/AuthProvider";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name, _id } = item;
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [, refetch] = useCart()
  const handleAddToCart = item => {
    console.log(item)
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id, name, image, price, email: user?.email
      }
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      }).then(res => res.json()).then(data => {
        if (data.insertedId) {
          refetch() // refetch cart to update the cart number
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food added on the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    } else {
      Swal.fire({
        title: 'Please login to order the food?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Food Image" />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white p-2 mt-4">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-yellow-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
