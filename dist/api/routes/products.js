"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const express = require("express");
const products_repo_1 = require("../services/products-repo");
let router = express.Router();
exports.productsRouter = router;
let productsRepo = new products_repo_1.default();
router.get("/", (req, resp) => __awaiter(this, void 0, void 0, function* () {
    console.log("Retrieving products");
    try {
        let products = yield productsRepo.retrieveAll();
        resp.json(products);
    }
    catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
}));
router.get("/:id", (req, resp) => __awaiter(this, void 0, void 0, function* () {
    console.log(`Retrieving product id ${req.params.id}`);
    try {
        let product = yield productsRepo.retrieve(+req.params.id);
        resp.json(product);
    }
    catch (error) {
        console.log(error);
        if (error.indexOf("Invalid id") > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
}));
router.post("/", (req, resp) => __awaiter(this, void 0, void 0, function* () {
    console.log(`Creating product: ${JSON.stringify(req.body)}`);
    try {
        let product = yield productsRepo.create(req.body);
        resp.json(product);
    }
    catch (error) {
        console.log(error);
        if (error.indexOf("Product exists") > -1) {
            resp.sendStatus(400);
            return;
        }
        resp.sendStatus(500);
    }
}));
router.put("/", (req, resp) => __awaiter(this, void 0, void 0, function* () {
    console.log(`Updating product id ${req.body.productId} to: ${JSON.stringify(req.body)}`);
    try {
        let product = yield productsRepo.update(req.body);
        resp.json(product);
    }
    catch (error) {
        console.log(error);
        if (error.indexOf("Invalid id") > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
}));
router.delete("/:id", (req, resp) => __awaiter(this, void 0, void 0, function* () {
    console.log(`Deleting product id ${req.params.id}`);
    try {
        yield productsRepo.delete(+req.params.id);
        resp.end();
    }
    catch (error) {
        console.log(error);
        if (error.indexOf("Invalid id") > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
}));
//# sourceMappingURL=products.js.map