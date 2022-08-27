import "./notice.css";

function Notice({ styles, notText }) {
  return (
    <div className={`message-box ${styles}`}>
      <div className="notice">
        {notText.type}
        {notText.text !== undefined ? (
          <p className="notice__text"> {notText.text}</p>
        ) : null}
      </div>
    </div>
  );
}
export default Notice;
