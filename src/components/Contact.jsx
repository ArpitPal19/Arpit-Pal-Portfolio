import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    try {
      const response = await fetch(
        "https://arpit-portfolio-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
      className="bg-dark-200 py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Have a project in mind or want to connect? Let's talk.
        </p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 text-white lg:grid-cols-2">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-gray-300">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-dark-400 bg-dark-300 px-4 py-3 text-white outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-gray-300">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-dark-400 bg-dark-300 px-4 py-3 text-white outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full resize-y rounded-lg border border-dark-400 bg-dark-300 px-4 py-3 text-white outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/30"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-purple px-6 py-3 font-medium text-white transition duration-300 hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-4 mt-1 text-2xl text-purple" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Location</h3>
                <p className="text-gray-400">Delhi, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="mr-4 mt-1 text-2xl text-purple" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Email</h3>
                <a
                  href="mailto:palarpit491@gmail.com"
                  className="text-gray-400 transition hover:text-purple"
                >
                  palarpit491@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="mr-4 mt-1 text-2xl text-purple" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                <a
                  href="tel:+918787274901"
                  className="text-gray-400 transition hover:text-purple"
                >
                  +91 87872 74901
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="mb-4 text-lg font-semibold">Connect With Me</h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/ArpitPal19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-300 text-purple transition duration-300 hover:bg-purple hover:text-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/arpit-pal-54b873238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-300 text-blue-400 transition duration-300 hover:bg-blue-400 hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
