import { Stack } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const DefaultContainer:FC<IProps> = ({ children }) => {
  return (
    <Stack 
      pb={4}
      m="auto"
      h="100vh"
      maxW="2xl" 
      justify="space-between"
      bgAttachment="fixed"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="local"
      backgroundImage="url('wallpaper.jpg')"
    >
      {children}  
    </Stack>
  )
}
