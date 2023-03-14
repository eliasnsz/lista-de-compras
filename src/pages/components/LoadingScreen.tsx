import { FC, useEffect, useState } from 'react'
import { Center, Image } from '@chakra-ui/react'

import DefaultContainer from './DefaultContainer'

interface IProps {}

const LoadingScreen:FC<IProps> = (props) => {

  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 300);
  }, [])
  
  return (
    <DefaultContainer>
      <Center
        w="100%"
        h="100%"
        bgImage="linear-gradient(to bottom, #292929 30%, #090909)" 
      >
        <Image
          w="150px"
          opacity={opacity}
          transition="1s ease"
          transform={opacity ? "translateY(0px)" : "translateY(200px)"}
          alt="loading-logo"
          src="/loading-logo.png" 
        />  
      </Center>
    </DefaultContainer>
  )
}

export default LoadingScreen