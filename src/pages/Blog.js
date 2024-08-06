// src/BlogPage.js

import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    date: 'August 1, 2024',
    author: 'Author One',
    excerpt:
      'This is the excerpt for the first blog post. It gives a brief overview of the content.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/blog/1',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    date: 'August 2, 2024',
    author: 'Author Two',
    excerpt:
      'This is the excerpt for the second blog post. It gives a brief overview of the content.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/blog/2',
  },
  // Add more blog posts here
];

const categories = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
];

export const Blog = () => {
  return (
    <section>
      <Header />
      <div className="container mx-auto mt-20 px-6 md:px-36 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 font-domine">
          Our Blog
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 md:pr-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="mb-8 flex flex-col md:flex-row">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full md:w-48 h-auto object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <div className="text-gray-500 mb-2">
                    <span>{post.date}</span> | <span>{post.author}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <a href={post.link} className="text-primaryBtn font-semibold">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/3">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <a
                      href={`/category/${category}`}
                      className="text-primaryBtn hover:underline"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
