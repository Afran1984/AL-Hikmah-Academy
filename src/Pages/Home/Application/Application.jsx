import React, { useRef } from "react";

export default function AdmissionForm() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd normally send form data to your API
    const data = new FormData(formRef.current);
    const obj = Object.fromEntries(data.entries());
    console.log("Form submit:", obj);
    alert("Form submitted (check console).\nYou can also download the original PDF using the link below.");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">ভর্তির ফরম / Admission Form</h1>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">ছাত্রী/ছাত্রীর নাম (বং)</label>
          <input name="name_bn" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">ছাত্রী/ছাত্রীর নাম (English)</label>
          <input name="name_en" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">ভিতো নো (বং)</label>
          <input name="father_name_bn" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">ভিতো নো (English)</label>
          <input name="father_name_en" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">ছাত্রী/ছাত্রী জন্মনিবন্ধন নম্বর</label>
          <input name="birth_reg" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">স্থায়ী ঠিকানা</label>
          <textarea name="address" className="w-full border p-2 rounded" rows={3} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">ফোন/মোবাইল</label>
            <input name="phone" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">ই-মেইল</label>
            <input name="email" className="w-full border p-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block font-medium">ছাত্র/ছাত্রী স্বাক্ষর (parent/guardian)</label>
          <input name="signature" className="w-full border p-2 rounded" />
        </div>

        <div className="flex gap-3 items-center">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>

          {/* Link to the original uploaded PDF: adjust path if you move the file to your public folder */}
          <a
            href={"/Admission%20Form.pdf"}
            download
            className="px-4 py-2 border rounded"
            title="Download original PDF"
          >
            Download PDF (original)
          </a>
        </div>
      </form>

      <p className="mt-6 text-sm text-gray-600">Notes: put the provided `Admission Form.pdf` in your public/static folder so the download link works (or change the href to the correct URL).</p>
    </div>
  );
}
