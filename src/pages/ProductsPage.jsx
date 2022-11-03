
import { ListProducts } from '../components/ListProducts'

export const ProductsPage = ({data, isLoading}) => {

  return (
    <>
        <h1>Products Page</h1>
        <hr />
        <ListProducts data={data} isLoading={isLoading}/>
    </>
  )
}
