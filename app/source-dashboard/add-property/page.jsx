// "use client";

// import React, { useEffect, useState } from "react";

// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

// const emptyNearbyPlace = { place_name: "", distance: "" };

// const emptyFloorPlan = {
//   floor_name: "",
//   floor_price: "",
//   price_postfix: "",
//   floor_size: "",
//   size_postfix: "",
//   bedrooms: "",
//   bathrooms: "",
//   description: "",
//   floor_image: null,
// };

// const emptyAttachment = {
//   title: "",
//   file: null,
// };

// export default function AddPropertyPage() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     full_address: "",
//     zip_code: "",
//     country: "",
//     state: "",
//     neighborhood: "",
//     location: "",
//     map_embed_url: "",
//     price: "",
//     unit_price: "",
//     before_price_label: "",
//     after_price_label: "",
//     property_type: "apartment",
//     property_status: "for-sale",
//     property_label: "new-listing",
//     size_sqft: "",
//     land_area_sqft: "",
//     property_code: "",
//     rooms: "",
//     bedrooms: "",
//     bathrooms: "",
//     garages: "",
//     garages_size_sqft: "",
//     year_built: "2024",
//     amenities: "",
//     virtual_tour_type: "",
//     virtual_tour_embed_code: "",
//     video_url: "",
//     expiry_date: "",
//     city: "",
//     developer_name: "",
//     short_location: "",
//     carpet_area: "",
//     possession_date: "",
//   });

//   const [propertyImages, setPropertyImages] = useState([]);
//   const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
//   const [nearbyPlaces, setNearbyPlaces] = useState([{ ...emptyNearbyPlace }]);
//   const [floorPlans, setFloorPlans] = useState([{ ...emptyFloorPlan }]);
//   const [attachments, setAttachments] = useState([{ ...emptyAttachment }]);

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const userData = localStorage.getItem("userData");

//     if (!token || !userData) {
//       window.location.href = "/";
//       return;
//     }

