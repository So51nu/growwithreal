"use client";

import React, { useState } from "react";
import { apiGet, apiPost } from "../lib/api";

function formatDate(date) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
}

export default function CommentSection({ blogSlug, initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const refreshComments = async () => {
    try {
      const res = await apiGet(`/blog/${blogSlug}/comments/`);
      setComments(Array.isArray(res) ? res : []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await apiPost(`/blog/${blogSlug}/comments/`, form);
      setForm({ name: "", email: "", message: "" });
      await refreshComments();
      alert("Comment posted successfully");
    } catch (error) {
      alert(error.message || "Comment post failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="wrap-comment">
        <h4 className="title">Comment ({comments.length})</h4>

        <ul className="comment-list">
          {comments.map((item) => (
            <li key={item.id}>
              <div className="comment-item">
                <div className="content" style={{ width: "100%" }}>
                  <div className="user">
                    <div className="author">
                      <h6 className="name">{item.name}</h6>
                      <div className="time">{formatDate(item.created_at)}</div>
                    </div>
                  </div>
                  <div className="comment">
                    <p>{item.message}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="box-send">
        <div className="heading-box">
          <h4 className="title fw-7">Leave A Comment</h4>
          <p>Your email address will not be published. Required fields are marked *</p>
        </div>

        <form className="form-add-review" onSubmit={handleSubmit}>
          <div className="cols">
            <fieldset className="name">
              <label className="text-1 fw-6" htmlFor="name">Name</label>
              <input
                type="text"
                className="tf-input style-2"
                placeholder="Your Name*"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              />
            </fieldset>

            <fieldset className="email">
              <label className="text-1 fw-6" htmlFor="email">Email</label>
              <input
                type="email"
                className="tf-input style-2"
                placeholder="Your Email*"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              />
            </fieldset>
          </div>

          <fieldset className="message">
            <label className="text-1 fw-6" htmlFor="message-comment">Comment</label>
            <textarea
              id="message-comment"
              className="tf-input"
              name="message"
              rows={4}
              placeholder="Your comment"
              required
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            />
          </fieldset>

          <button className="tf-btn bg-color-primary pd-2 fw-7" type="submit" disabled={loading}>
            {loading ? "Posting..." : "Post Comment"}
          </button>
        </form>
      </div>
    </>
  );
}