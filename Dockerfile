FROM node:14-alpine

COPY . .

RUN npm install
RUN npm test

CMD ["sh", "-c", "echo '🐳 ¡Contenedor listo! Pruebas ejecutadas.' && tail -f /dev/null"]
