import express from 'express';
import bp from 'body-parser';


import { urlToBase64 } from './controller.js';


const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Well done");
});


app.get('/conversion', async(req, res) => {
    const result = await urlToBase64(res)
})

app.listen(3000, () => {
    console.log('The application is listening on the port 3000');
})

