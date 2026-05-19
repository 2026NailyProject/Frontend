export function Header() {
  return (
    <header className="landing-header">
      <div className="landing-header__inner">
        <a href="/" className="landing-header__logo">
          Naily
        </a>
        <nav className="landing-header__nav" aria-label="주요 메뉴">
          <a href="/login" className="landing-header__login">
            로그인
          </a>
          <a href="/signup" className="landing-header__signup">
            무료로 시작하기
          </a>
        </nav>
      </div>
    </header>
  )
}