//     const parsedUser = JSON.parse(userData);
//     if (parsedUser?.role !== "source_manager") {
//       window.location.href = "/dashboard";
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handlePropertyImagesChange = (e) => {
//     const files = Array.from(e.target.files || []);
//     setPropertyImages(files);
//     if (files.length === 0) {
//       setPrimaryImageIndex(0);
//     }
//   };

//   const handleNearbyChange = (index, field, value) => {
//     const updated = [...nearbyPlaces];
//     updated[index][field] = value;
//     setNearbyPlaces(updated);
//   };

//   const addNearbyPlace = () => {
//     setNearbyPlaces((prev) => [...prev, { ...emptyNearbyPlace }]);
//   };

//   const removeNearbyPlace = (index) => {
//     setNearbyPlaces((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleFloorPlanChange = (index, field, value) => {
//     const updated = [...floorPlans];
//     updated[index][field] = value;
//     setFloorPlans(updated);
//   };

//   const handleFloorPlanImageChange = (index, file) => {
//     const updated = [...floorPlans];
//     updated[index].floor_image = file;
//     setFloorPlans(updated);
//   };

//   const addFloorPlan = () => {
//     setFloorPlans((prev) => [...prev, { ...emptyFloorPlan }]);
//   };

//   const removeFloorPlan = (index) => {
//     setFloorPlans((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleAttachmentChange = (index, field, value) => {
//     const updated = [...attachments];
//     updated[index][field] = value;
//     setAttachments(updated);
//   };

//   const addAttachment = () => {
//     setAttachments((prev) => [...prev, { ...emptyAttachment }]);
//   };

//   const removeAttachment = (index) => {
//     setAttachments((prev) => prev.filter((_, i) => i !== index));
//   };

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       description: "",
//       full_address: "",
//       zip_code: "",
//       country: "",
//       state: "",
//       neighborhood: "",
//       location: "",
//       map_embed_url: "",
//       price: "",
//       unit_price: "",
//       before_price_label: "",
//       after_price_label: "",
//       property_type: "apartment",
//       property_status: "for-sale",
//       property_label: "new-listing",
//       size_sqft: "",
//       land_area_sqft: "",
//       property_code: "",
//       rooms: "",
//       bedrooms: "",
//       bathrooms: "",
//       garages: "",
//       garages_size_sqft: "",
//       year_built: "2024",
//       amenities: "",
//       virtual_tour_type: "",
//       virtual_tour_embed_code: "",
//       video_url: "",
//       expiry_date: "",
//       city: "",
//       developer_name: "",
//       short_location: "",
//       carpet_area: "",
//       possession_date: "",
//     });
//     setPropertyImages([]);
//     setPrimaryImageIndex(0);
//     setNearbyPlaces([{ ...emptyNearbyPlace }]);
//     setFloorPlans([{ ...emptyFloorPlan }]);
//     setAttachments([{ ...emptyAttachment }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const token = localStorage.getItem("authToken");
//     const form = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       if (key === "amenities") {
//         const amenitiesArray = value
//           ? value.split(",").map((item) => item.trim()).filter(Boolean)
//           : [];
//         form.append(key, JSON.stringify(amenitiesArray));
//       } else {
//         form.append(key, value ?? "");
//       }
//     });

//     form.append(
//       "nearby_places",
//       JSON.stringify(
//         nearbyPlaces.filter((item) => item.place_name.trim())
//       )
//     );

//     form.append(
//       "floor_plans",
//       JSON.stringify(
//         floorPlans.map((item) => ({
//           floor_name: item.floor_name,
//           floor_price: item.floor_price,
//           price_postfix: item.price_postfix,
//           floor_size: item.floor_size,
//           size_postfix: item.size_postfix,
//           bedrooms: item.bedrooms,
//           bathrooms: item.bathrooms,
//           description: item.description,
//         }))
//       )
//     );

//     form.append(
//       "attachment_titles",
//       JSON.stringify(attachments.map((item) => item.title || ""))
//     );

//     form.append("primary_image_index", String(primaryImageIndex));

//     propertyImages.forEach((file) => {
//       form.append("images", file);
//     });

//     floorPlans.forEach((item) => {
//       if (item.floor_image) {
//         form.append("floor_plan_images", item.floor_image);
//       } else {
//         form.append("floor_plan_images", new Blob([]), "");
//       }
//     });

//     attachments.forEach((item) => {
//       if (item.file) {
//         form.append("attachments", item.file);
//       }
//     });

//     try {
//       const res = await fetch(
//         `${API_BASE_URL}/api/admindashboard/source-manager/add-property/`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//           body: form,
//         }
//       );

//       const data = await res.json();

//       if (res.ok && data.success) {
//         setMessage(data.message || "Property submitted successfully.");
//         resetForm();
//       } else {
//         if (typeof data === "object") {
//           const firstError =
//             data.message ||
//             Object.values(data).flat().join(" ") ||
//             "Failed to submit property.";
//           setMessage(firstError);
//         } else {
//           setMessage("Failed to submit property.");
//         }
//       }
//     } catch {
//       setMessage("Something went wrong while submitting property.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
//       <h1 style={{ marginBottom: "10px" }}>Add Property</h1>
//       <p style={{ color: "#666", marginBottom: "30px" }}>
//         Submitted property will go to admin for approval.
//       </p>

//       {message && (
//         <div
//           style={{
//             marginBottom: "20px",
//             padding: "14px 16px",
//             borderRadius: "10px",
//             background: "#fff4ef",
//             color: "#ff6b35",
//           }}
//         >
//           {message}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <SectionTitle title="Main Property Details" />

//         <div style={gridStyle}>
//           <Input name="title" placeholder="Property Title" value={formData.title} onChange={handleChange} required />
//           <Input name="property_code" placeholder="Property Code" value={formData.property_code} onChange={handleChange} required />
//           <Input name="full_address" placeholder="Full Address" value={formData.full_address} onChange={handleChange} required />
//           <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
//           <Input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
//           <Input name="state" placeholder="State" value={formData.state} onChange={handleChange} />
//           <Input name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
//           <Input name="zip_code" placeholder="Zip Code" value={formData.zip_code} onChange={handleChange} />
//           <Input name="developer_name" placeholder="Developer Name" value={formData.developer_name} onChange={handleChange} />
//           <Input name="short_location" placeholder="Short Location" value={formData.short_location} onChange={handleChange} />
//           <Input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
//           <Input name="unit_price" placeholder="Unit Price" value={formData.unit_price} onChange={handleChange} />
//           <Input name="before_price_label" placeholder="Before Price Label" value={formData.before_price_label} onChange={handleChange} />
//           <Input name="after_price_label" placeholder="After Price Label" value={formData.after_price_label} onChange={handleChange} />
//           <Input name="size_sqft" placeholder="Size Sqft" value={formData.size_sqft} onChange={handleChange} />
//           <Input name="land_area_sqft" placeholder="Land Area Sqft" value={formData.land_area_sqft} onChange={handleChange} />
//           <Input name="rooms" placeholder="Rooms" value={formData.rooms} onChange={handleChange} />
//           <Input name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} />
//           <Input name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} />
//           <Input name="garages" placeholder="Garages" value={formData.garages} onChange={handleChange} />
//           <Input name="garages_size_sqft" placeholder="Garage Size Sqft" value={formData.garages_size_sqft} onChange={handleChange} />
//           <Input name="year_built" placeholder="Year Built" value={formData.year_built} onChange={handleChange} />
//           <Input name="carpet_area" placeholder="Carpet Area" value={formData.carpet_area} onChange={handleChange} />
//           <Input name="possession_date" placeholder="Possession Date" value={formData.possession_date} onChange={handleChange} />
//           <Input name="video_url" placeholder="Video URL" value={formData.video_url} onChange={handleChange} />
//           <Input name="map_embed_url" placeholder="Map Embed URL" value={formData.map_embed_url} onChange={handleChange} />
//           <Input name="virtual_tour_type" placeholder="Virtual Tour Type" value={formData.virtual_tour_type} onChange={handleChange} />
//           <Input name="virtual_tour_embed_code" placeholder="Virtual Tour Embed Code" value={formData.virtual_tour_embed_code} onChange={handleChange} />
//           <Input name="amenities" placeholder="Amenities (comma separated)" value={formData.amenities} onChange={handleChange} />

//           <select name="property_type" value={formData.property_type} onChange={handleChange} style={inputStyle}>
//             <option value="apartment">Apartment</option>
//             <option value="villa">Villa</option>
//             <option value="studio">Studio</option>
//             <option value="office">Office</option>
//           </select>

//           <select name="property_status" value={formData.property_status} onChange={handleChange} style={inputStyle}>
//             <option value="for-sale">For Sale</option>
//             <option value="for-rent">For Rent</option>
//           </select>

//           <select name="property_label" value={formData.property_label} onChange={handleChange} style={inputStyle}>
//             <option value="new-listing">New Listing</option>
//             <option value="open-house">Open House</option>
//             <option value="featured">Featured</option>
//           </select>

//           <input type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange} style={inputStyle} />
//         </div>

//         <textarea
//           name="description"
//           placeholder="Property Description"
//           value={formData.description}
//           onChange={handleChange}
//           rows={6}
//           style={textareaStyle}
//         />

//         <SectionTitle title="Property Images" />
//         <div style={sectionCardStyle}>
//           <input type="file" multiple accept="image/*" onChange={handlePropertyImagesChange} />
//           {propertyImages.length > 0 && (
//             <div style={{ marginTop: "16px" }}>
//               <label style={{ fontWeight: 600, display: "block", marginBottom: "10px" }}>
//                 Select Primary Image
//               </label>
//               {propertyImages.map((file, index) => (
//                 <label key={index} style={{ display: "block", marginBottom: "8px" }}>
//                   <input
//                     type="radio"
//                     name="primary_image"
//                     checked={primaryImageIndex === index}
//                     onChange={() => setPrimaryImageIndex(index)}
//                   />{" "}
//                   {file.name}
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>

//         <SectionTitle title="Nearby Places" />
//         {nearbyPlaces.map((item, index) => (
//           <div key={index} style={repeatCardStyle}>
//             <div style={gridStyle}>
//               <Input
//                 placeholder="Place Name"
//                 value={item.place_name}
//                 onChange={(e) => handleNearbyChange(index, "place_name", e.target.value)}
//               />
//               <Input
//                 placeholder="Distance"
//                 value={item.distance}
//                 onChange={(e) => handleNearbyChange(index, "distance", e.target.value)}
//               />
//             </div>

//             {nearbyPlaces.length > 1 && (
//               <button type="button" onClick={() => removeNearbyPlace(index)} style={removeBtnStyle}>
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}
//         <button type="button" onClick={addNearbyPlace} style={secondaryBtnStyle}>
//           + Add Nearby Place
//         </button>

