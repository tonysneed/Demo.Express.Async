import { Product } from "../models/product";

// Methods return promises to simulate IO-bound operations

export default class ProductsRepository {

    // Array of products
    private _products = [
        new Product(1, "Chai", 10),
        new Product(2, "Espresso", 20),
        new Product(3, "Capuccino", 30),
        new Product(4, "Macchiato", 40),
        new Product(5, "Americano", 50),
        new Product(6, "Flat White", 60),
    ];

    retrieveAll(): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            resolve(this._products);
        });
    }

    retrieve(id: number): Promise<Product> {
        return new Promise((resolve, reject) => {
            let product = this.getProduct(id);
            if (product === null) {
                reject(`Invalid id: ${id}`);
            }
            resolve(product);
        });
    }

    create(product: Product): Promise<Product> {
        return new Promise((resolve, reject) => {
            if (this.getProduct(product.productId) !== null) {
                reject(`Product exists with id: ${product.productId}`);
            }
            this._products.push(product);
            resolve(product);
        });
    }

    update(product: Product): Promise<Product> {
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

    delete(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.getProduct(id) === null) {
                reject(`Invalid id: ${id}`);
            }
            this._products.splice(id - 1, 1);
            resolve();
        });
    }

    private getProduct(id: number): Product | null {
        let products: Product[] = this._products
            .filter(p => p.productId === id);
        if (products.length > 0) {
            return products[0];
        }
        return null;
    }
}