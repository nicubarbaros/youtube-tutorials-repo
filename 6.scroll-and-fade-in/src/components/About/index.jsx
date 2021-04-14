import React from "react";
import SectionHeader from "../SectionHeader";
import './style.scss';

export default function About() {
  return (
    <section className="about-section" data-scroll-section>
    <SectionHeader title="about" />
      <p>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
}
