import React from "react";
import { Omit } from "@material-ui/types";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";
import {
  Button
} from "@material-ui/core";

interface ButtonLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  className?: Record<"root", string>;
  onClick?: () => void;
}

export const ButtonLink: React.FunctionComponent<ButtonLinkProps> = props => {
  const { primary, to, className } = props;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<
        HTMLAnchorElement,
        Omit<RouterLinkProps, "innerRef" | "to">
      >((itemProps, ref) => (
        // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
        // See https://github.com/ReactTraining/react-router/issues/6056
        <RouterLink to={to} {...itemProps} innerRef={ref} />
      )),
    [to]
  );

  return <Button {...props} component={renderLink} className={className && className.root} >{primary}</Button>;
};
