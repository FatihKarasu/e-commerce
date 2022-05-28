import { type } from "os";

export { };

declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */

    type Product = {
        id: string,
        categoryId: string,
        detail: ProductDetail,
        variants: Variant[]
    };
    type ProductDetail = {
        id: string;
        title: string;
        image: string;
        description: string;
        price: string;
        old_price: string;
    };
    type Variant = {
        color: Color,
        size: Size,
    }
    type Color = {
        id: string,
        name: string,
        hexCode: string,
    };
    type Size = {
        id: string,
        name: string,
        abbr: string,
    };
    type Category = {
        id: string;
        categoryId: string | null;
        title: string;
    };

}