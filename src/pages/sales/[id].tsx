import { useRouter } from "next/router";

export default function Page() { // [[...id]].tsx 대괄호를 이용하여 여러개, + 기본까지 호출되도록 할 수 있으나, 기본적으로 1개만 사용
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h2>{id} 상품 상세 페이지</h2>
    </div>
  );
}
