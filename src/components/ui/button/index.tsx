"use client";

import { Button } from "@mantine/core";
import { forwardRef } from "react";
import Link from "next/link";
import { UiButton_Props } from "./types";

const UiButton = forwardRef<HTMLAnchorElement, UiButton_Props>(
  ({ href, children, ...rest }, ref) => (
    <Button component={Link} href={href} ref={ref} {...rest}>
      {children}
    </Button>
  )
);

export default UiButton;
