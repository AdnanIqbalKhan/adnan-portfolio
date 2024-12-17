import React, { useRef, useState, useEffect, useContext } from "react";
import Logo from "./header-component/logo";
import DesktopMenu from "./header-component/desktop-menu";
import IconMenu from "./header-component/icon-menu";
import MobileMenu from "./header-component/mobile-menu";
import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext";

const Header = (props: { finishedLoading: boolean }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [showElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const context = useContext(AppContext);
  const scrollSizeY = useRef<number>(0);

  // Define the EventListener for the NavBar
  useEffect(() => {
    if (context.sharedState.portfolio.NavBar.IntervalEvent == null) {
      context.sharedState.portfolio.NavBar.IntervalEvent = () => {
        if (scrollSizeY.current == 0) {
          scrollSizeY.current = window.scrollY;
        } else if (window.scrollY > 50) {
          if (window.scrollY > scrollSizeY.current) {
            if (RefNavBar) {
              RefNavBar.current?.classList.remove("translate-y-0");
              RefNavBar.current?.classList.add("-translate-y-full");
            }
          } else {
            RefNavBar.current?.classList.add("translate-y-0");
            RefNavBar.current?.classList.remove("-translate-y-full");
          }
          scrollSizeY.current = window.scrollY;
        }
      };
    }
  }, [
    context.sharedState.portfolio.NavBar,
    context.sharedState.portfolio.NavBar.IntervalEvent,
  ]);

  //Adding the EventListener for the NavBar
  useEffect(() => {
    if (context.sharedState.portfolio.NavBar.scrolling == null) {
      context.sharedState.portfolio.NavBar.scrolling = true;
      scrollSizeY.current = 0;
      //Hide when scroll down & show when scroll up
      if (typeof window !== "undefined") {
        window.addEventListener(
          "scroll",
          context.sharedState.portfolio.NavBar.IntervalEvent
        );
      }
    }
  }, [
    context.sharedState.portfolio.NavBar,
    context.sharedState.portfolio.NavBar.scrolling,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 10400);
  }, []);

  //veify document for serverSide rendering
  if (typeof document !== "undefined") {
    document.body.style.overflow = rotate ? "hidden" : "auto";
  }

  return (
    <>
      {/* Mobile visible Navbar component, controlling showElement state to hide itself and rotate itself */}
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        showElement={showElement}
      />
      {/* This parent element for Menu */}
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // changed from 10.4 to 1
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 9.4, duration: 0 },
        }}
        className={`w-full fixed ${
          showElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `
        } bg-AAprimary flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4  transition duration-4000 translate-y-0 z-20`}
      >
        {/* Logo A */}
        <Logo finishedLoading={props.finishedLoading} />

        {/* Hide icon Designed by me */}

        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          showElement={showElement}
        />

        {/* ? Desktop Menu by Titof */}
        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.div>
    </>
  );
};
export default Header;
