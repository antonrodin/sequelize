# Ejemplos de Sequelize ORM

Ejemplos de ORM JavaScript Sequelize. Aplicaciones basicas como integración con Express, creación de una API y CRUD basico, ejemplo de validaciones, ejemplo de asociaciones (BelongsTo, HasOne, OneToMany, BelongsToMany...) junto con Eager Loading, ejemplo de como trabajar con legacy tables (tablas antiguas)...

## Carpetas

* __integración__: Ejemplo de una aplicación con integración basica con ExpressJS y MySQL.
* __crud__: Ejemplo de un CRUD/API basicos. Es decir READ, CREATE, UPDATE y DELETE de una tabla "post".
* __validaciones__: Ejemplo completo de validaciones en el modelo de usuario.
* __unoauno__: Ejemplo de la relacion oneToOne de Sequelize, es decir 1a1: hasOne & BelongsTo.
* __unoamuchos__: Ejemplo de la relacion oneToMany de Sequelize, es decir 1aN: hasMany & BelongsTo.
* __nan__: Ejemplo de la relacion ManyToMany de Sequelize, es decir NaN: belongsToMany.
* __cli__: Sequelize CLI Boilerplate, es decir un proyecto inicial para configurar todo, .sequelizerc y las carpetas.
* __cli-models__: Ejemplo de como generar modelos con el CLI y asociarlos al proyecto en el archivo database/db.js
* __cli-asociaciones__: Ejemplo de como hacer asociaciones usando el CLI y explicación de index.js dentro de la carpeta models
* __cli-seeds__: Ejemplo de como crear la siembra o SEEDS con el CLI, es un tipo de migración, pero para rellenar la base de datos. Muy útil.
* __cli-migrations__: Ejemplo de migraciones con Sequelize ORM. Configuración y un par de migraciones junto con una relación.