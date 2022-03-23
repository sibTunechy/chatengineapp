import MessageForm from './MessageForm'
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (property) => {                  // functional component
    const { chats, activeChat, userName, messages } = property;   // destructured chats, activeChat, userName, messages from property;

    const chat = chats && chats[activeChat];     // if chat exist, find chats and then activeChat.

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (      // we render the code in the div if the message has been read
            <div 
                key={`read_${index}`}
                className='read-receipt'
                style={{ float: isMyMessage? 'right': 'left', backgroundImage: `url(${person?.person?.avatar})`}}
            />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];  // if index equals 0, return null else return keys[index-1] i.e if there are messages find the last one.
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className='message-block'>
                        {
                            isMyMessage        // if its a message from me, display MyMessage, if not display TheirMessage
                            ? <MyMessage message={message}/>   //message is passed as prop
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>  // 2 props is passed here
                        }
                    </div>
                    
                    <div className='read-receipts' style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>  
                        {renderReadReceipts(message, isMyMessage)};
                    </div>

                </div> 
            )
        })
    }

   if (!chat) return 'Loading'; // if chat no dey return Loading

    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>{chat.title}</div>                
                <div className='chat-subtitle'>
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className='message-form-container'>
                <MessageForm {...property} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;