import { Link, Text, useThemeConfig, TextVariant } from "@artsy/palette"
import React from "react"

const CollectorLine = ({ artwork }) => {
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
        overflowEllipsis
        style={{
          fontFamily: "Noto Sans KR",
        }}
      >
        {artwork.title}
      </Text>
    </Link>
  )
}

const LocationLine = ({ artwork }) => {
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
        }}
      >
        {artwork.location}
      </Text>
    </Link>
  )
}

const CollectionLine = ({ artwork }) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "text" as TextVariant,
      color: "black60",
      fontWeight: "normal",
    },
    v3: {
      variant: "xs" as TextVariant,
      color: "black100",
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
        {artwork.collections}
      </Text>
    </Link>
  )
}

export const DetailsFragmentContainer = ({ artwork }) => {
  return (
    <>
      <CollectorLine artwork={artwork} />
      <LocationLine artwork={artwork} />
      <CollectionLine artwork={artwork} />
    </>
  )
}
