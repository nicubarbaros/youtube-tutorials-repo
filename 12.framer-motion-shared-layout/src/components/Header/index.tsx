import React from "react";
import { Columns, Grid } from "react-feather";
import "./style.scss";

type Props = {
  toggleView: (view: boolean) => void;
  view: boolean;
};
export default function Header({ view, toggleView }: Props) {
  return (
    <header className="header-container">
      <button onClick={() => toggleView(!view)} className="button">
        {view ? <Columns /> : <Grid />}
      </button>
    </header>
  );
}
