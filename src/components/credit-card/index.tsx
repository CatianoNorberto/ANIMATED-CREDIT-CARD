import { View, Text} from 'react-native'

import { styles } from './styles'

export function CreditCard() {
  return (
    <View>
      <View style={[styles.card, styles.front]}>
        <View style={styles.header}>
          <View style={[styles.circle, styles.logo]}/>
          <Text>Meu Cartão</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.name}>Catiano Norberto</Text>

          <View style={styles.flag}>
            <View style={[styles.circle, styles.red]}/>
            <View style={[styles.circle, styles.orange]}/>
          </View>
        </View>
      </View>

      {/* <View style={[styles.card, styles.back]}></View> */}
    </View>
  )
}
