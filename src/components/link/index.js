import React from 'react'

export default function Link({ url }) {
  const HandleClick = (url) => {
    if (String(url).includes(['http', 'https'])) {
      window.open(url, '_blank')
    } else {
      window.location.href = url
    }
  }

  return (
    <button className="btn" onClick={() => HandleClick(url)}>
      Explore more
    </button>
  )
}
