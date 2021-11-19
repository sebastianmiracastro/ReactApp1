import './Card.css';
import ImgCard from '../../../images/logo512.png';

export const Card = () => {
    return (
    <div className="ContentAllProgram">
      <div className="CardContainer" >
          <img className="ImgCard" src={ImgCard} alt="CardImage"></img>
          <h2 className="CardNameObject">React</h2>
          <p className="DescriptionObject">React te ayuda a crear interfaces
           de usuario interactivas de forma sencilla. Diseña vistas simples 
           para cada estado en tu aplicación, y React se encargará de actualizar 
           y renderizar de manera eficiente los componentes correctos cuando los datos 
           cambien.</p>
      </div>
    </div>
  );
}

export default Card;