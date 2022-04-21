import styled from 'styled-components';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Instagram } from '@styled-icons/bootstrap/Instagram';
import { PlusMedical } from '@styled-icons/boxicons-regular/PlusMedical';
import { Mention } from '@styled-icons/fluentui-system-filled/Mention';
import { Business } from '@styled-icons/ionicons-solid/Business';
import { HomeRepairService } from '@styled-icons/material/HomeRepairService';
import { Bricks } from '@styled-icons/bootstrap/Bricks';
import { ContactSupport } from '@styled-icons/material-outlined/ContactSupport';
import { PlayFill } from '@styled-icons/bootstrap/PlayFill';
import MapPin2 from '../../assets/Pin.svg';

export const Facebookicon = styled(Facebook)`
  width: 22px ;
  color: #FFF;
  margin: 0 0.5rem;
`;

export const Instagramicon = styled(Instagram)`
  width: 22px ;
  color: #FFFF;
  margin: 0 0.5rem;
`;

export const Plusicon = styled(PlusMedical)`
  width: 13px ;
  color: #FFF;
  position: absolute;
  right: 8px;
  z-index: 0;
`;

export const MentionIcon = styled(Mention)`
  width: 25px;
  color:#E30613;
`;

export const WhatsappiconContact = styled(Whatsapp)`
  width: 25px ;
  color:#E30613;
`;

export const PinIcon = styled(MapPin2)`
  width: 27px ;
  color:#E30613;
`;

export const BusinessIcon = styled(Business)`
  width: 20px ;
  color:#E30613;
  margin-bottom: .5rem;
  margin-right: 0.5rem;
`;

export const ServicesIcon = styled(HomeRepairService)`
  width: 20px ;
  color:#E30613;
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
`;

export const BricksIcon = styled(Bricks)`
  width: 20px ;
  color:#E30613;
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
`;

export const ContactSupportIcon = styled(ContactSupport)`
  width: 20px ;
  color:#E30613;
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
`;

export const PlayIcon = styled(PlayFill)`
  width: 42px;
  height: 42px;
  margin-left: .5rem;
  color: #E30613;
  opacity: 0.8;
`;
