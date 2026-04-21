"use client";

import React, { useEffect, useState } from "react";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePropertyImagesChange = (e) => {
    const files = Array.from(e.target.files || []);
    setPropertyImages(files);
    if (files.length === 0) {
      setPrimaryImageIndex(0);
    }
  };

  const handleNearbyChange = (index, field, value) => {
    const updated = [...nearbyPlaces];
    updated[index][field] = value;
    setNearbyPlaces(updated);
  };

  const addNearbyPlace = () => {
    setNearbyPlaces((prev) => [...prev, { ...emptyNearbyPlace }]);
  };

  const removeNearbyPlace = (index) => {
    setNearbyPlaces((prev) => prev.filter((_, i) => i !== index));
  };

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

  const addFloorPlan = () => {
    setFloorPlans((prev) => [...prev, { ...emptyFloorPlan }]);
  };

  const removeFloorPlan = (index) => {
    setFloorPlans((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAttachmentChange = (index, field, value) => {
    const updated = [...attachments];
    updated[index][field] = value;
    setAttachments(updated);
  };

  const addAttachment = () => {
    setAttachments((prev) => [...prev, { ...emptyAttachment }]);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

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
      JSON.stringify(
        nearbyPlaces.filter((item) => item.place_name.trim())
      )
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

    propertyImages.forEach((file) => {
      form.append("images", file);
    });

    floorPlans.forEach((item) => {
      if (item.floor_image) {
        form.append("floor_plan_images", item.floor_image);
      } else {
        form.append("floor_plan_images", new Blob([]), "");
      }
    });

    attachments.forEach((item) => {
      if (item.file) {
        form.append("attachments", item.file);
      }
    });

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/admindashboard/source-manager/add-property/`,
        {
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
          body: form,
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage(data.message || "Property submitted successfully.");
        resetForm();
      } else {
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
      setMessage("Something went wrong while submitting property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "10px" }}>Add Property</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Submitted property will go to admin for approval.
      </p>

      {message && (
        <div
          style={{
            marginBottom: "20px",
            padding: "14px 16px",
            borderRadius: "10px",
            background: "#fff4ef",
            color: "#ff6b35",
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <SectionTitle title="Main Property Details" />

        <div style={gridStyle}>
          <Input name="title" placeholder="Property Title" value={formData.title} onChange={handleChange} required />
          <Input name="property_code" placeholder="Property Code" value={formData.property_code} onChange={handleChange} required />
          <Input name="full_address" placeholder="Full Address" value={formData.full_address} onChange={handleChange} required />
          <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
          <Input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <Input name="state" placeholder="State" value={formData.state} onChange={handleChange} />
          <Input name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
          <Input name="zip_code" placeholder="Zip Code" value={formData.zip_code} onChange={handleChange} />
          <Input name="developer_name" placeholder="Developer Name" value={formData.developer_name} onChange={handleChange} />
          <Input name="short_location" placeholder="Short Location" value={formData.short_location} onChange={handleChange} />
          <Input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
          <Input name="unit_price" placeholder="Unit Price" value={formData.unit_price} onChange={handleChange} />
          <Input name="before_price_label" placeholder="Before Price Label" value={formData.before_price_label} onChange={handleChange} />
          <Input name="after_price_label" placeholder="After Price Label" value={formData.after_price_label} onChange={handleChange} />
          <Input name="size_sqft" placeholder="Size Sqft" value={formData.size_sqft} onChange={handleChange} />
          <Input name="land_area_sqft" placeholder="Land Area Sqft" value={formData.land_area_sqft} onChange={handleChange} />
          <Input name="rooms" placeholder="Rooms" value={formData.rooms} onChange={handleChange} />
          <Input name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} />
          <Input name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} />
          <Input name="garages" placeholder="Garages" value={formData.garages} onChange={handleChange} />
          <Input name="garages_size_sqft" placeholder="Garage Size Sqft" value={formData.garages_size_sqft} onChange={handleChange} />
          <Input name="year_built" placeholder="Year Built" value={formData.year_built} onChange={handleChange} />
          <Input name="carpet_area" placeholder="Carpet Area" value={formData.carpet_area} onChange={handleChange} />
          <Input name="possession_date" placeholder="Possession Date" value={formData.possession_date} onChange={handleChange} />
          <Input name="video_url" placeholder="Video URL" value={formData.video_url} onChange={handleChange} />
          <Input name="map_embed_url" placeholder="Map Embed URL" value={formData.map_embed_url} onChange={handleChange} />
          <Input name="virtual_tour_type" placeholder="Virtual Tour Type" value={formData.virtual_tour_type} onChange={handleChange} />
          <Input name="virtual_tour_embed_code" placeholder="Virtual Tour Embed Code" value={formData.virtual_tour_embed_code} onChange={handleChange} />
          <Input name="amenities" placeholder="Amenities (comma separated)" value={formData.amenities} onChange={handleChange} />

          <select name="property_type" value={formData.property_type} onChange={handleChange} style={inputStyle}>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="studio">Studio</option>
            <option value="office">Office</option>
          </select>

          <select name="property_status" value={formData.property_status} onChange={handleChange} style={inputStyle}>
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>

          <select name="property_label" value={formData.property_label} onChange={handleChange} style={inputStyle}>
            <option value="new-listing">New Listing</option>
            <option value="open-house">Open House</option>
            <option value="featured">Featured</option>
          </select>

          <input type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange} style={inputStyle} />
        </div>

        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          rows={6}
          style={textareaStyle}
        />

        <SectionTitle title="Property Images" />
        <div style={sectionCardStyle}>
          <input type="file" multiple accept="image/*" onChange={handlePropertyImagesChange} />
          {propertyImages.length > 0 && (
            <div style={{ marginTop: "16px" }}>
              <label style={{ fontWeight: 600, display: "block", marginBottom: "10px" }}>
                Select Primary Image
              </label>
              {propertyImages.map((file, index) => (
                <label key={index} style={{ display: "block", marginBottom: "8px" }}>
                  <input
                    type="radio"
                    name="primary_image"
                    checked={primaryImageIndex === index}
                    onChange={() => setPrimaryImageIndex(index)}
                  />{" "}
                  {file.name}
                </label>
              ))}
            </div>
          )}
        </div>

        <SectionTitle title="Nearby Places" />
        {nearbyPlaces.map((item, index) => (
          <div key={index} style={repeatCardStyle}>
            <div style={gridStyle}>
              <Input
                placeholder="Place Name"
                value={item.place_name}
                onChange={(e) => handleNearbyChange(index, "place_name", e.target.value)}
              />
              <Input
                placeholder="Distance"
                value={item.distance}
                onChange={(e) => handleNearbyChange(index, "distance", e.target.value)}
              />
            </div>

            {nearbyPlaces.length > 1 && (
              <button type="button" onClick={() => removeNearbyPlace(index)} style={removeBtnStyle}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addNearbyPlace} style={secondaryBtnStyle}>
          + Add Nearby Place
        </button>

        <SectionTitle title="Floor Plans" />
        {floorPlans.map((item, index) => (
          <div key={index} style={repeatCardStyle}>
            <div style={gridStyle}>
              <Input
                placeholder="Floor Name"
                value={item.floor_name}
                onChange={(e) => handleFloorPlanChange(index, "floor_name", e.target.value)}
              />
              <Input
                placeholder="Floor Price"
                value={item.floor_price}
                onChange={(e) => handleFloorPlanChange(index, "floor_price", e.target.value)}
              />
              <Input
                placeholder="Price Postfix"
                value={item.price_postfix}
                onChange={(e) => handleFloorPlanChange(index, "price_postfix", e.target.value)}
              />
              <Input
                placeholder="Floor Size"
                value={item.floor_size}
                onChange={(e) => handleFloorPlanChange(index, "floor_size", e.target.value)}
              />
              <Input
                placeholder="Size Postfix"
                value={item.size_postfix}
                onChange={(e) => handleFloorPlanChange(index, "size_postfix", e.target.value)}
              />
              <Input
                placeholder="Bedrooms"
                value={item.bedrooms}
                onChange={(e) => handleFloorPlanChange(index, "bedrooms", e.target.value)}
              />
              <Input
                placeholder="Bathrooms"
                value={item.bathrooms}
                onChange={(e) => handleFloorPlanChange(index, "bathrooms", e.target.value)}
              />
            </div>

            <textarea
              rows={4}
              placeholder="Floor Description"
              value={item.description}
              onChange={(e) => handleFloorPlanChange(index, "description", e.target.value)}
              style={textareaStyle}
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFloorPlanImageChange(index, e.target.files?.[0] || null)}
            />

            {floorPlans.length > 1 && (
              <button type="button" onClick={() => removeFloorPlan(index)} style={removeBtnStyle}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addFloorPlan} style={secondaryBtnStyle}>
          + Add Floor Plan
        </button>

        <SectionTitle title="Brochure / Attachments" />
        {attachments.map((item, index) => (
          <div key={index} style={repeatCardStyle}>
            <div style={gridStyle}>
              <Input
                placeholder="Attachment Title"
                value={item.title}
                onChange={(e) => handleAttachmentChange(index, "title", e.target.value)}
              />
              <input
                type="file"
                onChange={(e) => handleAttachmentChange(index, "file", e.target.files?.[0] || null)}
                style={inputStyle}
              />
            </div>

            {attachments.length > 1 && (
              <button type="button" onClick={() => removeAttachment(index)} style={removeBtnStyle}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addAttachment} style={secondaryBtnStyle}>
          + Add Attachment
        </button>

        <div style={{ marginTop: "28px" }}>
          <button type="submit" disabled={loading} style={submitBtnStyle}>
            {loading ? "Submitting..." : "Submit Property"}
          </button>
        </div>
      </form>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h2
      style={{
        marginTop: "32px",
        marginBottom: "16px",
        fontSize: "24px",
        fontWeight: 700,
      }}
    >
      {title}
    </h2>
  );
}

function Input(props) {
  return <input {...props} style={inputStyle} />;
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const textareaStyle = {
  width: "100%",
  marginTop: "16px",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const sectionCardStyle = {
  background: "#fff",
  border: "1px solid #eee",
  borderRadius: "14px",
  padding: "18px",
};

const repeatCardStyle = {
  background: "#fff",
  border: "1px solid #eee",
  borderRadius: "14px",
  padding: "18px",
  marginBottom: "14px",
};

const secondaryBtnStyle = {
  background: "#fff",
  color: "#ff6b35",
  border: "1px solid #ff6b35",
  padding: "10px 16px",
  borderRadius: "10px",
  fontWeight: 600,
  cursor: "pointer",
  marginTop: "6px",
};

const removeBtnStyle = {
  background: "#111",
  color: "#fff",
  border: "none",
  padding: "10px 16px",
  borderRadius: "10px",
  fontWeight: 600,
  cursor: "pointer",
  marginTop: "14px",
};

const submitBtnStyle = {
  background: "#ff6b35",
  color: "#fff",
  border: "none",
  padding: "14px 24px",
  borderRadius: "10px",
  fontWeight: 700,
  cursor: "pointer",
};