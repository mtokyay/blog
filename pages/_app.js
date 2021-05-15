import 'tailwindcss/tailwind.css'
import Header from '../components/header'
import '../styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-jcguqhb5.eu.auth0.com"
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-700">
        <Header />
        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  )
}

export default MyApp
