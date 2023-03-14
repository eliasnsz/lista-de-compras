import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const DefaultContainer:FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lista de Compras</title>
        <meta name="description" content="Simplifique suas idas ao mercado" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack 
        pb={4}
        m="auto"
        h="100vh"
        maxW="2xl" 
        spacing={0}
        bgAttachment="fixed"
        backgroundSize="cover"
        justify="space-between"
        backgroundPosition="center"
        backgroundAttachment="local"
        backgroundImage="url('wallpaper.jpg')"
      >
        {children}  
      </Stack>
    </>
  )
}

export default DefaultContainer