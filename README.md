# 🍲 Sistema de Gerenciamento de Receitas Culinárias

Este projeto é uma aplicação web **Fullstack** desenvolvida como parte da **Avaliação Prática 01** da disciplina de **Desenvolvimento Back-end I** do curso de Pós-graduação em Desenvolvimento Full Stack.

A aplicação permite o gerenciamento completo (CRUD) de receitas culinárias, utilizando **Node.js**, **Express** e **Bootstrap** (instalação offline), seguindo a arquitetura **MVC (Model-View-Controller)**.

---

## 🚀 Funcionalidades

O sistema oferece as seguintes funcionalidades:

* **🏠 Página Principal (Listagem):**
    * Exibição de todas as receitas cadastradas em formato de **Cards**.
    * Indicação visual e mensagem amigável quando não há receitas cadastradas.
    * Menu de navegação superior ativo e responsivo.
* **➕ Criação de Receita:**
    * Formulário para cadastro com validação de campos obrigatórios.
    * Campos: Título, Ingredientes, Modo de Preparo e Tempo de Preparo (mínimo 1 min).
* **👁️ Consulta de Detalhes:**
    * Visualização detalhada da receita.
    * Uso da tag `<pre>` para preservar a formatação (quebras de linha) dos ingredientes e modo de preparo.
* **✏️ Alteração de Receita:**
    * Formulário pré-preenchido para edição dos dados.
* **🗑️ Exclusão de Receita:**
    * Botão de exclusão disponível na listagem e nos detalhes.
    * **Modal de Confirmação:** Janela modal do Bootstrap para evitar exclusões acidentais.
* **🔍 Pesquisa:**
    * Busca de receitas pelo título (filtro *case-insensitive*).
    * Exibição dos resultados da busca ou mensagem de "Nenhum resultado encontrado".
* **ℹ️ Página Sobre:**
    * Informações sobre o autor, disciplina e tecnologias utilizadas.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/) (v4.21.2)
* **Template Engine:** [Handlebars (HBS)](https://handlebarsjs.com/) (v4.2.0)
* **Estilização:** [Bootstrap 5](https://getbootstrap.com/) (v5.3.3) - **Instalação Offline**
* **Ícones:** Bootstrap Icons (CDN)
* **Arquitetura:** MVC (Model - View - Controller)

---

## 📂 Estrutura do Projeto

A estrutura de pastas segue o padrão gerado pelo `express-generator` e adaptado para MVC conforme as aulas:

```text
receitas-culinarias/
├── bin/
│   └── www                 # Script de inicialização do servidor
├── controller/             # Lógica de controle (Regras de Negócio)
│   └── receitasController.js
├── model/                  # Modelo de Dados
│   └── receitasMemoria.js  # Gerenciamento de dados em memória (Array de Objetos)
├── public/                 # Arquivos Estáticos (Bootstrap Offline)
│   ├── images/
│   ├── javascripts/
│   │   └── bootstrap/      # JS do Bootstrap
│   └── stylesheets/
│       ├── bootstrap/      # CSS do Bootstrap
│       └── style.css       # CSS personalizado
├── routes/                 # Definição das Rotas (URLs)
│   └── index.js            # Rotas da aplicação
├── views/                  # Interfaces (Templates Handlebars)
│   ├── alteraReceita.hbs
│   ├── consultaReceita.hbs
│   ├── criaReceita.hbs
│   ├── error.hbs
│   ├── index.hbs           # Tela Principal
│   ├── layout.hbs          # Layout base (Cabeçalho e imports)
│   ├── novaReceita.hbs
│   ├── pesquisa.hbs
│   └── sobre.hbs
├── app.js                  # Configuração principal da aplicação
└── package.json            # Dependências e scripts
```

## 🎲 Modelo de Dados

Conforme os requisitos da avaliação, o modelo de dados não utiliza classes complexas nem banco de dados externo.
* **Armazenamento:** Em memória (Array de objetos JavaScript).
* **Persistência:** Os dados são perdidos ao reiniciar o servidor.

***Estrutura do Objeto Receita:**

```javascript
{
  id: Number,          // Gerado automaticamente
  titulo: String,      // Título da receita
  ingredientes: String,// Lista de ingredientes (texto longo)
  preparo: String,     // Modo de preparo (texto longo)
  tempo: Number        // Tempo em minutos
}
```

## 🔧 Como Executar o Projeto

### Pré-requisitos
* Ter o **Node.js** e o **npm** instalados em sua máquina.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Wanderson-A-Timoteo/receitas-culinarias.git
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd receitas-culinarias
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor:**
    ```bash
    npm start
    ```

5.  **Acesse no navegador:**
    Abra o seu navegador e digite o endereço: `http://localhost:3000`

## 👤 Autor

**Wanderson de Almeida Timóteo**

* **Disciplina:** Desenvolvimento Back-end I
* **Curso:** Pós-graduação em Desenvolvimento Full Stack
* **Instituição:** IF Sudeste MG