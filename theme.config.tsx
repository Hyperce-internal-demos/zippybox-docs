import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './public/imgs/logo.png'
import Image from 'next/image'

const config: DocsThemeConfig = {
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
