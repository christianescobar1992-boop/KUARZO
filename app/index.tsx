import React from 'react';
import { View } from 'react-native';
import { CardProduct } from '../components/CardProduct';
import CustomButton from '../components/CustomButton';
import Header from '../components/header';

const App = () => {

  const sampleProduct = {
    nombre: "Pulsera Piedra Volcanica",
    descripcion: "Pulsera elaborada con piedras volcanicas y dijes de acero inoxidable.",
    precio: 45000,
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  return (
    <View className='flex-1 bg-white items-center'>
      <Header />
      <CustomButton children="Botonzitoo" color="primary" className='w-1/2' />
      <View className="mt-4">
        <CardProduct producto={sampleProduct} />
      </View>
    </View>
  )
}

export default App
