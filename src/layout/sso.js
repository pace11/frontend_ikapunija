import React from 'react'

export default function Sso({ children }) {
  return (
    <div className="body-inner">
      <section
        className="fullscreen"
        style={{
          backgroundImage: `url(${require('../assets/img/2.jpg').default})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflowY: 'scroll',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'fixed',
            backgroundColor: '#27bebe',
            opacity: '0.3',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: '-1',
          }}
        ></div>
        {children}
      </section>
    </div>
  )
}
