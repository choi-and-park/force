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
// import { compact, take } from "lodash"
import React from "react"
// import { createFragmentContainer, graphql } from "react-relay"
// import { system } from "styled-system"
// import { useSystemContext } from "v2/System"
// import { SystemQueryRenderer } from "v2/System/Relay/SystemQueryRenderer"
import { RouterLink } from "v2/System/Router/RouterLink"
import { useLazyLoadComponent } from "v2/Utils/Hooks/useLazyLoadComponent"
// import { HomeFeaturedShowsQuery } from "v2/__generated__/HomeFeaturedShowsQuery.graphql"
// import { HomeFeaturedShows_orderedSet } from "v2/__generated__/HomeFeaturedShows_orderedSet.graphql"
import { HomeFeaturedShowFragmentContainer } from "./HomeFeaturedShow"

// const SHOWS_LIMIT = 6

// interface HomeFeaturedShowsProps {
//   orderedSet: HomeFeaturedShows_orderedSet
// }

// const HomeFeaturedShows: React.FC<HomeFeaturedShowsProps> = ({
//   orderedSet,
// }) => {
//   const shows = take(
//     compact(orderedSet.items).flatMap(item =>
//       item.__typename === "Show" ? [item] : []
//     ),
//     SHOWS_LIMIT
//   )

//   if (shows.length === 0) return null

//   console.log(orderedSet.items)
//   return (
//     <HomeFeaturedShowsContainer>
//       <GridColumns gridRowGap={6}>
//         {shows.map(show => {
//           return (
//             <Column key={show.internalID} span={4}>
//               <HomeFeaturedShowFragmentContainer show={show} />
//             </Column>
//           )
//         })}
//       </GridColumns>
//     </HomeFeaturedShowsContainer>
//   )
// }

// const HomeFeaturedShowsContainer: React.FC = ({ children }) => {
//   return (
//     <>
//       <Flex justifyContent="space-between">
//         <Text variant="xl">Featured shows</Text>

//         <Text
//           variant="sm"
//           as={RouterLink}
//           // @ts-ignore
//           to="/shows"
//         >
//           Explore All Shows
//         </Text>
//       </Flex>

//       <Spacer mt={4} />

//       {children}
//     </>
//   )
// }

// export const HomeFeaturedShowsFragmentContainer = createFragmentContainer(
//   HomeFeaturedShows,
//   {
//     orderedSet: graphql`
//       fragment HomeFeaturedShows_orderedSet on OrderedSet {
//         items {
//           __typename
//           ... on Show {
//             internalID
//             ...HomeFeaturedShow_show
//           }
//         }
//       }
//     `,
//   }
// )

// const PLACEHOLDER = (
//   <HomeFeaturedShowsContainer>
//     <Skeleton>
//       <GridColumns gridRowGap={6}>
//         {[...new Array(6)].map((_, i) => {
//           return (
//             <Column key={i} span={4}>
//               <ResponsiveBox aspectWidth={4} aspectHeight={3} maxWidth="100%">
//                 <SkeletonBox width="100%" height="100%" />
//               </ResponsiveBox>

//               <Spacer mt={2} />

//               <SkeletonText variant="xl" mr={1}>
//                 Show Title Typically Two Lines
//               </SkeletonText>

//               <SkeletonText variant="xl">Partner name</SkeletonText>

//               <Spacer mt={1} />

//               <SkeletonText variant="sm">Jan 1–31</SkeletonText>
//             </Column>
//           )
//         })}
//       </GridColumns>
//     </Skeleton>
//   </HomeFeaturedShowsContainer>
// )

// export const HomeFeaturedShowsQueryRenderer: React.FC = () => {
//   const { relayEnvironment } = useSystemContext()

//   return (
//     <SystemQueryRenderer<HomeFeaturedShowsQuery>
//       environment={relayEnvironment}
//       query={graphql`
//         query HomeFeaturedShowsQuery {
//           orderedSet(id: "530ebe92139b21efd6000071") {
//             ...HomeFeaturedShows_orderedSet
//           }
//         }
//       `}
//       placeholder={PLACEHOLDER}
//       render={({ error, props }) => {
//         if (error) {
//           console.error(error)
//           return null
//         }

//         if (!props) {
//           return PLACEHOLDER
//         }

//         if (props.orderedSet) {
//           return (
//             <HomeFeaturedShowsFragmentContainer orderedSet={props.orderedSet} />
//           )
//         }

//         return null
//       }}
//     />
//   )
// }

// export const HomeFeaturedShowsLazyQueryRenderer: React.FC = () => {
//   const { Waypoint, isEnteredView } = useLazyLoadComponent()

//   return (
//     <>
//       <Waypoint />

//       {isEnteredView ? <HomeFeaturedShowsQueryRenderer /> : PLACEHOLDER}
//     </>
//   )
// }

