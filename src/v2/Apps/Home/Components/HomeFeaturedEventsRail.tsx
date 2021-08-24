import {
  Flex,
  Box,
  Image,
  Text,
  Spacer,
  GridColumns,
  Column,
} from "@artsy/palette"
// import { compact, take } from "lodash"
import React from "react"
// import { createFragmentContainer, graphql } from "react-relay"
import { RouterLink } from "v2/System/Router/RouterLink"
// import { HomeFeaturedEventsRail_orderedSet } from "v2/__generated__/HomeFeaturedEventsRail_orderedSet.graphql"

// interface HomeFeaturedEventsRailProps {
//   orderedSet: HomeFeaturedEventsRail_orderedSet
// }

// const HomeFeaturedEventsRail: React.FC<HomeFeaturedEventsRailProps> = ({
//   orderedSet,
// }) => {
//   const events = take(
//     compact(orderedSet.items).flatMap(item =>
//       item.__typename === "FeaturedLink" ? [item] : []
//     ),
//     4
//   )

//   if (events.length === 0) return null

//   console.log(events)
//   return (
//     <GridColumns>
//       {events.map((event, i) => {
//         const image = event.image?.cropped

//         return (
//           <Column key={event.internalID ?? i} span={3}>
//             <RouterLink
//               to={event.href ?? ""}
//               style={{ display: "block", textDecoration: "none" }}
//             >
//               <Flex alignItems="center">
//                 <Box flexShrink={0}>
//                   {image ? (
//                     <Image
//                       src={image.src}
//                       srcSet={image.srcSet}
//                       width={95}
//                       height={63}
//                       alt=""
//                       lazyLoad
//                     />
//                   ) : (
//                     <Box bg="black10" width={95} height={63} />
//                   )}
//                 </Box>

//                 <Spacer ml={2} />

//                 <Flex flexDirection="column" justifyContent="center">
//                   <Text variant="xs" color="black60">
//                     {event.title}
//                   </Text>

//                   <Text variant="md">{event.subtitle}</Text>
//                 </Flex>
//               </Flex>
//             </RouterLink>
//           </Column>
//         )
//       })}
//     </GridColumns>
//   )
// }

// export const HomeFeaturedEventsRailFragmentContainer = createFragmentContainer(
//   HomeFeaturedEventsRail,
//   {
//     orderedSet: graphql`
//       fragment HomeFeaturedEventsRail_orderedSet on OrderedSet {
//         items {
//           __typename
//           ... on FeaturedLink {
//             internalID
//             title
//             subtitle
//             href
//             image {
//               # 3:2
//               cropped(width: 95, height: 63) {
//                 src
//                 srcSet
//               }
//             }
//           }
//         }
//       }
//     `,
//   }
// )

const constFeaturedEvents = [
  {
    __typename: "FeaturedLink",
    internalID: "event1",
    title: "Featured Fair",
    subtitle: "ART BUSAN",
    href: "/",
    image: {
      cropped: {
        src: "https://aws.cooknpaste.com/volume/images/home/fair/fair1.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/home/fair/fair1.png 1x",
      },
    },
  },
  {
    __typename: "FeaturedLink",
    internalID: "event2",
    title: "Featured Fair",
    subtitle: "ART BUSAN",
    href: "/",
    image: {
      cropped: {
        src: "https://aws.cooknpaste.com/volume/images/home/fair/fair1.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/home/fair/fair1.png 1x",
      },
    },
  },
  {
    __typename: "FeaturedLink",
    internalID: "event3",
    title: "Featured Fair",
    subtitle: "ART BUSAN",
    href: "/",
    image: {
      cropped: {
        src: "https://aws.cooknpaste.com/volume/images/home/fair/fair1.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/home/fair/fair1.png 1x",
      },
    },
  },
  // {
  //     "__typename": "FeaturedLink",
  //     "internalID": "intersect-aspen-2021",
  //     "title": "Featured Fair",
  //     "subtitle": "Intersect Aspen",
  //     "href": "/fair/intersect-aspen-2021",
  //     "image": {
  //         "cropped": {
  //             "src": "https://d196wkiy8qx2u5.cloudfront.net?resize_to=fill&width=95&height=63&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FZVgvu6LfOOthudhKmxb3xg%2Fwide.jpg",
  //             "srcSet": "https://d196wkiy8qx2u5.cloudfront.net?resize_to=fill&width=95&height=63&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FZVgvu6LfOOthudhKmxb3xg%2Fwide.jpg 1x, https://d196wkiy8qx2u5.cloudfront.net?resize_to=fill&width=190&height=126&quality=50&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FZVgvu6LfOOthudhKmxb3xg%2Fwide.jpg 2x"
  //         }
  //     }
  // },
  // {
  //     "__typename": "FeaturedLink",
  //     "internalID": "la-art-show-2021",
  //     "title": "Featured Fair",
  //     "subtitle": "LA Art Show",
  //     "href": "/fair/la-art-show-2021",
  //     "image": {
  //         "cropped": {
  //             "src": "https://d196wkiy8qx2u5.cloudfront.net?resize_to=fill&width=95&height=63&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FG3URABsTl_va0_tGYDyTKg%2Fmedium_rectangle.jpg",
  //             "srcSet": "https://d196wkiy8qx2u5.cloudfront.net?resize_to=fill&width=95&height=63&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FG3URABsTl_va0_tGYDyTKg%2Fmedium_rectangle.jpg 1x, https://d196wkiy8qx2u5.cloudfront.net?resize_to=fill&width=190&height=126&quality=50&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FG3URABsTl_va0_tGYDyTKg%2Fmedium_rectangle.jpg 2x"
  //         }
  //     }
  // }
]

interface HomeFeaturedEventsRailProps {}

const HomeFeaturedEventsRail: React.FC<HomeFeaturedEventsRailProps> = ({}) => {
  const events = constFeaturedEvents

  if (events.length === 0) return null

  return (
    <GridColumns>
      {events.map((event, i) => {
        const image = event.image?.cropped

        return (
          <Column key={event.internalID ?? i} span={3}>
            <RouterLink
              to={event.href ?? ""}
              style={{ display: "block", textDecoration: "none" }}
              onClick={e => {
                e.preventDefault()
              }}
            >
              <Flex alignItems="center">
                <Box flexShrink={0}>
                  {image ? (
                    <Image
                      src={image.src}
                      srcSet={image.srcSet}
                      width={95}
                      height={63}
                      alt=""
                      lazyLoad
                    />
                  ) : (
                    <Box bg="black10" width={95} height={63} />
                  )}
                </Box>

                <Spacer ml={2} />

                <Flex flexDirection="column" justifyContent="center">
                  <Text variant="xs" color="black60">
                    {event.title}
                  </Text>

                  <Text variant="md">{event.subtitle}</Text>
                </Flex>
              </Flex>
            </RouterLink>
          </Column>
        )
      })}
    </GridColumns>
  )
}

export const HomeFeaturedEventsRailFragmentContainer = ({ orderedSet }) => {
  return <HomeFeaturedEventsRail />
}
