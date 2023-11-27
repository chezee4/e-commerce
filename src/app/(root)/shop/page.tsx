
import Filter from "@/components/filter-side";
import ProductList from "@/components/list-product";

export default function Home() {
  return (
    <section className="w-full pt-20 flex flex-col items-center sm:items-start md:flex-row gap-4">
      <Filter />
      <div className="w-full md:w-[75%]">
        <ProductList />
      </div>
    </section>
  );
}
