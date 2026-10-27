import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built in {profile.location}
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
