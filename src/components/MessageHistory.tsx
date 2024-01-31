import { Message } from "./Message";
import { Response } from "./Response";
import { Typing } from "./Typing";

export interface MessageHistoryProps {
  messages: {
    id: string;
    from: { name: string };
    type: "message" | "typing" | "response";
    time: string;
    text?: string;
  }[];
}

export const MessageHistory = ({ messages = [] }: MessageHistoryProps) => {
  if (messages.length === 0) return null;
  return (
    <ul>
      {messages.map((message) => {
        if (message.type === "message") {
          return (
            <Message key={message.id} from={message.from} message={message} />
          );
        }
        if (message.type === "response") {
          return (
            <Response key={message.id} from={message.from} message={message} />
          );
        }
        if (message.type === "typing") {
          return (
            <Typing key={message.id} from={message.from} message={message} />
          );
        }
      })}
    </ul>
  );
};