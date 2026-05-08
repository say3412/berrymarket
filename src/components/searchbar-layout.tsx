import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import  style  from "./searchbar-layout.module.css";

export default function SearchBarLayout({ children, }: { children: React.ReactNode; }) { // nalayout
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const router = useRouter();
  const onSubmit = () => {
    if (!search || router.query.q === search) {
      return;
    }
    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          value={search}
          placeholder="검색어를 입력해주세요"
          onChange={onChangeSearch}
        />
        <button onClick={onSubmit}>search</button>
      </div>
      {children}
    </div>
  );
}
