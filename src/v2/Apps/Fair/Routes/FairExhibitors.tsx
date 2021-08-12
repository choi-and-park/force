import React from "react"
import { Box, Text } from "@artsy/palette"
import { graphql, createFragmentContainer } from "react-relay"
import { FairExhibitors_fair } from "v2/__generated__/FairExhibitors_fair.graphql"
import { FairExhibitorsGroupQueryRenderer as FairExhibitorsGroup } from "../Components/FairExhibitors"

interface FairExhibitorsProps {
  fair: FairExhibitors_fair
}

const FairExhibitors: React.FC<FairExhibitorsProps> = ({ fair }) => {
  return (
    <>
      {fair.exhibitorsGroupedByName?.map(exhibitorsGroup => {
        if (!exhibitorsGroup?.exhibitors) {
          return null
        }

        const partnerIds = exhibitorsGroup.exhibitors.map(
          exhibitor => exhibitor?.partnerID || ""
        )

        return (
          <Box>
            <Text variant="lg" my={4}>
              {exhibitorsGroup.letter}
            </Text>
            <FairExhibitorsGroup ids={partnerIds} />
          </Box>
        )
      })}
    </>
  )
}

export const FairExhibitorsFragmentContainer = createFragmentContainer(
  FairExhibitors,
  {
    fair: graphql`
      fragment FairExhibitors_fair on Fair {
        exhibitorsGroupedByName {
          letter
          exhibitors {
            partnerID
          }
        }
      }
    `,
  }
)
