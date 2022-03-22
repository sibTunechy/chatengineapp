import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID='357d6a76-b5d6-4528-9ca6-88ed95d582b8'
            userName='Tunechy'
            userSecret='123123'
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/> }
        />
    );
}


export default App;