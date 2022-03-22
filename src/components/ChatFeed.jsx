import MessageForm from './MessageForm'
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (property) => {                  // functional component
    const { chats, activeChat, userName, messages } = property;   // destructured chats, activeChat, userName, messages from property;

    const chat = chats && chats[activeChat];     // if chat exist, find chats and then activeChat.

    console.log(chat, userName, messages)
    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;