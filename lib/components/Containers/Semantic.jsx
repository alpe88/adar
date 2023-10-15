import React from "react";

export function Header({ children, id, className }) {
  return (
    <header className={className} id={id}>
      {children}
    </header>
  );
}

export function Main({ children, id, className }) {
  return (
    <main className={className} id={id}>
      {children}
    </main>
  );
}

export function Footer({ children, id, className }) {
  return (
    <footer className={className} id={id}>
      {children}
    </footer>
  );
}

export function Section({ children, id, className }) {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
}

export function Aside({ children, id, className }) {
  return (
    <aside className={className} id={id}>
      {children}
    </aside>
  );
}
