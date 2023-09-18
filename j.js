mport Sidebar from './MainMenu';

import logo from './logo.svg';

import React, { useState, useEffect, useRef  } from 'react';
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';
import axios from 'axios';

import './Chatbot.css';

const ChatMessage = ({ text, isUser }) => {
  return (
    <div className={`chat-message${isUser ? ' user' : ' bot'}`}>
      <div className="chat-message-content">{text}</div>
    </div>
  );
};

const Chatbot = () => {
  // const chatWindowRef = useRef(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      sendMessage(message);
      // setMessage('');
    }
  };
      
    const sendMessage = async (message) => {
      
      try {
        const newMessage = { text: message,  isUser: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      
      console.log('this is the message:', message);
        await ('http://localhost:5000/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({ 'data': message })
          })
          .then(response => { 
            // console.log(response.text())
            return response.json()
              // if (!response.ok) {
              //   throw new Error(`Request failed with status ${response.status}`);
              // }
              // console.log(response)
              // return response.json();
            })
          .then(data => {
            console.log(data);
            // const modifiedData = JSON.stringify(data).replace(/\\n/g, '');
            // console.log(JSON.stringify(data))
            console.log(data.AIMessage);
            // console.log(modifiedData)
            const newMessage = { text: data.AIMessage,  isUser: false };
            setMessages(prevMessages => [...prevMessages, newMessage])
          })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
      } catch (error) {
        console.error('Error:', error);
      }
      
    }
        return (
          <>
      <Sidebar />
      <Container>
        <div id="chat-window" className="chat-window">
          {messages.map((message, index) => (
            <ChatMessage key={index} text={message.text} isUser={message.isUser} />
            ))}
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={9} sm={10}>
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
                />
            </Col>
            <Col xs={3} sm={2}>
              <Button color="primary" type="submit">
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Chatbot;