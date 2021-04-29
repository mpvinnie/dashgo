import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vinicius Peres</Text>
        <Text color="gray.300" fontSize="small">
          vinniemalafaia@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Vinicius Peres"
        src="https://github.com/mpvinnie.png"
      />
    </Flex>
  )
}
