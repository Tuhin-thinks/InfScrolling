import React, { useState } from "react";

/**
 * Component that handles the scroll event and passes the scroll value to its children.
 * This component will also handle infinite scrolling and on each scroll event it will call the
 * onScrollEnd function.
 * @returns
 */
export const ScrollArea = ({ children, onScrollEnd }) => {
  const [scroll, setScroll] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = async (e) => {
    console.log("Inside handleScroll...", e.target.scrollTop);
    // check if user has scrolled to the bottom of the scroll area and trying to scroll further down from the scroll even and window API.
    if (
      e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight &&
      !isFetching
    ) {
      setIsFetching(true);
      await onScrollEnd();
      setIsFetching(false);
    } else {
      console.log(
        "Not at the bottom of the scroll area\n\
      or,\n\
isFetching is true"
      );
    }
  };
  // create the scroll-area div and pass the scroll value to its children
  return (
    <div>
      <div
        className="scroll-area"
        style={{
          height: "65%",
          width: "100%",
          overflow: "scroll",
          // don't show the scroll bar
          scrollbarWidth: "none",
        }}
        onScroll={async (e) => {
          setScroll(e.target.scrollTop); // TODO: we can use this value to do some fetching animation
          // debounce(handleScroll, 100);
          await handleScroll(e);
        }}
      >
        {children}
      </div>
      {isFetching && <div className="loader">Loading...</div>}
    </div>
  );
};
