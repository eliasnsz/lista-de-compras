import { Box, Button, Center, Icon, IconButton, Input, Stack } from '@chakra-ui/react'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { IoSendSharp } from 'react-icons/io5'
import { MdEmojiEmotions } from 'react-icons/md'
 
interface IProps {
  text: string,
  setText: Dispatch<SetStateAction<string>>
  isAllMatch: boolean
  handleSubmit: () => void
}

export const MessageInput:FC<IProps> = ({ setText, text, isAllMatch, handleSubmit }) => {

  return (
    <Center 
      w="100%" 
    >
      <Stack 
        w="96%"
        align="center" 
        direction="row" 
      >
        <Stack 
          px={2}
          w={["90%", "100%"]} 
          h="45px" 
          bg="#292929"
          align="center"
          direction="row"
          borderRadius={40} 
        >
          <Icon 
            boxSize={7}
            color="#707070"
            as={MdEmojiEmotions}
            transition=".2s ease"
            _hover={{ color: '#505050' }}
          />
          <Input
            type="text"
            color="#fff"
            value={text}
            variant="unstyled"
            placeholder="Mensagem"
            onChange={(e) => setText(e.target.value)}
          />
        </Stack>
        <IconButton 
          p={3}
          w="45px"
          h="45px"
          color="#fff"
          as={IoSendSharp}
          borderRadius={50}
          bgColor="#128C7E"
          aria-label='send-button' 
          isDisabled={!isAllMatch}
          _hover={{ bgColor: "#075E54" }}
          onClick={handleSubmit}
        />
      </Stack>
    </Center>
  )
}
