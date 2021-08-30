import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ArticlesRailFragmentContainer } from "../../Components/Overview/ArticlesRail"
import { Overview_partner } from "v2/__generated__/Overview_partner.graphql"
import { ArtistsRailFragmentContainer } from "../../Components/Overview/ArtistsRail"
import { ShowsRailFragmentContainer } from "../../Components/Overview/ShowsRail"
import { AboutPartnerFragmentContainer } from "../../Components/Overview/AboutPartner"
import { SubscriberBannerFragmentContainer } from "../../Components/Overview/SubscriberBanner"
import { ArtworksRailRenderer } from "../../Components/Overview/ArtworksRail"
import { ShowBannersRailRenderer } from "../../Components/Overview/ShowBannersRail"
import { NearbyGalleriesRailRenderer } from "../../Components/Overview/NearbyGalleriesRail"

import { gallery_arario } from "nuart/GalleryContents"

interface OverviewProps {
  partner: Overview_partner
}

export const OverviewFragmentContainer = () => {
  const gallery = gallery_arario

  return (
    <>
      <ShowBannersRailRenderer mt={4} mb={[4, 80]} partner={gallery} />

      <AboutPartnerFragmentContainer partner={gallery} />

      <ShowsRailFragmentContainer mt={4} mb={[4, 80]} partner={gallery} />

      <ArtistsRailFragmentContainer mt={4} mb={[4, 80]} partner={gallery} />
    </>
  )
}

// export const OverviewFragmentContainer = createFragmentContainer(Overview, {
//   partner: graphql`
//     fragment Overview_partner on Partner {
//       slug
//       partnerType
//       displayFullPartnerPage
//       profileBannerDisplay
//       displayArtistsSection
//       ...AboutPartner_partner
//       ...ShowsRail_partner
//       ...ArtistsRail_partner
//       ...SubscriberBanner_partner
//       locationsConnection(first: 1) {
//         edges {
//           node {
//             city
//             coordinates {
//               lat
//               lng
//             }
//           }
//         }
//       }
//       articlesConnection(first: 8)
//         @connection(key: "ArticlesQuery_articlesConnection") {
//         totalCount
//         edges {
//           ...ArticlesRail_articles
//         }
//       }
//     }
//   `,
// })
