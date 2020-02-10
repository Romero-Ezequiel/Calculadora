/**
 * Creo una constante con el nombre de express en donde voy a 
 * requerir el modulo de express, el cual me facilita la creación del
 * servidor. */ 
const express = require('express');
// Aca voy a requerir el motor de plantilla de handlebars
const hbs = require('express-handlebars');
// Acá requiero el modulo path para manejar los directorios y rutas de archivos
const path = require('path');
//Defino un puerto para que escuche el servidor
const port = process.env.PORT || 5000;
//Aca creo una constante llamada app, la cual va a ser mi servidor. En
//app voy a ejecutar a express() en donde me va a devolver un objeto y lo
//almaceno en la constante app. 
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname:'.hbs'
}));

//Acá le indico a mi servidor, si recibe una petición GET al home, que me
//muestre el contenido que esta en la plantilla de calculadora.hbs
app.get('/', (req, res)=>{
    res.render('calculadora');
})

//Acá le indico a mi servidor que escuche en el puerto que lo habia definido 
//al principio de todo.
app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en http://localhost:${port}`);
});