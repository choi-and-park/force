import { AuthContextModule, ContextModule } from "@artsy/cohesion"
import {
  Shelf,
  Text,
  Spacer,
  Skeleton,
  SkeletonBox,
  SkeletonText,
} from "@artsy/palette"
// import { compact } from "lodash"
import React from "react"
// import { createFragmentContainer, graphql } from "react-relay"
import { ShelfArtworkFragmentContainerTemp } from "v2/Components/Artwork/ShelfArtwork"
// import { SystemQueryRenderer } from "v2/System/Relay/SystemQueryRenderer"
// import { HomeArtworkModuleRail_artworkModule } from "v2/__generated__/HomeArtworkModuleRail_artworkModule.graphql"
// import { HomeArtworkModuleRailQuery } from "v2/__generated__/HomeArtworkModuleRailQuery.graphql"
// import { useSystemContext } from "v2/System"
import { HomeArtworkModuleContextFragmentContainer } from "./HomeArtworkModuleContext"
import { useLazyLoadComponent } from "v2/Utils/Hooks/useLazyLoadComponent"

const HOME_ARTWORK_MODULES = [
  "active_bids",
  "current_fairs",
  "followed_artist",
  "followed_artists",
  "followed_galleries",
  "generic_gene", // GENERIC_GENES
  "genes", // FOLLOWED_GENES
  "live_auctions",
  "popular_artists",
  "recently_viewed_works",
  "recommended_works",
  "related_artists",
  "saved_works",
  "similar_to_recently_viewed",
  "similar_to_saved_works",
] as const

export type HomeArtworkModuleKey = typeof HOME_ARTWORK_MODULES[number]

const CONTEXT_MODULES: Record<HomeArtworkModuleKey, AuthContextModule> = {
  // @ts-ignore TODO: Add to AuthContextModule union
  active_bids: ContextModule.yourActiveBids,
  current_fairs: ContextModule.fairRail,
  followed_artist: ContextModule.otherWorksByArtistRail,
  // @ts-ignore TODO: Add to AuthContextModule union
  followed_artists: ContextModule.newWorksByArtistsYouFollowRail,
  // @ts-ignore TODO: Add to AuthContextModule union
  followed_galleries: ContextModule.newWorksByGalleriesYouFollowRail,
  generic_gene: ContextModule.categoryRail,
  genes: ContextModule.categoryRail,
  live_auctions: ContextModule.liveAuctionsRail,
  popular_artists: ContextModule.popularArtistsRail,
  recently_viewed_works: ContextModule.recentlyViewedRail,
  related_artists: ContextModule.relatedArtistsRail,
  // @ts-ignore TODO: Add to AuthContextModule union
  recommended_works: ContextModule.recommendedWorksForYouRail,
  // @ts-ignore TODO: Add to AuthContextModule union
  saved_works: ContextModule.recentlySavedRail,
  // @ts-ignore TODO: Add to AuthContextModule union
  similar_to_recently_viewed: ContextModule.similarToWorksYouViewedRail,
  // @ts-ignore TODO: Add to AuthContextModule union
  similar_to_saved_works: ContextModule.similarToWorksYouSavedRail,
}

