import style from "./index.module.css";
import { ReactNode } from "react";
import SearchBarLayout from "@/components/searchbar-layout";
import sales from "@/mock/sales.json";
import SalesItem from "@/components/sale-item";

export default function Home() {
  return (
    <div className={style.title}>
      <section>
        <h3>최신 등록 상품</h3>
        {sales.map((sale) => (
          <SalesItem key={sale.id} {...sale}/>
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};
