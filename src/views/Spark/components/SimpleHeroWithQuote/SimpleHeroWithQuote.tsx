import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormatQuote from '@mui/icons-material/FormatQuote';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

const SimpleHeroWithQuote = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Card sx={{boxShadow: 4, borderRadius: 3}}>
          <CardContent sx={{padding: {sm: 4}}}>
            <Grid container spacing={4}>
              <Grid item container xs={12} md={6} alignItems={'center'}>
                <Box
                  width={1}
                  height={1}
                  borderRight={{xs: 0, sm: `1px solid ${theme.palette.divider}`}}
                  paddingRight={{xs: 0, sm: 4}}
                  paddingTop={{xs: 4, sm: 0}}
                  borderTop={{xs: `1px solid ${theme.palette.divider}`, sm: 0}}
                >
                  <FormatQuote sx={{typography: 'h1'}} />
                  <Box marginBottom={3}>
                    <Typography variant="h6" component="p" color="text.secondary">
                      Omnichannel modernization with
                      Contentful Composable Content Platform
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item container xs={12} md={6} alignItems={'center'}>
                <Typography variant="h6" component="p" color="text.secondary">
                  - Daniel Heaf,<br />
                  Chief Digital Officer at Nike
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default SimpleHeroWithQuote;
