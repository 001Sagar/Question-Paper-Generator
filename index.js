const express = require('express');
const app = express();
const port = 8000 || process.env.PORT;

// using body parser
app.use(express.json());
app.use(express.urlencoded({extended : true}));


// Path of the Routes
const questionRoutes = require('./src/routes/questions');
const paperRoutes = require('./src/routes/generatePaper');


app.use('/questions', questionRoutes);
app.use('/generate-paper', paperRoutes);


app.listen(port, () => {
    console.log(`Question Paper Generator app listening at http://localhost:${port}`);
});
