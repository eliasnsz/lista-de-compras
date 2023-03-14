import api from '@/services/api'
import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FC } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useQueryClient } from 'react-query'

interface IProps {
  page: string
}

const DotsMenu:FC<IProps> = ({ page }) => {

  const queryClient = useQueryClient()
  
  const handleDelete = async () => {
    await api.delete("/items")
    queryClient.invalidateQueries("items")
  }
  
  return (
    <Menu>
      <MenuButton
        size="xl"
        color="#fff"
        as={IconButton}
        variant='unstyled'
        aria-label='Options'
        icon={<BiDotsVerticalRounded size="25"/>}
      />
      <MenuList 
        color="#fff"
        border="none"
        bgColor="#292929"
        borderRadius="none" 
      >
        <MenuItem 
          as={Link}
          border="none" 
          bg="transparent" 
          href={ page === "main" ? "/checklist" : "/"}
          _hover={{ bgColor: "#363636"}}
        >
          { page === "main" ? "Ir para a checagem" : "Ir para a listagem"}
        </MenuItem>
        <MenuItem 
          border="none" 
          bg="transparent" 
          onClick={handleDelete}
          _hover={{ bgColor: "#363636"}}
        >
          Limpar lista
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default DotsMenu