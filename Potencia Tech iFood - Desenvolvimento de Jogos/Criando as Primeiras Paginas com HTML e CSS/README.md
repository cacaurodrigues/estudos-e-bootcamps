# Introdução ao HTML na prática
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

# Trabalhando com Formulários
Formulários: trechos em HTML em que o usuário irá inserir informações em campos que serão enviados para o servidor que irá processar a informação.

**ATENÇÃO**: lembrar que a aparência básica (do HTML puro), das caixas de diálogo por exemplo, dependedem do navegador.

## Tag "forms"
Campo que fica dentro do body da página muito usado com servidores e javascript, o nome do formulário é opcional. **Action** descreve dentro da tag o que será feito com as informações do formulário após ele ser finalizado (cuidado para não infrigir em problema de CROSS ORIGIN, enviar formulários/informações que não é dono). O atributo **method** possui dois valores possíveis **"get"**, que <u>envia todas as informações e opções pela url</u> (o que é mais inseguro), e "post", que envia as informações no corpo da requisição (ou seja, de forma embutida na requisição). Na imagem pode-se observar como as informações ficam na url como **método GET**:

![GETmethod](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/3methodget.png)

- O atributo **target** define como será processado o envio do formulário (na mesma aba com "_self" ou em outra aba com "_blank"). **Autocomplete** por sua vez, caso esteja desativado ("off") não permite que seja preenchido automaticamente as informações, em caso de ativado ("on"), informações menos sensiveis são preenchidas automáticamente:

~~~html
<body>
    <form name="cadastro" target="_blank" autocomplete="on" method="POST" action="https://siteparaondeseraenviado.com.br">
        Nome:  <input type="text" name="name"/><br>
        Idade: <input type="number" name="age"/><br>
        Senha: <input type="password" name="password"/><br>
        <button type="submit">Enviar</button>
    </form>
</body>
~~~~

- **Atributos on-** (como "onabort","onblur","oncanplay","onchange"...) referem-se em HTML a eventos, por exemplo, "onsubmit" define o que será feito quando clicar no botão submite de um formulário (poderia ser adicionado um alerta para avisar que o formulário foi enviado, por exemplo).

~~~html
<body>
    <form name="cadastro" onsubmit="alert('Formulário enviado!');">
        Nome:  <input type="text" name="name"/><br>
        Idade: <input type="number" name="age"/><br>
        Senha: <input type="password" name="password"/><br>
        <button type="submit">Enviar</button>
    </form>
</body>
~~~~

![alerta](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/4exdealerta.png)

Obs: onsubmit é muito usado para limitar acesso (por exemplo, por idade)

## Tag "input"
Campo geralmente usado com label(nome) onde são inseridos valores, pode assumir diversos tipos cada um com sua cada particularidade. Atenção, dependendo do navegador, há valores de input que não foram/estam implemenbtados, ou seja, não irão funcionar.

~~~html
<body>
    <form>
        <label>Campo: </label><input/><br>
    </form>
</body>
~~~

Obs.: o br no fim indica quebra de linha/parágrafo.

- **input type="text"**
Campo de texto

~~~html
<body>
    <form>
        <label>Digite aqui</label><input type="text"/>
    </form>
</body>
~~~

- **input type="number"**
Campo numérico onde pode ser definido valores mínimos e máximos. Outro atributo possível com esse tipo são passos/steps para definir de quanto em quanto o numéro sobe e desce.

~~~html
<body>
    <form>
        <label>Digite aqui</label><input type="number" min="0" step="5" max="10"/>
    </form>
</body>
~~~

- **input type="button"**
Campo que adiciona inserção do tipo botão, funciona no navegador do mesmo jeito que a tag "button", a diferença é a semantica da tag botão que funciona melhor até pelos seus atributos.

~~~html
<body>
    <form>
        <label>Campo: </label><input type="button" value="Enviar"/>
    </form>
</body>
~~~

- **input type="range"**
Type range define um campo scroll em que se pode colocar valores mínimos, máximos ou médios. Pode-se, assim como no number, definir valores máximo e mínimos. O atributo value define o valor padrão que vai carregar. Pode ser usado para controles de volume.

~~~html
<body>
    <form>
        <label>Range: </label><input type="range" valur="10"/>
    </form>
</body>
~~~

![range](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/5inputrange.png)

- **input type="color"**
 Cria um campo scroll similar ao range, mas que funciona com cores.

~~~html
<body>
    <form>
        <label>Cor: </label><input type="color"/>
    </form>
</body>
~~~

![inputcor](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/6inputcor.png)

- **input type="email"**
Campo email, pode possuir problemas de compatibilidade com navegador, apenas aceita preenchimento no formato de email (que o próprio navegador avisa caso não seja definido um alerta):

~~~html
<body>
    <form>
        <label>Email: </label><input type="email"/>
    </form>
</body>
~~~

![inputemail](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/7inputemail.png)

- **input type="url"**
Assim como campo email, não aceita formato fora do padrão de url (com http na frente). Assim como o campo email, cada navegador implementa uma mensagem automática se o preenchimento for incorreto, caso na seja definida uma:

