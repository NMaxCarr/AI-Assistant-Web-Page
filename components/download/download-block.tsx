import React, { ReactNode } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';


interface Props {
  platform: ReactNode;
  children?: ReactNode;
}

const DownloadBlock = ({ platform, children }: Props): React.ReactNode => {
  return (
    <Card className='bg-slate-800 text-white'>
      <CardHeader>
        <CardTitle className='flex justify-center items-center'>{platform}</CardTitle>
      </CardHeader>
      <CardContent className='text-inherit flex flex-col gap-2'>
        {children}
      </CardContent>
    </Card>
  );
};

export default DownloadBlock;
