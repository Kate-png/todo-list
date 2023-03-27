import './App.css';
import './normalize.css';
import MainTodoList from './pages/MainTodoList';

export default function App() {

  return (
      <div className='body'>
        <h2>
          Todo list
        </h2>
              <MainTodoList/>
      </div>
  );
}
