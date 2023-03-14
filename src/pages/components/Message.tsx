  import { Box, Icon, Stack, Text } from '@chakra-ui/react'
  import { FC, ReactNode } from 'react'
  import { BsCheckAll } from "react-icons/bs"
  
  import moment from 'moment'

  interface IProps {
    created_at: string
    children: ReactNode
  }

  const Message:FC<IProps> = ({ children, created_at }) => {

    return (
      <Stack
        w="100%"
        pos="relative"
      >
        <Box
          py={1}
          px={3}
          maxW="90%"
          bg="#075E54"
          color="#fff"
          w="fit-content"
          borderRadius="lg"
          alignSelf="flex-end"
        >
          <Stack 
            spacing={0} 
            direction="row" 
            justify="flex-end"
          >
            <Box 
              textAlign="left"
            >
              {children}
            </Box>
            <Text
              pl={1}
              fontSize="xs"
              color="#a9a9a9"
              alignSelf="flex-end"
            >
              {moment(created_at).format("HH:mm")}
            </Text>
            <Icon 
              as={BsCheckAll}
              boxSize={5} 
              color="#a9a9a9" 
              alignSelf="flex-end" 
            />
          </Stack>
        </Box>
        <Box
          h="100%"
          w="100%"
          bottom={0}
          pos="absolute"
        />
      </Stack>
    )
  }

  export default Message