import React from 'react'

export default function ImageProfile({ imageUrl, onChange }) {
  const imageFile = React.useRef(null)

  const HandleClick = () => {
    imageFile.current.click()
  }

  return (
    <div
      style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        backgroundImage: `url(${
          imageUrl
            ? imageUrl
            : 'https://res.cloudinary.com/code5/image/upload/v1589793836/dialogue/no-account_ks5tkz.png'
        })`,
        backgroundSize: 'cover',
        backgroundColor: '#e5e5e5',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        overflow: 'hidden',
        zIndex: 1,
      }}
      onClick={HandleClick}
    >
      <input
        type="file"
        ref={imageFile}
        accept="image/*"
        onChange={onChange}
        hidden
      />
    </div>
  )
}
