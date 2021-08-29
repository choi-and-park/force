import loadable from "@loadable/component"
// import { graphql } from "react-relay"
import { AppRouteConfig } from "v2/System/Router/Route"

const GalleryApp = loadable(
  () => import(/* webpackChunkName: "galleryBundle" */ "./GalleryApp"),
  {
    resolveComponent: component => component.GalleryAppFragmentContainer,
  }
)
const GalleriesApp = loadable(
  () => import(/* webpackChunkName: "galleriesBundle" */ "./GalleriesApp"),
  {
    resolveComponent: component => component.GalleriesAppFragmentContainer,
  }
)

export const NuartGalleryRoutes: AppRouteConfig[] = [
  {
    theme: "v3",
    path: "/galleries",
    getComponent: () => GalleriesApp,
    prepare: () => {
      GalleriesApp.preload()
    },
    // prepareVariables: () => {
    //   // Accomodates the grid of 3x items and 2x items well.
    //   return { count: 12 }
    // },
    // query: graphql`
    //   query viewingRoomRoutes_ViewingRoomsAppQuery(
    //     $count: Int!
    //     $after: String
    //   ) {
    //     allViewingRooms: viewer {
    //       ...ViewingRoomsApp_allViewingRooms
    //         @arguments(count: $count, after: $after)
    //     }

    //     featuredViewingRooms: viewingRooms(featured: true) {
    //       ...ViewingRoomsApp_featuredViewingRooms
    //     }
    //   }
    // `,
    // cacheConfig: {
    //   force: true,
    // },
  },
  {
    theme: "v3",
    path: "/gallery/:slug",
    getComponent: () => GalleryApp,
    prepare: () => {
      GalleryApp.preload()
    },
    // query: graphql`
    //   query viewingRoomRoutes_ViewingRoomQuery($slug: ID!) {
    //     viewingRoom(id: $slug) {
    //       ...ViewingRoomApp_viewingRoom
    //     }
    //   }
    // `,
    // children: [
    //   {
    //     path: "/",
    //     Component: StatementRoute,
    //     query: graphql`
    //       query viewingRoomRoutes_ViewingRoomStatementRouteQuery($slug: ID!) {
    //         viewingRoom(id: $slug) {
    //           ...ViewingRoomStatementRoute_viewingRoom
    //         }
    //       }
    //     `,
    //   },
    //   {
    //     path: "works",
    //     Component: WorksRoute,
    //     ignoreScrollBehavior: true,
    //     query: graphql`
    //       query viewingRoomRoutes_ViewingRoomWorksRouteQuery($slug: ID!) {
    //         viewingRoom(id: $slug) {
    //           ...ViewingRoomWorksRoute_viewingRoom
    //         }
    //       }
    //     `,
    //   },
    // ],
  },
]
