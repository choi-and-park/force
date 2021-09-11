const banners = [
  {
    heading: "Exclusively on Nuart",
    title: "조엘 사피로",
    subtitle: "페이스갤러리\n2021.7.22 - 2021.9.11",
    // "MMCA\nLee Kun-hee Collection\nMasterpieces of Korean Art\n2021.7.21.-2022.3.13.",
    href: "/",
    image: {
      src: "/images/home/1_banners/banner1.png",
      srcSet: "/images/home/1_banners/banner1.png 1x",
    },
    image_mobile: {
      src: "/images/home/1_banners/banner1_m.png",
      srcSet: "/images/home/1_banners/banner1_m.png 1x",
    },
    linkText: "Browse Works",
  },
  {
    heading: "Featured Festival",
    title: "하나의 점, 모든 장소",
    subtitle: "금호미술관\n2021.8.27 - 2021.9.18",
    // "Choi Seok-Hwan Collection\nThe korean art gallery\n2021.5.21.-2022.6.13.",
    href: "/",
    image: {
      src: "/images/home/1_banners/banner2_1920.png",
      srcSet: "/images/home/1_banners/banner2_1920.png 1x",
    },
    image_mobile: {
      src: "/images/home/1_banners/banner2_1440.png",
      srcSet: "/images/home/1_banners/banner2_1440.png 1x",
    },
    linkText: "Buy now",
  },
  {
    heading: "Featured Exhibition",
    title: "한국미술의 산책 VII: \n 구상회화",
    subtitle: "MUSEUM SAN\n2021.6.19 - 2022.5.29",
    href: "/",
    image: {
      src: "/images/home/1_banners/banner3_1920.png",
      srcSet: "/images/home/1_banners/banner3_1920.png 1x",
    },
    image_mobile: {
      src: "/images/home/1_banners/banner3_1440.png",
      srcSet: "/images/home/1_banners/banner3_1440.png 1x",
    },
    linkText: "Buy ticket",
  },
]

const events = [
  {
    __typename: "FeaturedLink",
    internalID: "event1",
    title: "Featured Fair",
    subtitle: "ART BUSAN",
    href: "/",
    image: {
      cropped: {
        src: "/images/home/event/af0.png",
        srcSet: "/images/home/event/af0.png 1x",
      },
    },
  },
  {
    __typename: "FeaturedLink",
    internalID: "event2",
    title: "Featured Fair",
    subtitle: "SEOUL ART SHOW 2021",
    href: "/",
    image: {
      cropped: {
        src: "/images/home/event/af1.png",
        srcSet: "/images/home/event/af1.png 1x",
      },
    },
  },
  {
    __typename: "FeaturedLink",
    internalID: "event3",
    title: "Featured Fair",
    subtitle: "ASYAAF 2021",
    href: "/",
    image: {
      cropped: {
        src: "/images/home/event/af2.png",
        srcSet: "/images/home/event/af2.png 1x",
      },
    },
  },
  {
    __typename: "FeaturedLink",
    internalID: "event3",
    title: "Featured Fair",
    subtitle: "BAMA 2021",
    href: "/",
    image: {
      cropped: {
        src: "/images/home/event/af3.png",
        srcSet: "/images/home/event/af3.png 1x",
      },
    },
  },
]

const categories = [
  {
    slug: "painting",
    title: "회화",
    image: {
      src: "/images/home/2_categories/cat1_hh.jpg",
      srcSet: "/images/home/2_categories/cat1_hh.jpg 1x",
    },
  },
  {
    slug: "photography",
    title: "사진",
    image: {
      src: "/images/home/2_categories/cat2_sj.png",
      srcSet: "/images/home/2_categories/cat2_sj.png 1x",
    },
  },
  {
    slug: "drawing",
    title: "드로잉",
    image: {
      src: "/images/home/2_categories/cat3_drw.png",
      srcSet: "/images/home/2_categories/cat3_drw.png 1x",
    },
  },
  {
    slug: "engraving",
    title: "판화",
    image: {
      src: "/images/home/2_categories/cat4_ph.png",
      srcSet: "/images/home/2_categories/cat4_ph.png 1x",
    },
  },
  {
    slug: "sculpture",
    title: "조각",
    image: {
      src: "/images/home/2_categories/cat5_jk.jpg",
      srcSet: "/images/home/2_categories/cat5_jk.jpg 1x",
    },
  },
  {
    slug: "media-art",
    title: "미디어아트",
    image: {
      src: "/images/home/2_categories/cat6_ma.jpg",
      srcSet: "/images/home/2_categories/cat6_ma.jpg 1x",
    },
  },
]

