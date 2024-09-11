import React from 'react';

import s from './Download.module.css';
import AppleLogo from '@/components/icons/Apple';
import LinuxLogo from '@/components/icons/Linux';
import WindowsLogo from '@/components/icons/Windows';
import DownloadLink from '@/components/ui/Download/DownloadLink';

const Download = (): React.ReactNode => {
  return (
    <div id="download">
      <h5 className={s.title}>Download</h5>
      <div className={s.section}>
        <DownloadLink href="https://github.com/samuelint/ai-assistant/releases">
          <AppleLogo className="h-5 w-4 fill-white" />
          MacOs
        </DownloadLink>
        <DownloadLink href="https://github.com/samuelint/ai-assistant/releases">
          <LinuxLogo className="h-5 w-5" />
          Linux
        </DownloadLink>
        <DownloadLink href="https://github.com/samuelint/ai-assistant/releases">
          <WindowsLogo className="h-5 w-5" />
          Windows
        </DownloadLink>
      </div>
    </div>
  );
};

export default Download;
