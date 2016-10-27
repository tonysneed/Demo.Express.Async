"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const products_1 = require("./routes/products");
var express_web_api;
(function (express_web_api) {
    let app = express();
    let port = process.env.PORT || 3000;
    app.use(bodyParser.json());
    app.use("/api/products", products_1.productsRouter);
    app.get("/", (req, resp) => {
        resp.send("Hello Express!");
    });
    app.listen(port, () => console.log(`Express app listening on port ${port}`));
})(express_web_api || (express_web_api = {}));
//# sourceMappingURL=server.js.map