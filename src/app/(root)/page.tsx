import Filter from "@/components/filter-side";
import ProductList from "@/components/list-product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  max-w-[1300px] px-3 mx-auto ">
      <section className="w-full pt-20 flex flex-col items-center sm:items-start md:flex-row gap-4">
        <aside className=" w-full md:w-[25%] min-w-[220px]">
          <h3 className=" text-center mb-9 whitespace-nowrap text-4xl font-medium leading-[150%]">
            Shop The Latest
          </h3>
          <Filter />
        </aside>
        <div className="w-full md:w-[75%]">
          <ProductList />
        </div>
      </section>
    </main>
  );
}
