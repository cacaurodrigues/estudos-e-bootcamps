# Fundamentos de CSS (Cascading Style Sheets)
- O que é css? É um mecanismo para adicionar estilos em documentos web (HTML).
Obs.; não é lingaugem de programação nem de marcação, é uma linguagem de estilos.\

## Propriedades e valores
- Propriedade é a característica/aparência de um elemento do HTML. Como: cor, dimensão, espaçamento.
Já o valor define o resultado (em conjunto da propriedade) de uma propriedade e commo o navegador vai exiber o estilo do elemento.

- Sintaxe dada por <propriedade: valor;>
EX.:
background: white;
color: red;

## Formas de Declarar o CSS
Há diversas formas de fazer issso:

- CSS Inine: adiciona as propriedades com atributo HMTL "style" dentro das tags HTML, elemento por elemento. Menos usual, pois é de dificil manutenção por ser elemento a elemento, no entanto é útil quando não há acesso ao arquivo acesso ao sistema ou quando é preciso sobrescrever um estilo. Outra utilidade é testar de forma rápida o estilo.

~~~HTML
<body>
    <h1 style="background: red; color:white;">Iniciando CSS</h1>
</body>
~~~

Obs.: CSS Inine tem mais prioridade sobre as outras formas de declarar CSS! Por isso ele é usado no caso de necessidade de sobrescrever.

- CSS interno: código CSS adicionado na tag **head** da página HTML através da tag style. Nesse caso, pode-ser especificar estilo por tag. Para ser reutilizado, precisa ser copiado por inteiro os estilos, por isso não é bom para manutenção também.

~~~HTML
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos Css</title>
    <style>
        h1{background:rgb(68, 0, 255);
        color:rgb(206, 52, 173); }
    </style>
</head>
<body>
    <h1>Iniciando CSS</h1>
</body>
~~~

- CSS Externo: criação de arquivo geralmente chamado "styles" externo de extensão **.CSS** (que geralmente fica em uma pasta css dentro de outra pasta chamada assets) com as regras que desejamos aplicar e o arquivo é referenciado no HTML da página atravé da tag **link**.

Para fazer o estilo funcionar, é preciso fazer um linnk entre as páginas no arquivo HTML com a tag **link** dentro da "head" da página:

~~~HTML
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos Css</title>
    <link rel="stylesheet" href=".\assets\css\style.css">
</head>
~~~

Esse formato de declaração permite um código mais limpo, carregamento da página mais rápido, melhor manutenção e processo de procedimento mais fácil, pois um mesmo arquivo de estilos, pode ser fácilmente usado em outras páginas.

Atenção: o css é carregado em separado da página, o que pode acarreta lentidão pra carregar os estilos, mas há formas de mitigas isso.

## Depurando CSS
Depuração (debug) é o processo de identificar problemas no código fonte de uma aplicação e entender seu comportamento e é feito com as ferramentas de desenvolvedor (acessado por algum atalho ou pela aba de configurações).

## Seletores CSS
Forma como é definido (selecionado) o que irá sofre a estilização. Sào tipos de seletores:

ATENÇÃO: nos exemplos teremos declaração CSS Interno, mas declaração externa poderia ser usadas, esse tipo foi escolhido apenas para simplificar a visualização. No caso do Inline não se aplica, pois ela é elemento a elemento.

1. Seletor por tag/tipo
Busca elementos por tag HTML específica. 

2. Seletor por ID (#) 
Busca elementos através do atributo "id". Esse atributo está disponível em todas as tags HTML, dever ser único para que assim, possa ser feito de forma específica a estilização. Para definir o estilo na declaração, o ID deve ser precedido de **#** (hashtag).

~~~html
<head>
    <style>
    #testo-exemplo{
        background: blue;
    }
    </style>
</head>
<body>
    <p id="texto-exemplo">Texto de exemplo</p>
</body>
~~~

3. Seletor por Classe (.)
Busca elementos atráves do atributo "class", que é uma forma de indetificar vários elementos e, consequentement, aplicar estilo aos elementos dessa classe. Diferente do seletor por ID, que é unitário. Outro detalhe em relação a classe é que podemos definir mais de uma classe por elemento, sendo que para o código entenda isso é necessário apenas adicionar espaço m branco entre o nome das classes, classes essas que serão independentes. Para definir o estilo na declaração, o nome da classe deve ser precedido de **.** (ponto).

