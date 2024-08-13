import React, { useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

Modal.setAppElement('#root'); // Set root element for accessibility

// Validation schema using Yup
const packageSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup
    .number()
    .required('Price is required')
    .positive('Price must be a positive number'),
  team: yup.string().required('Team selection is required'),
  duration: yup
    .number()
    .required('Duration is required')
    .positive('Duration must be a positive number'),
});

export const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [teams, setTeams] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(packageSchema),
  });

  useEffect(() => {
    const fetchData = async () => {
      // Fetch packages
      const packageSnapshot = await getDocs(collection(db, 'packages'));
      setPackages(
        packageSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      // Fetch teams
      const teamSnapshot = await getDocs(collection(db, 'teams'));
      setTeams(teamSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);

  const openModal = (packageData = null) => {
    if (packageData) {
      setEditId(packageData.id);
      reset({
        title: packageData.title,
        description: packageData.description,
        price: packageData.price,
        team: packageData.team,
        duration: packageData.duration,
      });
    } else {
      reset();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditId(null);
  };

  const onSubmit = async (data) => {
    if (editId) {
      const packageDoc = doc(db, 'packages', editId);
      await updateDoc(packageDoc, data);
    } else {
      await addDoc(collection(db, 'packages'), data);
    }
    const packageSnapshot = await getDocs(collection(db, 'packages'));
    setPackages(
      packageSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    closeModal();
  };

  const confirmDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      const packageDoc = doc(db, 'packages', id);
      await deleteDoc(packageDoc);
      const packageSnapshot = await getDocs(collection(db, 'packages'));
      setPackages(
        packageSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Packages</h2>
      <button
        onClick={() => openModal()}
        className="bg-blue-500 text-white p-2 mb-4"
      >
        Add New Package
      </button>
      <table className="table-auto w-full bg-white shadow-md">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Team</th>
            <th className="border px-4 py-2">Duration</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id}>
              <td className="border px-4 py-2">{pkg.title}</td>
              <td className="border px-4 py-2">{pkg.description}</td>
              <td className="border px-4 py-2">{pkg.price}</td>
              <td className="border px-4 py-2">{pkg.team}</td>
              <td className="border px-4 py-2">{pkg.duration} hours</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => openModal(pkg)}
                  className="bg-yellow-500 text-white px-4 py-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => confirmDelete(pkg.id)}
                  className="bg-red-500 text-white px-4 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Adding/Editing Package */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Package Form"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
          <h2 className="text-xl mb-4">
            {editId ? 'Edit Package' : 'Add New Package'}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                {...register('title')}
                className="border p-2 w-full"
                placeholder="Package Title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                {...register('description')}
                className="border p-2 w-full"
                placeholder="Package Description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                {...register('price')}
                className="border p-2 w-full"
                placeholder="Package Price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Team</label>
              <select {...register('team')} className="border p-2 w-full">
                <option value="">Select a Team</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.name}>
                    {team.name}
                  </option>
                ))}
              </select>
              {errors.team && (
                <p className="text-red-500 text-sm">{errors.team.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Duration (hours)</label>
              <input
                type="number"
                {...register('duration')}
                className="border p-2 w-full"
                placeholder="Shoot Time Duration"
              />
              {errors.duration && (
                <p className="text-red-500 text-sm">
                  {errors.duration.message}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                type="button"
                className="bg-gray-300 text-black px-4 py-2 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2"
              >
                {editId ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
