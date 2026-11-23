import express from 'express';
const app = express();
app.disable('x-powered-by');
app.use(express.static('public', {setHeaders(res){res.setHeader('Cache-Control','no-cache')}}));
app.listen(process.env.PORT || 3000, () => console.log(`Tereeza Speed V2 running at http://localhost:${process.env.PORT || 3000}`));
