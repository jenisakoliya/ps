

// // // import React, { useState } from "react";
// // // import PizZip from "pizzip";
// // // import Docxtemplater from "docxtemplater";
// // // import { saveAs } from "file-saver";

// // // export default function UploadEditDocx() {
// // //   const [file, setFile] = useState(null);
// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     mobile_no: "",
// // //     age: "",
// // //     address: "",
// // //     bank_name: "",
// // //     ac_no: "",
// // //     fraud_amount: "",
// // //     date: "",
// // //     ack_no: "",
// // //     work:"",
// // //     freeze_amount:"",
// // //     refund_bank_holder_name:"",
// // //     refund_bank_name:"",
// // //     refund_ac_no:"",
// // //     refund_ifsc:"",
// // //   });

// // //   const onFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   const onInputChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const generateDoc = async () => {
// // //     if (!file) {
// // //       alert("Please upload a Word (.docx) file first!");
// // //       return;
// // //     }

// // //     try {
// // //       const reader = new FileReader();
// // //       reader.onload = async (event) => {
// // //         try {
// // //           const content = event.target.result;
// // //           const zip = new PizZip(content);
// // //           const doc = new Docxtemplater(zip, {
// // //             paragraphLoop: true,
// // //             linebreaks: true,
// // //           });

// // //           doc.setData({ ...form });
// // //           doc.render();

// // //           const out = doc.getZip().generate({
// // //             type: "blob",
// // //             mimeType:
// // //               "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// // //           });

// // //           saveAs(out, "output.docx");
// // //         } catch (err) {
// // //           console.error("Error generating document:", err);
// // //           alert("Something went wrong while processing the Word file.");
// // //         }
// // //       };
// // //       reader.readAsBinaryString(file);
// // //     } catch (err) {
// // //       console.error("File processing error:", err);
// // //       alert("Error reading the file.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
// // //       <h2 className="font-bold text-xl mb-6 text-center">Fraud Complaint Form</h2>

// // //       {/* Upload Section */}
// // //       <div className="mb-4">
// // //         <label className="block font-medium mb-1">Upload Word Template</label>
// // //         <input
// // //           type="file"
// // //           accept=".docx"
// // //           onChange={onFileChange}
// // //           className="border w-full p-2 rounded"
// // //         />
// // //       </div>

// // //       {/* Form Section */}
// // //       <div className="space-y-4">
// // //         <div>
// // //           <label className="block font-medium mb-1">Name</label>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={form.name}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Mobile No</label>
// // //           <input
// // //             type="text"
// // //             name="mobile_no"
// // //             value={form.mobile_no}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block font-medium mb-1">Work</label>
// // //           <input
// // //             type="text"
// // //             name="work"
// // //             value={form.work}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Age</label>
// // //           <input
// // //             type="number"
// // //             name="age"
// // //             value={form.age}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Address</label>
// // //           <input
// // //             type="text"
// // //             name="address"
// // //             value={form.address}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Bank Name</label>
// // //           <input
// // //             type="text"
// // //             name="bank_name"
// // //             value={form.bank_name}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Account No</label>
// // //           <input
// // //             type="text"
// // //             name="ac_no"
// // //             value={form.ac_no}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Fraud Amount</label>
// // //           <input
// // //             type="number"
// // //             name="fraud_amount"
// // //             value={form.fraud_amount}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Date</label>
// // //           <input
// // //             type="date"
// // //             name="date"
// // //             value={form.date}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Acknowledgement No</label>
// // //           <input
// // //             type="text"
// // //             name="ack_no"
// // //             value={form.ack_no}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block font-medium mb-1">Freeze Amount</label>
// // //           <input
// // //             type="text"
// // //             name="freeze_amount"
// // //             value={form.freeze_amount}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block font-medium mb-1">refund_bank_holder_name</label>
// // //           <input
// // //             type="text"
// // //             name="refund_bank_holder_name"
// // //             value={form.refund_bank_holder_name}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div><div>
// // //           <label className="block font-medium mb-1">refund_bank_name</label>
// // //           <input
// // //             type="text"
// // //             name="refund_bank_name"
// // //             value={form.refund_bank_name}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div><div>
// // //           <label className="block font-medium mb-1">refund_ac_no</label>
// // //           <input
// // //             type="text"
// // //             name="refund_ac_no"
// // //             value={form.refund_ac_no}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div><div>
// // //           <label className="block font-medium mb-1">refund_IFSC_code</label>
// // //           <input
// // //             type="text"
// // //             name="refund_ifsc"
// // //             value={form.refund_ifsc}
// // //             onChange={onInputChange}
// // //             className="border w-full p-2 rounded"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Submit Button */}
// // //       <button
// // //         onClick={generateDoc}
// // //         className="mt-6 w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700"
// // //       >
// // //         Generate Word File
// // //       </button>
// // //     </div>
// // //   );
// // // }




