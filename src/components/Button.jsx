function Button({ children }) {
  return (
    <button
      className="px-12 py-3 text-white font-semibold rounded-3xl  bg-linear"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {children}
    </button>
  );
}

export default Button;
