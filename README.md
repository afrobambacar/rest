# RESTful API Scaffold

[![Build Status](https://travis-ci.org/afrobambacar/rest.svg?branch=master)](https://travis-ci.org/afrobambacar/rest)

express.js, sequelize.js를 이용한 간단한 API 앱

## Commands

`package.json`에 정의된 다음 명령어로 실행이 가능합니다.

```bash
npm test # test using Jest
npm run coverage # test and post the coverage report to codecove
npm run lint # lint using ESLint
npm run fixlint # fixes lint with --fix option
npm run dev # run the API in development mode
npm run prod # run the API in production mode
```

## Playing Locally

로컬에서 띄우기 위해 준비해야할 것은 다음과 같습니다.

* NodeJS >= 10.x.x
* _Docker Image_
* _docker-compose.yml_ 파일
* _.env_ 파일

도커 이미지 빌드
```
docker build . -t rest:latest
```

_docker-compose.yml_ 파일은 _docker-compose.example.yml_ 파일을 복사하세요. 
```
cp docker-compose.example.yml docker-compose.yml
```

_.env_ 파일은 _.env.example_ 파일을 복사하세요. 

```
cp .env.example .env
```

이제 준비가 되었습니다. 다음 명령어를 타이핑 하세요. 
```
docker-compose up
```

복사한 docker-compose.yml 파일에는 Mysql DB가 _link_ 되어 있습니다. `docker-compose up` 명령어는 mysql 컨테이너도 동시에 실행합니다.

## Directory structure

```
src/
├─ api/
│  ├─ thing/
│  │  ├─ controller.js
│  │  ├─ index.js
│  │  ├─ index.test.js
│  │  ├─ model.js
│  │  └─ model.test.js
│  └─ index.js
├─ services/
│  ├─ db/
│  ├─ express/
│  ├─ response/
│  ├─ sequelize/
│  └─ your-service/
├─ app.js
├─ config.js
└─ index.js
```

기타 문의 사항은 [issues](https://github.com/afrobambacar/rest/issues)에 남겨주세요. 

