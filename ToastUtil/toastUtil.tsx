import {BaseToast} from 'react-native-toast-message';
import React from 'react';
import {Colors} from '@/constants';
import {StyleSheet} from 'react-native';
import {FontType, typography} from './fontUtil';

interface CustomToastProps {
  text1: string;
}

export const toastConfig = {
  success: ({text1}: CustomToastProps) => (
    <BaseToast
      style={styles.toastSuccess}
      text1Style={styles.text1}
      text2Style={styles.text2}
      text1={'Success'}
      text2={text1}
    />
  ),
  error: ({text1}: CustomToastProps) => (
    <BaseToast
      style={styles.toastError}
      text1Style={styles.text1}
      text2Style={styles.text2}
      text1={'Error'}
      text2={text1}
    />
  ),
  warning: ({text1}: CustomToastProps) => (
    <BaseToast
      style={styles.toastWarning}
      text1Style={styles.text1}
      text2Style={styles.text2}
      text1={'Warning'}
      text2={text1}
    />
  ),
  default: ({text1}: CustomToastProps) => (
    <BaseToast style={styles.toastDefault} text2={text1} />
  ),
};

const styles = StyleSheet.create({
  toastError: {
    borderLeftColor: Colors.red,
    backgroundColor: Colors.white,
  },
  toastSuccess: {
    borderLeftColor: Colors.cosmos_blue,
    backgroundColor: Colors.white,
  },
  toastWarning: {
    borderLeftColor: Colors.flickering_gold,
    backgroundColor: Colors.white,
  },
  text1: {
    ...typography.h6,
    fontFamily: FontType.Outfit.Light,
    color: Colors.black,
  },
  text2: {
    ...typography.body4,
    fontFamily: FontType.Outfit.Light,
    color: Colors.black,
  },
  toastDefault: {
    borderLeftColor: Colors.lightWhite,
  },
});
