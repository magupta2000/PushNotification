import React, { useEffect, useState } from 'react';

const Message = ({payload}) => {
    const [notification, setNotification] = useState({title: '', body: '', image:''})
  
    useEffect(() => {
      setNotification({title: payload?.title, body: payload?.body, image: payload?.image})
    }, [payload])
  
    return (
      <React.Fragment>
          <div className='notification'>
              {notification.image && (
                <div id="imageContainer">
                  <img src={notification?.image} width={100} />
                </div>
              )}
            <h5>{notification.title}</h5>
          <p className='msg-body'>{notification.body}</p>
          </div>
      </React.Fragment>
    )
  }
  
  export default Message