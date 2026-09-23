/**
 * UIパーツ（タスク1個分の表示・操作パーツ）
 */
import React from "react";
import { Task, Status, Priority } from '../types/task';

type TaskItemProos = {
  task: Task;
  onStatusChange: (id: number, status: Status) => void;
  onDelete: (id: number) => void;
};

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "低",
  medium: "中",
  high: "高",
};

export const TaskItem: React.FC<TaskItemProos> = ({ task, onStatusChange, onDelete }) => {

  // 削除ボタンが押されたときの処理
  const handleDelete = () => {
    // 確認ダイアログ表示
    const isConfirmed = window.confirm(`${task.title}を削除してもよろしいですか？`);
    // okが恐れた場合のみ削除実行
    if (isConfirmed) { onDelete(task.id) };
  };
  return (
    <li className={`task-item task-item--${task.priority}`}>
      <span className="task-title">[{PRIORITY_LABELS[task.priority]}]{task.title}</span>
      <select
        className="select select--sm"
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as Status)}
      >
        <option value="todo">未着手</option>
        <option value="in_progress">進行中</option>
        <option value="done">完了</option>
      </select>
      <button
        type="button"
        className="btn btn--danger btn--sm "
        style={{ 
          backgroundColor: '#f50f35', 
          boxShadow: '0 2px 8px rgba(26, 36, 252, 0.30)'
        }}
        onClick={handleDelete}
      >
        削除
      </button>
    </li>
  );
};