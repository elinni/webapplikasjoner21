import { people } from '../../../datalist'

export default function personHandler({ query: { id } }, res) {
  const filtered = people.filter((p) => p.id === id)

  // bruker med id eksisterer statuskode 200, hvis ikke - viser feilmelding og status 404
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
