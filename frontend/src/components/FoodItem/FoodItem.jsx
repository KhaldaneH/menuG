import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

  // Handle modal opening
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Handle modal closing
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Food Item */}
      <div className='food-item' onClick={openModal}>  {/* Open modal on item click */}
        <div className='food-item-img-container'>
          <img className='food-item-image' src={url + "/images/" + image} alt={name} />
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="Rating" />
          </div>
          <p className="food-item-price">{price} {currency}</p>
        </div>
      </div>

      {/* Modal to show food details */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="modal-close" onClick={closeModal}>X</span>
            <div className="modal-header">
              <img className="modal-image" src={url + "/images/" + image} alt={name} />
              <div className="modal-info">
                <h2>{name}</h2>
                <p>{desc}</p>
                <p className="modal-price">{price} {currency}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
