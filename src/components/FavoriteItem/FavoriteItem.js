import "./FavoriteItem.css"
import React, { useState } from 'react';
import FavoriteItemModal from "../FavoriteItemModal";
import { Button } from "antd";
import { EditFilled, CaretRightFilled } from '@ant-design/icons';
import { getVideos } from "../../api/getVideos";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


export function FavoriteItem({query, deep, name, sortBy}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [requestDeep, setRequestDeep] = useState(deep);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const search = async () => {
    await dispatch(getVideos({query, deep: requestDeep}));
    navigate("/results");
  }


  return (
    <div className="favorite__item">
      {query}
      <div className="favorite__controls">
      <Button onClick={showModal}><EditFilled /></Button>
      <Button type="primary" onClick={search}><CaretRightFilled /></Button>
      </div>
      <FavoriteItemModal 
        showModal={isModalVisible} 
        onCancel={() => setIsModalVisible(false)} 
        query={query}
        deep={deep}
        name={name}
        sortBy={sortBy}
        setRequestDeep={setRequestDeep}
        />
    </div>
  )
}