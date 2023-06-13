import React from 'react'

const Header = ({title}) => {
  return (
    <div className="p-2">
    <header className="border border-secondary rounded-top">
      <h1 className="text-center text-primary">{title}</h1>
      <p className="text-center text-muted">
        <em>React concept demos in one place</em>
      </p>
    </header>
    </div>
  )
}

export default Header