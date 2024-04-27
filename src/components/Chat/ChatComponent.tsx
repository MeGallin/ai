import { BubbleChat } from 'flowise-embed-react';
const ChatComponent = () => {
  return (
    <BubbleChat
      chatflowid="4cf8df7e-09a3-45f5-bd37-8b5791d6b836"
      apiHost="https://flowise-ai-cls.onrender.com"
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
          welcomeMessage: 'Hi, I am here to help you with CLS.',
          backgroundColor: '#ffffff',
          height: 650,
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
            placeholder: 'Type your or ask a question',
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
