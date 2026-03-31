import {
  ChevronUp,
  Facebook,
  FlowerIcon,
  Gem,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/919876543210";
const TEL_URL = "tel:+919876543210";
const PHONE_DISPLAY = "+91 98765 43210";

const STARS = ["s1", "s2", "s3", "s4", "s5"];

const services = [
  {
    icon: Scissors,
    name: "Haircut & Styling",
    tagline: "A cut that works for your face, your lifestyle, and your vibe.",
    benefits: [
      "Styled to suit your face shape and hair type",
      "Trending cuts and classic styles both available",
      "Includes a wash and blow-dry finish",
      "Honest consultation before we start",
    ],
  },
  {
    icon: Palette,
    name: "Hair Coloring",
    tagline: "Color that turns heads — without damaging what you have.",
    benefits: [
      "Safe, quality color products",
      "Options for all hair types and skin tones",
      "Includes a strand test and consultation",
      "Long-lasting results",
    ],
  },
  {
    icon: Sparkles,
    name: "Bridal Makeup",
    tagline: "Your wedding day look, done exactly right.",
    benefits: [
      "Traditional, fusion, or modern bridal styles",
      "Trial session available before the big day",
      "Long-wear products for all-day confidence",
      "Customized to your outfit and theme",
    ],
  },
  {
    icon: Gem,
    name: "Facials & Skincare",
    tagline: "Real results for your skin — not just a one-hour glow.",
    benefits: [
      "Skin analysis before every treatment",
      "Options for all skin types",
      "Visible results from the first session",
      "Hygienic tools and fresh products",
    ],
  },
  {
    icon: FlowerIcon,
    name: "Hair Spa",
    tagline: "Give your hair the care it's been asking for.",
    benefits: [
      "Deep conditioning and moisture treatment",
      "Reduces frizz, breakage, and dryness",
      "Scalp massage included for relaxation",
      "Visible softness and bounce after one session",
    ],
  },
];

const testimonials = [
  {
    quote:
      "I got my bridal makeup done here and I felt absolutely stunning on my wedding day. The team was patient and professional.",
    name: "Priya S.",
    stars: 5,
  },
  {
    quote:
      "Best salon in Madurai for hair coloring. They matched the color perfectly to my skin tone. I'll never go anywhere else.",
    name: "Deepika R.",
    stars: 5,
  },
  {
    quote:
      "My hair spa treatment left my hair so soft and shiny. The consultation beforehand made all the difference.",
    name: "Meena K.",
    stars: 5,
  },
];

const gallery = [
  {
    id: "bridal",
    image: "/assets/generated/portfolio-bridal.dim_600x400.jpg",
    label: "Bridal Looks",
  },
  {
    id: "color",
    image: "/assets/generated/portfolio-haircolor.dim_600x400.jpg",
    label: "Hair Color",
  },
  {
    id: "haircut",
    image: "/assets/generated/portfolio-haircut.dim_600x400.jpg",
    label: "Haircuts",
  },
  {
    id: "skincare",
    image: "/assets/generated/portfolio-facial.dim_600x400.jpg",
    label: "Skincare",
  },
  {
    id: "spa",
    image: "/assets/generated/portfolio-hairspa.dim_600x400.jpg",
    label: "Hair Spa",
  },
  {
    id: "nails",
    image: "/assets/generated/portfolio-nails.dim_600x400.jpg",
    label: "Nail Art",
  },
];

const bridal_perks = [
  "Complimentary bridal trial session",
  "Customized to your outfit & wedding theme",
  "Long-wear products — no touch-ups needed",
  "Traditional, fusion, or modern bridal styles",
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Bridal", href: "#bridal" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Announcement bar */}
      <div
        className="py-2 px-4 text-center text-sm"
        style={{ backgroundColor: "#E7C6C2", color: "#4A4A4A" }}
      >
        <span className="flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          Now open in Anna Nagar, Madurai, Tamil Nadu — Walk-ins Welcome!
        </span>
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-50 transition-shadow duration-300"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: scrolled ? "0 2px 20px rgba(138,90,77,0.12)" : "none",
          borderBottom: scrolled ? "none" : "1px solid #E6D9CC",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg"
              style={{
                background: "linear-gradient(135deg, #C9A24E, #B8943E)",
              }}
            >
              A
            </div>
            <div>
              <div
                className="font-serif font-semibold leading-tight"
                style={{ color: "#1F1F1F", fontSize: "1rem" }}
              >
                Aura Glow
              </div>
              <div
                style={{
                  color: "#C9A24E",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                }}
              >
                SALON
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="text-sm font-medium transition-colors hover:text-[#C9A24E]"
                style={{ color: "#4A4A4A" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.book_online.button"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #C9A24E, #B8943E)",
              }}
            >
              Book Online
            </a>
            <button
              type="button"
              className="md:hidden p-2 rounded-md"
              style={{ color: "#4A4A4A" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.mobile_menu.toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t"
              style={{ borderColor: "#E6D9CC", backgroundColor: "#FFFFFF" }}
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium py-1"
                    style={{ color: "#4A4A4A" }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white"
                  style={{
                    background: "linear-gradient(135deg, #C9A24E, #B8943E)",
                  }}
                >
                  Book Online
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="overflow-hidden"
        style={{ backgroundColor: "#F6F0EA" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-0 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="py-16 md:py-24 pr-0 md:pr-12"
          >
            <p
              className="font-serif italic mb-3"
              style={{ color: "#B8943E", fontSize: "1.15rem" }}
            >
              Your Radiance, Perfected.
            </p>
            <h1
              className="font-serif font-bold leading-tight mb-5"
              style={{ color: "#1F1F1F", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Look Your Best.{" "}
              <span style={{ color: "#C9A24E" }}>Feel Like Yourself.</span>
            </h1>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#4A4A4A", maxWidth: "440px" }}
            >
              For women in Madurai who want professional beauty services that
              are affordable, personal, and worth every rupee.
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#5A5A5A", maxWidth: "440px" }}
            >
              At Aura Glow Salon, we believe every woman deserves to walk out
              feeling confident — not just done up. Our certified beauticians
              take the time to understand your hair, your skin, and your style.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#5A5A5A", maxWidth: "440px" }}
            >
              We've built a clean, welcoming space right here in Madurai where
              you can relax, trust the process, and leave looking exactly how
              you imagined. Affordable prices, no shortcuts on quality.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp.button"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium border-2 transition-all hover:shadow-md"
                style={{
                  color: "#B8943E",
                  borderColor: "#C9A24E",
                  backgroundColor: "#FDFAF5",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
              <a
                href={TEL_URL}
                data-ocid="hero.call.button"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium border-2 transition-all hover:shadow-md"
                style={{
                  color: "#B8943E",
                  borderColor: "#C9A24E",
                  backgroundColor: "#FDFAF5",
                }}
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[380px] md:h-[600px]"
          >
            <img
              src="/assets/generated/hero-salon.dim_800x600.jpg"
              alt="Aura Glow Salon interior"
              className="w-full h-full object-cover"
            />
            {/* floating badge */}
            <div
              className="absolute bottom-6 left-6 px-4 py-3 rounded-xl text-sm font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 20px rgba(138,90,77,0.15)",
                color: "#1F1F1F",
              }}
            >
              <div className="flex items-center gap-1 mb-0.5">
                {STARS.map((s) => (
                  <Star
                    key={s}
                    className="w-3.5 h-3.5 fill-[#C9A24E] text-[#C9A24E]"
                  />
                ))}
              </div>
              <div className="font-semibold">Madurai's Trusted Salon</div>
              <div className="text-xs" style={{ color: "#6A6A6A" }}>
                Certified Beauticians
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{ backgroundColor: "#FFFFFF" }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p
              className="font-serif italic mb-2 text-lg"
              style={{ color: "#B8943E" }}
            >
              What We Offer
            </p>
            <h2
              className="font-serif font-bold"
              style={{
                color: "#1F1F1F",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              }}
            >
              Our Exquisite Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                data-ocid={`services.item.${index + 1}`}
                className="group bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "#E6D9CC",
                  boxShadow: "0 2px 16px rgba(138,90,77,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 32px rgba(138,90,77,0.16)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 16px rgba(138,90,77,0.07)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FDF6EC" }}
                >
                  <service.icon
                    className="w-5 h-5"
                    style={{ color: "#C9A24E" }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="font-serif font-bold text-lg mb-2"
                  style={{ color: "#1F1F1F" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: "#6A6A6A" }}
                >
                  {service.tagline}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs"
                      style={{ color: "#5A5A5A" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "#C9A24E" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`services.book.button.${index + 1}`}
                  className="text-xs font-semibold transition-colors hover:underline"
                  style={{ color: "#C9A24E" }}
                >
                  Book This Service →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Feature Band */}
      <section
        id="bridal"
        className="py-20"
        style={{ backgroundColor: "#E6C3C3" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/assets/generated/bridal-feature.dim_600x700.jpg"
                alt="Beautiful Indian bride at Aura Glow Salon"
                className="w-full rounded-2xl object-cover"
                style={{
                  maxHeight: "520px",
                  boxShadow: "0 12px 48px rgba(138,90,77,0.2)",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p
                className="font-serif italic text-lg mb-3"
                style={{ color: "#8A5A4D" }}
              >
                Bridal Perfection
              </p>
              <h2
                className="font-serif font-bold leading-tight mb-5"
                style={{
                  color: "#1F1F1F",
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                }}
              >
                Madurai's Premier{" "}
                <span style={{ color: "#8A5A4D" }}>Bridal Experience</span>
              </h2>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#4A4A4A" }}
              >
                Your wedding day is your most important moment. We make sure
                your makeup lasts all day, photographs beautifully, and still
                looks like <em>you</em> — radiant, confident, and unforgettable.
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#4A4A4A" }}
              >
                We offer traditional, fusion, and modern bridal styles with a
                trial session before the big day. From the morning ceremony to
                the late evening reception, your look holds — guaranteed.
              </p>
              <ul className="space-y-2 mb-8">
                {bridal_perks.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#8A5A4D" }}
                    >
                      <Star className="w-2.5 h-2.5 text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="bridal.book_trial.button"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #8A5A4D, #6B4037)",
                }}
              >
                <Sparkles className="w-4 h-4" />
                Book Your Bridal Trial
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="about"
        className="py-20"
        style={{ backgroundColor: "#F6F0EA" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p
              className="font-serif italic mb-2 text-lg"
              style={{ color: "#B8943E" }}
            >
              Our Happy Clients
            </p>
            <h2
              className="font-serif font-bold"
              style={{
                color: "#1F1F1F",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              }}
            >
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-ocid={`testimonials.item.${index + 1}`}
                className="bg-white rounded-2xl p-7 border"
                style={{
                  borderColor: "#E6D9CC",
                  boxShadow: "0 2px 16px rgba(138,90,77,0.07)",
                }}
              >
                <div className="flex gap-0.5 mb-4">
                  {STARS.slice(0, t.stars).map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-[#C9A24E] text-[#C9A24E]"
                    />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-5 italic"
                  style={{ color: "#4A4A4A" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #C9A24E, #B8943E)",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#1F1F1F" }}
                  >
                    {t.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p
              className="font-serif italic mb-2 text-lg"
              style={{ color: "#B8943E" }}
            >
              Our Portfolio
            </p>
            <h2
              className="font-serif font-bold"
              style={{
                color: "#1F1F1F",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              }}
            >
              Our Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                data-ocid={`gallery.item.${index + 1}`}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(31,31,31,0.55) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="text-white text-xs font-semibold"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
                  >
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20"
        style={{ backgroundColor: "#F6F0EA" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-serif italic text-lg mb-3"
              style={{ color: "#B8943E" }}
            >
              Ready for your glow-up?
            </p>
            <h2
              className="font-serif font-bold mb-5"
              style={{
                color: "#1F1F1F",
                fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
              }}
            >
              Madurai's Go-To Salon for Women Who Take Their Look Seriously
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#4A4A4A" }}
            >
              Appointments fill up fast — especially on weekends and before
              special occasions. Don't wait until the last minute. Book your
              slot today and let's make it happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="cta.whatsapp.button"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #C9A24E, #B8943E)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
              <a
                href={TEL_URL}
                data-ocid="cta.call.button"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold border-2 transition-all hover:shadow-md"
                style={{
                  color: "#B8943E",
                  borderColor: "#C9A24E",
                  backgroundColor: "transparent",
                }}
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
            <div
              className="flex items-center justify-center gap-2 text-sm"
              style={{ color: "#6A6A6A" }}
            >
              <MapPin className="w-4 h-4" style={{ color: "#C9A24E" }} />
              Anna Nagar, Madurai, Tamil Nadu
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#8A5A4D" }} className="pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-lg"
                  style={{
                    background: "rgba(201,162,78,0.3)",
                    color: "#F6D98A",
                  }}
                >
                  A
                </div>
                <div>
                  <div className="font-serif font-semibold text-white leading-tight">
                    Aura Glow
                  </div>
                  <div
                    style={{
                      color: "#F6D98A",
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                    }}
                  >
                    SALON
                  </div>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Premium beauty services for women in Madurai. Certified
                beauticians, hygienic environment, personalized care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.72)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif font-semibold text-white mb-4">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.name}>
                    <a
                      href="#services"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.72)" }}
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-semibold text-white mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#F6D98A" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    Anna Nagar, Madurai,
                    <br />
                    Tamil Nadu
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#F6D98A" }}
                  />
                  <a
                    href={TEL_URL}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#F6D98A" }}
                  />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div
            className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <p>
              © {new Date().getFullYear()} Aura Glow Salon. All rights reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.whatsapp.button"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={scrollToTop}
            data-ocid="nav.back_to_top.button"
            aria-label="Back to top"
            className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #C9A24E, #B8943E)",
              boxShadow: "0 4px 16px rgba(201,162,78,0.4)",
            }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
