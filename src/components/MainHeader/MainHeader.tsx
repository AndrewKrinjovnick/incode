import { AppBar } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/graph",
    name: "Graph",
  },
];

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      height: "100%",
      padding: "10px",
    },
    link: {
      color: "white",
      textTransform: "uppercase",
      padding: "5px",
      textDecoration: "none",
    },
    list: {
      listStyle: "none",
    },
    listItem: {
      display: "inline-block",
    },
  })
);

export const MainHeader: FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.container}>
      <nav>
        <ul className={classes.list}>
          {navigation.map((link) => (
            <li key={link.name} className={classes.listItem}>
              <NavLink
                to={link.path}
                className={classes.link}
                style={({ isActive }) =>
                  isActive
                    ? {
                        fontWeight: "700",
                      }
                    : {}
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </AppBar>
  );
};
