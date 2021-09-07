import React from "react"
import styled from "styled-components"
import { Media } from "v2/Utils/Responsive"
import {
  ArtsyMarkIcon,
  Box,
  boxMixin,
  BoxProps,
  Column,
  FacebookIcon,
  Flex,
  GridColumns,
  InstagramIcon,
  Separator,
  Text,
  TextVariant,
  TwitterIcon,
  useThemeConfig,
  WeChatIcon,
} from "@artsy/palette"
import { CCPARequest } from "../CCPARequest"
import { FooterDownloadAppBanner } from "./FooterDownloadAppBanner"
import { RouterLink, RouterLinkProps } from "v2/System/Router/RouterLink"

interface FooterProps extends BoxProps {}

export const Footer: React.FC<FooterProps> = props => {
  const tokens = useThemeConfig({
    v2: {
      header: "mediumText" as TextVariant,
      body: "text" as TextVariant,
      pt: 2,
      pb: 4,
    },
    v3: {
      header: "md" as TextVariant,
      body: "sm" as TextVariant,
      pt: 4,
      pb: 6,
    },
  })

  return (
    <Box
      id="download-app-banner"
      mt={6}
      borderTop="1px solid"
      borderColor="black10"
      {...props}
    >
      <FooterDownloadAppBanner />

      <footer>
        <GridColumns pt={tokens.pt} pb={tokens.pb} gridRowGap={[4, 0]}>
          <Column span={4}>
            <Text
              variant={tokens.header}
              fontWeight="bold"
              mb={2}
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              About us
            </Text>

            <Text
              variant={tokens.body}
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              <FooterLink my={2} to="/">
                About
              </FooterLink>

              <FooterLink my={2} to="/">
                Press
              </FooterLink>

              <FooterLink mt={2} to="/">
                Contact
              </FooterLink>
            </Text>
          </Column>

          <Column span={4}>
            <Text
              variant={tokens.header}
              fontWeight="bold"
              mb={2}
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              Partnerships
            </Text>

            <Text
              variant={tokens.body}
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              <FooterLink my={2} to="/">
                Galleries
              </FooterLink>

              <FooterLink my={2} to="/">
                Artists
              </FooterLink>

              <FooterLink my={2} to="/">
                Collectors
              </FooterLink>

              <FooterLink mt={2} to="/">
                Auctions
              </FooterLink>
            </Text>
          </Column>

          <Column span={4} wrap>
            <Text
              variant={tokens.header}
              fontWeight="bold"
              mb={2}
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              Support
            </Text>

            <Text
              variant={tokens.body}
              style={{
                fontFamily: "Noto Sans KR",
              }}
            >
              <FooterLink my={2} to="/">
                Help Centre
              </FooterLink>

              <FooterLink mt={2} to="/">
                Terms of Service
              </FooterLink>

              <FooterLink mt={2} to="/">
                Privacy Policy
              </FooterLink>
            </Text>
          </Column>

          <Column span={12} display={["flex", "none"]} flexWrap="wrap">
            <PolicyLinks />
          </Column>
        </GridColumns>

        <Separator />

        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          m="auto"
          py={2}
        >
          {/* <Media at="xs">
            <Flex flexShrink={0}>
              <ArtsyMarkIcon title="Artsy" width={20} height={20} mr={2} />
            </Flex>
          </Media> */}

          <Media greaterThan="xs">
            <Flex alignItems="center">
              {/* <Flex flexShrink={0}>
                <ArtsyMarkIcon title="Artsy" width={30} height={30} mr={2} />
              </Flex> */}

              <Flex flexDirection="row">
                <PolicyLinks />
              </Flex>
            </Flex>
          </Media>

          <Flex alignItems="center">
            {/* <WeChat>
              <WeChatIcon width={20} height={20} mr={2} />
            </WeChat> */}

            <FooterLink to="https://twitter.com/">
              <TwitterIcon width={20} height={20} mr={2} />
            </FooterLink>

            <FooterLink to="https://www.facebook.com/">
              <FacebookIcon width={20} height={20} mr={2} />
            </FooterLink>

            <FooterLink to="https://www.instagram.com/">
              <InstagramIcon width={20} height={20} />
            </FooterLink>
          </Flex>
        </Flex>
      </footer>
    </Box>
  )
}

const WeChat = styled(Flex)`
  > a {
    display: flex;
  }
`

const PolicyLinks = () => {
  const tokens = useThemeConfig({
    v2: {
      variant: "caption" as TextVariant,
    },
    v3: {
      variant: "xs" as TextVariant,
    },
  })

  return (
    <Text
      variant={tokens.variant}
      color="black60"
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      style={{
        fontFamily: "Noto Sans KR",
      }}
    >
      <Flex mr={1}>© {new Date().getFullYear()} Nuart</Flex>

      <FooterLink color="black60" mr={1} to="/">
        Terms of Use
      </FooterLink>

      <FooterLink color="black60" mr={1} to="/">
        Privacy Policy
      </FooterLink>

      <FooterLink color="black60" mr={1} to="/">
        Security
      </FooterLink>

      <FooterLink color="black60" mr={1} to="/">
        Conditions of Sale
      </FooterLink>

      <FooterLink color="black60" mr={1} to="/">
        ACA Seller’s Agreement
      </FooterLink>

      <Flex mr={1}>
        <CCPARequest />
      </Flex>
    </Text>
  )
}

export const FooterLink = styled(RouterLink)<RouterLinkProps & BoxProps>`
  display: flex;
  text-decoration: none;
  white-space: nowrap;
  ${boxMixin}
`

FooterLink.displayName = "FooterLink"
