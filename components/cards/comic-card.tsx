import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC }  from 'react';

export type CardType = {
  id: number,
  title: string,
  thumbnail: {
    path: string,
    extension: string,
  }
}
type Props = {
  data : CardType
}

const ComicCard: FC<Props> = ({data}: Props) => {  
  return (
    <Card sx={{ width: 345, height: 500, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
      <CardMedia
        component="img"
        alt={data.title}
        height="340"
        width="340"
        image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{overflowY:"hidden", maxHeight:60}}>
          {data.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Ver Detalle</Button>
      </CardActions>
    </Card>
  );
}

export default ComicCard;