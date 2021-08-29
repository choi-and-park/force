import { ResponsiveBox, Image, Spacer, Text } from "@artsy/palette"
import React from "react"
import { RouterLink } from "v2/System/Router/RouterLink"

export const HomeFeaturedGalleryFragmentContainer = ({ gallery }) => {
  const image = gallery.coverImage?.cropped

  return (
    <RouterLink
      to={gallery.href ?? ""}
      style={{
        display: "block",
        textDecoration: "none",
      }}
      onClick={e => {
        e.preventDefault()
      }}
    >
      <ResponsiveBox
        aspectWidth={4}
        aspectHeight={3}
        maxWidth="100%"
        bg="white"
      >
        {image && (
          <Image
            src={image.src}
            srcSet={image.srcSet}
            mt={1}
            ml={1}
            width="90%"
            height="90%"
            alt=""
          />
        )}
      </ResponsiveBox>

      {/* <Spacer mt={1} /> */}

      <Text
        variant="md"
        ml={1}
        mr={1}
        lineClamp={2}
        style={{
          fontFamily: "Alegreya",
          // fontWeight: 700,
        }}
      >
        {gallery.name}
      </Text>

      <Text
        variant="md"
        color="black60"
        ml={1}
        lineClamp={1}
        style={{
          fontFamily: "Gowun Dodum",
        }}
      >
        {gallery.location}
      </Text>
    </RouterLink>
  )
}