~~~html
<body>
    <form>
        <label>URL: </label><input type="url"/>
    </form>
</body>
~~~

- **input type="date"**
Campo que define o formato da data de acordo com a língua definida no navegador para colocar o calendério que vai definir da data.

~~~html
<body>
    <form>
        <label>Data: </label><input type="date"/>
    </form>
</body>
~~~

- **input type="week"**
Define a semana do ano. Atenção que esse tipo não funciona no chrome.

~~~html
<body>
    <form>
        <label>Semana: </label><input type="week"/>
    </form>
</body>
~~~

- **input type="month"**
Define o mês do ano. Atenção que esse tipo não funciona no chrome.

~~~html
<body>
    <form>
        <label>Mês: </label><input type="month"/>
    </form>
</body>
~~~

- **input type="checkbox"**
Campo quadradinha por padrão que é usado como valor booleano, para preenchimento de respostas básicas como sim ou não, mas aceita 0 ou mais de uma resposta. Para que servidor entenda que a opção selecionada (ou opções) são de um mesmo grupo (por exemplo, complementos de um formulário de pedido de hamburguer), é preciso que sejam enviado pelo metodo post com o mesmo nome com "[]" (para que o servidor/backend entenda que aquilo é uma lista, não um valor que foir alterado x vezes e pegue apenas a ultima opção) e diferentes valores: 

~~~html
<body>
    <form method="post">
        <h3>Selecione os adicionais para seu hamburguer:</h3>
        <input type="checkbox" name="adicional[]" value="+queijo"/> dobro de queijo<br>
        <input type="checkbox" name="adicional[]" value="+cane"/> dobro de carne <br>
        <input type="checkbox" name="adicional[]" value="+molho"/> adicionar molho especial <br>
    </form>
</body>
~~~

Obs.: A posição do que vai aparecer para o usuário no script importa. Caso colocado antes do input, aparece antes do box de check, se colocado depois, aparece depois!

~~~html
<body>
    <form method="post">
        <h3>Selecione os adicionais para seu hamburguer:</h3>
        <input type="checkbox" name="adicional[]" value="+queijo"/> dobro de queijo<br>
    </form>
</body>
~~~

![ordeminput](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/8inputordem.png)

~~~html
<body>
    <form method="post">
        <h3>Selecione os adicionais para seu hamburguer:</h3>
        dobro de queijo <input type="checkbox" name="adicional[]" value="+queijo"/><br>
    </form>
</body>
~~~

![ordeminput](/estudos-e-bootcamps/Potencia%20Tech%20iFood%20-%20Desenvolvimento%20de%20Jogos/imgs/9inputordem.png)

Obs.²: a opçãO **disabled** deixa inabilitado a opção para o usuário (o que pode ser necessário por algum motivo, por exmplo, em um hamburguer com carne dupla, poderia ser definido que não pode dobrar a quantidade de carnne):

~~~html
<body>
    <form method="post">
        <h3>Selecione os adicionais para seu hamburguer:</h3>
        <input type="checkbox" name="adicional[]" value="+queijo"/> dobro de queijo<br>
        <input type="checkbox" disabled name="adicional[]" value="+cane"/> dobro de carne <br>
        <input type="checkbox" name="adicional[]" value="+molho"/> adicionar molho especial <br>
    </form>
</body>
~~~

- **input type="radio"**
Usado como valor booleano, para preenchimento de respostas básicas como sim ou não que aceita apenas uma  única resposta, sendo necessário para isso que tenham o mesmo nome e valores diferentes, o nome serve para que sejam reconhecidos como opções do mesmo campo e o valor para definir o que será enviado para o servidor com a opção que foi selecionada
.

~~~html
<body>
    <form>
        Você quer comer?<label>sim</label><input type="radio" name="prencher" value="sim"/><label>não</label><input type="radio" name="prencher" value="não"/><br>
    </form>
</body>
~~~

Obs: Da mesma forma que para o tipo checkbox importa a ordem da legenda do usuário, para o tipo radio também importa.

- **input type="hidden"**
Campo invisível no navegador que fica imbutido no formulário e é enviado junto. Permite por exemplo que seja criada uma marcação da data de quando o formulário foi preenchido e que não pode ser alterada pelo usuário, por exemplo.

~~~html
<body>
    <form>
        <label>Hidden: </label><input type="hidden"/><br>
    </form>
</body>
~~~

- **input type="file"**
Campo que permite enviar arquivos. A adição de "multiple" permite enviar mais de um arquivo (por padrão, aceitaria apenas um arquivo).

~~~html
<body>
    <form>
        <label>Arquivo: </label><input type="file" multiple/><br>
    </form>
</body>
~~~

- **input type="search"**
Campo que permite criar um espaço para fazer buscas.

~~~html
<body>
    <form>
        <label>Busca: </label><input type="search"/><br>
    </form>
</body>
~~~

## Tag "button"


# Links Úteis:
- Para mais tags: [w3schools](https://www.w3schools.com/tags/)
- Para mais sobre input: [w3](https://www.w3schools.com/tags/tag_input.asp)
