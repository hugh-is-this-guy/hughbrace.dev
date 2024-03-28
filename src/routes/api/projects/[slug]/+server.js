import { json } from '@sveltejs/kit'

async function getProject(slug) {
	const images = import.meta.glob(`../../../projects/images/*/*.jpg`, {
    eager: true
  })

  let groupedImages = {};

  for (const [path, image] of Object.entries(images)) {
    const slug = path.split('/')[5];

    if (!groupedImages[slug]) {
      groupedImages[slug] = [];
    }

    groupedImages[slug].push(image.default);
  }

	return groupedImages[slug]
}

export async function GET({ params }) {
	const images = await getProject(params.slug)

	return json(images)
}
