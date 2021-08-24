import React from "react"
import { Join, Separator, Spacer } from "@artsy/palette"
// import { createFragmentContainer, graphql } from "react-relay"
// import { HomeArtworkModules_homePage } from "v2/__generated__/HomeArtworkModules_homePage.graphql"
import {
  HomeArtworkModuleKey,
  HomeArtworkModuleRailLazyQueryRenderer,
} from "./HomeArtworkModuleRail"
import { MyBidsQueryRenderer } from "v2/Apps/Auctions/Components/MyBids/MyBids"
import { HomeFeaturedShowsLazyQueryRenderer } from "./HomeFeaturedShows"
// import { compact } from "lodash"

// interface HomeArtworkModulesProps {
//   homePage: HomeArtworkModules_homePage
// }

// const HomeArtworkModules: React.FC<HomeArtworkModulesProps> = ({
//   homePage,
// }) => {
//   if (!homePage.artworkModules || homePage.artworkModules.length === 0) {
//     // HACK: Return featured shows if there are no artwork modules
//     return <HomeFeaturedShowsLazyQueryRenderer />
//   }

//   // HACK: Insert featured shows before any of the gene modules (it is not an artwork module)
//   let isShowsInserted = false
//   const artworkModules = compact(
//     homePage.artworkModules.flatMap(artworkModule => {
//       if (artworkModule?.key?.includes("gene") && !isShowsInserted) {
//         isShowsInserted = true
//         return [
//           {
//             key: "featured_shows",
//             // HACK: To keep this simple just some garbage data to satisfy the types
//             title: "IGNORE",
//             params: {
//               internalID: "IGNORE",
//               relatedArtistID: "IGNORE",
//               followedArtistID: "IGNORE",
//             },
//           },
//           artworkModule,
//         ]
//       }

//       return artworkModule
//     })
//   )

//   console.log(artworkModules)
//   return (
//     <Join separator={<Spacer mt={6} />}>
//       {artworkModules.map((artworkModule, i) => {
//         // HACK: Insert featured shows
//         if (artworkModule.key === "featured_shows") {
//           return (
//             <React.Fragment key={artworkModule.key}>
//               <HomeFeaturedShowsLazyQueryRenderer />

//               <Separator />
//             </React.Fragment>
//           )
//         }

//         if (!artworkModule.title || !artworkModule.key) {
//           return null
//         }

//         return (
//           <React.Fragment key={artworkModule.title ?? i}>
//             {(artworkModule.key as HomeArtworkModuleKey) === "active_bids" ? (
//               <MyBidsQueryRenderer />
//             ) : (
//               <HomeArtworkModuleRailLazyQueryRenderer
//                 title={artworkModule.title}
//                 params={{
//                   key: artworkModule.key,
//                   id: artworkModule.params?.internalID,
//                   relatedArtistID: artworkModule.params?.relatedArtistID,
//                   followedArtistID: artworkModule.params?.followedArtistID,
//                 }}
//               />
//             )}
//           </React.Fragment>
//         )
//       })}
//     </Join>
//   )
// }

// export const HomeArtworkModulesFragmentContainer = createFragmentContainer(
//   HomeArtworkModules,
//   {
//     homePage: graphql`
//       fragment HomeArtworkModules_homePage on HomePage {
//         artworkModules(
//           maxRails: -1
//           maxFollowedGeneRails: -1
//           order: [
//             ACTIVE_BIDS
//             RECENTLY_VIEWED_WORKS
//             SIMILAR_TO_RECENTLY_VIEWED
//             SAVED_WORKS
//             SIMILAR_TO_SAVED_WORKS
//             FOLLOWED_ARTISTS
//             FOLLOWED_GALLERIES
//             RECOMMENDED_WORKS
//             RELATED_ARTISTS
//             LIVE_AUCTIONS
//             CURRENT_FAIRS
//             FOLLOWED_GENES
//             GENERIC_GENES
//           ]
//         ) {
//           title
//           key
//           params {
//             internalID
//             relatedArtistID
//             followedArtistID
//           }
//         }
//       }
//     `,
//   }
// )

const constArtworkModules = [
  {
    title: "Works by Popular Artists",
    key: "popular_artists",
    params: null,
  },
  // { title: 'Spring1883 2021', key: 'current_fairs', params: null },
  // {
  //   title: 'Heritage: In Focus: OBEY',
  //   key: 'live_auctions',
  //   params: null
  // },
  {
    key: "featured_shows",
    title: "IGNORE",
    params: {
      internalID: "IGNORE",
      relatedArtistID: "IGNORE",
      followedArtistID: "IGNORE",
    },
  },
  // {
  //   title: 'Black & White Photography',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'black-and-white',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Figurative Painting',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'figurative-painting',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Collage / Works on Paper',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'collage',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Abstract Painting',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'abstract-art',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Emerging Photography',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'emerging-art-photography',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Landscape',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'landscape',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Emerging Painting',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'emerging-art-painting',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Geometric',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'geometric',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Street Art',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'graffiti-slash-street-art',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // },
  // {
  //   title: 'Pop Prints & Multiples',
  //   key: 'generic_gene',
  //   params: {
  //     internalID: 'contemporary-pop',
  //     relatedArtistID: null,
  //     followedArtistID: null
  //   }
  // }
]

interface HomeArtworkModulesProps {}

const HomeArtworkModules: React.FC<HomeArtworkModulesProps> = () => {
  const artworkModules = constArtworkModules
  return (
    <Join separator={<Spacer mt={6} />}>
      {artworkModules.map((artworkModule, i) => {
        // HACK: Insert featured shows
        if (artworkModule.key === "featured_shows") {
          return (
            <React.Fragment key={artworkModule.key}>
              <HomeFeaturedShowsLazyQueryRenderer />

              <Separator />
            </React.Fragment>
          )
        }

        if (!artworkModule.title || !artworkModule.key) {
          return null
        }

        return (
          <React.Fragment key={artworkModule.title ?? i}>
            {(artworkModule.key as HomeArtworkModuleKey) === "active_bids" ? (
              <MyBidsQueryRenderer />
            ) : (
              <HomeArtworkModuleRailLazyQueryRenderer
                title={artworkModule.title}
                params={{
                  key: artworkModule.key,
                  id: artworkModule.params?.internalID,
                  relatedArtistID: artworkModule.params?.relatedArtistID,
                  followedArtistID: artworkModule.params?.followedArtistID,
                }}
              />
            )}
          </React.Fragment>
        )
      })}
    </Join>
  )
}

export const HomeArtworkModulesFragmentContainer = ({ homePage }) => {
  return <HomeArtworkModules />
}
