import React, { useState } from "react";
import Swal from "sweetalert2";

function Jionus() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
   
    const formData = new FormData(event.target);

    formData.append("access_key", "805e0f94-3dc2-45cc-a958-970d4d79040f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Successfully, I have accepted your requst! ☺️',
        text: 'Thank you for joining us!',
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container flex justify-center items-center m-auto">
      

      {/* Contact Form */}
      <div className="contact-form mt-8 p-[45px] flex flex-col justify-center items-center">
        
        <form onSubmit={onSubmit} className="w-[600px] m-auto mt-[20px] bg-[#ffff] p-[32px] flex flex-col items-center border rounded-2xl shadow-2xl">
          <h2 className="text-[36px] text-blue-400 font-[600] font-inter mb-6">Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="text-[18px] p-[14px] border-none outline-none bg-gray-200 w-[100%] mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="text-[18px] p-[14px] border-none outline-none bg-gray-200 w-[100%] mb-4"
          />
          <input
            type="number"
            name="number"
            placeholder="Your mobile number"
            required
            className="text-[18px] p-[14px] border-none outline-none bg-gray-200 w-[100%] mb-4"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="text-[18px] p-[14px] border-none outline-none bg-gray-200 w-[100%] mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-[140px] h-[40px] rounded bg-blue-500 text-white border-none cursor-pointer font-inter mt-4"
          >
            Submit Form
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>

  );
}

export default Jionus