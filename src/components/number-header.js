import React from 'react';
import DownloadPDF from "./download-pdf";
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material"

const GridHeader = styled(Grid)({
  margin: '12px 0',

  '& img': {
    marginRight: '12px',
    verticalAlign: 'text-bottom'
  }
});

const GridEditorial = styled(Grid)({
  '& h2': {
    color: '#f90b39',
    fontSize: '25px'
  },
  '& p': {
    fontSize: '19px',
    margin: '10px 0'
  }
});

const GridImage = styled(Grid)({
  '& img': {
    width: '100% !important',
    border: '1px solid #dedede!important',
    boxShadow: '0 5px 10px #303030'
  }
});

const NumberHeader = ({ frontmatter, ...props }) => {
  return (
      <>
        <Grid container>
          <GridHeader item xs={12}>
            <h1>
              <img className="img-number-icon" src="/images/icons/OpenBook.png" alt="Ver número" title="Ver número" />
              {frontmatter.title}
            </h1>
          </GridHeader>
          <Grid container spacing={4}>
            <GridImage item xs={12} md={3} xl={4}>
              <img src={`../../images/portadas/CompartiMOSS_${frontmatter.magazine}.jpg`} alt={`Portada número ${frontmatter.magazine}`} />              
            </GridImage>
            <GridEditorial item xs={12} md={9} xl={8}>
                <header>
                  <h2>Editorial</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: frontmatter.content}} />
                <div>
                  <DownloadPDF number={frontmatter.magazine}/>
                </div>
              </GridEditorial>
          </Grid>
        </Grid>
      </>
  );
};

export default NumberHeader;