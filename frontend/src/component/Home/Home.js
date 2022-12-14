import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { GiLindenLeaf } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="SAMATHE BALANCE" />

          <div className="banner">
         <Link to="/search"><MdSearch size="3rem" color="black"/></Link>
         <Link to="/cart"><MdAddShoppingCart className="s" size="3rem" color="black"/></Link>
             <div className="text">
            <span>J</span>
            <span>O</span>
            <span>I</span>
            <span>N</span>
            &nbsp;
            &nbsp;
            &nbsp;
            <span>S</span>
            <span>A</span>
            <span>M</span>
            <span>A~</span>
            &nbsp;
            &nbsp;
            &nbsp;
            <span>T</span>
            <span>H</span>
            <span>E</span>
            &nbsp;
            &nbsp;
            &nbsp;
            <span>B</span>
            <span>A</span>
            <span>L</span>
            <span>A</span>
            <span>N</span>
            <span>C</span>
            <span>E</span>
            &nbsp;
            &nbsp;
            &nbsp;
            <span>M</span>
            <span>O</span>
            <span>V</span>
            <span>E</span>
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
            </div>
            {'' /*<h1>FIND SOME HEALTHY PRODUCTS BELOW</h1>*/}

          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="good">
          <h2 className="homeHeading">OUR ORGANIC HONEY</h2>
          
          <video autoPlay className="video">
            <source src="/Video/WhatsApp-Video-2022-11-29-at-12.37.57-AM.mp4" type="video/mp4" />
          </video>
          
          {/*<div className="left">
          <h1>PREMIUM QUALITY HONEY<hr/></h1>
          <ol>
            <li>No Added Preservatives</li>
            <li>No Added Sugar</li>
            <li>100% Natural</li>
            <li>Free From Heavy Metal<br/>Contaminants</li>
            <li>No Added Preservatives</li>
          </ol>
          </div>*/}
        
</div>
       <div className="wrapper">
        <h1>OUR SERVICES</h1>
        <p>We are a organic store promoting wellbeing</p>
        <div className="content-box">
          <div className="card">
          <BsFillAlarmFill className="i"color="pink" size="2.5rem"/>
          <h2>Fast Delivery</h2>
          <p>Free delivery of orders above Rs 500</p>
          </div>
          <div className="card">
          <GiLindenLeaf className="i" color="green" size="2.5rem"/>
          <h2>100% Organic Products</h2>
          <p>The products are organic and cruelty free</p>
          </div>
          <div className="card">
          <GrYoga className="i" color="blue" size="2.5rem"/>
          <h2>Healthy Lifestyle</h2>
          <p>Sama focuses on healthy and balanced lifestyle</p>
          </div>
        </div>
       </div>
       </Fragment>
      )}
    </Fragment>
  );
};

export default Home;