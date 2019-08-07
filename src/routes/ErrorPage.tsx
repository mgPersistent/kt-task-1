import { Children } from "react";
import React  from 'react';
import logo from '../logo.svg';
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import { Button, Box, Grid, Typography} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import {Card,CardContent,CardActions} from '@material-ui/core'
import { maxWidth } from '@material-ui/system';

interface IErrorType{
    title:string
    header?:string,
    desc?:string,
    children:any
}

// export function ErrorPage(props:IErrorType){
//     document.title = props.title
//     return <>
//         {props.children}
//         <h1>{props.header}</h1>
//         <h3>{props.desc}</h3>
//     </>
// }

const theme = createMuiTheme({
  palette :{
    primary : {
        main :  '#ff4400'
    }

}
})

const useStyles = makeStyles(theme=>({
  root:{
    display:"flex",
    flexGrow:1,
    justifyContent:"center",
    backgroundColor:"lightgrey",
    backgroundImage: `url(${logo})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    height:"100vh"
   
  },
  errorActionCard:{
    margin:theme.spacing(1)
  }
  ,
  
  heading: {
   
    fontSize:'1.5rem',
    textAlign:'center'

  },
  cardAction :{
    display:"flex",
    justifyContent:"end",
    margin:theme.spacing(1)
  },
  button:{
    margin:theme.spacing(0.5)
  }
}))

export function ErrorPage(props:IErrorType){
    const classes = useStyles();
    document.title = props.title
    return (
    <ThemeProvider theme = {theme}>
        {props.children}
        <div className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
                <p className={classes.heading}>
                    {props.header}
                </p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.errorActionCard}>
                        <CardContent>
                            <Typography >
                                {props.desc}
                            </Typography>

                        </CardContent>
                            <Typography className={classes.cardAction}>
                                <Button size="small" variant="contained" color="primary" className={classes.button}>Back</Button>
                                <Button size="small" variant="contained" color="primary" className={classes.button}>Retry</Button>
                            </Typography>
                    </Card>
            </Grid>

            </Grid>
        </div>

    </ThemeProvider>

    );
}
