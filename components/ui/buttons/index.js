import style from "./button.module.css";
function BackButton({ onclick }) {
  const { button_continer, backbutton } = style;

  return (
    <div>
      <button className={backbutton} onClick={onclick}>{`Back`}</button>
    </div>
  );
}

export { BackButton };
