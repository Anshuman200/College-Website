// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

// const useStyles = makeStyles((theme) => ({
//   mainSection:{
//     backgroundColor:"#b3b8b2",
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//     fontFamily: `'PT Serif', serif`,
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "56.25%", // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

// const cards = [1, 2, 3, 4, 5];
// This will call cards 5 time.
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// This will call card 10 times.

// export default function Album() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main className={classes.mainSection}>
//         {/* Hero unit */}
//         <div className={classes.heroContent}>
//           <Container maxWidth="sm">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="textPrimary"
//               gutterBottom
//               style={{ fontFamily: "'PT Serif', serif" }}
//             >
//               Our Programs
//             </Typography>
//           </Container>
//         </div>
//         <Container className={classes.cardGrid} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}
//                     image="https://source.unsplash.com/random"
//                     title="Image title"
//                   />
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       B.Tech
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe
//                       the content.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//     </React.Fragment>
//   );
// }

// import React from "react";

// const useStyles = makeStyles((theme) => ({
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//     // display:'flex',
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   // cardMedia: {
//   //   paddingTop: "56.25%", // 16:9
//   // },
//   cardContent: {
//     flexGrow: 1,
//   },
// }));

// function Albumb() {
//   const classes = useStyles();
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container className={classes.cardGrid} maxWidth="md">
//         <Grid container spacing={4}>
//           <Card className={classes.card}>
//             <CardMedia
//               className={classes.cardMedia}
//               image="https://source.unsplash.com/random"
//               title="Image title"
//             />
//             <CardContent className={classes.cardContent}>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {" "}
//                 B.Tech
//               </Typography>
//               <Typography>
//                 This is a media card. You can use this section to describe the
//                 content.{" "}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Container>
//     </React.Fragment>
//   );
// }

// export default Albumb;


import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import { Box, Typography } from '@material-ui/core';

function Albumb() {
 const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <Box className="Albumb">
      <Box style={{ textAlign: "center" }}>
        {/* <Typography variant='h2'>React Carousel Minimal</Typography>
        <Typography variant='body1'>Easy to use, responsive and customizable carousel component for React Projects.</Typography> */}
        <Box style={{
          padding: "1px 10px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="8px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            // captionPosition="bottom"
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            // thumbnails={true} is responsible for bottom image below slider....
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Albumb;

