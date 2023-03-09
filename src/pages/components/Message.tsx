import { Box } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const Message:FC<IProps> = ({ children }) => {
  return (
    <Box 
      py={1}
      px={3}
      bg="#075E54"
      color="#fff" 
      alignSelf="end"
      w="fit-content"
      maxW="90%" 
      borderRadius="xl"
    >
      {children}
    </Box>
  )
}

export default Message