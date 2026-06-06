import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { theme } from '../theme';

interface GlowButtonProps {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function GlowButton({ label, onPress, style }: GlowButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(107, 183, 255, 0.16)',
    borderColor: 'rgba(107, 183, 255, 0.24)',
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.accent,
    shadowOpacity: 0.14,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
  },
  label: {
    color: theme.colors.textPrimary,
    fontSize: 15,
    fontWeight: '700',
  },
});
