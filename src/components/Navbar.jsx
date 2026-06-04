import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import reinLogo from "../assets/reinlab-logo.png?inline";
import { LINKS } from "../siteConfig.js";

const navLinks = [
  { id: "home", label: "Home", href: LINKS.home },
  { id: "services", label: "Services", href: LINKS.services },
  { id: "pfs-system", label: "The PFS System™", href: LINKS.pfsSystem },
];

function getCurrentPage() {
  const path = window.location.pathname.toLowerCase();

  if (path.endsWith("/pfs-system") || path.endsWith("/pfs-system.html")) return "pfs-system";
  if (path.endsWith("/services") || path.endsWith("/services.html")) return "services";

  return "home";
}

function Wordmark() {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src={reinLogo}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 object-contain"
      />
      <span className="text-lg font-bold tracking-normal text-white">
        Rein Lab
      </span>
    </span>
  );
}

export default function Navbar({ applyUrl }) {
  const [open, setOpen] = useState(false);
  const links = navLinks.filter((link) => link.id !== getCurrentPage());

  return (
    <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-foreground backdrop-blur transition hover:bg-white/10 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <a href={LINKS.home} aria-label="Rein Lab home">
          <Wordmark />
        </a>
      </div>

      <div className="hidden items-center gap-8 text-sm text-foreground/80 md:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-foreground">
            {link.label}
          </a>
        ))}
      </div>

      <a
        href={applyUrl}
        className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-surface-deep shadow-lg transition hover:scale-105 hover:opacity-95"
      >
        Get in touch
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 px-6 py-6 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <Wordmark />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-16 flex flex-col gap-7 text-4xl font-semibold tracking-normal">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                  className="text-foreground/80 transition hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={applyUrl}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="mt-8 inline-flex w-max items-center justify-center rounded-full bg-foreground px-7 py-4 text-base font-medium text-surface-deep"
              >
                Apply Now -&gt;
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
