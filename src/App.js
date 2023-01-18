import './App.css';
import Todos from './components/Todos'
import Todo from './components/Todo'
//import Form from './components/Form'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import EditTodo from './components/EditTodo';


function clickMe() {
    alert('Every day is a new start!')
  }

function App() {
  return (

    <div className="App">
      Welcome to Cody's "To-do" App
      <Router>
        <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/:id' element={<Todo />} />
        <Route path='/:id/edit' element={<EditTodo />} />

        </Routes>
      </Router>

      
    </div>

  );
}

export default App;