const artworks_artists = {
  title: "Popular Artists",
  id: "id_popular_artists",
  key: "popular_artists",
  context: {
    __typename: "TrendingArtists",
    artists: [
      {
        name: "김창열",
        href: "/artist/kim-tschang-yeul",
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
  items: [
    {
      __typename: "artwork",
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "김창열",
        },
      ],
      href: "/artwork/kim-tschang-yeul-recurrence-2240",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/3_popular_artists/artist1.jpg",
          srcSet: "/images/home/3_popular_artists/artist1.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "artist1",
      internalID: "InternalID",
      sale_message: "35,000,000,000원",
      slug: "",
      title: "회귀 SH04033",
      date: "2003",
      size: "53x72.7cm",
      gallery: "갤러리현대",
    },
    {
      __typename: "artwork",
      artists: [
        {
          href: "/",
          id: "id_artists",
          name: "줄리안 오피",
        },
      ],
      href: "/artwork/julian-opie-running-women-30",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/3_popular_artists/artist2.jpg",
          srcSet: "/images/home/3_popular_artists/artist2.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "artist2",
      internalID: "InternalID",
      sale_message: "39,000,000,000원",
      slug: "",
      title: "Running Women",
      date: "2016",
      size: "152.4x154.9x7.6cm",
      gallery: "아테레고 갤러리",
    },
    {
      __typename: "artwork",
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
          src: "/images/home/3_popular_artists/artist3.jpg",
          srcSet: "/images/home/3_popular_artists/artist3.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "artist3",
      internalID: "InternalID",
      sale_message: "2,370,000,000원",
      slug: "",
      title: "선으로부터 no.780123",
      date: "1978",
      size: "130x163cm",
      gallery: "서울갤러리",
    },
    {
      __typename: "artwork",
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
          src: "/images/home/3_popular_artists/artist4.jpg",
          srcSet: "/images/home/3_popular_artists/artist4.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "artist4",
      internalID: "InternalID",
      sale_message: "Contact for Price",
      slug: "",
      title: "Undressing",
      date: "2019",
      size: "10x15cm",
      gallery: "리만머핀 갤러리",
    },
    {
      __typename: "artwork",
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
          src: "/images/home/3_popular_artists/artist5.jpg",
          srcSet: "/images/home/3_popular_artists/artist5.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "artist5",
      internalID: "InternalID",
      sale_message: "33,852,840원",
      slug: "",
      title: "Ashtray",
      date: "1990",
      size: "54x63cm",
      gallery: "행업 갤러리",
    },
    {
      __typename: "artwork",
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
          src: "/images/home/3_popular_artists/artist6.jpg",
          srcSet: "/images/home/3_popular_artists/artist6.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "artist6",
      internalID: "InternalID",
      sale_message: "Contact for Price",
      slug: "",
      title: "Untitled",
      date: "2011",
      size: "300x450cm",
      gallery: "델레이브 갤러",
    },
    {
      __typename: "artwork",
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
          src: "/images/home/3_popular_artists/artist7.jpg",
          srcSet: "/images/home/3_popular_artists/artist7.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "artist7",
      internalID: "InternalID",
      sale_message: "1,569,300원",
      slug: "",
      title: "Beat Bo",
      date: "2001",
      size: "30.5x30.5cm",
      gallery: "nEHC파인아트",
    },
    {
      __typename: "artwork",
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
          src: "/images/home/3_popular_artists/artist8.jpg",
          srcSet: "/images/home/3_popular_artists/artist8.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "artist8",
      internalID: "InternalID",
      sale_message: "22,080,000원",
      slug: "",
      title: "H5-6 Plaza",
      date: "2018",
      size: "90x90cm",
      gallery: "n자이트컨템포러리아트",
    },
  ],
}

const artworks_galleries = {
  title: "Suggested Galleries to Follow",
  id: "id_featured_galleries",
  key: "featured_galleries",
  context: {
    __typename: "FeaturedGalleries",
  },
  items: [
    {
      __typename: "gallery",
      internalID: "internaID1",
      name: "GALLERY GRIMSON",
      href: "/",
      location: "서울",
      coverImage: {
        cropped: {
          src: "/images/home/4_featured_galleries/gallery1.jpeg",
          srcSet: "/images/home/4_featured_galleries/gallery1.jpeg 1x",
        },
      },
    },
    {
      __typename: "gallery",
      internalID: "internaID2",
      name: "JASON HAAM",
      href: "/",
      location: "서울",
      coverImage: {
        cropped: {
          src: "/images/home/4_featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/4_featured_galleries/gallery2.jpeg 1x",
        },
      },
    },
    {
      __typename: "gallery",
      internalID: "internaID3",
      name: "ART B PROJECT",
      href: "/",
      location: "서울",
      coverImage: {
        cropped: {
          src: "/images/home/4_featured_galleries/gallery3.jpeg",
          srcSet: "/images/home/4_featured_galleries/gallery3.jpeg 1x",
        },
      },
    },
    {
      __typename: "gallery",
      internalID: "internaID4",
      name: "GALLERY BATON",
      href: "/",
      location: "서울",
      coverImage: {
        cropped: {
          src: "/images/home/4_featured_galleries/gallery4.jpeg",
          srcSet: "/images/home/4_featured_galleries/gallery4.jpeg 1x",
        },
      },
    },
  ],
}

const artworks_shows = {
  title: "Featrued Shows",
  id: "id_featured_shows",
  key: "featured_shows",
  context: {
    __typename: "FeaturedShows",
  },
  items: [
    {
      __typename: "show",
      href: "/",
      id: "id_show4",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/5_featured_shows/show4.jpeg",
          srcSet: "/images/home/5_featured_shows/show4.jpeg 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "show4",
      internalID: "InternalID4",
      title: "구지윤: Tongue & Nail",
      gallery: "아라리오 갤러리",
      date: "2021. 8. 3. ~ 2021. 9. 25.",
    },
    {
      __typename: "show",
      href: "/",
      id: "id_show3",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/5_featured_shows/show3.jpg",
          srcSet: "/images/home/5_featured_shows/show3.jpg 1x",
          width: 300,
          // height: 302
        },
      },
      imageTitle: "show3",
      internalID: "InternalID3",
      title: "Anthony James: Transcendence",
      gallery: "오페라 갤러리",
      date: "2016. 8. 6. ~ 2021. 8. 26.",
    },
    {
      __typename: "show",
      href: "/",
      id: "id_show1",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/5_featured_shows/show1.jpg",
          srcSet: "/images/home/5_featured_shows/show1.jpg 1x",
          width: 300,
          // height: 302
        },
      },
      imageTitle: "show1",
      internalID: "InternalID1",
      title: "JAN-OLE SCHIEMANN: 'SYNTHETIC HORIZONS'",
      gallery: "초이앤라거 서울",
      date: "2018. 7. 18. ~ 2018. 8. 26.",
    },
    {
      __typename: "show",
      href: "/",
      id: "id_show5",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/5_featured_shows/show5.png",
          srcSet: "/images/home/5_featured_shows/show5.png 1x",
          width: 300,
          // height: 302
        },
      },
      imageTitle: "show5",
      internalID: "InternalID5",
      title: "ANDREAS BLANK & HELENA PARADA KIM",
      gallery: "초이앤라거 서울",
      date: "2018. 2. 28. ~ 2018. 3. 28.",
    },
    {
      __typename: "show",
      href: "/",
      id: "id_show2",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/5_featured_shows/show2.jpg",
          srcSet: "/images/home/5_featured_shows/show2.jpg 1x",
          width: 300,
          // height: 302
        },
      },
      imageTitle: "show2",
      internalID: "InternalID2",
      title: "ANDREAS BLANK & HELENA PARADA KIM",
      gallery: "초이앤라거 서울",
      date: "2018. 2. 28. ~ 2018. 3. 28.",
    },
    {
      __typename: "show",
      href: "/",
      id: "id_show6",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/5_featured_shows/show6.png",
          srcSet: "/images/home/5_featured_shows/show6.png 1x",
          width: 300,
          // height: 302
        },
      },
      imageTitle: "show6",
      internalID: "InternalID6",
      title: "Anthony James: Transcendence",
      gallery: "오페라 갤러리",
      date: "2016. 8. 6. ~ 2021. 8. 26.",
    },
  ],
}

