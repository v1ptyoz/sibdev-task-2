import React, { useState } from 'react';
import { Col, Form, Input, Modal, Row } from 'antd';
import { Slider, InputNumber } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

export function FavoriteItemModal({showModal, onSave, onCancel}) {

  const [deep, setDeep] = useState(12);

  return (
    <Modal title={<h3 style={{ textAlign: "center" }}>Изменить запрос</h3>}
        visible={showModal}
        onOk={onSave}
        onCancel={onCancel}
        cancelText="Не изменять"
        okText="Изменить">
        <Form layout="vertical">
          <Form.Item label="Запрос" name="query">
            <Input value="asdfasfsf" />
          </Form.Item>
          <Form.Item label="Название" name="query"
            rules={[{ required: true }]}>
            <Input value="asdfasfsf" />
          </Form.Item>
          <Form.Item label="Сортировать по" name="sortby">
            <Select defaultValue="no">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Без сортировки</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
          <Row>
            <span>
              Максимальное количество
            </span>
            <Col span={18}>
              <Slider
                min={1}
                max={50}
                onChange={setDeep}
                value={deep}
              />
            </Col>
            <Col>
              <Form.Item>
                <InputNumber name="deep"
                  min={1}
                  max={50}
                  style={{ margin: '0 0 0 16px' }}
                  value={deep}
                  onChange={setDeep}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
  )
}