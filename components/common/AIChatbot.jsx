"use client";

import React, { useEffect, useRef, useState } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

const WIDGET_KEY = process.env.NEXT_PUBLIC_CHATBOT_WIDGET_KEY || "growl-main";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [config, setConfig] = useState({
    bot_name: "Property AI Assistant",
    welcome_message:
      "Hi! Main aapki property search me help kar sakta hoon. Aap city, budget, BHK ya project name puch sakte ho.",
    primary_color: "#FF7A1A",
    secondary_color: "#0B1320",
  });

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text:
        "Hi! Main aapki property search me help kar sakta hoon. Aap city, budget, BHK ya project name puch sakte ho.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [leadForm, setLeadForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const bottomRef = useRef(null);

  useEffect(() => {
    const oldSession = localStorage.getItem("growl_chat_session_id");

    if (oldSession) {
      setSessionId(oldSession);
    }

    fetch(`${API_BASE_URL}/api/aichatbot/config/?widget_key=${WIDGET_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.config) {
          setConfig(data.config);
          setMessages([
            {
              role: "bot",
              text: data.config.welcome_message,
            },
          ]);
        }
      })
      .catch(() => {});
  }, []);

  const scrollBottom = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const saveSession = (newSessionId) => {
    if (!newSessionId) return;
    setSessionId(newSessionId);
    localStorage.setItem("growl_chat_session_id", newSessionId);
  };

  const sendMessage = async () => {
  const userMessage = input.trim();

  if (!userMessage || loading) return;

  setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
  setInput("");
  setLoading(true);
  scrollBottom();

  try {
    const response = await fetch(`${API_BASE_URL}/api/aichatbot/chat/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Widget-Key": WIDGET_KEY,
      },
      body: JSON.stringify({
        message: userMessage,
        session_id: sessionId,
        widget_key: WIDGET_KEY,
        source_url: typeof window !== "undefined" ? window.location.href : "",
      }),
    });

    let data = null;

    try {
      data = await response.json();
    } catch (jsonError) {
      throw new Error("Backend JSON response nahi de raha. Django API URL check karo.");
    }

    if (!response.ok || !data.success) {
      throw new Error(data.message || `API Error: ${response.status}`);
    }

    saveSession(data.session_id);

    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        text: data.answer,
        properties: data.properties || [],
      },
    ]);
  } catch (error) {
    console.error("AI Chatbot Error:", error);

    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        text: `Chatbot Error: ${error.message}`,
      },
    ]);
  } finally {
    setLoading(false);
    scrollBottom();
  }
};

  const submitLead = async () => {
    if (!leadForm.name.trim() || !leadForm.phone.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Please name aur phone number fill karo.",
        },
      ]);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/aichatbot/lead/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Widget-Key": WIDGET_KEY,
        },
        body: JSON.stringify({
          ...leadForm,
          session_id: sessionId,
          widget_key: WIDGET_KEY,
          property_id: selectedProperty?.id || "",
          source_url:
            typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Lead submit failed");
      }

      setShowLeadForm(false);
      setLeadForm({
        name: "",
        phone: "",
        email: "",
        requirement: "",
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.message || "Thank you! Our team will contact you shortly.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Lead submit nahi hua. Please thodi der baad try karo.",
        },
      ]);
    }
  };

  const openLeadForm = (property = null) => {
    setSelectedProperty(property);
    setShowLeadForm(true);
    setLeadForm((prev) => ({
      ...prev,
      requirement: property?.title
        ? `I am interested in ${property.title}`
        : prev.requirement,
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        style={{
          ...styles.floatingButton,
          background: `linear-gradient(135deg, ${config.primary_color}, #FF6A00)`,
        }}
      >
        AI
      </button>

      {isOpen && (
        <div
          style={{
            ...styles.chatWrapper,
            background: config.secondary_color,
          }}
        >
          <div style={styles.header}>
            <div>
              <h3 style={styles.title}>{config.bot_name}</h3>
              <p style={styles.subtitle}>
                Ask about projects, price, BHK & location
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={styles.closeButton}
            >
              ×
            </button>
          </div>

          <div style={styles.messagesArea}>
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                style={{
                  ...styles.messageRow,
                  justifyContent:
                    message.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    ...styles.messageBubble,
                    ...(message.role === "user"
                      ? {
                          ...styles.userBubble,
                          background: `linear-gradient(135deg, ${config.primary_color}, #FF6A00)`,
                        }
                      : styles.botBubble),
                  }}
                >
                  <p style={styles.messageText}>{message.text}</p>

                  {Array.isArray(message.properties) &&
                    message.properties.length > 0 && (
                      <div style={styles.propertyList}>
                        {message.properties.slice(0, 3).map((property) => (
                          <div key={property.id} style={styles.propertyCard}>
                            {property.image && (
                              <img
                                src={property.image}
                                alt={property.title}
                                style={styles.propertyImage}
                              />
                            )}

                            <div style={styles.propertyContent}>
                              <h4 style={styles.propertyTitle}>
                                {property.title}
                              </h4>

                              <p style={styles.propertyMeta}>
                                {property.location || property.city}
                              </p>

                              <p style={styles.propertyMeta}>
                                {property.bedrooms
                                  ? `${property.bedrooms} BHK`
                                  : "BHK not available"}{" "}
                                • {property.price || "Price not available"}
                              </p>

                              <div style={styles.actionRow}>
                                <a
                                  href={`/property-detail-v1/${property.id}`}
                                  style={{
                                    ...styles.propertyLink,
                                    color: config.primary_color,
                                  }}
                                >
                                  View Details
                                </a>

                                <button
                                  type="button"
                                  onClick={() => openLeadForm(property)}
                                  style={{
                                    ...styles.enquireBtn,
                                    background: config.primary_color,
                                  }}
                                >
                                  Enquire
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            ))}

            {loading && (
              <div style={styles.messageRow}>
                <div style={{ ...styles.messageBubble, ...styles.botBubble }}>
                  <p style={styles.messageText}>Searching best answer...</p>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {showLeadForm && (
            <div style={styles.leadOverlay}>
              <div style={styles.leadBox}>
                <div style={styles.leadHeader}>
                  <h3 style={styles.leadTitle}>Get Property Assistance</h3>
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    style={styles.leadClose}
                  >
                    ×
                  </button>
                </div>

                <input
                  style={styles.leadInput}
                  placeholder="Your Name *"
                  value={leadForm.name}
                  onChange={(e) =>
                    setLeadForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />

                <input
                  style={styles.leadInput}
                  placeholder="Phone Number *"
                  value={leadForm.phone}
                  onChange={(e) =>
                    setLeadForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />

                <input
                  style={styles.leadInput}
                  placeholder="Email"
                  value={leadForm.email}
                  onChange={(e) =>
                    setLeadForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />

                <textarea
                  style={{
                    ...styles.leadInput,
                    minHeight: "76px",
                    resize: "none",
                  }}
                  placeholder="Requirement"
                  value={leadForm.requirement}
                  onChange={(e) =>
                    setLeadForm((prev) => ({
                      ...prev,
                      requirement: e.target.value,
                    }))
                  }
                />

                <button
                  type="button"
                  onClick={submitLead}
                  style={{
                    ...styles.submitLeadBtn,
                    background: config.primary_color,
                  }}
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          )}

          <div style={styles.quickActions}>
            <button
              type="button"
              style={styles.quickBtn}
              onClick={() => setInput("Latest projects batao")}
            >
              Latest Projects
            </button>
            <button
              type="button"
              style={styles.quickBtn}
              onClick={() => setInput("Site visit book karna hai")}
            >
              Site Visit
            </button>
            <button
              type="button"
              style={styles.quickBtn}
              onClick={() => openLeadForm()}
            >
              Contact Me
            </button>
          </div>

          <div style={styles.inputArea}>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Example: Mumbai me 2 BHK under 1 Cr batao..."
              style={styles.input}
              rows={1}
            />

            <button
              type="button"
              onClick={sendMessage}
              disabled={loading}
              style={{
                ...styles.sendButton,
                background: config.primary_color,
                opacity: loading ? 0.6 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  floatingButton: {
    position: "fixed",
    right: "24px",
    bottom: "24px",
    width: "62px",
    height: "62px",
    borderRadius: "50%",
    border: "none",
    color: "#FFFFFF",
    fontWeight: 800,
    fontSize: "18px",
    boxShadow: "0 14px 35px rgba(255, 122, 26, 0.35)",
    zIndex: 9999,
    cursor: "pointer",
  },

  chatWrapper: {
    position: "fixed",
    right: "24px",
    bottom: "98px",
    width: "410px",
    maxWidth: "calc(100vw - 32px)",
    height: "610px",
    maxHeight: "calc(100vh - 130px)",
    borderRadius: "22px",
    boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    zIndex: 9999,
    border: "1px solid rgba(255,255,255,0.08)",
  },

  header: {
    padding: "18px",
    background: "linear-gradient(135deg, #0F1B2D, #1A2333)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  title: {
    margin: 0,
    color: "#FFFFFF",
    fontSize: "17px",
    fontWeight: 800,
  },

  subtitle: {
    margin: "4px 0 0",
    color: "#9CA3AF",
    fontSize: "12px",
  },

  closeButton: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "#FFFFFF",
    fontSize: "24px",
    cursor: "pointer",
    lineHeight: "28px",
  },

  messagesArea: {
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    background:
      "radial-gradient(circle at top, rgba(255,122,26,0.08), transparent 34%), #0B1320",
  },

  messageRow: {
    display: "flex",
    marginBottom: "12px",
  },

  messageBubble: {
    maxWidth: "88%",
    borderRadius: "16px",
    padding: "12px 13px",
  },

  userBubble: {
    color: "#FFFFFF",
    borderBottomRightRadius: "5px",
  },

  botBubble: {
    background: "#111827",
    color: "#E5E7EB",
    border: "1px solid rgba(255,255,255,0.08)",
    borderBottomLeftRadius: "5px",
  },

  messageText: {
    margin: 0,
    whiteSpace: "pre-wrap",
    fontSize: "13.5px",
    lineHeight: 1.55,
  },

  quickActions: {
    display: "flex",
    gap: "8px",
    padding: "10px 12px 0",
    background: "#0F1B2D",
  },

  quickBtn: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#111827",
    color: "#E5E7EB",
    borderRadius: "999px",
    padding: "8px 10px",
    fontSize: "11px",
    cursor: "pointer",
  },

  inputArea: {
    padding: "12px",
    background: "#0F1B2D",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    gap: "10px",
  },

  input: {
    flex: 1,
    resize: "none",
    outline: "none",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#111827",
    color: "#FFFFFF",
    borderRadius: "14px",
    padding: "12px 13px",
    fontSize: "13px",
    minHeight: "44px",
  },

  sendButton: {
    border: "none",
    borderRadius: "14px",
    color: "#FFFFFF",
    padding: "0 18px",
    fontWeight: 800,
  },

  propertyList: {
    marginTop: "12px",
    display: "grid",
    gap: "10px",
  },

  propertyCard: {
    display: "flex",
    gap: "10px",
    background: "#0B1320",
    borderRadius: "14px",
    padding: "9px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  propertyImage: {
    width: "72px",
    height: "72px",
    borderRadius: "12px",
    objectFit: "cover",
    flexShrink: 0,
  },

  propertyContent: {
    minWidth: 0,
    flex: 1,
  },

  propertyTitle: {
    margin: "0 0 4px",
    color: "#FFFFFF",
    fontSize: "13px",
    fontWeight: 800,
  },

  propertyMeta: {
    margin: "0 0 3px",
    color: "#9CA3AF",
    fontSize: "11.5px",
  },

  actionRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    marginTop: "6px",
  },

  propertyLink: {
    fontSize: "12px",
    fontWeight: 700,
    textDecoration: "none",
  },

  enquireBtn: {
    border: "none",
    color: "#FFFFFF",
    borderRadius: "999px",
    padding: "6px 10px",
    fontSize: "11px",
    fontWeight: 700,
    cursor: "pointer",
  },

  leadOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.62)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px",
    zIndex: 10,
  },

  leadBox: {
    width: "100%",
    background: "#111827",
    borderRadius: "18px",
    padding: "16px",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  leadHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "12px",
  },

  leadTitle: {
    margin: 0,
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: 800,
  },

  leadClose: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "#FFFFFF",
    fontSize: "22px",
    cursor: "pointer",
  },

  leadInput: {
    width: "100%",
    marginBottom: "10px",
    outline: "none",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#0B1320",
    color: "#FFFFFF",
    borderRadius: "12px",
    padding: "12px",
    fontSize: "13px",
    boxSizing: "border-box",
  },

  submitLeadBtn: {
    width: "100%",
    border: "none",
    color: "#FFFFFF",
    borderRadius: "12px",
    padding: "12px",
    fontWeight: 800,
    cursor: "pointer",
  },
};