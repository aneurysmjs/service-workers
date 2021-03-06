import React from 'react';

import { Profile } from '@/components/shared/Profile';

const Home = () => (
  <section className="flex-grow-1 py-0">
    <article>
      <p className="text-center">
        This is a project that&apos;s intended to show offline capabilities by using Service Workers
      </p>
      <Profile />
    </article>
  </section>
);

export default Home;
