import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';


function Iphone() {

  const [Products,setProducts]= useState([]);
  useEffect(()=>{
    fetch(
      "/iphone.json"
    )
    .then((response)=> response.json())
    .then((data)=>{
      const ProductsData = data.products;
      setProducts(ProductsData)
    })

  },[]);
  console.log(Products)
  

  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper">
					<div className="container"> 
						<div className="row justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper">
									iPhones 
								</div>
								<div className="brief-description">
									The best for the brightest
								</div>
							</div> 
						</div>
						{
							Products.map((product) => {
								let id = product.Id;
								let productPage = "/iphone/"+id;

								let order1 = 1;
								let order2 = 2;
								if(order != 1)	{
									order1 = 2;
									order2 = 1;
									order--;
								}else{
									order++;
								}

								let productDiv =
								<div key={id} className="row justify-content-center text-center product-holder h-100">
									<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
										<div className="product-title">
											{product.Title}
										</div>
										<div className="description-wraper">
											{product.Brief}
										</div>
										<div className="price-wrapper">
											{`Starting at ${product.StartPrice}`}
										</div>
										<div className="monthly-price">
											{product.PriceRange}
										</div>
										<div className="links-wrapper">
											<ul>
												<li>
													<Link to={productPage}>Learn more
													</Link>
												</li>
											</ul> 
										</div>
									</div> 

									<div  className={`col-sm-12 col-md-6 order-${order2}`}>
										<div className="prodict-image">
											<img src={ product.img}/>
										</div>
									</div> 
								</div>								
								;
								return productDiv; 
							})
						}
				
					</div>
				</section>
    </div>
  )
}

export default Iphone