~~~html
<head>
    <style>
    .titulo {
        background: blue;
    }
    .texto-classe-diferente{
        text-transform: uppercase;
    }
    </style>
</head>
<body>
    <h1 class="titulo">Titulo</h1>
    <p id="texto-exemplo">Texto de exemplo</p>
    <h2 class="titulo">SUBTitulo 2</h1>
    <p id="texto-exemplo2">Texto de exemplo</p>
    <h1 class="titulo texto-classe-diferente">Titulo 2</h1>
    <p id="texto-exemplo3">Texto de exemplo</p>
</body>
~~~

4. Seletor Universal
Seleciona todos os elementos HTML, o que ajuda a padronizar certas caracteríticas ao corpo da página. Para definir o estilo na declaração, o nome da classe deve ser precedido de * (asterisco).

~~~html
<head>
    <style>
        *{
            font-weight: bold;
        }
    </style>
</head>
~~~

5. Seletor de Atributo
Seleciona elementos que possuem um atributo específico no documento HTML, sendo possível também escolher atributos com valor específico.

sintaxe básica:
- pesquisar todos com o mesmo atributo para atribuir estilo:
    
    [nome-do-atributo]{estilo}

- pesquisar palavra exata para colocar estilo:
    
    [nome-do-atributo="valor-especifico"]{estilo}

- "~" permite pesquisar palavra exata ou valor dentro do atributo separado por espaço (isolada):
    
    [nome-do-atributo~="valor-parcial-que-especifica"]{estilo}

- "|" permite pesquisar palavra exata ou valor dentro do atributo separado por hifen:
    
    [nome-do-atributo|="valor-parcial-que-especifica"]{estilo}

- "^"permite definir prefixo do valor dentro de atributo para estilizar. Caso seja um sufixo, seria "$" no lugar:

    [nome-do-atributo^="prefixo-do-valor"]{estilo}

- "*" permite procurar um valor qualquer (independente de ser prefixo ou sufixo do elemento, de ter hifen ou de ter espaço):"

    [nome-do-atributo*="valor"]{estilo}

~~~html
<head>
    <style>
        [title]{
            color: red;
        }
        [title="w3schools"]{
            color: blue;
        }
        [title~="curso"]{
            background:lightyellow;
        }
    </style>
</head>
<body>
    <ul>
        <li><a title="curso w3schools" href="https://www.w3schools.com/html/html_formatting.asp">W3 Schools</a></li>
        <li><a title="curso tutorial" href="http://www.clem.ufba.br/tuts/html/c05.htm">Formatação em HTML</a></li>
        <li><a title="HTML avançado" href="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting">Formatação avançada</a></li>
    </ul>      
</body>
~~~~

### Agrupamento de Seletores:
É possível agrupar diferentes seletores em regras apenas separando os seletores por virgula, para então definir estilo para vários seletores diferentes.

~~~html
<head>
    <style>
        h1, p, title {
            font-weight: bold;
            background: pink;
        }
    </style>
</head>
~~~

É possível ainda agrupar definindo atributos e classes mais específicos para definir estilos. No exemplo abaixo foi definido estilo para titulo h1, para div e para p apenas se esse possuir atributo classe texto:

~~~html
<head>
    <style>
        h1, p.texto, div {
            font-weight: bold;
            background: pink;
        }
    </style>
</head>
~~~

## Combinadores
Combinadores definem o tipo de relação entre dois seletores. É possivel combinar seletores e combinadores diferentes! Sintaxe:

    [seletor] [combinador] [seletor]

Tipos de Combinadores:

1. Combinador descendente (espaço):
Define que o estilo será aplicado apenas em descendentes de outros elementos a serem especificados. A seleção pra definir estilo pode ser tanto por classe, quanto por id quanto por atributo, entre outros. No exemplo temos que só a subitem lista de lista vai ser estilizado:

~~~html
<head>
    <style>
        li li {
            font-weight: bold;
            background: pink;
        }
    </style>
</head>
~~~

Mas poderia ser definido o ascendente por ID e o descendente por atributo, por exemplo:

