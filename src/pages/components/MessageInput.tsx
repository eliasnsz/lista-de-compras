import { Box, Button, Center, ComponentWithAs, Icon, IconButton, Input, InputProps, Stack } from '@chakra-ui/react'
import React, { Dispatch, FC, FormEvent, SetStateAction, useRef } from 'react'
import { IoSendSharp } from 'react-icons/io5'
import { MdEmojiEmotions } from 'react-icons/md'
 
interface IProps {
  text: string,
  setText: Dispatch<SetStateAction<string>>
  isAllMatch: boolean
  handleSubmit: (e: FormEvent) => void
}

const MessageInput:FC<IProps> = ({ setText, text, isAllMatch, handleSubmit }) => {

  const inputRef = useRef(null)

  return (
    <form onSubmit={handleSubmit}>
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
            h="45px"
            bg="#292929"
            align="center"
            direction="row"
            borderRadius={40}
            w={["90%", "100%"]} 
            boxShadow="0px 5px 10px #00000044"
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
          <Button
            p={3}
            w="45px"
            h="45px"
            color="#fff"
            type="submit"
            borderRadius={50}
            bgColor="#128C7E"
            aria-label='send-button'
            isDisabled={!isAllMatch}
            _hover={{ bgColor: "#075E54" }}
          >
            <Icon 
              ml={1} 
              boxSize={5} 
              as={IoSendSharp}
            />
          </Button>
        </Stack>
      </Center>
    </form>
  )
}

export default MessageInput