# Bkool prueba técnica

## Tecnologías 🚀

- **NextJs**
  - https://nextjs.org/
- **TypeScript**
  - https://www.typescriptlang.org/
- **Classnames**
  - https://github.com/JedWatson/classnames
- **Playwright**
  - https://playwright.dev/

## Descripción :scroll:

Buscador de perfiles básico, con los siguientes requisitos:
- Uso de API con datos ficticios: https://randomuser.me/api/?results=50
- El proyecto debe estar dockerizado.
- Al acceder a los detalles de un perfil debemos navegar a otra página.
- En el listado se mostrará en cada UI Card:
  - Foto de perfil
  - Nombre
  - Ciudad

## Estructura del proyecto :file_folder:

```
./src           # Directorio raíz
    /components # Componentes reutilizables
    /config     # Archivos de configuración
    /hooks      # Custom hooks
    /pages      # Rutas de nuestra aplicación
    /services   # Llamadas a servicios
    /styles     # Estilos de rutas
    /types      # Tipos e interfaces
    /utils      # Funciones helpers
./test          # Directorio de tests E2E
```


## Instalación & Despliegue 🔧

El archivo de variables de entorno se encuentra subido en el mismo respositorio.

Para la instalación y el despliegue en local:

```
git clone https://github.com/jorgeAgoiz/nextjs-test
cd nextjs-test
npm install || npm ci
npm run dev
```

## Testing ⚙️⌨️

Para ejecutar los __test E2E__:

```
npm run test:e2e
```

Para visualizar los reportes generados de los __test E2E__:

```
npm run test:e2e:report
```

Se verifica:

- Renderizado de la home.
- Renderizado del listado de perfiles.
- Renderizado de la página de detalles de un perfil.

## Build 📦

Para realizar la **build** del proyecto:

```
npm run build
```

Para probar la build del proyecto en local:

```
npm start
```

##### Para Dockerizar proyecto:

1. Crear la imagen Docker del proyecto:
```
docker build -t nextjs-docker .
```

2. Levantar el contenedor Docker:
```
docker run -p 3000:3000 nextjs-docker
```

## Comentarios acerca de la prueba :memo:

Con respecto a la API proporcionada para la extracción de datos fake, me han surgido varias dificultades:

- Hay que adjuntarle el param __"seed"__, junto con un string que nos identifique para obtener una consistencia en los datos entregados. Ya que de lo contrario nos entregara cada vez 50 usuarios diferentes.
- No tiene un __endpoint__ para pedir los usuarios por ID, y poder obtener solo un usuario específico.
- He intentado hacer uso de los métodos __"getStaticProps"__ y __"getStaticPaths"__ para la generación estática de las rutas en el acceso a los detalles de cada perfil. Pero a la hora de hacer la __"build"__, al recibir las 50 llamadas de golpe, acababa devolviendo en mas de la mitad un ["Status Code 503"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) y eso impedía que el proceso de __"build"__ se completara correctamente.

Adjunto capturas:

![Captura de pantalla 2023-03-12 200036](https://user-images.githubusercontent.com/66563811/224578033-2137098f-7cdd-4b90-9620-1304eea49b6e.png)
![Captura de pantalla 2023-03-12 200243](https://user-images.githubusercontent.com/66563811/224578061-ac35bdf1-1450-45e7-b738-459ba06a3b22.png)
![Captura de pantalla 2023-03-12 200300](https://user-images.githubusercontent.com/66563811/224578088-676417cb-dd54-4b26-b914-dfdade7e3863.png)

Debido a esto he tenido que realizar la generación de las rutas en __"SSR"__. Igualmente adjunto el fragmento de código que habría facilitado la generación de rutas estáticas:

![carbon](https://user-images.githubusercontent.com/66563811/224578103-b69d07db-f924-4bce-a0ba-8ee08d725d91.png)

Por otro lado, comentar algúnas de las decisiones que se han tomado:

- He añadido un archivo de variables de entorno adjuntado en el repositorio y a su vez esas mismas variables se han añadido al __Dockerfile__. En principio nombrando el archivo ".env.local" como ".env", no habría hecho falta adjuntarlas en el __Dockerfile__, pero me parece mejor práctica setearle las variables al docker.

- He usado para el __naming__ de archivos y carpetas la convención __"kebab-case"__, ya que me he encontrado en algun proyecto con problemas en las importaciones. Debido a que Windows si es __"case-sensitive"__ y MacOS no lo es.

- He usado TypeScript para la elaboración de la prueba, ya que creo que aporta tanto más seguridad en el código, como una generación de documentación pásiva que es muy beneficiosa para los equipos.

- He añadido el paquete __"classnames"__ al proyecto, ya que creo que junto con los __"CSS Modules"__ y la filosfía __BEM__, aporta muchas ventajas a la hora de construir las clases a través del paso de __"Props"__.

- He añadido una suite con tres tests E2E básicos para testear las tres rutas que tienen la aplicación.

- Los estilos correspondientes a los archivos de la carpeta __"/pages"__, he preferido colocarlos en una carpeta separada de la misma, llamada __"styles"__. En ella se encuentra además el archivo de estilos globales CSS. Se pueden colocar dentro la misma carpeta __"/pages"__ si renombramos los archivos de las rutas con la nomenclatura __index.page.tsx__ , pero me ha parecido mas limpio separarlos ya que facilita la legibilidad y compresión.

- Cuando se trata de interfaces o tipos no exportables que corresponden específicamente a una función o componente ( Props, argumentos o estados.), me gusta colocarlos encima para facilitar la lectura del código.

## Otros repositorios de interés :floppy_disk:

Añado algunos repositorios recientes que pueden ser de interes:
- https://github.com/jorgeAgoiz/backend_f1
- https://github.com/jorgeAgoiz/new-blog

## Autor ✒️

##### Jorge Agoiz Pedraja

- Github:
  https://github.com/jorgeAgoiz
- Linkedin:
  https://www.linkedin.com/in/jorge-agoiz-pedraja-78321b39/
