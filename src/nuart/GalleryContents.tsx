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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
        image: "/images/home/featured_galleries/gallery2.jpeg",
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
      subname: "Wow Show",
      href: "/partner/hakgojae",
      location_with_dates: "서울, jan - feb",
      image: "/images/home/featured_galleries/gallery2.jpeg",
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
      subname: "Wow Show",
      href: "/partner/hakgojae",
      location_with_dates: "서울, jan - feb",
      image: "/images/home/featured_galleries/gallery2.jpeg",
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
      name: "Tongue & Nail",
      href: "",
      exhibitionPeriod: "7월 - 8월",
      location: {
        city: "서울",
      },
      description:
        "임시 임시 Tongue & Nail, a solo exhibition of KOO Jiyoon, describes the psychological landscape of a city through abstract painting.",
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
      name: "Tongue & Nail 2222",
      href: "",
      exhibitionPeriod: "7월 - 8월",
      location: {
        city: "서울",
      },
      description:
        "임시 임시 Tongue & Nail, a solo exhibition of KOO Jiyoon, describes the psychological landscape of a city through abstract painting.",
      coverImage: {
        medium: {
          src: "/images/home/featured_galleries/gallery2.jpeg",
          srcSet: "/images/home/featured_galleries/gallery2.jpeg",
        },
      },
    },
  ],
  fullBio:
    "Since 1989, Arario Gallery has been endeavoring to promote talented Asian artists internationally. It has 3 branches in Seoul(Korea), Cheonan(Korea), and Shanghai(China) and representing more than 50 Asian artists from diverse Asian countries such as Korea, Japan, China, Philippine, Indonesia and India. The boundary between East and West is getting blurred, and its exhibition programs and artists representing are also getting more international.",
  website: "http://www.arariogallery.com",
  events: [
    {
      id: "events1",
      showType: "show",
      name: "POST ARCHIVE FACTION...",
      exhibitionPeriod: "8월-9월",
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
      name: "POST ARCHIVE FACTION...",
      exhibitionPeriod: "8월-9월",
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
      name: "POST ARCHIVE FACTION...",
      exhibitionPeriod: "8월-9월",
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
      name: "POST ARCHIVE FACTION...",
      exhibitionPeriod: "8월-9월",
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
          name: "안창홍",
          href: "",
          slug: "",
        },
        {
          name: "안창홍",
          href: "",
          slug: "",
        },
        {
          name: "안창홍",
          href: "",
          slug: "",
        },
        {
          name: "안창홍",
          href: "",
          slug: "",
        },
        {
          name: "안창홍",
          href: "",
          slug: "",
        },
      ],
      columnSize: 5,
      columnName: "Represented Artists",
    },
    {
      artists: [
        {
          name: "Erika COX",
          href: "",
          slug: "",
        },
      ],
      columnSize: 1,
      columnName: "Works Available by",
    },
  ],
}
