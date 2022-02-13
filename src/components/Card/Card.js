/* eslint-disable jsx-a11y/iframe-has-title */
import "./Card.css";
import { Typography } from 'antd';

const { Paragraph } = Typography;

export function Card({id, title, count, category, grid}) {
  const style = grid ? { flexDirection: "column", height: "226px", width: "245px", gap: 0} : {};

  return (
    <div className="card" style={style}>
      <div className="card__video">
        <iframe width="235" height="138" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
      </div>
      <div className="card__info">
        <div className="card__title">
          <Paragraph ellipsis={grid ? {rows: 2} : false} style={{marginBottom: "0"}}>{title}</Paragraph>
        </div>
        <div className="card__meta">
          <Paragraph ellipsis={grid ? {rows: 1} : false} style={{marginBottom: "0", color: "#b6b6b7"}}>{category}</Paragraph>
          <Paragraph ellipsis={grid ? {rows: 1} : false} style={{marginBottom: "0", color: "#b6b6b7"}}>{count} просмотров</Paragraph>
        </div>
      </div>
    </div>
  )
}