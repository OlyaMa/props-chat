import { MessageProps } from "./Typing";

export const Message = ({ from, message: { text, time } }: MessageProps) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </li>
  );
};