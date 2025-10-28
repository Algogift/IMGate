"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function Header() {
  const params = useParams();
  const pathname = usePathname();
  const locale = params?.locale || "en";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRtl = locale === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: `/${locale}/projects`, label: isRtl ? 'المشاريع' : 'Projects' },
    { href: `/${locale}/developers`, label: isRtl ? 'المطورون' : 'Developers' },
    { href: `/${locale}/favorites`, label: isRtl ? 'المفضلة' : 'Favorites' },
    { href: `/${locale}/ai-concierge`, label: isRtl ? 'الذكاء الاصطناعي' : 'AI' },
    { href: `/${locale}/contact`, label: isRtl ? 'تواصل معنا' : 'Contact' },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    window.location.href = newPath;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-gold/20 shadow-2xl shadow-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}>
          
          {/* Logo with Enhanced Animation */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="group flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-gold/30 transition-all duration-300">
                  <span className="text-black font-bold text-lg">IG</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
              <span className={`${scrolled ? 'text-lg hidden md:block' : 'text-xl block'} font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:via-amber-300 group-hover:to-yellow-400 transition-all duration-300`}>
                Imperium Gate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation with Enhanced Styling */}
          <div className={`hidden lg:flex gap-8 ${isRtl ? 'flex-row-reverse font-amiri' : 'font-inter'}`}>
            <div className="flex gap-6">
              {navItems.map((item, index) => (
                <div key={item.href}>
                  <Link 
                    href={item.href as any}
                    className={`relative group px-3 py-2 font-semibold transition-all duration-300 ${
                      pathname === item.href 
                        ? 'text-gold' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 ${
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Language Toggle and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle Button with Gold Styling */}
            <div>
              <LuxuryButton
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="text-gold border-gold/50 hover:bg-gold/10 hover:border-gold transition-all duration-300"
              >
                {locale === 'ar' ? 'EN' : 'عربي'}
              </LuxuryButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gold/20">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <nav className={`space-y-4 ${isRtl ? 'text-right font-amiri' : 'text-left font-inter'}`}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                         href={item.href as any}
                         className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                           pathname === item.href
                             ? 'text-gold bg-gold/10 border border-gold/30'
                             : 'text-white/90 hover:text-white hover:bg-white/5'
                         }`}
                         onClick={() => setMobileMenuOpen(false)}
                       >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}