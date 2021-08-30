import React from "react"
import { Box, Flex, Link, MediumCard, Text, Spacer, Join } from "@artsy/palette"
import { GalleryModuleCarousel } from "./GalleryModuleCarousel"

export const GalleryModuleRailFragmentRenderer = ({ galleryModule }) => {
  const carouselItemRender = (
    { image, slug, name, location },
    slideIndex: number
  ): React.ReactElement => {
    return (
      <Flex flexDirection="row">
        {slideIndex !== 0 && <Spacer ml="40px" />}
        <Link href={`/viewing-room/${slug}`} key={slug} noUnderline>
          <MediumCard
            image={image.src}
            title=""
            subtitle=""
            width={320}
            height={200}
          />
          <Text variant="md">{name}</Text>
          <Text variant="xs">{location}</Text>
        </Link>
      </Flex>
    )
  }

  return (
    <Box>
      <Text variant="lg">{galleryModule.title}</Text>
      <GalleryModuleCarousel
        height={220}
        data={galleryModule.galleries}
        render={carouselItemRender}
        maxWidth="100%"
        justifyContent="left"
        scrollPercentByCustomCount={galleryModule.galleries.length - 2}
      />
    </Box>
  )
}
