# 🍔 NextFood

<div align="justify">
<p>O grande avanço tecnológico que vem acontecendo nos últimos tempos está afetando todas as pessoas direta ou indiretamente, e para os restaurantes não foi diferente. Com isso, é preciso sempre estar se reinventando procurando trazer mais benefícios e comodidade para o estabelecimento e também aos consumidores, inserindo a tecnologia nos processos que forem possíveis de se automatizar.</p>
<p>A partir deste contexto nasceu a ideia de criar o aplicativo NextFood, projeto que visa atender inicialmente pequenos e médios restaurantes ao padrão globalizado e com informação acessível em aparelhos mobile, e capaz de deixar um restaurante tradicional no mesmo patamar dos gigantes desse setor. Focando em uma utilização simples e direta integrando cada vez mais o cliente com o estabelecimento, possibilitando que aquele gerencie seus pedidos, através de um cardápio e comanda online, enquanto estiver presente no restaurante. Trazendo consequentemente tempo e agilidade para ambos.</p>
</div>

### 💡NextFood Features
- [x] Application Setup
- [x] Theme Setup
- [x] Loading Page
- [x] Welcome Page
- [x] Login Page
- [x] Restaurant List Page
- [x] QRCode Scan Page
- [ ] Home Page
- [ ] Cart and Order Status Page
- [ ] Order Checkout Page

### 👀 Features Preview

<div align="center"> <b>Tela de Loading</b> </div>
<div align="center">

```
A primeira tela é a tela de início do aplicativo, mas também servirá como tela
de loading, com o logo do nosso produto em destaque 
```
 <img  src="https://user-images.githubusercontent.com/30303558/169819069-dabfdbd6-6f39-4f7b-9c48-05915c052960.png" width="20%" height="100%">
</div>

 --- 

<div align="center"> <b>Tela de boas-vindas</b> </div>
<div align="center">

```
Tela que aparecerá após o loading inicial. Tendo uma breve explicação do objetivo proposto pelo 
aplicativo, além de um botão de início, levando ousuário à tela de login. Além disso, essa tela 
estará presente somente na primeira execução do app; após isso, ela não será mais exibida
```
 <img src="https://user-images.githubusercontent.com/30303558/169819873-8fc771af-532a-46c9-ba08-470a526e86a8.png" width="20%">
</div>

 --- 
<div align="center"> <b>Tela de Login</b> </div>
<div align="center">

```
A terceira tela será uma de login simples, bem limpa e com poucos detalhes:
terá o logo em destaque na tela, dois campos do tipo texto para login e senha, e um
botão para confirmar o login
```
 <img src="https://user-images.githubusercontent.com/30303558/169819971-1fccac9a-e4df-4107-8132-dce77a078f54.png" width="20%">
</div>

---
<div align="center"> <b>Tela de restaurantes disponíveis</b> </div>
<div align="center">

```
Essa tela irá mostrar uma lista com os restaurantes que aceitam o aplicativo para controle de 
pedidos no restaurante. Em cada card contém algumas informações do restaurante, como seu nome, 
uma foto simples dele, o local onde ele está situado e ícones mostrando as categorias de pratos 
que ele oferece, como massas, lanches, dentre outras opções.
```
 <img src="https://user-images.githubusercontent.com/30303558/169820058-d4f534b0-9740-4415-ace0-b4976b764fd0.png" width="20%">
</div>

---
<div align="center"> <b>Tela para escanear QR Code</b> </div>
<div align="center">

```
Esta tela terá uma integração com a câmera do celular do usuário para escanear um QR Code fornecido 
no restaurante (fisicamente), para dar início aoprocesso de atendimento daquele usuário no restaurante.
Após a leitura do QR Code, será feita a conexão entre os dados do cliente, do garçom, o número da mesa, 
o horário de início do atendimento, entre outros dados relevantes para aquele pedido
```
 <img src="https://user-images.githubusercontent.com/30303558/169820111-31bb0008-2b31-4b31-81f8-d2e6330dad70.png" width="20%">
</div>

---
<div align="center"> <b>Tela principal do aplicativo</b> </div>
<div align="center">

```
A tela a seguir representa a tela principal do aplicativo, tendo o cardápiodo restaurante. 
Além disso, essa tela permite ao usuário filtrar entre as categorias do restaurante, 
e também através da barra de busca. Haverá um contador na parte inferior de cada item que, 
quando em 0, não mostrará a quantidade. A partir do primeiro item, aparecerá a quantidade 
atual do pedido, com a opção de adicionar mais itens ou removê-los. 
```
 <img src="https://user-images.githubusercontent.com/30303558/169820162-0e7c7340-bb0a-43b8-9eca-aa2dd4872c45.png" width="20%">
</div>

---
<div align="center"> <b>Tela de status de pedidos</b> </div>
<div align="center">

```
Na tela de status do pedido, terão todos os itens do seu pedido atual. No protótipo abaixo 
por exemplo, têm-se dois pedidos já feitos: o primeiro consta como entregue, tendo as três 
etapas sido concluídas. O segundo está na 3ª etapa, “Pronto”, pendente apenas de ser entregue 
ao usuário pelo garçom do restaurante ou ser retirado no balcão. Na parte superior da tela, 
têm-se o terceiro pedido, ainda não fechado.
```
 <img src="https://user-images.githubusercontent.com/30303558/169820249-b0429748-195b-4f1d-9860-029f6cfd8d86.png" width="20%">
