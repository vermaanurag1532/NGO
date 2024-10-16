import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/Card";
import config from "@/lib/config";

export default function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    donationPurpose: "",
    donationAmount: "",
    phone: "",
    comment: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [presetAmounts] = useState([500, 1000, 2000, 5000]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePresetClick = (amount) => {
    setFormData({
      ...formData,
      donationAmount: amount,
    });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const razorpayLoaded = await loadRazorpayScript();

    if (!razorpayLoaded) {
      toast.error("Failed to load payment gateway. Please try again.");
      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error("Failed to create donation. Please try again.");
      setIsLoading(false);
      return;
    }
    resetFormData();

    const { order_id, amount, currency } = data;

    const options = {
      key: config.public_key,
      amount: amount.toString(),
      currency: currency,
      name: config.appName,
      description: "Donation",
      image: config.logo,
      order_id: order_id,
      handler: async function (response) {
        const verificationResponse = await fetch("/api/paymentVerification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          }),
        });

        if (verificationResponse.ok) {
          toast.success(
            "Payment successful! A receipt has been sent to your email.",
          );
        } else {
          toast.error("Payment verification failed.");
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          toast.error("Payment was cancelled.");
        },
      },
      method: {
        netbanking: true,
        card: true,
        wallet: false,
        upi: true,
        upi_intent: true,
        upi_qr: true,
        paylater: false,
      },
    };

    const razorpayGateway = new window.Razorpay(options);
    razorpayGateway.open();

    setIsLoading(false);
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      donationPurpose: "",
      donationAmount: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <main className=" flex flex-col items-center min-h-screen py-12 px-4">
      <h1 className="text-5xl font-bold text-primary text-center">Donate</h1>
      <p className="text-xl text-gray-700 mt-8 leading-relaxed text-center w-[60%]">
        Your donation helps us continue our work of supporting elderly
        individuals, educating children, and empowering women.
      </p>
      <div className="max-w-xl mx-auto mt-6">
        <Toaster position="top-center" reverseOrder={false} />

        <Card className="shadow-lg ">
          <CardHeader>
            <CardTitle className="text-5xl font-bold text-primary text-center">
              Make a Donation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <FormField
                label="Donation Purpose"
                name="donationPurpose"
                type="text"
                value={formData.donationPurpose}
                onChange={handleChange}
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Donation Amount (₹)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handlePresetClick(amount)}
                      className={`py-2 px-4 rounded-md transition-all ${
                        formData.donationAmount === amount
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <FormField
                  name="donationAmount"
                  type="number"
                  value={formData.donationAmount}
                  onChange={handleChange}
                  placeholder="Or enter custom amount"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Comments
                </label>
                <textarea
                  name="comment"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.comment}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    Processing...
                  </span>
                ) : (
                  "Donate Now"
                )}
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
