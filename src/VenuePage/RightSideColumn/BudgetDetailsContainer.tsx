import React from "react";
import { Grid, Button, makeStyles, Theme, Typography } from "@material-ui/core";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { SidePanelHeader } from './SidePanelHeader'
interface BudgetDetailsContainerProps {
  perHeadBudget: number | string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    textAlign: 'left'
  },
    item: {
      display: 'flex', 
      flexDirection: 'row'
    }
}));

export const BudgetDetailsContainer: React.FunctionComponent<
  BudgetDetailsContainerProps
> = props => {
  const { perHeadBudget } = props;
  const classes = useStyles();

  return (
    <>
      <SidePanelHeader headerText={"pricing"} />
      <Grid container={true} classes={classes}>
        <Grid item={true} xs={12} className={classes.item}>
        <AttachMoneyIcon/> <Typography>{perHeadBudget}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
