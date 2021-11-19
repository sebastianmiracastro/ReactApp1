import './TextBodyInformation.css'

export const TextBoodyInformation = () => {
    return (
        <div className="ContainerAllText">
            <h1 className="WelcomeToReactH1">
                Bienvenidos a mi primera página en React
            </h1>
            <div className="Information">
                <h2 className="RecordReactH2">
                Recordemos algunas de las caracteristicas de ReactJS
                </h2>
                <p className="WhyReactP">
                Es una libreria de JavaScript <br/>

                Funciona basado en un elemento conocido como el virtual DOM <br/>

                renderiza solamente los componentes que necesita, lo que hace que sea mas versatil<br/>

                la utilizacion de los HOOKS facilita su logica FRONTEND
                </p>
            </div>
        </div>
    )
} 