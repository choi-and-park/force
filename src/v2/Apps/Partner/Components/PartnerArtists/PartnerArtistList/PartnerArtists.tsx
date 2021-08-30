import React, { useEffect } from "react"
import { Box } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { PartnerArtists_partner } from "v2/__generated__/PartnerArtists_partner.graphql"
import { PartnerArtistsQuery } from "v2/__generated__/PartnerArtistsQuery.graphql"
import { scrollIntoView, ScrollIntoViewProps } from "v2/Utils/scrollHelpers"
import { useSystemContext } from "v2/System"
import { usePartnerArtistsLoadingContext } from "v2/Apps/Partner/Utils/PartnerArtistsLoadingContext"
import { PartnerArtistListPlaceholder } from "./PartnerArtistListPlaceholder"
import { PartnerArtistListFragmentContainer } from "./PartnerArtistList"
import { SystemQueryRenderer as QueryRenderer } from "v2/System/Relay/SystemQueryRenderer"
import scrollToTop from "desktop/apps/auction/utils/scrollToTop"

// export interface PartnerArtistsProps {
//   partner: PartnerArtists_partner
//   scrollTo?: ScrollIntoViewProps
// }

export const PartnerArtistsRenderer = ({ partner }) => {
  const { setIsLoaded } = usePartnerArtistsLoadingContext()
  useEffect(() => {
    setIsLoaded && setIsLoaded(true)
  }, [])

  const { artists, slug } = partner

  return (
    <Box mt={4}>
      <PartnerArtistListFragmentContainer
        partnerSlug={slug}
        scrollTo={scrollIntoView}
        artists={artists}
      />
    </Box>
  )
}
