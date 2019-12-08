import React from "react";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { SidePanelHeader } from "./SidePanelHeader";
interface BudgetDetailsContainerProps {
  perHeadBudget: number | string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    textAlign: "left",
    display: "flex"
  },
  item: {
    display: "flex",
    flexDirection: "row"
  },
  DetailsContainer: {
    flexDirection: "column",
    display: "flex",
    textAlign: "left"
  },
  iconContainer: {
    paddingRight: theme.spacing(2)
  },
  disclaimerContaier: {
    textAlign: "left",
    padding: theme.spacing(1),
    lineHeight: 0,
  },
  fontSize: {
    fontSize: 'xx-small'
  }
}));

export const BudgetDetailsContainer: React.FunctionComponent<BudgetDetailsContainerProps> = props => {
  const { perHeadBudget } = props;
  const classes = useStyles();

  return (
    <>
      <SidePanelHeader headerText={"pricing"} />
      <div className={classes.root}>
        <div className={classes.iconContainer}>
          <AttachMoneyIcon />
        </div>
        <div>
          <Typography variant="subtitle2">Price per head</Typography>

          <Typography variant="caption">{perHeadBudget} HKD</Typography>
        </div>
      </div>
      <hr />
      <div className={classes.disclaimerContaier}>
        <Typography className={classes.fontSize} variant="caption">
          *prices above are guide prices only supplied by the venue and may
          fluctuate depending on client requirements
        </Typography>
      </div>
    </>
  );
};
