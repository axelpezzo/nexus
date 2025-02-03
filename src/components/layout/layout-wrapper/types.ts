import React from "react";

export interface ILayoutWrapper_Props {
  title: string;
  action?: ILayoutWrapper_Action;
  children: React.ReactNode;
}

export interface ILayoutWrapper_Action {
  label: string;
  href: string;
  icon: React.ReactNode;
}
