/**
 * UIパーツ（件数・統計データ領域）
 */
import React from "react";

interface TaskStatsProps {
  stats: {
    todo: number;
    in_progress: number;
    done: number;
  };
}

export const TaskStats: React.FC<TaskStatsProps> = ({ stats }) => {
  return (
    <div id="stats-area" className="stats">
      <span>未着手：{stats.todo} / </span>
      <span>進行中：{stats.in_progress} / </span>
      <span>完了：{stats.done}</span>
    </div>
  );
};