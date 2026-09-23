/**
 * 全コンポーネントとロジックを連結する
 */
import React from 'react';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskStats } from './components/TaskStats';
import { TaskToolbar } from './components/TaskToolbar';
import { TaskList } from './components/TaskList';
import { useTasks } from './hooks/useTasks';

export const App: React.FC = () => {
  const {
    tasks,
    stats,
    filter,
    message,
    setFilter,
    addTask,
    deleteTask,
    updateStatus,
    clearMessage,
  } = useTasks();

  return (
    <>
      <Header />
      <main className="container">
        <TaskForm 
        onAddTask={addTask} 
        message={message} 
        onClearMessage={clearMessage}
        />
        <TaskStats stats={stats} />
        <TaskToolbar filter={filter} onFilterChange={setFilter} />
        <TaskList 
        tasks={tasks} 
        onStatusChange={updateStatus} 
        onDelete={deleteTask}
        />
      </main>
    </>
  );
};

export default App;