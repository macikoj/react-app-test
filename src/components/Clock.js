import { useSelector } from "react-redux";
import classes from './Clock.module.css'

const  Clock=() =>{

    const  time=useSelector(state=>state.time.time)

    return (
      <div className={classes.wrapper}>
        <h2> {time}</h2>
      </div>
    );
  }

export default Clock;
  

  

  