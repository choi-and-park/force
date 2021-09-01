const gallery_seoul = {
  name: "Featured Galleries near Seoul",
  id: "id_seoul",
  facet: "category",
  partners: [
    {
      id: "id1",
      name: "아라리오 갤러리",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery1",
        image: "/images/home/featured_galleries/arario.jpg",
        href: "/partner/hakgojae",
      },
    },
    {
      id: "id2",
      name: "학고재 갤러리",
      // initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery2",
        image: "/images/home/featured_galleries/hakojae.jpg",
        href: "/partner/hakgojae",
      },
    },
    {
      id: "id1",
      name: "오페라 갤러리",
      // initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery3",
        image: "/images/home/featured_galleries/opera.jpg",
        href: "/partner/hakgojae",
      },
    },
  ],
}

const gallery_photography = {
  name: "Photography",
  id: "id_seoul",
  facet: "category",
  partners: [
    {
      id: "id1",
      name: "류기환 갤러리",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery1",
        image: "/images/home/featured_galleries/ryu.jpg",
        href: "/partner/hakgojae",
      },
    },
    {
      id: "id2",
      name: "SPACE55",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery2",
        image: "/images/home/featured_galleries/space55.jpeg",
        href: "/partner/hakgojae",
      },
    },
    {
      id: "id1",
      name: "루시다 갤러리",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery3",
        image: "/images/home/featured_galleries/rucida.jpeg",
        href: "/partner/hakgojae",
      },
    },
  ],
}

const gallery_prints = {
  name: "Prints",
  id: "id_seoul",
  facet: "category",
  partners: [
    {
      id: "id1",
      name: "프린트아트리서치센터",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery1",
        image: "/images/home/featured_galleries/pintz.jpeg",
        href: "/partner/hakgojae",
      },
    },
    {
      id: "id2",
      name: "SPACE 9",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery2",
        image: "/images/home/featured_galleries/space9.jpg",
        href: "/partner/hakgojae",
      },
    },
    {
      id: "id1",
      name: "아트앤에디션",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery3",
        image: "/images/home/featured_galleries/artnedition.jpg",
        href: "/partner/hakgojae",
      },
    },
  ],
}

const gallery_contemporary = {
  name: "Contemporary",
  id: "id_seoul",
  facet: "category",
  partners: [
    {
      id: "id1",
      name: "아라리오 갤러리",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery1",
        image: "/images/home/featured_galleries/arario.jpg",
        href: "/partner/hakgojae",
      },
    },
    {
      id: "id2",
      name: "학고재 갤러리",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery2",
        image: "/images/home/featured_galleries/hakojae.jpg",
        href: "/partner/hakgojae",
      },
    },
    {
      id: "id1",
      name: "오페라 갤러리",
      initials: "GL1",
      locations: [{ city: "서울" }],
      profile: {
        id: "id_gallery3",
        image: "/images/home/featured_galleries/opera.jpg",
        href: "/partner/hakgojae",
      },
    },
  ],
}

export const GalleryContents = [
  gallery_seoul,
  gallery_photography,
  gallery_prints,
  gallery_contemporary,
]

export const GalleryProfiles = [
  {
    owner: {
      name: "Gallery",
      href: "/partner/hakgojae",
    },
    show: {
      name: "Show",
      subname: "학고재 갤러리",
      href: "/partner/hakgojae",
      location_with_dates: "서울, jan - feb",
      image: "/images/home/featured_galleries/hakojae.jpg",
    },
    id: "follow-id",
  },
  {
    owner: {
      name: "Gallery",
      href: "/partner/hakgojae",
    },
    show: {
      name: "Show",
      subname: "SPACE55",
      href: "/partner/hakgojae",
      location_with_dates: "서울, jan - feb",
      image: "/images/home/featured_galleries/space55.jpeg",
    },
    id: "follow-id",
  },
]

