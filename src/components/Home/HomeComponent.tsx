import ChatComponent from '../Chat/ChatComponent';
import './HomeComponent.css';
const HomeComponent = () => {
  return (
    <div className="home-wrapper">
      <h1>Mercedes-Benz CLS Operator Manual Chatbot!</h1>
      <p>
        <em>Unlock the Power of Knowledge with Ease</em>
      </p>
      <h2>Introduction:</h2>
      <p>
        Welcome to the ultimate guide for navigating your Mercedes-Benz CLS.
        Whether you're a seasoned driver or just getting acquainted with your
        vehicle, our chatbot is here to make your journey smoother. Say goodbye
        to flipping through thick manuals and hello to instant, personalized
        assistance right at your fingertips.
      </p>
      <h2>What We Do:</h2>
      <p>
        Our chatbot provides quick and intuitive access to the wealth of
        information found in your Mercedes-Benz CLS operator manual. From
        understanding warning lights to mastering advanced features, our chatbot
        is your virtual companion on the road. With simple conversational
        prompts, you can effortlessly find answers to your questions, ensuring
        that you get the most out of your driving experience.
      </p>
      <h2>How to Use:</h2>
      <p>
        Using our chatbot is as easy as starting your engine. Simply type your
        question or concern into the chat window, and our intelligent system
        will provide you with the relevant information in real-time. Whether
        you're troubleshooting a problem or exploring new features, our chatbot
        is always ready to assist you, 24/7.
      </p>
      <h2>Get Started:</h2>
      <p>
        Ready to unlock the full potential of your Mercedes-Benz CLS? Click
        below to start chatting with our knowledgeable bot and take control of
        your driving experience today.
      </p>
      <p>
        <strong>Start Chatting Now</strong>
      </p>
      <ChatComponent />
    </div>
  );
};

export default HomeComponent;
