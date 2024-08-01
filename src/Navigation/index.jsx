import React from 'react';
import {ProjetoProvider} from '../Context/ProjetoProviders';
import Navigator from './Navigator';

export default function Providers() {
  return (
    <ProjetoProvider>
      <Navigator />
    </ProjetoProvider>
  );
}
