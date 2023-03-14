import { Avatar, Box, Stack, Text } from '@chakra-ui/react'
import { FC } from 'react'
import DotsMenu from './DotsMenu'

interface IProps {
  page: string
}

const Header:FC<IProps> = ({ page }) => {
  
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
      <DotsMenu page={page}/>
    </Stack>
  )
}

export default Header