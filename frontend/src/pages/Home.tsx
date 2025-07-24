import BookCard from "../components/BookCard";
import PlaceCard from "../components/PlaceCard";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      {/* 상단 타이틀 */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📚 오늘의 추천</h1>
        <div className="flex gap-3 text-sm text-gray-600">
          <span className="cursor-pointer">🔔</span>
          <span className="cursor-pointer">⚙️</span>
        </div>
      </header>

      {/* 추천 도서 */}
      <SectionTitle title="오늘의 추천 도서" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <BookCard
          image="https://images.unsplash.com/photo-1550439062-609e1531270e"
          title="어린 왕자"
          author="앙투안 드 생텍쥐페리"
        />
        <BookCard
          image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          title="백년의 고독"
          author="가브리엘 가르시아 마르케스"
        />
        <BookCard
          image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          title="데미안"
          author="헤르만 헤세"
        />
      </div>

      {/* 추천 장소 */}
      <SectionTitle title="문학 명소 추천" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <PlaceCard
          image="https://images.unsplash.com/photo-1582719478170-2f2b6e42e7c3"
          place="프라하 구시가지"
          description="카프카의 도시, 작품 속 주요 배경지"
        />
        <PlaceCard
          image="https://images.unsplash.com/photo-1534081333815-ae5019106621"
          place="통영 동피랑 마을"
          description="김춘수, 유치환 등 현대시인의 고향"
        />
        <PlaceCard
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          place="런던 베이커 스트리트"
          description="셜록 홈즈의 상징적인 거리"
        />
      </div>

      {/* 위치 기반 추천 (더미) */}
      <SectionTitle title="내 주변 문학 콘텐츠" />
      <div className="text-gray-600 text-sm">📍 위치 기반 추천 기능 준비 중...</div>
    </div>
  );
}
