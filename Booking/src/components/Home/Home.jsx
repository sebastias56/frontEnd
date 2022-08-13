import Categories from "../Categories/Categories";
import ProductsList from "../ProductList/ProductList";
import SearchBar from "../SearchBar/SearchBar";



export default function home({ dateRange, setDateRange }) {

    return (
        <>
            <SearchBar dateRange={dateRange} setDateRange={setDateRange} />
            <Categories />
            <ProductsList dateRange={dateRange} />
        </>
    )
}
