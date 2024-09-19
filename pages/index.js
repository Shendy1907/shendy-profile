import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>shendy | Spotify Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://nyimpen.vercel.app/component/spotfy.css" />
      </Head>
      <div className="container">
        <header>
          <img src="https://files.catbox.moe/giztkh.jpg" alt="Prohttps://files.catbox.moe/giztkh.jpgfile Picture" className="profile-pic" />
          <h1 className="nama">shendy</h1>
          <p className="lokasi">
            <i className="fas fa-globe-asia"></i> Jawa Tengah, Kebumen
          </p>
          <p className="bio">”apa pulaa 🗿”</p>
        </header>

        <section className="spotify-section">
          <h2>The Playlist I Listen To</h2>
          <div className="iframe-container">
            {loading && (
              <div className="loading">
                <i className="fas fa-spinner"></i>
              </div>
            )}
            <iframe
              src="https://open.spotify.com/embed/playlist/7bLo50ZuZS1RXENp1STaRw"
              frameBorder="10"
              allowTransparency="true"
              allow="encrypted-media"
              style={{ display: loading ? 'none' : 'block' }}
            ></iframe>
          </div>
        </section>

        <div className="social-icons">
          <a href="https://github.com/Shendy1907" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://wa.me/62858709665804?text=haloo bng" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com/shendyztp" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://tiktok.com/shendy" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </>
  )
}