//         <SectionTitle title="Floor Plans" />
//         {floorPlans.map((item, index) => (
//           <div key={index} style={repeatCardStyle}>
//             <div style={gridStyle}>
//               <Input
//                 placeholder="Floor Name"
//                 value={item.floor_name}
//                 onChange={(e) => handleFloorPlanChange(index, "floor_name", e.target.value)}
//               />
//               <Input
//                 placeholder="Floor Price"
//                 value={item.floor_price}
//                 onChange={(e) => handleFloorPlanChange(index, "floor_price", e.target.value)}
//               />
//               <Input
//                 placeholder="Price Postfix"
//                 value={item.price_postfix}
//                 onChange={(e) => handleFloorPlanChange(index, "price_postfix", e.target.value)}
//               />
//               <Input
//                 placeholder="Floor Size"
//                 value={item.floor_size}
//                 onChange={(e) => handleFloorPlanChange(index, "floor_size", e.target.value)}
//               />
//               <Input
//                 placeholder="Size Postfix"
//                 value={item.size_postfix}
//                 onChange={(e) => handleFloorPlanChange(index, "size_postfix", e.target.value)}
//               />
//               <Input
//                 placeholder="Bedrooms"
//                 value={item.bedrooms}
//                 onChange={(e) => handleFloorPlanChange(index, "bedrooms", e.target.value)}
//               />
//               <Input
//                 placeholder="Bathrooms"
//                 value={item.bathrooms}
//                 onChange={(e) => handleFloorPlanChange(index, "bathrooms", e.target.value)}
//               />
//             </div>

//             <textarea
//               rows={4}
//               placeholder="Floor Description"
//               value={item.description}
//               onChange={(e) => handleFloorPlanChange(index, "description", e.target.value)}
//               style={textareaStyle}
//             />

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleFloorPlanImageChange(index, e.target.files?.[0] || null)}
//             />

//             {floorPlans.length > 1 && (
//               <button type="button" onClick={() => removeFloorPlan(index)} style={removeBtnStyle}>
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}
//         <button type="button" onClick={addFloorPlan} style={secondaryBtnStyle}>
//           + Add Floor Plan
//         </button>

//         <SectionTitle title="Brochure / Attachments" />
//         {attachments.map((item, index) => (
//           <div key={index} style={repeatCardStyle}>
//             <div style={gridStyle}>
//               <Input
//                 placeholder="Attachment Title"
//                 value={item.title}
//                 onChange={(e) => handleAttachmentChange(index, "title", e.target.value)}
//               />
//               <input
//                 type="file"
//                 onChange={(e) => handleAttachmentChange(index, "file", e.target.files?.[0] || null)}
//                 style={inputStyle}
//               />
//             </div>

//             {attachments.length > 1 && (
//               <button type="button" onClick={() => removeAttachment(index)} style={removeBtnStyle}>
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}
//         <button type="button" onClick={addAttachment} style={secondaryBtnStyle}>
//           + Add Attachment
//         </button>

//         <div style={{ marginTop: "28px" }}>
//           <button type="submit" disabled={loading} style={submitBtnStyle}>
//             {loading ? "Submitting..." : "Submit Property"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// function SectionTitle({ title }) {
//   return (
//     <h2
//       style={{
//         marginTop: "32px",
//         marginBottom: "16px",
//         fontSize: "24px",
//         fontWeight: 700,
//       }}
//     >
//       {title}
//     </h2>
//   );
// }

// function Input(props) {
//   return <input {...props} style={inputStyle} />;
// }

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
//   gap: "16px",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "14px",
//   borderRadius: "10px",
//   border: "1px solid #ddd",
// };

// const textareaStyle = {
//   width: "100%",
//   marginTop: "16px",
//   padding: "14px",
//   borderRadius: "10px",
//   border: "1px solid #ddd",
// };

// const sectionCardStyle = {
//   background: "#fff",
//   border: "1px solid #eee",
//   borderRadius: "14px",
//   padding: "18px",
// };

// const repeatCardStyle = {
//   background: "#fff",
//   border: "1px solid #eee",
//   borderRadius: "14px",
//   padding: "18px",
//   marginBottom: "14px",
// };

