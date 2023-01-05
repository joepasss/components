import React, { FC } from "react";
import TableChartItem from "./TableChartItem";

export interface ChartItem {
  rank: number;
  previous: number;
  song: SongInterface;
  count1: number;
  count2: number;
  like: number;
}

interface SongInterface {
  id: string;
  name: string;
  album: AlbumInterface;
  artists: ArtistInterface[];
  released_at: string;
}

interface AlbumInterface {
  id: string;
  name: string;
  image: string;
}

interface ArtistInterface {
  id: string;
  name: string;
  image: string;
}

interface TableChartProps {
  items: ChartItem[];
}

const TableChart: FC<TableChartProps> = ({ items }) => {
  return (
    <div className="table-chart">
      <table className="table-chart__content">
        <colgroup>
          <col className="rank" />
          <col className="rank-delta" />
          <col className="image" />
          <col className="song-info" />
          <col className="icon-group" />
        </colgroup>

        <tbody>
          {items.map((chart) => (
            <TableChartItem item={chart} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableChart;
