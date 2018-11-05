#datefmt

Date format lib

### Usage

Uses php style date format.

```javascript
let date = new Date(2013, 4, 8);
datefmt('%j %D %l', date); // 8 Wed Wednesday
```

```javascript
let date = new Date(2013, 0, 6);
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

datefmt.translate(months, days);
datefmt('%F', date); //Enero
datefmt('%l', date); //Lunes
```