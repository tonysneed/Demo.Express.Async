import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";

import { productsRouter } from "./routes/products";

namespace express_web_api {

    // Initialize express and set port number
    let app = express();
    let port: number = process.env.PORT || 3000;

    // Plug in body parser middleware for posting JSON
    app.use(bodyParser.json());

    // Add products router
    app.use("/api/products", productsRouter);

    // Handle GET for the root URL
    app.get("/", (req: Request, resp: Response) => {
        resp.send("Hello Express!");
    });

    // Start the web app
    app.listen(port, () => console.log(`Express app listening on port ${port}`));
}