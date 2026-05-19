import { useState } from 'react'
import { ImagePlaceholder } from '@/components/landing/ImagePlaceholder'
import { GALLERY_ITEM_COUNT } from '@/constants/landing'

const VISIBLE_COUNT = 4

export function GallerySection() {
  const [startIndex, setStartIndex] = useState(0)

  const items = Array.from({ length: GALLERY_ITEM_COUNT }, (_, i) => i)

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + GALLERY_ITEM_COUNT) % GALLERY_ITEM_COUNT)
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % GALLERY_ITEM_COUNT)
  }

  const visibleItems = Array.from({ length: VISIBLE_COUNT }, (_, offset) => {
    const index = (startIndex + offset) % GALLERY_ITEM_COUNT
    return items[index]
  })

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="gallery-section__title">
        둘러보기
      </h2>

      <div className="gallery-section__carousel">
        <button
          type="button"
          className="gallery-section__arrow gallery-section__arrow--prev"
          onClick={handlePrev}
          aria-label="이전 이미지"
        >
          ‹
        </button>

        <div className="gallery-section__track">
          {visibleItems.map((item) => (
            <ImagePlaceholder
              key={item}
              variant="square"
              label={`갤러리 이미지 ${item + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="gallery-section__arrow gallery-section__arrow--next"
          onClick={handleNext}
          aria-label="다음 이미지"
        >
          ›
        </button>
      </div>
    </section>
  )
}
