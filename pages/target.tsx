import React, { ReactElement } from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { Button, Container, Header, Input, Title, Wrapper } from '../components';

const Target = (): ReactElement => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ target }) => {
    if (target <= 0) {
      alert('Debes elegir un número mayor a 0.');

      return;
    }

    try {
      window.localStorage.setItem('target', JSON.stringify(target));

      Router.push('/ranking');
    } catch (error) {
      alert('No hay espacio en tu dispositivo.');
    }
  };

  return (
    <Container>
      <Header />
      <Wrapper justify="flex-start">
        <Title text="¿A cuantos puntos van a jugar?" />

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Input type="number" placeholder="0" name="target" register={register} />

          <Button type="submit" text="Siguiente" />
        </form>
      </Wrapper>
    </Container>
  );
};

export default Target;
