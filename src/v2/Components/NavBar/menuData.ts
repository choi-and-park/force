export interface MenuData {
  title: string
  links: LinkData[]
}

export type LinkData = MenuLinkData | SimpleLinkData

export const isMenuLinkData = (
  linkData: LinkData
): linkData is MenuLinkData => {
  return "menu" in linkData
}

// e.g. "Editorial"
export interface SimpleLinkData {
  text: string
  href: string
  dividerBelow?: boolean
  onClick?(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void
}

// e.g. "Art Movement >"
export interface MenuLinkData {
  text: string
  menu: MenuData
  dividerBelow?: boolean
}

export const ARTISTS_SUBMENU_DATA: MenuLinkData = {
  text: "Artists",
  menu: {
    title: "Artists",
    links: [
      {
        text: "In-Demand Artists",
        href: "/collection/in-demand-artists",
      },
      {
        text: "Artists We're Eyeing",
        href: "/collection/artists-we-are-eyeing",
      },
      {
        text: "Artsy Vanguard Artists",
        href: "/collection/artsy-vanguard-artists",
        dividerBelow: true,
      },
      {
        text: "Career Stage",
        menu: {
          title: "Career Stage",
          links: [
            // {
            //   text: "Blue-Chip Artists",
            //   href: "/collection/blue-chip-artists",
            // },
            // {
            //   text: "Critically Acclaimed Artists",
            //   href: "/collection/critically-acclaimed-artists",
            // },
            // {
            //   text: "Trending Emerging Artists",
            //   href: "/collection/trending-emerging-artists",
            // },
            // {
            //   text: "New & Noteworthy Artists",
            //   href: "/collection/new-and-noteworthy-artists",
            // },
            {
              text: "블루칩 작가",
              href: "",
            },
            {
              text: "이머징 작가",
              href: "",
            },
            {
              text: "주목할만한 작가",
              href: "",
            },
            {
              text: "호평받는 작가",
              href: "",
            },
          ],
        },
      },
      // {
      //   text: "Popular Categories",
      //   menu: {
      //     title: "Popular Categories",
      //     links: [
      //       {
      //         text: "New From Emerging Artists",
      //         href: "/collection/new-from-emerging-artists",
      //       },
      //       {
      //         text: "Modern & Contemporary Masters",
      //         href: "/collection/master-works",
      //       },
      //       {
      //         text: "Limited-Edition Prints by Leading Artists",
      //         href: "/collection/limited-edition-prints-trending-artists",
      //       },
      //       {
      //         text: "Black Figurative Painters",
      //         href: "/collection/black-figurative-painters",
      //       },
      //       {
      //         text: "Women Artists to Watch",
      //         href: "/collection/women-painters-on-the-rise",
      //       },
      //     ],
      //   },
      //   dividerBelow: true,
      // },
      {
        text: "Categories",
        menu: {
          title: "Categories",
          links: [
            {
              text: "회화",
              href: "",
            },
            {
              text: "사진",
              href: "",
            },
            {
              text: "드로잉",
              href: "",
            },
            {
              text: "판화",
              href: "",
            },
            {
              text: "조각",
              href: "",
            },
            {
              text: "디자인",
              href: "",
            },
            {
              text: "미디어아트",
              href: "",
            },
            {
              text: "스트릿아트",
              href: "",
            },
          ],
        },
      },
      // {
      //   text: "Artist Nationality or Ethicity",
      //   menu: {
      //     title: "Artist Nationality or Ethicity",
      //     links: [
      //       {
      //         text: "American",
      //         href: "/collect?artist_nationalities%5B0%5D=American",
      //       },
      //       {
      //         text: "African",
      //         href: "/collection/african-artists",
      //       },
      //       {
      //         text: "Asian",
      //         href: "/collection/asian-artists",
      //       },
      //       {
      //         text: "British",
      //         href: "/collect?artist_nationalities%5B0%5D=British",
      //       },
      //       {
      //         text: "European",
      //         href: "/collection/european-artists",
      //       },
      //       {
      //         text: "Latin American",
      //         href: "/collection/latin-american-artists",
      //       },
      //       {
      //         text: "Middle Eastern",
      //         href: "/collection/middle-eastern-artists",
      //       },
      //     ],
      //   },
      // },
      // {
      //   text: "Featured Artists",
      //   menu: {
      //     title: "Featured Artists",
      //     links: [
      //       {
      //         text: "Derrick Adams",
      //         href: "/artist/derrick-adams/works-for-sale",
      //       },
      //       {
      //         text: "Bridget Riley",
      //         href: "/artist/bridget-riley/works-for-sale",
      //       },
      //       {
      //         text: "Frank Stella",
      //         href: "/artist/frank-stella/works-for-sale",
      //       },
      //       {
      //         text: "Julian Opie",
      //         href: "/artist/julian-opie/works-for-sale",
      //       },
      //       {
      //         text: "Judy Chicago",
      //         href: "/artist/judy-chicago/works-for-sale",
      //       },
      //       {
      //         text: "Etel Adnan",
      //         href: "/artist/etel-adnan/works-for-sale",
      //       },
      //       {
      //         text: "Mickalene Thomas",
      //         href: "/artist/mickalene-thomas/works-for-sale",
      //       },
      //     ],
      //   },
      // },
      {
        text: "Featured Artists",
        menu: {
          title: "Featured Artists",
          links: [
            {
              text: "김창열",
              href: "/artist/김창열/works-for-sale",
            },
            {
              text: "이우한",
              href: "/artist/bridget-riley/works-for-sale",
            },
            {
              text: "서도호",
              href: "/artist/frank-stella/works-for-sale",
            },
            {
              text: "장마리아",
              href: "/artist/julian-opie/works-for-sale",
            },
            {
              text: "이세현",
              href: "/artist/judy-chicago/works-for-sale",
            },
            {
              text: "줄리아 오피",
              href: "/artist/etel-adnan/works-for-sale",
            },
            {
              text: "알렉스 카츠",
              href: "/artist/mickalene-thomas/works-for-sale",
            },
            {
              text: "문형태",
              href: "/artist/mickalene-thomas/works-for-sale",
            },
          ],
        },
      },
      {
        text: "View all artists",
        href: "/artists",
      },
    ],
  },
}

export const ARTWORKS_SUBMENU_DATA: MenuLinkData = {
  text: "Artworks",
  menu: {
    title: "Artworks",
    links: [
      {
        text: "Trove",
        href: "/gene/trove",
      },
      {
        text: "New This Week",
        href: "/collection/new-this-week",
      },
      {
        text: "Trending on Artsy",
        href: "/collection/highlights-this-month",
      },
      {
        text: "Exclusively on Artsy",
        href: "/collection/exclusively-on-artsy",
      },
      {
        text: "Limited Editions",
        href: "/collection/limited-edition-works",
        dividerBelow: true,
      },
      {
        text: "Highlights From",
        menu: {
          title: "Highlights From",
          links: [
            {
              text: "갤러리",
              href: "/collection/auction-highlights",
            },
            {
              text: "옥션",
              href: "/collection/art-fair-highlights",
            },
            {
              text: "아트페어",
              href: "/collection/gallery-show-highlights",
            },
            {
              text: "비영리기관",
              href: "/collection/nonprofit-shops",
            },
          ],
        },
      },
      {
        text: "Price",
        menu: {
          title: "Price",
          links: [
            {
              text: "~50 만원",
              href: "/collect?price_range=50000-%2A",
            },
            {
              text: "50~100 만원",
              href: "/collect?price_range=25000-50000",
            },
            {
              text: "100~200 만원",
              href: "/collect?price_range=10000-25000",
            },
            {
              text: "200~300 만원",
              href: "/collect?price_range=5000-10000",
            },
            {
              text: "300~500 만원",
              href: "/collect?price_range=0-5000",
            },
            {
              text: "500~1,000 만원",
              href: "/collect?price_range=0-5000",
            },
            {
              text: "1,000 만원~",
              href: "/collect?price_range=0-5000",
            },
          ],
        },
      },
      {
        text: "Categories",
        menu: {
          title: "Categories",
          links: [
            {
              text: "회화",
              href: "",
            },
            {
              text: "사진",
              href: "",
            },
            {
              text: "드로잉",
              href: "",
            },
            {
              text: "판화",
              href: "",
            },
            {
              text: "조각",
              href: "",
            },
            {
              text: "디자인",
              href: "",
            },
            {
              text: "미디어아트",
              href: "",
            },
            {
              text: "스트릿아트",
              href: "",
            },
          ],
        },
      },
      // {
      //   text: "Medium",
      //   menu: {
      //     title: "Medium",
      //     links: [
      //       {
      //         text: "Painting",
      //         href: "/collection/painting",
      //       },
      //       {
      //         text: "Prints",
      //         href: "/collection/prints",
      //       },
      //       {
      //         text: "Photography",
      //         href: "/collection/photography",
      //       },
      //       {
      //         text: "Sculpture",
      //         href: "/collection/sculpture",
      //       },
      //       {
      //         text: "Works on Paper",
      //         href: "/collection/works-on-paper",
      //       },
      //       {
      //         text: "Mixed Media",
      //         href: "/collection/mixed-media",
      //       },
      //       {
      //         text: "Design",
      //         href: "/collection/design",
      //       },
      //     ],
      //   },
      // },
      // {
      //   text: "Movements",
      //   menu: {
      //     title: "Movements",
      //     links: [
      //       {
      //         text: "Contemporary",
      //         href: "/collection/contemporary",
      //       },
      //       {
      //         text: "Street Art",
      //         href: "/collection/street-art",
      //       },
      //       {
      //         text: "Pop Art",
      //         href: "/collection/pop-art",
      //       },
      //       {
      //         text: "Abstract Expressionism",
      //         href: "/collection/abstract-expressionism",
      //       },
      //       {
      //         text: "Post-War",
      //         href: "/collection/post-war",
      //       },
      //       {
      //         text: "Impressionism & Modernism",
      //         href: "/collection/impressionist-and-modern",
      //       },
      //       {
      //         text: "Old Masters",
      //         href: "/collection/old-masters",
      //       },
      //     ],
      //   },
      //   dividerBelow: true,
      // },
      {
        text: "Subject Matter",
        menu: {
          title: "Subject Matter",
          links: [
            {
              text: "추상",
              href: "/gene/abstract-art",
            },
            {
              text: "구상",
              href: "/gene/figurative-art",
            },
            {
              text: "풍경",
              href: "/gene/landscapes",
            },
            {
              text: "정물",
              href: "/gene/still-life",
            },
          ],
        },
      },
      { text: "View all artworks", href: "/collect" },
    ],
  },
}

export const MENU_DATA: MenuData = {
  title: "", // root menu, so no title
  links: [
    { ...ARTISTS_SUBMENU_DATA },
    { ...ARTWORKS_SUBMENU_DATA },
    {
      text: "Auctions",
      href: "/auctions",
    },
    {
      text: "Viewing Rooms",
      href: "/viewing-rooms",
    },
    {
      text: "Editorial",
      href: "/articles",
    },
    {
      text: "Galleries",
      href: "/galleries",
    },
    {
      text: "Fairs",
      href: "/fairs",
    },
    {
      text: "Shows",
      href: "/shows",
    },
    {
      text: "Museums",
      href: "/institutions",
    },
    {
      text: "Consign",
      href: "/consign",
    },
    {
      text: "Artsy for Galleries",
      href: "/gallery-partnerships",
    },
    // NB. that desktop and mobile currently handle logged-in/out state links
    // such as "log in" or "account" separately
  ],
}
