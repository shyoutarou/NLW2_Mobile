# Aula 4 (06/08/2020) - Estruturando app mobile

details>
 <summary>Videos Youtube</summary>

2. Trilha OmniStack
[Trilha OmniStack Aula 4](https://www.youtube.com/watch?v=_sZzCcf87j0)
[Trilha OmniStack Aula 5](https://www.youtube.com/watch?v=EvRAXJuQrFE)

</details>

<details>
 <summary>Wikis</summary>

[Wiki Home](https://github.com/shyoutarou/NLW2_Web/wiki)
4. [Aula 4](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-4-(06-08-2020)---Estruturando-app-mobile)
5. [Aula 5](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-5-(07-08-2020)---Finalizando-app-mobile)

</details>

<details>
 <summary>GitHub Pages</summary>

1. [Web](https://shyoutarou.github.io/NLW2_Web/)
2. [Mobile](https://shyoutarou.github.io/NLW2_Mobile/)

</details>

## Interface Mobile

Para o desenvolvimento mobile iremos utilizar a biblioteca expo, para criar o projeto mobile digite no PowerShell:

```bash
expo init mobile
```
E escolha a opção:

```bash
blank (TypeScript)    same as blank but with TypeScript configuration
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/typesciptconfig.png" />
    <br>
</h1>



Quando criamos um projeto React Native que não seja pelo Expo, é possível iniciar um projeto React Native com Typescript, executando o comando:

```bash
npx react-native init authrn --template react-native-template-typescript
```
 
Com npx ele busca o pacote na web instala na sua máquina na versão mais atualizada, executa o comando react-native, deixa em cache por um tempo e depois desinstala, dessa forma você não precisa ficar com o react-native cli na node_modules principal da sua máquina. O template Typescript vem da flag: --template react-native-template-typescript. Porém a estrutura do projeto e as estratégias do desenvolvimento da aplicação diferem.
 <h1 align="center">
    <img alt="Create Project" width="500" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/typescriptflag.png" />
    <br>
</h1>

Repare principalmente que o projeto expo não tem as pasta android e ios. No projeto criado pelo npm, ao querer depurar o app pelo emulador é necessário, para instalação do app no emulador, emitir o comando:

```bash
npx react-native run-android
```

Como no projeto expo não existe a pasta android, acontece o seguinte erro:
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/androiderro.png" />
    <br>
</h1>

```bash
error Android project not found. Are you sure this is a React Native project? If your Android files are located in a non-standard location (e.g. not inside 'android' folder), consider setting `project.android.sourceDir` option to point to a new location. Run CLI with --verbose flag for more details.
```

Ao pesquisar na Internet sobre o problema vai levar a vários tópicos que vão indicar para atualizar o react-native, o que vai levar a outra sucessão de erros:
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/sucessaoerros.png" />
    <br>
</h1>

No projeto Expo, que faz a interface com o navegador é o Metro Builder pelo navegador, e é ele que oferece as opções de depuração da aplicação. Porém para dispositivos físicos, aparentemente, não diferenças no desenvolvimento.
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/MetroBuilder.png" />
    <br>
</h1>

Dentro da pasta do projeto digite:

```bash
yarn add expo OU npm install expo
```
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/installexpo.png" />
    <br>
</h1>

Depois digite:
```bash
yarn start OU npm start
```
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/startmobile.png" />
    <br>
</h1>

Que vai abrir o browser para visualizar os logs da aplicação, quais celulares disponíveis estão debugando, etc. 
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/logsbuilder.png" />
    <br>
</h1>

Quais celulares disponíveis estão debugando, etc.
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/devices.png" />
    <br>
</h1>
 
Para listar emuladores podemos aplicar o comando:
```bash
emulator –list-avds
```
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/emulators.png" />
    <br>
</h1>


E para iniciar um emulador:
```bash
emulator –avd Nome_Emulador
```

O importante é o endereço abaixo que permite testarmos a aplicação:
```bash
exp://192.168.0.101:19000
```

Para testar com o QR Code temos que instalar o app Expo cliente no celular:
<h1 align="center">
    <img alt="Create Project" width="200" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/qrcode.png" />
    <br>
</h1>

```bash
To run the app with live reloading, choose one of:
    -Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
    -Press a for Android emulator, or w to run on web.
    -Press e to send a link to your phone with email.
    -Press s to sign in and enable more options.
```

Com este QR Code é possível passar para outras pessoas com o expo instalado para poderem avaliar seu aplicativo pronto:
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/qrothers.png" />
    <br>
</h1>

Para testar no emulador podemos ver o vídeo do link antes pra saber como instalar para React Native:
[emulando-react-native-no-iosandroid-com-expo](https://www.facebook.com/rocketseat/videos/codedrops-03-emulando-react-native-no-iosandroid-com-expo/2988252154733623/)

O expo pode dar muitos problemas de configuração, tem limitações de proxy e Firewall, mas dá pra consultar alguns deles em:
[expo-common-issues](https://github.com/Rocketseat/expo-common-issues)

Como podemos ver a estrutura do programa mobile e igual a da Web: JSX (Javascript + XML) e funções retornando Elementos gráficos com componentes utilizando os estados e propiedades. Porém estes elementos não são HTML puro e sim componentes pré-criados pela biblioteca do Native (StyleSheet, Text, View) e todos elementos tem display flex por padrão. O css também não existe (classes, ids) e nem herança de estilos. Cria-se um estilo particular e identificado por elemento. Não há parte de animações, nem gradientes, grid tem que fazer na unha.
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/stylesmobile.png" />
    <br>
</h1>

A única exceção de herança de estilo é quando se coloca componentes Text aninhados como abaico:
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/textstyle.png" />
    <br>
</h1>

Por padrão, o Native também não lê arquivos de imagem svg só png. Teria que instalar uma extensão. No mobile tem o conceito de densidade de pixels e temos que exportar as imagens em 3 tamanhos que o Native reconhece a resolução pelo nome ...2x, 3x, etc. Antes de existir o React, não era possível o Javascript reconhecer imagens. Para fazer a aplicação reconhecer arquivos png precisamos criar uma pasta @type em src com um arquivo index.d.ts com a seguinte declaração:
declare module '*.png';
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/modulepng.png" />
    <br>
</h1>

Crie uma pasta src e dentro dela a pasta pages. Dentro dessa pasta teremos as páginas igual o que foi feito na aplicação web. Comece criando a página/pasta Landing com os arquivos index.tsx e styles,ts (não mais css)
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/indextsx.png" />
    <br>
</h1>

No arquivo principal App.tsx vamos prepara-lo para receber o componente Landing. Como não é possível “empilhar” os companentes Landing e StatusBar sem que haja alg envelopando-os, aqui podemos fazer de duas formas principais:
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/viewfrag.png" />
    <br>
</h1>

A vantagem do Fragment é que não irá renderizar mais uma View, pois de Landing já está retornando outra View.

Para instalar as fontes usadas no projeto Web (Archivo e Poppins) faça o seguinte comando:
```bash
expo install @expo-google-fonts/archivo @expo-google-fonts/poppins
```
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/googlefonts.png" />
    <br>
</h1>

Após feito isso, na página App.tsx importe as fontes e o módulo AppLoading:
```bash
import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
```
Na mesma página, declare globalmente as variáveis e faça um condicional para verificar se as fontes foram carregadas:
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/globlafonts.png" />
    <br>
</h1>

Por fim, é so utilizar nas StyleSheets de qualquer página.
  <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/StyleSheets.png" />
    <br>
</h1>
 
Inicialmente, para criar os botões podemos utilizar o TouchableOpacity, importando do React Native.

```bash
import {View, Image, Text, TouchableOpacity} from 'react-native'
```

E aplicando nos botões ficaria como abaixo. Repare que o style recebe um array de estilos, permitindo 2 estilos aproveitarem um estilo básico simulando a flexibilização de uma herança.
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/buttonsstyle.png" />
    <br>
</h1>

### Rota no React Native

Para navegar vamos instalar a biblioteca React Native digitando:
```bash
yarn add @react-navigation/native OU npm install @react-navigation/native
```
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/react-navigation.png" />
    <br>
</h1>


Depois temos que instalar as dependências em relação ao expo:
```bash
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/gesture-handler.png" />
    <br>
</h1>

A 3 tipos principais de navegação React:

- Em Stack/Pilha: A mais utilizada, que para cada clique ou uma ação de navegação, ela vai sendo salva em uma pilha, e as rotas são empilheiradas, você pode voltar sempre para o estado anterior. 
- Em BottomTabs: Com um menu de abas na parte inferior da tela.
- Em Drawer: Pelo menu hambúrguer.

Precisamos instalar então a navegação stack e bottomtabs:

```bash
yarn add @react-navigation/stack OU npm install @react-navigation/stack
```
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/navigationstack.png" />
    <br>
</h1>

```bash
yarn add @react-navigation/bottom-tabs
```
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/bottom-tabs.png" />
    <br>
</h1>

Criamos então uma pasta routes dentro de src e criamos duas páginas AppStack.tsx e StudyTabs.tsx uma pra cada tipo de navegação. A AppStack.tsx conterá as chamadas das páginas sem Tabs Landing e GiveClasses e a página com as Tabs StudyTabs. E por fim, nosso AppStack tem retornar um NavigationContainer contendo as telas(Screen) conforme a documentação.
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/telasScreen.png" />
    <br>
</h1>

A StudyTabs terá o direcionamento para duas páginas TeacherList (aba Proffys) e Favoritos. Na StudyTabs conterá o conteúdo e o visual (style.ts) das tabs.

   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/StudyTabs.png" />
    <br>
</h1>

Repare no módulo Ionicons que traz umas biblioteca de ícones padrão para celular.
[ionicons](https://ionicons.com/)
   <h1 align="center">
    <img alt="Create Project" width="500" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/ionicons.png" />
    <br>
</h1>

Poderia ter sido utilizado o icons do:
[feathericons](https://feathericons.com/)
   <h1 align="center">
    <img alt="Create Project"  width="500" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/feathericons.png" />
    <br>
</h1>


Qualquer deles pode ser acessado pela biblioteca do expo:
```bash
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';
```

```bash
<Ionicons name="ios-easel" size={20} color= '#fff'/>
<Feather name="filter" size={20} color="#fff" />
```


E que a estilização do tab tem ser feita pela propriedade tabBarOptions do Navigator.
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/tabBarOptions.png" />
    <br>
</h1>
   <h1 align="center">
    <img alt="Create Project" width="500" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/proffysdispo.png" />
    <br>
</h1

As duas páginas devem conter conteúdo similar que irá ter o conteúdo (index.tsx) e o visual (style.ts) das páginas.
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/favorites.png" />
    <br>
</h1


Com isso, já podemos navegar. Na página Landing import useNavigation da React Navigation:

```bash
import { useNavigation } from '@react-navigation/native'
```

Crie as funções que serão associando aos botões de navegação e indique a rota:
   <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/landing.png" />
    <br>
</h1

Finalmente, atribua os métodos aos botões.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/lastbuttons.png" />
    <br>
</h1

# Aula 5 (07/08/2020) - Finalizando app mobile

## Conectando Mobile

Precisamos instalar novamente a biblioteca que facilita o consumo de API externas pela aplicação:
yarn add axios

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/addaxios.png" />
    <br>
</h1>

Como no projeto Web, crie uma pasta services e dentro dela o arquivo api.ts.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/apits.png" />
    <br>
</h1>


O IP que utilizamos é o disponibilizado pelo Metro Bundler abaixo que permite testarmos a aplicação. Lembre-se que sempre que trocar de máquina, deve-se atualizar este número para testar na máquina atual.
```bash
192.168.0.101:3333
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/lanmaq.png" />
    <br>
</h1>


Isso é necessário pois o localhost pode não ser acessível na rede, então é necessário utilizar o IP. Em um terminal paralelo, navegue até a pasta do servidor e inicie-o com o comando yarn start. Depois teste com o Insomnia a conexão:
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/Insomnia.png" />
    <br>
</h1>

A chamada da API na aplicação mobile é idêntica a da web.
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/chamadaAPI.png" />
    <br>
</h1>
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/conexoes.png" />
    <br>
</h1>

Já nos componentes de filtro da página TeacherList, uma diferença é que invés de Onchange está se usando OnchangeText, mas isso porque, por razões de tempo, não foi implementado a caixa de seleção (ficando como um dos Desafios mais adiante).
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/setsuject.png" />
    <br>
</h1>


Para testar o botão de filtro é possível fazer a mesma estratégia de emitir um console.log no método relacionado:
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/handlefilter.png" />
    <br>
</h1>
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/filersubmit.png" />
    <br>
</h1>


Única coisa a se lembrar é de trocar o aparelho que estiver se testando, se for emulador ou aparelho físico.
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/aparelho.png" />
    <br>
</h1>
 

Feito isso o método é idêntico ao do projeto web:
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/projetoweb.png" />
    <br>
</h1> 

 <h1 align="center">
    <img alt="Create Project" width="300" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/proffyaba.png" />
    <br>
</h1> 

## WhatsApp – Deep Linking

No botão do WhatsApp vamos aplicar uma técnica conhecida como “Deep Linking” onde uma aplicação abre outra aplicação. Grande parte de aplicação mobile tem um endereço URL em que é possível acessar pelo módulo do React Native Linking:

```bash
import { View, Image, Text, Linking, AsyncStorage } from 'react-native'; 
```
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/imports.png" />
    <br>
</h1> 

## Favoritos – Armazenamento Interno

Para armazenamento interno no mobile precisamos instalar um DB pelo:
```bash
expo install @react-native-community/async-storage
```
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/async-storage.png" />
    <br>
</h1> 

Temos que criar a propriedade no componente TeacherItem para sabermos quando foi favoritado e fazer as mudanças necessárias no Layout.

 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/TeacherItem.png" />
    <br>
</h1> 

 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/TeacherItem2.png" />
    <br>
</h1> 


O favoriteArray.push adiciona o item no Array de favorito, o splice remove o conteúdo da lista. No botão dos favoritos há apenas um condicional trocando a imagem do botão favorito:

 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/favoriteArray.png" />
    <br>
</h1> 

Na página TeacherList precisamos de uma variável constante de estado, para acompanhar as mudança no controle salvando a id do professor.

```bash
const [favorites, setFavorites] = useState<number[]>([]);
```
 <h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Mobile/master/.github/TeacherList.png" />
    <br>
</h1> 
    
