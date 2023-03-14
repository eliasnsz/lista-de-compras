import api from '@/services/api'
import { Item } from '@/types'
import { Tr, Td, Checkbox } from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

interface IProps {
  item: Item
}

const ItemsTableRow:FC<IProps> = ({ item }) => {

  const [isChecked, setIsChecked] = useState(item?.isChecked)

  const queryClient = useQueryClient()

  const handleToggleCheck = async () => {
    await api.put("/items", { id: item._id.toString() })
    queryClient.invalidateQueries("items")
  }
  
  return (
    <Tr 
      onClick={() => {setIsChecked(state => !state), handleToggleCheck()}}
      transition=".2s ease"
      bgColor={ isChecked ? "green.500" : "transparent" }
    >
      <Td>{item.quantity} {item.unit !== "un" && item.unit}</Td>
      <Td>{item.name}</Td>
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

export default ItemsTableRow