</div>

---
<div align="center"> <b>Tela de finalização</b> </div>
<div align="center">

```
Na última tela, têm-se o que o usuário pediu enquanto no restaurante; é importante ressaltar 
que os pedidos feitos no carrinho (tela de status do pedido), serão somados nessa última aba,
com uma amostragem do que foi pedido, além do valor total do seu pedido. O botão “Check-Out” 
é para encerrar de vez sua estadia no restaurante, mostrando o valor total  para 
pagamento ao garçom. 
```
 <img src="https://user-images.githubusercontent.com/30303558/169820305-b6a6730b-442a-4cd7-9309-e8818e57fc6c.png" width="20%">
</div>

## 💻 Requirements

1. Certifique-se de que o **Node JS** esteja instalado em sua máquina executando o comando:
```bash
node -v
```

2. Se você não instalou o **Node JS**, use o link a seguir para baixar a versão 16.x e instalá-lo: [Download NodeJS](https://nodejs.org/en/)

3. Para rodar a aplicação de forma nativa tanto em um emulador quanto no prório dispotivo, é necessário a instalação do `expo`
```bash
npm install --global expo-cli
```

## 📝 Local Setup
Clone the repository, install the dependencies and start the application.

```bash
git clone https://github.com/GabrielNogueiraBR/nextfood-frontend.git
yarn install
expo start
```
1. Clone o [repository](https://github.com/GabrielNogueiraBR/nextfood-frontend.git) 
`git clone https://github.com/GabrielNogueiraBR/nextfood-frontend.git`

2. Instale as dependências:
```sh
npm i
```

3. Se tudo foi configurado corretamente, você pode executar o aplicativo com o comando:
```sh
expo start
```
4. <b>(*Opcional)*</b> Instalar o Android Studio para e configurar um dispositivo virtual 
    - Instale o  [Android Studio](https://developer.android.com/studio)
    - Vá para o gerenciador de dispositivos virtuais
    <div align="center"><img src="https://user-images.githubusercontent.com/42502534/172842114-1c5ccfb2-35b1-4604-8d1e-e98858ce2b30.png" width="50%"></div>
     
    - Crie um dispostivo virtual, através do botão **Create device**
    <div align="center"><img src="https://user-images.githubusercontent.com/42502534/172842117-f7116990-af20-4296-b649-903b8e7c572a.png" width="50%"></div>
    
    - O modelo do dispotivo virtual utilizado no desenvolvimento do aplicativo foi o **Pixel 5**
    <div align="center"><img src="https://user-images.githubusercontent.com/42502534/172842107-99d74b19-477d-4283-9152-c449bd176bb5.png" width="50%"></div>
    
    - A imagem do sistema utilizada foi a **R** de nível de API igual à 30
    <div align="center"><img src="https://user-images.githubusercontent.com/42502534/172842110-1c45a23c-81aa-4fb8-a603-a9243ec33e5e.png" width="50%"></div>
    
    - Por ultimo, verifique se as opções estão de acordo, e finalize a criação do dispositivo virtual
    <div align="center"><img src="https://user-images.githubusercontent.com/42502534/172842111-5b3f5117-1a40-4fa3-a205-d016d5c0f90f.png" width="50%"></div>
    
    - Após a criação do dispositivo virtual, poderá ser iniciado através do gerenciador de dispositivos a partir do botão em destaque<br>
    <div align="center"><img src="https://user-images.githubusercontent.com/42502534/172846473-2faf34a1-9bf8-4edc-bf52-c620a6b0d377.png" width="50%"></div>
    
## ⚡  App on your phone
- Está disponivel também o **apk** do aplicativo, que pode ser feito o download através da pagina de [Releases](https://github.com/GabrielNogueiraBR/nextfood-frontend/releases) do repositório
- Com o download do apk feito, poderá ser feito a instalação no prórpio dispositivo para teste das funcionalidades
    
## 👨‍👦‍👦 Contributors
<div align="center">
 <a href="https://github.com/gferrazz" target="_blank"><img src="https://avatars.githubusercontent.com/u/48798017?v=4" width="8%"></a>
 <a href="https://github.com/GabrielNogueiraBR" target="_blank"><img src="https://avatars.githubusercontent.com/u/30303558?v=4" width="8%"></a>
 <a href="https://github.com/CordeiroOtavio" target="_blank"><img src="https://avatars.githubusercontent.com/u/69653683?v=4" width="8%"></a>
 <a href="https://github.com/ryanraul" target="_blank"><img src="https://avatars.githubusercontent.com/u/42502534?v=4" width="8%"></a>
 <a href="https://github.com/VitorGois" target="_blank"><img src="https://avatars.githubusercontent.com/u/69533533?v=4" width="8%"></a>
 
 <br>
 
 | Student                        	| RA     	|
 |--------------------------------	|--------	|
 | Gabriel José Ferraz Perin      	| 190583 	|
 | Gabriel Augusto Nogueira       	| 190961 	|
 | Otavio Cordeiro de Freitas     	| 190702 	|
 | Raul Ryan Deaque Silva         	| 190953 	|
 | Vitor Joaquim de Carvalho Gois 	| 190810 	|

</div>


## 📃 License
This software is under the [MIT License](https://github.com/GabrielNogueiraBR/Monext/blob/main/LICENSE).
