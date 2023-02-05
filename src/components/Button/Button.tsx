import React from "react";
import { css } from "@emotion/react";
type Props = React.ComponentPropsWithRef<"button">;

export const Button: React.FC<Props> = ({ children }) => (
  <button type="button" css={style.base}>
    {children}
  </button>
);

const style = {
  base: css`
    border: 1px solid black;
  `,
};
