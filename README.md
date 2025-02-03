# Sorteio de Amigo Secreto

Uma aplicação web simples para organizar sorteios de amigo secreto.

## Demo
Você pode acessar uma versão live do projeto aqui: [Sorteio de Amigo Secret](https://fernandabitten.github.io/g8-one-alura-amigo-secreto)

## Funcionalidades

- Adicionar nomes à lista de participantes
- Sortear um amigo secreto aleatoriamente
- Interface amigável com feedback visual e sonoro
- Validação de nomes duplicados
- Capitalização automática de nomes
- Botões responsivos que se adaptam a diferentes tamanhos de tela

## Como Usar

1. Acesse a [versão online](https://fernandabitten.github.io/g8-one-alura-amigo-secreto/) ou abra o arquivo `index.html` localmente em um navegador moderno
2. Digite o nome de um participante e clique em "Adicionar"
3. Repita o passo 2 até ter todos os participantes
4. Clique em "Sortear amigo" para escolher um amigo secreto
5. Use "Reiniciar jogo" para começar um novo sorteio

## Recursos de Acessibilidade

- Feedback sonoro usando Web Speech API
- Textos claros e legíveis
- Alto contraste nas cores
- Estrutura semântica HTML

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Web Speech API para feedback sonoro

## Requisitos do Sistema

- Navegador moderno com suporte a ES6+
- Conexão com internet para carregar fontes
- Áudio habilitado para feedback sonoro

## Problemas Comuns e Soluções

- Nome Duplicado: Sistema impede a adição e exibe mensagem de erro
- Poucos Participantes: Sorteio requer no mínimo 2 participantes
- Botões Desabilitados: Interface indica claramente quando ações não estão disponíveis

## Instalação Local
1. Clone o repositório:
git clone https://github.com/Fernandabitten/g8-one-alura-amigo-secreto.git

2. Abra o arquivo index.html em seu navegador

## Estrutura do Projeto

- `index.html`: Estrutura da página
- `styles.css`: Estilos da aplicação
- `app.js`: Lógica do sorteio e interações

## Notas de Desenvolvimento

- O projeto usa JavaScript puro, sem dependências externas
- A lista de amigos é mantida em memória durante a sessão
- Nomes são capitalizados automaticamente para consistência

## Melhorias Futuras

- Persistência de dados para manter a lista entre sessões
- Opção para exportar a lista de participantes
- Suporte para múltiplos idiomas

