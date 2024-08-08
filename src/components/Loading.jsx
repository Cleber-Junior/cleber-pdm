import React from 'react';
import {Dialog} from '@rneui/base';
import {Colors} from '../assets/images/colors';

export default ({visivel = false}) => {
  return (
    <Dialog isVisible={visivel}>
      <Dialog.Title title="Aguarde..." />
      <Dialog.Loading
        loadingProps={{
          color: Colors.primary,
        }}
      />
    </Dialog>
  );
};