const constArtworkModule = {
  title: "Popular Artists",
  id: "id_artworkmodule",
  key: "popular_artists",
  context: {
    __typename: "TrendingArtists",
    artists: [
      {
        name: "김창열",
        href: "/",
      },
      {
        name: "이우환",
        href: "/",
      },
      {
        name: "장 미셸 바스키아",
        href: "/",
      },
      {
        name: "서도호",
        href: "/",
      },
      {
        name: "야요이 쿠사마",
        href: "/",
      },
      {
        name: "데미안 허스트",
        href: "/",
      },
      {
        name: "줄리안 오피",
        href: "/",
      },
      {
        name: "마크 로스코",
        href: "/",
      },
      {
        name: "알렉스 카츠",
        href: "/",
      },
      {
        name: "아야코 록카쿠",
        href: "/",
      },
    ],
  },
  results: [
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "김창열",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular1.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular1.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular1",
      internalID: "InternalID",
      sale_message: "35,000,000,000원",
      slug: "",
      title: "회귀 SH04033, 2003\n53x72.7cm\n갤러리현대",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "줄리안 오피",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular2.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular2.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular2",
      internalID: "InternalID",
      sale_message: "39,000,000,000원",
      slug: "",
      title: "Running Women, 2016\n152.4x154.9x7.6cm\n아테레고 갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "이우환",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular3.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular3.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular3",
      internalID: "InternalID",
      sale_message: "2,370,000,000원",
      slug: "",
      title: "선으로부터 no.780123, 1978\n130x163cm\n서울갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "서도호",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular4.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular4.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular4",
      internalID: "InternalID",
      sale_message: "Contact for Price",
      slug: "",
      title: "Undressing, 2019\n10x15cm\n리만머핀 갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "야요이 쿠사마",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular5.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular5.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular5",
      internalID: "InternalID",
      sale_message: "33,852,840원",
      slug: "",
      title: "Ashtray, 1990\n54x63cm\n행업 갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "아야코 록카쿠",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular6.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular6.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular6",
      internalID: "InternalID",
      sale_message: "Contact for Price",
      slug: "",
      title: "Untitled, 2011\n300x450cm\n델레이브 갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "장 미셸 바스키아",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular7.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular7.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular7",
      internalID: "InternalID",
      sale_message: "1,569,300원",
      slug: "",
      title: "Beat Bop, 2001\n30.5x30.5cm\nEHC파인아트",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "데미안 허스트",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular8.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular8.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular8",
      internalID: "InternalID",
      sale_message: "22,080,000원",
      slug: "",
      title: "H5-6 Plaza, 2018\n90x90cm\n자이트컨템포러리아트",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "김창열",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular1.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular1.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular1",
      internalID: "InternalID",
      sale_message: "35,000,000,000원",
      slug: "",
      title: "회귀 SH04033, 2003\n53x72.7cm\n갤러리현대",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "줄리안 오피",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular2.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular2.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular2",
      internalID: "InternalID",
      sale_message: "39,000,000,000원",
      slug: "",
      title: "Running Women, 2016\n152.4x154.9x7.6cm\n아테레고 갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "이우환",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular3.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular3.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular3",
      internalID: "InternalID",
      sale_message: "2,370,000,000원",
      slug: "",
      title: "선으로부터 no.780123, 1978\n130x163cm\n서울갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "서도호",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular4.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular4.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular4",
      internalID: "InternalID",
      sale_message: "Contact for Price",
      slug: "",
      title: "Undressing, 2019\n10x15cm\n리만머핀 갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "야요이 쿠사마",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular5.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular5.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular5",
      internalID: "InternalID",
      sale_message: "33,852,840원",
      slug: "",
      title: "Ashtray, 1990\n54x63cm\n행업 갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "아야코 록카쿠",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular6.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular6.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular6",
      internalID: "InternalID",
      sale_message: "Contact for Price",
      slug: "",
      title: "Untitled, 2011\n300x450cm\n델레이브 갤러리",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "장 미셸 바스키아",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular7.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular7.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular7",
      internalID: "InternalID",
      sale_message: "1,569,300원",
      slug: "",
      title: "Beat Bop, 2001\n30.5x30.5cm\nEHC파인아트",
    },
    {
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "데미안 허스트",
        },
      ],
      href: "/",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular8.png",
          srcSet:
            "https://aws.cooknpaste.com/volume/images/home/popular_artists/popular8.png x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular8",
      internalID: "InternalID",
      sale_message: "22,080,000원",
      slug: "",
      title: "H5-6 Plaza, 2018\n90x90cm\n자이트컨템포러리아트",
    },
  ],
}

// interface HomeArtworkModuleRailProps {
//   artworkModule: HomeArtworkModuleRail_artworkModule
// }

// const HomeArtworkModuleRail: React.FC<HomeArtworkModuleRailProps> = ({
//   artworkModule,
// }) => {
//   const artworks = compact(artworkModule.results)

//   if (artworks.length === 0) {
//     return null
//   }

//   return (
//     <HomeArtworkModule
//       context={
//         <HomeArtworkModuleContextFragmentContainer
//           title={artworkModule.title}
//           context={artworkModule.context}
//         />
//       }
//     >
//       <Shelf>
//         {artworks.map(artwork => {
//           return (
//             <ShelfArtworkFragmentContainer
//               key={artwork.internalID}
//               contextModule={CONTEXT_MODULES[artworkModule.key!]}
//               artwork={artwork}
//               lazyLoad
//             />
//           )
//         })}
//       </Shelf>
//     </HomeArtworkModule>
//   )
// }

interface HomeArtworkModuleRailProps {
  // artworkModule: HomeArtworkModuleRail_artworkModule
}

const HomeArtworkModuleRail: React.FC<HomeArtworkModuleRailProps> = (
  {
    // artworkModule,
  }
) => {
  // const artworks = compact(artworkModule.results)
  const artworkModule = constArtworkModule
  const artworks = constArtworkModule.results

  if (artworks.length === 0) {
    return null
  }
  // console.log("artworks", artworks)
  return (
    <HomeArtworkModule
      context={
        <HomeArtworkModuleContextFragmentContainer
          title={artworkModule.title}
          context={artworkModule.context}
        />
      }
    >
      <Shelf>
        {artworks.map(artwork => {
          return (
            <ShelfArtworkFragmentContainerTemp
              key={artwork.internalID}
              contextModule={CONTEXT_MODULES[artworkModule.key!]}
              artwork={artwork}
              lazyLoad
            />
          )
        })}
      </Shelf>
    </HomeArtworkModule>
  )
}

