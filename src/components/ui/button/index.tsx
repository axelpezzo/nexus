"use client";

import { Button } from "@mantine/core";
import { forwardRef } from "react";
import Link from "next/link";
import { NuiButton_Props } from "./types";

const NuiButton = forwardRef<HTMLAnchorElement, NuiButton_Props>(
  ({ href, children, ...rest }, ref) => (
    <Button component={Link} href={href} ref={ref} {...rest}>
      {children}
    </Button>
  )
);

export default NuiButton;
