import { Phudu, Roboto_Mono } from 'next/font/google'

export const phudu = Phudu({
  subsets: ['latin'],
  variable: '--font-phudu',
  display: 'swap',
  adjustFontFallback: false,
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap'
})
