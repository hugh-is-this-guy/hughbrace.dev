import { json } from '@sveltejs/kit'

async function getProjects() {
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

	projects = projects.sort((first, second) => first.order - second.order)

	return projects
}

export async function GET() {
	const projects = await getProjects()

	return json(projects)
}
