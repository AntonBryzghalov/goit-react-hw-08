import clsx from "clsx";

export const buildLinkClass = ({ isActive }) => {
  return clsx("link", isActive && "link-active");
};
