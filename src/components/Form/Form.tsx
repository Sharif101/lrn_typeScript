import React, { useState } from "react";

// এখানে আমরা UserData নামে একটা custom টাইপ বানিয়েছি। এটা বলছে: name আর email হবে string, আর age হবে number। TypeScript এই টাইপ ব্যবহার করে আমাদের ডাটার ধরন চেক করে।
type UserData = {
  name: string;
  age: number;
  email: string;
};

// এটা হচ্ছে state variable। formData-তে আমরা ইউজার ইনপুট রাখব। শুরুতে সব ফাঁকা (empty) বা age এর ক্ষেত্রে ০। <UserData> মানে হলো এই স্টেটের ধরন হবে UserData টাইপের মতো।
export default function Form() {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    age: 0,
    email: "",
  });

  // submitted স্টেট ইউজ করা হচ্ছে সাবমিট করার পর ডাটা দেখানোর জন্য। শুরুতে এটি null, কারণ ইউজার এখনো কিছু সাবমিট করেনি।  টাইপ: UserData অথবা null (TypeScript এ লিখা হয় UserData | null)
  const [submitted, setSubmitted] = useState<UserData | null>(null);

  // এটা ইনপুটের ভ্যালু চেঞ্জ হলে চলে। e.target থেকে name এবং value বের করি। তারপর formData আপডেট করি — ...formData মানে আগের সব রাখি, শুধু name ফিল্ড আপডেট করি।
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // React.FormEvent টাইপ দিয়ে TypeScript-কে বলা হচ্ছে: “এটা একটা ফর্ম সাবমিশনের ইভেন্ট।” তুমি e.preventDefault() লিখলে TypeScript জানে এটা বৈধ, কারণ এটা FormEvent।
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-6">
      <p className="text-sm text-gray-500 mb-2">Ex: 02</p>
      <p className="text-xl font-bold mb-4 text-gray-800">User Form</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-6 bg-gray-50 p-4 rounded-md border relative">
          <button
            onClick={() => {
              setSubmitted(null);
              setFormData({ name: "", age: 0, email: "" });
            }}
            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold focus:outline-none"
            aria-label="Clear"
          >
            ×
          </button>

          <p className="text-gray-700">
            <strong>Name:</strong> {submitted.name}
          </p>
          <p className="text-gray-700">
            <strong>Age:</strong> {submitted.age}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {submitted.email}
          </p>
        </div>
      )}
    </div>
  );
}
