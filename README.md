# BomTempo

Projeto com o objetivo de informar o clima de acordo com a localização do usuário e talvez o início de um novo ciclo 🚀

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

Para instalar o código fonte você pode clonar o projeto rodando

```
git clone https://github.com/medeiros-jadson/BomTempo.git
```

### 🔧 Instalação

Siga os exemplos passo-a-passo para ter um ambiente de desenvolvimento em execução.

Com o yarn instalado rode:

```
yarn
```

isso instalará todas as dependências usadas no projeto.

você precisará de credenciais do google cloud platform para integração de login.
siga a doc da biblioteca utilizada: https://docs.expo.dev/guides/authentication/#google

com as credenciais em mãos, insira em um arquivo .env seguindo o modelo

```
#CREDENCIAIS AUTH GOOGLE
CLIENT_ID=
REDIRECT_URI=https://auth.expo.io/@USER_EXPO/bomtempo
```

para consumir os dados relacionados ao clima crie uma chave em : https://openweathermap.org/api
e insira no arquivo .env as váriaveis de ambiente, adicionando em APPID a sua chave:

```

#API DE CLIMA
API_BASE=http://api.openweathermap.org/data/2.5
APPID=
```

Rode a aplicação com:

```
yarn start
```

ou

```
yarn android
```

```
yarn ios
```

## 📦 Entrega

![LOGIN](https://user-images.githubusercontent.com/28719627/149163519-b50a73b2-ddd1-4134-8adc-06bb77f65de5.png)![MAIN](https://user-images.githubusercontent.com/28719627/149163561-c42cd73c-1fa4-4840-817f-6716c4448e0d.png)

Protótipo: https://www.figma.com/file/r9XsKFskcAqo8tBvko1r2k/BomTempo-App?node-id=0%3A1



## 🛠️ Construído com

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://docs.expo.dev/)
- [Axios](https://github.com/axios/axios)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Figma](https://www.figma.com/)

## 📌 Versão

1.0

## ✒️ Autores

- **Um desenvolvedor** - _Trabalho Inicial_,_Documentação_, _Prototipação_ - [Jadson Medeiros](https://github.com/medeiros-jadson)

## 🎁 Expressões de gratidão

- Conte a outras pessoas sobre este projeto 📢
- Convide alguém da equipe para um café
- Obrigado publicamente 🤓