// const HomeArtworkModuleRailFragmentContainer = createFragmentContainer(
//   HomeArtworkModuleRail,
//   {
//     artworkModule: graphql`
//       fragment HomeArtworkModuleRail_artworkModule on HomePageArtworkModule {
//         title
//         key
//         results {
//           internalID
//           ...ShelfArtwork_artwork
//         }
//         context {
//           __typename
//           ...HomeArtworkModuleContext_context
//         }
//       }
//     `,
//   }
// )

const HomeArtworkModuleRailFragmentContainer = () => {
  return <HomeArtworkModuleRail />
}

const HomeArtworkModule: React.FC<{ context: string | JSX.Element }> = ({
  context,
  children,
}) => {
  return (
    <>
      {typeof context === "string" ? (
        <Text
          variant="lg"
          style={{
            fontFamily: "Noto Sans KR",
          }}
        >
          {context}
        </Text>
      ) : (
        context
      )}

      <Spacer mt={4} />

      {children}
    </>
  )
}

const HomeArtworkModuleRailPlaceholder: React.FC = () => {
  return (
    <Skeleton>
      <Shelf>
        {[...new Array(12)].map((_, i) => {
          return (
            <React.Fragment key={i}>
              <SkeletonBox width={200} height={[200, 300, 250, 275][i % 4]} />

              <Spacer mt={1} />

              <SkeletonText variant="md">Artist Name</SkeletonText>
              <SkeletonText variant="md">Artwork Title</SkeletonText>
              <SkeletonText variant="xs">Partner</SkeletonText>
              <SkeletonText variant="xs">Price</SkeletonText>
            </React.Fragment>
          )
        })}
      </Shelf>
    </Skeleton>
  )
}

const HomeArtworkModulePlaceholder: React.FC<{ title: string }> = ({
  title,
}) => (
  <HomeArtworkModule context={title}>
    <HomeArtworkModuleRailPlaceholder />
  </HomeArtworkModule>
)

interface HomeArtworkModuleRailQueryRendererProps {
  title: string
  params: {
    key: string
    id?: string | null
    relatedArtistID?: string | null
    followedArtistID?: string | null
  }
}

// export const HomeArtworkModuleRailQueryRenderer: React.FC<HomeArtworkModuleRailQueryRendererProps> = ({
//   title,
//   params: { key, id, relatedArtistID, followedArtistID },
// }) => {
//   const { relayEnvironment } = useSystemContext()

//   return (
//     <SystemQueryRenderer<HomeArtworkModuleRailQuery>
//       environment={relayEnvironment}
//       query={graphql`
//         query HomeArtworkModuleRailQuery(
//           $key: String
//           $id: String
//           $relatedArtistID: String
//           $followedArtistID: String
//         ) {
//           homePage {
//             artworkModule(
//               key: $key
//               id: $id
//               relatedArtistID: $relatedArtistID
//               followedArtistID: $followedArtistID
//             ) {
//               ...HomeArtworkModuleRail_artworkModule
//             }
//           }
//         }
//       `}
//       variables={{
//         key,
//         id,
//         relatedArtistID,
//         followedArtistID,
//       }}
//       placeholder={<HomeArtworkModulePlaceholder title={title} />}
//       render={({ error, props }) => {
//         if (error) {
//           console.error(error)
//           return null
//         }

//         if (!props) {
//           return <HomeArtworkModulePlaceholder title={title} />
//         }

//         if (props.homePage?.artworkModule) {
//           return (
//             <HomeArtworkModuleRailFragmentContainer
//               artworkModule={props.homePage.artworkModule}
//             />
//           )
//         }
//       }}
//     />
//   )
// }

export const HomeArtworkModuleRailQueryRenderer: React.FC<HomeArtworkModuleRailQueryRendererProps> = ({
  title,
  params: { key, id, relatedArtistID, followedArtistID },
}) => {
  // const { relayEnvironment } = useSystemContext()

  return (
    <HomeArtworkModuleRailFragmentContainer
    // artworkModule={props.homePage.artworkModule}
    />
  )
}

export const HomeArtworkModuleRailLazyQueryRenderer: React.FC<HomeArtworkModuleRailQueryRendererProps> = props => {
  const { Waypoint, isEnteredView } = useLazyLoadComponent()

  return (
    <>
      <Waypoint />

      {isEnteredView ? (
        <HomeArtworkModuleRailQueryRenderer {...props} />
      ) : (
        <HomeArtworkModulePlaceholder title={props.title} />
      )}
    </>
  )
}
