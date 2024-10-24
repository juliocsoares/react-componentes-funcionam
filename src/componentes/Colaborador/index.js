import './colaborador.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }


    return (<div className="colaborador">
        <IoIosCloseCircleOutline
            size='25'
            className='deletar'
            onClick={() => { aoDeletar(colaborador.id) }}>
        </IoIosCloseCircleOutline>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito
                    ? <MdOutlineFavorite {...propsFavorito} color='red'/>
                    : <GrFavorite {...propsFavorito} color='red'/>
                    }
            </div>
        </div>
    </div>)
}

export default Colaborador