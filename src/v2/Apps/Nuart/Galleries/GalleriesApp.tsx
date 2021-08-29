import React from "react"
import { Box, Text, breakpoints, Spacer } from "@artsy/palette"
// import { GalleriesFeaturedRailFragmentContainer } from "./Components/GalleriesFeaturedRail"
import { GalleriesHeroUnitsFragmentContainer } from "./Components/GalleriesHeroUnits/GalleriesHeroUnits"
import { GalleryModulesFragmentContainer } from "./Components/GalleryModules"
import { GalleryContents } from "nuart/GalleryContents"

export const GalleriesAppFragmentContainer = props => {
  return (
    <>
      <Box maxWidth={breakpoints.xl} mx="auto" width="100%">
        <Box mx={2}>
          {/* <Spacer mt={[2, 4]} />

          <Text
            variant="xl"
            style={{
              fontFamily: "Noto Sans KR",
            }}
          >
            Browse Galleries
          </Text> */}
          <Spacer mt={[2, 4]} />
          <GalleriesHeroUnitsFragmentContainer
            heroUnits={GalleryContents.banners}
          />
          <Spacer mt={[2, 4]} />

          <GalleryModulesFragmentContainer
            galleryModules={GalleryContents.galleryModules}
          />
        </Box>
      </Box>
    </>
  )
}
