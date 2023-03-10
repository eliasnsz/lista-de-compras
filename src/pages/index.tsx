import { FormEvent, useEffect, useState } from 'react'
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

export default function Home() {

  const [text, setText] = useState("")
  const [isAllMatch, setIsAllMatch] = useState(false)

  const queryClient = useQueryClient()
  
  const { data: items } = useQuery<Item[]>("items", async () => {
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(!isAllMatch) return

    const { name, quantity, unit } = processInputWithRegex(text)
    const created_at = moment().toISOString()
    
    const newItem = { name, unit, quantity, created_at, isChecked: false } as Item
    
    await api.post("/items", { item: newItem })
    queryClient.invalidateQueries("items")

    setText("")
  }

  return (
    <>
      <Head>
        <title>Lista de Compras</title>
        <meta name="description" content="Simplifique suas idas ao mercado" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultContainer>
        <Header/>
        <MessageContainer>
          {
            items?.map((item, index) => {
              return (
                <Message created_at={item.created_at} key={index}>
                  {`${item.quantity}${item.unit !== "un" ? item.unit : ""} ${item.name}`}                  
                </Message>
              )
            }).reverse()
          }
        </MessageContainer>
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
