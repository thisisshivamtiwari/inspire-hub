import { motion } from 'framer-motion'
import { Gallery, PageBanner, Pills, Section, SectionHead } from '../components/sections/IHSections'
import { IMAGES } from '../lib/site'

const YOUTH_GALLERY = [
  { src: IMAGES.den, alt: 'Shelter build', cap: 'Shelter build' },
  { src: IMAGES.climbing, alt: 'Up high', cap: 'Up high' },
  { src: IMAGES.teambuilding, alt: 'Catapult', cap: 'Catapult' },
  { src: IMAGES.grounds, alt: 'Outdoor chess', cap: 'Outdoor chess' },
  { src: IMAGES.harnesses, alt: 'Ready to go', cap: 'Ready to go' },
  { src: IMAGES.campfire, alt: 'Fireside', cap: 'Fireside' },
  { src: IMAGES.centre, alt: 'The grounds', cap: 'The grounds' },
  { src: IMAGES.classroom, alt: 'Our space', cap: 'Our space' },
]

const POSTS = [
  { image: IMAGES.climbing, cat: 'Voice', title: 'What belonging means to me' },
  { image: IMAGES.campfire, cat: 'Wellbeing', title: 'How the outdoors helps me switch off' },
  { image: IMAGES.teambuilding, cat: 'Leadership', title: 'Leading my first workshop' },
]

export const YouthZonePage = () => (
  <>
    <PageBanner
      title="Youth Zone"
      subtitle="A space for young people to share their voice, showcase their creativity and celebrate how far they've come."
      breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Youth Zone' }]}
    />

    <Section>
      <SectionHead
        eyebrow="Creative gallery"
        title="Made by young people"
        body="Showcasing youth artwork, photography and creative projects."
      />
      <Gallery images={YOUTH_GALLERY} />
    </Section>

    <Section className="section-mist">
      <SectionHead eyebrow="Youth blog" title="A platform for young voices" />
      <div className="grid gap-6 md:grid-cols-3">
        {POSTS.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="post-card"
          >
            <div className="post-thumb">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
              <span className="post-cat">{post.cat}</span>
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-grey">Recent</p>
              <h3 className="mt-1 font-display text-lg font-bold">{post.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>

    <Section>
      <SectionHead
        eyebrow="Achievements wall"
        title="Celebrating milestones"
        body="Awards, milestones and moments of personal growth across our community."
      />
      <Pills
        items={[
          '🏆 Youth Leader of the Year',
          '🎉 First public performance',
          '⭐ 100 sessions attended',
          '🎓 Peer mentor qualified',
          '🥇 Football tournament winners',
        ]}
      />
    </Section>
  </>
)
