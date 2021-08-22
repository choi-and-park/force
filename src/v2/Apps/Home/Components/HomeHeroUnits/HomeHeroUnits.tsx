import React from "react"
// import { createFragmentContainer, graphql } from "react-relay"
import { HomeHeroUnitsLargeFragmentContainer } from "./HomeHeroUnitsLarge"
import { HomeHeroUnitsSmallFragmentContainer } from "./HomeHeroUnitsSmall"
// import { HomeHeroUnits_homePage } from "v2/__generated__/HomeHeroUnits_homePage.graphql"
import { Media } from "v2/Utils/Responsive"

// interface HomeHeroUnitsProps {
//   homePage: HomeHeroUnits_homePage
// }

// const HomeHeroUnits: React.FC<HomeHeroUnitsProps> = ({ homePage }) => {
//   return (
//     <>
//       <Media at="xs">
//         <HomeHeroUnitsSmallFragmentContainer homePage={homePage} />
//       </Media>

//       <Media greaterThan="xs">
//         <HomeHeroUnitsLargeFragmentContainer homePage={homePage} />
//       </Media>
//     </>
//   )
// }

// export const HomeHeroUnitsFragmentContainer = createFragmentContainer(
//   HomeHeroUnits,
//   {
//     homePage: graphql`
//       fragment HomeHeroUnits_homePage on HomePage {
//         ...HomeHeroUnitsSmall_homePage
//         ...HomeHeroUnitsLarge_homePage
//       }
//     `,
//   }
// )

const StaticHeroUnits = [
  {
    title: "MMCA\n이건희컬렉션 특별전\n한국미술명작",
    subtitle:
      "MMCA\nLee Kun-hee Collection\nMasterpieces of Korean Art\n2021.7.21.-2022.3.13.",
    href: "/",
    // linkText: "Sign up",
    backgroundImageURL: "http://nebulach.com:10080/images/mmca.png",
  },
  {
    title: "MMCA\n이건희컬렉션 특별전\n한국미술명작",
    subtitle:
      "MMCA\nLee Kun-hee Collection\nMasterpieces of Korean Art\n2021.7.21.-2022.3.13.",
    href: "/",
    // linkText: "Sign up",
    backgroundImageURL: "http://nebulach.com:10080/images/mmca.png",
  },
  {
    title: "MMCA\n이건희컬렉션 특별전\n한국미술명작",
    subtitle:
      "MMCA\nLee Kun-hee Collection\nMasterpieces of Korean Art\n2021.7.21.-2022.3.13.",
    href: "/",
    // linkText: "Sign up",
    backgroundImageURL: "http://nebulach.com:10080/images/mmca.png",
  },
  {
    title: "MMCA\n이건희컬렉션 특별전\n한국미술명작",
    subtitle:
      "MMCA\nLee Kun-hee Collection\nMasterpieces of Korean Art\n2021.7.21.-2022.3.13.",
    href: "/",
    // linkText: "Sign up",
    backgroundImageURL: "http://nebulach.com:10080/images/mmca.png",
  },
  {
    title: "MMCA\n이건희컬렉션 특별전\n한국미술명작",
    subtitle:
      "MMCA\nLee Kun-hee Collection\nMasterpieces of Korean Art\n2021.7.21.-2022.3.13.",
    href: "/",
    // linkText: "Sign up",
    backgroundImageURL: "http://nebulach.com:10080/images/mmca.png",
  },
]
interface HomeHeroUnitsProps {
  // homePage: HomeHeroUnits_homePage
}

const HomeHeroUnits: React.FC<HomeHeroUnitsProps> = () => {
  return (
    <>
      <Media at="xs">
        <HomeHeroUnitsSmallFragmentContainer heroUnits={StaticHeroUnits} />
      </Media>

      <Media greaterThan="xs">
        <HomeHeroUnitsLargeFragmentContainer heroUnits={StaticHeroUnits} />
      </Media>
    </>
  )
}

export const HomeHeroUnitsFragmentContainer = ({ homePage }) => {
  return <HomeHeroUnits />
}
