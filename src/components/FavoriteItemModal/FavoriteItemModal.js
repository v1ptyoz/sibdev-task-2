import { Col, Form, Input, Modal, Row } from 'antd';
import { Slider, InputNumber, Button } from 'antd';
import { Select } from 'antd';
import { UpdateFavorite } from '../../store/favorites/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { saveFavorites } from '../../api/saveFavorites';

const { Option } = Select;

export function FavoriteItemModal({ showModal, onCancel, name, query, deep, sortBy, setRequestDeep }) {
  const [formDeep, setFormDeep] = useState(deep);
  const dispatch = useDispatch();

  const updateFavorite = async (values) => {
    setRequestDeep(formDeep);
    await dispatch(UpdateFavorite(values));
    await dispatch(saveFavorites());
    onCancel();
  }

  return (
    <Modal title={<h3 style={{ textAlign: "center" }}>Изменить запрос</h3>}
      visible={showModal}
      onOk={() => updateFavorite(query)}
      onCancel={onCancel}
      cancelText="Не изменять"
      okText="Изменить"
      footer={null}
    >
      <Form layout="vertical" onFinish={updateFavorite}>
        <Form.Item label="Запрос" name="query" initialValue={query} >
          <Input disabled />
        </Form.Item>
        <Form.Item label="Название" name="name"
          rules={[{ required: true }]}
          initialValue={name}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Сортировать по" name="sortBy" initialValue={sortBy || "no"}>
          <Select>
            <Option value="date">Дате загрузки</Option>
            <Option value="rating">Рейтингу</Option>
            <Option value="relevance">Релевантности</Option>
            <Option value="title">В алфавитном порядке</Option>
            <Option value="videoCount">?Количеству загрузок?</Option>
            <Option value="viewCount">Числу просмотров</Option>
            <Option value="no">Без сортировки</Option>
          </Select>
        </Form.Item>
        <Row>
          <span>
            Максимальное количество
          </span>
          <Col span={18}>
            <Form.Item name="deep" initialValue={formDeep}>
              <Slider
                min={1}
                max={50}
                onChange={setFormDeep}
              />
            </Form.Item>
          </Col>
          <Col>
          <InputNumber
            min={1}
            max={50}
            value={formDeep}
            onChange={setFormDeep}
            style={{marginLeft: "28px"}}
          />
        </Col>
        </Row>
        <Row style={{ justifyContent: "flex-end", columnGap: "20px" }}>
          <Button onClick={onCancel}>
            Не изменять
          </Button>
          <Button htmlType='submit' type="primary">
            Изменить
          </Button>
        </Row>
      </Form>
    </Modal>
  )
}