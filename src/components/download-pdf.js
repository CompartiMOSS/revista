import React, { useState } from 'react';
import { styled } from '@mui/styles';

const DivDownload = styled('div')({
  position: 'relative',
  marginTop: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 150,
  height: 60,
  overflow: 'hidden',
  background: '#303030',
  '& a': {
    color: '#fff',
    textDecoration: 'none'   
  }
});

const DivPicture = styled('div')({
  zIndex: 10,
  top: 0,
  left: 0,
  width: 60,
  backgroundColor: '#f90b39',
  display: 'inline-block',
  verticalAlign: 'top',
  '& a': {
    display: 'inline-block',
    padding: 6,
    height: 48,
    width: 48,
    color: '#fff',
    textDecoration: 'none'
  },
  '& img': {
    maxWidth: 48,
    maxHeight: 48
  }
});

const DivText = styled('div')({
  padding: 6,
  width: 78,
  height: 48,
  color: '#fff',
  display: 'inline-block',
  verticalAlign: 'top'
});

const DivOverlay = styled('div')({
  position: 'absolute',
  zIndex: 20,
  top: 55,
  left: 60,
  height: 55,
  width: 90,
  backgroundColor: '#f90b39',
  color: '#fff',
  fontSize: 11,
  transition: 'all .5s ease-in-out',
  '& a': {
    display: 'block',
    height: 70,
    padding: '5px 10px'
  }
});

const DownloadPDF = ({ number, ...props }) => {
  const [isShown, setIsShown] = useState(false);
  const overlayStyle = isShown ? {top:30+'px'} : {top:55+'px'};

  return (
    <DivDownload id="divDownloadLink1" role="button"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
      <DivPicture>
        <a href={`/pdf/CompartiMOSS_${number}.pdf`} target="blank">
          <img src="/images/icons/Download-PDF.png" alt="Descarga la revista CompartiMOSS en PDF" />
        </a>
      </DivPicture>
      <DivText>
        <a href={`/pdf/CompartiMOSS_${number}.pdf`} target="blank">Revista en PDF</a>
      </DivText>
      <DivOverlay style={overlayStyle}>
        <a href={`/pdf/CompartiMOSS_${number}.pdf`} target="blank">
          Descargar
        </a>
      </DivOverlay>
    </DivDownload>
  );
};

export default DownloadPDF;