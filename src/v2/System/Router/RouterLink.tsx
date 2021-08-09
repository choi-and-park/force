import { Link, LinkPropsSimple, RouterContext } from "found"
import React, { useContext } from "react"
import { BoxProps, boxMixin } from "@artsy/palette"
import styled from "styled-components"
import { compose, ResponsiveValue, system } from "styled-system"
import { useMemo } from "react"

/**
 * Wrapper component around found's <Link> component with a fallback to a normal
 * <a> tag if ouside of a routing context.
 */
export type RouterLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> &
  Omit<LinkPropsSimple, "to"> &
  BoxProps & {
    /**
     * Simplifies `LinkProps#to` to just be a string and handle nulls, which are common
     */
    to: string | null
    textDecoration?: ResponsiveValue<string>
    /** @deprecated Use `textDecoration` */
    noUnderline?: boolean
  }

export const RouterLink: React.FC<RouterLinkProps> = ({
  to,
  noUnderline,
  ...rest
}) => {
  const context = useContext(RouterContext)
  const routes = context?.router?.matcher?.routeConfig ?? []
  const matcher = context?.router?.matcher
  const isSupportedInRouter = useMemo(
    () => !!matcher?.matchRoutes(routes, to),
    [matcher, routes, to]
  )

  // TODO: Bulk replace
  const deprecated = noUnderline ? { textDecoration: "none" } : {}

  if (isSupportedInRouter) {
    return <RouterAwareLink to={to ?? ""} {...deprecated} {...rest} />
  }

  return <RouterUnawareLink href={to ?? ""} {...deprecated} {...rest} />
}

RouterLink.displayName = "RouterLink"

const textDecoration = system({ textDecoration: true })
const routerLinkMixin = compose(boxMixin, textDecoration)

type RouterLinkMixinProps = BoxProps & {
  textDecoration?: ResponsiveValue<string>
}

export const RouterAwareLink: React.FC<LinkPropsSimple & RouterLinkMixinProps> =
  // TODO: Update styled-components types
  // @ts-ignore
  styled(Link).withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop),
  })`
    ${routerLinkMixin}
  `

export const RouterUnawareLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & RouterLinkMixinProps
> =
  // TODO: Update styled-components types
  // @ts-ignore
  styled.a.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop),
  })`
    ${routerLinkMixin}
  `
