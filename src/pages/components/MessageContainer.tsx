import { Stack } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const MessageContainer:FC<IProps> = ({ children }) => {
  return (
    <Stack 
      px={2}
      py={1}
      h="100%" 
      w="100%"
      direction="column-reverse"
    > 
      {children}
    </Stack>
  )
}
