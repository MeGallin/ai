import { BubbleChat } from 'flowise-embed-react';
const ChatComponent = () => {
  return (
    <BubbleChat
      chatflowid="72acba25-5ed7-44c8-b1c1-59f983537e8a"
      apiHost="http://localhost:3000"
      theme={{
        button: {
          backgroundColor: 'rgba(59, 129, 246, 1)',
          right: 6,
          bottom: 48,
          size: 'large',
          iconColor: 'white',
          customIconSrc:
            'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
        },
        chatWindow: {
          welcomeMessage: 'Hello! This is custom welcome message',
          backgroundColor: '#ffffff',
          height: 700,
          width: 400,
          fontSize: 16,
          poweredByTextColor: '#ffffff',
          botMessage: {
            backgroundColor: '#f7f8ff',
            textColor: '#303235',
            showAvatar: false,
            avatarSrc:
              'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png',
          },
          userMessage: {
            backgroundColor: '#3B81F6',
            textColor: '#ffffff',
            showAvatar: false,
            avatarSrc:
              'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
          },
          textInput: {
            placeholder: 'Type your question',
            backgroundColor: '#ffffff',
            textColor: '#303235',
            sendButtonColor: '#3B81F6',
          },
        },
      }}
    />
  );
};

export default ChatComponent;
