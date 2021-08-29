import React from "react"
import { GalleriesHeroUnitsLargeFragmentContainer } from "./GalleriesHeroUnitsLarge"
// import { GalleriesHeroUnitsSmallFragmentContainer } from "./GalleriesHeroUnitsSmall"
import { Media } from "v2/Utils/Responsive"

export const GalleriesHeroUnitsFragmentContainer = ({ heroUnits }) => {
  return (
    <>
      {/* <Media at="xs">
        <GalleriesHeroUnitsSmallFragmentContainer heroUnits={heroUnits} />
      </Media> */}

      <Media greaterThan="xs">
        <GalleriesHeroUnitsLargeFragmentContainer heroUnits={heroUnits} />
      </Media>
    </>
  )
}
