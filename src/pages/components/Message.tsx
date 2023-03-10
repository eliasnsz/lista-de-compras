  import { Box, Icon, Stack, Text } from '@chakra-ui/react'
  import moment from 'moment'
  import React, { Dispatch, FC, MouseEvent, MouseEventHandler, ReactNode, RefObject, SetStateAction, TouchEventHandler, useEffect, useRef, useState } from 'react'
  import { BsCheckAll } from "react-icons/bs"

  interface IProps {
    id: string
    idList: string[]
    created_at: string
    children: ReactNode
    setIdList: Dispatch<React.SetStateAction<string[]>>
  }


  const Message:FC<IProps> = ({ children, created_at, id, setIdList, idList }) => {

    const [isPressed, setIsPressed] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const isSelected = idList?.includes(id)

    const handleMouseDown = (e: any) => {
      if (idList?.length) {
        if (isSelected) {
          setIdList(state =>[...state.filter(state_id => state_id !== id)])
          return
        }

        setIdList(state => [...state, id])
        return
      }   

      setIsPressed(true);
      timeoutRef.current = window.setTimeout(() => {
        setIdList(state => [...state, id])
      }, 600);
    }

    const handleMouseUp = () => {
      if (!idList?.length) {
        setIsPressed(false);
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
      }
    };
    
    return (
      <Stack
        w="100%"
        pos="relative"
        onPointerUp={handleMouseUp}
        onPointerDown={handleMouseDown}
      >
        <Box
          py={1}
          px={3}
          maxW="90%"
          bg="#075E54"
          color="#fff"
          w="fit-content"
          borderRadius="xl"
          alignSelf="flex-end"
          pointerEvents="none"
          style={{ touchAction: "none" }}
        >
          <Stack spacing={0} direction="row" justify="flex-end">
            <Box textAlign="left">{children}</Box>
            <Text
              pl={1}
              color="#a9a9a9"
              fontSize="xs"
              alignSelf="flex-end"
            >
              {moment(created_at).format("HH:mm")}
            </Text>
            <Icon boxSize={5} color="#a9a9a9" alignSelf="flex-end" as={BsCheckAll}/>
          </Stack>
        </Box>
        (<Box
          h="100%"
          w="100%"
          bottom={0}
          pos="absolute"
          bg={isSelected ? "#34B7F144" : "transparent"}
        />)
      </Stack>
    )
  }

  export default Message