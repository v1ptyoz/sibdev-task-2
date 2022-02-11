import "./FavoriteItem.css"
import React, { useState } from 'react';
import { FavoriteItemModal } from "../FavoriteItemModal/FavoriteItemModal";

export function FavoriteItem() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  return (
    <>
      <p className="favorite__item" onClick={showModal}>
        sdfadsfasdf
      </p>
      <FavoriteItemModal 
        showModal={isModalVisible} 
        onCancel={() => setIsModalVisible(false)} 
        onSave={() => setIsModalVisible(false)}
        />
    </>
  )
}