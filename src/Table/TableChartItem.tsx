import React from "react";
import { FC } from "react";
import { ChartItem } from "./TableChart";
import DefaultImage from "assets/default_image.png";
import Bookmark from "stories/assets/Bookmark";
import HeartIcon from "stories/assets/HeartIcon";

interface TableChartItemProps {
  item: ChartItem;
}

const TableChartItem: FC<TableChartItemProps> = ({ item }) => {
  const DeltaRank = () => {
    if (item.previous - item.rank > 0) {
      return `+${item.previous - item.rank}`;
    } else if (item.previous - item.rank < 0) {
      return `-${item.rank - item.previous}`;
    }

    return "-";
  };

  return (
    <tr className="table-chart__content--item">
      <td className="table-chart__content--item__rank">
        <h4>{item.rank}</h4>
      </td>

      <td className="table-chart__content--item__rank-delta">
        <h4>{DeltaRank()}</h4>
      </td>

      <td className="table-chart__content--item__image">
        <div className="image-container">
          <img src={item.song.album.image} alt={DefaultImage} />
        </div>
      </td>

      <td className="table-chart__content--item__song-info">
        <div className="song-info">
          <div className="song">
            <h4 className="song-name">{item.song.name}</h4>
            <h4 className="album-name">{item.song.album.name}</h4>
          </div>
          {item.song.artists.length > 1 ? (
            <h4 className="artist-name">
              {item.song.artists[0].name} 외 {item.song.artists.length + 1}명
            </h4>
          ) : (
            <h4 className="artist-name">{item.song.artists[0].name}</h4>
          )}
        </div>
      </td>

      <td className="table-chart__content--item__icon-group">
        <Bookmark />
        <HeartIcon />
      </td>
    </tr>
  );
};

export default TableChartItem;
