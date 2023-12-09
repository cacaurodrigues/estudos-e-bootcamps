# Estilização Básica

## Cor
Além das cores pré definidas, temos:

- Pré-definidas
    color: nome;

- Hex (#red red, green green, blue blue)
    color: #rrggbb;

- Hex-transparência (#red red, green green, blue blue, transparencia)
    color: #rrggbbtt;

- RGB (red, green, blue)
    color: rgb(x,y,z);

- RGBA (permite definir a opacidade da cor)
    color: rgba(x,y,z,opacidade);

- HSL (hue-saturation-lightness)
    color: hsl(cor, porcentagem de saturação, porcentagem de iluminação)

- HSLA (hue-saturation-lightness-alpha)
    color: hsl(cor, porcentagem de saturação, porcentagem de iluminação, valor de transparência)

Obs.: o valor de transparência no HSLA pode ser de 0.0 (totalmente transparente) a 1.0 (sem transparência).

Podemos pegar a cor de um objeto e aplica-la a outra elemento, só usar "currentcolor" na cor do elemento que se deseja.

## Imagens
Imagens essenciais para trabalhar com imagens e vídeos:

- Object-fit: ajustar imagem/vídeo no elemento de HTML chamado container. Essa propriedade define se a proporção da imagem deve ser mantida OU se deve ser modificada para preencher o máximo do container. 

~~~html
<body>
    <code>object-fit: fill;</code>
    <div>
        <img src="path">
    </div>
</body>
~~~

No caso, fill irá definir para priorizar o preenchimento e não a proporção. "Contain", altera tamanho da imagem pra caber no container, mas sem perder proporção. "Cover" configura imagem para preencher o container, cortando a imagem para preencher completamente sem distorcer a imagem. "None" ignora as dimensões, e mantem seu tamanho e qualidade. "Scale-down" vai redimensiona a imagem pra caber no container.

-Object-position
Define como imagem ou vídeo devem ser posicionado no container. Sendo o primeiro valor referente ao eixo horizontal e o segundo referente ao eixo vertical.

~~~html
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 30px 40px;
}
~~~

Além de valores númericos, aceita palavras chaves: start, end, right e left (pro eixo horizontal), center, bottom, top, start, end (eixo vertrtical)

## Fundo dos Elementos
Com css é possivel utilizar além de cor sólida, uma imagem (de qualquer formato) ou uma cor gradiente.

1. Colocando preenchimentos diferentes:
- Imagem como fundo:

~~~html
img {
    width: 100%;
    height: 100%;
    background-image: url('path')
}
~~~

Atenção: pode ser necessário redimensionar a imagem.

- Cor gradiente:

- Linear:
~~~html
img {
    width: 100%;
    height: 100%;
    background-imagem: linear-gradient(cor de inicio, cor final);
}
~~~

Pode ter mais de 2 cares! Basta separa por virgula as cores.

- Radial:
~~~html
img {
    width: 100%;
    height: 100%;
    background-imagem: radial-gradient(cor de inicio, cor final);
}
~~~

- Repeat (lienar ou radial) ainda permit mais configurações, como pixels, onde inicia:
~~~html
img {
    width: 100%;
    height: 100%;
    background-imagem: repeating-linear-gradient(valores);
}
~~~

Obs.: é possivel fazer camadas de imagens

2. Redimensionar imagens de fundo:
        
        background-size: valor;

    Valor de redimensionamento pode ser:
    - Auto (mantem dimensão, mas pode se repetir se necessario)
    - Cover (imagem ocupa todo fundo do elemento)
    - Contain (redimensiona imagem para aparecer toda, pode se repetir pra preencher todo elemento já que é um comportamento padrão)
    - Definir um tamanho (ou dois valores de tamanho) de medida com unidade de medida ou com porcentagem
    - Para duas imagens, separa-se por virgula os valores.

3. Repetição
Por padrão, imagens vão se repetir se elas forem menores que o elemento de fundo que ela está prenchendo. Para mudar esse comportamento usa-se propriedade **backaground-repeat**:

    ~~~html
    img {
        width: 100%;
        height: 100%;
        background-imagem: repeating-linear-gradient(valores);
        background-repeat: valor;
    }
    ~~~

    Valores possíveis:
    - Repeat (padrão)
    - Repeat-x (define que imagem se repete apenas no eixo horizontal/x)
    - Repeat-y (define que imagem se repete apenas no eixo vertical/y)
    - Space (se repete nas duas direções, sem cortar a imagem, para isso sobra espaço em branco para caber a imagem)
    - Round (imagem se repete em todas as direçoes, com redimensão para que não haja corte)
    - No-repeat
    - Para definir como ela se comporta em cada eixo, adicionar valores separados por virgula (sendo o primeiro pra horizontal e o segundo pra vertical)

4. Posição:

    ~~~html
    img {
        width: 100%;
        height: 100%;
        background-imagem: repeating-linear-gradient(valores);
        background-repeat: valor;
        background-position: valor OU valor valor;
    }
    ~~~

5. background-attachment:
Define se a imagem irá se movimentar junto a página e como será a movimentação. Pode receber como valores: fixed, scroll e local.

6. background-origin:
Define o ponto de origin de uma imagem de fundo. Valores possíveis: padding-box (cobre margem interna), border-box (cobre a borda externa), content-box (não ocupa nenhuma borda, nem interna nem externa).

7. backgroun-clip:
Similar a propriedade origin, permite controlar se imagem OU cor de fundo deve preencher área completa ou não. Aceita os mesmo valores do background-origin com adicional do valor text (fundo preenche espaço do texto, ou seja, o texto é preenchido, sendo para isso necessário que o texto tenha cor transparente).

8. background-blend-mode:
Indica como as cores devem aparecer quando elementos se sobrepoem. Há vários efeitos que aceita como valor: overlay, multiply, darken, lighten, color-burn, hard-light, soft-light, difference, luminosity...

9. background:
Resume várias propriedades em um só lugar: como position, size, image, origin, clip, attachment, color...

    ~~~html
        img {
            width: 100%;
            height: 100%;
            border: 15px dashed palegreen;\
            color: white
            padding: 30px;
            font-size: 40px;
            font-weight: 900;

            background:
                url('path') /* image */
                top center / 200px 200px /* position / size */
                no-repeat /*repeat*/
                fixed
                padding-box /* origin */
                content-box /* clip */
                red
            ;  
        }
    ~~~

    É possivel que tudo esteja em uma única linha. Entre /* */ temos os comentários. O elemento colocado depois vai ter mais força que propriedade colocada antes.

## Bordas
1. Border
É possível definir as propriedades de bordar no atalho "border" (similar a como o background pode ser utilizado para colocar todas as propriedades, apenas separando-as por espaço), mas pode-se também passar as informações de forma individual:


- Sintaxe:
    border: valor;

    ou

    border-width(/syle/color): valor;

Obs.: é possível aplicar as alterações de borda em apnas um lado, para isso adiciona-se o lado desejado após border, separando por hifen (border-top, border-right...). Sendo ainda possível definir efeitos separados para cada lado com essa propriedade.

- border-style
Valores como: solide, none (valor padrão), dashed, dotted, double, groove, ridge, inset, outset.
É possível também colcoar mais de um valor, bastando usar espaço para separar os valores, a ordem que será colocada é a mesma de outras propriedades já explicadas: dois valores, o primeiro é vertical e o segundo horizontal, três valores, o primeiro é topo, segundo horizontal e terceiro bottom.

- border-width 

- border-color

Atenção: sem um estilo definido, não há borda para aplicar os demais valores. pois o valor padrão de borda é none.

- border-radius
Permite que sejam definidos valore spara arredondar as bordas. Essa propriedade funciona mesmo que não haja bordar (no caso funciona diretamente sobre o elemento).

Obs.: para fazer um circulo, é necessário que o elemento seja um quadrado perfeito.

2. Border com imagens
- border-image-source
Define o caminho da imagem que servirá para a borda. Para a imagem aparecer, é preciso que seja definido uma borda. Sintaxe:

    border-image-sourcer: url('path');

A borda pode ser preenchida por gradiente (border-image-sourcer: linear-gradient(red, blue); atenção, gradiente aceita slice também) e também o valor none.

- border-image-slice
Propriedade permite dividir a imagem em regiões para conseguir trabalhar como contorno do elemento.

[border-slice](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice/border-image-slice.png)

Canto: 1,2,34, usados uma unica vez. Os meios: 5,6,7,8, podem ser usados mais de uma vez. O número nove geralmente não é utilziado.

~~~html
    #elemnto{
        border-image-sourcer: url('path');
        boder-image-repeat: repeat; /* necessário para preencher ao invés de esticar a iamgem da borda*/
        border-image-slice: 30;
    }

