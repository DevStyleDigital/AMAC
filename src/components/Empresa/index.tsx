import React, { useState } from 'react';
import { Texto, Title } from '@styles-components/text';
import { PlayIcon } from '@styles/components/icons';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Container } from './styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '70%',
  bgcolor: '#000',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Empresa: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            style={{ width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/hOmZvsmUUcY"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay;"
            allowFullScreen
          />
        </Box>
      </Modal>

      <div
        className="text_empresa"
        data-aos="fade"
        data-aos-offset="100"
        data-aos-duration="500"
      >
        <Title>EMPRESA</Title>
        <Texto>
          <strong style={{ fontStyle: 'italic' }}>A AMAC</strong>
          {' '}
          é uma empresa que busca as reais necessidades e os
          objetivos dos seus clientes,
          por isso faz questão de investir no atendimento personalizado,
          resultando em uma parceria de sucesso.
        </Texto>
      </div>
      <div
        className="Bloco1"
      >
        <img src="/imgbloco1.png" alt="img" />
        <div className="play">
          <div aria-hidden className="buttonPlay" onClick={handleOpen}>
            <PlayIcon style={{ marginLeft: '0.4rem' }} />
          </div>
        </div>
      </div>
      <div
        className="Bloco2"
      >
        <video
          autoPlay
          loop
          muted
        >
          <source
            src="https://amac.eng.br/AMAC.mp4"
            type="video/mp4"
          />
        </video>
        <span>
          <strong>Assista </strong>
          ao nosso
          <br />
          vídeo institucional
        </span>
      </div>
    </Container>
  );
};

export default Empresa;
