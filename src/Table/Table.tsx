import { FC } from "react";
import DefaultImg from "assets/default_image.png";

import TableItem, { TableItemInterface } from "./TableItem";

interface TablePropsInterface {
  title: string;
  pagination?: boolean;
  items: TableItemInterface[];
}

const Table: FC<TablePropsInterface> = ({
  title,
  pagination = true,
  items,
}) => {
  if (items.length <= 0) {
    return <TableItem label={0} picture={DefaultImg} mainDesc={"..."} />;
  }

  return (
    <div className="table grid">
      <div className="table--header">
        <h2 className="title">{title}</h2>
        {pagination && (
          <div className="select-box">
            <select className="table--header__select-group">
              <option>
                <h4>10개씩 보기</h4>
              </option>
              <option>20개씩 보기</option>
              <option>50개씩 보기</option>
              <option>100개씩 보기</option>
            </select>
            <span></span>
          </div>
        )}
      </div>

      <div className="table--contents">
        {items.map((item, index) => (
          <TableItem {...item} key={`table--item__${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Table;
