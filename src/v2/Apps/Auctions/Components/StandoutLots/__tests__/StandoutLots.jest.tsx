import React from "react"
import { graphql } from "relay-runtime"
import { setupTestWrapper } from "v2/DevTools/setupTestWrapper"
import { useTracking as baseUseTracking } from "react-tracking"
import { StandoutLotsFragmentContainer } from "../StandoutLots"

jest.mock("react-tracking")
jest.unmock("react-relay")

describe("StandoutLots", () => {
  const useTracking = baseUseTracking as jest.Mock
  const trackEvent = jest.fn()

  const { getWrapper } = setupTestWrapper({
    Component: (props: any) => {
      return <StandoutLotsFragmentContainer viewer={props.viewer} />
    },
    query: graphql`
      query StandoutLots_Test_Query {
        viewer {
          ...StandoutLots_viewer
        }
      }
    `,
  })

  beforeEach(() => {
    useTracking.mockImplementation(() => {
      return {
        trackEvent,
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("guards against null data", () => {
    expect(() =>
      getWrapper({
        SaleArtworksConnection: () => ({
          edges: null,
        }),
      })
    ).not.toThrowError()
  })

  it("does not render if no trending lots", () => {
    const wrapper = getWrapper({
      SaleArtworksConnection: () => ({
        edges: [],
      }),
    })

    expect(wrapper.html()).not.toContain("Works that Artsy curators love")
    expect(wrapper.html()).toContain("No Works To Show")
    expect(wrapper.find("Carousel").length).toBe(0)
    expect(wrapper.find("FillwidthItem").length).toBe(0)
  })

  it("renders the correct components", () => {
    const wrapper = getWrapper()
    expect(wrapper.html()).toContain("Works that Artsy curators love")
    expect(wrapper.find("Carousel")).toBeDefined()
    expect(wrapper.find("FillwidthItem")).toBeDefined()
  })
})
