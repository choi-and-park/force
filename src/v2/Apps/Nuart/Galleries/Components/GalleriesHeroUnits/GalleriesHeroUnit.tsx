import React from "react"
import {
  Box,
  Image,
  ResponsiveBox,
  Spacer,
  Text,
  Button,
  GridColumns,
  Column,
  HTML,
} from "@artsy/palette"
import { Link } from "react-head"
import { RouterLink } from "v2/System/Router/RouterLink"
import { Media } from "v2/Utils/Responsive"

export const GalleriesHeroUnitFragmentContainer = ({ heroUnit, index }) => {
  const figure = (
    <Column span={7}>
      <RouterLink
        to={heroUnit.href ?? ""}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
        tabIndex={-1}
        onClick={e => {
          e.preventDefault()
        }}
      >
        {heroUnit.image && (
          <>
            <Media at="xs">
              <ResponsiveBox
                aspectWidth={3}
                aspectHeight={2}
                maxWidth="100%"
                bg="black10"
              >
                <Image
                  src={heroUnit.image.src}
                  srcSet={heroUnit.image.srcSet}
                  width="100%"
                  height="100%"
                  lazyLoad={index > 0}
                />
              </ResponsiveBox>
            </Media>

            <Media greaterThan="xs">
              {className => (
                <Box
                  className={className}
                  height={[100, 200, 300]}
                  position="relative"
                >
                  <Image
                    src={heroUnit.image.src}
                    srcSet={heroUnit.image.srcSet}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                    lazyLoad={index > 0}
                  />
                </Box>
              )}
            </Media>
          </>
        )}
      </RouterLink>
    </Column>
  )

  const description = (
    <Column span={5}>
      <GridColumns height="100%">
        <Column
          start={[1]}
          span={[11]}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          py={4}
        >
          <RouterLink
            to={heroUnit.href ?? ""}
            tabIndex={-1}
            style={{ display: "block", textDecoration: "none" }}
            onClick={e => {
              e.preventDefault()
            }}
          >
            <Text
              variant={["md"]}
              textAlign="center"
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              {heroUnit.gallery}
            </Text>
            <Spacer mt={1} />
            <Text
              variant={["lg"]}
              textAlign="center"
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              {heroUnit.title}
            </Text>
            <Spacer mt={1} />
            <Text
              variant={["xs"]}
              textAlign="center"
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              {heroUnit.date}
            </Text>
          </RouterLink>
        </Column>
      </GridColumns>
    </Column>
  )

  return (
    <>
      {heroUnit.image && index === 0 && (
        <Link
          rel="preload"
          as="image"
          href={heroUnit.href}
          imagesrcset={heroUnit.image.srcSet}
        />
      )}

      <GridColumns bg="white100" width="100%">
        {description}
        {figure}
      </GridColumns>
    </>
  )
}
