import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPhoneAlt , FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { paymentSchema } from '@/utility/Schemas/Payment/schema';
import airtel from '../../assets/Airtel.png'
import Mtn from '../../assets/Mtn.jpeg';
import { useSubscribeMutation } from '@/features/subscription/subscriptionApi';
const InitiatePayment:React.FC = () => {
  const paymentMethods = [
    { id: "airtel", image: airtel, alt: "Airtel" },
    { id: "mtn", image: Mtn, alt: "MTN" },
  ];
  const [subscribe, { isLoading }] =
  useSubscribeMutation();
  const [selectedMethod, setSelectedMethod] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (value : any) => {
    try {
      if (!selectedMethod) {
        toast.error("Please select payment method");
        return;
      }

      const plan =
        new URLSearchParams(
          window.location.search
        ).get("plan");

      if (!plan) {
        toast.error("Plan not found");
        return;
      }

    const response = await subscribe({
      plan,
      phone_number: value.phone,
      channel_name: selectedMethod,
    }).unwrap();

    localStorage.setItem(
      "transaction_id",
      response.transaction_id
    );

    toast.success(response.message);

  } catch (error: any) {
    toast.error(
      error?.data?.message ??
      "Payment initiation failed"
    );
  }
  
  }
  return (
    <div className='relative flex justify-around mt-2 items-center max-lg:block'>

      <div className='flex rounded-2xl text-gray-500 flex-col gap-4  bg-white mt-10 p-10 items-center shadow-lg shadow-blue-500/20'>
        <h1 className='text-lg'>Payment Details </h1>
        <div className='flex gap-1'>
          <span className='border-2 border-blue-300 w-8 rounded-2xl'></span>
          <span className='border-2  border-blue-300 w-1 rounded-2xl'></span>
          <span className='border-2  border-blue-300 w-8 rounded-2xl'></span>
        </div>
        <p>Subscribe to {new URLSearchParams(window.location.search).get('plan') || 'Premium'} Plan</p>
        <div className='flex gap-2 items-center'>
          <h1 className='text-3xl'>{new URLSearchParams(window.location.search).get('price') || '0.00'} Rwf</h1>
          <div>
            <span>per <br /> month</span>
            <FaArrowLeft size={20} className="absolute left-0 cursor-pointer top-0 text-gray-500" onClick={() => {navigate('/dashboard/subscription')}}/>
          </div>
        </div>
      </div>
        
      <div className='flex rounded-2xl p-10 flex-col gap-4 bg-white mt-10 items-center shadow-lg shadow-blue-500/20'>
        <h1 className='text-gray-500'>Choose Payment Method</h1>
        <div className='flex gap-4 mb-3'>
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelectedMethod(method.id)}
                className={`
                  p-2  border transition-all cursor-pointer rounded-lg
                  ${
                    selectedMethod === method.id
                      ? "border-blue-400 bg-blue-100"
                      : "border-gray-200"
                  }
                `}
              >
                <img
                  src={method.image}
                  alt={method.alt}
                  className='w-20 h-20'
                />
              </button>
            ))}
          </div>
         <Formik
                      initialValues={{ phone: ''}}
                      onSubmit={(values) => handlesubmit(values)}
                      validationSchema={paymentSchema}
                    >
                      {({ values, handleChange, handleSubmit, isValid, errors }) => (
                        <form onSubmit={(e) => {
                          handleSubmit(e)
                          if(!isValid) {
                            Object.values(errors).forEach((err) => {
                              toast.error(err as string);
                            })
                          }
                          }}>
                          <div className="relative">
                            <FaPhoneAlt className="absolute left-3 top-3 text-gray-500" />          
                            <input
                              type="number"
                              name="phone"
                              placeholder="Phone number"
                              value={values.phone}
                              onChange={handleChange}
                              className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          
                          <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-4 cursor-pointer
                           `}
                        >
                        {isLoading ? "Processing..." : "Subscribe"} 
                       </button>
                      </form>
                      
                      )}
                    </Formik>
                  <p className='text-gray-400 text-[13px] text-center'>By confirming your subscription, you allow to charge you for <br /> future payments in accordance with terms. You can <br /> always cancel your subscription.</p>
      </div>
    </div>
  )
}

export default InitiatePayment


//${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 cursor-pointer"}
                       