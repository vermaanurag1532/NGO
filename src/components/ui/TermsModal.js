import React from "react";

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Terms and Conditions</h2>
        <p className="mb-4">
          By volunteering with us, you agree to the following terms and
          conditions:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>You will commit to your chosen volunteer role.</li>
          <li>You agree to provide accurate information for certification.</li>
          <li>
            You understand that your information will be used to provide
            certifications of successful completion of your role.
          </li>
          <li>
            You agree to follow all guidelines and procedures set by the
            organization.
          </li>
          <li>
            Your participation may be subject to change based on organizational
            needs.
          </li>
        </ul>
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
