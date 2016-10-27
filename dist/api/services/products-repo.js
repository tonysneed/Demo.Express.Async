"use strict";
const product_1 = require("../models/product");
class ProductsRepository {
    constructor() {
        this._products = [
            new product_1.Product(1, "Chai", 10),
            new product_1.Product(2, "Espresso", 20),
            new product_1.Product(3, "Capuccino", 30),
            new product_1.Product(4, "Macchiato", 40),
            new product_1.Product(5, "Americano", 50),
            new product_1.Product(6, "Flat White", 60),
        ];
    }
    retrieveAll() {
        return new Promise((resolve, reject) => {
            resolve(this._products);
        });
    }
    retrieve(id) {
        return new Promise((resolve, reject) => {
            let product = this.getProduct(id);
            if (product === null) {
                reject(`Invalid id: ${id}`);
            }
            resolve(product);
        });
    }
    create(product) {
        return new Promise((resolve, reject) => {
            if (this.getProduct(product.productId) !== null) {
                reject(`Product exists with id: ${product.productId}`);
            }
            this._products.push(product);
            resolve(product);
        });
    }
    update(product) {
        return new Promise((resolve, reject) => {
            let existingProduct = this.getProduct(product.productId);
            if (existingProduct === null) {
                reject(`Invalid id: ${product.productId}`);
            }
            let index = this._products.indexOf(existingProduct);
            this._products[index] = product;
            resolve(product);
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            if (this.getProduct(id) === null) {
                reject(`Invalid id: ${id}`);
            }
            this._products.splice(id - 1, 1);
            resolve();
        });
    }
    getProduct(id) {
        let products = this._products
            .filter(p => p.productId === id);
        if (products.length > 0) {
            return products[0];
        }
        return null;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductsRepository;
//# sourceMappingURL=products-repo.js.map