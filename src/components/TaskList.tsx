/**
 * UIパーツ（タスク一覧のリスト親枠）
 */
import React from 'react';
import { Task, Status } from '../types/task';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: number, status: Status) => void;
  onDelete: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete }) => {
  return (
    <ul
      id="task-list"
      className="task-list"
      aria-label="タスク一覧"
      aria-live="polite"
      aria-busy={tasks.length === 0}
    >
      {tasks.map((task) => (
        <TaskItem 
        key={task.id} 
        task={task} 
        onStatusChange={onStatusChange} 
        onDelete={onDelete}
        />
      ))}
    </ul>
  );
};