import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { db } from '../../firebase/firebase-config';

export const Summary = ({ formData, nextStep, prevStep }) => {
  const handleConfirm = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(
        db,
        'appointments',
        `${formData.email}-${formData.date}-${new Date().getDate()}`
      );

      await setDoc(docRef, {
        ...formData,
        createdAt: new Date(),
        status: 'pending',
      });
      console.log('Document successfully written!');

      nextStep();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="m-6 text-center">
      {/* Add a image */}
      <h2 className="text-2xl font-bold mb-2">Summary</h2>
      <p className="text-lg mb-4 text-gray-500">
        Your appointment booking summary
      </p>

      <p className="mb-2">Customer</p>
      <p className="mb-4">
        <strong>
          {formData.fname} {formData.lname}
        </strong>
      </p>

      <div className="flex items-center justify-center gap-4 text-left">
        <div>
          <p className="mb-2">Service</p>
          <p className="mb-2">
            <strong>{formData.title}</strong>
          </p>
        </div>
        <div className="border-2 h-16 my-4"></div>
        <div>
          <p className="mb-2">Date & Time</p>
          <p className="mb-2">
            <strong>{formData.date}</strong>,<strong>{formData.time}</strong>
          </p>
        </div>
      </div>
      <div className="border w-full my-4"></div>

      <div className="py-2 px-10 flex justify-between">
        <strong>Total Price</strong>
        <strong>
          <p>Rs {formData.price}.00</p>
        </strong>
      </div>
      <div className="border w-full my-4"></div>
      <div className="flex justify-end gap-4">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="bg-primaryBtn text-white px-4 py-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
