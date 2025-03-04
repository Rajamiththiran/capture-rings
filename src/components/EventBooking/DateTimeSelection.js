import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const DateTimeSelection = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [date, setDate] = useState(
    formData.date ? new Date(formData.date) : new Date()
  );
  const [time, setTime] = useState(formData.time || '');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleNext = () => {
    setFormData({ ...formData, date: date.toISOString().split('T')[0], time });
    nextStep();
  };

  return (
    <div className="m-6">
      <h2 className="text-2xl font-bold mb-4"> Date & Time</h2>
      <div className="flex gap-10 items-start">
        <div>
          <label className="block mb-2">Date</label>
          <div className="mb-4">
            <Calendar
              value={date}
              onChange={handleDateChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Time Slot</label>
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: 'Afternoon', value: '3:00 pm - 6:00 pm' },
              { name: 'Evening', value: '6:00 pm - 9:00 pm' },
              { name: 'Night', value: '9:00 pm - 12:00 am' },
            ].map((slot) => (
              <>
                <label key={slot} className="flex items-center">
                  {slot.name}
                </label>
                <button
                  key={slot}
                  className={`p-2 border rounded-lg ${
                    time === slot.value
                      ? 'bg-purple-500 text-white'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => handleTimeChange(slot.value)}
                >
                  {slot.value}
                </button>
              </>
            ))}
          </div>
        </div>
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
          onClick={handleNext}
          className="bg-primaryBtn text-white px-4 py-2 rounded-lg"
        >
          Next: Basic Details
        </button>
      </div>
    </div>
  );
};
