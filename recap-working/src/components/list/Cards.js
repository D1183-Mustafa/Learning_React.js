import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({card}) {
    console.log(card);
  return (
    <Card sx={{ maxWidth: 300,maxHeight: "600px",overflow:"auto",margin:"auto",marginBottom:"30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
