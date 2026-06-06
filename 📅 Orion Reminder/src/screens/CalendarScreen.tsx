import { ScrollView, StyleSheet, Text, View } from 'react-native';
import GlassCard from '../components/GlassCard';
import { theme } from '../theme';
import { calendarEvents as events } from '../data/mockData';

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Kalender</Text>
        <Text style={styles.subtitle}>Plane deine Woche, behalte Termine im Blick und verwende Farben für deine Schwerpunkte.</Text>

        <GlassCard style={styles.bigCard}>
          <Text style={styles.cardTitle}>Diese Woche</Text>
          <View style={styles.weekRow}>
            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day) => (
              <View key={day} style={styles.dayItem}>
                <Text style={styles.dayLabel}>{day}</Text>
                <View style={styles.dot} />
              </View>
            ))}
          </View>
        </GlassCard>

        <Text style={styles.sectionHeader}>Bevorstehende Events</Text>
        {events.map((event) => (
          <GlassCard key={event.id} style={styles.eventCard}>
            <View style={styles.eventHeader}>
              <View style={[styles.eventMarker, { backgroundColor: event.color }]} />
              <Text style={styles.eventLabel}>{event.label}</Text>
            </View>
            <Text style={styles.eventTime}>{event.time}</Text>
          </GlassCard>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme.colors.background,
  },
  content: {
    padding: appTheme.spacing.large,
    paddingBottom: 32,
  },
  title: {
    color: appTheme.colors.textPrimary,
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: appTheme.colors.textSecondary,
    marginTop: 8,
    marginBottom: appTheme.spacing.large,
    fontSize: 15,
    lineHeight: 22,
  },
  bigCard: {
    paddingVertical: appTheme.spacing.large,
  },
  cardTitle: {
    color: appTheme.colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: appTheme.spacing.medium,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayItem: {
    alignItems: 'center',
  },
  dayLabel: {
    color: appTheme.colors.textSecondary,
    fontSize: 13,
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: appTheme.colors.accent,
  },
  sectionHeader: {
    color: appTheme.colors.textPrimary,
    marginTop: appTheme.spacing.large,
    marginBottom: appTheme.spacing.small,
    fontSize: 18,
    fontWeight: '700',
  },
  eventCard: {
    paddingVertical: appTheme.spacing.medium,
  },
  eventHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventMarker: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  eventLabel: {
    color: appTheme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  eventTime: {
    color: appTheme.colors.textSecondary,
    fontSize: 14,
  },
});
