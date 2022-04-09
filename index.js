//js
const express = require('express');
const { get } = require('express/lib/response');
const app = express();

//routing

app.set('view engine', 'ejs')

app.use('/', require('./routes/login'));


const PORT = process.env.PORT || 4111;
app.listen(PORT, () => {
console.log(`Server listening on port:  ${PORT}` );
})

