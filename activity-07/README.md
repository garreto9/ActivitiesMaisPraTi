# Projeto ReactJS - Prática de Conceitos Essenciais

Este repositório contém várias atividades de prática para desenvolver conceitos essenciais do ReactJS. Cada atividade foi criada para reforçar o aprendizado de hooks, manipulação de estados, efeitos colaterais, listas e muito mais.

## Estrutura do Projeto

O projeto foi organizado com uma estrutura de pastas clara, permitindo fácil navegação e leitura do código. Cada atividade está armazenada em sua própria pasta dentro do projeto, e todas as atividades podem ser acessadas a partir da página principal.

## Atividades

### 1. **Contador Simples**

- **Descrição**: Crie um componente de contador com dois botões: "Incrementar" e "Decrementar". Utilize o `useState` para armazenar o valor do contador. **Desafio**: Adicionar uma condição para não permitir que o valor do contador seja menor que zero.

### 2. **Alteração de Cor de Fundo**

- **Descrição**: Crie um componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão. Utilize o `useState` para armazenar a cor atual e o `useEffect` para atualizar o estilo do fundo. **Desafio**: Gerar cores aleatórias toda vez que o botão for clicado.

### 3. **Lista de Tarefas**

- **Descrição**: Crie um aplicativo de lista de tarefas onde o usuário pode adicionar e remover tarefas. Utilize o `useState` para armazenar a lista de tarefas e renderizar cada tarefa como um item de lista. **Desafio**: Permitir que o usuário marque as tarefas como concluídas e filtre as tarefas pendentes.

### 4. **Temporizador com useEffect**

- **Descrição**: Crie um temporizador que conta o tempo em segundos e exibe na tela. Utilize o `useEffect` para iniciar o temporizador e o `useState` para armazenar o tempo. **Desafio**: Adicionar botões para pausar e reiniciar o temporizador.

### 5. **Filtro de Lista**

- **Descrição**: Crie um componente que renderiza uma lista de nomes. Adicione um campo de entrada para filtrar os nomes com base no texto digitado. Utilize o `useState` para controlar o valor do filtro e o `map` para exibir os itens filtrados. **Desafio**: Ignorar as hierarquias e as minúcias ao filtrar.

### 6. **Formulário de Registro Simples**

- **Descrição**: Crie um formulário com campos de nome, e-mail e senha. Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas. Utilize o `useState` para armazenar os valores dos campos. **Desafio**: Adicionar validações para garantir que todos os campos sejam preenchidos antes de enviar.

### 7. **Aplicação de Requisição de Dados Simples**

- **Descrição**: Crie um componente que exibe uma lista de postagens obtidas de uma API pública (como JSONPlaceholder). Utilize o `useEffect` para fazer a requisição ao carregar o componente. **Desafio**: Adicionar um botão para recarregar os dados e um indicador de carregamento enquanto a requisição está sendo feita.

### 8. **Galeria de Imagens com Visualização**

- **Descrição**: Crie uma galeria simples de imagens. Quando o usuário clica em uma imagem, exiba-a em uma visualização ampliada em um modal. Utilize o `useState` para armazenar a imagem selecionada e renderizar o modal. **Desafio**: Adicionar um botão de "Fechar" no modal e navegação entre as imagens.

### 9. **Timer com Intervalo e Alerta**

- **Descrição**: Crie um timer onde o usuário define a quantidade de segundos para a contagem regressiva. Ao iniciar, o tempo diminui a cada segundo. Utilize o `useState` e o `useEffect` para implementar a contagem regressiva. **Desafio**: Adicionar botões para pausar e reiniciar o timer.

### 10. **Componentes com Tabs Navegáveis**

- **Descrição**: Crie uma interface com abas (tabs) onde cada aba exibe um conteúdo diferente. Utilize o `useState` para controlar qual aba está ativa e renderizar o conteúdo de acordo com a aba selecionada. **Desafio**: Adicionar um efeito visual para destacar a aba ativa.

## Estrutura do Projeto

- **src/**: Contém o arquivo HTML principal e outros recursos estáticos.
- **components/**: Contém todos os componentes criados para as atividades.
- **styles/**: Contém as estilizações.
- **App.jsx**: Página principal que serve como menu para acessar cada atividade.

## Instruções para Instalação e Execução



1. **Clone o repositório**:

```bash
    git clone https://github.com/garreto9/ActivitiesMaisPraTi.git
```

2. **Abra a pasta clonada** na sua IDE (ou editor de código) e navegue até a seguinte pasta:

```bash
    cd activity-07
```

3. **Instale as dependências** necessárias para o projeto:

No terminal, execute o seguinte comando:

```bash
    npm install
```


4. **Instale o React Router DOM**:

Execute o comando abaixo para instalar o pacote necessário para navegação:

```bash
    npm install react-router-dom
```


5. **Inicie o servidor** de desenvolvimento:

Após a instalação das dependências, execute o seguinte comando no terminal:

```bash
    npm run dev
```


6. Acesse o Projeto no Navegador

Após iniciar o servidor, acesse o projeto no navegador utilizando o link fornecido no terminal (geralmente, http://localhost:3000).
