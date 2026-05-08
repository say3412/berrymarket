import style from "./index.module.css";
import { ReactNode } from "react";
import SearchBarLayout from "@/components/searchbar-layout";
import SalesItem from "@/components/sale-item";
import { fetchRecentSales } from "@/utils/fetch-sales";
import { InferGetServerSidePropsType } from "next";

// 서버사이드에서 호출하도록 해줌 (이름이 정해져있다! getServerSideProps)
export async function getServerSideProps() {
  const sales = await fetchRecentSales();
  return { props: { sales } };
}

export default function Home({sales}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.title}>
      <section>
        <h3>최신 등록 상품</h3>
        {sales.map((sale) => (
          <SalesItem key={sale.id} {...sale} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};
