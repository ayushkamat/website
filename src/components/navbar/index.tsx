import * as React from "react";
import { createUseStyles } from "react-jss";
import { Theme } from "../../theme";

const useStyles = createUseStyles((theme: Theme) => ({
  navbar: {
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  pushDown: {
    flex: "1 1",
  },
  navbarButton: {},
}));

export type NavbarOption = {
  displayName: string;
  target: string;
};

export const BaseNavbar = function BaseNavbar(props: {
  options: NavbarOption[];
}): JSX.Element {
  const cls = useStyles();

  const navbarButtons = React.useMemo(() => {
    const buttons = [];

    for (const option of props.options) {
      buttons.push(
        <div className={cls.navbarButton}>{option.displayName}</div>
      );
    }

    return buttons;
  }, [cls.navbarButton, props.options]);

  return <div>{navbarButtons}</div>;
};

export const DefaultNavbar = function DefaultNavbar(): JSX.Element {
  const defaultNavbarOptions = [
    {
      displayName: "Home",
      target: "/home",
    },
  ];
  return <BaseNavbar options={defaultNavbarOptions} />;
};
