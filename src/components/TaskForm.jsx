import { useState, useRef } from "react";

function TaskForm({ onSubmit }) {
  const inputRef = useRef(null);
  const [task, setTask] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const formDate = { task };

    await onSubmit(formDate);

    setTask("");

    inputRef.current?.focus();
  }

  return (
    <form className="flex items-center gap-4" onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={inputRef}
        type="text"
        required
        minLength={2}
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Passear com o cachorro"
        className="ring-focus w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-gray-50"
      />
      <button
        type="submit"
        className="ring-focus whitespace-nowrap  rounded-lg border-blue-700 bg-blue-700 px-4 py-3 text-sm font-medium text-gray-50 "
      >
        Criar Tarefa
      </button>
    </form>
  );
}

export default TaskForm;
