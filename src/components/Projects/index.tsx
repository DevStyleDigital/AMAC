import React, { useState } from 'react';
import { Plusicon } from '@styles/components/icons';
import { Texto, Title } from '@styles/components/text';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Gallery from '@components/Gallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Container } from './styles';
import 'swiper/css/pagination';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  height: 'auto',
  bgcolor: '#000',
  boxShadow: 24,
  p: 0.5,
};
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  height: 'auto',
  border: '1px solid #000',
  boxShadow: 10,
};
const Projects: React.FC = () => {
  const [gallery, setGallery] = useState('');
  const [open, setOpen] = useState(false);
  const [openG, setOpenG] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenG = () => setOpenG(true);
  const handleCloseG = () => setOpenG(false);
  return (
    <Container id="project">

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Box">
          <button
            className="selectGallery"
            type="button"
            // eslint-disable-next-line no-sequences
            onClick={() => (handleOpenG(), setGallery('olimpio'))}
          >
            <Gallery
              color="#E30613"
              rgba="rgba(227, 6, 19, 0)"
              name="Olimpio Matiuci"
              img="/galleryOlimpio.jpg"
            />
          </button>
          <button
            className="selectGallery"
            type="button"
            // eslint-disable-next-line no-sequences
            onClick={() => (handleOpenG(), setGallery('metropolitano'))}
          >
            <Gallery
              color="#0055FF"
              rgba="rgba(0,85,255, 0)"
              name="Metropolitano"
              img="/metropolitano.jpg"
            />
          </button>
        </Box>
      </Modal>

      <Modal
        open={openG}
        onClose={handleCloseG}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2} className="Box2">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="swiper"
          >
            <SwiperSlide><img src={`/${gallery}/${gallery}1.jpg`} alt="img" /></SwiperSlide>
            <SwiperSlide><img src={`/${gallery}/${gallery}2.jpg`} alt="img" /></SwiperSlide>
            <SwiperSlide><img src={`/${gallery}/${gallery}3.jpg`} alt="img" /></SwiperSlide>
            <SwiperSlide><img src={`/${gallery}/${gallery}4.jpg`} alt="img" /></SwiperSlide>
          </Swiper>
        </Box>
      </Modal>

      <div
        className="NomePrj"
      >
        <div className="sombraImg" />
        <img
          src="/projeto-banner1.jpg"
          alt="img"
        />
        <div className="texto_prj">
          <Title style={{ margin: '0 2rem 0 0' }}>
            OLIMPIO MATIUCI
          </Title>
          <Texto style={{ margin: '1rem 7rem 0 0' }}>
            Descrição do projeto completo e com detalhes
            de acordo com cada tipo de obra.
          </Texto>
        </div>
        <div className="vejamais" aria-hidden onClick={handleOpen}>
          <div className="fundo">
            <div className="veja">
              Veja
            </div>
            <Plusicon />
          </div>
        </div>
      </div>
      <div
        className="ImgPrj"
      >
        <div className="banner1">
          <img src="/Prj1.png" alt="prj" />
        </div>
        <div className="banner2">
          <img src="/Prj2.png" alt="prj" />
        </div>
        <div className="linha3">
          <div className="banner3">
            <img src="Prj3.png" alt="prj" />
          </div>
          <div className="banner4">
            <img src="Prj4.png" alt="prj" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
