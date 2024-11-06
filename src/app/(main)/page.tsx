import { Slot } from '~/components';
import CasinoTypes from '~/components/casino';
import Middle from '~/components/middle';

export default async function Home() {
  return (
    <>
      <main className="mainContent">
        <div className="container max-w-[1500px]">
          
          <section className="casino-section">
            <CasinoTypes />
          </section>
          <section className="slot-section">
            <Slot />
          </section>
          <section className="middle-section">
            <Middle />
          </section>
        </div>
      </main>
    </>
  );
}
