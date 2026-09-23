/**
 * UIパーツ（タスク追加フォーム領域）
 */
import React, { useState } from "react";
import { Priority } from '../types/task';

type TaskFormProps = {
  onAddTask: (title: string, priority: Priority) => void;
  message: string;
}

export const TaskForm: React.FC<TaskFormProps & {onClearMessage? : () => void}> = ({ 
  onAddTask, 
  message,
  onClearMessage
}) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('low');

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(title, priority);

    // タイトルが入力されていた時のみ入力欄をクリアにする
    if (title.trim() !== '') {
      setTitle('');
    }
  };

  return (
    <section className="card">
      <h2 className="card-heading">タスクを追加</h2>
      <form id="task-form" className="task-form" onSubmit={handlerSubmit}>
        <input
          type="text"
          id="task-title"
          className="input"
          placeholder="タスクのタイトルを入力..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (onClearMessage) onClearMessage();
          }}
        />
        <select
          id="task-priority"
          className="select"
          aria-label="優先度を選択"
          value={priority}
          onChange={(e) => {setPriority(e.target.value as Priority)}}
        >
          <option value="low">優先度：低</option>
          <option value="medium">優先度：中</option>
          <option value="high">優先度：高</option>
        </select>
        <button type="submit" className="btn btn--primary">追加</button>
      </form>
      <p id="message-area" className="message">{message}</p>
    </section>
  );
}