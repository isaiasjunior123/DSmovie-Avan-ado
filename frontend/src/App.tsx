import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listagem from 'Paginas/Listagem';
import Formulario from 'Paginas/Formulario';
import BarradeNavegacao from "Componentes/BarradeNavegacao";


function App() {
  return (
    <BrowserRouter>
      <BarradeNavegacao />
      <Routes>
        <Route path="/" element={<Listagem />} />
        <Route path="/Formulario">
          <Route path=":IddoFilme" element={<Formulario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;


/*Explicacao do codigo

<BrowserRouter>: É um componente fornecido pela biblioteca react-router-dom que define o roteamento do aplicativo.
                 Ele permite que você navegue entre diferentes páginas com base nas URLs.

<BarradeNavegacao>: É um componente personalizado que representa a barra de navegação do aplicativo.
                    Ele será renderizado em todas as páginas porque foi usado diretamente dentro do <BrowserRouter>.

<Routes>: É um componente fornecido pelo react-router-dom que define as rotas e os componentes correspondentes para cada rota.
           Dentro dele, você pode definir várias rotas usando <Route>.

<Route path="/">: Define uma rota para a página inicial.
                 Quando a URL corresponder a /, o componente <Listagem /> será renderizado.

<Route path="/formulario">: Define uma rota para a página de formulário.
             Quando a URL corresponder a /formulario, o componente <Formulario /> será renderizado.

<Route path=":Id-do-Filme">: Define uma rota dinâmica para o formulário com base no ID do filme.
                             Por exemplo, se a URL for /formulario/1, o componente <Formulario /> será renderizado
                              e poderá acessar o ID do filme como um parâmetro.

resumo: 
 o código está configurando o roteamento para diferentes páginas do aplicativo.
 Ele define uma barra de navegação que será mostrada em todas as páginas.
 Em seguida, são definidas rotas para a página inicial, a página de formulário e uma rota dinâmica para o formulário com base no ID do filme.




*/ 