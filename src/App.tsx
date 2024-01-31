import './App.css'
import { messages } from "./data/data";
import { MessageHistory } from "./components/MessageHistory";

export default function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory messages={messages} />
        </div>
      </div>
    </div>
  );
}
