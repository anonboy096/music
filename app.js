import { OpenAPIHono } from '@hono/zod-openapi';
import { apiReference } from '@scalar/hono-api-reference';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { Home } from './pages/home.js';

export class App {
    app;
    constructor(routes, port) {
        this.app = new OpenAPIHono();
        this.port = port || 3000; // Default to port 3000 if not specified
        this.initializeGlobalMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwaggerUI();
        this.initializeRouteFallback();
        this.initializeErrorHandler();
    }

    initializeRoutes(routes) {
        routes.forEach((route) => {
            route.initRoutes();
            this.app.route('/api', route.controller);
        });
        this.app.route('/', Home);
    }

    initializeGlobalMiddlewares() {
        this.app.use(logger());
        this.app.use(prettyJSON());
        this.app.use(cors());
    }

    initializeSwaggerUI() {
        this.app.doc31('/swagger', (c) => {
            const { protocol: urlProtocol, hostname } = new URL(c.req.url);
            const protocol = c.req.header('x-forwarded-proto') ? `${c.req.header('x-forwarded-proto')}:` : urlProtocol;
            return {
                openapi: '3.1.0',
                info: {
                    version: '1.0.0',
                    title: 'JioSaavn API',
                    description: `# Introduction 
        \nJioSaavn API, accessible at [saavn.dev](https://saavn.dev), is an unofficial API that allows users to download high-quality songs from [JioSaavn](https://jiosaavn.com). 
        It offers a fast, reliable, and easy-to-use API for developers. \n`
                },
                servers: [{ url: `${protocol}//${hostname}:${this.port}`, description: 'Current environment' }]
            };
        });

        this.app.get('/docs', apiReference({
            pageTitle: 'JioSaavn API Documentation',
            theme: 'deepSpace',
            isEditable: false,
            layout: 'modern',
            darkMode: true,
            metaData: {
                applicationName: 'JioSaavn API',
                author: 'Sumit Kolhe',
                creator: 'Sumit Kolhe',
                publisher: 'Sumit Kolhe',
                robots: 'index, follow',
                description: 'JioSaavn API is an unofficial wrapper written in TypeScript for jiosaavn.com providing programmatic access to a vast library of songs, albums, artists, playlists, and more.'
            },
            spec: { url: '/swagger' }
        }));
    }

    initializeRouteFallback() {
        this.app.notFound((ctx) => {
            return ctx.json({ success: false, message: 'route not found, check docs at https://saavn.dev/docs' }, 404);
        });
    }

    initializeErrorHandler() {
        this.app.onError((err, ctx) => {
            const error = err;
            return ctx.json({ success: false, message: error.message }, error.status || 500);
        });
    }

    getApp() {
        return this.app;
    }

    start() {
        // Start the server and listen on the specified port
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }
}
