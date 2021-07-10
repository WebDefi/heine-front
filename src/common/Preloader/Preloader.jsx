import preloader from "../../assets/images/preloader.svg";
import "./preloader.css";

const Preloader = () => {
  return (
    <div className={'preloader'} style={{backgroundImage: `url(${preloader})`}}></div>
  )
}

export default Preloader;