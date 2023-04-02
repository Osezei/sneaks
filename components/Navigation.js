import React from "react";
import { links } from "@/data/utils";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {links.map(({ id, title, url }) => {
          return (
            <Link key={id} href={url}>
              {title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
