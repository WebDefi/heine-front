import { Link } from "react-router-dom";
import "./notFound.css";
import notFoundIcon from "../../assets/images/404.gif";

const notFound = () => {
  return (
    <div className={'notFound-wrap'}>
      <div>
        <div className={'notFound-icon'} style={{backgroundImage: `url(${notFoundIcon})`}} />
        <h2>Похоже такой страницы нет.</h2>
      <br/>
      <small><Link to="/">Вернутся на главную</Link></small>
      </div>
    </div>
  )
};

export default notFound;

