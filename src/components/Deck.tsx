import { useState, useEffect } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import Card from './Card'

export interface DeckState {
  suite: string
  value: string
}

export const Deck = () => {
  const [deck, setDeck] = useState<DeckState[]>([])
  const suites = ['♥️', '♣️', '♦️', '♠️']
  const values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ]

  useEffect(() => {
    const card = []
    for (let i = 0; i < suites.length; i++) {
      for (let j = 0; j < values.length; j++) {
        card.push({ suite: suites[i], value: values[j] })
      }
    }

    setDeck(card)
  }, [])

  const shuffleDeck = (x: DeckState[]) => {
    let currentIndex = x.length,
      randomIndex

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[x[currentIndex], x[randomIndex]] = [x[randomIndex], x[currentIndex]]
    }

    setDeck([...x])
  }

  return (
    <Box>
      <Text as="p">Number of Cards: {deck.length}</Text>
      <Button onClick={() => shuffleDeck(deck)}>Shuffle Deck</Button>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {deck.map(d => (
          <Card key={crypto.randomUUID()} data={d} />
        ))}
      </Box>
    </Box>
  )
}

export default Deck
