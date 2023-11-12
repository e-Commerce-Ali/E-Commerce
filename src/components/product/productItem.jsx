import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductItem() {
  return (
    <Card sx={{ cursor: "pointer" }}>
      <CardMedia
        sx={{ height: 220, objectFit: "fill" }}
        image="https://picsum.photos/200/300"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.light"
        >
          Ürün Adı
        </Typography>
        <Typography variant="body2" color="text.dark2">
          Ürün Açıklaması Lorem ipsum dolor sit amet.
        </Typography>
      </CardContent>
    </Card>
  );
}
