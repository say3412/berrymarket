import style from "./[id].module.css";
import Image from "next/image";
import { fetchSalesById } from "@/utils/fetch-sales";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id; // 값이 넘어오는 것이 확실한 상황에서, 강제 래핑 !
  const sale = await fetchSalesById(Number(id));
  return { props: { sale } };
}

// [[...id]].tsx 대괄호를 이용하여 여러개, + 기본까지 호출되도록 할 수 있으나, 기본적으로 1개만 사용
export default function Page({sale}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (sale.length === 0) {
    <div>다시 시도해 주세요.</div>
  }

  const { productName, description, price, photo } = sale[0];
  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${photo}`;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <Image
          src={imageUrl}
          alt={`${productName}의 사진`}
          width={300}
          height={300}
          className={style.cover_img}
        />
      </div>
      <div>
        <div className={style.title}>{productName}</div>
        <div className={style.price}>{price.toLocaleString()}</div>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  );
}
