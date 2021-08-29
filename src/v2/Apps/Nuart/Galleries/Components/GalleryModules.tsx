import React from "react"
import { Join, Separator, Spacer } from "@artsy/palette"
import { GalleryModuleRailFragmentRenderer } from "./GalleryModuleRail"

export const GalleryModulesFragmentContainer = ({ galleryModules }) => {
  return (
    <Join separator={<Spacer mt={6} />}>
      {galleryModules.map((galleryModule, i) => {
        // HACK: Insert featured shows
        return (
          <React.Fragment key={galleryModule.title ?? i}>
            <GalleryModuleRailFragmentRenderer galleryModule={galleryModule} />
          </React.Fragment>
        )
      })}
    </Join>
  )
}
