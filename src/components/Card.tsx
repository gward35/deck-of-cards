import { Box, Text } from '@chakra-ui/react'
import { DeckState } from './Deck'

export interface CardProps {
  data: DeckState
  show: boolean
}

export const Card = ({ data, show }: CardProps) => {
  const { suite, value } = data
  const isHeartOrDiamond = suite === '♥️' || suite === '♦️'
  const color = isHeartOrDiamond ? '#f00' : '#000'
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="1px solid"
      borderColor="#000"
      borderRadius="5px"
      padding={8}
      margin={8}
      width="75px"
      height="100px"
    >
      {!show ? (
        <Box
          display="flex"
          flexDirection="column"
          textAlign="start"
          padding={2}
          height="100%"
        >
          <Box bgColor="#f00" height="100%" width="100%" borderRadius="5px" />
        </Box>
      ) : (
        <>
          <Box display="flex" flexDirection="column" textAlign="start">
            <Text as="span" color={color}>
              {suite}
            </Text>
            <Text as="span" color={color}>
              {value}
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" textAlign="start">
            <Text as="span" color={color} transform={'rotate(180deg)'}>
              {suite}
            </Text>
            <Text as="span" color={color} transform={'rotate(180deg)'}>
              {value}
            </Text>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Card
