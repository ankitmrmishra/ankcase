"use client";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./Phone";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        className="absolute select-none hidden xl:block -left-32 top-1/3"
        src="/what-people-are-buying.png"
        alt=""
        aria-hidden="true"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <RevieColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <RevieColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <RevieColumn
            reviews={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  );
}

function RevieColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const colref = useRef<HTMLDivElement | null>(null);

  const [columnheight, setColumnHeight] = useState(0);

  const duration = `${columnheight * msPerPixel}ms`;
  useEffect(() => {
    if (!colref.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(colref.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(colref.current);

    return () => {
      resizeObserver.disconnect();
    };
  });
  return (
    <div
      ref={colref}
      className={cn("animate-marquee space-y-8 p-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgsrc, index) => (
        <Review
          key={index}
          imgsrc={imgsrc}
          className={reviewClassName?.(index % reviews.length)}
        />
      ))}
    </div>
  );
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgsrc: string;
}

function Review({ imgsrc, className, ...props }: ReviewProps) {
  const POSSIBLE_ANIM_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];
  const animationDelay =
    POSSIBLE_ANIM_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIM_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5"
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgsrc={imgsrc} />
    </div>
  );
}

function splitArray<T>(array: Array<T>, numparts: number) {
  const result: Array<Array<T>> = [];
  for (let index = 0; index < array.length; index++) {
    const element = index % numparts;
    if (!result[element]) {
      result[element] = [];
    }

    result[element].push(array[index]);
  }
  return result;
}
