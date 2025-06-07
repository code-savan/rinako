"use client"

import React, { useState } from "react";
import { CheckCircle, Info, Shield, FileText, Copy, UploadCloud } from "lucide-react";

const giftDesignations = [
  "Where Most Needed",
  "Education Programs",
  "Healthcare Initiatives",
  "Emergency Relief",
  "Community Development",
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Nigeria",
  "Ghana",
  "Kenya",
  // ...add more as needed
];

const DonateForm = () => {
  const [amount, setAmount] = useState("100");
  const [selectedGifts, setSelectedGifts] = useState([]);
  const [donor, setDonor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    anonymous: false,
    updates: true,
  });
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [agree, setAgree] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const handleGiftChange = (gift) => {
    setSelectedGifts((prev) =>
      prev.includes(gift)
        ? prev.filter((g) => g !== gift)
        : [...prev, gift]
    );
  };

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Donate Today</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Your generosity helps us continue our mission to support vulnerable children and communities worldwide.
          </p>
        </div>
        <form className="bg-white rounded-2xl shadow ">
          {/* Donation Amount */}
          <div className="border-b border-b-gray-100 p-8 md:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Donation Amount</h3>
            <label className="block text-slate-700 font-medium mb-2" htmlFor="donation-amount">
              Enter Amount <span className="text-red-500">*</span>
            </label>
            <div className="relative mb-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
              <input
                id="donation-amount"
                type="number"
                min="1"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 text-lg font-medium bg-white outline-none transition"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <p className="text-slate-500 text-sm mb-6">Enter the amount you wish to donate (minimum $1)</p>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Gift Designation</h4>
            <div className="space-y-3 mb-2">
              {giftDesignations.map((gift) => (
                <label key={gift} className="flex items-center gap-3 cursor-pointer text-slate-800 text-base font-medium">
                  <input
                    type="checkbox"
                    className="form-checkbox w-5 h-5 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                    checked={selectedGifts.includes(gift)}
                    onChange={() => handleGiftChange(gift)}
                  />
                  {gift}
                </label>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-1">Select one or more programs for your donation. If no selection is made, your gift will be used where it's needed most.</p>
          </div>

          {/* Donor Information */}
          <div className="border-b border-b-gray-100 p-8 md:p-10 bg-slate-50">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Donor Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1">First Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={donor.firstName} onChange={e => setDonor({ ...donor, firstName: e.target.value })} />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={donor.lastName} onChange={e => setDonor({ ...donor, lastName: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-1  gap-4 mb-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={donor.email} onChange={e => setDonor({ ...donor, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Phone Number</label>
                <input type="tel" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={donor.phone} onChange={e => setDonor({ ...donor, phone: e.target.value })} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-slate-700 font-medium mb-1">Billing Address <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Street Address" className="w-full rounded-lg border border-slate-300 py-3 px-4 mb-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={donor.address} onChange={e => setDonor({ ...donor, address: e.target.value })} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input type="text" placeholder="City" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={donor.city} onChange={e => setDonor({ ...donor, city: e.target.value })} />
                <input type="text" placeholder="State/Province" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={donor.state} onChange={e => setDonor({ ...donor, state: e.target.value })} />
                <input type="text" placeholder="Zip/Postal Code" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={donor.zip} onChange={e => setDonor({ ...donor, zip: e.target.value })} />
              <div className="mt-2">
                <select className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-slate-50 text-slate-700" value={donor.country} onChange={e => setDonor({ ...donor, country: e.target.value })}>
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-2">
              <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                <input type="checkbox" className="form-checkbox w-5 h-5 text-sky-600 rounded border-slate-300" checked={donor.anonymous} onChange={e => setDonor({ ...donor, anonymous: e.target.checked })} />
                Make this donation anonymous
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                <input type="checkbox" className="form-checkbox w-5 h-5 text-sky-600 rounded border-slate-300" checked={donor.updates} onChange={e => setDonor({ ...donor, updates: e.target.checked })} />
                Receive updates about how your donation is making an impact
              </label>
            </div>
          </div>

          {/* Payment Information */}
          <div className="border-b border-b-gray-100 p-8 md:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Payment Information</h3>
            <div className="flex gap-4 mb-6">
              <button type="button" className={`flex-1 py-3 rounded-lg border text-base font-semibold flex items-center justify-center gap-2 transition ${paymentMethod === "bank" ? "border-sky-500 bg-sky-50 text-sky-700" : "border-slate-300 bg-white text-slate-700"}`} onClick={() => setPaymentMethod("bank")}> <Shield className="w-5 h-5" /> Bank Transfer </button>
              <button type="button" className={`flex-1 py-3 rounded-lg border text-base font-semibold flex items-center justify-center gap-2 transition ${paymentMethod === "card" ? "border-sky-500 bg-sky-50 text-sky-700" : "border-slate-300 bg-white text-slate-700"}`} onClick={() => setPaymentMethod("card")}> <FileText className="w-5 h-5" /> Credit Card </button>
            </div>
            {paymentMethod === "bank" && (
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Bank Name</label>
                    <div className="flex items-center bg-white rounded-lg border border-slate-200 px-4 py-3 text-slate-800 font-medium">Swiss National Bank <button type="button" className="ml-auto"><Copy className="w-4 h-4 text-slate-400" /></button></div>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Account Name</label>
                    <div className="flex items-center bg-white rounded-lg border border-slate-200 px-4 py-3 text-slate-800 font-medium">Rinako Foundation <button type="button" className="ml-auto"><Copy className="w-4 h-4 text-slate-400" /></button></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Account Number</label>
                    <div className="flex items-center bg-white rounded-lg border border-slate-200 px-4 py-3 text-slate-800 font-medium">CH93 0076 2011 6238 5295 7 <button type="button" className="ml-auto"><Copy className="w-4 h-4 text-slate-400" /></button></div>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1">SWIFT/BIC Code</label>
                    <div className="flex items-center bg-white rounded-lg border border-slate-200 px-4 py-3 text-slate-800 font-medium">SNBZCHZZXXX <button type="button" className="ml-auto"><Copy className="w-4 h-4 text-slate-400" /></button></div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-4">Please include your name and email in the transfer reference for easier tracking.</p>
                <div className="mb-4">
                  <label className="block text-slate-700 font-semibold mb-1">Upload Transfer Receipt</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center bg-white cursor-pointer">
                    <UploadCloud className="w-10 h-10 text-slate-400 mb-2" />
                    <span className="text-slate-500 mb-1">Drag and drop your receipt here or <span className="text-sky-600 underline cursor-pointer">Browse Files</span></span>
                    <span className="text-slate-400 text-xs">Supported formats: JPG, PNG, PDF (Max 5MB)</span>
                  </div>
                </div>
              </div>
            )}
            {paymentMethod === "card" && (
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <p className="text-slate-500 text-sm">Credit card payment form goes here.</p>
              </div>
            )}
            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" className="form-checkbox w-5 h-5 text-sky-600 rounded border-slate-300" checked={agree} onChange={e => setAgree(e.target.checked)} />
              <span className="text-slate-700 text-sm">I agree to the <a href="#" className="text-sky-600 underline">Terms & Conditions</a> and <a href="#" className="text-sky-600 underline">Privacy Policy</a> <span className="text-red-500">*</span></span>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-sky-500" />
                <span className="font-semibold text-slate-900">Secure Donation</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">Your donation is secure and encrypted. We use industry-standard security measures to protect your information.</p>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-sky-500" />
                <span className="font-semibold text-slate-900">Tax Deduction</span>
              </div>
              <p className="text-slate-600 text-sm">Your donation is tax-deductible to the extent allowed by law. You will receive a receipt for your records.</p>
            </div>
          </div>
          {/* Total Amount */}
           <div className="p-8 md:p-10 bg-slate-50">
           <div className=" rounded-xl  mb-6">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Donation Summary</h4>
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-700">Donation Amount:</span>
                <span className="font-semibold text-slate-900">${parseFloat(amount || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between items-center border-t border-t-gray-200 pt-2 mt-2">
                <span className="text-slate-900 font-bold">Total:</span>
                <span className="text-sky-600 font-bold text-lg">${parseFloat(amount || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
            </div>
            <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 transition-colors text-white font-semibold text-lg py-3 rounded-lg shadow mt-2">Complete Donation</button>
            <div className="flex items-center justify-center mt-2">
              <Shield className="w-4 h-4 text-slate-400 mr-1" />
              <span className="text-slate-400 text-xs">Secure donation processed by Stripe</span>
            </div>
           </div>
        </form>
      </div>
    </section>
  );
};

export default DonateForm;
