import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './public/imgs/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://zippbox-docs.vercel.app' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
      <title>{frontMatter.title || 'ZippyBox Docs'}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'ZippyBox Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Your go-to resource for comprehensive guides, API documentation, and troubleshooting solutions for seamless navigation and optimization of ZippyBox services.'}
        />
      </>
    )
  },
  logo: <Image src={Logo} alt="ZippyBox Logo" width={100} height={100}/>,
  docsRepositoryBase: 'https://github.com/Hyperce-internal-demos/zippybox-docs',
  footer: {
    text: 'ZippyBox Docs',
  },
  editLink: {
    component: null, 
  },
  feedback: {
    content: null, 
  },
}

export default config;
