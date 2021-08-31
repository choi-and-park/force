import React from "react"
import { Box, BoxProps, Flex, Text } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtistsRail_partner } from "v2/__generated__/ArtistsRail_partner.graphql"
import {
  PartnerArtistsCarouselRenderer,
  PartnerArtistsRenderer,
} from "../PartnerArtists"
import { ViewAllButton } from "./ViewAllButton"

// interface ArtistsRailProps extends BoxProps {
//   partner: ArtistsRail_partner
// }

export const ArtistsRailFragmentContainer = ({ partner, ...rest }) => {
  if (!partner) {
    return null
  }

  const { slug } = partner

  return (
    <Box {...rest}>
      <Flex mb={6} justifyContent="space-between" alignItems="center">
        <Text variant="title">Artists</Text>
        <ViewAllButton to={""} />
      </Flex>

      <PartnerArtistsRenderer partner={partner} />
    </Box>
  )
}

// export const ArtistsRailFragmentContainer = createFragmentContainer(
//   ArtistsRail,
//   {
//     partner: graphql`
//       fragment ArtistsRail_partner on Partner {
//         slug
//         profileArtistsLayout
//         displayFullPartnerPage
//         artistsWithPublishedArtworks: artistsConnection(
//           hasPublishedArtworks: true
//           displayOnPartnerProfile: true
//         ) {
//           totalCount
//         }
//         representedArtistsWithoutPublishedArtworks: artistsConnection(
//           representedBy: true
//           hasPublishedArtworks: false
//           displayOnPartnerProfile: true
//         ) {
//           totalCount
//         }
//       }
//     `,
//   }
// )
