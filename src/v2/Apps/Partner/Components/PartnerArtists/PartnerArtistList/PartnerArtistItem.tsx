import React from "react"
import styled from "styled-components"
import { createFragmentContainer, graphql } from "react-relay"
import { RouterLink } from "v2/System/Router/RouterLink"
import { PartnerArtistItem_artist } from "v2/__generated__/PartnerArtistItem_artist.graphql"
import { Text } from "@artsy/palette"
import { ScrollIntoViewProps } from "v2/Utils/scrollHelpers"
import { ScrollIntoView } from "v2/Utils"

const Name = styled(Text).attrs({ py: 0.5 })`
  display: inline-block;
  vertical-align: top;
  width: 100%;
`

// export interface PartnerArtistItemProps {
//   artist: PartnerArtistItem_artist
//   hasPublishedArtworks: boolean
//   partnerSlug: string
//   scrollTo: ScrollIntoViewProps
//   displayFullPartnerPage: boolean
// }

export const PartnerArtistItemFragmentContainer = ({
  artist: { name, slug, href },
  scrollTo,
}) => {
  return (
    <ScrollIntoView {...scrollTo}>
      <RouterLink noUnderline to={href} onClick={e => e.preventDefault()}>
        <Name color="black100">{name}</Name>
      </RouterLink>
    </ScrollIntoView>
  )
}

// export const PartnerArtistItemFragmentContainer = createFragmentContainer(
//   PartnerArtistItem,
//   {
//     artist: graphql`
//       fragment PartnerArtistItem_artist on Artist {
//         name
//         slug
//         href
//       }
//     `,
//   }
// )
