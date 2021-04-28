import { Flex } from '@chakra-ui/react'

import { Header } from '../components/Header'

export default function Dashboard(): JSX.Element {
  return (
    <Flex directio="column" h="100vh">
      <Header />

      <Flex></Flex>
    </Flex>
  )
}
