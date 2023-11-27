import Link from "next/link";

export default function NotFound() {
  return (
    <section className=" flex flex-col m-auto justify-center items-center w-full h-full">
      <h2 className=" font-bold text-2xl mb-4 ">404 ERROR</h2>
      <p  className="max-w-[220px] text-center">This page not found; back to home and start again</p>
      <Link href="/" className="px-5 py-2 border-2 rounded mt-8">Home Page</Link>
    </section>
  );
}