const constShows = [
  {
    __typename: "Show",
    internalID: "internaID1",
    name: "JAN-OLE SCHIEMANN: 'SYNTHETIC HORIZONS'",
    href: "/",
    startAt: "2021-08-14T21:00:00+09:00",
    endAt: "2021-09-04T21:00:00+09:00",
    formattedStartAt: "2018. 7. 18.",
    formattedEndAt: "2018. 8. 26.",
    partner: {
      name: "초이앤라거 서울",
    },
    coverImage: {
      cropped: {
        src:
          "https://aws.cooknpaste.com/volume/images/home/featured_shows/show1.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/home/featured_shows/show1.png 1x",
      },
    },
  },
  {
    __typename: "Show",
    internalID: "internaID2",
    name: "ANDREAS BLANK & HELENA PARADA KIM",
    href: "/",
    startAt: "2021-08-14T21:00:00+09:00",
    endAt: "2021-09-04T21:00:00+09:00",
    formattedStartAt: "2018. 2. 28.",
    formattedEndAt: "2018. 3. 28.",
    partner: {
      name: "초이앤라거 서울",
    },
    coverImage: {
      cropped: {
        src:
          "https://aws.cooknpaste.com/volume/images/home/featured_shows/show2.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/home/featured_shows/show2.png 1x",
      },
    },
  },
  {
    __typename: "Show",
    internalID: "internaID3",
    name: "Anthony James: Transcendence",
    href: "/",
    startAt: "2021-08-14T21:00:00+09:00",
    endAt: "2021-09-04T21:00:00+09:00",
    formattedStartAt: "2016. 8. 6.",
    formattedEndAt: "2021. 8. 26.",
    partner: {
      name: "오페라 갤러리",
    },
    coverImage: {
      cropped: {
        src:
          "https://aws.cooknpaste.com/volume/images/home/featured_shows/show3.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/home/featured_shows/show3.png 1x",
      },
    },
  },
  {
    __typename: "Show",
    internalID: "internaID4",
    name: "구지윤: Tongue & Nail",
    href: "/",
    startAt: "2021-08-14T21:00:00+09:00",
    endAt: "2021-09-04T21:00:00+09:00",
    formattedStartAt: "2021. 8. 3.",
    formattedEndAt: "2021. 9. 25.",
    partner: {
      name: "아라리오 갤러리",
    },
    coverImage: {
      cropped: {
        src:
          "https://aws.cooknpaste.com/volume/images/home/featured_shows/show4.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/home/featured_shows/show4.png 1x",
      },
    },
  },
  {
    __typename: "Show",
    internalID: "internaID5",
    name: "ANDREAS BLANK & HELENA PARADA KIM",
    href: "/",
    startAt: "2021-08-14T21:00:00+09:00",
    endAt: "2021-09-04T21:00:00+09:00",
    formattedStartAt: "2018. 2. 28.",
    formattedEndAt: "2018. 3. 28.",
    partner: {
      name: "초이앤라거 서울",
    },
    coverImage: {
      cropped: {
        src: "https://aws.cooknpaste.com/volume/images/artists/painting3.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/artists/painting3.png 1x",
      },
    },
  },
  {
    __typename: "Show",
    internalID: "internaID6",
    name: "Anthony James: Transcendence",
    href: "/",
    startAt: "2021-08-14T21:00:00+09:00",
    endAt: "2021-09-04T21:00:00+09:00",
    formattedStartAt: "2016. 8. 6.",
    formattedEndAt: "2021. 8. 26.",
    partner: {
      name: "오페라 갤러리",
    },
    coverImage: {
      cropped: {
        src: "https://aws.cooknpaste.com/volume/images/artists/painting4.png",
        srcSet:
          "https://aws.cooknpaste.com/volume/images/artists/painting4.png 1x",
      },
    },
  },
]

interface HomeFeaturedShowsProps {}

const HomeFeaturedShows: React.FC<HomeFeaturedShowsProps> = ({}) => {
  const shows = constShows

  return (
    <HomeFeaturedShowsContainer>
      <GridColumns gridRowGap={6}>
        {shows.map(show => {
          return (
            <Column key={show.internalID} span={4}>
              <HomeFeaturedShowFragmentContainer show={show} />
            </Column>
          )
        })}
      </GridColumns>
    </HomeFeaturedShowsContainer>
  )
}

const HomeFeaturedShowsContainer: React.FC = ({ children }) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Text
          variant="xl"
          style={{
            fontFamily: "Gowun Batang",
            fontWeight: 700,
          }}
        >
          Featured shows
        </Text>

        <Text
          variant="sm"
          as={RouterLink}
          // @ts-ignore
          to="/shows"
          onClick={e => {
            e.preventDefault()
          }}
          style={{
            fontFamily: "Gowun Batang",
            fontWeight: 700,
          }}
        >
          Explore All Shows
        </Text>
      </Flex>

      <Spacer mt={4} />

      {children}
    </>
  )
}

export const HomeFeaturedShowsFragmentContainer = () => {
  return <HomeFeaturedShows />
}

const PLACEHOLDER = (
  <HomeFeaturedShowsContainer>
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

              <SkeletonText variant="xl">Partner name</SkeletonText>

              <Spacer mt={1} />

              <SkeletonText variant="sm">Jan 1–31</SkeletonText>
            </Column>
          )
        })}
      </GridColumns>
    </Skeleton>
  </HomeFeaturedShowsContainer>
)

export const HomeFeaturedShowsQueryRenderer: React.FC = () => {
  return <HomeFeaturedShowsFragmentContainer />
}

export const HomeFeaturedShowsLazyQueryRenderer: React.FC = () => {
  const { Waypoint, isEnteredView } = useLazyLoadComponent()

  return (
    <>
      <Waypoint />

      {isEnteredView ? <HomeFeaturedShowsQueryRenderer /> : PLACEHOLDER}
    </>
  )
}
