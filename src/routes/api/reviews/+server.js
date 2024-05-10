import { json } from '@sveltejs/kit'

async function getReviews(count) {
  let reviews = []

	const paths = import.meta.glob('../../reviews/documents/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata
			const review = { ...metadata, slug }

      reviews.push(review)
		}
	}

	reviews = reviews
    .sort((first, second) => first.order - second.order)

  if (count) {
    reviews = reviews.slice(0, count)
  }

	return reviews
}

export async function GET({ url }) {
  const count = url.searchParams.get('count')

	const reviews = await getReviews(count)

	return json(reviews)
}
