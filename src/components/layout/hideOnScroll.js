import * as React from "react"
import { Slide, useScrollTrigger } from "@mui/material"

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
export default HideOnScroll