export const gallery_arario = {
  type: "Gallery",
  profile: {
    icon: {
      resized: {
        src: "/images/home/featured_galleries/gallery2.jpeg",
        srcSet: "/images/home/featured_galleries/gallery2.jpeg",
      },
    },
  },
  name: "아라리오 갤러리",
  slug: "arario",
  // locations: "서울, 천안",
  locations: [{ city: "서울, 천안" }],
  shows: [
    {
      id: "show1",
      showType: "Current Show",
      name: "KANG Eun Young: Windows",
      href: "",
      exhibitionPeriod: "Aug 18 -31",
      location: {
        city: "서울",
      },
      description:
        "KANG Eun Young was born in Seoul, 1985. She received her Bachelor's degree in Printmaking with a Minor in Oriental Painting at Hongik University in 2011. She completed her Master's degree in Printmaking in the same school in 2014. She has held solo exhibitions at Dimension Variable (Seoul) Open-beta space Vanziha (Seoul), etc. She participated in group exhibitions held at National Museum of Modern and Contemporary Art (Gwacheon, Korea), Art Sonje Center (Seoul), Sejong Center for the Performing Arts (Seoul), Jeon Tae-il Memorial Hall (Seoul), etc. She also participated in the 7th Gwangju Design Biennale: Futures. Along with working as an artist, KANG also runs a plant store named 'Singmul Store.'",
      coverImage: {
        medium: {
          src: "/images/home/featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/featured_galleries/gallery2.jpeg",
        },
      },
    },
    {
      id: "show2",
      showType: "Current Show",
      name: "CHOI Xooang: Unfold",
      href: "",
      exhibitionPeriod: "Jul 28 - Aug 29",
      location: {
        city: "Seoul",
      },
      description:
        "Hakgojae Gallery is pleased to present works by CHOI Xooang (b. 1975) in his solo exhibition, 'Unfold' at Hakgojae Gallery, from July 28th (Wed) to August 29th (Sun), 2021. This is CHOI Xooang’s first solo exhibition at Hakgojae Gallery. This exhibition is an opportunity to examine the artist’s recent works that tried to make changes in working habits which were his daily life as social distancing has prompted us to reconsider daily life more these days. CHOI, who has been restlessly working since the early 2000s, has had a two-year hiatus since his solo exhibition, Unbodied Objects, at Bongsan Cultural Center (Daegu, Korea). He unfolds the inner journey so far in the 21 works on view at Hakgojae Gallery. CHOI Xooang has been creating realistic sculptures of the body, modified or dismantled. He embodied the narratives of emotions that occur between completely private life and firm social norms in these figures. In this exhibition, CHOI presents new works, including paintings, sculptures, and installations, using different methods from the past. CHOI explores the gap between knowledge and reality. The exhibition will cool down the hot summer by removing the skin of reconstruction. Independent curator Maeng Jee Young wrote the introductory essay.",
      coverImage: {
        medium: {
          src: "/images/home/featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/featured_galleries/gallery2.jpeg",
        },
      },
    },
  ],
  fullBio:
    "The gallery's name derives from the saying, 'to review the old to learn the new' in the Analects of Confucius. However, gaining knowledge of the past is not necessarily equivalent to studying of historical facts. In fact, the process of learning the past in Korea, where tragic history of being victimized by the Japanese colonialism and the division of the country is very much alive, accompanies excruciating self-reflection. Nonetheless, to be able to confidently reach out to readily participate in the global cultural flow despite its past struggles is the true philosophy behind the saying, 'to review the old to learn the new.' This is the very ideology and orientation that makes Hakgojae Gallery unique, bringing together the old and the new, and connecting the region to the world.",
  website: "http://www.hakgojae.com/",
  events: [
    {
      id: "events1",
      showType: "show",
      name: "KANG Eun Young: Windows",
      exhibitionPeriod: "Aug 18 - 31",
      href: "",
      coverImage: {
        medium: {
          width: 263,
          height: 222,
          src: "/images/home/featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/featured_galleries/gallery2.jpeg",
        },
      },
    },
    {
      id: "events2",
      showType: "show",
      name: "CHOI Xooang: Unfold",
      exhibitionPeriod: "Jul 28 - Aug 29",
      href: "",
      coverImage: {
        medium: {
          width: 263,
          height: 222,
          src: "/images/home/featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/featured_galleries/gallery2.jpeg",
        },
      },
    },
    {
      id: "events3",
      showType: "show",
      name: "KIM Gil-hu: The Night of Chaos",
      exhibitionPeriod: "Jul 21 - Aug 22",
      href: "",
      coverImage: {
        medium: {
          width: 263,
          height: 222,
          src: "/images/home/featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/featured_galleries/gallery2.jpeg",
        },
      },
    },
    {
      id: "events4",
      showType: "show",
      name: "LIM Jimin: Although it's an ordinary day like this",
      exhibitionPeriod: "Jul 7 - 28",
      href: "",
      coverImage: {
        medium: {
          width: 263,
          height: 222,
          src: "/images/home/featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/featured_galleries/gallery2.jpeg",
        },
      },
    },
  ],
  artists: [
    {
      artists: [
        {
          name: "Tom Anholt",
          href: "",
          slug: "",
        },
        {
          name: "Sun Goo Im",
          href: "",
          slug: "",
        },
        {
          name: "Dong Hyuk Lee",
          href: "",
          slug: "",
        },
        {
          name: "Giuseppe Penone",
          href: "",
          slug: "",
        },
        {
          name: "Chae Rim",
          href: "",
          slug: "",
        },
        {
          name: "Ma Liuming",
          href: "",
          slug: "",
        },
      ],
      columnSize: 3,
      columnName: "Represented Artists",
    },
    {
      artists: [
        {
          name: "김현식",
          href: "",
          slug: "",
        },
        {
          name: "장재민",
          href: "",
          slug: "",
        },
        {
          name: "강요배",
          href: "",
          slug: "",
        },
        {
          name: "이영백",
          href: "",
          slug: "",
        },
        {
          name: "이진영",
          href: "",
          slug: "",
        },
        {
          name: "이우성",
          href: "",
          slug: "",
        },
      ],
      columnSize: 3,
      columnName: "Works Available by",
    },
  ],
}
