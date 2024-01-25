import Layout from "components/Layout/Layout";
import AppBar from "components/AppBar/AppBar";
import TaskForm from "components/TaskForm/TaskForm";
import TaskList from "components/TaskList/TaskList";

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};


export default App;


// npm install redux
// npm install react-redux



// actions.js - файл оголошення екшенів програми
// reducer.js - файл оголошення функцій-редюсерів для оновлення стану
// constants.js - файл для зберігання констант (наприклад значень фільтру статусу)
// selectors.js - файл оголошення функцій-селекторів
// store.js - файл створення стор Redux