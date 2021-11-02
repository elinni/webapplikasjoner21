import { people } from '../../../datalist'

export default function handler(req, res) {
  res.status(200).json(people)
}
