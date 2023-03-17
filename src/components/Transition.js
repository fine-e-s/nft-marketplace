import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

export default function Transition({ children }) {
  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.2 }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {
              opacity: 0,
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
