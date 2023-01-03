import React, { FC } from "react";
import Bookmark from "../assets/Bookmark";
import HeartIcon from "../assets/HeartIcon";
import "./table.scss";

export interface TableItemInterface {
  label: string | number;
  subLabel?: string | number;
  picture: string;
  mainDesc: string;
  subDesc?: string;
}

const TableItem: FC<TableItemInterface> = ({
  label,
  subLabel,
  picture,
  mainDesc,
  subDesc,
}) => {
  return (
    <div className="table--contents__item">
      <div className="table--contents__item--label">
        <h4 className="label">{label}</h4>
        {subLabel && <h4 className="sub-label">{subLabel}</h4>}
      </div>

      <div className="table--contents__item--picture">
        <img src={picture} alt="img" />
      </div>

      <div className="table--contents__item--description">
        <h4 className="main-desc">{mainDesc}</h4>
        {subDesc && <h4 className="sub-desc">{subDesc}</h4>}
      </div>

      <div className="table--contents__item--icon-group">
        <Bookmark />
        <HeartIcon />
      </div>
    </div>
  );
};

export default TableItem;
