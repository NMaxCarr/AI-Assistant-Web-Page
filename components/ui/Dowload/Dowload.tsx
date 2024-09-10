import React from 'react';

import s from './Download.module.css';
import AppleLogo from '@/components/icons/Apple';
import LinuxLogo from '@/components/icons/Linux';
import WindowsLogo from '@/components/icons/Windows';

const Dowload = (): React.ReactNode => {
  return (
    <div id="dowload">
      <h5 className={s.title}>Dowload</h5>

      <div className={s.section}>
        <a
          href="https://github.com/samuelint/ai-assistant/releases"
          target="_blank"
          rel="noreferrer"
          className={s.items}
        >
          <span className="h-5 w-4 fill-white">
            <AppleLogo />
          </span>
          MacOs
        </a>
        <a
          href="https://github.com/samuelint/ai-assistant/releases"
          target="_blank"
          rel="noreferrer"
          className={s.items}
        >
          <span className="h-5 w-5">
            <LinuxLogo />
          </span>
          Linux
        </a>
        <a
          href="https://github.com/samuelint/ai-assistant/releases"
          target="_blank"
          rel="noreferrer"
          className={s.items}
        >
          <span className="h-5 w-5">
            <WindowsLogo />
          </span>
          Windows
        </a>
      </div>
    </div>
  );
};

export default Dowload;
