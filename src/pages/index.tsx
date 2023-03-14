import { FormEvent, FormHTMLAttributes, useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { Item } from '@/types'

import processInputWithRegex from '@/services/regex'
import DefaultContainer from './components/DefaultContainer'
import MessageContainer from './components/MessageContainer'
import MessageInput from './components/MessageInput'
import Message from './components/Message'
import moment from 'moment'
import Header from './components/Header'
import Head from 'next/head'
import api from '@/services/api'
import { log } from 'console'
import { Box, Center, Image, Spinner } from '@chakra-ui/react'
import { LoadingScreen } from './components/LoadingScreen'

export default function Home() {
  
  const [idList, setIdList] = useState<string[]>([])
  
  const [text, setText] = useState("")
  const [isAllMatch, setIsAllMatch] = useState(false)
  const [loadingAnimation, setLoadingAnimation] = useState(true)

  const queryClient = useQueryClient()
  
  const { data: items, isLoading } = useQuery<Item[]>("items", async () => {
    const response = await api.get("/items")
    return response.data
  }, {
    staleTime: 1000 * 60, // 60s
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    const { name, quantity, unit } = processInputWithRegex(text)
    
    if ((!name || !unit || !quantity || !text)) {
      setIsAllMatch(false)
    } else {
      setIsAllMatch(true)
    }
  }, [text])

  useEffect(() => {
    setTimeout(() => {
      setLoadingAnimation(false)
    }, 1500);
  }, [])
  
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if(!isAllMatch) return
    const input = e.target[0] as HTMLInputElement
    
    const { name, quantity, unit } = processInputWithRegex(text)
    const created_at = moment().toISOString()
    
    const newItem = { name, unit, quantity, created_at, isChecked: false } as Item
    
    await api.post("/items", { item: newItem })
    queryClient.invalidateQueries("items")
    
    setText("")
    input.focus()
  }

  if (isLoading || loadingAnimation) {
    return <LoadingScreen/>
  }

  return (
    <>
      <DefaultContainer>
        <Header page="main"/>
        <MessageContainer 
          items={items}
          idList={idList}
          setIdList={setIdList}
        />
        <MessageInput 
          text={text}
          setText={setText} 
          isAllMatch={isAllMatch}
          handleSubmit={handleSubmit}
        />
      </DefaultContainer>
    </>
  )
}
