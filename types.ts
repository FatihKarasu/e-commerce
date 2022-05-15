export { };

declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */

    type Product = {
        id: number;
        title: string;
        image: string;
        description: string;
        price: string;
    };
    type Category = {
        id: string;
        categoryId: string|null;
        title: string;
    };
}