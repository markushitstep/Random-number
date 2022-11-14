import styles from "./MyInput.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MyInput = (props) => {
  const { 
    value, 
    onChange,
    disabled
  } = props;

  useEffect(() => {
    Aos.init({duration: 1000});
  },[])

  return (
    <input  
      value={value}
      onChange={onChange}
      className={styles.myInput}
      disabled={disabled}
      placeholder='0000'
      data-aos="fade-down" 
      data-aos-duration="2000"
    />
  )
}

export default MyInput;
