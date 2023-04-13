import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export interface FeatureType {
  body: string,
  name: string,
  slug: string,
}

const Feature = ({feature}: {feature: FeatureType;}): JSX.Element => {
  return (
    <ListItem
      component="div"
      disableGutters
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
      }}
    >
      <ListItemText
        primary={'primary'}
        secondary={'secondary'}
        primaryTypographyProps={{
          variant: 'h6',
          gutterBottom: true,
          align: 'center',
        }}
        secondaryTypographyProps={{align: 'center'}}
        sx={{
          '& .MuiListItemText-primary': {
            fontWeight: 700,
          },
          margin: 0,
        }}
      />
    </ListItem>
  );
};

export default Feature;
