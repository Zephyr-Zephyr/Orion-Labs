import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../theme';

interface GlassCardProps {
  children: ReactNode;
  style?: object;
}

export default function GlassCard({ children, style }: GlassCardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.radius,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    shadowColor: theme.colors.accent,
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.08,
    shadowRadius: 32,
    elevation: 6,
    overflow: 'hidden',
  },
});
