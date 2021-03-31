const express = require ('express');

const routes = require ('./routes');

const app = express();

const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urluncoded({ extended : true }));

app.use(routes);


app.listen(PORT, () => {
    console.log('app listening on ort ${PORT}');
});