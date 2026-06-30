"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, MapPin, Mail, Phone } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const projectTypes = [
  "홍보영상",
  "유튜브 채널",
  "AI 콘텐츠",
  "문화예술",
  "지역 콘텐츠",
  "기타",
];

const contactInfo = [
  { icon: Mail, label: "이메일", value: "hello@medorastudio.kr", href: "mailto:hello@medorastudio.kr" },
  { icon: Phone, label: "전화", value: "02-000-0000", href: "tel:+82200000000" },
  { icon: MapPin, label: "위치", value: "서울특별시", href: "#" },
];

interface FormState {
  name: string;
  organization: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    organization: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "이름을 입력해주세요.";
    if (!form.email.trim()) e.email = "이메일을 입력해주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "올바른 이메일 형식이 아닙니다.";
    if (!form.message.trim()) e.message = "문의 내용을 입력해주세요.";
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      const first = document.querySelector("[aria-invalid='true']") as HTMLElement;
      first?.focus();
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <section
      id="contact"
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        {/* Left Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <AnimateInView>
              <SectionLabel>Contact</SectionLabel>
            </AnimateInView>
            <AnimateInView delay={0.1}>
              <h2
                id="contact-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
              >
                프로젝트를
                <br />
                <span className="gradient-text">시작해봐요</span>
              </h2>
            </AnimateInView>
            <AnimateInView delay={0.2}>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                규모에 상관없이 모든 문의를 환영합니다.
                아이디어가 있다면 먼저 연락해 주세요.
                빠른 시일 내에 답변드리겠습니다.
              </p>
            </AnimateInView>
          </div>

          <div className="flex flex-col gap-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <AnimateInView key={info.label} delay={0.25 + i * 0.1}>
                  <a
                    href={info.href}
                    className="flex items-center gap-4 group"
                    aria-label={`${info.label}: ${info.value}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors duration-200">
                      <Icon size={16} className="text-[var(--accent)]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)]">{info.label}</div>
                      <div className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-200">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </AnimateInView>
              );
            })}
          </div>

          {/* Response time */}
          <AnimateInView delay={0.5}>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-[var(--text-primary)]">빠른 응답 보장</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                영업일 기준 24시간 이내 답변을 드립니다.
                긴급 문의는 이메일 제목에 [긴급]을 표시해 주세요.
              </p>
            </div>
          </AnimateInView>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-3">
          <AnimateInView delay={0.15} direction="left">
            <div className="glass-card rounded-2xl p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-6 py-16 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle size={56} className="text-[var(--accent)]" aria-hidden="true" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                        문의가 접수되었습니다!
                      </h3>
                      <p className="text-[var(--text-secondary)]">
                        영업일 기준 24시간 이내에 답변 드리겠습니다.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", organization: "", email: "", projectType: "", budget: "", message: "" }); }}
                      className="text-sm text-[var(--accent)] hover:underline cursor-pointer"
                    >
                      새 문의 작성
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                    aria-label="프로젝트 문의 양식"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-name" className="text-sm font-medium text-[var(--text-primary)]">
                          이름 <span aria-label="필수" className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="px-4 py-3 rounded-xl bg-[var(--surface-2)] border text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                          style={{ borderColor: errors.name ? "#ff4444" : "var(--border-subtle)" }}
                          placeholder="홍길동"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "error-name" : undefined}
                          autoComplete="name"
                        />
                        {errors.name && <p id="error-name" className="text-xs text-red-400" role="alert">{errors.name}</p>}
                      </div>

                      {/* Organization */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-org" className="text-sm font-medium text-[var(--text-primary)]">
                          소속 기관 / 기업
                        </label>
                        <input
                          id="contact-org"
                          type="text"
                          value={form.organization}
                          onChange={(e) => handleChange("organization", e.target.value)}
                          className="px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                          placeholder="Media LAB Inc."
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-sm font-medium text-[var(--text-primary)]">
                        이메일 <span aria-label="필수" className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="px-4 py-3 rounded-xl bg-[var(--surface-2)] border text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                        style={{ borderColor: errors.email ? "#ff4444" : "var(--border-subtle)" }}
                        placeholder="hello@company.kr"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "error-email" : undefined}
                        autoComplete="email"
                      />
                      {errors.email && <p id="error-email" className="text-xs text-red-400" role="alert">{errors.email}</p>}
                    </div>

                    {/* Project Type */}
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-[var(--text-primary)]" id="project-type-label">
                        프로젝트 종류
                      </span>
                      <div
                        className="flex flex-wrap gap-2"
                        role="group"
                        aria-labelledby="project-type-label"
                      >
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleChange("projectType", type)}
                            className="text-sm px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer"
                            style={{
                              borderColor: form.projectType === type ? "var(--accent)" : "var(--border-subtle)",
                              background: form.projectType === type ? "var(--accent-dim)" : "var(--surface-2)",
                              color: form.projectType === type ? "var(--accent)" : "var(--text-secondary)",
                            }}
                            aria-pressed={form.projectType === type}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-budget" className="text-sm font-medium text-[var(--text-primary)]">
                        예산 범위
                      </label>
                      <select
                        id="contact-budget"
                        value={form.budget}
                        onChange={(e) => handleChange("budget", e.target.value)}
                        className="px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 cursor-pointer"
                      >
                        <option value="" style={{ background: "#0d201e" }}>선택 안함</option>
                        <option value="500만원 미만" style={{ background: "#0d201e" }}>500만원 미만</option>
                        <option value="500–1,000만원" style={{ background: "#0d201e" }}>500–1,000만원</option>
                        <option value="1,000–3,000만원" style={{ background: "#0d201e" }}>1,000–3,000만원</option>
                        <option value="3,000만원 이상" style={{ background: "#0d201e" }}>3,000만원 이상</option>
                        <option value="협의" style={{ background: "#0d201e" }}>협의</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-message" className="text-sm font-medium text-[var(--text-primary)]">
                        문의 내용 <span aria-label="필수" className="text-[var(--accent)]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={4}
                        className="px-4 py-3 rounded-xl bg-[var(--surface-2)] border text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none"
                        style={{ borderColor: errors.message ? "#ff4444" : "var(--border-subtle)" }}
                        placeholder="프로젝트에 대해 간략하게 알려주세요. 목적, 일정, 필요한 영상 수 등을 적어주시면 더 빠르게 검토할 수 있습니다."
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "error-message" : undefined}
                      />
                      {errors.message && <p id="error-message" className="text-xs text-red-400" role="alert">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[var(--accent)] text-[#07100f] font-semibold text-base cursor-pointer hover:bg-[#00b394] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      whileHover={!loading ? { scale: 1.01 } : {}}
                      whileTap={!loading ? { scale: 0.99 } : {}}
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#07100f]/30 border-t-[#07100f] rounded-full animate-spin" aria-hidden="true" />
                          전송 중...
                        </>
                      ) : (
                        <>
                          <Send size={16} aria-hidden="true" />
                          문의 보내기
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
