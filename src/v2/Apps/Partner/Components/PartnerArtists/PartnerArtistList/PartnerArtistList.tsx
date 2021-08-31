import React from "react"
import { PartnerArtistList_artists } from "v2/__generated__/PartnerArtistList_artists.graphql"
import { createFragmentContainer, graphql } from "react-relay"
import { Box, Column, GridColumns, Text } from "@artsy/palette"
import { groupArtists } from "../partnerArtistsUtils"
import { ColumnSpan } from "@artsy/palette/dist/elements/GridColumns/calculateGridColumn"
import { Media } from "v2/Utils/Responsive"
import { PartnerArtistItemFragmentContainer as PartnerArtistItem } from "./PartnerArtistItem"
import { Carousel } from "v2/Components/Carousel"
import { ScrollIntoViewProps } from "v2/Utils/scrollHelpers"

import { gallery_arario } from "nuart/GalleryContents"

export const PartnerArtistListContainer: React.FC = ({ children }) => {
  return (
    <>
      <Media greaterThan="xs">{children}</Media>
      <Media at="xs">
        <Carousel>{children as JSX.Element}</Carousel>
      </Media>
    </>
  )
}

export const PartnerArtistListFragmentContainer = ({
  artists,
  scrollTo,
  partnerSlug,
}) => {
  if (!artists) return null

  // const groups = groupArtists(
  //   artists,
  //   distinguishRepresentedArtists && displayFullPartnerPage
  // )

  const groups = gallery_arario.artists
  return (
    <PartnerArtistListContainer>
      <GridColumns minWidth={["270vw", "auto"]} pr={[2, 0]} gridColumnGap={1}>
        {groups.map((group, i) => {
          return (
            <Column key={i} span={[(group.columnSize * 2) as ColumnSpan]}>
              {group.columnName && (
                <Text variant="mediumText" mb={2}>
                  {group.columnName}
                </Text>
              )}
              <Box style={{ columnCount: group.columnSize }}>
                {group.artists.map(node => {
                  return <PartnerArtistItem scrollTo={scrollTo} artist={node} />
                })}
              </Box>
            </Column>
          )
        })}
      </GridColumns>
    </PartnerArtistListContainer>
  )
}

// export const PartnerArtistListFragmentContainer = createFragmentContainer(
//   PartnerArtistList,
//   {
//     artists: graphql`
//       fragment PartnerArtistList_artists on ArtistPartnerEdge
//         @relay(plural: true) {
//         representedBy
//         counts {
//           artworks
//         }
//         node {
//           internalID
//           ...PartnerArtistItem_artist
//         }
//       }
//     `,
//   }
// )
