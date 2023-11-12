import Grid from "@mui/material/Unstable_Grid2";
import ProductItem from "./productItem";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Products() {
  return (
    <Grid container spacing={2}>
      {arr.map((i, j) => (
        <Grid xs={4} key={i + j}>
          <ProductItem></ProductItem>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
