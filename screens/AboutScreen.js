import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <SafeAreaView>
        {/* Your screen content */}
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default AboutScreen;
