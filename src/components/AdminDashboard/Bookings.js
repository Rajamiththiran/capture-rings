import { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { formatDistanceToNow } from 'date-fns';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set root element for accessibility

export const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      const querySnapshot = await getDocs(collection(db, 'appointments'));
      setBookings(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    fetchBookings();
  }, []);

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  const markAsCompleted = async (id) => {
    const bookingDoc = doc(db, 'appointments', id);
    await updateDoc(bookingDoc, { status: 'completed' });
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, status: 'completed' } : booking
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
      <table className="table-auto w-full bg-white shadow-md border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Package</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Booked</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border px-4 py-2">
                {booking.fname} {booking.lname}
              </td>
              <td className="border px-4 py-2">{booking.title}</td>
              <td className="border px-4 py-2">{booking.price}</td>
              <td className="border px-4 py-2">
                {formatDistanceToNow(booking.createdAt.toDate())} ago
              </td>
              <td className="border px-4 py-2">{booking.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => openModal(booking)}
                  className="bg-blue-500 text-white px-4 py-1 mr-2 rounded"
                >
                  View
                </button>
                {booking.status === 'pending' && (
                  <button
                    onClick={() => markAsCompleted(booking.id)}
                    className="bg-green-500 text-white px-4 py-1 rounded"
                  >
                    Complete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Viewing Booking Details */}
      {selectedBooking && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Booking Details"
          className="fixed inset-0 flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Booking Details</h2>
            <div className="mb-4">
              <strong>Name:</strong> {selectedBooking.fname}{' '}
              {selectedBooking.lname}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {selectedBooking.email}
            </div>
            <div className="mb-4">
              <strong>Phone Number:</strong> {selectedBooking.phone}
            </div>
            <div className="mb-4">
              <strong>Date:</strong> {selectedBooking.date}
            </div>
            <div className="mb-4">
              <strong>Time:</strong> {selectedBooking.time}
            </div>
            <div className="mb-4">
              <strong>Package:</strong> {selectedBooking.title}
            </div>
            <div className="mb-4">
              <strong>Amount:</strong> {selectedBooking.price}
            </div>
            <div className="mb-4">
              <strong>Team:</strong> {selectedBooking.team || 'N/A'}
            </div>
            <div className="mb-4">
              <strong>Duration:</strong> {selectedBooking.duration || 'N/A'}{' '}
              hours
            </div>
            <div className="mb-4">
              <strong>Status:</strong> {selectedBooking.status}
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                type="button"
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
