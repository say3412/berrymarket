import SearchBarLayout from "@/components/searchbar-layout";
import { ReactNode } from "react";
import { fetchSales } from "@/utils/fetch-sales";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import SalesItem from "@/components/sale-item";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query.q;
  const sales = await fetchSales(query as string); // 형을 보장하는 경우 바뀌 줌

  return { props: { sales: sales } };
}

// 이름은 아무 상관없음, 그냥 Page로 냅둠, 중요한건 디렉터리 구조와 파일명
export default function Page({
  sales,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {sales.map((sale) => (
        <SalesItem key={sale.id} {...sale} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};
