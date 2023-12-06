# gestion-libreta-contactos
Esta es una aplicación de gestión de la libreta de contactos, al entrar a la app, te encontraras con un login, debes registrarte y despues logearse. *Se utilizo la base de datos PostGres, esta al ejecutar el srvidor se crea automaticamente si no es el caso puede hacer el siguiente tutorial*

# Se ubica en la carpeta `/server` y en el archivo @index.js se encontrara con lo siguiente:
![image](https://github.com/SebasSolano/gestion-libreta-contactos/assets/99377039/39e441e0-7aa8-4e70-ad43-8d01cb60fb20)

 Puede cambiar `await sequelize.sync({ force: false });` a `true` si quiere tener la base de datos completamente limpia y reiniciada.

# *DEMAS INSTALACIONES:*

# Instalación
Para comenzar, asegúrate de tener Node.js instalado. Luego, sigue estos pasos:

- Clona este repositorio.
Abre una terminal en la carpeta del proyecto,

- *Ubicate en la carpeta del servidor `/server`*

- Crea un package.json
`npm init -y`

- Instala los módulos necesarios
`npm i express morgan sequelize pg pg-hstore cors bcrypt jsonwebtoken express-jwt`

- Ejecutar el servidor
`npm run dev`

 *Ubicate en la carpeta `/libreta-contactos`*

- Instala las dependencias
`npm install react-router-dom localforage match-sorter sort-by tailwindcss @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome axios`

- Inicializa el cliente 
`npm run dev`

- Inicializa tailwindcss
`npx tailwindcss init`

*Por ultimo no se le volvide la instalacion de npm i*

# *DIAGRAMAS*

- Diagrama de entidad y relacion:


![image](https://github.com/SebasSolano/gestion-libreta-contactos/assets/99377039/92b28ffa-3628-4c1c-a68b-69b3f45ab8ae)

- Diagrama de Clases:


![image](https://github.com/SebasSolano/gestion-libreta-contactos/assets/99377039/30364e47-0827-4be8-bf22-847535870a7e)

- Diagrama de secuencias:


![image](https://github.com/SebasSolano/gestion-libreta-contactos/assets/99377039/2df36c99-071c-455c-909d-aea4a0dc246c)

- Diagrama de pruebas unitarias:

![image](https://github.com/SebasSolano/gestion-libreta-contactos/assets/99377039/6f20be8d-98cd-4b6d-9852-0337f0554bf2)







