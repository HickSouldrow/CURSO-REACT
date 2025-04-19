import { Link } from 'react-router-dom';

import style from './Cabecalho.module.css';

const Cabecalho = () => {
  return (
    <div className={style.Cabecalho}>
      <Link to="/">
        <h1>
          <span>To-Do </span>
          List
        </h1>
      </Link>
      <Link to="/sobre-nos">
      <h2>
        Sobre Nós
      </h2>
      </Link>
    </div>
  );
};

export { Cabecalho };
