import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Loading from './components/Loading';
import TabNavigator from './navigators/TabNavigator';
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return <TabNavigator />;
}
