import {
  GridColumns,
  Column,
  ResponsiveBox,
  Text,
  Spacer,
  Flex,
  Skeleton,
  SkeletonBox,
  SkeletonText,
} from "@artsy/palette"
import React from "react"
import { RouterLink } from "v2/System/Router/RouterLink"
import { useLazyLoadComponent } from "v2/Utils/Hooks/useLazyLoadComponent"
import { HomeFeaturedGalleryFragmentContainer } from "./HomeFeaturedGallery_Nuart"

const HomeFeaturedGalleriesQueryRenderer = ({ artworkModule }) => {
  return (
    <HomeFeaturedGalleriesContainer title={artworkModule.title}>
      <GridColumns gridRowGap={6}>
        {artworkModule.items.map(gallery => {
          return (
            <Column key={gallery.internalID} span={3}>
              <HomeFeaturedGalleryFragmentContainer gallery={gallery} />
            </Column>
          )
        })}
      </GridColumns>
    </HomeFeaturedGalleriesContainer>
  )
}

const HomeFeaturedGalleriesContainer: React.FC<{
  title: string | JSX.Element
}> = ({ title, children }) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Text
          variant="xl"
          style={{
            fontFamily: "Alegreya",
            fontSize: 30,
            // fontWeight: 700,
          }}
        >
          {title}
        </Text>

        <Text
          variant="sm"
          as={RouterLink}
          // @ts-ignore
          to="/galleries"
          onClick={e => {
            e.preventDefault()
          }}
          style={{
            fontFamily: "Alegreya",
            // fontWeight: 700,
          }}
        >
          Explore All Galleries
        </Text>
      </Flex>

      <Spacer mt={2} />

      {children}
    </>
  )
}

const PLACEHOLDER = (
  <HomeFeaturedGalleriesContainer title={"Featured Galleries"}>
    <Skeleton>
      <GridColumns gridRowGap={6}>
        {[...new Array(6)].map((_, i) => {
          return (
            <Column key={i} span={4}>
              <ResponsiveBox aspectWidth={4} aspectHeight={3} maxWidth="100%">
                <SkeletonBox width="100%" height="100%" />
              </ResponsiveBox>

              <Spacer mt={2} />

              <SkeletonText variant="xl" mr={1}>
                Show Title Typically Two Lines
              </SkeletonText>

              <SkeletonText variant="xl">Gallery name</SkeletonText>

              <Spacer mt={1} />

              <SkeletonText variant="sm">Location</SkeletonText>
            </Column>
          )
        })}
      </GridColumns>
    </Skeleton>
  </HomeFeaturedGalleriesContainer>
)

export const HomeFeaturedGalleriesLazyQueryRenderer = ({ artworkModule }) => {
  const { Waypoint, isEnteredView } = useLazyLoadComponent()

  return (
    <>
      <Waypoint />

      {isEnteredView ? (
        <HomeFeaturedGalleriesQueryRenderer artworkModule={artworkModule} />
      ) : (
        PLACEHOLDER
      )}
    </>
  )
}
