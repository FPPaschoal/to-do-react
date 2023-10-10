import styles from "./App.module.css";

import Task from "./components/Task";

const BASE_URL = "http://localhost:3333/tasks";

/**
 * Renders the whole application.
 * Lists all tasks and allows the user to create new ones.
 * @returns {JSX.Element}
 */
function App() {
  const tasks = [];
  const doneTasks = []; // TODO: Filter the tasks that are done if needed

  function handleSubmit() {
    // TODO: Handle the form submission
    // Creates a new task in the database
    // Updates the list of tasks
  }

  function handleCheckChange() {
    // TODO: Handle the checkbox change
    // Updates the `done` field of a task in the database
    // Updates the list of tasks
  }

  function handleDelete() {
    // TODO: Handle the delete button click of a task
    // Deletes a task from the database
    // Updates the list of tasks
  }

  return (
    <div>
      <h1>Minhas tarefas</h1>

      <ul>
        <li>Tarefa 1</li>
        <li>Tarefa 2</li>
      </ul>
    </div>
  );
}

export default App;
