import style from "./button.module.css";
function BackButton({ onclick }) {
  const { backbutton } = style;

  return <button className={backbutton} onClick={onclick}>{`Back`}</button>;
}

export { BackButton };
