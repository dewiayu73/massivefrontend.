import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

function FiturCamera() {
  const [imageSrc, setImageSrc] = useState(null); // Stores captured/uploaded image
  const [file, setFile] = useState(null); // Stores uploaded file
  const [result, setResult] = useState(null); // Stores AI analysis result
  const [error, setError] = useState(null); // Validation/error message
  const [loading, setLoading] = useState(false); // Loading state
  const [showCamera, setShowCamera] = useState(false); // Camera visibility
  const webcamRef = useRef(null);

  // Disease handling data
  const diseaseHandling = {
    "Black Rot": {
      description:
        "Black rot adalah penyakit yang disebabkan oleh jamur Guignardia bidwellii. Penyakit ini menjadi ancaman serius bagi produktivitas anggur, terutama di daerah yang hangat dan lembap.",
      steps: [
        "Pangkas dan hancurkan bagian tanaman yang terinfeksi.",
        "Oleskan fungisida yang mengandung mancozeb atau myclobutanil.",
        "Pastikan sirkulasi udara yang baik untuk mengurangi kelembaban.",
      ],
    },
    "ESCA" : {
      description:
        "Esca adalah penyakit jamur yang menyebabkan perubahan warna daun dan pembusukan batang.",
      steps: [
        "Pangkas cabang yang terinfeksi dan oleskan sealant luka.",
        "Hindari pengairan yang berlebihan untuk mengurangi penyebaran jamur.",
        "Pantau dan pelihara kebersihan kebun anggur secara teratur.",
      ],
    },
    "Leaf Blight": {
      description:
        "Leaf Blight adalah penyakit bakteri yang menyebabkan bintik-bintik coklat dan layu pada daun.",
      steps: [
        "Buang dan hancurkan daun yang terinfeksi dengan segera.",
        "Gunakan bakterisida berbahan dasar tembaga sebagai pengobatan.",
        "Pastikan sirkulasi udara yang baik di antara tanaman untuk mengurangi kelembaban.",
      ],
    },
    "Healthy" : {
      description: "Daun tampak sehat dan bebas dari penyakit.",
      steps: ["Tidak diperlukan tindakan apa pun.", "Lanjutkan pemantauan dan perawatan rutin."],
    },
  };

  // Check for blank or black images
  const isBlankImage = async (imageUrl) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

        let isBlank = true;
        for (let i = 0; i < imageData.length; i += 4) {
          if (
            imageData[i] !== 0 || // Red
            imageData[i + 1] !== 0 || // Green
            imageData[i + 2] !== 0 // Blue
          ) {
            isBlank = false;
            break;
          }
        }
        resolve(isBlank);
      };
    });
  };

  // Capture photo from camera
  const capture = () => {
    const image = webcamRef.current.getScreenshot();
    if (image) {
      setImageSrc(image);
      setFile(null);
      setError(null);
      setResult(null);
      setShowCamera(false);
    } else {
      setError("Gagal menangkap gambar. Silakan coba lagi.");
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "image/jpeg") {
      setImageSrc(URL.createObjectURL(uploadedFile));
      setFile(uploadedFile);
      setError(null);
      setResult(null);
      setShowCamera(false);
    } else {
      setError("Silakan unggah gambar JPG yang valid.");
      setImageSrc(null);
    }
  };

  // Analyze the uploaded or captured image
  const handleAnalysis = async () => {
    setLoading(true);
    setError(null);
  
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    } else if (imageSrc) {
      const blob = await fetch(imageSrc).then((res) => res.blob());
      formData.append("file", blob, "captured.jpg");
    }
  
    try {
      const response = await fetch("http://localhost:5007/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
  
      if (response.ok && data.prediction && data.confidence >= 0.6) {
        setResult({
          disease: data.prediction,
          confidence: (data.confidence * 100).toFixed(2),
        });
      } else {
        setError("Gambar ini bukan gambar daun anggur. Silakan unggah atau ambil ulang gambar daun yang valid.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan selama analisis. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-black mb-6">
        Grape Leaf Disease Analyzer
      </h1>

      {/* Image Display */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-4">
        {showCamera ? (
          <>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-96 rounded-lg border border-gray-300"
            />
          </>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Uploaded or Captured"
            className="w-full h-96 object-contain rounded-lg border border-gray-300 mb-4"
          />
        ) : (
          <div className="w-full h-96 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
            No image selected or captured
          </div>
        )}

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => {
            setShowCamera(true);
            setImageSrc(null);
            setFile(null);
            setError(null);
          }}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Camera
        </button>

        {showCamera && (
          <button
            onClick={capture}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Capture Image
          </button>
        )}

        <label className="px-6 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600">
          Upload File
          <input
            type="file"
            accept="image/jpeg"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        <button
          onClick={handleAnalysis}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Analysis
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-black text-lg font-semibold mb-4">
          Sistem sedang menganalisis gambar... Mohon tunggu.
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Penyakit Terdeteksi: {result.disease}
          </h2>
          <p className="text-black mb-4">
          Tingkat Keyakinan: {result.confidence}%
          </p>
          <p className="text-black mb-4">
            {diseaseHandling[result.disease]?.description}
          </p>
          <h3 className="text-lg font-semibold mb-2">Langkah-langkah Penanganan:</h3>
          <ul className="list-disc list-inside text-black">
            {diseaseHandling[result.disease]?.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FiturCamera;
