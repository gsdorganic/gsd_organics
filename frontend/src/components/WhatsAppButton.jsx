import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919050174500"; // Replace with your number
  const message =
    "🌿 Namaste! Thank you for visiting GSD Organics — your trusted source for pure and natural organic products. How may we assist you today? 😊";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-10 left-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0 0 12.07.5C6.13.5 1.1 5.53 1.1 11.47c0 2.02.53 3.98 1.53 5.7L.5 23.5l6.52-2.11a11.98 11.98 0 0 0 5.05 1.11h.01c5.95 0 10.98-5.03 10.98-11 0-3.04-1.18-5.9-3.3-8.02ZM12.07 21.5a9.92 9.92 0 0 1-4.88-1.27l-.35-.2-3.86 1.25 1.28-3.76-.22-.38A9.94 9.94 0 0 1 2.1 11.47c0-5.5 4.48-9.97 9.97-9.97 2.67 0 5.18 1.04 7.06 2.93a9.89 9.89 0 0 1 2.93 7.05c0 5.5-4.47 9.97-9.97 9.97Zm5.06-7.35c-.28-.14-1.66-.82-1.91-.91-.26-.1-.45-.14-.64.14-.2.28-.74.91-.91 1.1-.17.18-.34.2-.63.07a8.14 8.14 0 0 1-2.4-1.47 9.06 9.06 0 0 1-1.67-2.07c-.17-.3 0-.47.13-.61.13-.13.28-.34.42-.5.14-.17.18-.28.27-.46.09-.18.05-.34-.03-.49-.07-.14-.63-1.51-.87-2.06-.23-.54-.46-.46-.63-.46h-.54c-.18 0-.46.07-.7.34s-.92.9-.92 2.2 1.07 2.56 1.22 2.74c.14.18 2.1 3.2 5.1 4.37.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.66-.68 1.9-1.34.24-.67.24-1.25.17-1.34-.07-.09-.25-.14-.53-.28Z" />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
