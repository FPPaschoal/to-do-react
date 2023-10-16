import { Trash2 } from "lucide-react";
import CheckBox from "./CheckBox";

function Task({ task, onCheckedChange, onDelete }) {
  function handleChange(event) {
    onCheckedChange(task.id, event.target.checked);
  }

  return (
    <div className="flex w-full items-start justify-between rounded-lg border border-gray-700 bg-gray-800 p-4 transition-opacity [&:has(input:checked)]:opacity-50">
      <div className="flex w-full gap-4">
        <CheckBox
          onChange={handleChange}
          checked={task.done}
          className="peer mt-1"
          task
        />
        <p className="peer-checked:line-through">{task.task}</p>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="ring-focus-task ml-4 mt-1 rounded-lg bg-gray-800 p-1 text-gray-400 transition-colors duration-300 hover:bg-gray-600/50 hover:text-red-500"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}

export default Task;
