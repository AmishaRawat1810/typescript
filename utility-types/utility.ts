type T1 = NonNullable<string[] | null | undefined>;

type Shapes = { kind: "circle" } | { kind: "triangle" } | { kind: "square" };
type T2 = Exclude<Shapes, { kind: "square" }>;

interface TodoDetails {
  todoId: number;
  title: string;
  description: string;
}

type TaskDetails = Pick<TodoDetails, "todoId"> & {
  taskId: number;
  title: string;
  deadline: string;
};

type Task = Omit<TaskDetails, "deadline">;

interface upgradeTodo {
  updateTodo(title: string, desc?: string): TodoDetails;
  toggle(): void;
}

class Todo implements upgradeTodo {
  todoId: number;
  title: string;
  description: string;
  done: boolean;

  constructor(detail: TodoDetails) {
    this.todoId = detail.todoId;
    this.title = detail.title;
    this.description = detail.description;
    this.done = false;
  }

  updateTodo(title: string, desc?: string): TodoDetails {
    this.title = title;
    this.description = desc || this.description;
    return this;
  }

  toggle(): void {
    this.done = !this.done;
  }
}

const todo1 = new Todo({
  todoId: 1,
  title: "Organize desk",
  description: "Place blah blah",
});

const task1: TaskDetails = {
  taskId: 1,
  title: "Take a nap",
  todoId: 2,
  deadline: "23-12-2026",
};

const task2: Task = {
  taskId: 1,
  title: "Take a nap",
  todoId: 2,
};

console.log(todo1.updateTodo("Organize place"));
