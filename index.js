const express = require('express');
const request = require('request');

const ssrHelper = require('./ssr-puppeteer');

const port = 8080;
const server = express();

server.get('/js/*', (req, res) => {
    console.log(req.url)
    request(`https://vue-web-components.netlify.com${req.url}`).pipe(res);
})

server.get('/css/*', (req, res) => {
    console.log(req.url)
    request(`https://vue-web-components.netlify.com${req.url}`).pipe(res);
})

server.get('/data/*', (req, res) => {
    console.log(req.url)
    request(`https://vue-web-components.netlify.com${req.url}`).pipe(res);
})

server.get('/images/assets/*', (req, res) => {
    console.log(req.url)
    request(`https://vue-web-components.netlify.com${req.url}`).pipe(res);
})

server.get('/', async (req, res) => {
    console.log(req.hostname, req.url);
    const {html, renderTime} = await ssrHelper();
    res.set('Server-Timing', `Prerender;dur=${renderTime};desc="Headless render time (ms)`);
    return res.status(200).send(html);
});
server.listen(port, () => {
    //set log color
    console.log('\x1b[0m\x1b[34m');
    console.log(`listening to localhost:${port}`);
    //reset log color
    console.log('\x1b[0m\x1b[0m');
});