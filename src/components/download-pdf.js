import React, { useState } from 'react';

const DownloadPDF = ({ number, ...props }) => {
  const [isShown, setIsShown] = useState(false);
  const overlayStyle = isShown ? {top:30+'px'} : {top:55+'px'};

  return (
    <div id="divDownloadLink1" className="divDownloadLink" role="button"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
      <div className="divPicture">
        <a href={`/pdf/CompartiMOSS_${number}.pdf`} target="blank">
          <img className="image" src="/images/icons/Download-PDF.png" alt="Descarga la revista CompartiMOSS en PDF" />
        </a>
      </div>
      <div className="divText">
        <a href={`/pdf/CompartiMOSS_${number}.pdf`} target="blank">Revista en PDF</a>
      </div>
      <div className="divOverlay" style={overlayStyle}>
        <a className="linkOverlay" href={`/pdf/CompartiMOSS_${number}.pdf`} target="blank">
          Descargar
        </a>
      </div>
    </div>
  );
};

export default DownloadPDF;