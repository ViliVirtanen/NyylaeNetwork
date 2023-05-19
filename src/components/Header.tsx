/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const Header = ({ setPage }: { setPage: (page: string) => void }) => {
  const [open, cycleOpen] = useCycle(false, true);
  const changePage = (page: string) => {
    setPage(page);
    cycleOpen(2);
  };
  const Links = () => (
    <>
      <a className="link" onClick={() => changePage("koti")}>
        Koti
      </a>
      <a className="link" onClick={() => changePage("ilmoittautuneet")}>
        Ilmoittautuneet
      </a>
      <a className="link" onClick={() => changePage("kommentit")}>
        Kommentit
      </a>
    </>
  );
  return (
    <>
      <div className="header p-10 fixed top-0 w-screen max-sm:hidden">
        <div className="flex flex-row justify-between">
          <a onClick={() => setPage("koti")}>
            <h2 className="pulse">NYYLÄ NETWORK</h2>
          </a>
          <div className="flex gap-5 items-center">
            <Links />
            <a
              onClick={() => setPage("koti#register")}
              className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-5 rounded-full cursor-pointer"
            >
              Liity
            </a>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <motion.nav animate={open ? "open" : "closed"}>
          <AnimatePresence>
            {open && (
              <motion.aside
                initial={{ width: 0 }}
                animate={{
                  width: 300,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.7, duration: 0.3 },
                }}
              >
                <motion.div
                  className="container"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={itemVariants}
                >
                  <div>
                    <Links />
                  </div>
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
          <div className="btn-container z-[200] left-2 top-2">
            <MenuToggle toggle={() => cycleOpen()} />
          </div>
        </motion.nav>
      </div>
    </>
  );
};
