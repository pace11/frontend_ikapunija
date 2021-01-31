import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function LoadingComponent() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-3 col-lg-3 col-xs-12 text-center">
        <BeatLoader color={`#27bebe`} size={20} margin={5} />
      </div>
    </div>
  )
}
