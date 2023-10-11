import React from "react";

export function Header({ children, id }) {
  return <header id={id}>{children}</header>;
}

export function Main({ children, id }) {
  return <main id={id}>{children}</main>;
}

export function Footer({ children, id }) {
  return <footer id={id}>{children}</footer>;
}

export function Section({ children, id }) {
  return <section id={id}>{children}</section>;
}

export function Aside({ children, id }) {
  return <aside id={id}>{children}</aside>;
}
