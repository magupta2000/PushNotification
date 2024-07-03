import logo from './logo.svg';
import './App.css';
import { onMessage } from 'firebase/messaging';
import { ToastContainer, toast } from 'react-toastify';
import Message from './Message';
import messaging from './firebaseConfig';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('bbbbbbbbbbbbbbbbbbbbbbb', messaging)
    onMessage(messaging,(payload) => {
      console.log('payload', payload)
      toast(<Message payload={payload?.notification} /> , {closeOnClick: true})
    })
  }, [messaging])

  return (
    <>
      <ToastContainer/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </>
  );
}

export default App;
