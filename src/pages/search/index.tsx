import { useRouter } from "next/router";

export default function Page() { // 이름은 아무 상관없음, 그냥 Page로 냅둠, 중요한건 디렉터리 구조와 파일명
    const router = useRouter();
    const query = router.query.q;
    return (
        <div>검색어: {query}, 검색화면 입니다.</div>
    );
}