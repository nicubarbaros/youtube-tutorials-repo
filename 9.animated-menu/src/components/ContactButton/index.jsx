import React from "react";
import { Plus } from "react-feather";
import './style.scss';

export default function ContactButton() {
  return <button className="contact-button">Contact us <Plus/> </button>;
}
