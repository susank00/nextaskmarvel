"use client";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-red-700 to-black text-white flex flex-col items-center justify-center p-6 font-serif">
      <h1 className="text-5xl mb-6 text-center">About Us</h1>
      <p className="text-lg mb-4 text-center">
        Welcome to the Marvel Universe, where heroes and villains collide in an
        epic saga that transcends time and space. Our mission is to celebrate
        the extraordinary stories of Marvel’s iconic characters, bringing their
        adventures to life for fans of all ages.
      </p>
      <h2 className="text-3xl mb-4 text-center">Our Mission</h2>
      <p className="text-lg mb-6 text-center">
        At Marvel, we aim to inspire and entertain. We believe in the power of
        storytelling and the importance of heroism, teamwork, and resilience.
        Our goal is to create an immersive experience that allows fans to
        explore the Marvel Universe through comics, movies, games, and more.
      </p>

      <h2 className="text-3xl mb-4 text-center">Our Values</h2>
      <ul className="list-disc list-inside mb-6 text-center text-lg">
        <li>
          Creativity: We encourage innovation and creativity in all our
          projects.
        </li>
        <li>
          Diversity: We celebrate the diversity of our characters and fans.
        </li>
        <li>Community: We foster a sense of community among Marvel fans.</li>
        <li>
          Integrity: We strive to uphold the highest standards in storytelling.
        </li>
      </ul>

      <h2 className="text-3xl mb-4 text-center">Our History</h2>
      <p className="text-lg mb-6 text-center">
        Founded in 1939, Marvel has evolved into a powerhouse of storytelling,
        captivating audiences worldwide. From the pages of comic books to the
        silver screen, our characters have become cultural icons, uniting fans
        in their love for heroism and adventure.
      </p>

      <div className="mt-8 flex justify-center">
        <img
          src="/marvellogo.png" // Replace with your actual image path
          alt="Marvel Logo"
          className="h-32 mb-4"
        />
      </div>

      <h2 className="text-3xl mb-4 text-center">Join Us!</h2>
      <p className="text-lg text-center">
        Whether you’re a lifelong fan or new to the Marvel Universe, we invite
        you to join us on this incredible journey. Explore our site, connect
        with fellow fans, and discover the amazing world of Marvel!
      </p>
    </div>
  );
};

export default AboutUsPage;
