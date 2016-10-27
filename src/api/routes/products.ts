import * as express from "express";
import { Request, Response } from "express";

import { Product } from "../models/product";
import ProductsRepository from "../services/products-repo";

let router = express.Router();
let productsRepo = new ProductsRepository();

// GET route
router.get("/", async (req: Request, resp: Response) => {
    console.log("Retrieving products");
    try {
        let products = await productsRepo.retrieveAll();
        resp.json(products);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

// GET route with id
router.get("/:id", async (req: Request, resp: Response) => {
    console.log(`Retrieving product id ${req.params.id}`);
    try {
        let product = await productsRepo.retrieve(+req.params.id);
        resp.json(product);
    } catch (error) {
        console.log(error);
        if (error.indexOf("Invalid id") > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// POST route
router.post("/", async (req: Request, resp: Response) => {
    console.log(`Creating product: ${JSON.stringify(req.body)}`);
    try {
        let product = await productsRepo.create(req.body);
        resp.json(product);
    } catch (error) {
        console.log(error);
        if (error.indexOf("Product exists") > -1) {
            resp.sendStatus(400);
            return;
        }
        resp.sendStatus(500);
    }
});

// PUT route
router.put("/", async (req: Request, resp: Response) => {
    console.log(`Updating product id ${req.body.productId} to: ${JSON.stringify(req.body)}`);
    try {
        let product = await productsRepo.update(req.body);
        resp.json(product);
    } catch (error) {
        console.log(error);
        if (error.indexOf("Invalid id") > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// DELETE route with id
router.delete("/:id", async (req: Request, resp: Response) => {
    console.log(`Deleting product id ${req.params.id}`);
    try {
        await productsRepo.delete(+req.params.id);
        resp.end();
    } catch (error) {
        console.log(error);
        if (error.indexOf("Invalid id") > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// Export products router module
export { router as productsRouter };