import React from "react"
import {
  Box,
  Column,
  Flex,
  GridColumns,
  Image,
  Spacer,
  Text,
  TextVariant,
  useThemeConfig,
  Input,
  Button,
} from "@artsy/palette"
import { resized } from "v2/Utils/resized"
import { DownloadAppBadge } from "../DownloadAppBadge"
import { ContextModule } from "@artsy/cohesion"
import {
  Device,
  DOWNLOAD_APP_URLS,
  useDeviceDetection,
} from "v2/Utils/Hooks/useDeviceDetection"
import { Media } from "v2/Utils/Responsive"

const DESKTOP_COVER_IMAGE = resized(
  // "https://images.ctfassets.net/3s5io6mnxfqz/1DAWBU71jP7gTImLk3NZZ2/9e859d5e5857e29ab4014c85dfb5d479/AdobeStock_120763372.jpeg",
  "https://luxgallery.co.uk/wp-content/uploads/2021/06/Photo-art.jpeg",
  // "https://files.artsy.net/images/footer-desktop.jpg",
  { width: 1220, quality: 50 }
)

const MOBILE_COVER_IMAGE = resized(
  "https://files.artsy.net/images/footer-mobile.jpg",
  { width: 725, quality: 50 }
)

const OVERLAY_IMAGE = resized(
  "https://files.artsy.net/images/footer-phone-8.png",
  { width: 289, height: 244, quality: 50 }
)

export const FooterDownloadAppBanner = () => {
  const { device, downloadAppUrl } = useDeviceDetection()

  const tokens = useThemeConfig({
    v2: { title: "largeTitle" as TextVariant },
    v3: { title: "xl" as TextVariant },
  })

  return (
    <GridColumns borderBottom="1px solid" borderColor="black10">
      <Column
        span={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        order={[2, 1]}
        px={2}
        py={[6, 2]}
      >
        <Text
          variant={tokens.title}
          textAlign="center"
          mb={1}
          style={{
            whiteSpace: "pre-line",
            fontFamily: "Noto Sans KR",
          }}
        >
          누아트(Nu art) <br />
          어플리케이션 사전 예약!
        </Text>
        <Text
          variant="xs"
          textAlign="center"
          mb={1}
          style={{
            whiteSpace: "pre-line",
            fontFamily: "Noto Sans KR",
          }}
        >
          대한민국의 새로운 미술시장을 여는 <br />
          누아트의 어플리케이션을 미리 만나보세요.
        </Text>

        <Spacer mt={2} />
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          style={{
            whiteSpace: "pre-line",
            // fontFamily: "Gowun Dodum",
            fontFamily: "Noto Sans KR",
          }}
        >
          <Input
            style={{
              whiteSpace: "pre-line",
              // fontFamily: "Gowun Dodum",
              fontFamily: "Noto Sans KR",
              fontSize: 13,
            }}
            width="90%"
            height="35px"
            placeholder="이메일을 적어주세요."
          />
          <Button variant="primaryBlack" size="small" m={0.5}>
            사전예약
          </Button>
        </Flex>
        {/* <Spacer mt={7} />
        {device === Device.Unknown ? (
          <Flex flexWrap="wrap" justifyContent="center">
            <DownloadAppBadge
              contextModule={ContextModule.footer}
              device={Device.iPhone}
              // downloadAppUrl={DOWNLOAD_APP_URLS[Device.iPhone]}
              downloadAppUrl=""
              mx={0.5}
              mb={0.5}
            />

            <DownloadAppBadge
              contextModule={ContextModule.footer}
              device={Device.Android}
              // downloadAppUrl={DOWNLOAD_APP_URLS[Device.Android]}
              downloadAppUrl=""
              mx={0.5}
            />
          </Flex>
        ) : (
          <DownloadAppBadge
            contextModule={ContextModule.footer}
            device={device}
            downloadAppUrl=""
            // downloadAppUrl={downloadAppUrl}
          />
        )} */}
      </Column>

      <Column span={6} position="relative" order={[1, 2]}>
        <Media at="xs">
          <Image
            src={MOBILE_COVER_IMAGE.src}
            srcSet={MOBILE_COVER_IMAGE.srcSet}
            height={320}
            width="100%"
            lazyLoad
            alt=""
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </Media>

        <Media greaterThan="xs">
          <Image
            src={DESKTOP_COVER_IMAGE.src}
            srcSet={DESKTOP_COVER_IMAGE.srcSet}
            height={320}
            width="100%"
            lazyLoad
            alt=""
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {/* <Box position="absolute" bottom={120} right={450}>
           
          </Box> */}

          <Box position="absolute" bottom={0} right={45}>
            <Image
              width={289}
              height={244}
              src={OVERLAY_IMAGE.src}
              srcSet={OVERLAY_IMAGE.srcSet}
              style={{ display: "block" }}
              // TODO: Unable to use lazyLoad due to forced bg color
            />
          </Box>
        </Media>
      </Column>
    </GridColumns>
  )
}