O valor 169 fill iria preencher o quadrante 9, o que significa que a vorda iria ficar sobre a imagem/o preenchimento do elemento.

- border-image-width
Define as dimensões de uma borda. Pode ser utilziado unidades de medidas ou porcentagem. É possível aqui preencher com tamanhos diferentes para cada lado da borda, separando os valores por espaços (vai ser preenchido no sentido horário) no mesmo jeito que é feito em outras propriedades.

- border-image-repeat
Define se a borda irá se repetir. Aceita valores: repeat, stetch, round (evita cortar a iamgem redimensionando ela para caiba no espaço), space (caso a imagem nao possa preencher tudo, adiciona espaço para que caiba melhor).
Assim como em outras propriedades, aceita mais de um valor separado por espaço para dar valores diferentes para os lados.

- border-image-outset
Propriedade define a distância da imagem da borda do elemento. Não aceita valor negativo e o valor 0 é o local padrão da borda. Não precisa de unidade de medida.
Assim como em outras propriedades, aceita mais de um valor separado por espaço para dar valores diferentes para os lados.

- border-image
Consegue juntar todas as propriedades de imagem em apenas um local, separados por barra (pois o espaço define lados). Sintaxe:

    border-image: url('path') "slice"/ "width" / "outset" repeat;

## Fontes
A tipográfia define tipos genéricos, ou grupos de fontes, que englobam características entre seus representantes: serif, sans-serif, display, handwriting, monospace.

