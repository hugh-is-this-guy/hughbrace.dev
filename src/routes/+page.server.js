export async function load({ fetch }) {
  const response = await fetch('api/projects?count=3', { count: 2 })

  const projects = await response.json()

  return { projects }
}