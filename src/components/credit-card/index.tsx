import { View, Text} from 'react-native'

import { styles } from './styles'
import Animated, { useAnimatedStyle, SharedValue, interpolate, withTiming } from 'react-native-reanimated'

type CreditCardProps = {
  cardSide: SharedValue<number>
  data: { 
    name: string
    number: string
    valid: string
    security: string
  }
}

export enum CARD_SIDE {
  front = 0,
  back = 1,
}

export function CreditCard({ cardSide, data }: CreditCardProps) {
  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(cardSide.value, [CARD_SIDE.front, CARD_SIDE.back],[0, 180])
    
    return {
      transform: [
        {rotateY: withTiming(`${rotateValue}deg`, { duration: 1000})},
      ]
    }
  })

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(cardSide.value, [CARD_SIDE.front, CARD_SIDE.back],[180, 360])
    
    return {
      transform: [
        {rotateY: withTiming(`${rotateValue}deg`, { duration: 1000})},
      ]
    }
  })

  return (
    <View>
      <Animated.View style={[styles.card, styles.front, frontAnimatedStyles]}>
        <View style={styles.header}>
          <View style={[styles.circle, styles.logo]}/>
          <Text>Meu Cartão</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>

          <View style={styles.flag}>
            <View style={[styles.circleFlag, styles.red]}/>
            <View style={[styles.circleFlag, styles.orange]}/>
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styles.card, styles.back, backAnimatedStyles]}>
        <View>
          <Text style={styles.label}>Numero do Cartão</Text>
          <Text style={styles.value}>{data.number}</Text>
        </View>

        <View style={styles.footer}>
          <View>
            <Text style={styles.label}>Validade</Text>
            <Text style={styles.value}>{data.valid}</Text>
          </View>

          <View>
            <Text style={styles.label}>CVV</Text>
            <Text style={styles.value}>{data.security}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}
