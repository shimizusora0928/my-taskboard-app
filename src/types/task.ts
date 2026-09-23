/**
 * タスク関連の型定義
 */
export type Priority = "low" | "medium" | "high";
export type Status = "todo" | "in_progress" | "done";
export type FilterStatus = "all" | Status;

export type Task = {
  readonly id: number;
  title: string;
  priority: Priority;
  status: Status;
};

export type TaskStats = Record<Status, number>;
export type CreateTaskInput = Omit<Task, "id">;