# Primeiros Passos com HTML
## Criação de páginas em HTML

1. Iniciar:

- Criar novo arquivo de extensão html:
    **"index.html"**

    obs.: o nome index.html é uma convesão para a página principal.

2. Adicionar configurações iniciais:

- Escrever no arquivo: **html:5** + TAB
(Esse comando é do Emmet e permite a criação rápida de uma página padrão já definido)

## Sobre a sintaxe de páginas:
- Para desenvolver páginas, utiliza-se tags como um par (há excessões) onde uma abre e outra fecha, indicada pela barra **/**. Exemplo com tag **html**:

~~~html
<html>
Texto texto texto **nesse caso, tudo que tiver entre as tags HTML, será entendido como HTML**
</html>  
~~~ 

- Uma página html consiste em cabeça (head) e corpo (body). Sendo o corpo a parte que vai ser visualizada pelo usuário e a cabeça as configurações que serão carregadas (por exemplo, pode ter o título (title) da página na cabeça/head):

~~~html
<html>
    <head>
        <title>título da página</title>
    </head>
    <body> conteudo
    </body>
</html>
~~~ 

Obs: o plugging **Live Server** permite visualizar ao vivo as alterações na página, basta clicar com o botão direito do mouse o arquivo _index.html_, selecionar **open with liveserver** e escolher o navegador desejado.

- Outras tags:
~~~html
<html>
    <head>
        <title>título da página</title>
    </head>
    <body> 
        -- tudo em italico: <i>conteudo em itálico</i> 
        -- tudo em negrito: <strong> conteudo em negrito </strong>
        -- sublinhado: <u> texto </u>
        -- grifar: <mark> outro texto </mark>
        -- subscrever: dois elevado a dois é 2<sup>2</sup>
        -- tudo em negrito e italico: <strong><i>conteudo em italido e negrito</i></strong> 
        -- apenas uma parte em italico: <strong> conteudo negrito <i>conteudo italico</i></strong>
        -- criar campo para digitar: <input type="text"/>
        -- adicionar imagem: <img/>
    </body>
</html>
~~~ 

obs.: o input pode receber outros tipos de valores alem de _text_ que permite outras ações

- Atributos de tags:
Atributps são propriedades que tags podem ter. Alguns atributos são globais/genêricas e outros específicos de cada tags.
obs: ler como se houvesse "<" ">" na coluna sintaxe

Tag          | Atributo | Função | Sintaxe 
-------------|----------|--------|--------
**generico** |   Id     |Identificar um elemento para permitir alteração via programação| strong id="titulo"
**generico** |  Style   |Permite colocar comandos CSS direto no elemento| strong style="color:blue"
**generico** |  Class   |Permite padronizar em formatos pré-definidos| strog class="nome da classe"
input        |  type    |Permite limitar os valores (number/text/color...) aceitos na caixa de texto | input type="number"
img          |  SRC     |Permite colocar o caminho de uma imagem (local ou online) para mostra-la | img src="caminho-escolhido"/
img          |  width   |Pode ser usado para definir largura de imagem (pode ser usado com src)| img width= ""/

### Textos HTML:
O texto pode ser definido em diversas tipográfias e tags específicas que formatam o copor da página HTML como:

- Tag de Título **h**:

~~~html
<html>
    <head>
    </head>
    <body>
        <h1> (título) </h1>
        <h2> (subtitulo) </h2>
        <h3> (sub-subtitulo) </h3>
        ...
        <h6> (nivel mais baixo para titulo) </h6>
    </body>
</html>
~~~ 

- Tag de corpo do texto **p**:

~~~html
<html>
    <head>
    </head>
    <body>
        <p> (texto) </p>
    </body>
</html>
~~~

Obs.: casp não seja definido com CSS, o próprio navegador define margens para a página. Assim como ele redimensiona a página.

- Tag de citação **blockquote**:

~~~html
<html>
    <head>
    </head>
    <body>
        <blockquote> (texto) </blockquote>
    </body>
</html>
~~~

### Listas em HTML:
- Listas Ordenadas é construída pela tag **ol**, no entanto, essa tag não aceita texto comum e precisa de suas "tags filhas" (tag que fica dentro de outra) **li** (list item) para poder funcionar. Sendo possível adicionar listas dentro de listas:

~~~html
<html>
    <head>
    </head>
    <body>
        <ol>
            <li>item premeiro</li>
            <li>item outro</li>
            <li>
                <ol>
                    <li>item premeiro da lista dentro da lista</li>
                    <li>item outro</li>
                </ol>
            </li>
        </ol>
    </body>
</html>
~~~

- Listas não ordenadas funcionam de método similar que as ordenadas, sendo a diferença o uso de marcadores não ordenados (como bolas, traços) para os itens:

~~~html
<html>
    <head>
    </head>
    <body>
        <ul>
            <li>item</li>
            <li>item outro</li>
        </ul>
    </body>
</html>
~~~

obs.: através do CSS é possível alterar o formato da lista (para ser horizontal, por exemplo)

## Ligação entre páginas (uso de links):
A passagem entre páginas é feita através de links que permitem a navegação. Em HTML esse processo é o feito por intermédio da tag ancora:

~~~html
<html>
    <head>
    </head>
    <body>
        <a href="link"> texto explicativo/do que é o link</a>
        <a href="link" target="_self"> texto explicativo/do que é o link - tag target é usado com self para abrir link na mesma página</a>
        <a href="link" target="_blank"> texto explicativo/do que é o link - tag target é usado com self para abrir link em outra aba</a>
        <a href="link" title="textinho que aparece quando o mouse fica em cima do link"> texto explicativo/do que é o link</a>
    </body>
</html>
~~~

obs: HTML puro vai ter o  link em azul sublinhado, mas com CSS é possível alterar esse formato.

### Pluggings necessários:
- Liveserver (necessário instalar)
- extensão html (buildin no vscode)
- emmet (buildin no vscode, pluggin que permite melhorar a produtividade da criação de páginas)

## Acessando Ferramentas do Programador no navegador:
No navegador, colocar/usar:
- tecla F12
- **CTRL + Shift + I**
- ou pelo menu lateral, em mais ferramentas

![acessoaasferramentas](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/1ferramentasprogramador.png)

Para inspecionar os elementos de uma página:
- **CTRL + SHIFT + C**
- Ou selecionar o botão de inspeção de elementos comn o menu de  ferramentas do programador aberto <br>
![inspecaodeelemnentos](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/2inspetorelementos.png)

## Links Úteis:
- Para mais tags: [w3schools](https://www.w3schools.com/tags/)


