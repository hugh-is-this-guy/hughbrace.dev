export async function load({ fetch }) {
  const projectResponse = await fetch('api/projects?count=3')
  const projects = await projectResponse.json()

  const reviewsResponse = await fetch('api/reviews?count=5')
  const reviews = await reviewsResponse.json()

  return { projects, reviews }
}