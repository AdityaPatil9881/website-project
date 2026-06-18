import { useState } from "react";
import "./Register.css";

// ── SVG Icons ──────────────────────────────────────────────
const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const EyeIcon = ({ open }) => (
  open ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
);

// ── Navbar ──────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <div className="logo-icon">🎓</div>
        LearnSkillX
      </a>
      <ul className="nav-links">
        {["Home", "Courses", "Placements", "About", "Contact"].map((item) => (
          <li key={item}><a href="#">{item}</a></li>
        ))}
      </ul>
      <div className="nav-actions">
        <button className="btn-login">Login</button>
        <button className="btn-apply">Apply Now →</button>
      </div>
    </nav>
  );
}

// ── Left Panel ──────────────────────────────────────────────
function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="badge">
        <span className="badge-dot" />
        🚀 India's #1 Tech Learning Platform
      </div>

      <h1>
        Start Your<br />
        <span>Tech Journey</span><br />
        Today
      </h1>
      <p>
        Join thousands of students who launched their careers with
        industry-ready training in Web Development, Data Science, AI & more.
      </p>

      <div className="stat-row">
        {[
          { val: "4,000+", label: "Students enrolled" },
          { val: "₹24 LPA", label: "Avg. package" },
          { val: "98%",     label: "Placement rate" },
        ].map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-val">{s.val}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="placement-card">
        <div className="placement-icon">🏆</div>
        <div>
          <div className="placement-company">Placed at Google</div>
          <div className="placement-name">Priya Sharma</div>
          <div className="placement-lpa">₹24 LPA · Web Development</div>
        </div>
      </div>

      <div className="avatars">
        <div className="avatar av1">A</div>
        <div className="avatar av2">B</div>
        <div className="avatar av3">D</div>
        <span className="enrolled-text">
          <strong>4,000+</strong> students enrolled this month
        </span>
      </div>
    </div>
  );
}

// ── Stepper ─────────────────────────────────────────────────
function Stepper({ current }) {
  const steps = ["Account", "Profile", "Course"];
  return (
    <div className="stepper">
      {steps.map((label, i) => {
        const status = i < current ? "done" : i === current ? "active" : "pending";
        return (
          <div className="step-wrapper" key={label}>
            <div className="step">
              <div className={`step-circle ${status}`}>
                {status === "done" ? "✓" : i + 1}
              </div>
              <span className={`step-label ${status}`}>{label}</span>
            </div>
            {i < steps.length - 1 && <div className="step-line" />}
          </div>
        );
      })}
    </div>
  );
}

// ── Password Field ───────────────────────────────────────────
function PasswordField({ label, id, value, onChange, placeholder, error }) {
  const [show, setShow] = useState(false);
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className={`input-wrap ${error ? "input-error" : ""}`}>
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="eye-btn"
          onClick={() => setShow((s) => !s)}
          aria-label="Toggle password visibility"
        >
          <EyeIcon open={show} />
        </button>
      </div>
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

// ── Register Form ────────────────────────────────────────────
function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    countryCode: "+91", phone: "", course: "",
    password: "", confirmPassword: "", terms: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (e) =>
    setForm((f) => ({
      ...f,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const validate = () => {
    const e = {};
    if (form.firstName.trim().length < 2) e.firstName = "Min. 2 characters";
    if (form.lastName.trim().length < 2)  e.lastName  = "Min. 2 characters";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email     = "Enter a valid email";
    if (!/^\d{10}$/.test(form.phone))     e.phone     = "Enter a valid 10-digit number";
    if (!form.course)                     e.course    = "Please select a course";
    if (form.password.length < 8)         e.password  = "Min. 8 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    if (!form.terms)                      e.terms     = "You must accept the terms";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-card success-card">
        <div className="success-icon">🎉</div>
        <h2>Account Created!</h2>
        <p>Welcome to LearnSkillX, {form.firstName}! Redirecting to your dashboard…</p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <Stepper current={0} />

      <div className="form-header">
        <h2>Create your <span>free</span> account</h2>
        <p>Start learning in under 2 minutes — no credit card required.</p>
      </div>

      {/* Social */}
      <div className="social-row">
        <button type="button" className="btn-social"><GoogleIcon /> Google</button>
        <button type="button" className="btn-social"><FacebookIcon /> Facebook</button>
      </div>

      <div className="divider"><span>or register with email</span></div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input id="firstName" type="text" placeholder="Arjun"
              value={form.firstName} onChange={set("firstName")}
              className={errors.firstName ? "input-error" : ""} />
            {errors.firstName && <span className="field-error">{errors.firstName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" type="text" placeholder="Sharma"
              value={form.lastName} onChange={set("lastName")}
              className={errors.lastName ? "input-error" : ""} />
            {errors.lastName && <span className="field-error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="arjun@example.com"
            value={form.email} onChange={set("email")}
            className={errors.email ? "input-error" : ""} />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone number</label>
          <div className="phone-row">
            <select value={form.countryCode} onChange={set("countryCode")}>
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
            </select>
            <input type="tel" placeholder="98765 43210"
              value={form.phone} onChange={set("phone")}
              className={errors.phone ? "input-error" : ""} />
          </div>
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="course">Course interest</label>
          <select id="course" value={form.course} onChange={set("course")}
            className={errors.course ? "input-error" : ""}>
            <option value="" disabled>Select a course</option>
            {[
              "Full-Stack Web Development",
              "Data Science & ML",
              "UI/UX Design",
              "DevOps & Cloud",
              "Cybersecurity",
              "AI & Generative AI",
            ].map((c) => <option key={c}>{c}</option>)}
          </select>
          {errors.course && <span className="field-error">{errors.course}</span>}
        </div>

        <PasswordField
          label="Password" id="password" placeholder="Min. 8 characters"
          value={form.password} onChange={set("password")}
          error={errors.password}
        />

        <PasswordField
          label="Confirm password" id="confirmPassword" placeholder="Repeat password"
          value={form.confirmPassword} onChange={set("confirmPassword")}
          error={errors.confirmPassword}
        />

        <div className="check-group">
          <input type="checkbox" id="terms" checked={form.terms} onChange={set("terms")} />
          <span>
            I agree to LearnSkillX's{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            I may receive course updates via email or SMS.
          </span>
        </div>
        {errors.terms && <span className="field-error" style={{ marginTop: "-12px", marginBottom: "12px", display: "block" }}>{errors.terms}</span>}

        <button type="submit" className="btn-submit">
          Create My Free Account →
        </button>
      </form>

      <p className="login-link">
        Already have an account? <a href="#">Sign in here</a>
      </p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function Register() {
  return (
    <div className="register-root">
      <Navbar />
      <div className="page">
        <LeftPanel />
        <div className="right-panel">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}