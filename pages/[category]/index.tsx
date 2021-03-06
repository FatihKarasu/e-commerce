import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
let BASE_API_URI = process.env.NEXT_PUBLIC_BASE_API_URI as string;
export default function index() {
  const router = useRouter();
  const { category } = router.query;

  const [products, setProducts] = useState<Product[]>([]);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  const [canFetchMore, setCanFetchMore] = useState(true);
  const fetchProducts = async () => {
    const response = await fetch(
      `${BASE_API_URI}/categories/${category}/products?start=${start}&limit=${limit}`
    );
    const data: Product[] = await response.json();
    setProducts((oldData) => [...oldData, ...data]);
    setLoading(false);
    if (data.length < limit) setCanFetchMore(false);
  };
  useEffect(() => {
    if (category === undefined) return;
    setProducts([]);
    setCanFetchMore(true);
    setStart(0);
    setLoading(true);
  }, [category]);

  useEffect(() => {
    if (category === undefined) return;
    setLoading(true);
  }, [start]);

  useEffect(() => {
    if (!loading) return;
    setTimeout(() => {
      fetchProducts();
    }, 1000);
  }, [loading]);

  return (
    <>
      <Head>
        <title>{category}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-2">filters</div>
          <div className="col-lg-10">
            <div className="row gy-4">
              {products.map((p) => (
                <div key={p.id} className="col-xl-3 col-lg-4 col-sm-6">
                  <ProductCard product={p} />
                </div>
              ))}
              {loading ? <div>Loading</div> : null}
              {canFetchMore ? (
                <div className="col-12">
                  <Button onClick={() => setStart(start + limit)}>
                    Load More
                  </Button>
                </div>
              ) : (
                <div>No More Products</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
