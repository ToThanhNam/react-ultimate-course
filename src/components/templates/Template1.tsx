import React from 'react'

interface Template1Props extends React.PropsWithChildren{}

function Template1({ children }: Template1Props) {
  return (
    <div>
      <header>this is header</header>

      <main>{children}</main>
    </div>
  )
}

export default Template1