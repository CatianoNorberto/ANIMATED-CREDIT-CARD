import { TouchableOpacity, View, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { CARD_SIDE, CreditCard } from "@/components/credit-card";
import { Input } from "@/components/input";

import { styles } from "./styles";
import { useState } from "react";

export function Payment() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState("");
  const [security, setSecurity] = useState("");

  const cardSide = useSharedValue(CARD_SIDE.front);

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front;
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back;
  }

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard();
    } else {
      showFrontCard();
    }
  }

  return (
    <View style={styles.container}>
      <CreditCard 
        cardSide={cardSide} 
        data={{ 
          name, 
          number: number.replace(/(\d{4})(?=\d)/g, "$1 "), 
          valid, 
          security 
        }}/>

      <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
        <Text>Inverter</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Input placeholder="Nome do titular" onChangeText={setName} onFocus={showFrontCard} />
        
        <Input
          placeholder="Número do cartão"
          keyboardType="numeric"
          maxLength={16}
          onChangeText={setNumber}
          onFocus={showBackCard}
        />

        <View style={styles.InputsInline}>
          <Input
            placeholder="01/03"
            style={styles.smallInput}
            onChangeText={setValid}
            onFocus={showBackCard}
          />
          
          <Input
            placeholder="123"
            style={styles.smallInput}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={setSecurity}
            onFocus={showBackCard}
          />
        </View>
      </View>
    </View>
  );
}
