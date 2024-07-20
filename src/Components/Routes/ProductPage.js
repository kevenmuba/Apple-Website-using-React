import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
/*yihie as param single page lay type yetederegew mn endehone detect yemiyaregln new */
import ErrorPage from './ErrorPage'
function ProductPage() {
  const [products, setProducts] = useState([]);
  console.log(useParams());
	const {productID} = useParams();
  console.log(productID);

	useEffect(() => {
    console.log("Product ID from URL:", productID);
		fetch("/iphone.json")
			.then((res) => res.json())
			.then((data) => {
				const productList = data.products;
				const singleProduct = productList.filter(
					(product) => product.Id === productID
				);
				setProducts(singleProduct);
			})
			.catch(() => console.log("Error: unable to fetch!!"));
	}, [productID]);
  console.log(products.length);// yihie 0 kehone databasew wust mnm neger slele yefelegew route error messagun yametaletal
  if (products.length) {
		return (
			<div>
				<section className="internal-page-wrapper">
					<div className="container">
            
          
						{products.map((product) =>{ 
							let id = product.Id;
							let title = product.Title;
							let img = product.img;
							let Brief = product.Brief;
							let StartPrice = product.StartPrice;
							let PriceRange = product.PriceRange;
							let productPage = "/iphone/" + id;
							let details = product.Description;
							let productDiv = (
								<div key={id}>
                  
									<div className="row justify-content-center text-center">
										<div className="col-12 mt-5">
											<div className="title-wraper font-weight-bold">
												{title}
											</div>
											<div className="brief-description">{Brief}</div>
										</div>
									</div>

									<div className="row justify-content-center text-center product-holder h-100">
										<div className={`col-sm-12 col-md-6 my-auto`}>
											<div className="starting-price">
												{`Starting at ${StartPrice}`}
											</div>
											<div className="monthly-price">{PriceRange}</div>
											<div className="product-details">{details}</div>
										</div>

										<div className={`col-sm-12 col-md-6`}>
											<div className="prodict-image">
												<img src={img} alt="product" />
											</div>
										</div>
									</div>
								</div>
							);
							return productDiv;
						})}
					</div>
				</section>
			</div>
		);
	} else {
    
		return <ErrorPage />;
    
}
}


export default ProductPage
