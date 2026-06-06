import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { reminders } from '../data/mockData';
import { theme } from '../theme';
import GlassCard from '../components/GlassCard';

export default function RemindersScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Erinnerungen</Text>
        <Text style={styles.subtitle}>Erhalte lokale Hinweise genau dann, wenn du sie benötigst.</Text>

        {reminders.map((item) => (
          <GlassCard key={item.id} style={styles.reminderCard}>
            <Text style={styles.reminderTitle}>{item.title}</Text>
            <View style={styles.reminderMeta}>
              <Text style={styles.reminderCategory}>{item.category}</Text>
              <Text style={styles.reminderTime}>{item.time}</Text>
            </View>
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
    lineHeight: 22,
  },
  reminderCard: {
    paddingVertical: theme.spacing.medium,
  },
  reminderTitle: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  reminderMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reminderCategory: {
    color: theme.colors.textSecondary,
    fontSize: 13,
  },
  reminderTime: {
    color: theme.colors.accent,
    fontSize: 13,
    fontWeight: '700',
  },
});
