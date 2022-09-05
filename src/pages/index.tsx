import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { ColorSchemeToggle } from '../components/Layout/ColorSchemeToggle';
import Demo from '../components/Demo';

export default function HomePage() {
  return (
    <Layout>      
      <Demo />
    </Layout>
  );
}