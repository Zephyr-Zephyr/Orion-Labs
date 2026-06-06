import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import GlassCard from '../components/GlassCard';
import GlowButton from '../components/GlowButton';
import { quickGoals, categories, tasks } from '../data/mockData';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Orion Reminder</Text>
        <Text style={styles.subtitle}>Remember what matters.</Text>

        <GlassCard style={styles.heroCard}>
          <Text style={styles.heroTitle}>Fokussiert bleiben</Text>
          <Text style={styles.heroText}>Deine wichtigsten Aufgaben und Erinnerungen an einem Ort. Modern, ruhig und intuitiv.</Text>
          <GlowButton label="Neue Erinnerung" style={styles.heroButton} />
        </GlassCard>

        <View style={styles.row}>
          {quickGoals.map((goal) => (
            <GlassCard key={goal.id} style={styles.smallCard}>
              <Text style={styles.cardLabel}>{goal.label}</Text>
              <Text style={styles.cardValue}>{goal.value}</Text>
            </GlassCard>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Aktive Kategorien</Text>
        <View style={styles.row}> 
          {categories.map((category) => (
            <GlassCard key={category.id} style={styles.categoryCard}>
              <View style={[styles.badge, { backgroundColor: category.color }]} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </GlassCard>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Heute im Fokus</Text>
        {tasks.slice(0, 3).map((task) => (
          <GlassCard key={task.id} style={styles.taskCard}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <View style={styles.taskMeta}>
              <Text style={styles.taskCategory}>{task.category}</Text>
              <Text style={[styles.taskPriority, task.priority === 'Hoch' && { color: theme.colors.error }]}> {task.priority}</Text>
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
  sectionTitle: {
    color: theme.colors.textPrimary,
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: theme.colors.textSecondary,
    marginTop: 6,
    marginBottom: theme.spacing.large,
    fontSize: 16,
  },
  heroCard: {
    paddingVertical: theme.spacing.large,
  },
  heroTitle: {
    color: theme.colors.textPrimary,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 10,
  },
  heroText: {
    color: theme.colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: theme.spacing.medium,
  },
  heroButton: {
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallCard: {
    flex: 1,
    marginRight: 12,
    minHeight: 110,
  },
  sectionHeader: {
    color: theme.colors.textPrimary,
    marginTop: theme.spacing.large,
    marginBottom: theme.spacing.small,
    fontSize: 18,
    fontWeight: '700',
  },
  categoryCard: {
    flex: 1,
    minHeight: 90,
    marginRight: 12,
    justifyContent: 'center',
  },
  badge: {
    width: 12,
    height: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryText: {
    color: theme.colors.textPrimary,
    fontSize: 15,
    fontWeight: '700',
  },
  taskCard: {
    paddingVertical: 18,
  },
  taskTitle: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  taskMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskCategory: {
    color: theme.colors.textSecondary,
    fontSize: 13,
  },
  taskPriority: {
    color: theme.colors.accent,
    fontSize: 13,
    fontWeight: '700',
  },
});
