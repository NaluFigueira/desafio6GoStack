<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 6: Primeiro projeto com React Native
</h3>


### Descrição e tecnologias

Dar continuidade a aplicação desenvolvida durante o módulo 6. A aplicação consiste no armazenamento e visualização de lista de usuários do git,sendo possível visualizar o perfil e os favoritos de cada um.
Para o desafio foi requisitado a adição de algumas funcionalidades:

<ul>
  <li> <strong> Loading de repositórios: </strong>  antes de carregar a lista de repositórios favoritados na tela de detalhes do Usuário, aparece um indicator de loading. Caso o usuário não tenha repositórios favoritados, a aplicação exibe um aviso.</li>
  <li> <strong> Scroll infinito: </strong>  existe um  scroll infinito na lista de repositórios favoritados. Assim que o usuário chega nos 20% do final de lista, um sinal de carregamento aparece, e novos repositórios são carregados.</li>
  <li> <strong> Pull to Refresh: </strong>ao arrastar a lista de repositórios para baixo, a lista é resetada para os 30 primeiros repositórios favoritados. </li>
  <li> <strong> WebView </strong> </li>
</ul>

**Principais tecnologias**: Bare React Native, Styled Components, React Navigation, Async Storage.

**Ferramentas de edição e desenvolvimento**:  Eslint, Prettier.

**Ferramentas de comunicação com a api**: axios.

**Ferramentas de validação**: PropTypes.


Link para o desafio: https://github.com/Rocketseat/bootcamp-gostack-desafio-06/blob/master/README.md
