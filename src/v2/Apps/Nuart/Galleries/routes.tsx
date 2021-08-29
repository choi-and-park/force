import React from "react"
import { AppRouteConfig } from "v2/System/Router/Route"
import { RouterLink } from "v2/System/Router/RouterLink"

export const nuartGalleriesRoutes: AppRouteConfig[] = [
  {
    theme: "v3",
    path: "/galleries",
    Component: props => {
      return (
        <div>
          <h1>Hello new app!</h1>
          <nav>
            <RouterLink to="/new-app/artworks">
              {" "}
              - Navigate to Artworks
            </RouterLink>
            <RouterLink to="/new-app/artists">
              {" "}
              - Navigate to Artists
            </RouterLink>
          </nav>
          {/* <div>{props.children}</div> */}
        </div>
      )
    },
    // children: [
    //   {
    //     path: "artworks",
    //     Component: () => <div>Artworks list...</div>,
    //   },
    //   {
    //     path: "artists",
    //     Component: () => <div>Artists list...</div>,
    //   },
    // ],
  },
]
