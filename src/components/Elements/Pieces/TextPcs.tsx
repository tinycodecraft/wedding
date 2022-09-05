import React from "react";
import { Text, TextProps } from "@mantine/core";
import { ComponentElProps } from "src/components/Gob";

import "./textitem.css";

export default function TextPcs({
  children,
  cp,
  toBig,
  mode
}: TextProps & ComponentElProps) {
  return (
    (toBig && (
      <Text
        sx={(theme)=>({
          fontFamily: "Great Vibes, cursive",
          fontSize: "4rem",
          margin: "1rem",
          color: `${mode=='desktop' ? theme.other.colors.secondary: theme.other.colors.third}`
        })}
        component={cp}
      >
        {children}
      </Text>
    )) || (
      <Text
        sx={(theme) => ({
          margin: "1rem",
          fontSize: "1.5rem",
          color: theme.other.colors.light
        })}
        component={cp}
      >
        {children}
      </Text>
    )
  );
}