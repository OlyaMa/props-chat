export interface MessageProps {
    from: { name: string };
    message: {
      id: string;
      type: "response" | "message" | "typing";
      time: string;
      text?: string;
    };
  }
  
  export const Typing = ({ from, message: {  time } }: MessageProps) => {
    return (
      <li>
        <div className="message-data">
          <span className="message-data-name">
            <i className="fa fa-circle online"></i>
            {from.name}
          </span>
          <span className="message-data-time">{time}</span>
        </div>
      </li>
    );
  };