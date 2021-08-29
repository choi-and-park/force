import React from "react"
import {
  Box,
  Flex,
  ProgressDots,
  Spacer,
  FullBleed,
  ShelfNext,
  ShelfPrevious,
  GridColumns,
  Column,
} from "@artsy/palette"
import { GalleriesHeroUnitFragmentContainer } from "./GalleriesHeroUnit"
import { useCursor } from "use-cursor"
import { useRef, useEffect } from "react"
import { GalleriesCarousel } from "./GalleriesCarousel"
import { useSystemContext } from "v2/System"
import { useCallback } from "react"
import { useNextPrevious } from "v2/Utils/Hooks/useNextPrevious"

export const GalleriesHeroUnitsLargeFragmentContainer = ({ heroUnits }) => {
  const {
    index,
    handleNext: onNext,
    handlePrev: onPrev,
    setCursor,
  } = useCursor({ max: heroUnits.length })

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopAutoPlay = () => {
    intervalRef.current && clearInterval(intervalRef.current)
  }

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCursor(prevCursor => prevCursor + 1),
      10000
    )

    return stopAutoPlay
  }, [setCursor])

  const handleNext = useCallback(() => {
    onNext()
    stopAutoPlay()
  }, [onNext])

  const handlePrev = useCallback(() => {
    onPrev()
    stopAutoPlay()
  }, [onPrev])

  const handleClick = (index: number) => {
    setCursor(index)
    stopAutoPlay()
  }

  const { containerRef } = useNextPrevious({
    onNext: handleNext,
    onPrevious: handlePrev,
  })

  return (
    <>
      <div ref={containerRef as any}>
        <GridColumns width="100%">
          <Column span={1}>
            <Flex height="100%" alignItems="center">
              <ShelfPrevious onClick={handlePrev} />
            </Flex>
          </Column>
          <Column span={10}>
            <GalleriesCarousel initialIndex={index}>
              {heroUnits.map((heroUnit, i) => {
                return (
                  <GalleriesHeroUnitFragmentContainer
                    key={i}
                    index={i}
                    heroUnit={heroUnit}
                  />
                )
              })}
            </GalleriesCarousel>
            <Spacer mt={2} />
            <Box flex={1}>
              <ProgressDots
                amount={heroUnits.length}
                activeIndex={index}
                onClick={handleClick}
              />
            </Box>
          </Column>
          <Column span={1}>
            <Flex height="100%" alignItems="center">
              <ShelfNext onClick={handleNext} />
            </Flex>
          </Column>
        </GridColumns>
      </div>
    </>
  )
}
