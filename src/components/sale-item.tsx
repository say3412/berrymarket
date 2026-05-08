import { type SaleData } from "@/types/types";
import style from "./sale-item.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SalesItem({ id, productName, description, price, photo }: SaleData) {
  const imgUrl = `https://styangpa.blob.core.windows.net/yangpa/${photo}`;

  return (
    <Link href={`/sales/${id}`} className={style.container}>
      <Image
        src={imgUrl}
        alt={`${productName}의 사진`}
        width={100}
        height={100}
        className={style.image}
      />
      <div>
        <div className={style.title}>{productName}</div>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{price.toLocaleString()} 원</div>
      </div>
    </Link>
  );
}
