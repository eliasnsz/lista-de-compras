import { Box, Icon, Stack, Text } from '@chakra-ui/react'
import moment from 'moment'
import React, { FC, ReactNode } from 'react'
import { BsCheckAll } from "react-icons/bs"

interface IProps {
  children: ReactNode
  created_at: string
}


const Message:FC<IProps> = ({ children, created_at }) => {
  return (
    <Box 
      py={1}
      px={3}
      maxW="90%" 
      bg="#075E54"
      color="#fff"  
      w="fit-content"
      borderRadius="xl"
      alignSelf="flex-end"
    >
      <Stack spacing={0} direction="row" justify="flex-end">
        <Box textAlign="left">{children}</Box>
        <Text 
          pl={1}  
          color="#a9a9a9"
          fontSize="xs" 
          alignSelf="flex-end"
        >
          {moment(created_at).format("HH:MM")}
        </Text>
        <Icon boxSize={5} color="#a9a9a9" alignSelf="flex-end" as={BsCheckAll}/>
      </Stack>
    </Box>
  )
}

export default Message