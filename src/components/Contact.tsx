import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .required("Message is required"),
});

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("loading");
      
      try {
        // EmailJS configuration
        const serviceId = "service_dm27erx";
        const templateId = "template_zgg35dd";
        const publicKey = "aLpi1Bi767aNBDu3T";

        // Send email using EmailJS
        await emailjs.send(serviceId, templateId, {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }, publicKey);

        setStatus("success");
        setStatusMessage("Thank you for your message! I'll get back to you soon.");
        resetForm();
        setTimeout(() => setStatus("idle"), 5000);
      } catch (error) {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setStatusMessage("Oops! Something went wrong. Please try again later.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    },
  });

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Have a project in mind or want to collaborate? 
            I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.
          </p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <FaEnvelope className="contact-detail-icon" />
              <div>
                <span className="contact-detail-label">Email</span>
                <a href="mailto:archieew2custodio@gmail.com" className="contact-detail-value">
                  archieew2custodio@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <form 
          ref={formRef} 
          className="contact-form" 
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <FaUser className="form-label-icon" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${formik.touched.name && formik.errors.name ? "error" : ""}`}
              placeholder="Your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={status === "loading"}
            />
            {formik.touched.name && formik.errors.name && (
              <span className="form-error">{formik.errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="form-label-icon" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${formik.touched.email && formik.errors.email ? "error" : ""}`}
              placeholder="your.email@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={status === "loading"}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="form-error">{formik.errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              <FaCommentDots className="form-label-icon" />
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`form-input ${formik.touched.subject && formik.errors.subject ? "error" : ""}`}
              placeholder="What's this about?"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={status === "loading"}
            />
            {formik.touched.subject && formik.errors.subject && (
              <span className="form-error">{formik.errors.subject}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              <FaCommentDots className="form-label-icon" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`form-textarea ${formik.touched.message && formik.errors.message ? "error" : ""}`}
              placeholder="Tell me about your project or idea..."
              rows={5}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={status === "loading"}
            />
            {formik.touched.message && formik.errors.message && (
              <span className="form-error">{formik.errors.message}</span>
            )}
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${status}`}
            disabled={status === "loading" || !formik.isValid}
          >
            {status === "loading" ? (
              <>
                <span className="loading-spinner"></span>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="submit-icon" />
                Send Message
              </>
            )}
          </button>

          {status === "success" && (
            <div className="status-message success">
              <FaCheckCircle className="status-icon" />
              {statusMessage}
            </div>
          )}

          {status === "error" && (
            <div className="status-message error">
              <FaExclamationCircle className="status-icon" />
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
