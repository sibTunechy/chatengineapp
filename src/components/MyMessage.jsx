const MyMessage = ({message}) => {    // it accepts just one prop {message}
    if(message?.attachments?.length > 0) {      // if the message is an actual text or image... this returns an image cuz the length of message is > 0
        return (
            <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className='message-image'
                style={{ float: 'right' }}
            />
        )
    }

    return (
        <div className='message' style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;