import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import FeaturedProject from '../components/FeaturedProject'
import { FeaturedProjects } from '../components/FeaturedProjects'
import investments from '../data/investments'

export async function getStaticProps() {
  const meta = {
    title: 'Investing // Bhuvan Kandhi',
    description:
      "<strong>Self investing</strong> is how I cope up sometimes, I love investing in my hobbies and personal traits because they bring out the best in me, help me learn new things, tackle challenges with a smile, and connect with others along the way <strong>taking break is must</strong>",
    tagline: 'Growth. Hobbies. Time Waste.',
    image: '/static/images/projects-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function Investing(props) {
  const { title, description, image } = props

  const renderAll = () => {
    return investments.map((investment, index) => {
      return <FeaturedProject key={index} project={investment} />
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/investing" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: description }} />

      <h2>What I invest in</h2>
      <p>
      In my free time, I love indulging in my favorite web series and movies, which allow me to escape into different worlds
      and enjoy captivating stories. Running is another passion of mine; it not only keeps me fit but also clears 
      my mind and boosts my mood. Additionally, I find joy in reading comics, as they offer a perfect blend of art 
      and storytelling, sparking my imagination and providing a fun way to unwind. These hobbies keep me balanced, 
      energized, and inspired!
      </p>

      <h2>What i gain</h2>
      <p>self healing with...</p>
      <ul>
        <li>
          <strong>Relaxation and Enjoyment</strong> - these hobbies provide you with enjoyment and an escape, allowing you to unwind from daily stress.
        </li>
        <li>
          <strong>Physical and Mental Well-being</strong> - commitment to physical fitness and mental clarity, demonstrating a balanced lifestyle.
        </li>
        <li>
          <strong>Imagination and Creativity</strong> - Reading comics showcases your appreciation for art and storytelling, 
          reflecting your creative side and ability to think outside the box(try manga and manhwa).
        </li>
        <li>
          <strong>Balance</strong> - these hobbies help you maintain a balanced life, keeping you energized and inspired.
        </li>
      </ul>

      {/*<h2>Who took my money</h2>
      <p>I've been grateful to work with these companies as an investor.</p>
      <FeaturedProjects>{renderAll()}</FeaturedProjects>*/}

      <h2>Let's chat</h2>
      <p>Hit me (Mail) up if what you read here resonates with you.</p>
    </>
  )
}

Investing.Layout = Base

export default Investing
