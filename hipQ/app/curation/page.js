import SubHeader from "./components/SubHeader";

import SearchAndKeyword from "./components/SearchAndKeyword";
export default function Curation() {
  return (
    <>
      <SubHeader />
      {/* 앞으로 추가할 큐레이션 콘텐츠는 여기에 작성 */}
      <main className="pt-[100px] p-4">
        <SearchAndKeyword />
      </main>
    </>
  );
}
