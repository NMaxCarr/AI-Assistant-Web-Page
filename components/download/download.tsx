import React, { use } from 'react';

import DownloadBlock from './download-block';
import PlatformTitle from './platform-title';
import { WindowsLogo, LinuxLogo, AppleLogo } from '@/components/icons';
import { getAllLatestRelease } from '@/lib/release';
import { groupReleaseAssetsByOsArchExtension } from '@/lib/release/domain';
import DownloadLink from './download-link';


const Download = (): React.ReactNode => {
  const groupedAssets = use(getAllLatestRelease().then((assets) => groupReleaseAssetsByOsArchExtension(assets)));

  return (
    <section id="download" className='flex w-full items-center justify-center'>
      <div className='grid grid-cols-3 gap-4 justify-center w-1/2'>
        <DownloadBlock
          platform={
            <PlatformTitle title="MacOS" logo={<AppleLogo className="h-5 w-5 fill-white" />}/>
          }
        >
          {groupedAssets.macos.aarch64.dmg.map((asset) => <DownloadLink key={asset.url} href={asset.url}>Apple Silicon</DownloadLink>)}
        </DownloadBlock>

        <DownloadBlock
          platform={
            <PlatformTitle title="Windows" logo={<WindowsLogo className="h-5 w-5 fill-white" />}/>
          }
        >
          {groupedAssets.windows.x64.msi.map((asset) => <DownloadLink key={asset.url} href={asset.url}>x64 .msi</DownloadLink>)}
        </DownloadBlock>

        <DownloadBlock
          platform={
            <PlatformTitle title="Linux" logo={<LinuxLogo className="h-5 w-5 fill-white" />}/>
          }
        >
          {groupedAssets.linux.amd64?.AppImage?.map((asset) => <DownloadLink key={asset.url} href={asset.url}>x64 AppImage</DownloadLink>)}
          {groupedAssets.linux.amd64?.deb?.map((asset) => <DownloadLink key={asset.url} href={asset.url}>x64 .deb</DownloadLink>)}
          {groupedAssets.linux.x86_64?.rpm?.map((asset) => <DownloadLink key={asset.url} href={asset.url}>x86_64 .rpm</DownloadLink>)}
        </DownloadBlock>
      </div>

    </section>
  );
};

export default Download;
