const banners = [
  {
    heading: "EXCLUSIVELY ON NUART",
    title: "아트 오브 뱅크시",
    subtitle: "더서울라이티움\n2021.8.20 - 2022.2.6",
    // "MMCA\nLee Kun-hee Collection\nMasterpieces of Korean Art\n2021.7.21.-2022.3.13.",
    href: "/",
    image: {
      src: "/images/home/banner/banner1.jpg",
      srcSet: "/images/home/banner/banner1.jpg 1x",
    },
    linkText: "Browse Works",
  },
  {
    heading: "FEATURED FESTIVAL",
    title: "KIAF 2021",
    subtitle: "COEX HALL A&B\n2021.10.14 - 2021.10.17",
    // "Choi Seok-Hwan Collection\nThe korean art gallery\n2021.5.21.-2022.6.13.",
    href: "/",
    image: {
      src: "/images/home/banner/banner2.jpg",
      srcSet: "/images/home/banner/banner2.jpg 1x",
    },
    linkText: "Buy now",
  },
  {
    heading: "FEATURED FESTIVAL",
    title: "2021 어반브레이크",
    subtitle: "COEX HALL B\n2021.7.29 - 2021.8.1",
    href: "/",
    image: {
      src: "/images/home/banner/banner3.jpg.jpeg",
      srcSet: "/images/home/banner/banner3.jpg 1x",
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
      src: "/images/home/categories/hh.jpg",
      srcSet: "/images/home/categories/hh.jpg 1x",
    },
  },
  {
    slug: "photography",
    title: "사진",
    image: {
      src: "/images/home/categories/sj.png",
      srcSet: "/images/home/categories/sj.png 1x",
    },
  },
  {
    slug: "drawing",
    title: "드로잉",
    image: {
      src: "/images/home/categories/drw.png",
      srcSet: "/images/home/categories/drw.png 1x",
    },
  },
  {
    slug: "engraving",
    title: "판화",
    image: {
      src: "/images/home/categories/ph.png",
      srcSet: "/images/home/categories/ph.png 1x",
    },
  },
  {
    slug: "sculpture",
    title: "조각",
    image: {
      src: "/images/home/categories/jk.jpg",
      srcSet: "/images/home/categories/jk.jpg 1x",
    },
  },
  {
    slug: "media-art",
    title: "미디어아트",
    image: {
      src: "/images/home/categories/ma.jpg",
      srcSet: "/images/home/categories/ma.jpg 1x",
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
      href: "/artwork/kim-tschang-yeul-recurrence-2186",
      id: "id_artwork",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/popular_artists/popular1.jpg",
          srcSet: "/images/home/popular_artists/popular1.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular1",
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
          src: "/images/home/popular_artists/popular2.jpg",
          srcSet: "/images/home/popular_artists/popular2.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular2",
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
          src: "/images/home/popular_artists/popular3.jpg",
          srcSet: "/images/home/popular_artists/popular3.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular3",
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
          src: "/images/home/popular_artists/popular4.jpg",
          srcSet: "/images/home/popular_artists/popular4.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular4",
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
          src: "/images/home/popular_artists/popular5.jpg",
          srcSet: "/images/home/popular_artists/popular5.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular5",
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
          src: "/images/home/popular_artists/popular6.jpg",
          srcSet: "/images/home/popular_artists/popular6.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular6",
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
          src: "/images/home/popular_artists/popular7.jpg",
          srcSet: "/images/home/popular_artists/popular7.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular7",
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
          src: "/images/home/popular_artists/popular8.jpg",
          srcSet: "/images/home/popular_artists/popular8.jpg x1",
          width: 200,
          // height: 302
        },
      },
      imageTitle: "popular8",
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
  title: "Featured galleries",
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
          src: "/images/home/featured_galleries/gallery1.jpeg",
          srcSet: "/images/home/featured_galleries/gallery1.jpeg 1x",
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
          src: "/images/home/featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/featured_galleries/gallery2.jpeg 1x",
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
          src: "/images/home/featured_galleries/gallery3.jpeg",
          srcSet: "/images/home/featured_galleries/gallery3.jpeg 1x",
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
          src: "/images/home/featured_galleries/gallery4.jpeg",
          srcSet: "/images/home/featured_galleries/gallery4.jpeg 1x",
        },
      },
    },
  ],
}

const artworks_shows = {
  title: "Featrued shows",
  id: "id_featured_shows",
  key: "featured_shows",
  context: {
    __typename: "FeaturedShows",
  },
  items: [
    {
      __typename: "show",
      href: "/",
      id: "id_show1",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/featured_shows/show1.jpg",
          srcSet: "/images/home/featured_shows/show1.jpg 1x",
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
      id: "id_show2",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/featured_shows/show2.jpg",
          srcSet: "/images/home/featured_shows/show2.jpg 1x",
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
      id: "id_show3",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/featured_shows/show3.jpg",
          srcSet: "/images/home/featured_shows/show3.jpg 1x",
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
      id: "id_show4",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/featured_shows/show4.jpeg",
          srcSet: "/images/home/featured_shows/show4.jpeg 1x",
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
      id: "id_show5",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/featured_shows/show5.png",
          srcSet: "/images/home/featured_shows/show5.png 1x",
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
      id: "id_show6",
      image: {
        aspectRatio: 0.76,
        height: 1080,
        resized: {
          src: "/images/home/featured_shows/show6.png",
          srcSet: "/images/home/featured_shows/show6.png 1x",
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

export const HomeContents = {
  banners: banners,
  events: events,
  categories: categories,
  artworkModules: [artworks_artists, artworks_galleries, artworks_shows],
}
