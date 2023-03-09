import type { NextApiRequest, NextApiResponse } from 'next'

import models from '@/models'
import { Item } from '@/types'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
    const findedItems = await models.getAllItems()
    return res.status(200).json(findedItems)
  } 
  
  if (req.method === 'POST') {
    const { items }: { items: Item[] } = req.body 
    await models.insertManyItems(items)
    return res.status(201).end();
  }

  if (req.method === 'PUT') {
    const { id }: { id: string } = req.body
    await models.updateOneItem(id)
    return res.status(204).end();
  }

  if (req.method === 'DELETE') {
    const { id }: { id: string } = req.body
    await models.deleteOneItem(id)
    return res.status(204).end();
  }
  
}

