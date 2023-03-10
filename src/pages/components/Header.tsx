import { Avatar, Box, Icon, IconButton, Stack, Text } from '@chakra-ui/react'
import React, { Dispatch, FC } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { FaTrash } from "react-icons/fa"

interface IProps {
  idList: string[]
  setIdList: Dispatch<React.SetStateAction<string[]>>
}


const Header:FC<IProps> = ({ idList, setIdList }) => {
  if (idList.length) {
    return (
      <Stack 
        px={4}
        w="100%" 
        zIndex={2}
        h="75px"
        bg="#202020" 
        align="center"
        direction="row"
        justify="space-between"
        boxShadow="0px 5px 10px #00000044"
      >
        <Stack
          spacing={4}
          align="center"
          direction="row"
        >
          <Icon 
            boxSize={5} 
            color="#fff" 
            transition=".2s ease"
            as={AiOutlineArrowLeft}
            onClick={() => setIdList([])}
            _hover={{ cursor: "pointer", color: "#bababa" }}
          />
          <Text
            color="#fff"
          >
            {idList.length}
          </Text>
        </Stack>
        <Icon 
          boxSize={4}
          color="#fff"
          as={FaTrash}
          transition=".2s ease"
          _hover={{ cursor: "pointer", color: "#bababa" }}
        />
      </Stack>
    )
  }
  
  return (
    <Stack 
      px={4}
      w="100%" 
      zIndex={2}
      h="75px"
      bg="#202020" 
      align="center"
      direction="row"
      justify="space-between"
      boxShadow="0px 5px 10px #00000044"
    >
      <Stack
        spacing={4}
        align="center"
        direction="row"
      >
        <Box
          p={1}
          bg="#fff"
          borderRadius="50%"
        >
          <Avatar
            size="sm"
            src='/cart.png'
          />
        </Box>
        <Text
          color="#fff"
        >
          Lista de compras
        </Text>
      </Stack>
      <Icon 
        boxSize={6}
        color="#fff"
        as={BiDotsVerticalRounded}
      />
    </Stack>
  )
}

export default Header