
import { useEffect, useState } from 'react';
import ArticleList from './Components/Article/ArticleList';
import ButtonsList from './Components/buttons/ButtonsList';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Section1/Product';
import { data } from './data';


export default function App() {
  
const [allProducts, setAllProducts] = useState([]);
const [total, setTotal]= useState(0);  
const [countProducts, setCountProducts] = useState(0);
const allCategories =[ 'All',...new  Set(data.map(article=> article.category))
];

const [categories, setCategories] = useState (allCategories)
const  [articles, setArticles] = useState(data)

const filterCategory= (category) => {
  if (category ==='All'){
    setArticles(data)
    return
  }
  const filteredData = data.filter (
    (article) => article.category === category
  );
  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("carrito")) ??[];
    const totalLS = JSON.parse (localStorage.getItem ("total")) ?? 0;
    const countProductsLS = JSON.parse(localStorage.getItem("countProducts")) ?? 0;
    setAllProducts(cartLS);
    setTotal(totalLS <0 ? 0: totalLS);
    setCountProducts(countProductsLS <0?0: countProductsLS);
    console.log('totalLS',totalLS);
    console.log('countProductsLS, countProductsLS');
    console.log("cartsLS,cartsLS ");

  }
  )
}

  return (
    <>
    <Navbar/>
    <Home/>
    <Product/>
    <ArticleList categories={categories}filterCategory= {filterCategory}/>
    <ButtonsList categories={articles}/>
    </>
  );
}
