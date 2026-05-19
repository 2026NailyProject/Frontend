import { FeatureSection } from '@/components/landing/FeatureSection'
import { Footer } from '@/components/landing/Footer'
import { GallerySection } from '@/components/landing/GallerySection'
import { HeroPanel } from '@/components/landing/HeroPanel'
import { FEATURES } from '@/constants/landing'
import '@/styles/landing.css'

export function HomePage() {
  return (
    <div className="landing">
      <HeroPanel variant="top" showHeader />
      <div className="landing__features">
        {FEATURES.map((feature) => (
          <FeatureSection key={feature.title} {...feature} />
        ))}
      </div>
      <GallerySection />
      <div className="landing-bottom">
        <HeroPanel variant="bottom" showTitle={false} />
        <Footer />
      </div>
    </div>
  )
}