- font-family
Define uma familia de fonte ou uma fonte específica. Caso a fonte seja composta por uma palavra, sem aspas, caso a fonte tenha o nome composto por mais de uma palavra usar aspas. Para inserir opções de fontes (caso o navegador do usuário  não possua a fonte definida), coloca-se mais fontes separadas por virgulas (isso é chamado de fall back).

- font-face
Permite que seja usado fontes não instaladas. É uma especie de regra com propriedade que contém a seguinte sintaxe:

    #font-face{
        font-family: nome;
        src: url('path(local ou internt)');
    }

Após essa criação, usa-se o nome definido para usar a fonte no arquivo com a propriedade font-family no elemento desejado.

- font-weight
Define expessura (cada fonte tem sua propria versão dessa expessura, ao selecionar ela, escolher a correta para que o valor aplicado não seja apenas uma adaptação que será feita caso o navegador não ache).
Caso o elemento definido com palavra chase seja filho de outro com um valor numérico, esse valor númerico sera usado como base para definir o tamanho do filho de forma proporcional.

- font-style
Define se é italico, negrito... Os valores aceitos são: italic, oblique, normal.

- @imports
Uma forma de fazer importação para o projeto de fontes com todos seus estilos completamente.

### Atenção: um bom procedimento é criar um arquigo "global.css" para fazer importação de fontes em um único lugar, o que facilita a manutenção.

- font-size
Define o tamanho da fonte. Aceita valor numerico e palavras chaves (xxx-small, medium, large...), que são proporcionais ao valor padrão do usuário estiover visualizando (ou seja, vai ser um tamanho diferente dependendo do usuário).
Caso o elemento definido com palavra chase seja filho de outro com um valor numérico, esse valor númerico sera usado como base para definir o tamanho do filho de forma proporcional.

- font-variant
Define a apresentação do texto. Pode ser normal ou small-caps (que é um texto em caixa alta, mas com a letra maiúscula de fato é maior).

- font-stretch
Permite estreitar ou expandir o texto. Só funciona se a fonte possuir esse tipo de configuração.

- line-height
Essa propriedade especifica qual o espaçamento acima e abaixo da linha de um texto. Aceita valores numericos (recomendado usar sem unidade de medida), porcentagens e palavras chaves. O valor padrão depende do navegador e da fonte. Recomenda-se usar no minímo o valor de 1.5 por questão de acessibilidade de leitura.

- font
Assim como em outras propriedades, podemos resumir em uma única linha de código definir várias propriedades ligadas a fontes. Ex.:

~~~html
<style>
    #exemplo{
        font: italic small-caps bold 24px/2 Georgia, serif;
    }

Na ordem temos: style, variant, weight, size, altura de linha, fonte, tipo.

## Textos
- text-transform
Define quais caracteres vão ficar maiúsculos e minúsculos. Valores aceitos: none (do jeito que escrever fica), capitalize (deixa todas as primeiras letras em caixa alta), uppercase (transforma todo o texto em caixa alta), initial (valor padrão, mesmo que none), inherit (herda do pai).

- text-align
Responsável por alinhar o texto dentro do elemento.

- text-decoration
Define aparência deforativa de um texto (adiciona sublinhado, pontilhado, linha ondinha, sublinhado emcima e embaixo). Dentro de decoration tem subopções: text-decoration-line (tipo de linha), text-decoration-style (tipo de linha), text-decoration-color (cor da linha), text-decoration-thicknesss (expessura).
Assim como em outras propriedades, as subopções podem ser comprimidas apenas em uma linha de código chama text-decoration.

