import { HStack, Box } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

export function Pagination(): JSX.Element {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </HStack>
    </HStack>
  )
}
