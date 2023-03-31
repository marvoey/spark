import React from 'react';
import {alpha, useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

const SimpleHeroWithVideo = ({content}): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  console.log('simple hero video content:', content);

  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Box>
              <Box marginBottom={2}>
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{fontWeight: 700}}
                >
                  {content.header}
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography variant="body1" component="p" color="text.secondary">
                  <br />
                  {content.body}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
            md={6}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: 0,
                  width: 1,
                  height: 1,
                  zIndex: 3,
                  background: theme.palette.primary.main,
                  opacity: 0.2,
                },
              }}
            >
              <Box
                component={'video'}
                width={1}
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source
                  src={content.video}
                  type="video/mp4"
                />
                <source
                  src={content.video}
                  type="video/webm"
                />
                <source
                  src={content.video}
                  type="video/ogg"
                />
                Your browser do not support HTML5 video.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SimpleHeroWithVideo;
