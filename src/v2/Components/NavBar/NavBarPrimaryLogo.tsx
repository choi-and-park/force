import React from "react"
// import { ArtsyMarkIcon } from "@artsy/palette"
import styled from "styled-components"
import { RouterLink, RouterLinkProps } from "v2/System/Router/RouterLink"
import { themeGet } from "@styled-system/theme-get"
import NuArtIcon from "./nuart_logo.svg"

export const NavBarPrimaryLogo: React.FC<Omit<
  RouterLinkProps,
  "to" | "ref"
>> = props => {
  return (
    <HitArea to="/" {...props}>
      {/* <NuArtIcon width={80} height={30} /> */}
      <NuArtIcon width={80} height={30} />
    </HitArea>
  )
}

NavBarPrimaryLogo.displayName = "NavBarPrimaryLogo"

const HitArea = styled(RouterLink)`
  display: flex;
  align-items: center;

  > svg {
    box-sizing: content-box;
  }

  &:focus {
    outline: none;

    > svg {
      fill: ${themeGet("colors.brand")};
    }
  }
`
