import React from "react";
import { NavLink, packSx } from "@mantine/core";
import { ExNavLinkProps } from "../Gob";

function SimpleLink({ link, children, sx, ...others }: ExNavLinkProps) {
  return (
    <NavLink
      component="a"
      href={link}
      sx={[{}, ...packSx(sx)]}
      {...others}
      icon={children}
    ></NavLink>
  );
}

export default SimpleLink;
