
# SENA ADSI 2023 ====================
    
    - Santiago Chacón Sora | ADSI 2282566   

## SGIRMP ===============================

 [LINK PARA ABRIR APP](https://sena.hocknas.co//)
 
        Administrador:      
        admin@mail.com
        Ab12345@
        

## BACKEND ==============================

El backend se desarrolló utilizando un patrón de diseño MVC (Modelo - Vista - Controlador)

Se realizó utilizando ExpressJS

Se requiere configurar las siguientes variables:

`PORT` El puerto de escucha para las conexiones.

`DATABASE_URL` URL de la base de datos de MONGO.

`DATABASE_NAME` Nombre de la base de datos.



## AUTENTICACIÓN ========================

El proceso de autenticación se hizo con AUTH0 y requiere configurar una regla, la cual relacionamos a continuación:

```
function (user, context, callback) {
  const namespace = 'http://localhost';
  
  let idTokenClaims = context.idToken || {};
  let accessTokenClaims = context.accessToken || {};
  
  accessTokenClaims[`${namespace}/userData`] = user;
  
  context.idToken = idTokenClaims;
  context.accessToken = accessTokenClaims;
  
  callback(null, user, context);
}

```

## API =================================

Se utilizan los métodos GET, POST, DELETE y PATCH para interactuar con el API.


## FRONTEND =============================

Este proyecto fue realizado utilizando React JS. Se crearon diferentes componentes según las necesidades de diseño de la página.

Hay diferentes páginas, entre las cuales están:

- VENTAS
- PRODUCTOS
- USUARIOS

Y sus respectivas funciones de CRUD.