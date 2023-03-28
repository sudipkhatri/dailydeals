import React, {useState, useRef} from 'react';
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {FaTiktok} from "react-icons/fa";
import { ebay, amazon } from '../Assets/Images/list';
import emailjs from "@emailjs/browser";

 
const Footer = () => {

  const [form, setForm] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();


  const pass = process.env.REACT_APP_PASS;
  const uId = process.env.REACT_APP_UID;
  const user = process.env.REACT_APP_USER;
  console.log(pass, uId, user)
  
   const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
            `${pass}$`,
            uId,
            e.target,
            user,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            email: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='w-full bg-zinc-50 shadow-lg shadow-slate-100 min-h-fit mt-10'>
      <div className="flex items-center justify-center h-full flex-col gap-3 py-4">
        <div className="w-10/12 flex flex-col justify-start items-start">
          <h1 className='font-bold text-3xl my-2'>Partners</h1>
          <div className="flex my-3 gap-5">
            <img src={ebay} className="w-[100px] h-[40px] cursor-pointer"  alt="ebay partners" />
             <img src={amazon} className="w-[100px] h-[40px] cursor-pointer"   alt="ebay partners" />
          </div>
        </div>
        <p className='text-black font-light 2xl:text-[24px] text-[17px] w-10/12 mt-0'>
           Welcome to our website, where we bring you the best products from top brands across
          various categories. Our team is dedicated to sourcing high-quality items that we 
          believe will add value to your life, whether you're looking for the latest tech 
          gadgets, stylish fashion accessories, or innovative home goods. 
        </p>
        <p className='text-black font-light 2xl:text-[24px] text-[17px] w-10/12 mt-0'>
           We've partnered with some of the most trusted brands in the industry to bring you 
           a wide range of products that are sure to meet your needs and exceed your expectations.
          From luxury skincare to high-tech home appliances, we've got something for everyone.
        </p>
        <p className='text-black font-light 2xl:text-[24px] text-[17px] w-10/12 mt-0'>
          We take pride in our selection process and only recommend products that we have personally
          tested and loved. We believe in transparency, which is why we provide detailed product
          descriptions, reviews, and ratings to help you make an informed decision before making a purchase.
        </p>
        <p className='text-black font-light 2xl:text-[24px] text-[17px] w-10/12 mt-0'>
          We're passionate about helping our customers find the products that they need and love.
          By shopping through our website, you can enjoy the convenience of finding all your favorite
          products in one place, as well as exclusive deals and discounts. Plus, you can feel good
          about supporting our small business and helping us continue to curate the best products for you.
        </p>
      </div>
      <div className="w-10/12 mx-auto">
      <div className="flex justify-start items-start flex-col">
        <h3 className= "text-3xl font-bold" >Subscribe To Our Newsletter.</h3>
          <form className='w-10/12 sm:w-[480px] flex flex-wrap justify-between mt-4 rounded-xl flex gap-4' 
          ref={formRef}
          onSubmit={handleSubmit}
          >
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 w-full placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          <button
            type='submit'
            className='bg-tertiary py-2 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
          </form>
      </div>
    </div>
      <div className="w-full bg-primary h-[100px]">
        <div className="w-8/12 flex gap-5 justify-center items-center mx-auto mt-4 py-4 h-full">
          <a className='text-white text-slate-300' href='https://www.facebook.com/profile.php?id=100091296310268' rel="noreferrer" target={"_blank"}>
             <BsFacebook size={30}/> 
          </a>
          <a className='text-white text-slate-300' href='https://www.instagram.com/daily_deal25/' rel="noreferrer" target={"_blank"}>
             <BsInstagram size={30}/> 
          </a>
          <a className='text-white text-slate-300' href='https://www.tiktok.com/@salesiren' rel="noreferrer" target={"_blank"}>
             <FaTiktok size={30}/> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
