import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import CategoryTabs from "@/components/common/CategoryTabs";
import CreateMemoryCard from "@/components/cards/CreateMemoryCard";
import BottomNavigation from "@/components/layout/BottomNavigation";
import MemoryList from "@/components/cards/MemoryList";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CategoryTabs />
      <CreateMemoryCard />
      <MemoryList />
      <BottomNavigation />
    </main>
  );
}