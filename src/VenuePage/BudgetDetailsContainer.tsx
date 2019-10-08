import React from 'react';
import { Grid, Button } from '@material-ui/core';


interface BudgetDetailsContainerProps {
    perHeadBudget: number | string;
  }
  
export const BudgetDetailsContainer: React.FunctionComponent<BudgetDetailsContainerProps> = props => {
    const { perHeadBudget } = props; 
  
    return (
      <Grid container={true}>
      <Grid item={true} xs={12}>
          <Button size="small" variant="text">Pricing</Button>
      </Grid>
      <Grid item={true} xs={12}>
          {perHeadBudget}
      </Grid>
    </Grid>
  
    )
  }