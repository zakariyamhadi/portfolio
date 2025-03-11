"use client";

import * as React from "react";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

import { ArrowDown, ArrowUp } from "lucide-react";
import { createContext } from "react";

const ScrollContext = createContext<
  React.RefObject<HTMLDivElement> | undefined
>(undefined);

export const useScrollContext = () => {
  return React.useContext(ScrollContext);
};
type ScrollAreaProps = ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> & {
  enablearrows?: boolean;
};

const ScrollArea = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, ...props }, ref) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showScrollUpIcon, setShowScrollUpIcon] = React.useState(false);
  const [showScrollDownIcon, setShowScrollDownIcon] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      console.log("debug");
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        const scrollHeight = scrollRef.current.scrollHeight;
        const clientHeight = scrollRef.current.clientHeight;
        if (clientHeight !== scrollHeight) {
          setShowScrollUpIcon(scrollTop > 0 && clientHeight !== scrollHeight);
          setShowScrollDownIcon(
            scrollTop + clientHeight < scrollHeight &&
              clientHeight !== scrollHeight
          );
        }

        // If scrolling is not possible, set both states to false
        /*if (scrollTop === 0 || scrollTop + clientHeight >= scrollHeight) {
            setShowScrollUpIcon(false)
            setShowScrollDownIcon(false)
          }*/
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      scrollRef.current.addEventListener("touchstart", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollRef}>
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          className="h-full w-full "
          ref={scrollRef}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar />
        <ScrollAreaPrimitive.Corner />

        {/*<div
          className={`${props.enablearrows && "!-z-10 !opacity-0"} ${
            showScrollDownIcon ? "-z-10 opacity-0" : "!z-10"
          } absolute top-0 bottom-0 right-5 flex h-full justify-center items-center py-2 transition-all duration-500`}
        >
          <ChevronsLeft className="h-10 w-10 animate-bounce-horizontal text-gray-500" />
        </div>*/}
        <div
          className={`${!props.enablearrows && "!-z-10 !opacity-0"} ${
            showScrollDownIcon ? "-z-10 opacity-0" : "!z-10"
          } absolute top-0  flex w-full justify-end bg-gradient-to-b from-background from-50% to-transparent py-2 transition-all duration-500`}
        >
          <ArrowUp className="h-4 w-4 animate-bounce text-gray-500" />
        </div>
        <div
          className={`${!props.enablearrows && "!-z-10 !opacity-0"} ${
            showScrollUpIcon ? "-z-10 opacity-0" : "z-10"
          } absolute bottom-0  flex w-full justify-end bg-gradient-to-t from-background from-50% to-transparent pt-2 transition-all duration-500`}
        >
          <ArrowDown className="h-4 w-4 animate-bounce text-gray-500" />
        </div>
      </ScrollAreaPrimitive.Root>
    </ScrollContext.Provider>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "!z-[2]  flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-primary/50" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
