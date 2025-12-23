import React from 'react'
import { Stack } from 'expo-router'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

const _layout = () => {
  return (
    
    <GluestackUIProvider mode="dark">
      <Stack screenOptions={{headerShown :false}} >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="login"></Stack.Screen>
      <Stack.Screen name="signup"></Stack.Screen>
    </Stack>
    </GluestackUIProvider>
  
  )
}

export default _layout