import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="460" rx="3" ry="3" width="280" height="6" /> 
    <circle cx="123" cy="127" r="104" /> 
    <rect x="16" y="275" rx="23" ry="23" width="250" height="18" /> 
    <rect x="18" y="403" rx="17" ry="17" width="116" height="30" /> 
    <rect x="154" y="403" rx="17" ry="17" width="108" height="30" /> 
    <rect x="13" y="307" rx="27" ry="27" width="255" height="73" />
  </ContentLoader>
)

export default Skeleton;