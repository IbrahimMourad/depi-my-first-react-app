import Form from './components/Form';
import { LoginForm } from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h2>Enter your name</h2>
      <Form />
      <hr />

      <LoginForm />
    </div>
  );
}

export default App;
