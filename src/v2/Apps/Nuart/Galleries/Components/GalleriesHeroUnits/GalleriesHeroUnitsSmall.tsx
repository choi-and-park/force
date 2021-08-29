import { ProgressDots, Spacer } from "@artsy/palette"
import React from "react"
import { useState } from "react"
import { useSystemContext } from "v2/System"
// import { GalleriesSwiper } from "../GalleriesSwiper"
import { GalleriesHeroUnitFragmentContainer } from "./GalleriesHeroUnit"

export const GalleriesHeroUnitsSmallFragmentContainer = ({ heroUnits }) => {
  const { isLoggedIn } = useSystemContext()
  const [index, setIndex] = useState(0)

  return (
    <>
      {/* <GalleriesSwiper onChange={setIndex}>
        {heroUnits.map((heroUnit, i) => {
          return (
            <GalleriesHeroUnitFragmentContainer
              key={i}
              index={i}
              heroUnit={heroUnit}
              layout="a"
              bg={!isLoggedIn && i === 0 ? "black100" : "black5"}
            />
          )
        })}
      </GalleriesSwiper> */}

      <Spacer mt={4} />

      <ProgressDots
        variant="dash"
        amount={heroUnits.length}
        activeIndex={index}
      />
    </>
  )
}
