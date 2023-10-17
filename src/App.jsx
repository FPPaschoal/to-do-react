import CheckBox from "./components/CheckBox";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { useEffect, useState } from "react";

const URL = "http://localhost:3333/tasks/";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [doneTasks, setDoneTasks] = useState(false);

  const filteredTasks = doneTasks ? tasks.filter((task) => !task.done) : tasks;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
      });
  }, []);

  async function handleSubmit(formDate) {
    const res = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...formDate, done: false }),
    });
    const data = await res.json();

    setTasks([...tasks, data]);
  }

  async function handleCheckChange(id, done) {
    await fetch(URL + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ done: done }),
    });
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: done } : task,
    );

    setTasks(newTasks);
  }

  async function handleDelete(id) {
    await fetch(URL + id, {
      method: "DELETE",
    });
    const newTasks = tasks.filter((tasks) => tasks.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="h-full min-h-screen bg-gray-950">
      <div className="mx-auto w-full max-w-[600px] px-5 py-10">
        <h1 className="mb-4 text-2xl font-medium text-white">Minhas Tarefas</h1>
        <TaskForm onSubmit={(formDate) => handleSubmit(formDate)}></TaskForm>

        {isLoading ? (
          <p className="mt-14 text-sm font-bold text-gray-400">
            Buscando tarefas...
          </p>
        ) : !tasks.length ? (
          <p className="mt-14 text-sm font-bold text-gray-400">
            Nenhuma tarefa foi adicionada
          </p>
        ) : (
          <div className="mt-14 text-gray-50">
            <div className=" mb-6 flex items-center justify-end gap-3">
              <div className="flex items-center gap-3">
                <CheckBox
                  onChange={() => setDoneTasks(!doneTasks)}
                  checked={doneTasks}
                  task={false}
                  name={"doneTasks"}
                  id={"doneTasks"}
                />
                <label for="doneTasks" className="cursor-pointer text-sm">
                  Filtrar tarefas concluídas
                </label>
              </div>
              <p className="whitespace-nowrap rounded-full bg-gray-800 px-2 py-1 text-center text-xs font-bold tabular-nums">
                {tasks.filter((t) => t.done).length} de {tasks.length}
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {filteredTasks.length ? (
                filteredTasks.map((t) => (
                  <Task
                    task={t}
                    key={t.id}
                    onDelete={(id) => handleDelete(id)}
                    onCheckedChange={(id, done) => handleCheckChange(id, done)}
                  />
                ))
              ) : (
                <p className="text-sm font-bold text-gray-400">
                  Todas as tarefas estão feitas!
                </p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
