"use client"

import { InView } from "react-intersection-observer"

export default function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
}: {
  children: React.ReactNode
  classNameInView: string
  classNameNotInView: string
}) {
  return (
    <InView threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={inView ? classNameInView : classNameNotInView}
        >
          {children}
        </div>
      )}
    </InView>
  )
}