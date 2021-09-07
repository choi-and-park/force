import { Link, Text, useThemeConfig, TextVariant } from "@artsy/palette"
import React from "react"

const ArtistLine = ({ artwork }) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "mediumText" as TextVariant,
    },
    v3: {
      variant: "md" as TextVariant,
    },
  })

  if (artwork.artists && artwork.artists.length) {
    return (
      <Text
        variant={tokens.variant}
        overflowEllipsis
        style={{
          fontFamily: "Noto Sans KR",
        }}
      >
        {artwork.artists.map((artist, i) => {
          if (!artist || !artist.href || !artist.name) return null

          return (
            <Link href={artwork.href} noUnderline>
              {artist.name}
              {i !== artwork.artists.length - 1 && ", "}
            </Link>
          )
        })}
      </Text>
    )
  }

  return null
}

const TitleLine = ({ artwork }) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "text" as TextVariant,
    },
    v3: {
      variant: "md" as TextVariant,
    },
  })

  return (
    <Link href={artwork.href} noUnderline>
      <Text
        variant={tokens.variant}
        color="black60"
        overflowEllipsis
        style={{
          fontFamily: "Noto Sans KR",
          // fontWeight: 700,
        }}
      >
        <i>{artwork.title}</i>
        {artwork.date && `, ${artwork.date}`}
      </Text>
    </Link>
  )
}

const SizeLine = ({ artwork }) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "text" as TextVariant,
    },
    v3: {
      variant: "xs" as TextVariant,
    },
  })

  return (
    <Link href={artwork.href} noUnderline>
      <Text
        variant={tokens.variant}
        color="black60"
        overflowEllipsis
        style={{
          fontFamily: "Noto Sans KR",
          // fontWeight: 700,
        }}
      >
        {artwork.size}
      </Text>
    </Link>
  )
}

const GalleryLine = ({ artwork }) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "text" as TextVariant,
    },
    v3: {
      variant: "xs" as TextVariant,
    },
  })

  return (
    <Link href={artwork.href} noUnderline>
      <Text
        variant={tokens.variant}
        color="black60"
        overflowEllipsis
        style={{
          fontFamily: "Noto Sans KR",
          // fontWeight: 700,
        }}
      >
        {artwork.gallery}
      </Text>
    </Link>
  )
}

const SaleInfoLine = ({ artwork }) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "text" as TextVariant,
      color: "black60",
      fontWeight: "normal",
    },
    v3: {
      variant: "xs" as TextVariant,
      color: "black80",
      fontWeight: "normal",
    },
  })

  return (
    <Link href={artwork.href} noUnderline>
      <Text
        variant={tokens.variant}
        color={tokens.color}
        fontWeight={tokens.fontWeight}
        overflowEllipsis
        style={{
          whiteSpace: "pre-line",
          fontFamily: "Noto Sans KR",
          // fontWeight: 700,
        }}
      >
        {artwork.sale_message}
      </Text>
    </Link>
  )
}

export const DetailsFragmentContainer = ({ artwork }) => {
  return (
    <>
      <ArtistLine artwork={artwork} />
      <TitleLine artwork={artwork} />
      <SizeLine artwork={artwork} />
      <GalleryLine artwork={artwork} />
      <SaleInfoLine artwork={artwork} />
    </>
  )
}
