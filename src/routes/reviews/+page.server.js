export async function load({ fetch }) {
	const response = await fetch('api/reviews')

  const reviews = await response.json()

  return { reviews }
}
