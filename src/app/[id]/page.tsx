import Image from "next/image";
import ProductDetailComponent from "@/custom_components/product-detail/ProductDetail";
import { products } from "@/custom_components/db";
import { Product } from "@/custom_components/model";

export default async function getProduct({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { id: string };
}) {
  const product: Product | undefined = await
    products.find((item) => {
      if (Number(params.id) == item.id) {
        return item;
      }
    });
  return (
    <main className="min-h-screen px-12 py-24 xl:p-24">
      <ProductDetailComponent
        id={product!.id === undefined ? 1 : product!.id}
        title={product!.title}
        description={product!.description}
        rating={product!.rating}
        imageUrl={product!.imageUrl}
        price={product!.price}
        resturant_name={product!.resturant_name}
        quantity={1}
      />
    </main>
  );
}
