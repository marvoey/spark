import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const MainSimple = ({
  children,
}: Props): JSX.Element => {

  return (
    <Box>
      <main>
        {children}
        <Divider />
      </main>
    </Box>
  );
};

export default MainSimple;
