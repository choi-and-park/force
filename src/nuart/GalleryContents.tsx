const gallery_seoul = {
  name: "Featured Galleries near Seoul",
  id: "id_seoul",
  facet: "category",
  partners: [
    {
      id: "id1",
      name: "gallery1",
      initials: "GL1",
      locations: [{ city: "Seoul" }],
      profile: {
        id: "id_gallery1",
        image: null,
        href: "/gallery1",
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
      name: "gallery1",
      initials: "GL1",
      locations: [{ city: "Seoul" }],
      profile: {
        id: "id_gallery1",
        image: null,
        href: "/gallery1",
      },
    },
  ],
}

export const GalleryContents = [gallery_seoul, gallery_seoul]

export const GalleryProfiles = [
  {
    owner: {
      name: "Gallery",
      href: "/",
    },
    show: {
      name: "Show",
      subname: "Wow Show",
      href: "/",
      location_width_dates: "서울, jan - feb",
      image: "/images/home/featured_galleries/gallery2.jpeg",
    },
    id: "follow-id",
  },
  {
    owner: {
      name: "Gallery",
      href: "/",
    },
    show: {
      name: "Show",
      subname: "Wow Show",
      href: "/",
      location_width_dates: "서울, jan - feb",
      image: "/images/home/featured_galleries/gallery2.jpeg",
    },
    id: "follow-id",
  },
]
