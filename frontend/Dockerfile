#image node
FROM node:22.7

#pointage vers mon dossier virtuel /server  crée par WORKDIR
WORKDIR /app

#je copie tous les fichiers qui commencent par package à la  racine du dossier app de docker c'est à dire /app/server
COPY package*.json ./

#installer node
# Installing dependencies.
#RUN npm i -g nodemon
#Je copie tout ce qui est dans utopid dans mon dossier racine docker c'est à dire app

RUN npm i


#RUN npm i dotenv --save 

COPY . .


RUN npm run build 

#tu écoute le port 3000
EXPOSE 3000

#les commandes utilisés dans package json et par default
CMD [ "npm","run", "dev"]






# Use Nginx as the production server
#FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
#COPY --from=build /app/build /usr/share/nginx/html





