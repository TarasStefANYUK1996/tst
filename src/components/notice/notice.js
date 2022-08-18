import "./notice.css";

function Notice({ styles, notText }) {
  return (
    <div className={`message-box ${styles}`}>
      <div className="notice">
        {notText.type}
        <p className="notice__text"> {notText.text}</p>
      </div>
    </div>
  );
}
export default Notice;
