class Routes {
    constructor(app) {
        this._routes = [];
        this._app = app;

        this.initializeRoutes();
    }

    get app() {
        return this._app;
    }
    set app(value) {
        this._app = value;
    }

    get routes() {
        return this._routes;
    }
    set routes(value) {
        this._routes = value;
    }

    initializeRoutes() {
        this._app._router.stack.forEach(route => {
            if(route && route.route) {
                this.routes.push(route.route);
            }
        });
    }

    getChildEndpoints(rootEndpoint) {
        return this.routes.filter(route => route.path.startsWith(rootEndpoint)).map(route => {
            return {
                path: route.path,
                methods: route.methods,
                parent: route.path.substring(0, route.path.lastIndexOf('/')) === '' ? '/' : route.path.substring(0, route.path.lastIndexOf('/'))
            };
        });
    }
}

module.exports = Routes;