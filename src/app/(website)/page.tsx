import NewMainPageHero from '@/components/NewMainPageHero';
import NewMissionStatement from '@/components/NewMissionStatement';
import NewPageCTA from '@/components/NewPageCTA';

export default function HomePage() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <div className="flex-1">
          <NewMainPageHero />
          <NewMissionStatement />

          <NewPageCTA />
        </div>
      </main>
      {/* <main>
        <MainPageHero />
        <MissionStatement />
        <PageCTA />
      </main> */}
    </>
  );
}
