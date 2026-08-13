function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>© {new Date().getFullYear()} Tri-Grid s.r.o.</span>
        <span className="site-footer__divisions">
          Elektrotechnika · Strojírenství · Stavebnictví
        </span>
      </div>
    </footer>
  )
}

export default Footer
