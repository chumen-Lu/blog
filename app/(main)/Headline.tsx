'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { BulbIcon, CometIcon, DesignerIcon } from '~/assets'
import { SocialLink } from '~/components/links/SocialLink'

function Designer() {
  return (
    <span className="group relative bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      <span className="group">
        <DesignerIcon className="ml-1 mr-2 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
        <span className="ml-1 mr-4">设计师</span>
      </span>
    </span>
  )
}

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>开发者
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}



function OCD() {
  return (
    <span className="group inline-flex items-center">
      <CometIcon className="mr-2 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>追求完美</span>
    </span>
  )
}

function Founder() {
  return (
    <span className="group inline-flex items-center">
      <BulbIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      <span>疯狂学习</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />• <Designer />
        <div className="mt-4">
          <OCD /> • <Founder />
        </div>
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          🔖 <b>Hi，我是Kuzen！</b>
          是从设计转码的前端开发者致力于成为一名优秀的前端设计师,我热爱代码和设计🔥，喜欢创新和探索新事物，期待和大家进行有趣的交流📮。
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
       <SocialLink
          href="https://twitter.com/kuzenLu"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://www.youtube.com/@kuzen26"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink href="https://github.com/chumen-Lu" aria-label="我的 GitHub" platform="github" />
        <SocialLink href="https://t.me/kuzen26" aria-label="我的 Telegram" platform="telegram" />
        <SocialLink
          href="https://space.bilibili.com/320648841"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="mailto:xiaokundaa@gmail.com"
          aria-label="我的邮箱"
          platform="mail"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
      </motion.div>
    </div>
  )
}
