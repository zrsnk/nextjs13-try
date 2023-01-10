import { NextApiRequest, NextApiResponse } from 'next'
import { posts } from './mocks'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  res.status(200).json(posts)
}
