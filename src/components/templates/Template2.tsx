import React from 'react'

interface Template2Props extends React.PropsWithChildren{}

function Template2({ children }: Template2Props) {
  return (
    <div>
      <header>this is header</header>

      <main>{children}</main>

      <footer>this is footer</footer>
    </div>
  )
}

export default Template2