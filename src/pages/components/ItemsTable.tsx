import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Checkbox } from '@chakra-ui/react'
import { useQueryClient, useQuery } from 'react-query'
import { FC } from 'react'

import api from '@/services/api'
import { Item } from '@/types'
import { ItemsTableRow } from './ItemsTableRow'

interface IProps {}

export const ItemsTable:FC<IProps> = (props) => {
  
  const queryClient = useQueryClient()
  
  const { data: items, isLoading } = useQuery<Item[]>("items", async () => {
    const response = await api.get("/items")
    return response.data
  }, {
    staleTime: 1000 * 60, // 60s
    refetchOnWindowFocus: false
  })
  
  return (
    <TableContainer backdropFilter="blur(2px)" h="100%" color="#fff" px={2}>
      <Table size="sm" variant='simple'>
        <Thead>
          <Tr>
            <Th>Qnt</Th>
            <Th>Produto</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody w="100px">
          {
            items?.map((item, index) => {
              return <ItemsTableRow key={index} item={item}/>
            })
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}
