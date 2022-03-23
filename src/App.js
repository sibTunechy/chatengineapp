import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height='100vh'
            projectID='357d6a76-b5d6-4528-9ca6-88ed95d582b8'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/> }
        />
    );
}


export default App;