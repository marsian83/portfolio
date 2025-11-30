import { Button } from "../ui/button";
import { useTheme } from "../../context/theme-provider";
import { motion } from "motion/react";
import Icon from "../custom/Icon";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
      }}
    >
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Icon name={`${theme === "dark" ? "MoonStar" : "Sun"}`} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}