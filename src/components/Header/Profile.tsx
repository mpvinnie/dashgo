import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinicius Peres</Text>
          <Text color="gray.300" fontSize="small">
            vinniemalafaia@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Vinicius Peres"
        src="https://github.com/mpvinnie.png"
      />
    </Flex>
  )
}
