import * as React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import NearformLogo from 'assets/logos/nearform.svg';
import LinkButton from 'components/molecules/link-button';
import { styles } from '../views.styles';

export const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <NearformLogo width={200} height={50} fill="#2165e3" title="Nearform logo" />
      <Text>{t('home:title')}</Text>
      <LinkButton title={t('home:viewOneButton')} path="/viewOne" />
      <LinkButton title={t('home:viewTwoButton')} path="/viewTwo" />
      <LinkButton title={t('home:viewThreeButton')} path="/viewThree" />
      <LinkButton title={t('home:listViewButton')} path="/listView" />
      <LinkButton title={t('home:pushNotificationsButton')} path="/pushNotifications" />
    </View>
  );
};