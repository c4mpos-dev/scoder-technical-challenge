# 🏍️ Scoder FakeStore

Loja virtual fictícia desenvolvida com **React**, **Vite** e **Tailwind CSS**, focada em boas práticas de UI moderna e arquitetura de componentes reutilizáveis.

## 📦 Funcionalidades

* Listagem de produtos por categoria (consumindo a [Fake Store API](https://fakestoreapi.com/))
* Componente de **pesquisa** com validação e atualização em tempo real
* Sistema de **carrinho de compras** com local storage:

  * Adição de produtos com controle de quantidade
  * Ícone com contador animado
  * Drawer lateral para visualizar/remover itens
* Página de **checkout** com múltiplas etapas:

  * Dados pessoais
  * Endereço de entrega
  * Pagamento
  * Confirmação
* Navegação suave com botão “Explorar Produtos” que rola para a listagem
* Layout totalmente **responsivo**:
* Design com animações e gradientes (ex: `animate-pulse`, `hover:scale`)
* Estilizado com **Tailwind CSS**
* Componentes personalizados com ícones (`lucide-react`)

## ✨ Tecnologias

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Zod](https://github.com/colinhacks/zod) + [React Hook Form](https://react-hook-form.com/) para validações
* [Lucide React](https://lucide.dev/)
* [Fake Store API](https://fakestoreapi.com/) como backend mock

## 🚀 Como executar o projeto

### 1. Clone o repositório:

```bash
git clone https://github.com/c4mpos-dev/scoder-technical-challenge.git
cd scoder-technical-challenge
```

### 2. Instale as dependências:

```bash
npm install
# ou
yarn
```

### 3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

### 4. Acesse no navegador:

```
http://localhost:5173
```

## 📌 Notas

* Este projeto foi desenvolvido como parte de uma avaliação técnica da empresa Scoder.