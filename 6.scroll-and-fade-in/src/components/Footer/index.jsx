import React from "react";
import SectionHeader from "../SectionHeader";
import "./style.scss";

export default function Footer() {
  return (
    <section className="footer" data-scroll>
      <SectionHeader title="Made in" />

      <h1 className='location'>Rio de Janeiro</h1>
    </section>
  );
}
