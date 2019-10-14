import React from "react";
import { Grid, Button, makeStyles, Theme } from "@material-ui/core";
import { SidePanelHeader } from "./SidePanelHeader";

interface BudgetDetailsContainerProps {
  perHeadBudget: number | string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1)
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
        <Grid item={true} xs={12}>
          {perHeadBudget}
        </Grid>
      </Grid>
    </>
  );
};
