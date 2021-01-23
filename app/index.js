const express = require('express');
const Routes = require('./Routes');
const app = express();
const port = 4000;

let routes = null;

app.get('/', (req, res) => {
    return res.json(routes.getChildEndpoints(req.route.path));
});

app.get('/projects', (req, res) => {
    return res.json(routes.getChildEndpoints(req.route.path));
});

app.get('/projects/:name', (req, res) => {
    return res.json(routes.getChildEndpoints(req.route.path));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    routes = new Routes(app);
});