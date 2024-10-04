import React from 'react';

import DownloadBlock from './DownloadBlock';
import AppleLogo from '@/components/icons/Apple';
import PlatformTitle from './PlatformTitle';
import WindowsLogo from '@/components/icons/Windows';
import LinuxLogo from '@/components/icons/Linux';
import DownloadLink from './DownloadLink';

const Download = (): React.ReactNode => {
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
