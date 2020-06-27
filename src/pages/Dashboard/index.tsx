import React from 'react';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore respositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/19997019?s=400&u=a9bf7b20398b2f42cae69e2ce24bf34eebd9a476&v=4"
            alt="Saulo Gomes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly ReactJS & React Native forms!</p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
