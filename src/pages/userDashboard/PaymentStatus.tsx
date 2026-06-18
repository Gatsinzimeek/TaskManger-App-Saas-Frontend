import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useLazyGetPaymentStatusQuery,
  useProcessPaymentMutation,
} from "@/features/subscription/subscriptionApi";

const PaymentStatus = () => {
  const [status, setStatus] = useState<string>('');
  const navigate = useNavigate();

  const [getPaymentStatus] =
    useLazyGetPaymentStatusQuery();

  const [processPayment] =
    useProcessPaymentMutation();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response =
          await getPaymentStatus().unwrap();

        const status =
          response.status;
        setStatus(status);
        if (status === "VALID") {

          clearInterval(interval);

          await processPayment().unwrap();

          toast.success(
            "Subscription Activated"
          );

          navigate("/dashboard");
        }

        if (status === "FAILED") {

          clearInterval(interval);

          toast.error(
            "Payment Failed"
          );

          navigate(
            "/dashboard/subscription"
          );
        }

      } catch (error) {
        console.log(error);
      }
    }, 5000);

    return () =>
      clearInterval(interval);

  }, [
    getPaymentStatus,
    processPayment,
    navigate,
  ]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {
          status === 'PENDING' || status === 'PENDING_SETTLEMENT' ? (
            <>
            <h2 className="text-xl font-bold">
              Waiting for payment confirmation...
            </h2>

            <p className="text-gray-500 mt-2">
              Complete the MoMo payment on your phone.
            </p>
            </>
          ) : (
            <>
              <p>failed</p>
            </>
          )
        }
        
      </div>
    </div>
  );
};

export default PaymentStatus;