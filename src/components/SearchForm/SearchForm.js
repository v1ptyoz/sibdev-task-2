import "./SearchForm.css"
import { Form, Input, Button } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { getVideos } from "../../api/getVideos";
import { AddFavorite } from "../../store/favorites/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { saveFavorites } from "../../api/saveFavorites";

export function SearchForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const q = useSelector(state => state.videos.query);
  const loading = useSelector(state => state.videos.loading);
  const favorites = useSelector(state => state.favorites.list);
  

  const inFavorite = !!favorites.filter(item => item.query === q).length;


  const searchHandler = async (query) => {
    await dispatch(getVideos(query));
    navigate("/results", { replace: true });
  }

  const addToFavorite = async () => {
    await dispatch(AddFavorite({query: q}))
    await dispatch(saveFavorites());
  }

  return (
    <div className="search-form">
      {props.children}
      <Form layout="inline" className="search-form__form" onFinish={searchHandler}>
        <Form.Item name="query" style={{ width: "100%", marginRight: "0", flex: "1" }} initialValue={q}>
          <Input
            placeholder="Что хотите посмотреть?"
            suffix={props.withIcon && (
              inFavorite ? <HeartTwoTone /> : <HeartOutlined onClick={addToFavorite}/>
              )}
          >
          </Input>
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>Найти</Button>
      </Form>
    </div>
  )
}