// const secondaryBtnStyle = {
//   background: "#fff",
//   color: "#ff6b35",
//   border: "1px solid #ff6b35",
//   padding: "10px 16px",
//   borderRadius: "10px",
//   fontWeight: 600,
//   cursor: "pointer",
//   marginTop: "6px",
// };

// const removeBtnStyle = {
//   background: "#111",
//   color: "#fff",
//   border: "none",
//   padding: "10px 16px",
//   borderRadius: "10px",
//   fontWeight: 600,
//   cursor: "pointer",
//   marginTop: "14px",
// };

// const submitBtnStyle = {
//   background: "#ff6b35",
//   color: "#fff",
//   border: "none",
//   padding: "14px 24px",
//   borderRadius: "10px",
//   fontWeight: 700,
//   cursor: "pointer",
// };


"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

const emptyNearbyPlace = { place_name: "", distance: "" };

const emptyFloorPlan = {
  floor_name: "",
  floor_price: "",
  price_postfix: "",
  floor_size: "",
  size_postfix: "",
  bedrooms: "",
  bathrooms: "",
  description: "",
  floor_image: null,
};

const emptyAttachment = {
  title: "",
  file: null,
};

export default function AddPropertyPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    full_address: "",
    zip_code: "",
    country: "",
    state: "",
    neighborhood: "",
    location: "",
    map_embed_url: "",
    price: "",
    unit_price: "",
    before_price_label: "",
    after_price_label: "",
    property_type: "apartment",
    property_status: "for-sale",
    property_label: "new-listing",
    size_sqft: "",
    land_area_sqft: "",
    property_code: "",
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    garages_size_sqft: "",
    year_built: "2024",
    amenities: "",
    virtual_tour_type: "",
    virtual_tour_embed_code: "",
    video_url: "",
    expiry_date: "",
    city: "",
    developer_name: "",
    short_location: "",
    carpet_area: "",
    possession_date: "",
  });

  const [propertyImages, setPropertyImages] = useState([]);
  const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
  const [nearbyPlaces, setNearbyPlaces] = useState([{ ...emptyNearbyPlace }]);
  const [floorPlans, setFloorPlans] = useState([{ ...emptyFloorPlan }]);
  const [attachments, setAttachments] = useState([{ ...emptyAttachment }]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error"); // "success" | "error"
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (!token || !userData) {
      window.location.href = "/";
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser?.role !== "source_manager") {
      window.location.href = "/dashboard";
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePropertyImagesChange = (e) => {
    const files = Array.from(e.target.files || []);
    setPropertyImages(files);
    if (files.length === 0) setPrimaryImageIndex(0);
  };

  const handleNearbyChange = (index, field, value) => {
    const updated = [...nearbyPlaces];
    updated[index][field] = value;
    setNearbyPlaces(updated);
  };

  const addNearbyPlace = () =>
    setNearbyPlaces((prev) => [...prev, { ...emptyNearbyPlace }]);

  const removeNearbyPlace = (index) =>
    setNearbyPlaces((prev) => prev.filter((_, i) => i !== index));

  const handleFloorPlanChange = (index, field, value) => {
    const updated = [...floorPlans];
    updated[index][field] = value;
    setFloorPlans(updated);
  };

  const handleFloorPlanImageChange = (index, file) => {
    const updated = [...floorPlans];
    updated[index].floor_image = file;
    setFloorPlans(updated);
  };

  const addFloorPlan = () =>
    setFloorPlans((prev) => [...prev, { ...emptyFloorPlan }]);

  const removeFloorPlan = (index) =>
    setFloorPlans((prev) => prev.filter((_, i) => i !== index));

  const handleAttachmentChange = (index, field, value) => {
    const updated = [...attachments];
    updated[index][field] = value;
    setAttachments(updated);
  };

  const addAttachment = () =>
    setAttachments((prev) => [...prev, { ...emptyAttachment }]);

  const removeAttachment = (index) =>
    setAttachments((prev) => prev.filter((_, i) => i !== index));

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      full_address: "",
      zip_code: "",
      country: "",
      state: "",
      neighborhood: "",
      location: "",
      map_embed_url: "",
      price: "",
      unit_price: "",
      before_price_label: "",
      after_price_label: "",
      property_type: "apartment",
      property_status: "for-sale",
      property_label: "new-listing",
      size_sqft: "",
      land_area_sqft: "",
      property_code: "",
      rooms: "",
      bedrooms: "",
      bathrooms: "",
      garages: "",
      garages_size_sqft: "",
      year_built: "2024",
      amenities: "",
      virtual_tour_type: "",
      virtual_tour_embed_code: "",
      video_url: "",
      expiry_date: "",
      city: "",
      developer_name: "",
      short_location: "",
      carpet_area: "",
      possession_date: "",
    });
    setPropertyImages([]);
    setPrimaryImageIndex(0);
    setNearbyPlaces([{ ...emptyNearbyPlace }]);
    setFloorPlans([{ ...emptyFloorPlan }]);
    setAttachments([{ ...emptyAttachment }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("authToken");
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "amenities") {
        const amenitiesArray = value
          ? value.split(",").map((item) => item.trim()).filter(Boolean)
          : [];
        form.append(key, JSON.stringify(amenitiesArray));
      } else {
        form.append(key, value ?? "");
      }
    });

    form.append(
      "nearby_places",
      JSON.stringify(nearbyPlaces.filter((item) => item.place_name.trim()))
    );

    form.append(
      "floor_plans",
      JSON.stringify(
        floorPlans.map((item) => ({
          floor_name: item.floor_name,
          floor_price: item.floor_price,
          price_postfix: item.price_postfix,
          floor_size: item.floor_size,
          size_postfix: item.size_postfix,
          bedrooms: item.bedrooms,
          bathrooms: item.bathrooms,
          description: item.description,
        }))
      )
    );

    form.append(
      "attachment_titles",
      JSON.stringify(attachments.map((item) => item.title || ""))
    );

    form.append("primary_image_index", String(primaryImageIndex));

    propertyImages.forEach((file) => form.append("images", file));

    floorPlans.forEach((item) => {
      if (item.floor_image) {
        form.append("floor_plan_images", item.floor_image);
      } else {
        form.append("floor_plan_images", new Blob([]), "");
      }
    });

    attachments.forEach((item) => {
      if (item.file) form.append("attachments", item.file);
    });

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/admindashboard/source-manager/add-property/`,
        {
          method: "POST",
          headers: { Authorization: `Token ${token}` },
          body: form,
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setMessageType("success");
        setMessage(data.message || "Property submitted successfully.");
        resetForm();
      } else {
        setMessageType("error");
        if (typeof data === "object") {
          const firstError =
            data.message ||
            Object.values(data).flat().join(" ") ||
            "Failed to submit property.";
          setMessage(firstError);
        } else {
          setMessage("Failed to submit property.");
        }
      }
    } catch {
      setMessageType("error");
      setMessage("Something went wrong while submitting property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header1 />

      <main className="add-property-page">
        {/* ── Hero ── */}
        <section className="ap-hero">
          <div className="tf-container">
            <div className="ap-hero-inner">
              <div>
                <p className="ap-eyebrow">Source Manager Panel</p>
                <h1>Add New Property</h1>
                <p>
                  Fill in the details below. Your submission will be reviewed
                  and approved by an admin before going live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Form body ── */}
        <section className="ap-body">
          <div className="tf-container">
            {message && (
              <div className={`ap-message ${messageType}`}>{message}</div>
            )}

            <form onSubmit={handleSubmit}>

              {/* ── Main Details ── */}
              <FormSection title="Property Details" icon="🏠">
                <div className="ap-grid">
                  <Field label="Property Title *">
                    <input className="ap-input" name="title" placeholder="e.g. Luxury 3BHK Apartment" value={formData.title} onChange={handleChange} required />
                  </Field>
                  <Field label="Property Code *">
                    <input className="ap-input" name="property_code" placeholder="e.g. PROP-001" value={formData.property_code} onChange={handleChange} required />
                  </Field>
                  <Field label="Full Address *">
                    <input className="ap-input" name="full_address" placeholder="Street, Area, City" value={formData.full_address} onChange={handleChange} required />
                  </Field>
                  <Field label="Location">
                    <input className="ap-input" name="location" placeholder="Location / Landmark" value={formData.location} onChange={handleChange} />
                  </Field>
                  <Field label="Short Location">
                    <input className="ap-input" name="short_location" placeholder="Short display location" value={formData.short_location} onChange={handleChange} />
                  </Field>
                  <Field label="City">
                    <input className="ap-input" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                  </Field>
                  <Field label="State">
                    <input className="ap-input" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
                  </Field>
                  <Field label="Country">
                    <input className="ap-input" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                  </Field>
                  <Field label="Zip Code">
                    <input className="ap-input" name="zip_code" placeholder="Zip / PIN Code" value={formData.zip_code} onChange={handleChange} />
                  </Field>
                  <Field label="Developer Name">
                    <input className="ap-input" name="developer_name" placeholder="Developer / Builder" value={formData.developer_name} onChange={handleChange} />
                  </Field>
                </div>

                <Field label="Description" fullWidth>
                  <textarea
                    className="ap-textarea"
                    name="description"
                    placeholder="Describe the property in detail..."
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                  />
                </Field>
              </FormSection>

              {/* ── Pricing ── */}
              <FormSection title="Pricing" icon="₹">
                <div className="ap-grid">
                  <Field label="Price">
                    <input className="ap-input" name="price" placeholder="e.g. 5000000" value={formData.price} onChange={handleChange} />
                  </Field>
                  <Field label="Unit Price">
                    <input className="ap-input" name="unit_price" placeholder="Price per unit" value={formData.unit_price} onChange={handleChange} />
                  </Field>
                  <Field label="Before Price Label">
                    <input className="ap-input" name="before_price_label" placeholder="e.g. Starting from" value={formData.before_price_label} onChange={handleChange} />
                  </Field>
                  <Field label="After Price Label">
                    <input className="ap-input" name="after_price_label" placeholder="e.g. onwards" value={formData.after_price_label} onChange={handleChange} />
                  </Field>
                </div>
              </FormSection>

              {/* ── Classification ── */}
              <FormSection title="Classification" icon="🏷️">
                <div className="ap-grid">
                  <Field label="Property Type">
                    <select className="ap-input" name="property_type" value={formData.property_type} onChange={handleChange}>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="studio">Studio</option>
                      <option value="office">Office</option>
                    </select>
                  </Field>
                  <Field label="Property Status">
                    <select className="ap-input" name="property_status" value={formData.property_status} onChange={handleChange}>
                      <option value="for-sale">For Sale</option>
                      <option value="for-rent">For Rent</option>
                    </select>
                  </Field>
                  <Field label="Property Label">
                    <select className="ap-input" name="property_label" value={formData.property_label} onChange={handleChange}>
                      <option value="new-listing">New Listing</option>
                      <option value="open-house">Open House</option>
                      <option value="featured">Featured</option>
                    </select>
                  </Field>
                  <Field label="Expiry Date">
                    <input className="ap-input" type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange} />
                  </Field>
                </div>
              </FormSection>

              {/* ── Property Details ── */}
              <FormSection title="Property Details" icon="📐">
                <div className="ap-grid">
                  <Field label="Size (Sqft)">
                    <input className="ap-input" name="size_sqft" placeholder="Built-up area in sqft" value={formData.size_sqft} onChange={handleChange} />
                  </Field>
                  <Field label="Land Area (Sqft)">
                    <input className="ap-input" name="land_area_sqft" placeholder="Land area in sqft" value={formData.land_area_sqft} onChange={handleChange} />
                  </Field>
                  <Field label="Carpet Area">
                    <input className="ap-input" name="carpet_area" placeholder="Carpet area" value={formData.carpet_area} onChange={handleChange} />
                  </Field>
                  <Field label="Rooms">
                    <input className="ap-input" name="rooms" placeholder="Total rooms" value={formData.rooms} onChange={handleChange} />
                  </Field>
                  <Field label="Bedrooms">
                    <input className="ap-input" name="bedrooms" placeholder="No. of bedrooms" value={formData.bedrooms} onChange={handleChange} />
                  </Field>
                  <Field label="Bathrooms">
                    <input className="ap-input" name="bathrooms" placeholder="No. of bathrooms" value={formData.bathrooms} onChange={handleChange} />
                  </Field>
                  <Field label="Garages">
                    <input className="ap-input" name="garages" placeholder="No. of garages" value={formData.garages} onChange={handleChange} />
                  </Field>
                  <Field label="Garage Size (Sqft)">
                    <input className="ap-input" name="garages_size_sqft" placeholder="Garage size" value={formData.garages_size_sqft} onChange={handleChange} />
                  </Field>
                  <Field label="Year Built">
                    <input className="ap-input" name="year_built" placeholder="e.g. 2024" value={formData.year_built} onChange={handleChange} />
                  </Field>
                  <Field label="Possession Date">
                    <input className="ap-input" name="possession_date" placeholder="Expected possession" value={formData.possession_date} onChange={handleChange} />
                  </Field>
                </div>

                <Field label="Amenities (comma separated)" fullWidth>
                  <input className="ap-input" name="amenities" placeholder="e.g. Pool, Gym, Parking, Club House" value={formData.amenities} onChange={handleChange} />
                </Field>
              </FormSection>

              {/* ── Media ── */}
              <FormSection title="Media & Virtual Tour" icon="🎥">
                <div className="ap-grid">
                  <Field label="Video URL">
                    <input className="ap-input" name="video_url" placeholder="YouTube / Vimeo URL" value={formData.video_url} onChange={handleChange} />
                  </Field>
                  <Field label="Map Embed URL">
                    <input className="ap-input" name="map_embed_url" placeholder="Google Maps embed URL" value={formData.map_embed_url} onChange={handleChange} />
                  </Field>
                  <Field label="Virtual Tour Type">
                    <input className="ap-input" name="virtual_tour_type" placeholder="e.g. 360, Matterport" value={formData.virtual_tour_type} onChange={handleChange} />
                  </Field>
                  <Field label="Virtual Tour Embed Code">
                    <input className="ap-input" name="virtual_tour_embed_code" placeholder="Embed iframe code" value={formData.virtual_tour_embed_code} onChange={handleChange} />
                  </Field>
                </div>
              </FormSection>

              {/* ── Property Images ── */}
              <FormSection title="Property Images" icon="📷">
                <div className="ap-upload-box">
                  <div className="upload-icon">📁</div>
                  <p>Click to upload property images (multiple allowed)</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePropertyImagesChange}
                    className="upload-input"
                  />
                </div>

                {propertyImages.length > 0 && (
                  <div className="primary-picker">
                    <p className="primary-picker-label">Select Primary Image</p>
                    {propertyImages.map((file, index) => (
                      <label key={index} className="primary-radio">
                        <input
                          type="radio"
                          name="primary_image"
                          checked={primaryImageIndex === index}
                          onChange={() => setPrimaryImageIndex(index)}
                        />
                        <span>{file.name}</span>
                      </label>
                    ))}
                  </div>
                )}
              </FormSection>

              {/* ── Nearby Places ── */}
              <FormSection title="Nearby Places" icon="📍">
                {nearbyPlaces.map((item, index) => (
                  <div key={index} className="repeat-card">
                    <div className="repeat-card-header">
                      <span>Place #{index + 1}</span>
                      {nearbyPlaces.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeNearbyPlace(index)}
                          className="remove-btn"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="ap-grid">
                      <Field label="Place Name">
                        <input
                          className="ap-input"
                          placeholder="e.g. Metro Station"
                          value={item.place_name}
                          onChange={(e) => handleNearbyChange(index, "place_name", e.target.value)}
                        />
                      </Field>
                      <Field label="Distance">
                        <input
                          className="ap-input"
                          placeholder="e.g. 500m"
                          value={item.distance}
                          onChange={(e) => handleNearbyChange(index, "distance", e.target.value)}
                        />
                      </Field>
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addNearbyPlace} className="add-more-btn">
                  + Add Nearby Place
                </button>
              </FormSection>

              {/* ── Floor Plans ── */}
              <FormSection title="Floor Plans" icon="🗺️">
                {floorPlans.map((item, index) => (
                  <div key={index} className="repeat-card">
                    <div className="repeat-card-header">
                      <span>Floor Plan #{index + 1}</span>
                      {floorPlans.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFloorPlan(index)}
                          className="remove-btn"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="ap-grid">
                      <Field label="Floor Name">
                        <input className="ap-input" placeholder="e.g. Ground Floor" value={item.floor_name} onChange={(e) => handleFloorPlanChange(index, "floor_name", e.target.value)} />
                      </Field>
                      <Field label="Floor Price">
                        <input className="ap-input" placeholder="Price" value={item.floor_price} onChange={(e) => handleFloorPlanChange(index, "floor_price", e.target.value)} />
                      </Field>
                      <Field label="Price Postfix">
                        <input className="ap-input" placeholder="e.g. /month" value={item.price_postfix} onChange={(e) => handleFloorPlanChange(index, "price_postfix", e.target.value)} />
                      </Field>
                      <Field label="Floor Size">
                        <input className="ap-input" placeholder="Size" value={item.floor_size} onChange={(e) => handleFloorPlanChange(index, "floor_size", e.target.value)} />
                      </Field>
                      <Field label="Size Postfix">
                        <input className="ap-input" placeholder="e.g. sqft" value={item.size_postfix} onChange={(e) => handleFloorPlanChange(index, "size_postfix", e.target.value)} />
                      </Field>
                      <Field label="Bedrooms">
                        <input className="ap-input" placeholder="No. of bedrooms" value={item.bedrooms} onChange={(e) => handleFloorPlanChange(index, "bedrooms", e.target.value)} />
                      </Field>
                      <Field label="Bathrooms">
                        <input className="ap-input" placeholder="No. of bathrooms" value={item.bathrooms} onChange={(e) => handleFloorPlanChange(index, "bathrooms", e.target.value)} />
                      </Field>
                    </div>

                    <Field label="Floor Description" fullWidth>
                      <textarea
                        className="ap-textarea"
                        rows={3}
                        placeholder="Describe this floor plan..."
                        value={item.description}
                        onChange={(e) => handleFloorPlanChange(index, "description", e.target.value)}
                      />
                    </Field>

                    <Field label="Floor Plan Image" fullWidth>
                      <input
                        type="file"
                        accept="image/*"
                        className="ap-input"
                        onChange={(e) => handleFloorPlanImageChange(index, e.target.files?.[0] || null)}
                      />
                    </Field>
                  </div>
                ))}
                <button type="button" onClick={addFloorPlan} className="add-more-btn">
                  + Add Floor Plan
                </button>
              </FormSection>

              {/* ── Attachments ── */}
              <FormSection title="Brochure / Attachments" icon="📎">
                {attachments.map((item, index) => (
                  <div key={index} className="repeat-card">
                    <div className="repeat-card-header">
                      <span>Attachment #{index + 1}</span>
                      {attachments.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeAttachment(index)}
                          className="remove-btn"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="ap-grid">
                      <Field label="Title">
                        <input
                          className="ap-input"
                          placeholder="Attachment title"
                          value={item.title}
                          onChange={(e) => handleAttachmentChange(index, "title", e.target.value)}
                        />
                      </Field>
                      <Field label="File">
                        <input
                          type="file"
                          className="ap-input"
                          onChange={(e) => handleAttachmentChange(index, "file", e.target.files?.[0] || null)}
                        />
                      </Field>
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addAttachment} className="add-more-btn">
                  + Add Attachment
                </button>
              </FormSection>

              {/* ── Submit ── */}
              <div className="ap-submit-row">
                <Link
                  href="/source-dashboard/my-properties"
                  className="cancel-btn"
                >
                  Cancel
                </Link>

                <button type="submit" disabled={loading} className="submit-btn">
                  {loading ? (
                    <span className="submit-loading">
                      <span className="submit-spinner" /> Submitting...
                    </span>
                  ) : (
                    "Submit Property for Approval"
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer1 />

      <style jsx>{`
        /* ════════════════════════════════════════════
           COLOR TOKENS (from screenshot)
           Primary  : #E8843A
           Hover    : #D4722E
           Tint     : #FDF3EC
           Dark     : #1A1A1A
           Muted    : #6B7280
           Border   : #E8E8E8
           Surface  : #FFFFFF
           Page     : #F9F9F9
        ════════════════════════════════════════════ */

        .add-property-page {
          background: #f9f9f9;
          min-height: 100vh;
        }

        /* ── Hero ──────────────────────────────────── */
        .ap-hero {
          position: relative;
          padding: 120px 0 72px;
          background:
            radial-gradient(circle at 78% 18%, rgba(232,132,58,0.28), transparent 30%),
            radial-gradient(circle at 16% 82%, rgba(232,132,58,0.15), transparent 28%),
            linear-gradient(135deg, #1a0e06 0%, #2a160a 48%, #3a1f0d 100%);
          overflow: hidden;
        }

        .ap-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: 0.36;
        }

        .ap-hero-inner {
          position: relative;
          z-index: 2;
          color: #ffffff;
        }

        .ap-eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(232,132,58,0.18);
          border: 1px solid rgba(232,132,58,0.42);
          color: #f4a96a;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.3px;
          margin-bottom: 18px;
        }

        .ap-hero h1 {
          color: #ffffff;
          font-size: clamp(36px, 5.5vw, 60px);
          line-height: 1.05;
          margin-bottom: 14px;
          letter-spacing: -1.2px;
        }

        .ap-hero p {
          color: rgba(255,255,255,0.82);
          font-size: 17px;
          line-height: 1.7;
          margin: 0;
          max-width: 620px;
        }

        /* ── Body ─────────────────────────────────── */
        .ap-body {
          padding: 44px 0 84px;
        }

        /* ── Message ──────────────────────────────── */
        .ap-message {
          margin-bottom: 24px;
          padding: 16px 20px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 15px;
        }

        .ap-message.success {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .ap-message.error {
          background: #fdf3ec;
          color: #c2410c;
          border: 1px solid #fed7aa;
        }

        /* ── Form sections ────────────────────────── */
        .form-section {
          background: #ffffff;
          border-radius: 26px;
          border: 1px solid #e8e8e8;
          box-shadow: 0 14px 38px rgba(232,132,58,0.07);
          margin-bottom: 24px;
          overflow: hidden;
        }

        .form-section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 22px 28px;
          border-bottom: 1px solid #e8e8e8;
          background: #fdf3ec;
        }

        .section-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: #e8843a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .form-section-header h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: -0.3px;
        }

        .form-section-body {
          padding: 28px;
        }

        /* ── Grid ─────────────────────────────────── */
        .ap-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .field-wrap {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .field-wrap.full-width {
          grid-column: 1 / -1;
        }

        .field-label {
          font-size: 13px;
          font-weight: 900;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        /* ── Inputs ───────────────────────────────── */
        :global(.ap-input) {
          width: 100%;
          padding: 13px 16px;
          border-radius: 12px;
          border: 1.5px solid #e8e8e8;
          background: #f9f9f9;
          color: #1a1a1a;
          font-size: 14px;
          font-weight: 600;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          box-sizing: border-box;
        }

        :global(.ap-input:focus) {
          border-color: #e8843a;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(232,132,58,0.12);
        }

        :global(.ap-textarea) {
          width: 100%;
          padding: 13px 16px;
          border-radius: 12px;
          border: 1.5px solid #e8e8e8;
          background: #f9f9f9;
          color: #1a1a1a;
          font-size: 14px;
          font-weight: 600;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          resize: vertical;
          box-sizing: border-box;
          font-family: inherit;
        }

        :global(.ap-textarea:focus) {
          border-color: #e8843a;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(232,132,58,0.12);
        }

        /* ── Upload box ───────────────────────────── */
        .ap-upload-box {
          position: relative;
          border: 2px dashed #e8843a;
          border-radius: 18px;
          background: #fdf3ec;
          padding: 38px 24px;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .ap-upload-box:hover {
          background: #fde8d4;
        }

        .upload-icon {
          font-size: 36px;
          margin-bottom: 10px;
        }

        .ap-upload-box p {
          color: #6b7280;
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 12px;
        }

        .upload-input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }

        .primary-picker {
          margin-top: 20px;
          padding: 18px;
          background: #f9f9f9;
          border-radius: 14px;
          border: 1px solid #e8e8e8;
        }

        .primary-picker-label {
          font-size: 14px;
          font-weight: 900;
          color: #1a1a1a;
          margin: 0 0 12px;
        }

        .primary-radio {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .primary-radio span {
          font-size: 14px;
          color: #374151;
        }

        /* ── Repeat cards ─────────────────────────── */
        .repeat-card {
          background: #f9f9f9;
          border: 1px solid #e8e8e8;
          border-radius: 18px;
          padding: 20px;
          margin-bottom: 14px;
        }

        .repeat-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .repeat-card-header span {
          font-size: 14px;
          font-weight: 900;
          color: #e8843a;
        }

        .remove-btn {
          background: #1a1a1a;
          color: #ffffff;
          border: none;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }

        .remove-btn:hover {
          background: #333333;
        }

        .add-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #e8843a;
          border: 1.5px solid #e8843a;
          padding: 11px 18px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 4px;
        }

        .add-more-btn:hover {
          background: #fdf3ec;
          transform: translateY(-1px);
        }

        /* ── Submit ───────────────────────────────── */
        .ap-submit-row {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        

        :global(.cancel-btn),
:global(.submit-btn) {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-height: 54px !important;
  padding: 14px 36px !important;
  background: #e8843a !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 16px !important;
  font-size: 16px !important;
  font-weight: 900 !important;
  line-height: 1.2 !important;
  text-decoration: none !important;
  cursor: pointer !important;
  transition: all 0.25s ease !important;
  box-shadow: 0 12px 28px rgba(232, 132, 58, 0.3) !important;
  font-family: inherit !important;
  white-space: nowrap !important;
}

:global(.cancel-btn:hover),
:global(.submit-btn:hover:not(:disabled)) {
  background: #d4722e !important;
  color: #ffffff !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 18px 36px rgba(232, 132, 58, 0.4) !important;
  text-decoration: none !important;
}

:global(.submit-btn:disabled) {
  opacity: 0.7 !important;
  cursor: not-allowed !important;
  transform: none !important;
}

:global(.cancel-btn:focus),
:global(.submit-btn:focus) {
  outline: none !important;
  box-shadow: 0 0 0 4px rgba(232, 132, 58, 0.18),
    0 12px 28px rgba(232, 132, 58, 0.3) !important;
}

        .submit-loading {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .submit-spinner {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.3);
          border-top-color: #ffffff;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Responsive ───────────────────────────── */
        @media (max-width: 767px) {
          .ap-hero {
            padding: 105px 0 56px;
          }

          .ap-hero h1 {
            font-size: 34px;
          }

          .ap-grid {
            grid-template-columns: 1fr;
          }

          .form-section-body {
            padding: 20px;
          }

          .form-section-header {
            padding: 18px 20px;
          }

          .ap-submit-row {
            justify-content: stretch;
            flex-direction: column-reverse;
          }

          :global(.cancel-btn),
            :global(.submit-btn) {
              width: 100% !important;
            }
        }

        @media (max-width: 480px) {
          .ap-hero {
            padding: 92px 0 44px;
          }

          .ap-hero h1 {
            font-size: 28px;
          }

          .ap-hero p {
            font-size: 14px;
          }

          .section-icon {
            width: 38px;
            height: 38px;
            font-size: 17px;
          }

          .form-section-header h2 {
            font-size: 17px;
          }
        }
      `}</style>
    </>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function FormSection({ title, icon, children }) {
  return (
    <div className="form-section">
      <div className="form-section-header">
        <div className="section-icon">{icon}</div>
        <h2>{title}</h2>
      </div>
      <div className="form-section-body">{children}</div>
    </div>
  );
}

function Field({ label, children, fullWidth }) {
  return (
    <div className={`field-wrap${fullWidth ? " full-width" : ""}`}>
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}