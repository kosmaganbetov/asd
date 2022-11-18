# Установка Docker и ссылка на документацию

[Docker docs](https://docs.docker.com/get-docker/).

# Запустить Docker контейнер

## Сборка контейнера

Сборка контейнера серверной части по команде: cd server => docker build -t back .

Сборка контейнера клиетской части по команде: cd client =>  docker build -t front .

## Запуск контейнера

Запуск контейнера серверной части по команде:  docker run -p 8000:8000 --name back back

Запуск контейнера клиетской части по команде:  docker run -p 3000:3000 --name front front

### Чтобы консоль не занимать

Добавляем -d. Например: docker run -p 8000:8000 --name back -d back

# Полезные команды

- Просмотр логов

docker logs front/back

- Остановить 

docker stop front/back

- Удалить контейнер 

docker rm front/back

- Просмотр образов 

docker image ls

- Просмотр контейнеров 

docker container ls
