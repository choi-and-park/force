import React from "react"
import { Column, GridColumns, Text } from "@artsy/palette"
import { Media } from "v2/Utils/Responsive"
import { createFragmentContainer, graphql } from "react-relay"
import { AboutPartner_partner } from "v2/__generated__/AboutPartner_partner.graphql"
import { RouterLink } from "v2/System/Router/RouterLink"

export const AboutPartnerFragmentContainer = ({
  partner: { fullBio, website },
}) => {
  return (
    <GridColumns mb={12} gridRowGap={2}>
      <Column span={6}>
        <Text variant="title">About</Text>
      </Column>

      <Column span={6}>
        <Media at="xs">
          <Text mb={2} variant="text">
            {fullBio}
          </Text>
        </Media>
        <Media greaterThan="xs">
          <Text mb={2} variant="text">
            {fullBio}
          </Text>
        </Media>

        <RouterLink to={website!} target="_blank">
          <Text mb={2} variant="text">
            {website}
          </Text>
        </RouterLink>
      </Column>
    </GridColumns>
  )
}

// export const AboutPartnerFragmentContainer = createFragmentContainer(
//   AboutPartner,
//   {
//     partner: graphql`
//       fragment AboutPartner_partner on Partner {
//         profile {
//           fullBio
//           bio
//         }
//         website
//         vatNumber
//         displayFullPartnerPage
//       }
//     `,
//   }
// )
