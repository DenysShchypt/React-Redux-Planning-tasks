import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import {selectCount} from "redux/selectors";

export const TaskCounter = () => {
  const count = useSelector(selectCount)
  
  return (
    <div>
      <p className={css.text}>Active:{count.active}</p>
      <p className={css.text}>Completed:{count.completed}</p>
    </div>
  );
};