- text-ident
Define recuo da primeira linha de um texto, como se fosse um parágrafo. Aceita vários tipos de unidade de medida além de valores negativos.

- letter-spacing e word-spacing
Letter-spacing adiciona um espaçamento entre os caracteres de um texto e o word-spacing entre as palavras do texto.

- white-spacing
Permite definir como os espaços em branco do texto irão se comportar. Aceita valores: normal, nowrap (não vai ter quebra de linha), pre (mantem qualquer espaço em branco colocado), pre-line, pre-wrap, breack-lines.

- word-wrap
Permite definir se, caso uma palavra seja muito grande para o espaço, deve-se quebrar uma palavra (e onde) ou se deve-se manter a palavra (e deixar ela passar o espaço do elemento).

- word-break
Define quando deve haver quebra de linha em um texto. Aceita valores: normal, break-all, keep-all.

- writing-mode
Define a orientação do texto (vertical ou horizontal).

- text-overflow
Propriedade que permite esconder a parte do texto que passa do tamanho do container/elemento e define como o usuário vai ver que há mais texto que não está visível.

## Sombras
- box-shadow
É possível defini sombra nos elementos:

~~~html
<style>
    div {
        width: 200px;
        height: 200px;
        border: 10px solid #8f382e;
        background: #fa8072;
        margin: 20px auto;
        box-shadow: inset 10px 10px 5px 7px red, 30 px 10 px black; /* valor "inset", a sombra dentro do container. Local para definir sombra na vertical e na horizontal, respectivamente, aceita valor negativo. O terceiro valor indica o grau de desfoque, quão maior o valor, mais desfocado. O quarto valor indica propagação da sombra, valor negativo é menor propagação. A cor no final indica a cor da sombra. É possivel combinar sombras, pra isso, usar virgula (no caso vai ter uma sombra interna e outra externa*/
    }
</style>
~~~

É possível colocar sombra em imagens pngs que estão em container, para isso usa-se drop-shadow dentro do filter ao inves de box.

~~~html
<style>
    div {
        width: 200px;
        height: 200px;
        border: 10px solid #8f382e;
        background: #fa8072;
        margin: 20px auto;
        filter: box-shadow(10px 10px 5px red);
    }
</style>
~~~

- text-shadow
Efeitos de sombra em texto são possíveis. No acso, as sombras são adicionadas por caracter:

~~~html
<style>
    h2 {
        color: red;
        font-size: 30px;
        text-align: center;
        text-shadow: 20px /*vertical*/ 20px /*horizontal*/ 5px /*desfoque*/ gray /*se não por cor, vai ser a cor do texto*/;
    }
</style>
~~~

Obs.: Não possui propagação de sombra nem aceita valor incet.

## Outros
- opacity:
Define transparência do elemento. Varia de 0 (totalmente transparente) até 1 (sólido).

~~~html
<style>
    .exemplo {
        background-color: blue;
        border: 5px solid yellow;
        color: white;
        padding:20px;
        opacity: 0.5;
    }
</style>
~~~

Essa propriedade afeta os elementos dentro de um container. Já opacidade em imagens não afetam elementos diferentes. Quando se trata de cores, é melhor utilizar a propriedade de RGBA para definir cor com transparência e assim não afetar todos os elementos se não for a intenção.

- overflow:
Controla como o conteúdo deve ser comportar caso ultrapasse o espaço do container. Aceita os valores: visible (ignora o fim do container), hidden (o conteúdo é cortado, so aparece o que está no container), scroll (permite que seja rolado o container para ler o texto inteiro), auto (permite que automaticamente seja detectado necessidade de barra de rolagem e coloca-a).

ATENÇÃO: só funciona se o container tiver definição de altura (pois caso contrario, o container se modifica para caber texto).

Obs.: scroll pode ser definido em apenas um lado: overflow-x: scroll (apenas na horizontal) e overflow-y: scroll (so na vertical).

# Redefinindo propriedades padrões no navegadores
**Reset CSS** é uma folha de estilos que se sobrepõem ao padrão que os navegadores colocam por padrão nos elementos, ajudando a manter o mesmo design em navegadores diferentes. Esta folha deve ser colocado na pasta assets/css junto com a folha de estilo. Pode-ser criado ou encontrado na internet diversos documentos do tipo.

# Links Úteis

[Lista de cores suportadas](https://www.w3schools.com/tags/ref_colornames.asp)<br>
[Selecionador de Cores](https://www.w3schools.com/colors/colors_picker.asp)<br>
[Padrões para background](https://projects.verou.me/css3patterns/)<br>
[fontes personalizadas](https://fonts.google.com)<br>
[reset css](https://meyerweb.com/eric/tools/css/reset/)<br>