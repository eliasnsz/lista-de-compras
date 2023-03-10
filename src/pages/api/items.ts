import type { NextApiRequest, NextApiResponse } from 'next'

import models from '@/models'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
    const findedItems = await models.getAllItems()
    return res.status(200).json(findedItems)
  } 
  
  if (req.method === 'POST') {
    const { item } = req.body 
    await models.insertOneItem(item)
    return res.status(201).end();
  }

  if (req.method === 'PUT') {
    const { id }: { id: string } = req.body
    await models.updateOneItem(id)
    return res.status(204).end();
  }

  if (req.method === 'DELETE') {
    const { ids }: { ids: string[] } = req.body
    await models.deleteManyItems(ids)
    return res.status(204).end();
  }
  
}

