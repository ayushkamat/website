import * as React from "react";
import { createUseStyles } from "react-jss";
import { DefaultNavbar } from "../../components/navbar";
import { Theme } from "../../theme";

const useStyles = createUseStyles((theme: Theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function HomePage(): JSX.Element {
  const cls = useStyles();

  return (
    <div className={cls.home}>
      <DefaultNavbar />
    </div>
  );
}
