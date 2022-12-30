# Kata FizzBuzz

Kata FizzBuzz con javascript y cobertura de test con jest

## Pre-requirement

- node.js & npm

## Dependencies

- jest
- @babel/core
- @babel/preset-env

## Installation

```
$ npm install
```


## Run tests

```
$ npx jest
or
$ npm run test
```
You can filter test with ...
```
$ npx jest -t '<test-name>'
or
$ npm run filter '<test-name>'
```

### Problem Description

Utilizando la kata Fizzbuzz como base (para evitar crear un proyecto desde cero. Recuerda solo tienes que duplicar la carpeta). Realizar lo siguiente ejercicio sin orientación a objetos o con orientación a objetos (segunda opción recomendada).

Ejercicio 1:
Crea un programa que pida el nombre de usuario y la edad y si es mayor de 18 indica que puede conducir.
Ejercicio 2: 
Calcula la letra del DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Tomamos el número completo de hasta 8 cifras de nuestro DNI, lo dividimos entre 23 y nos quedamos con el resto de dicha división (módulo 23)
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

### Autor
Xavier Villaverde
