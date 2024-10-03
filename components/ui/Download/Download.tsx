import React from 'react';

import DownloadBar from './DownloadBar';

const Download = (): React.ReactNode => {
  return (
    <section id="download" className='flex flex-col gap-2 items-center'>
        <DownloadBar />
    </section>
  );
};

export default Download;
