/**
 * UIパーツ（絞り込み絞り込みドロップダウン領域）
 */
import React from "react";
import { FilterStatus } from '../types/task';

type TaskToolbarProps = {
  filter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
};

export const TaskToolbar: React.FC<TaskToolbarProps> = ({ filter, onFilterChange }) => {
  return (
    <div className="toolbar">
      <label className="filter-label">
        絞り込み
        <select 
        id="status-filter" 
        className="select select--sm"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value as FilterStatus)}
        >
          <option value="all">すべて</option>
          <option value="todo">未着手</option>
          <option value="in_progress">進行中</option>
          <option value="done">完了</option>
        </select>
      </label>
    </div>
  );
};