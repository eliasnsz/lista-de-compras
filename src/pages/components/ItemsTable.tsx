import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Checkbox, Text, Center } from '@chakra-ui/react'
import { useQueryClient, useQuery } from 'react-query'
import { Item } from '@/types'
import { FC, useState } from 'react'

// import ItemsTableRow from './ItemsTableRow'
import api from '@/services/api'

interface IProps {}

const ItemsTable:FC<IProps> = (props) => {
  
  const { data: items, isLoading } = useQuery<Item[]>("items", async () => {
    const response = await api.get("/items")
    return response.data
  }, {
    staleTime: 1000 * 60, // 60s
    refetchOnWindowFocus: false
  })

  if (!items?.length) {
    return (
      <Center w="100%" h="100%">
        <Text color="#9a9a9a">Nenhum item encontrado</Text>
      </Center>
    )
  }
  
  return (
    <TableContainer backdropFilter="blur(2px)" h="100%" color="#fff" px={2}>
      <Table size="sm" variant='simple'>
        <Thead>
          <Tr>
            <Th>Qnt</Th>
            <Th>Produto</Th>
            <Th>Checagem</Th>
          </Tr>
        </Thead>
        <Tbody>
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

function ItemsTableRow({ item }: { item: Item}) {

  const [isChecked, setIsChecked] = useState(item?.isChecked)

  const queryClient = useQueryClient()

  const handleToggleCheck = async () => {
    await api.put("/items", { id: item?._id.toString() })
    queryClient.invalidateQueries("items")
  }
  
  return (
    <Tr 
      transition=".2s ease"
      bgColor={ isChecked ? "green.500" : "transparent" }
      onClick={() => {setIsChecked(state => !state), handleToggleCheck()}}
    >
      <Td>{item?.quantity} {item?.unit !== "un" && item?.unit}</Td>
      <Td>{item?.name}</Td>
      <Td isNumeric>
        <Checkbox 
          size="lg" 
          colorScheme="green" 
          isChecked={isChecked}
          onChange={() => {setIsChecked(state => !state), handleToggleCheck()}}
        />
      </Td>
    </Tr>
  )
}

export default ItemsTable