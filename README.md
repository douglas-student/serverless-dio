# Carrinho de Compras - API Serverless

## Introdução

Este projeto faz parte do desafio do Bootcamp Cloud AWS da DIO e foi criado para demonstrar a construção de uma API RESTful usando o **Serverless Framework** com **AWS Lambda**, **API Gateway** e **DynamoDB**. O objetivo é implementar as funcionalidades de um carrinho de compras simples, onde é possível adicionar, listar, consultar, atualizar e remover itens do carrinho.

A API foi projetada para ser escalável, utilizando os serviços gerenciados da AWS e implementando a infraestrutura como código.

## Solução

Nosso projeto é uma API de carrinho de compras que permite realizar as seguintes operações:

- **Adicionar item ao carrinho**: Adiciona um item ao carrinho com informações como produto, quantidade e preço.
- **Listar itens do carrinho**: Recupera todos os itens presentes no carrinho de compras.
- **Consultar item específico**: Recupera um item específico do carrinho pelo seu ID.
- **Atualizar item**: Permite atualizar a quantidade ou o preço de um item no carrinho.
- **Remover item do carrinho**: Remove um item específico do carrinho.

A API foi desenvolvida utilizando o **Serverless Framework** para facilitar o deploy e a gestão dos recursos na AWS.

## Tecnologias utilizadas

- **Serverless Framework**: Para gerenciar as funções Lambda e a infraestrutura na AWS.
- **AWS Lambda**: Para a execução das funções da API.
- **API Gateway**: Para expor a API HTTP.
- **AWS DynamoDB**: Para o armazenamento de dados do carrinho de compras.
- **Node.js**: Para a implementação das funções Lambda.
- **UUID**: Para gerar identificadores únicos para os itens do carrinho.

## Informações de como rodar o projeto

### Pré-requisitos

Antes de rodar o projeto, certifique-se de ter os seguintes itens instalados:

- **Node.js** (recomendado versão 14.x ou superior)
- **Serverless Framework**: Para instalar globalmente, execute:
  ```bash
  npm install -g serverless
  ```
- **AWS CLI**: Para interagir com a AWS. Siga a documentação oficial para configurar suas credenciais [AWS CLI Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

### Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/carrinho-de-compras.git
   cd carrinho-de-compras
   ```

2. Instale as dependências:
   ```bash
   npm init -y
   npm install uuid aws-sdk
   ```

3. Configure suas credenciais da AWS com o comando:
   ```bash
   aws configure
   ```

4. Edite o arquivo `serverless.yml` se necessário, como a região da AWS, por exemplo.

### Deploy

Para realizar o deploy da API e da infraestrutura na AWS, execute o comando abaixo:
```bash
serverless deploy -v
```

Este comando cria as funções Lambda, configura o API Gateway e o DynamoDB conforme o especificado no arquivo `serverless.yml`.

### Testando a API

Após o deploy, o Serverless Framework fornecerá uma URL da API, onde você pode testar os seguintes endpoints:

- **POST /cart**: Adicionar item ao carrinho.
- **GET /cart**: Listar todos os itens do carrinho.
- **GET /cart/{id}**: Consultar um item específico.
- **PUT /cart/{id}**: Atualizar um item no carrinho.
- **DELETE /cart/{id}**: Remover um item do carrinho.

Você pode usar ferramentas como **Postman** ou **cURL** para testar os endpoints.

### Exemplo de requisições:

**Adicionar item ao carrinho**:
```bash
POST /cart
{
  "produtoId": "1234",
  "quantidade": 2,
  "preco": 150.00
}
```

**Atualizar item no carrinho**:
```bash
PUT /cart/{id}
{
  "quantidade": 3,
  "preco": 120.00
}
```

**Remover item do carrinho**:
```bash
DELETE /cart/{id}
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou enviar pull requests.

## Licença

Este projeto é de código aberto, licenciado sob a [MIT License](LICENSE).
