import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Avatar,
  CardActions,
  Button,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import palette from '@/styles/mui/palette';
import CustomChip from './CustomChip';

interface IProduct {
  id: string;
  address: string;
  price: string;
  thumbNail: string;
  like: number;
  options: string;
  category: string;
  prompt_type: string;
}

interface IProductListProps {
  products: IProduct[];
}

interface ICardExampleProps {
  product: IProduct;
}

const ContentCopyRight: React.FC<IProductListProps> = ({ products }) => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px',
        gap: '40px',
      }}
    >
      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <CardExample product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const ContentTicket: React.FC<IProductListProps> = ({ products }) => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px',
        gap: '40px',
      }}
    >
      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <CardExample product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { ContentCopyRight, ContentTicket };

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const CardExample: React.FC<ICardExampleProps> = ({ product }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const onClickProduct = (e: React.MouseEvent) => {
    e.stopPropagation();

    // TODO 아래 경로를 api상 프로덕트아이디로 바꿔주세요
    navigate(`/product/${product.address}`);
  };

  return (
    <Card
      sx={{
        minWidth: '100px',
        maxWidth: '300px',
        maxHeight: '300px',
        borderRadius: '0.8rem',
      }}
      onClick={() => console.log('111')}
    >
      <Box
        sx={{
          backgroundImage: `url(${product.thumbNail})`,
          display: 'flex',
          width: '300px',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '0.8rem',
          backgroundColor: '#000000',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              width: '300px',
              height: '100%',
              background: `linear-gradient(-180deg, rgba(0, 0, 0, 0.48) 0%, rgba(128, 128, 128, 0) 30%), linear-gradient(0deg, rgba(0, 0, 0, 0.48) 0%, rgba(128, 128, 128, 0) 30%)`,
              backgroundRepeat: 'no-repeat, no-repeat',
              backgroundPosition: 'top center, bottom center',
            }}
          >
            <Button
              onClick={(e) => onClickProduct(e)}
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                p: '0',
              }}
            >
              <CardActions
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  p: '0',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      width: '100%',
                      height: '30%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Avatar
                        variant="rounded"
                        {...stringAvatar('Kent Dodds')}
                        sx={{ width: 26, height: 26, marginRight: '10px' }}
                      />
                      <Typography
                        sx={{ flex: 1 }}
                        variant="body1"
                        color={palette.grey[300]}
                      >
                        UserName
                      </Typography>
                    </Box>
                    <CustomChip AI_type={product.prompt_type} />
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      width: '100%',
                      height: '30%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                      }}
                    >
                      <Typography variant="subtitle2">{product.id}</Typography>
                      <Typography variant="subtitle2">
                        {product.price}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        gap: '4px',
                      }}
                    >
                      <Typography variant="body2" sx={{ height: '32px' }}>
                        {product.like}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                          color: 'white',
                        }}
                        onClick={(e) => handleLikeClick(e)}
                      >
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </CardActions>
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
