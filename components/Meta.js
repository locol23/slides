import React from 'react'

export const Meta = ({ title, url, description }) => {
  const imageUrl = `${url}/assets/screenshot.png`

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
