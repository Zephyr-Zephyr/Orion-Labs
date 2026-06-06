import { StyleSheet, Switch, Text, View } from 'react-native';
import { theme } from '../theme';
import { useState } from 'react';
import GlassCard from '../components/GlassCard';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Einstellungen</Text>
        <Text style={styles.subtitle}>Passe Orion Reminder an dein persönliches Productivity-Setup an.</Text>

        <GlassCard style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Text style={styles.settingDescription}>Ein dunkles, premium UI für nächtliches Arbeiten.</Text>
          </View>
          <Switch value={darkModeEnabled} onValueChange={setDarkModeEnabled} thumbColor={theme.colors.accent} trackColor={{ false: '#3b475e', true: '#4f7cff' }} />
        </GlassCard>

        <GlassCard style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Benachrichtigungen</Text>
            <Text style={styles.settingDescription}>Erhalte zeitkritische Erinnerungen direkt auf dein Gerät.</Text>
          </View>
          <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} thumbColor={theme.colors.accent} trackColor={{ false: '#3b475e', true: '#4f7cff' }} />
        </GlassCard>

        <GlassCard style={styles.aboutCard}>
          <Text style={styles.settingLabel}>Orion Reminder</Text>
          <Text style={styles.settingDescription}>Remember what matters. Futuristische Premium-App inspiriert von Orion Studios.</Text>
        </GlassCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.large,
  },
  content: {
    flex: 1,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: theme.colors.textSecondary,
    fontSize: 15,
    marginBottom: theme.spacing.large,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.medium,
  },
  aboutCard: {
    paddingVertical: theme.spacing.medium,
  },
  settingLabel: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  settingDescription: {
    color: theme.colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
    maxWidth: '80%',
  },
});
