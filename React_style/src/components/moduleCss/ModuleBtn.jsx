import style from "./moduleBtn.module.css";

function ModuleBtn({btnStyle, btnName}) {
  return (
    <div className={style.main}>
      <button className={style[btnStyle]}>
          {btnName}
      </button>
    </div>
  )
}

export default ModuleBtn

