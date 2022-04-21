import { TextoContact, Title } from '@styles/components/text';
import React from 'react';
import { MentionIcon, WhatsappiconContact, PinIcon } from '@styles/components/icons';
import { Container } from './styles';

const Contact: React.FC = () => (
  <Container id="contact">
    <section
      className="contact_text"
    >
      <Title style={{ color: '#000' }}>Contato</Title>
      <TextoContact style={{ color: '#000', marginTop: '1rem' }}>
        Quer saber mais sobre nós e como podemos fazer a
        diferença na execução do seu projeto?
      </TextoContact>
      <TextoContact style={{ color: '#000', marginTop: '1rem', fontStyle: 'normal' }}>
        Entre em contato com a nossa equipe de especialistas.
      </TextoContact>
    </section>
    <section
      className="contact"
    >
      <div className="icons">
        <MentionIcon />
        <div className="content">
          <span>Dúvidas? Fale conosco</span>
          <h4>atendimento@amac.eng.br</h4>
        </div>
      </div>
      <div className="icons">
        <WhatsappiconContact />
        <div className="content">
          <span>Whatsapp</span>
          <h4>15 3228.4848</h4>
        </div>
      </div>
      <div>
        <div className="icons">
          <PinIcon />
          <h4>
            Estrada do Império, 920
            | Brigadeiro Tobias | Sorocaba, SP | 18085-320
          </h4>
        </div>
      </div>
    </section>
  </Container>
);

export default Contact;
