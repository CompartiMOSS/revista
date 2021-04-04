import React from 'react';
import DownloadPDF from "./download-pdf";
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  header: {
    '& img': {
      marginRight: '12px',
      verticalAlign: 'text-bottom'
    }
  },
  editorial: {
    '& h2': {
      color: '#f90b39',
      fontSize: '25px'
    },
    '& p': {
      fontSize: '19px',
      margin: '10px 20px'
    }
  },
  image: {
    '& img': {
      width: '100%',
      border: '1px solid #dedede!important',
      boxShadow: '0 5px 10px #303030'
    }
  }
})

const NumberHeader = ({ frontmatter, ...props }) => {
  const classes = useStyles();

  return (
      <>
        <Grid container>
          <Grid item xs={12} className={classes.header}>
            <h1>
              <img className="img-number-icon" src="/images/icons/OpenBook.png" alt="Ver número" title="Ver número" />
              {frontmatter.title}
            </h1>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3} xl={4} className={classes.image}>
              <img src={`../../images/portadas/CompartiMOSS_${frontmatter.magazine}.jpg`} alt={`Portada número ${frontmatter.magazine}`} />              
            </Grid>
            <Grid item xs={12} md={9} xl={8} className={classes.editorial}>
                <header>
                  <h2>Editorial</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: frontmatter.content}} />
                <div>
                  <DownloadPDF number={frontmatter.magazine}/>
                </div>
              </Grid>
          </Grid>
        </Grid>
      </>
  );
};

export default NumberHeader;