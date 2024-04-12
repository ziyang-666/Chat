import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import ChatArea from './components/ChatArea';
import InputArea from './components/InputArea';

function App() {
  const [messages, setMessages] = useState([]);

    const handleSend = (text) => {
        setMessages([...messages, { text, isUser: true }]);
        // Simulate a response
        setTimeout(() => {
            setMessages(msgs => [...msgs, { text: "Echo: " + text, isUser: false }]);
        }, 500);
    };

    return (
        <div className="App">
            <Header />
            <ChatArea messages={messages} />
            <InputArea onSend={handleSend} />
        </div>
    );
}

export default App;
