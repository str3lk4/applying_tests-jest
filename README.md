# Aplicação Básica de Testes em Jest

Este repositório tem, por objetivo, a aplicação de testagens simples para fixação da utilização da ferramenta de testagem de aplicações em Javascript **JEST**.

Utilizo principalmente três exercícios onde aplico o a metodologia de **Testes Unitários**, em comentários há a aplicação de princípios em **TDD**.

# Enunciados de Exercícios:

* Crie um objeto Triangulo, que receba os tamanhos A, B e C representando o tamanho de cada lado do triangulo com algumas aplicações que podem ser verificadas no comentário (por fazer: implementar função que aplique **Teorema de Herão**.)

* Resolva o exercício que converte números Naturais para números Romanos usando **Objetos**. Neste caso, o exercício é criar uma aplicação que traduza números arábicos para romanos armazenando/utilizando Objetos em JS como **dicionário**.

* Entrar com um nome, idade e sexo de 20 pessoas.
Imprimir o nome se a pessoa for do sexo masculino e tiver mais de 27 anos.

# Utilizando o repositório:

~~~
npm init
npm install jest
~~~

Depois disso, vale atualizar o `package.json` para que sua aplicação reconheça o arquivo de teste. A forma mais fácil de conseguir depois realizar a testagem é alterando nome dos arquivos de **teste**, abrigados na pasta `/teste` para incluir `.spec` antes de `.js`.

Depois:

~~~
npm run test
~~~

Já realiza automaticamente a testagem pra você rodando as baterias especificadas.