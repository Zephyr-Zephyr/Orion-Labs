import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import GlassCard from '../components/GlassCard';
import { stats } from '../data/mockData';

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Statistiken</Text>
        <Text style={styles.subtitle}>Behalte deinen Fortschritt im Blick und sieh, wie produktiv deine Woche wird.</Text>

        <GlassCard style={styles.progressCard}>
          <Text style={styles.cardTitle}>Wochenfortschritt</Text>
          <Text style={styles.cardValue}>84% erreicht</Text>
          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>
        </GlassCard>

        {stats.map((item) => (
          <GlassCard key={item.id} style={styles.statItem}>
            <Text style={styles.statLabel}>{item.label}</Text>
            <Text style={styles.statValue}>{item.value}%</Text>
          </GlassCard>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.large,
    paddingBottom: 32,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: theme.colors.textSecondary,
    marginTop: 8,
    marginBottom: theme.spacing.large,
    fontSize: 15,
  },
  progressCard: {
    paddingVertical: theme.spacing.large,
  },
  cardTitle: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    marginBottom: 10,
    letterSpacing: 1,
  },
  cardValue: {
    color: theme.colors.textPrimary,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: theme.spacing.large,
  },
  progressBarBackground: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    height: 14,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '84%',
    height: '100%',
    backgroundColor: theme.colors.accent,
    borderRadius: 12,
  },
  statItem: {
    paddingVertical: theme.spacing.medium,
  },
  statLabel: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    marginBottom: 10,
  },
  statValue: {
    color: theme.colors.textPrimary,
    fontSize: 22,
    fontWeight: '800',
  },
});
