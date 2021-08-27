import React from "react"
import { RouterLink } from "v2/System/Router/RouterLink"
import { ShelfArtwork_artwork } from "v2/__generated__/ShelfArtwork_artwork.graphql"
import { Metadata } from "./Metadata_Nuart"
import styled from "styled-components"
import { Image, Flex } from "@artsy/palette"
import { Media } from "v2/Utils/Responsive"

/**
 * The max height for an image in the carousel
 */
export const IMG_HEIGHT = {
  mobile: 250,
  desktop: 320,
}

export const ShelfArtworkFragmentContainer = ({ key, artwork, lazyLoad }) => {
  return (
    <>
      <RouterLink
        to={artwork.href}
        display="block"
        textDecoration="none"
        data-test="artworkShelfArtwork"
      >
        <ResponsiveContainer artwork={artwork}>
          <Image
            src={artwork.image?.resized?.src!}
            srcSet={artwork.image?.resized?.srcSet}
            width={artwork.image?.resized?.width}
            maxHeight={[IMG_HEIGHT.mobile, IMG_HEIGHT.desktop]}
            lazyLoad={lazyLoad}
            style={{ objectFit: "contain", display: "block" }}
          />
        </ResponsiveContainer>
      </RouterLink>

      <Metadata artwork={artwork} maxWidth={artwork.image?.resized?.width} />
    </>
  )
}

const getHeight = (
  artwork: ShelfArtwork_artwork,
  size: keyof typeof IMG_HEIGHT
) => {
  return (artwork.image?.resized?.height ?? 0) > IMG_HEIGHT[size]
    ? IMG_HEIGHT[size]
    : artwork?.image?.resized?.height
}

const ResponsiveContainer: React.FC<{ artwork: ShelfArtwork_artwork }> = ({
  artwork,
  children,
}) => {
  // FIXME: Replace with <picture> and specific sizes for different platforms
  return (
    <>
      <Media at="xs">
        <Container
          width={artwork.image?.resized?.width}
          height={getHeight(artwork, "mobile")}
        >
          {children}
        </Container>
      </Media>

      <Media greaterThan="xs">
        <Container
          width={artwork.image?.resized?.width}
          height={getHeight(artwork, "desktop")}
        >
          {children}
        </Container>
      </Media>
    </>
  )
}

const Container = styled(Flex)`
  position: relative;
`
