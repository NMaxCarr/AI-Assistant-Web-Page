import React, { ReactNode } from 'react';

interface Props {
    logo?: ReactNode;
    title?: ReactNode;
}

const PlatformTitle = ({logo, title}: Props): React.ReactNode => {
  return (
    <div className='flex flex-row gap-2'>
        <div>{logo}</div>
        <div>{title}</div>
    </div>
  );
};

export default PlatformTitle;
