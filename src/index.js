const express = require('express');
const Routes = require('./Routes');
const app = express();
const port = process.env.PORT || 4000;

let routes = null;

app.get('/', (req, res) => {
    return res.type('json').send(JSON.stringify(routes.getChildEndpoints(req.route.path), null, 2));
});

app.get('/projects', (req, res) => {
    return res.type('json').send(JSON.stringify(routes.getChildEndpoints(req.route.path), null, 2));
});

app.get('/projects/:name', (req, res) => {
    return res.type('json').send(JSON.stringify(routes.getChildEndpoints(req.route.path), null, 2));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    routes = new Routes(app);
});