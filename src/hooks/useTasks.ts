/**
 * タスクの追加・削除・ステータス更新・絞り込みロジック
 */
import { useState, useEffect, useMemo } from "react";
import { Task, Priority, Status, FilterStatus, TaskStats, CreateTaskInput } from "../types/task";

const LOCAL_STORAGE_KEY = "my_taskboard_tasks";

export const useTasks = () => {
  // 1. localStorage から初期読み込み
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<FilterStatus>("all");
  const [message, setMessage] = useState<string>("");

  // tasks State が更新されるたびに LocalStorage へ同期保存する
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  /**
   * 指定したステータスでタスクを絞り込む
   */
  const filteredTasks = useMemo(() => {
    return filter === "all" ? tasks : tasks.filter((t) => t.status === filter);
  }, [tasks, filter]);

  /**
   * タスク配列からステータスごとの件数を集計する
   */
  const stats: TaskStats = useMemo(() => {
    return tasks.reduce<TaskStats>(
      (acc, task) => {
        if (acc[task.status] !== undefined) {
          acc[task.status] += 1;
        }
        return acc;
      },
      { todo: 0, in_progress: 0, done: 0 }
    );
  }, [tasks]);

  /**
   * 新しいタスクを追加する
   */
  const addTask = (title: string, priority: Priority) => {
    const validateTitle = title.trim();

    if (validateTitle === "") {
      setMessage("タイトルを入力してください");
      return;
    }

    const taskInput: CreateTaskInput = {
      title: validateTitle,
      priority,
      status: "todo",
    }

    const newTask: Task = {
      ...taskInput,
      id: Date.now(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setMessage("");
  };

  /**
   * タスクを削除する
   */
  const deleteTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) =>
        task.id !== id
      ));
  }

  /**
   * ステータス変更
   */
  const updateStatus = (id: number, status: Status) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  const clearMessage = () => setMessage("");

  return {
    tasks: filteredTasks,
    stats,
    filter,
    message,
    setFilter,
    addTask,
    deleteTask,
    updateStatus,
    clearMessage,
  };
};