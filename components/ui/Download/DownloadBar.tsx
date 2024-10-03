import React from 'react';

import AppleLogo from '@/components/icons/Apple';
import LinuxLogo from '@/components/icons/Linux';
import WindowsLogo from '@/components/icons/Windows';
import DownloadLink from '@/components/ui/Download/DownloadLink';

const DownloadBar = (): React.ReactNode => {
  return (
    <div id="download" className='flex flex-row gap-4'>
        <DownloadLink href="https://github.com/samuelint/ai-assistant/releases">
          <AppleLogo className="h-5 w-4 fill-white" />
          MacOS
        </DownloadLink>
        <DownloadLink href="https://github.com/samuelint/ai-assistant/releases">
          <WindowsLogo className="h-5 w-5" />
          Windows
        </DownloadLink>
        <DownloadLink href="https://github.com/samuelint/ai-assistant/releases">
          <LinuxLogo className="h-5 w-5" />
          Linux (Deb, rpm, AppImage)
        </DownloadLink>
    </div>
  );
};

export default DownloadBar;
