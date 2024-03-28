import { json } from '@sveltejs/kit'

async function getReviews() {
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

	reviews = reviews.sort((first, second) => first.order - second.order)

	return reviews
}

export async function GET() {
	const reviews = await getReviews()

	return json(reviews)
}
