// import React, { use } from 'react';

import DownloadBlock from './download-block';
import PlatformTitle from './platform-title';
import { WindowsLogo, LinuxLogo, AppleLogo } from '@/components/icons';
import DownloadLink from './download-link';
// import { getAllLatestRelease } from '@/lib/release';


const Download = (): React.ReactNode => {
  // const assets = use(getAllLatestRelease());

  // console.log(assets);

  return (
    <section id="download" className='flex w-full items-center justify-center'>
      <div className='grid grid-cols-3 gap-4 justify-center w-1/2'>
        <DownloadBlock
          platform={
            <PlatformTitle title="MacOS" logo={<AppleLogo className="h-5 w-5 fill-white" />}/>
          }>
          <DownloadLink href='/aarch64'>Apple Silicon</DownloadLink>
          <DownloadLink href='/x64'>Intel</DownloadLink>
        </DownloadBlock>
        <DownloadBlock
          platform={
            <PlatformTitle title="Windows" logo={<WindowsLogo className="h-5 w-5 fill-white" />}/>
          }>
          <DownloadLink href='/x64'>x64</DownloadLink>
        </DownloadBlock>
        <DownloadBlock
          platform={
            <PlatformTitle title="Linux" logo={<LinuxLogo className="h-5 w-5 fill-white" />}/>
          }>
          <DownloadLink href='/x64'>x64</DownloadLink>
        </DownloadBlock>
      </div>

    </section>
  );
};

export default Download;
