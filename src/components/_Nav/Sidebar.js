import * as React from "react";
import { motion } from "framer-motion";
import SidebarItem from "./SidebarItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default () => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <SidebarItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
