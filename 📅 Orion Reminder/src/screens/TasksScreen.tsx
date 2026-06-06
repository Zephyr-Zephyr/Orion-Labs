import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { tasks } from '../data/mockData';
import { theme } from '../theme';
import GlassCard from '../components/GlassCard';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Aufgaben</Text>
        <Text style={styles.subtitle}>Verwalte To-Do-Listen, priorisiere wichtige Schritte und lass nichts aus dem Blick.</Text>

        {tasks.map((task) => (
          <GlassCard key={task.id} style={styles.taskItem}>
            <View style={styles.taskRow}>
              <View>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskCategory}>{task.category}</Text>
              </View>
              <View style={[styles.priority, task.priority === 'Hoch' ? styles.high : task.priority === 'Mittel' ? styles.medium : styles.low]}>
                <Text style={styles.priorityText}>{task.priority}</Text>
              </View>
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
  taskItem: {
    paddingVertical: theme.spacing.medium,
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  taskCategory: {
    color: theme.colors.textSecondary,
    fontSize: 13,
  },
  priority: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  high: {
    backgroundColor: 'rgba(255,127,145,0.18)',
  },
  medium: {
    backgroundColor: 'rgba(107,183,255,0.18)',
  },
  low: {
    backgroundColor: 'rgba(140,230,185,0.18)',
  },
  priorityText: {
    color: theme.colors.textPrimary,
    fontSize: 12,
    fontWeight: '700',
  },
});
