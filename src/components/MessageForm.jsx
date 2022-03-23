import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (property) => {
    const [value, setValue] = useState('') // state is the value and the initial value is an ''(empty string)
    const {chatId, creds } = property;      // chatId, creds is destructured from property.

    const handleSubmit = (event) => {
        event.preventDefault();

        const text =value.trim();       // trim removes trailing whitespace from a string

        if(text.length > 0) sendMessage(creds, chatId, {text});

        setValue('');    // after sending message we setvalue to an empty string.
    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(property, chatId);
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''})
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input 
                className='message-input'
                placeholder='Start a chat...'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor='upload-button'>
                <span className='image-button'>
                    <PictureOutlined className='picture-icon'/>
                </span>
            </label>
            <input
                type='file'
                multiple={false}
                id='upload-button'
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type='submit' className='send-button'>
                <SendOutlined className='send-icon'/>
            </button>
        </form>
    )
}

export default MessageForm;