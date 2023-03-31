import React, {useState} from 'react';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const MainSimple = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

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