// // import React, { useState } from "react";
// // import PizZip from "pizzip";
// // import Docxtemplater from "docxtemplater";
// // import { saveAs } from "file-saver";

// // export default function UploadEditDocx() {
// //   const [files, setFiles] = useState({ file1: null, file2: null });
// //   const [form, setForm] = useState({
// //     name: "",
// //     mobile_no: "",
// //     age: "",
// //     address: "",
// //     bank_name: "",
// //     ac_no: "",
// //     fraud_amount: "",
// //     date: "",
// //     ack_no: "",
// //     work: "",
// //     freeze_amount: "",
// //     refund_bank_holder_name: "",
// //     refund_bank_name: "",
// //     refund_ac_no: "",
// //     refund_ifsc: "",
// //   });

// //   const onFileChange = (e) => {
// //     setFiles({ ...files, [e.target.name]: e.target.files[0] });
// //   };

// //   const onInputChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const processFile = (file, outputName) => {
// //     return new Promise((resolve, reject) => {
// //       const reader = new FileReader();
// //       reader.onload = (event) => {
// //         try {
// //           const content = event.target.result;
// //           const zip = new PizZip(content);
// //           const doc = new Docxtemplater(zip, {
// //             paragraphLoop: true,
// //             linebreaks: true,
// //           });

// //           doc.setData({ ...form });
// //           doc.render();

// //           const out = doc.getZip().generate({
// //             type: "blob",
// //             mimeType:
// //               "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// //           });

// //           saveAs(out, outputName);
// //           resolve();
// //         } catch (err) {
// //           console.error("Error generating document:", err);
// //           reject(err);
// //         }
// //       };
// //       reader.readAsBinaryString(file);
// //     });
// //   };

// //   const generateDocs = async () => {
// //     if (!files.file1 || !files.file2) {
// //       alert("Please upload both Word (.docx) files!");
// //       return;
// //     }

// //     try {
// //       await processFile(files.file1, "output1.docx");
// //       await processFile(files.file2, "output2.docx");
// //       alert("Both files generated successfully!");
// //     } catch (err) {
// //       alert("Error processing files.");
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
// //       <h2 className="font-bold text-xl mb-6 text-center">Fraud Complaint Form (2 Files)</h2>

// //       {/* Upload Section */}
// //       <div className="mb-4">
// //         <label className="block font-medium mb-1">Upload Word Template 1</label>
// //         <input
// //           type="file"
// //           name="file1"
// //           accept=".docx"
// //           onChange={onFileChange}
// //           className="border w-full p-2 rounded mb-2"
// //         />

// //         <label className="block font-medium mb-1">Upload Word Template 2</label>
// //         <input
// //           type="file"
// //           name="file2"
// //           accept=".docx"
// //           onChange={onFileChange}
// //           className="border w-full p-2 rounded"
// //         />
// //       </div>

// //       {/* Example form fields */}
// //       <div className="space-y-4">
// //         <div>
// //           <label className="block font-medium mb-1">Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={form.name}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Mobile No</label>
// //           <input
// //             type="text"
// //             name="mobile_no"
// //             value={form.mobile_no}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Work</label>
// //           <input
// //             type="text"
// //             name="work"
// //             value={form.work}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Age</label>
// //           <input
// //             type="number"
// //             name="age"
// //             value={form.age}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Address</label>
// //           <input
// //             type="text"
// //             name="address"
// //             value={form.address}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Bank Name</label>
// //           <input
// //             type="text"
// //             name="bank_name"
// //             value={form.bank_name}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Account No</label>
// //           <input
// //             type="text"
// //             name="ac_no"
// //             value={form.ac_no}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Fraud Amount</label>
// //           <input
// //             type="number"
// //             name="fraud_amount"
// //             value={form.fraud_amount}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Date</label>
// //           <input
// //             type="date"
// //             name="date"
// //             value={form.date}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Acknowledgement No</label>
// //           <input
// //             type="text"
// //             name="ack_no"
// //             value={form.ack_no}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Freeze Amount</label>
// //           <input
// //             type="text"
// //             name="freeze_amount"
// //             value={form.freeze_amount}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">refund_bank_holder_name</label>
// //           <input
// //             type="text"
// //             name="refund_bank_holder_name"
// //             value={form.refund_bank_holder_name}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div><div>
// //           <label className="block font-medium mb-1">refund_bank_name</label>
// //           <input
// //             type="text"
// //             name="refund_bank_name"
// //             value={form.refund_bank_name}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div><div>
// //           <label className="block font-medium mb-1">refund_ac_no</label>
// //           <input
// //             type="text"
// //             name="refund_ac_no"
// //             value={form.refund_ac_no}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div><div>
// //           <label className="block font-medium mb-1">refund_IFSC_code</label>
// //           <input
// //             type="text"
// //             name="refund_ifsc"
// //             value={form.refund_ifsc}
// //             onChange={onInputChange}
// //             className="border w-full p-2 rounded"
// //           />
// //         </div>
// //       </div>

