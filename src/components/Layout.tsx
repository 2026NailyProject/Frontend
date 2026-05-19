import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="layout__header">
        <a href="/" className="layout__brand">
          Naily
        </a>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  )
}
