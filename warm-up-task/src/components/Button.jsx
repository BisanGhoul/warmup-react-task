import "../styles/Button.css";

function Button({ text, type, onClick }) {
  const styles = {
    save: "button-save",
    cancel: "button-cancel",
  };
  return (
    <>
      <button className={`button ${styles[type]}`}>{text}</button>
    </>
  );
}

export default Button;
