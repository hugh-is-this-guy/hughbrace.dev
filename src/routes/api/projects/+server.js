import { json } from '@sveltejs/kit'

async function getProjects(count) {
  let projects = []

	const paths = import.meta.glob('../../projects/documents/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata
			const project = { ...metadata, slug }

      projects.push(project)
		}
	}

	projects = projects
    .sort((first, second) => first.order - second.order)

  if (count) {
    projects = projects.slice(0, count)
  }

	return projects
}

export async function GET({ url }) {
  const count = url.searchParams.get('count')

	const projects = await getProjects(count)

	return json(projects)
}