// //       <button
// //         onClick={generateDocs}
// //         className="mt-6 w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700"
// //       >
// //         Generate Both Word Files
// //       </button>
// //     </div>
// //   );
// // }



import  { useState } from "react";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

export default function Data() {
  const [files, setFiles] = useState({ file1: null, file2: null, file3: null });
  const [form, setForm] = useState({
    name: "",
    mobile_no: "",
    age: "",
    address: "",
    bank_name: "",
    ac_no: "",
    fraud_amount: "",
    date: "",
    ack_no: "",
    work: "",
    freeze_amount: "",
    refund_bank_holder_name: "",
    refund_bank_name: "",
    refund_ac_no: "",
    refund_ifsc: "",
  });

  const onFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const processFile = (file, outputName) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target.result;
          const zip = new PizZip(content);
          const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
          });

          doc.setData({ ...form });
          doc.render();

          const out = doc.getZip().generate({
            type: "blob",
            mimeType:
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          });

          saveAs(out, outputName);
          resolve();
        } catch (err) {
          console.error("Error generating document:", err);
          reject(err);
        }
      };
      reader.readAsBinaryString(file);
    });
  };

  const generateDocs = async () => {
    if (!files.file1 || !files.file2 || !files.file3) {
      alert("Please upload all three Word (.docx) files!");
      return;
    }

    try {
      await processFile(files.file1, "output1.docx");
      await processFile(files.file2, "output2.docx");
      await processFile(files.file3, "output3.docx");
      alert("All three files generated successfully!");
    } catch (err) {
      alert("Error processing files.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="font-bold text-xl mb-6 text-center">
        Fraud Complaint Form (3 Files)
      </h2>

      {/* Upload Section */}
      <div className="mb-4 space-y-3">
        <div>
          <label className="block font-medium mb-1">Upload Word Template 1</label>
          <input
            type="file"
            name="file1"
            accept=".docx"
            onChange={onFileChange}
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Upload Word Template 2</label>
          <input
            type="file"
            name="file2"
            accept=".docx"
            onChange={onFileChange}
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Upload Word Template 3</label>
          <input
            type="file"
            name="file3"
            accept=".docx"
            onChange={onFileChange}
            className="border w-full p-2 rounded"
          />
        </div>
      </div>

      {/* Example form fields */}
      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mobile No</label>
          <input
            type="text"
            name="mobile_no"
            value={form.mobile_no}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Work</label>
          <input
            type="text"
            name="work"
            value={form.work}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Bank Name</label>
          <input
            type="text"
            name="bank_name"
            value={form.bank_name}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Account No</label>
          <input
            type="text"
            name="ac_no"
            value={form.ac_no}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Fraud Amount</label>
          <input
            type="number"
            name="fraud_amount"
            value={form.fraud_amount}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Acknowledgement No</label>
          <input
            type="text"
            name="ack_no"
            value={form.ack_no}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Freeze Amount</label>
          <input
            type="text"
            name="freeze_amount"
            value={form.freeze_amount}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Refund Bank Holder Name</label>
          <input
            type="text"
            name="refund_bank_holder_name"
            value={form.refund_bank_holder_name}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Refund Bank Name</label>
          <input
            type="text"
            name="refund_bank_name"
            value={form.refund_bank_name}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Refund Account No</label>
          <input
            type="text"
            name="refund_ac_no"
            value={form.refund_ac_no}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Refund IFSC Code</label>
          <input
            type="text"
            name="refund_ifsc"
            value={form.refund_ifsc}
            onChange={onInputChange}
            className="border w-full p-2 rounded"
          />
        </div>
      </div>

      <button
        onClick={generateDocs}
        className="mt-6 w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700"
      >
        Generate All 3 Word Files
      </button>
    </div>
  );
}



// // table
// import React, { useState } from "react";
// import PizZip from "pizzip";
// import Docxtemplater from "docxtemplater";
// import { saveAs } from "file-saver";

// export default function UploadEditDocx() {
//   const [file, setFile] = useState(null);
//   const [form, setForm] = useState({
//     bank_name: "",
//     ac_no: "",
//     fraud_amount: "",
//     date: "",
//     ack_no: ""
//   });

//   // Handle file upload
//   const onFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Generate Word document with replaced placeholders
//   const generateDoc = async () => {
//     if (!file) {
//       alert("Please upload a Word template first!");
//       return;
//     }

//     try {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const content = event.target.result;

//         // Load the .docx file as binary
//         const zip = new PizZip(content);
//         const doc = new Docxtemplater(zip, {
//           paragraphLoop: true,
//           linebreaks: true,
//         });

//         // Render the template with user form data
//         doc.render(form);

//         // Generate final file
//         const out = doc.getZip().generate({
//           type: "blob",
//           mimeType:
//             "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//         });

//         saveAs(out, "filled_report.docx");
//       };

//       reader.readAsBinaryString(file);
//     } catch (error) {
//       console.error("Error generating document:", error);
//       alert("Something went wrong while processing the Word file!");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-3">Upload Word Template & Fill Data</h2>

//       <input type="file" accept=".docx" onChange={onFileChange} />

//       <div className="mt-3">
//         <input
//           type="text"
//           name="bank_name"
//           placeholder="Bank Name"
//           value={form.bank_name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="ac_no"
//           placeholder="Account No"
//           value={form.ac_no}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="fraud_amount"
//           placeholder="Fraud Amount"
//           value={form.fraud_amount}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="date"
//           placeholder="Date"
//           value={form.date}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="ack_no"
//           placeholder="Acknowledgement No"
//           value={form.ack_no}
//           onChange={handleChange}
//         />
//       </div>

//       <button
//         onClick={generateDoc}
//         className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Generate Word File
//       </button>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import PizZip from "pizzip";
// import Docxtemplater from "docxtemplater";
// import { saveAs } from "file-saver";

// export default function UploadAndFillDocx() {
//   const [file, setFile] = useState(null);
//   const [formData, setFormData] = useState({
//     bank_name: "",
//     ac_no: "",
//     fraud_amount: "",
//     date: "",
//     ack_no: ""
//   });

//   // Handle file upload
//   const onFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle form changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Generate final Word file
//   const generateDoc = async () => {
//     if (!file) {
//       alert("Please upload a Word template file!");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = function (event) {
//       try {
//         const content = event.target.result;
//         const zip = new PizZip(content);
//         const doc = new Docxtemplater(zip, {
//           paragraphLoop: true,
//           linebreaks: true,
//         });

//         // Replace placeholders with form data
//         doc.render(formData);

//         const out = doc.getZip().generate({
//           type: "blob",
//           mimeType:
//             "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//         });
//         saveAs(out, "filled_report.docx");
//       } catch (error) {
//         console.error("Error generating document:", error);
//         alert("Something went wrong while processing the Word file.");
//       }
//     };
//     reader.readAsBinaryString(file);
//   };

//   return (
//     <div className="p-4">
//       <h2>Upload Template & Fill Data</h2>
//       <input type="file" onChange={onFileChange} accept=".docx" />

//       <div className="mt-3">
//         <input
//           type="text"
//           name="bank_name"
//           placeholder="Bank Name"
//           value={formData.bank_name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="ac_no"
//           placeholder="Account No"
//           value={formData.ac_no}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="fraud_amount"
//           placeholder="Fraud Amount"
//           value={formData.fraud_amount}
//           onChange={handleChange}
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="ack_no"
//           placeholder="Ack No"
//           value={formData.ack_no}
//           onChange={handleChange}
//         />
//       </div>

//       <button onClick={generateDoc} className="mt-4">
//         Generate Word File
//       </button>
//     </div>
//   );
// }
