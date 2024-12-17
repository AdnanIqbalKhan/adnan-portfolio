import Header from "../components/header";
import Startup from "../components/header/startup-logo";
import MyName from "../components/home/my-name";
import { useContext, useEffect, useState } from "react";
import SocialMediaAround from "../components/home/social-media-around";
import AboutMe from "../components/home/about-me";
import ThisCantBeReached from "../components/home/this-site-cant-be-reached";
import WhereIHaveWorked from "../components/home/where-i-have-worked";
import SomethingIBuilt from "../components/home/something-i-built";
import GetInTouch from "../components/home/get-in-touch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GITHUB_URL, WEBSITE_URL } from "../utils/constants";
export default function Home() {
  const { t } = useTranslation();
  const [showElement, setShowElement] = useState(false);
  const [showThisCantBeReached, setShowThisCantBeReached] = useState(true);
  // context Variable to clearInterval
  const context = useContext(AppContext);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      // remove Typing project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const meta = {
    title: t("meta:title"),
    description: t("meta:description"),
    image: "/profile.png",
    type: "website",
    url: WEBSITE_URL,
    siteName: t("meta:site_name"),
    twitterSite: "@adnan",
    twitterCard: "summary_large_image",
  };

  const finishedLoading = context.sharedState.finishedLoading;
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content={meta.twitterCard} />
        <meta name="twitter:site" content={meta.twitterSite} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        {!finishedLoading && showThisCantBeReached && <ThisCantBeReached />}
        {!finishedLoading && showElement && <Startup />}
        <Header finishedLoading={finishedLoading} />
        <MyName finishedLoading={finishedLoading} />
        <SocialMediaAround finishedLoading={finishedLoading} />
        {finishedLoading && (
          <>
            <AboutMe />
            <WhereIHaveWorked />
            <SomethingIBuilt />
            <GetInTouch />
            <Footer githubUrl={GITHUB_URL} hideSocialsInDesktop={true} />
          </>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "meta", "nav"])),
    },
  };
}
