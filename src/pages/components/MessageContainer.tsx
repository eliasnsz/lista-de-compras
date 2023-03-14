import { Item } from '@/types'
import { Box, Button, IconButton, Stack, Text } from '@chakra-ui/react'
import React, { Dispatch, FC, ReactNode, RefObject, useRef, useState } from 'react'
import { HiChevronDoubleDown } from "react-icons/hi"
import Message from './Message'

interface IProps {
  idList: string[]
  items: Item[] | undefined
  setIdList: Dispatch<React.SetStateAction<string[]>>
}

const MessageContainer:FC<IProps> = ({ items, idList, setIdList }) => {
  
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisibleButton, setVisibleButton] = useState(false)
  
  const handleScroll = (event: any) => {
    const distanceToTop = Math.abs(event.target.scrollTop as number)
    if (distanceToTop >= 400) {
      setVisibleButton(true)
    } else {
      setVisibleButton(false)
    }
  }

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }  

  console.log(idList);
  
  
  return (
    <>
      <Stack 
        pb={3}
        px={2}
        w="100%"
        h="100vh" 
        ref={containerRef}
        overflowY="scroll"
        position="relative"
        direction="column-reverse"
        onScroll={(event) => handleScroll(event)}
        sx={{ "&::-webkit-scrollbar": { display: "none" } }}  
      > 
        {
          items?.map((item, index) => {
            return (
              <Message 
                key={index}
                created_at={item.created_at} 
              >
                {`${item.quantity}${item.unit !== "un" ? item.unit : ""} ${item.name}`}                  
              </Message>
            )
          }).reverse()
        }
      { isVisibleButton &&
        (<Box
          w="100%" 
          pb={8} 
          pos="absolute" 
          display="flex" 
          justifyContent="end" 
          px={5}
        >
          <IconButton
            p={2}
            size="sm"
            pos="fixed"
            bg="#303030"
            color="#707070"
            w="fit-content"
            borderRadius={50}
            onClick={scrollToBottom}
            as={HiChevronDoubleDown}
            aria-label='scroll-to-bottom'
            _hover={{ bgColor: "#373737", cursor: "pointer" }}
          />
        </Box>)
      }
      </Stack>
    </>
  )
}

export default MessageContainer