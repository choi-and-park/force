import React from "react"
import { DetailsFragmentContainer as DetailsArtwork } from "./DetailsArtwork_Nuart"
import { DetailsFragmentContainer as DetailsShow } from "./DetailsShow_Nuart"
import { DetailsFragmentContainer as DetailsCollector } from "./DetailsCollector_Nuart"
import { RouterLink } from "v2/System/Router/RouterLink"

export const Metadata = ({ mt = 1, artwork, ...rest }) => {
  return (
    <RouterLink
      to={artwork.href}
      display="block"
      textDecoration="none"
      textAlign="left"
      mt={mt}
      {...rest}
      onClick={e => {
        e.preventDefault()
      }}
    >
      {artwork.__typename === "artwork" && <DetailsArtwork artwork={artwork} />}
      {artwork.__typename === "show" && <DetailsShow artwork={artwork} />}
      {artwork.__typename === "collector" && (
        <DetailsCollector artwork={artwork} />
      )}
    </RouterLink>
  )
}
