
import React from 'react';
import { Link } from 'react-router-dom';
import { Omit } from '@material-ui/types';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
  }

export const ListItemLink: React.FunctionComponent<ListItemLinkProps> =(props) => {
    const { icon, primary, to } = props;
  
    const renderLink = React.useMemo(
        () =>
          React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'innerRef' | 'to'>>(
            (itemProps, ref) => (
              // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
              // See https://github.com/ReactTraining/react-router/issues/6056
              <RouterLink to={to} {...itemProps} innerRef={ref} />
            ),
          ),
        [to],
      );
  
      return (
     
          <ListItem button component={renderLink}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
          </ListItem>
       
      );
    }