import { ReactComponent as IconeGithub } from 'Recursos/img/github.svg';
import './styles.css';

function BarradeNavegacao() {
    return (

        <header>
            <nav className="container">
                <div className="dsmovie-barradenavegacao-conteudo">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/settings/profile" target="_blank" rel="noreferrer">
                        <div className="dsmovie-linkedin-contato">
                            <IconeGithub />
                            <p className="dsmovie-link-contato">/IsaiasJunior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default BarradeNavegacao;