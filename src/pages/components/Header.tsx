import { Avatar, Box, Icon, IconButton, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi"

interface IProps {}


const Header:FC<IProps> = (props) => {
  return (
    <Stack 
      px={4}
      w="100%" 
      h="75px"
      bg="#202020" 
      align="center"
      direction="row"
      justify="space-between"
      boxShadow="0px 5px 10px #00000055"
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