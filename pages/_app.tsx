import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import AppContext from "../components/AppContextFolder/AppContext";
import { useMemo, useRef, useState } from "react";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });
  const value = useMemo(
    () => ({ sharedState, setSharedState }),
    [sharedState, setSharedState]
  );
  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
}

export default appWithTranslation(MyApp);