~~~html
<head>
    <style>
        #lista01 li {
            font-weight: bold;
            background: pink;
        }
    </style>
</head>
~~~

2. Combinador filho (>):
Aplica modificações apenas em filhos diretos do elemento escolhido. Assim como no combinador descendente, podemos selecionar através de id, classe, atributo, entre outros.

~~~html
<head>
    <style>
        div > p {
            font-weight: bold;
            background: pink;
        }
    </style>
</head>
~~~

3. Combinador irmão adjacente (+):
Aplica modificações apenas em elementos adjacentes, ou seja, na mesma linha do código, logo ao "lado" (embaixo, na verdade). No exemplo, apenas o "paragrafo externo" seria alterado, pois o "exemplo" é um filho direto e não irmão.

~~~html
<head>
    <style>
        div + p {
            font-weight: bold;
            background: pink;
        }
    </style>
</head>
<body>
    <div>
        <p> Exemplo </P>
    </div>
    <p> Paragrafo externo </p>
</body>
~~~

4. Combinador irmão em geral (~):
Aplica modificações a todos os elementos adjacentes (irmãos) (não precisa ser logo depois, desde que esteja no mesmo nível de identação).

~~~html
<head>
    <style>
        div ~ p {
            font-weight: bold;
            background: pink;
        }
    </style>
</head>
~~~

## Propriedades de Dimensionamento e Espaçamento:
- Largura (width) e Altura (height):
Possível definir por um valor com unidade (no caso foi pixel, nessa definição, o elemento interno vai se alterar para caber no espaço definido), por **auto** (tamanho automático para elemento de acordo com seu elemento), por **initial** (aplica a propriedade como valor inicial), já **inherit** define o valor igual ao do elemento pai:

~~~html
<head>
    <style>
        div {
            width:auto;
            height: 100px;
        }
    </style>
</head>
~~~

- Altura e Largura máxima e mínima
As propriedades "max-width", "min-width", "max-height" e "min-height" definem os valores máximos e mínimos que o elemento pode ter. Esse tipo de propriedade pode ser usado para garantir que um elemento que por padrão diminua de acordo com conteúdo, como o botão, não fique menor que certo valor, por exemplo.

- Margin
Propriedade usada para criar espaçamento em volta dos elementos, aplicado por fora do elemento.
A margem pode ser em cima (margin-top), em baixo (margin-bottom), esquerda (margin-left), direita (margin-right), ou completa (margin).

~~~html
<head>
    <style>
        div {
            width: 100px;
            height: 100px;
        }
        #el-01 {
            background:blue;
        }
        #el-02 {
            background:yellow;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div id="el-01"></div>
    <div id="el-02"></div>
</body>
~~~

Para a margem completa, caso colocado 2 valores, o primeiro será aplicado em cima e embaixo, e o segundo nas laterais. Caso haja um terceiro valor, ele será para a margem de baixo. Quatro valores são atribuidos em sentido antihorário, começando por cima.

~~~html
<head>
    <style>
        div {
            width: 100px;
            height: 100px;
        }
        #el-01 {
            background:blue;
        }
        #el-02 {
            background:yellow;
            margin: 10px 20px;
        }
    </style>
</head>
<body>
    <div id="el-01"></div>
    <div id="el-02"></div>
</body>
~~~

Margem funciona com auto (servindo para centralizar o elemento na horizontal) e inherit.

- Padding
Padding funciona como margens internas do elemento, garantindo que o conteúdo não "cole"nas bordas. Assim como na margem, aceita 1, 2 3 e 4 valores, funcionando do mesmo jeito que funciona com a margem; podendo também ser adicionado de valores específcos por lado (padding-top, padding-bottom...).

Atenção: o padding sozinho, altera a dimensão do elemento.

- Box sizing
Como o tamanho do elemento é definido por:
    **largura + borda + padding**

Definições de espaçamentos podem alterar essa altura, para evitar isso usa-se box-sizing para definir um tamanho com content-box(que faz a soma dos valores como descrito) e border-box que redimenciona os valores para que o resultado seja o definido no width e height).

# Links Úteis:
[codepen](https://codepen.io)<br>
[w3schools combinadores](https://pt.w3hmong.com/css/css_combinators.htm)<br>
