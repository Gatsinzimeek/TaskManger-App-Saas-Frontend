import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdOutlineCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import {
  useLazyGetPaymentStatusQuery,
  useProcessPaymentMutation,
} from "@/features/subscription/subscriptionApi";

const PaymentStatus = () => {
  const [paymentStatus, setPaymentStatus] =
    useState<string>("PENDING");

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

        const currentStatus =
          response.status;

        setPaymentStatus(currentStatus);

        if (currentStatus === "VALID") {
          clearInterval(interval);

          await processPayment().unwrap();

          toast.success(
            "Subscription Activated"
          );

          navigate("/dashboard/task");
        }

        if (currentStatus === "FAILED") {
          clearInterval(interval);

          toast.error(
            "Payment Failed"
          );
        }
      } catch (error) {
        console.log(error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [
    getPaymentStatus,
    processPayment,
    navigate,
  ]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>

        {(paymentStatus === "PENDING" ||
          paymentStatus === "PENDING_SETTLEMENT") && (
          <>
            <h2 className="text-xl font-bold">
              Waiting for payment confirmation...
            </h2>

            <p className="text-gray-500 mt-2">
              Complete the payment on your phone.
            </p>
          </>
        )}

        {paymentStatus === "FAILED" && (
          <div className="text-center items-center flex flex-col gap-4">
            <div className="bg-white shadow-lg shadow-blue-500/30 rounded-full p-4"><MdOutlineCancel size={30} color="red" /></div>
            <p className="text-red-400">
              Payment failed. Please try again.
            </p>

            <button
              className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded mt-4"
              onClick={() =>
                navigate(
                  "/dashboard/subscription"
                )
              }
            >
              Retry Payment
            </button>
          </div>
        )}

        {paymentStatus === "VALID" && (
          <div className="text-center items-center flex flex-col gap-4">
            <div className="bg-white shadow-lg shadow-blue-500/30 rounded-full p-4"><FaCheck size={30} color="green" /></div>
            <p className="text-gray-500">
              Payment Successful! <br />
              You can now create more Tasks and manage your projects.
            </p>

            <button
              className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded mt-4"
              onClick={() =>
                navigate(
                  "/dashboard/tasks"
                )
              }
            >
              Check Tasks
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default PaymentStatus;