import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    padding: 32,
    justifyContent: 'space-between',
  },
  front: {
    backgroundColor: '#DAE1E7',
    backfaceVisibility: 'hidden',
    position: 'absolute',
  },
  back: {
    backgroundColor: '#BAC1C7',
    backfaceVisibility: 'hidden',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  circleFlag: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  logo: {
    backgroundColor: '#8795A0'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  flag: {
    flexDirection: 'row',
    gap: -12
  },
  red: {
    backgroundColor: 'red'
  },
  orange: {
    backgroundColor: 'orange'
  },
  label: {
    fontSize: 14,
    color: '#4F5F64'
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})