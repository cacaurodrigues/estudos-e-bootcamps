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
    background-imagem: url('path')
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


## Fontes

## Textos

## Sombras

## Outros

# Links Úteis

[Lista de cores suportadas](https://www.w3schools.com/tags/ref_colornames.asp)<br>
[Selecionador de Cores](https://www.w3schools.com/colors/colors_picker.asp)<br>
[Padrões para background](https://projects.verou.me/css3patterns/)<br>