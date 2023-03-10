import { Stack } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const DefaultContainer:FC<IProps> = ({ children }) => {
  return (
    <Stack 
      pb={4}
      m="auto"
      h="100vh"
      maxW="2xl" 
      spacing={0}
      bgAttachment="fixed"
      backgroundSize="cover"
      justify="space-between"
      backgroundPosition="center"
      backgroundAttachment="local"
      backgroundImage="url('wallpaper.jpg')"
    >
      {children}  
    </Stack>
  )
}

export default DefaultContainer