const artworks_collectors = {
  title: "Suggested Collectors to Follow",
  id: "id_suggested_collectors",
  key: "suggested_collectors",
  context: {
    __typename: "FeaturedShows",
  },
  items: [
    {
      __typename: "collector",
      href: "/",
      id: "id_collector3",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/6_collectors/collector3.png",
          srcSet: "/images/home/6_collectors/collector3.png 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "collector3",
      internalID: "InternalID3",
      title: "Bech Risvig Collection",
      location: "Denmark",
      collections: "111 artworks",
    },
    {
      __typename: "collector",
      href: "/",
      id: "id_collector1",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/6_collectors/collector1.png",
          srcSet: "/images/home/6_collectors/collector1.png 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "collector1",
      internalID: "InternalID1",
      title: "Robert Mollers",
      location: "United States",
      collections: "176 artworks",
    },
    {
      __typename: "collector",
      href: "/",
      id: "id_collector2",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/6_collectors/collector2.png",
          srcSet: "/images/home/6_collectors/collector2.png 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "collector2",
      internalID: "InternalID2",
      title: "Charles Riva Collection",
      location: "Belgium",
      collections: "139 artworks",
    },
    {
      __typename: "collector",
      href: "/",
      id: "id_collector4",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/6_collectors/collector4.png",
          srcSet: "/images/home/6_collectors/collector4.png 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "collector4",
      internalID: "InternalID4",
      title: "Garzon Garcia Collection",
      location: "Spain",
      collections: "54 artworks",
    },
    {
      __typename: "collector",
      href: "/",
      id: "id_collector8",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/6_collectors/collector8.png",
          srcSet: "/images/home/6_collectors/collector8.png 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "collector8",
      internalID: "InternalID8",
      title: "Eirik Stensrud",
      location: "Norway",
      collections: "63 artworks",
    },
    {
      __typename: "collector",
      href: "/",
      id: "id_collector7",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/6_collectors/collector7.png",
          srcSet: "/images/home/6_collectors/collector7.png 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "collector7",
      internalID: "InternalID7",
      title: "Edwin Oostmeijer",
      location: "Netherlands",
      collections: "26 artworks",
    },
    {
      __typename: "collector",
      href: "/",
      id: "id_collector5",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/6_collectors/collector5.png",
          srcSet: "/images/home/6_collectors/collector5.png 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "collector5",
      internalID: "InternalID5",
      title: "Daniel Kutz",
      location: "United States",
      collections: "9 artworks",
    },
    {
      __typename: "collector",
      href: "/",
      id: "id_collector6",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/6_collectors/collector6.png",
          srcSet: "/images/home/6_collectors/collector6.png 1x",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "collector6",
      internalID: "InternalID6",
      title: "David Moran",
      location: "Spain",
      collections: "21 artworks",
    },
  ],
}

export const HomeContents = {
  banners: banners,
  events: events,
  categories: categories,
  artworkModules: [
    artworks_artists,
    artworks_galleries,
    artworks_shows,
    artworks_collectors,
  ],
}
