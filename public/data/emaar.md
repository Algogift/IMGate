view-source:https://properties.emaar.com/en/latest-launches/



{
  "website_identity": {
    "name": "Emaar Properties",
    "description": "Global Property Developer",
    "url": "https://properties.emaar.com/en/"
  },
  "page_analysis": {
    "title": "Latest Property Launches | Real Estate Projects in UAE | Emaar Properties",
    "meta_description": "Discover Emaar Properties' latest real estate projects and developments in UAE, featuring exclusive villas, townhouses, and apartments in prime locations. Explore our new launches today.",
    "language": "en-US",
    "canonical_url": "https://properties.emaar.com/en/latest-launches/"
  },
  "code_structure": {
    "platform": "WordPress",
    "identified_plugins": [
      {
        "name": "WP Rocket",
        "purpose": "Caching and performance optimization (JS delay, minification, preloading)."
      },
      {
        "name": "Yoast SEO",
        "purpose": "Search Engine Optimization (meta tags, structured data, sitemaps)."
      },
      {
        "name": "Gravity Forms (gform)",
        "purpose": "Advanced form creation for lead generation (registration and newsletter)."
      },
      {
        "name": "WPML (Sitepress Multilingual CMS)",
        "purpose": "Manages website translation and multilingual content."
      },
      {
        "name": "Instagram Feed",
        "purpose": "Embedding Instagram content."
      }
    ],
    "theme_framework": "WP Bootstrap Starter",
    "key_scripts_functionality": [
      {
        "name": "RocketLazyLoadScripts",
        "purpose": "Delays the loading of non-critical JavaScript until user interaction (e.g., scroll, click) to significantly improve initial page load speed and performance scores."
      },
      {
        "name": "Google Tag Manager (GTM)",
        "purpose": "A tag management system to deploy marketing and analytics tags. It is configured to load upon user interaction to reduce initial load impact."
      },
      {
        "name": "Amplitude Analytics",
        "purpose": "Product analytics platform for tracking user behavior and events like 'view_page' and 'submit_lead'."
      },
      {
        "name": "gform (Gravity Forms)",
        "purpose": "Handles form display, conditional logic, validation, and AJAX-based submissions for lead capture forms."
      }
    ]
  },
  "hierarchical_structure": {
    "header": {
      "description": "A sticky header containing the main site navigation, branding, and key user actions.",
      "components": [
        {
          "name": "Branding",
          "details": "Emaar logo, linking to the homepage."
        },
        {
          "name": "Main Navigation",
          "items": [
            "About Us",
            "Latest Emaar Projects",
            "Communities",
            "Sustainability"
          ]
        },
        {
          "name": "Mega Menu (Communities)",
          "details": "An extensive dropdown menu showcasing featured real estate communities with images, taglines, and property types available (e.g., 'Dubai Hills Estate', 'The Oasis')."
        },
        {
          "name": "Utility Navigation",
          "items": [
            "Language Switcher (ENG, العربية, Русский)",
            "Instant Video Call (CTA)",
            "WhatsApp Chat (CTA)",
            "Get in Touch (CTA opening a registration modal)"
          ]
        },
        {
          "name": "Mobile Navigation",
          "details": "A separate, collapsible menu structure for mobile devices."
        }
      ]
    },
    "main_content": {
      "description": "The primary content area focuses on showcasing Emaar's latest projects and communities.",
      "sections": [
        {
          "name": "Introduction",
          "details": "A section with a title 'Latest Emaar Projects' and descriptive text to set the context for the user."
        },
        {
          "name": "Project Filtering",
          "details": "A tab-based filter system allowing users to switch between two main views.",
          "filters": [
            "Emaar Communities",
            "Now Available"
          ]
        },
        {
          "name": "Project Listings",
          "details": "A list of projects, categorized by the filters. Each listing has a consistent structure.",
          "listing_structure": {
            "image": "A large promotional image of the project.",
            "details": {
              "title": "Name of the community or project (e.g., 'Grand Polo Club & Resort').",
              "description": "A short, persuasive paragraph about the project.",
              "call_to_action_buttons": [
                "Register for New Launches / Register Interest (opens lead capture modal)",
                "Learn More (links to the project's dedicated page)"
              ]
            },
            "availability_badge": "For 'Now Available' items, a badge shows the number of available units."
          }
        }
      ]
    },
    "modals": {
      "description": "Pop-up windows for specific user interactions.",
      "items": [
        {
          "name": "Register Your Interest Modal",
          "trigger": "Clicking on 'Get in Touch' or 'Register Interest' buttons.",
          "purpose": "Primary lead generation tool.",
          "form_fields": [
            "Full Name",
            "Email Address",
            "Phone Number (with international country code selector)",
            "Preferred Size (for certain properties)",
            "No. of Bedrooms",
            "I AM AN (Agent/Investor checkbox)",
            "Passport Number",
            "Passport Scan Copy (file upload)",
            "Hidden fields for tracking marketing parameters (UTM source, campaign, etc.)"
          ]
        },
        {
          "name": "IE Browser Warning Modal",
          "purpose": "Warns users on outdated Internet Explorer browsers about potential compatibility issues."
        }
      ]
    },
    "footer": {
      "description": "A comprehensive footer acting as a detailed sitemap and trust-building section.",
      "sections": [
        {
          "name": "Branding and Social Media",
          "details": "Emaar logo and links to Facebook, X (Twitter), YouTube, Instagram, and LinkedIn."
        },
        {
          "name": "Newsletter Subscription",
          "details": "A simple email capture form for newsletter sign-ups."
        },
        {
          "name": "Sitemap Links",
          "details": "Extensive navigation links organized into columns, showcasing the breadth of Emaar's business.",
          "columns": [
            "About EMAAR",
            "Communities",
            "Latest Launches",
            "Emaar International",
            "Emaar Entertainment",
            "Emaar Malls",
            "Emaar Hospitality",
            "Emaar Leisure Group"
          ]
        },
        {
          "name": "Trending Searches",
          "details": "A list of SEO-optimized links targeting common user search queries like 'Properties for Sale in Dubai Creek Harbour' and 'Villa for Sale in Dubai'."
        },
        {
          "name": "Legal and Utility",
          "details": "Links to Privacy Policy, Terms & Conditions, Sitemap, and other legal pages."
        }
      ]
    }
  },
  "translations_and_internationalization": {
    "supported_languages": [
      {
        "code": "en",
        "name": "English"
      },
      {
        "code": "ar",
        "name": "Arabic"
      },
      {
        "code": "ru",
        "name": "Russian"
      }
    ],
    "implementation": "Using the WPML plugin, with a language switcher in the header and `hreflang` tags in the HTML `<head>` for SEO.",
    "international_presence": {
      "description": "The footer includes links to dedicated Emaar websites for different countries, indicating a global presence.",
      "countries": [
        "KSA (Saudi Arabia)",
        "India",
        "Pakistan",
        "Egypt",
        "Morocco",
        "Turkey"
      ]
    }
  },
  "marketing_and_technical_strategies": {
    "seo": {
      "strategy": "A robust SEO strategy is in place, managed by the Yoast SEO plugin.",
      "techniques": [
        "Optimized title tags and meta descriptions.",
        "Usage of structured data (Schema.org JSON-LD) for rich snippets.",
        "Canonical URLs to prevent duplicate content issues.",
        "Multilingual SEO with `hreflang` tags.",
        "Internal linking strategy, especially via the 'Trending Searches' section in the footer.",
        "Clean, user-friendly URL structures."
      ]
    },
    "performance_optimization": {
      "strategy": "Aggressive performance optimization using the WP Rocket plugin to ensure a fast user experience.",
      "techniques": [
        "Delayed JavaScript execution until user interaction.",
        "Preconnecting to third-party domains (ad networks, analytics, CDNs) to speed up DNS lookups.",
        "Preloading critical assets like fonts.",
        "Minification of CSS files.",
        "Lazy loading of images (loading them only as they enter the viewport)."
      ]
    },
    "lead_generation": {
      "strategy": "Multiple, prominent calls-to-action are strategically placed to capture user interest and generate leads.",
      "methods": [
        "Sticky 'Get in Touch' button in the header.",
        "'Register Interest' buttons on every project listing.",
        "A detailed lead capture form in a modal, designed to qualify high-intent buyers (requesting passport info).",
        "Alternative contact methods like 'Instant Video Call' and 'WhatsApp' to cater to different user preferences.",
        "Newsletter signup form in the footer for long-term marketing."
      ]
    },
    "analytics_and_tracking": {
      "strategy": "Comprehensive tracking of user behavior and marketing campaign effectiveness.",
      "platforms_and_pixels": [
        "Google Tag Manager (GTM)",
        "Amplitude (Product Analytics)",
        "Google Analytics",
        "Microsoft Clarity (Session Replay)",
        "Hotjar (Heatmaps & Feedback)",
        "Facebook Pixel",
        "Snapchat Pixel",
        "TikTok Pixel",
        "Twitter Pixel",
        "LinkedIn Insight Tag",
        "Bing Ads (UET)",
        "Taboola (Content Discovery)",
        "Adnxs, Hybrid.ai, Yads.tech (Ad Networks)"
      ],
      "data_capture": "JavaScript code is present to automatically capture and process UTM parameters from URLs, allowing for precise tracking of marketing campaign performance."
    }
  }
}
النص الذي قدمته هو عبارة عن جزء من كود HTML وصفحة ويب. بناءً على طلبك، سأقوم بشرح الهيكل الذي يبنيه الكود، واستخراج المبنى الهرمي بالكامل، وشرح جميع الأقسام، الترجمات، وأساليب التسويق.

---

### شرح البنية الشاملة والهدف من الكود

الكود المعطى هو عبارة عن كود HTML يمثل صفحة ويب مخصصة لـ "أحدث مشاريع إعمار" (Latest Emaar Projects). الهدف الأساسي لهذه الصفحة هو عرض أحدث المشاريع العقارية لشركة إعمار، وجمع بيانات العملاء المهتمين (Lead Generation) من خلال نماذج تسجيل الاهتمام، بالإضافة إلى توفير معلومات مفصلة عن المجتمعات والمشاريع.

تتميز الصفحة بالتركيز على:
1.  **الأداء العالي:** من خلال استخدام تقنيات تسريع تحميل الصفحة وتأجيل تحميل السكريبتات.
2.  **تجربة المستخدم (UX):** بتوفير تنقل سهل، خيارات تصفية للمشاريع، وطرق اتصال متعددة.
3.  **التسويق وجمع البيانات (Marketing & Lead Generation):** باستخدام أدوات تحليل البيانات وتتبع سلوك المستخدم، ونماذج تسجيل اهتمام مفصلة.
4.  **الدعم متعدد اللغات:** لتلبية احتياجات جمهور عالمي.
5.  **تحسين محركات البحث (SEO):** لضمان ظهور الصفحة في نتائج البحث.

---

### المبنى الهرمي الكامل للصفحة

إليك المبنى الهرمي للصفحة، مقسمًا إلى أقسام رئيسية وعناصر فرعية:

*   **`<!DOCTYPE html>` و `<html lang="en-US">`:** تعريف نوع المستند واللغة الإنجليزية الأمريكية.
*   **`<head>` (رأس الصفحة - المعلومات الوصفية والسكريبتات الأولية):**
    *   **سكريبتات الأداء والتأخير (WP Rocket):** `phantom.js` و `RocketLazyLoadScripts` لتأجيل تحميل الـ JS وتحسين الأداء.
    *   **Meta Tags:**
        *   `charset="UTF-8"`: ترميز الأحرف.
        *   `viewport`: استجابة التصميم لأحجام الشاشات المختلفة.
        *   `X-UA-Compatible`: التوافق مع متصفحات IE.
        *   `robots`: تعليمات لمحركات البحث (index, follow).
        *   `google-site-verification`, `yandex-verification`: للتحقق من ملكية الموقع لمحركات البحث.
        *   `description`: وصف موجز للصفحة.
        *   `og:title`, `og:description`, `og:url`, `og:image`: لوسوم Open Graph لتحسين مشاركة الصفحة على وسائل التواصل الاجتماعي.
        *   `twitter:card`, `twitter:site`, `twitter:label1`, `twitter:data1`: لوسوم تويتر كارد.
        *   `canonical`: تحديد الرابط الأساسي للصفحة.
        *   `hreflang`: تحديد الروابط البديلة للغات مختلفة (الإنجليزية، العربية، الروسية).
    *   **`title`:** عنوان الصفحة الظاهر في المتصفح.
    *   **`<link>` عناصر:**
        *   `profile`, `icon`: أيقونة الموقع (favicon).
        *   `preconnect`, `preload`: لتحسين سرعة تحميل الموارد الخارجية (خطوط، صور، سكريبتات من نطاقات أخرى).
        *   `stylesheet`: ملفات CSS للتصميم (مثل Bootstrap، ستايلات Emaar، Gravity Forms).
    *   **`<script>` عناصر:**
        *   سكريبتات أساسية للموقع (jQuery، Gravity Forms، Calendly).
        *   سكريبتات تتبع وتحليل (Google Tag Manager, Amplitude).
        *   سكريبتات مساعدة مثل `afterDocReady` لتنفيذ وظائف بعد تحميل DOM.
    *   **`<style>` كتل:** لتحديد بعض الأنماط المضمنة (مثل أنماط الـ emoji، والمتغيرات CSS العامة، أنماط Gutenberg).
    *   **Yoast SEO Schema Graph:** بيانات منظمة بتنسيق JSON-LD لمساعدة محركات البحث على فهم محتوى الصفحة بشكل أفضل.

*   **`<body>` (جسم الصفحة - المحتوى المرئي):**
    *   **`noscript` Google Tag Manager:** بديل لـ GTM في حال تعطيل JavaScript.
    *   **`div#IEBrowserWarningModal`:** نافذة منبثقة (Modal) لتحذير مستخدمي متصفح Internet Explorer القديم.
    *   **`div#page` (العنصر الرئيسي للصفحة):**
        *   **`div#registerModal` (نافذة تسجيل الاهتمام المنبثقة):**
            *   زر إغلاق.
            *   نموذج `gform_wrapper` (Gravity Forms) لجمع بيانات العميل:
                *   حقول مثل: الاسم الكامل، البريد الإلكتروني، رقم الهاتف (مع اختيار رمز الدولة)، الحجم المفضل، عدد غرف النوم، هل هو وكيل/مستثمر، رقم جواز السفر، نسخة ضوئية من جواز السفر.
                *   حقول مخفية لتتبع مصدر العميل (Lead Submitted Page).
                *   خيار لتلقي التحديثات والأخبار.
                *   رابط لسياسة الخصوصية.
                *   سكريبتات لمعالجة النموذج (تعبئة UTMs، تتبع Amplitude، CAPTCHA).
        *   **`div.booking-overlay` / `booking-overlay-new`:** طبقات (overlays) تظهر عند تحميل أو إرسال النماذج.
        *   **`<header id="masthead">` (رأس الموقع):**
            *   **Hamburger Menu:** للقائمة المتنقلة.
            *   **`div.navbar-brand`:** شعار Emaar (بصيغة SVG) يؤدي إلى الصفحة الرئيسية.
            *   **`div#main-nav`:** قائمة التنقل الرئيسية لسطح المكتب:
                *   "About Us", "Latest Emaar Projects", "Communities", "Sustainability".
            *   **`div.nav-band-right`:** عناصر إضافية في رأس الصفحة:
                *   **Language Switcher:** قائمة منسدلة لتغيير اللغة (ENG, العربية, Русский).
                *   **Wishlist Tab:** أيقونة قائمة الأمنيات (تظهر فقط عند وجود عناصر فيها).
                *   **Phone Tab:** زر "Instant Video Call" (مكالمة فيديو فورية).
                *   **WhatsApp Tab:** زر للاتصال عبر واتساب.
                *   **Register Tab:** زر "Get in Touch" لفتح نافذة تسجيل الاهتمام المنبثقة.
            *   **`div#communities_menu` (قائمة المجتمعات الكبيرة - Mega Menu):**
                *   مشاريع المجتمعات المميزة (Featured Communities) مع صور وعناوين ووصف موجز.
        *   **`div#mobile_nav` (قائمة التنقل للأجهزة المحمولة):**
            *   قائمة رئيسية مماثلة لقائمة سطح المكتب مع خيارات اللغة والاتصال.
        *   **`<div id="content">` (المحتوى الرئيسي للصفحة):**
            *   **`div.all-launches-description`:**
                *   عنوان رئيسي `<h1>Latest Emaar Projects</h1>`.
                *   نصوص وصفية عن أحدث مشاريع إعمار وأهدافها.
            *   **`div.all-launches-listing` (قائمة المشاريع):**
                *   **`div.launches-filter`:** مرشحات (فلاتر) للمشاريع:
                    *   `Emaar Communities` (المجتمعات الحالية).
                    *   `Now Available` (المتاحة الآن).
                *   **`div.all-launches` (قوائم المشاريع الفعلية):**
                    *   كل مشروع/مجتمع يعرض في `div.all-launches-row`.
                    *   **`div.launches-image`:**
                        *   صورة المشروع (`<img>` مع lazyload).
                        *   لـ "Now Available": شارة `launches-availibility` تعرض عدد الوحدات المتاحة.
                    *   **`div.launches-details`:**
                        *   عنوان المشروع `<h2>`.
                        *   وصف موجز للمشروع `<p>`.
                        *   **`div.btn-group`:** أزرار CTA:
                            *   "Register for New Launches" أو "Register Interest" (لفتح نموذج تسجيل الاهتمام).
                            *   "Learn More" (للانتقال إلى صفحة المشروع التفصيلية).
        *   **`<footer>` (تذييل الموقع):**
            *   **`div.newsletter-subscribe`:**
                *   شعار Emaar.
                *   أيقونات وسائل التواصل الاجتماعي (Facebook, X, YouTube, Instagram, LinkedIn).
                *   نموذج اشتراك في النشرة الإخبارية (Gravity Forms) بالبريد الإلكتروني فقط.
            *   **`div#footer-widget`:** أقسام روابط متعددة (كخريطة موقع مصغرة):
                *   `About EMAAR`: من نحن، اتصل بنا، أسئلة متكررة، وظائف، علاقات المستثمرين، إلخ.
                *   `Communities`: روابط لمجتمعات إعمار الرئيسية.
                *   `Latest Launches`: روابط لأحدث المشاريع.
                *   `Emaar International`: روابط لمواقع إعمار الدولية (السعودية، الهند، باكستان، مصر، المغرب، تركيا).
                *   `Emaar Entertainment`: برج خليفة، ريل سينما، دبي أوبرا، كيدزانيا، إلخ.
                *   `Emaar Malls`: دبي مول، دبي مارينا مول، إلخ.
                *   `Emaar Hospitality`: فنادق ومنتجعات (Address, Vida, Armani, Rove).
                *   `Emaar Leisure Group`: أندية الغولف، نادي دبي بولو، إلخ.
                *   `Trending Searches`: روابط لتحسين SEO للبحث عن العقارات (شقق، فلل، مشاريع قيد الإنشاء).
            *   **`div.footer-bottom`:** روابط قانونية وسياسات:
                *   "Privacy Policy", "Emaar Asset Usage Policy", "Terms & Conditions", "Sitemap".

---

### شرح جميع الأقسام، الترجمات، أساليب التسويق، وكل شيء:

**1. هوية الموقع والصفحة:**
*   **"Emaar Properties"**: الاسم التجاري للموقع.
*   **"Global Property Developer"**: الوصف العام للشركة.
*   **"Latest Property Launches | Real Estate Projects in UAE | Emaar Properties"**: عنوان الصفحة المحدد بدقة لـ SEO.
*   **الوصف (Meta Description)**: يلخص محتوى الصفحة لجذب المستخدمين من نتائج البحث.
*   **اللغة**: `en-US` تشير إلى الإنجليزية الأمريكية، لكن الموقع يدعم العربية والروسية أيضاً.

**2. البنية التحتية والتقنيات (Code Structure):**
*   **WordPress**: يُعد الموقع مبنيًا على نظام إدارة المحتوى (CMS) الشهير ووردبريس، مما يوفر مرونة في إدارة المحتوى والوظائف.
*   **قوالب وتصاميم (Themes)**: يستخدم `wp-bootstrap-starter` كثيم أساسي و `emaar` كثيم فرعي (child theme)، مما يسمح بالتخصيص مع الحفاظ على التحديثات الأساسية. Bootstrap يشير إلى تصميم متجاوب ومستجيب.
*   **إضافات (Plugins) رئيسية:**
    *   **WP Rocket**: إضافة لتحسين الأداء بشكل جذري. تقوم بتأجيل تحميل سكريبتات JavaScript (مثل سكريبتات التتبع والتسويق) حتى يتفاعل المستخدم مع الصفحة، مما يقلل من وقت التحميل الأولي بشكل كبير. كما تقوم بتصغير (minify) ملفات CSS و JS، وتحميل الصور بتقنية Lazy-Load.
    *   **Yoast SEO**: إضافة أساسية لتحسين محركات البحث، تدير العناوين، الأوصاف، الكلمات المفتاحية، وتوليد بيانات Schema المنظمة.
    *   **Gravity Forms**: إضافة قوية لإنشاء النماذج، تُستخدم هنا لإنشاء نماذج "تسجيل الاهتمام" و"الاشتراك في النشرة الإخبارية" بمرونة وخيارات متقدمة (مثل المنطق الشرطي، وتحميل الملفات).
    *   **WPML (Sitepress Multilingual CMS)**: إضافة لإدارة المحتوى متعدد اللغات، مما يتيح للزوار التبديل بين اللغات بسهولة.
    *   **Instagram Feed**: لإظهار محتوى إنستغرام مباشرة على الموقع.
*   **السكريبتات الأساسية (Core Scripts):**
    *   **`RocketLazyLoadScripts`**: هذا السكريبت المخصص من WP Rocket هو جوهر تحسين الأداء. يقوم بتأجيل تنفيذ معظم سكريبتات الطرف الثالث (مثل GTM، Amplitude، إلخ) حتى يقوم المستخدم بأول تفاعل (تمرير، نقر، تحريك الماوس)، مما يضمن أن المحتوى المرئي للصفحة يحمل بسرعة فائقة.
    *   **Google Tag Manager (GTM)**: نظام إدارة الوسوم من جوجل. يتم تحميله بشكل مؤجل (على تفاعل المستخدم) لدمج جميع أدوات التتبع والتسويق الأخرى (مثل Google Analytics، Facebook Pixel، إلخ) بطريقة منظمة وفعالة دون التأثير على سرعة تحميل الصفحة الأولية.
    *   **Amplitude**: منصة لتحليل سلوك المستخدم. تتبع أحداثًا مثل `view_page` (زيارة الصفحة) و `submit_lead` (إرسال النموذج) مع تفاصيل مثل `page_name` و `custom_client_id` لتوفير رؤى عميقة حول كيفية تفاعل المستخدمين مع الموقع.
    *   **Calendly**: تستخدم لجدولة المكالمات الفيديو الفورية، وتُحمّل عند الحاجة.

**3. الهيكل الهرمي والتصميم (Hierarchical Structure & Design):**
*   **الرأس (Header):**
    *   **شعار إعمار:** مرئي بوضوح ومرتبط بالصفحة الرئيسية.
    *   **قائمة التنقل الرئيسية:** "About Us", "Latest Emaar Projects", "Communities", "Sustainability" توفر سهولة الوصول إلى الأقسام الرئيسية للموقع.
    *   **قائمة المجتمعات الكبيرة (Mega Menu for Communities):** تظهر عند التمرير فوق "Communities"، وتقدم نظرة عامة غنية بالصور والوصف للمجتمعات الرئيسية، مما يعزز الاستكشاف.
    *   **خيارات الاتصال السريع:** "Instant Video Call", "WhatsApp", "Get in Touch" لتقديم طرق متعددة ومباشرة للتواصل مع العملاء المحتملين.
    *   **مبدّل اللغات:** لخدمة جمهور عالمي.
    *   **رأس الصفحة ثابت (Sticky Header):** يظل مرئيًا أثناء التمرير، مما يسهل التنقل الدائم.
*   **المحتوى الرئيسي (Main Content):**
    *   **شرح موجز:** مقدمة نصية عن أحدث مشاريع إعمار، تصف الابتكار والجودة.
    *   **مرشحات المشاريع (Launches Filter):**
        *   **"Emaar Communities"**: لعرض المجتمعات السكنية الأكبر.
        *   **"Now Available"**: لعرض المشاريع المحددة المتاحة للشراء حاليًا، وغالبًا ما تحتوي على شارة تظهر عدد الوحدات المتاحة لخلق شعور بالإلحاح أو الشفافية.
    *   **قوائم المشاريع (Project Listings):**
        *   كل مشروع يُعرض بصورة جذابة، عنوان واضح، وصف موجز مقنع، وأزرار للدعوة إلى الإجراء:
            *   **"Register for New Launches / Register Interest"**: يؤدي إلى نموذج جمع العملاء المحتملين.
            *   **"Learn More"**: ينقل المستخدم إلى صفحة تفصيلية خاصة بالمشروع.
*   **النوافذ المنبثقة (Modals):**
    *   **"Register Your Interest Modal"**: نافذة منبثقة محورية لجمع بيانات العملاء. طلب معلومات مفصلة مثل الاسم الكامل، البريد الإلكتروني، رقم الهاتف (مع رمز الدولة)، الحجم المفضل، عدد غرف النوم، هل هو وكيل أو مستثمر، وحتى **رقم جواز السفر ونسخة ضوئية من الجواز**. طلب هذه المعلومات المتقدمة يشير إلى أن الشركة تستهدف عملاء جادين ذوي نية شراء عالية، أو قد يكون مطلوبًا لمتطلبات تنظيمية معينة لعمليات الحجز المبدئي.
    *   **"IE Browser Warning Modal"**: نافذة تحذير للمستخدمين الذين ما زالوا يستخدمون متصفحات إنترنت إكسبلورر القديمة، مما يدل على اهتمام بتجربة المستخدم عبر المتصفحات.
*   **التذييل (Footer):**
    *   **الاشتراك في النشرة الإخبارية:** لجمع رسائل البريد الإلكتروني للمتابعة التسويقية.
    *   **أيقونات وسائل التواصل الاجتماعي:** لتعزيز الوجود الرقمي والتفاعل مع الجمهور.
    *   **روابط خريطة الموقع الموسعة:** مقسمة إلى فئات (About EMAAR, Communities, Latest Launches, Emaar International, Emaar Entertainment, Emaar Malls, Emaar Hospitality, Emaar Leisure Group). هذا ليس فقط مفيدًا للمستخدمين للعثور على المعلومات، ولكنه أيضًا ذو قيمة كبيرة لـ SEO لأنه يوفر روابط داخلية قوية وهيكلًا واضحًا للموقع.
    *   **"Trending Searches" (البحث الشائع):** قسم مخصص لروابط SEO لكلمات مفتاحية شائعة (مثل "Properties for Sale in Dubai Creek Harbour", "Apartments for Sale in Dubai"), مما يساعد على جذب حركة المرور العضوية من محركات البحث لمصطلحات محددة.
    *   **الروابط القانونية:** سياسة الخصوصية، الشروط والأحكام، إلخ، للامتثال والشفافية.

**4. الترجمات والعولمة (Translations & Internationalization):**
*   **دعم اللغات:** الإنجليزية (`en-US`)، العربية (`ar`)، والروسية (`ru`). يتم تحديدها في وسم `html` و من خلال الـ `hreflang` tags في رأس الصفحة.
*   **مبدّل اللغات:** عنصر واجهة مستخدم واضح في الرأس والقائمة المتنقلة يسمح للمستخدمين بالتبديل بين اللغات.
*   **Emaar International:** قسم في التذييل يحتوي على روابط لمواقع إعمار الدولية (مثل السعودية، الهند، باكستان، مصر، المغرب، تركيا)، مما يؤكد استراتيجية إعمار العالمية وتكيفها مع الأسواق المحلية.

**5. أساليب التسويق والتقنيات المتقدمة:**
*   **تحسين محركات البحث (SEO):**
    *   **الكلمات المفتاحية المستهدفة:** "Latest Property Launches", "Real Estate Projects in UAE", "Emaar Properties" واضحة في العنوان والوصف.
    *   **البيانات المنظمة (Structured Data):** استخدام `application/ld+json` بواسطة Yoast SEO يمنح محركات البحث سياقًا غنيًا حول محتوى الصفحة.
    *   **روابط Hreflang:** ضرورية للمواقع متعددة اللغات لتوجيه المستخدمين ومحركات البحث إلى النسخة الصحيحة من الصفحة حسب اللغة والمنطقة.
    *   **الروابط الداخلية:** كثيفة في التذييل وقائمة المجتمعات الكبيرة، مما يساعد على توزيع قيمة الروابط داخل الموقع ويعزز اكتشاف المحتوى.
    *   **"Trending Searches"**: تكتيك SEO مباشر لاستهداف استعلامات البحث الشائعة وتحسين ظهور الموقع لها.
*   **تحسين الأداء (Performance Optimization):**
    *   **تأجيل تحميل الـ JS:** `RocketLazyLoadScripts` هو أهم عامل هنا. يقلل بشكل كبير من حظر العرض (render-blocking) ويحسن من مقاييس أداء الويب الأساسية (Core Web Vitals).
    *   **Preconnect و Preload:** تسريع الاتصالات وتحميل الموارد الحيوية مثل الخطوط والصور والسكريبتات من نطاقات خارجية قبل استخدامها فعليًا.
    *   **Minification و Lazy Load:** تصغير حجم ملفات CSS و JS وتقليل تحميل الصور حتى تصبح مرئية، مما يوفر عرض نطاق ترددي ويقلل من وقت تحميل الصفحة.
*   **جمع العملاء المحتملين (Lead Generation):**
    *   **دعوات إلى الإجراء (CTAs) المتعددة:** "Get in Touch", "Register for New Launches", "Register Interest", "Instant Video Call", "WhatsApp" كلها تهدف إلى تسهيل الاتصال وجمع العملاء المحتملين في نقاط مختلفة من رحلة المستخدم.
    *   **نماذج مفصلة:** نموذج تسجيل الاهتمام يجمع معلومات عميقة، مما يساعد إعمار على تأهيل العملاء المحتملين وتخصيص تجربة المبيعات.
    *   **نموذج النشرة الإخبارية:** لاستهداف المستخدمين الذين قد لا يكونون جاهزين للشراء الفوري ولكنهم يرغبون في البقاء على اطلاع.
*   **التحليلات والتتبع (Analytics & Tracking):**
    *   **Google Tag Manager (GTM):** كنقطة مركزية لتشغيل جميع علامات التتبع.
    *   **Amplitude:** لتتبع تفاعلات المستخدمين على مستوى عميق وربطها بالهوية الفريدة للعميل (`custom_client_id`).
    *   **تتبع UTMs:** يتم استخدام سكريبتات لجلب معلمات UTM من عنوان URL وتمريرها إلى أنظمة التحليلات، مما يسمح بتحليل دقيق لأداء الحملات التسويقية (أي حملة جلبت العميل).
    *   **العديد من بيكسلات التتبع:** Snapchat, TikTok, Hotjar, Facebook, LinkedIn, Bing, Twitter Pixels, Google Analytics، بالإضافة إلى بيكسلات من شبكات إعلانية مثل Taboola, Adnxs, Hybrid.ai, Yads.tech. هذا يشير إلى استراتيجية تسويق رقمي شاملة تتضمن تتبعًا مكثفًا لإعادة الاستهداف (retargeting) وقياس فعالية الإعلانات عبر منصات متعددة.

---

باختصار، هذا الكود يمثل صفحة ويب مصممة بعناية فائقة لشركة عقارية كبرى. إنها تجمع بين الأداء التقني العالي، وتجربة المستخدم السلسة، واستراتيجيات التسويق الرقمي المعقدة وجمع العملاء المحتملين، كل ذلك ضمن إطار عمل يدعم العولمة والتكيف مع مختلف المتصفحات واللغات.

بناءً على الكود والنص المقدم، يمكننا استخلاص تسلسل "Emaar Communities" والمشاريع المرتبطة بها وكيف تتشكل خريطتها في الموقع.

---

### تسلسل "Emaar Communities" والمشاريع المرتبطة بها

"Emaar Communities" (مجتمعات إعمار) هي عبارة عن تطويرات رئيسية واسعة النطاق (Master Developments) تضم عادةً عدة مشاريع فرعية (Projects) داخلها. الصفحة المعطاة تعرض كلاً من المجتمعات والمشاريع، ولكن بطرق مختلفة وفي سياقات مختلفة.

#### 1. المجتمعات (Emaar Communities) - المستوى الأعلى (الأب)

هذه هي التطويرات الكبرى التي تتميز بمفهوم عام وتقدم نمط حياة معين. كل مجتمع له صفحته الخاصة على الموقع.

**أمثلة من الكود (تحت فلتر "Emaar Communities" وفي قوائم التذييل وقائمة التنقل الكبيرة):**

*   **Grand Polo Club & Resort**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/grand-polo-club-and-resort/`
    *   **الوصف:** "Equestrian Opulence, Beyond Imagination"
    *   **أنواع العقارات:** "3, 4 & 5 bedroom villas"
*   **Dubai Hills Estate**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/dubai-hills-estate/`
    *   **الوصف:** "The Green Heart of Dubai"
    *   **أنواع العقارات:** "3 to 6 Bedroom Apartments, Villas & Townhouses"
*   **Dubai Creek Harbour**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/dubai-creek-harbour/`
    *   **الوصف:** "Views to Live for"
    *   **أنواع العقارات:** "Apartments and Villas"
*   **Emaar South**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/emaar-south/`
    *   **الوصف:** "Local Community With A Global Gateway"
    *   **أنواع العقارات:** "3 & 4 Bedroom Villas, Townhouses & Apartments"
*   **The Valley**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/the-valley/`
    *   **الوصف:** "Dreams begin here"
    *   **أنواع العقارات:** "3 & 4 Bedroom Villas & Townhouses"
*   **Emaar Beachfront**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/emaar-beachfront/`
    *   **الوصف:** "REDEFINING PRIVATE BEACH LIVING"
    *   **أنواع العقارات:** "1-5 Bedrooms Apartments & Villas"
*   **Address Al Marjan Island, Ras Al Khaimah**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/address-al-marjan-island-ras-al-khaimah/`
    *   **الوصف:** "New vision of luxury beachfront living"
    *   **أنواع العقارات:** "Apartments, Townhouses and Sea Front-Homes"
*   **Expo Living**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/expo-living/`
    *   **الوصف:** "A community designed for tomorrow"
    *   **أنواع العقارات:** "1,2 &3 bedroom apartments"
*   **THE OASIS**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/the-oasis/`
    *   **الوصف:** "Immerse in Pure Luxury"
    *   **أنواع العقارات:** "Villas and Mansions"
*   **Rashid Yachts & Marina**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/rashid-yachts-marina/`
    *   **الوصف:** "A Unique Heritage Sails Into The Future"
    *   **أنواع العقارات:** "1, 2 & 3 Bedroom Apartments"
*   **Downtown Dubai**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/downtown-dubai/`
    *   **الوصف:** "THE ULTIMATE ADDRESS"
    *   **أنواع العقارات:** "1 to 6 Bedroom Apartments"
*   **Dubai Marina**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/dubai-marina/`
    *   **الوصف:** "A pioneering waterfront project"
    *   **أنواع العقارات:** "1-3 bedrooms Apartments"
*   **Arabian Ranches**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/arabian-ranches/`
    *   **الوصف:** "Journey beyond the ordinary"
    *   **أنواع العقارات:** "3 & 4 Bedroom Villas & Townhouses"
*   **Arabian Ranches III**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/arabian-ranches-iii/`
    *   **الوصف:** "Find your happy place"
    *   **أنواع العقارات:** "3-4 bedrooms Villas & Townhouses"
*   **The Heights Country Club & Wellness**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/the-heights-country-club-wellness/`
    *   **الوصف:** "Where Life is Well-Lived"
    *   **أنواع العقارات:** "3 & 4 Bedroom Townhouses and 4 Bedroom Villas"
*   **Address Residences Zabeel**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/address-residence-zabeel/`
    *   **الوصف:** "Signature residences with panoramic views"
    *   **أنواع العقارات:** "Apartments"
*   **Emirates Living**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/emirates-living/`
    *   **الوصف:** "Comfort of Home, Spirit of Community"
    *   **أنواع العقارات:** "2 - 5 Bedrooms Villas"
*   **Reem**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/reem/`
    *   **الوصف:** "Playgrounds of Life, Paths of Peace"
    *   **أنواع العقارات:** "3-4 Bedroom Villas & Townhouses"
*   **The Greens & Views**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/our-communities/the-greens-and-views/`
    *   **الوصف:** "Spaces that breathe, Lives that flow"
    *   **أنواع العقارات:** "2-5 Bedroom Villas"

#### 2. المشاريع (Projects) - المستوى الأدنى (الفرعي)

هذه هي تطويرات محددة (مباني سكنية، مجمعات فلل، إلخ) تُطرح للبيع، وغالبًا ما تكون جزءًا من أحد "Emaar Communities" الأكبر. كل مشروع له صفحته الخاصة على الموقع.

**أمثلة من الكود (تحت فلتر "Now Available" وفي قائمة "Latest Launches" في التذييل):**

*   **Sera 2 at Rashid Yachts & Marina**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/properties/sera-2-at-rashid-yachts-and-marina/`
    *   **الوصف:** "Discover a luxurious resort-style escape designed for pure tranquillity."
    *   **الوحدات المتاحة:** 29 وحدة.
    *   **ينتمي إلى المجتمع:** Rashid Yachts & Marina.
*   **Rosehill at Dubai Hills Estate**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/`
    *   **الوصف:** "At Rosehill, life finds its rhythm in the interplay of light, foliage, and harmonious design."
    *   **الوحدات المتاحة:** 36 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Hills Estate.
*   **Silva – Dubai Creek Harbour**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/`
    *   **الوصف:** "Discover Silva, a canvas painted with nature’s finest hues and the city’s vibrant strokes."
    *   **الوحدات المتاحة:** 23 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.
*   **Altan** (at Dubai Creek Harbour)
    *   **الرابط المباشر:** `https://properties.emaar.com/en/properties/altan-at-dubai-creek-harbour/`
    *   **الوصف:** "Altan offers stunning creek, city, and golf course views, blending luxury with nature."
    *   **الوحدات المتاحة:** 14 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.
*   **Albero at Dubai Creek Harbour**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/`
    *   **الوصف:** "Albero offers breathtaking views of lush landscapes, sparkling creeks, and sweeping cityscapes, making it more than a place—it’s a way of life."
    *   **الوحدات المتاحة:** 14 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.
*   **Golf Meadow at Emaar South**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/properties/golf-meadow-at-emaar-south/`
    *   **الوصف:** "Golf Meadow isn’t just about breathtaking views—it’s about the feeling these homes inspire."
    *   **الوحدات المتاحة:** 7 وحدات.
    *   **ينتمي إلى المجتمع:** Emaar South.
*   **Golf Verge at Emaar South**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/properties/golf-verge-at-emaar-south/`
    *   **الوصف:** "A gateway to endless green vistas and infinite inspiration. Here, vast emerald fairways unfold before you, an ever-changing landscape that mirrors your aspirations."
    *   **الوحدات المتاحة:** 9 وحدات.
    *   **ينتمي إلى المجتمع:** Emaar South.
*   **Parkwood at Dubai Hills Estate**
    *   **الرابط المباشر:** `https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/`
    *   **الوصف:** "Parkwood offers elevated living with stunning Dubai skyline views, seamlessly blending nature and modern design."
    *   **الوحدات المتاحة:** 41 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Hills Estate.
*   **Golf Acres at Emaar South**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/golf-acres-at-emaar-south/`
    *   **الوصف:** "Golf Acres offers a curated lifestyle, where contemporary architecture and lush greenery, come together to create the perfect place that nurtures your well-being."
    *   **الوحدات المتاحة:** 2 وحدات.
    *   **ينتمي إلى المجتمع:** Emaar South.
*   **Golf Dale at Emaar South**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/golf-dale-at-emaar-south/`
    *   **الوصف:** "Embrace a life where the horizon stretches as far as your imagination."
    *   **الوحدات المتاحة:** 4 وحدات.
    *   **ينتمي إلى المجتمع:** Emaar South.
*   **Hillsedge at Dubai Hills Estate**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/hillsedge-at-dubai-hills-estate/`
    *   **الوصف:** "Imagine living in a home which surrounds the active epicentre of Dubai Hills Estate."
    *   **الوحدات المتاحة:** 40 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Hills Estate.
*   **Golf Hillside at Dubai Hills Estate**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/`
    *   **الوصف:** "Imagine waking up to the soft glow of sunlight streaming through your windows, with uninterrupted views of a lush golf course stretching beyond."
    *   **الوحدات المتاحة:** 12 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Hills Estate.
*   **Golf Point at Emaar South**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/golf-point-at-emaar-south/`
    *   **الوصف:** "Welcome to Golf Point, a charming midrise residential community in Emaar South, offering breathtaking views of the lush green hills of the Emaar South Golf Course."
    *   **الوحدات المتاحة:** 4 وحدات.
    *   **ينتمي إلى المجتمع:** Emaar South.
*   **Club Place at Dubai Hills Estate**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/`
    *   **الوصف:** "Find your sanctuary where luxury meets nature."
    *   **الوحدات المتاحة:** 11 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Hills Estate.
*   **Altus at Dubai Creek Harbour**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/`
    *   **الوصف:** "Immerse yourself in the elegance of ALTUS, where contemporary architecture blends seamlessly with natural beauty."
    *   **الوحدات المتاحة:** 3 وحدات.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.
*   **Ocean Cove at Rashid Yachts & Marina**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/ocean-cove-at-rashid-yachts-marina/`
    *   **الوصف:** "Immerse yourself in the serene beauty of Ocean Cove, where nature and city life come together to create a truly captivating atmosphere."
    *   **الوحدات المتاحة:** 1 وحدة.
    *   **ينتمي إلى المجتمع:** Rashid Yachts & Marina.
*   **MANGROVE AT DUBAI CREEK HARBOUR**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/`
    *   **الوصف:** "Mangrove is a collection of 1-, 2- and 3-bedroom apartments adjacent to a lush park, with unmatching views of the Creek."
    *   **الوحدات المتاحة:** 4 وحدات.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.
*   **Valo at Dubai Creek Harbour**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/valo-at-dubai-creek-harbour/`
    *   **الوصف:** "Imagine waking up to the sunrise over Dubai's iconic skyline, where modern design meets natural beauty."
    *   **الوحدات المتاحة:** 1 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.
*   **Address Residences Zabeel**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/address-residences-zabeel/`
    *   **الوصف:** "Step into Address Residences Zabeel, and embrace a life that is exceptional in every way."
    *   **الوحدات المتاحة:** 2 وحدات.
    *   **ينتمي إلى المجتمع:** Address Residences Zabeel (أيضًا مجتمع بنفس الاسم).
*   **Aeon at Dubai Creek Harbour**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/aeon/`
    *   **الوصف:** "Visualize the dawn breaking over Dubai's iconic skyline, with the raw essence of urban aesthetics merging seamlessly with the embrace of nature."
    *   **الوحدات المتاحة:** 3 وحدات.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.
*   **Address Residences Al Marjan Island**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/address-marjan/`
    *   **الوصف:** "Indulge in an idyllic lifestyle on an island surrounded by the majestic UAE skyline and the turquoise Arabian Sea."
    *   **الوحدات المتاحة:** 9 وحدات.
    *   **ينتمي إلى المجتمع:** Address Al Marjan Island, Ras Al Khaimah (مجتمع بنفس الاسم).
*   **Parkside Views Residence**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/parkside-views-residence/`
    *   **الوصف:** "Welcome to Parkside Views, a harmonious blend of well-being and opportunity; where verdant surroundings meet urban living, and a strong sense of community complements the"
    *   **الوحدات المتاحة:** 1 وحدة.
    *   **ينتمي إلى المجتمع:** (غير محدد بشكل مباشر، لكن يمكن استنتاج أنه في Dubai Hills Estate أو مجتمع به حدائق).
*   **Bayview by Address Resorts at Emaar Beachfront**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/bayview-by-address-resorts/`
    *   **الوصف:** "Ethereal waves adorn stylishly crafted façades reflecting the Arabian Gulf's rippling waters."
    *   **الوحدات المتاحة:** 3 وحدات.
    *   **ينتمي إلى المجتمع:** Emaar Beachfront.
*   **Cedar at Dubai Creek Harbour**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/cedar/`
    *   **الوصف:** "Those who enjoy a cosmopolitan lifestyle will appreciate the high-quality construction, cutting-edge architecture, and attractive, spacious interiors with superior finish"
    *   **الوحدات المتاحة:** 7 وحدات.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.
*   **Savanna at Dubai Creek Harbour**
    *   **الرابط المبرمجة:** `https://properties.emaar.com/en/properties/savanna/`
    *   **الوصف:** "Savanna is a collection of 1-, 2- and 3-bedroom apartments adjacent to a lush park."
    *   **الوحدات المتاحة:** 1 وحدة.
    *   **ينتمي إلى المجتمع:** Dubai Creek Harbour.

---

### خريطة المجتمعات والمشاريع في الموقع

يمكن تصور الخريطة الذهنية (Sitemap) أو هيكل الموقع على النحو التالي:

1.  **الصفحة الرئيسية (Homepage)**: نقطة الدخول الرئيسية.
    *   `https://properties.emaar.com/en/`

2.  **أقسام التنقل الرئيسية (Main Navigation)**:
    *   **عن إعمار (About Us)**: معلومات عن الشركة.
        *   `https://properties.emaar.com/en/about-emaar/`
    *   **أحدث مشاريع إعمار (Latest Emaar Projects)**: هذه الصفحة نفسها، التي تجمع بين المجتمعات والمشاريع.
        *   `https://properties.emaar.com/en/latest-launches/`
    *   **المجتمعات (Communities)**: قسم شامل يضم جميع المجتمعات.
        *   `https://properties.emaar.com/en/our-communities/`
        *   **الميجا منيو (Mega Menu) في الرأس:** تعرض المجتمعات المميزة (Featured Communities) مع روابط مباشرة لصفحات كل مجتمع.
    *   **الاستدامة (Sustainability)**: معلومات حول جهود إعمار في الاستدامة.
        *   `https://properties.emaar.com/en/emaar-sustainability/`

3.  **صفحات المجتمعات الفردية (Individual Community Pages)**:
    *   كل مجتمع كبير (مثل Dubai Hills Estate) له صفحته الخاصة التي تقدم تفاصيل أعمق عن المجتمع نفسه، ومرافقه، وموقعه، وقد تعرض المشاريع الفرعية داخل هذا المجتمع.
    *   **نموذج الرابط:** `https://properties.emaar.com/en/our-communities/[اسم-المجتمع]/`

4.  **صفحات المشاريع الفردية (Individual Project Pages)**:
    *   كل مشروع محدد (مثل Sera 2) له صفحته الخاصة التي تعرض تفاصيل محددة عن وحداته المتاحة، خطط الدفع، المخططات الأرضية، إلخ.
    *   **نموذج الرابط:** `https://properties.emaar.com/en/properties/[اسم-المشروع]/`

5.  **التذييل (Footer Navigation)**: يعمل كخريطة موقع مصغرة ومفصلة.
    *   **قسم "Communities"**: يعكس قائمة المجتمعات الرئيسية بشكل نصي.
    *   **قسم "Latest Launches"**: يعرض قائمة مباشرة بالمشاريع المتاحة حديثًا، مما يكمل ما هو معروض في المحتوى الرئيسي للصفحة الحالية.
    *   **قسم "Trending Searches"**: روابط مباشرة لصفحات نتائج البحث الخاصة بأنواع العقارات أو المواقع الشائعة.
        *   `https://properties.emaar.com/en/property-for-sale/dubai-creek-harbour/` (مثال لصفحة نتائج بحث خاصة بمجتمع)
        *   `https://properties.emaar.com/en/apartments-for-sale-in-dubai/` (مثال لصفحة نتائج بحث خاصة بنوع عقار)

**كيف تتشكل الخريطة في الموقع (التدفق):**

*   **من الأعلى للأسفل (From Broad to Specific):** يمكن للمستخدم البدء من الصفحة الرئيسية، ثم الانتقال إلى "أحدث مشاريع إعمار" أو قسم "المجتمعات".
    *   إذا اختار "المجتمعات" من قائمة التنقل الرئيسية أو الميجا منيو، فسيصل إلى صفحة قائمة بالمجتمعات، ومن هناك يمكنه النقر على مجتمع معين للوصول إلى صفحته التفصيلية.
*   **من هذه الصفحة (`/en/latest-launches/`):**
    *   يمكن للمستخدم تصفية المحتوى لعرض **"Emaar Communities"** (مجتمعات إعمار)، والتي تقدم نظرة عامة على المجتمعات الرئيسية (المستوى الأب). عندما ينقر على "Learn More" لأحد هذه المجتمعات، ينتقل إلى صفحة المجتمع التفصيلية.
    *   يمكن للمستخدم تصفية المحتوى لعرض **"Now Available"** (المشاريع المتاحة الآن)، والتي تعرض المشاريع الفرعية المحددة (المستوى الفرعي). عندما ينقر على "Learn More" لمشروع، ينتقل إلى صفحة المشروع التفصيلية.
*   **نماذج تسجيل الاهتمام (Lead Capture):** تظهر في كلتا الحالتين (المجتمعات أو المشاريع) من خلال أزرار "Register Interest" لجمع بيانات العميل المحتمل بناءً على اهتمامه المحدد.
*   **التذييل (Footer):** يوفر روابط سريعة للوصول إلى أي مجتمع أو مشروع، بالإضافة إلى روابط SEO لمختلف استعلامات البحث.

باختصار، يتم تنظيم الموقع بشكل هرمي حيث تكون "المجتمعات" هي المستويات العليا (الأب)، والمشاريع هي المستويات الدنيا (الأبناء) التي تقع ضمن هذه المجتمعات أو تُطرح ضمن سياقها، وكلها متصلة عبر روابط واضحة وقوائم تنقل متعددة لتحسين تجربة المستخدم وتحسين محركات البحث.

---

### استخراج هيكل المشروع (الشجرة)

يتبع هيكل الموقع نموذجًا هرميًا واضحًا، حيث تتجمع المشاريع العقارية تحت مظلة "المجتمعات" الأكبر، وهناك أيضًا أقسام عامة للمعلومات والتسويق.

**الهيكل/الشجرة الرئيسية:**

```
[موقع إعمار (Homepage)]
├── /en/ (النسخة الإنجليزية)
│   ├── أحدث مشاريع إعمار (Latest Launches) - هذه الصفحة
│   │   ├── قائمة المجتمعات (Emaar Communities Filter)
│   │   │   ├── [Grand Polo Club & Resort]
│   │   │   │   └── (مشاريع فرعية مثل Chevalia Estate 2, Selvara 3, Selvara 4)
│   │   │   ├── [Dubai Hills Estate]
│   │   │   │   └── (مشاريع فرعية مثل Rosehill, Parkwood, Hillsedge, Golf Hillside, Club Place)
│   │   │   ├── [Dubai Creek Harbour]
│   │   │   │   └── (مشاريع فرعية مثل Silva, Altan, Albero, Mangrove, Valo, Aeon, Cedar, Savanna, Lyvia by Palace, Montiva by Vida)
│   │   │   ├── [Emaar South]
│   │   │   │   └── (مشاريع فرعية مثل Golf Meadow, Golf Verge, Golf Acres, Golf Dale, Golf Point)
│   │   │   ├── [The Valley]
│   │   │   │   └── (مشاريع فرعية مثل Vindera)
│   │   │   ├── [Emaar Beachfront]
│   │   │   │   └── (مشاريع فرعية مثل Bayview by Address Resorts)
│   │   │   ├── [Address Al Marjan Island, Ras Al Khaimah]
│   │   │   │   └── (مشاريع فرعية مثل Address Residences Al Marjan Island)
│   │   │   ├── [Expo Living]
│   │   │   │   └── (مشاريع فرعية مثل Terra Gardens)
│   │   │   ├── [THE OASIS]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   │   ├── [Rashid Yachts & Marina]
│   │   │   │   └── (مشاريع فرعية مثل Sera 2, Ocean Cove, Aurea At Rashid Yachts & Marina, Baystar by Vida)
│   │   │   ├── [Downtown Dubai]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   │   ├── [Dubai Marina]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   │   ├── [Arabian Ranches]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   │   ├── [Arabian Ranches III]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   │   ├── [The Heights Country Club & Wellness]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   │   ├── [Address Residences Zabeel]
│   │   │   │   └── (تُصنّف كمجتمع ومشاريع فرعية مثل Address Residences Zabeel)
│   │   │   ├── [Emirates Living]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   │   ├── [Reem]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   │   ├── [The Greens & Views]
│   │   │   │   └── (لا يوجد مشاريع فرعية محددة في الكود لهذه الصفحة، لكنها تُصنّف كمجتمع)
│   │   ├── قائمة المشاريع المتاحة (Now Available Filter)
│   │   │   ├── [Sera 2 at Rashid Yachts & Marina]
│   │   │   ├── [Rosehill at Dubai Hills Estate]
│   │   │   ├── [Silva – Dubai Creek Harbour]
│   │   │   ├── [Altan]
│   │   │   ├── [Albero at Dubai Creek Harbour]
│   │   │   ├── [Golf Meadow at Emaar South]
│   │   │   ├── [Golf Verge at Emaar South]
│   │   │   ├── [Parkwood at Dubai Hills Estate]
│   │   │   ├── [Golf Acres at Emaar South]
│   │   │   ├── [Golf Dale at Emaar South]
│   │   │   ├── [Hillsedge at Dubai Hills Estate]
│   │   │   ├── [Golf Hillside at Dubai Hills Estate]
│   │   │   ├── [Golf Point at Emaar South]
│   │   │   ├── [Club Place at Dubai Hills Estate]
│   │   │   ├── [Altus at Dubai Creek Harbour]
│   │   │   ├── [Ocean Cove at Rashid Yachts & Marina]
│   │   │   ├── [MANGROVE AT DUBAI CREEK HARBOUR]
│   │   │   ├── [Valo at Dubai Creek Harbour]
│   │   │   ├── [Address Residences Zabeel]
│   │   │   ├── [Aeon at Dubai Creek Harbour]
│   │   │   ├── [Address Residences Al Marjan Island]
│   │   │   ├── [Parkside Views Residence]
│   │   │   ├── [Bayview by Address Resorts at Emaar Beachfront]
│   │   │   ├── [Cedar at Dubai Creek Harbour]
│   │   │   └── [Savanna at Dubai Creek Harbour]
│   ├── عن إعمار (About Us)
│   │   └── ... (صفحات فرعية مثل Careers, FAQ, Investor Relations)
│   ├── مجتمعاتنا (Our Communities)
│   │   ├── [صفحة Grand Polo Club & Resort التفصيلية]
│   │   ├── [صفحة Dubai Hills Estate التفصيلية]
│   │   └── ... (جميع صفحات المجتمعات المذكورة)
│   ├── الاستدامة (Sustainability)
│   │   └── ... (صفحات فرعية مثل Employees, Environment)
│   ├── تذييل الموقع (Footer)
│       ├── أقسام المعلومات (About EMAAR, Emaar International, Emaar Entertainment, Emaar Malls, Emaar Hospitality, Emaar Leisure Group)
│       ├── أحدث المشاريع (Latest Launches) - قائمة روابط مباشرة للمشاريع الحديثة (نفس المشاريع في فلتر "Now Available" لكن في قائمة نصية)
│       │   ├── [Terra Gardens at Expo Living]
│       │   ├── [Lyvia by Palace at Dubai Creek Harbour]
│       │   ├── [Aurea At Rashid Yachts & Marina]
│       │   ├── [Vindera at The Valley]
│       │   ├── [Chevalia Estate 2]
│       │   ├── [Sera 2 at Rashid Yachts & Marina]
│       │   ├── [Selvara 3 at Grand Polo Club & Resort]
│       │   ├── [Selvara 4 at Grand Polo Club & Resort]
│       │   ├── [Montiva by Vida at Dubai Creek Harbour]
│       │   ├── [Baystar by Vida at Rashid Yachts & Marina]
│       │   └── [View All Properties]
│       ├── عمليات البحث الشائعة (Trending Searches) - روابط SEO لصفحات نتائج البحث
│       │   ├── [Properties for Sale in Dubai Creek Harbour]
│       │   ├── [Apartments for Sale in Dubai]
│       │   └── ... (وغيرها من روابط البحث)
│       └── روابط قانونية (Legal Menu)
│           └── ... (Privacy Policy, Terms & Conditions, Sitemap)

```

---

### وصف العلاقات والارتباطات

1.  **العلاقة الأبوية-الطفلية (Parent-Child Relationship):**
    *   **المجتمعات (Communities) هي الآباء:** مثل `Dubai Hills Estate` أو `Dubai Creek Harbour` أو `Emaar South`.
    *   **المشاريع (Projects) هي الأبناء:** مثل `Rosehill` (ابن لـ Dubai Hills Estate) أو `Silva` (ابن لـ Dubai Creek Harbour) أو `Golf Meadow` (ابن لـ Emaar South).
    *   **الوصول:** يمكن الوصول إلى صفحة المجتمع من عدة أماكن (قائمة التنقل، الميجا منيو، فلتر "Emaar Communities" في هذه الصفحة). ومن صفحة المجتمع، يتوقع أن تكون هناك روابط للمشاريع الفرعية الموجودة فيه. يمكن الوصول إلى صفحة المشروع مباشرة من فلتر "Now Available" في هذه الصفحة أو من قائمة "Latest Launches" في التذييل.

2.  **العلاقات التنقلية (Navigational Relationships):**
    *   **القائمة الرئيسية (Header Navigation):** تربط الأقسام الرئيسية للموقع ببعضها (About Us, Latest Projects, Communities, Sustainability).
    *   **الميجا منيو (Mega Menu):** هي ميزة تنقل غنية تربط قسم "Communities" بعرض مرئي ومفصل للمجتمعات الرئيسية.
    *   **التذييل (Footer):** يمثل شبكة واسعة من الروابط التي تغطي جميع جوانب أعمال إعمار، بما في ذلك الروابط المباشرة للمجتمعات والمشاريع، بالإضافة إلى روابط لصفحات البحث الشائعة (`Trending Searches`) التي تُعد استراتيجية SEO لربط الكلمات المفتاحية بصفحات العقارات.

3.  **علاقات التصفية والعرض (Filtering & Display Relationships):**
    *   **فلتر "Emaar Communities"**: يعرض قائمة المجتمعات الرئيسية (الآباء) مع روابط لصفحاتهم التفصيلية.
    *   **فلتر "Now Available"**: يعرض قائمة المشاريع المحددة (الأبناء) المتاحة حاليًا، مع روابط لصفحاتها التفصيلية وصفحات البحث عن وحدات متاحة.
    *   **المشاريع في التذييل ("Latest Launches"):** هي قائمة نصية بسيطة للمشاريع المتاحة حديثًا، وتشكل أيضًا روابط مباشرة لصفحات المشاريع.

4.  **علاقات التسويق وجمع العملاء المحتملين (Marketing & Lead Generation Relationships):**
    *   كل مشروع ومجتمع في هذه الصفحة له زر "Register Interest" أو "Register for New Launches" الذي يفتح نافذة منبثقة لنموذج Gravity Forms. هذا النموذج يمثل نقطة التقاء مهمة بين اهتمام المستخدم وجهود إعمار لجمع البيانات.
    *   يتم تتبع مصدر هذا الاهتمام (مثل `data-propcomm` و `data-source-url` لتحديد أي مشروع/مجتمع ولأي غرض تم تسجيل الاهتمام).

---

### كود لتوليد صورة (باستخدام Mermaid JS)

يمكنك لصق هذا الكود في أداة تدعم Mermaid JS (مثل GitHub Markdown، أو تطبيقات Mermaid JS أونلاين) لتوليد تمثيل بياني لهذه العلاقات.

```mermaid
graph TD
    A[Homepage] --> B[Latest Emaar Launches Page]

    B --> C1[Filter: Emaar Communities]
    B --> C2[Filter: Now Available Projects]

    C1 --> D1[Grand Polo Club & Resort]
    C1 --> D2[Dubai Hills Estate]
    C1 --> D3[Dubai Creek Harbour]
    C1 --> D4[Emaar South]
    C1 --> D5[The Valley]
    C1 --> D6[Emaar Beachfront]
    C1 --> D7[Address Al Marjan Island, RAK]
    C1 --> D8[Expo Living]
    C1 --> D9[THE OASIS]
    C1 --> D10[Rashid Yachts & Marina]
    C1 --> D11[Downtown Dubai]
    C1 --> D12[Dubai Marina]
    C1 --> D13[Arabian Ranches]
    C1 --> D14[Arabian Ranches III]
    C1 --> D15[The Heights Country Club & Wellness]
    C1 --> D16[Address Residences Zabeel]
    C1 --> D17[Emirates Living]
    C1 --> D18[Reem]
    C1 --> D19[The Greens & Views]

    C2 --> P1[Sera 2]
    C2 --> P2[Rosehill]
    C2 --> P3[Silva]
    C2 --> P4[Altan]
    C2 --> P5[Albero]
    C2 --> P6[Golf Meadow]
    C2 --> P7[Golf Verge]
    C2 --> P8[Parkwood]
    C2 --> P9[Golf Acres]
    C2 --> P10[Golf Dale]
    C2 --> P11[Hillsedge]
    C2 --> P12[Golf Hillside]
    C2 --> P13[Golf Point]
    C2 --> P14[Club Place]
    C2 --> P15[Altus]
    C2 --> P16[Ocean Cove]
    C2 --> P17[MANGROVE]
    C2 --> P18[Valo]
    C2 --> P19[Address Residences Zabeel (Project)]
    C2 --> P20[Aeon]
    C2 --> P21[Address Residences Al Marjan Island (Project)]
    C2 --> P22[Parkside Views Residence]
    C2 --> P23[Bayview by Address Resorts]
    C2 --> P24[Cedar]
    C2 --> P25[Savanna]

    D1 --- P_GP1[Chevalia Estate 2, Selvara 3, Selvara 4]
    D2 --- P_DHE1[Rosehill, Parkwood, Hillsedge, Golf Hillside, Club Place]
    D3 --- P_DCH1[Silva, Altan, Albero, Mangrove, Valo, Aeon, Cedar, Savanna, Lyvia by Palace, Montiva by Vida]
    D4 --- P_ES1[Golf Meadow, Golf Verge, Golf Acres, Golf Dale, Golf Point]
    D5 --- P_TV1[Vindera]
    D6 --- P_EB1[Bayview by Address Resorts]
    D7 --- P_AAM1[Address Residences Al Marjan Island (Project)]
    D8 --- P_EL1[Terra Gardens]
    D10 --- P_RYM1[Sera 2, Ocean Cove, Aurea At Rashid Yachts & Marina, Baystar by Vida]
    D16 --- P_ARZ1[Address Residences Zabeel (Project)]


    B --> F[Footer]
    F --> F1[About EMAAR]
    F --> F2[Communities (Links)]
    F --> F3[Latest Launches (Project Links)]
    F --> F4[Emaar International]
    F --> F5[Emaar Entertainment]
    F --> F6[Emaar Malls]
    F --> F7[Emaar Hospitality]
    F --> F8[Emaar Leisure Group]
    F --> F9[Trending Searches]
    F --> F10[Legal Menu]

    F3 --> P1
    F3 --> P2
    F3 --> P3
    F3 --> P4
    F3 --> P5
    F3 --> P6
    F3 --> P7
    F3 --> P8
    F3 --> P9
    F3 --> P10
    F3 --> P11
    F3 --> P12
    F3 --> P13
    F3 --> P14
    F3 --> P15
    F3 --> P16
    F3 --> P17
    F3 --> P18
    F3 --> P19
    F3 --> P20
    F3 --> P21
    F3 --> P22
    F3 --> P23
    F3 --> P24
    F3 --> P25
    F3 --> FV[View All Properties]

    F9 --> S1[Properties for Sale in Dubai Creek Harbour]
    F9 --> S2[Apartments for Sale in Dubai]
    F9 --> S_etc[...]

    A --> Z[Language Selector (Header/Mobile)]
    A --> Y[Mega Menu for Communities (Header)]
    Y --> D1
    Y --> D2
    Y --> D3
    Y --> D4
    Y --> D5
    Y --> D6
    Y --> D7
    Y --> D8
    Y --> D9
    Y --> D10
    Y --> D11
    Y --> D12
    Y --> D13
    Y --> D14
    Y --> D15
    Y --> D16
    Y --> D17
    Y --> D18
    Y --> D19

    subgraph Header Elements
        H1[Emaar Logo]
        H2[Main Navigation]
        H3[Language Switcher]
        H4[Instant Video Call]
        H5[WhatsApp]
        H6[Get in Touch Button]
        H7[Mega Menu (Communities)]
    end

    subgraph Content Area
        CA1[Page Title & Description]
        CA2[Filter Tabs]
        CA3[Project/Community Listings]
    end

    subgraph Modals
        M1[Register Your Interest Form]
        M2[IE Browser Warning]
    end

    subgraph Footer Elements
        FT1[Emaar Logo & Social]
        FT2[Newsletter Signup]
        FT3[Footer Nav Links]
        FT4[Legal Links]
    end

    H1 --> A
    H2 --> B
    H2 --> B
    H2 --> C1
    H2 --> F1
    H3 --> Z
    H4 --> M1
    H5 --> B
    H6 --> M1
    H7 --> Y

    CA1 --> B
    CA2 --> C1
    CA2 --> C2
    CA3 --> D1
    CA3 --> P1

    click D1 "https://properties.emaar.com/en/our-communities/grand-polo-club-and-resort/" _blank
    click P1 "https://properties.emaar.com/en/properties/sera-2-at-rashid-yachts-and-marina/" _blank

*   **القائمة كاملة من الكود (الميجا منيو وفلتر المجتمعات):**
    1.  Grand Polo Club & Resort
    2.  Dubai Hills Estate
    3.  Dubai Creek Harbour
    4.  Emaar South
    5.  The Valley
    6.  Emaar Beachfront
    7.  Address Al Marjan Island, Ras Al Khaimah
    8.  Expo Living
    9.  THE OASIS
    10. Rashid Yachts & Marina
    11. Downtown Dubai
    12. Dubai Marina
    13. Arabian Ranches
    14. Arabian Ranches III
    15. The Heights Country Club & Wellness
    16. Address Residences Zabeel
    17. Emirates Living
    18. Reem
    19. The Greens & Views

هذه المجتمعات تشكل الهيكل الرئيسي لتصنيف العقارات في موقع إعمار، والمشاريع الفردية (كما رأينا في "Now Available") تُبنى عادةً داخل هذه المجتمعات.



###########     مجتمعات و مشاريع   ##########

Address Al Marjan Island, Ras Al Khaimah:

{
  "تحليل_هيكلية_الكود": {
    "وصف_عام": "هذا المستند هو صفحة ويب بتنسيق HTML5، مصممة لعرض قائمة عقارات للبحث. تم بناؤها باستخدام نظام إدارة المحتوى WordPress ومُحسَّنة بشكل كبير للأداء والتسويق الرقمي. الهيكلية تتبع المعايير القياسية لصفحات الويب مع تقسيم واضح بين قسم الرأس (head) والجسم (body)، وكل قسم يحتوي على مكونات متخصصة لأداء وظائف محددة.",
    "الهيكل_الهرمي": {
      "المستوى_الأول_DOCTYPE_html": {
        "وصف": "إعلان نوع المستند بأنه HTML5 والوسم الجذري للصفحة.",
        "المكونات": [
          {
            "اسم": "head",
            "وصف": "يحتوي على البيانات الوصفية (metadata)، والسكريبتات الأساسية، وروابط الأنماط (CSS)، ومعلومات تحسين محركات البحث (SEO)."
          },
          {
            "اسم": "body",
            "وصف": "يحتوي على المحتوى المرئي للصفحة، بما في ذلك الهيدر، المحتوى الرئيسي، والفوتر."
          }
        ]
      },
      "قسم_الرأس_Head": {
        "وصف": "يحتوي هذا القسم على جميع الإعدادات الأولية والروابط الخارجية التي تحتاجها الصفحة قبل عرض المحتوى.",
        "المكونات_الرئيسية": [
          {
            "نوع": "Meta Tags",
            "وصف": "وسوم لوصف الصفحة، وضبط عرضها على الأجهزة المختلفة، وإعطاء معلومات لمحركات البحث والشبكات الاجتماعية.",
            "أمثلة": [
              "charset=UTF-8: لترميز الأحرف.",
              "viewport: لضبط عرض الصفحة على الأجهزة المحمولة.",
              "description: وصف الصفحة لمحركات البحث.",
              "google-site-verification / yandex-verification: لإثبات ملكية الموقع لمحركات البحث.",
              "og:tags (Open Graph): لتنسيق معاينة الرابط عند مشاركته على فيسبوك ومنصات أخرى.",
              "twitter:card: لتنسيق معاينة الرابط عند مشاركته على تويتر.",
              "robots: لإرشاد عناكب البحث حول كيفية فهرسة الصفحة."
            ]
          },
          {
            "نوع": "Scripts",
            "وصف": "يحتوي على كود JavaScript للوظائف المختلفة مثل تحسين الأداء، والتتبع، والتوافق مع المتصفحات.",
            "أمثلة": [
              "RocketLazyLoadScripts: سكريبت رئيسي من إضافة WP Rocket لتأجيل تحميل الـ JavaScript لتحسين سرعة تحميل الصفحة.",
              "gform (Gravity Forms): سكريبت لتهيئة نماذج Gravity Forms المستخدمة في الصفحة.",
              "Google Tag Manager (GTM): سكريبت يتم تحميله عند تفاعل المستخدم لتحميل أدوات التتبع الأخرى.",
              "Amplitude: سكريبت لتتبع تحليلات سلوك المستخدم.",
              "wpml-cookie: لإدارة ملفات تعريف الارتباط المتعلقة باللغة.",
              "yoast-schema-graph (ld+json): بيانات منظمة (Schema) من إضافة Yoast SEO لتحسين الظهور في نتائج البحث."
            ]
          },
          {
            "نوع": "Link Tags",
            "وصف": "وسوم لربط ملفات خارجية مثل أوراق الأنماط (CSS)، والخطوط، وال favicons، وتحديد إصدارات اللغات المختلفة.",
            "أمثلة": [
              "stylesheet: لربط ملفات CSS لتنسيق مظهر الصفحة (مثل bootstrap, mmenu, sbi-styles).",
              "preconnect / preload: لتحسين الأداء عبر إنشاء اتصال مسبق بالخوادم الخارجية وتحميل الموارد الهامة (مثل الخطوط والصور) بشكل مبكر.",
              "alternate hreflang: لتحديد الإصدارات البديلة للصفحة بلغات مختلفة (الإنجليزية، العربية، الروسية).",
              "canonical: لتحديد الرابط الأساسي للصفحة لمنع المحتوى المكرر.",
              "icon: لتحديد أيقونة الموقع (favicon)."
            ]
          },
          {
            "نوع": "Inline Styles & Scripts",
            "وصف": "أكواد CSS و JavaScript مكتوبة مباشرة في ملف الـ HTML.",
            "أمثلة": [
              "global-styles-inline-css: أنماط CSS عامة يتم تطبيقها على مستوى الموقع.",
              "wp-custom-css: تخصيصات CSS إضافية للموقع.",
              "gform script: كود JavaScript لتهيئة النماذج والتفاعل معها."
            ]
          }
        ]
      },
      "قسم_الجسم_Body": {
        "وصف": "الجزء المرئي من الصفحة الذي يتفاعل معه المستخدم.",
        "السمات_الرئيسية": "يحتوي على فئات (classes) متعددة تشير إلى نوع القالب (page-template-search-property-new)، معرف الصفحة (page-id-798)، والثيم المستخدم (wp-theme-wp-bootstrap-starter).",
        "المكونات_الرئيسية": [
          {
            "اسم": "Google Tag Manager (noscript)",
            "وصف": "جزء احتياطي من GTM يعمل في حال كان JavaScript معطلاً في المتصفح."
          },
          {
            "اسم": "Modals & Overlays (النوافذ المنبثقة والتراكبات)",
            "وصف": "عناصر مخفية تظهر عند تنفيذ إجراء معين.",
            "أمثلة": [
              "IEBrowserWarningModal: نافذة تحذير للمستخدمين الذين يستخدمون متصفح Internet Explorer.",
              "registerModal: نافذة منبثقة لـ 'تسجيل الاهتمام' (Register Your Interest)، تحتوي على نموذج (Gravity Form) لجمع بيانات العملاء المحتملين.",
              "booking-overlay: تراكب يظهر عند إرسال النماذج أو إجراء الحجز لإظهار حالة التحميل."
            ]
          },
          {
            "اسم": "Header (رأس الصفحة)",
            "id": "masthead",
            "وصف": "الشريط العلوي للموقع، يحتوي على هوية العلامة التجارية والتنقل الرئيسي.",
            "المكونات": [
              "شعار Emaar.",
              "قائمة التنقل الرئيسية (About Us, Latest Projects, Communities, Sustainability).",
              "شريط أدوات إضافي: يحتوي على محول اللغات (ENG, العربية, Русский)، قائمة الرغبات (Wishlist)، وزر اتصال فيديو فوري، وزر WhatsApp، وزر 'Get in Touch' الذي يفتح نافذة تسجيل الاهتمام.",
              "قائمة المجتمعات (Communities Menu): قائمة ضخمة (Mega Menu) تظهر عند التمرير فوق 'Communities' وتعرض المشاريع المميزة.",
              "قائمة التنقل للجوال (Mobile Nav)."
            ]
          },
          {
            "اسم": "Main Content (المحتوى الرئيسي)",
            "id": "content",
            "وصف": "الجزء الرئيسي للصفحة المخصص لوظيفة البحث عن العقارات.",
            "المكونات": [
              {
                "اسم": "Unit Search Wrapper",
                "وصف": "الحاوية الرئيسية لواجهة البحث.",
                "أقسام_فرعية": [
                  "Payment Plan Modal: نافذة منبثقة لعرض خطط الدفع.",
                  "Map Filter Buttons: شريط يحتوي على حقل بحث بالاسم وأزرار لإخفاء/إظهار الخريطة.",
                  "Map Search Wrapper: واجهة البحث باستخدام الخريطة. تنقسم إلى قسمين: قائمة العقارات على اليسار والخريطة التفاعلية على اليمين.",
                  "List Search Wrapper: واجهة البحث باستخدام القائمة التقليدية. تنقسم إلى قسمين: شريط الفلاتر على اليسار وقائمة العقارات على اليمين.",
                  "Comparison Sticky Bar: شريط سفلي ثابت يظهر عند تحديد عقارات للمقارنة."
                ]
              },
              {
                "اسم": "Forms & Filters (النماذج والفلاتر)",
                "وصف": "أدوات لتصفية نتائج البحث.",
                "الفلاتر_المتاحة": [
                  "Property Type (نوع العقار): Apartment, Hotel, Office, Plot, Townhouse, Villa.",
                  "Bedrooms (عدد غرف النوم).",
                  "Price Range (نطاق السعر).",
                  "More Filters (فلاتر إضافية): Floor (الطابق), Total Area (المساحة), Communities (المجتمعات), Properties (العقارات)."
                ]
              },
              {
                "اسم": "Property/Unit Cards (بطاقات العقارات/الوحدات)",
                "وصف": "عرض تفاصيل كل عقار في قائمة النتائج.",
                "المعلومات_المعروضة": [
                  "صور العقار (في شكل slider).",
                  "الموقع (Community & Property Name).",
                  "اسم الوحدة.",
                  "الخصائص: عدد الغرف، الطابق، المساحة، السعر.",
                  "روابط الإجراءات: عرض خطة الطابق، إضافة للمفضلة، مقارنة.",
                  "أزرار التفاعل: Enquire (يفتح نافذة تسجيل الاهتمام)، Payment Plan، Book Now (للحجز عبر الإنترنت)."
                ]
              }
            ]
          },
          {
            "اسم": "Footer (تذييل الصفحة)",
            "id": "colophon",
            "وصف": "الجزء السفلي من الموقع، يحتوي على معلومات إضافية وروابط.",
            "المكونات": [
              "نموذج الاشتراك في النشرة الإخبارية.",
              "أيقونات وسائل التواصل الاجتماعي (Facebook, Twitter, YouTube, Instagram, LinkedIn).",
              "قوائم روابط مقسمة إلى فئات: About Emaar, Communities, Latest Launches, Emaar International, Emaar Entertainment, Malls, Hospitality, Leisure Group.",
              "Trending Searches: قسم يحتوي على روابط لعمليات البحث الشائعة، وهو أسلوب SEO لزيادة الارتباط الداخلي.",
              "القائمة القانونية: روابط لسياسة الخصوصية، شروط الاستخدام، وخريطة الموقع."
            ]
          }
        ]
      }
    }
  },
  "الترجمات_والتدويل": {
    "الدعم_اللغوي": "الموقع يدعم ثلاث لغات بشكل واضح: الإنجليزية (en)، العربية (ar)، والروسية (ru).",
    "التقنيات_المستخدمة": [
      {
        "تقنية": "وسوم hreflang",
        "وصف": "موجودة في قسم <head> لإعلام محركات البحث بوجود إصدارات متعددة اللغات من نفس الصفحة، مما يساعد في عرض اللغة المناسبة للمستخدم في نتائج البحث.",
        "مثال": "<link rel=\"alternate\" hreflang=\"ar\" href=\"...\">"
      },
      {
        "تقنية": "إضافة WPML",
        "وصف": "تم التعرف على سكريبتات وملفات تعريف ارتباط خاصة بـ WPML (WordPress Multilingual Plugin)، وهي إضافة شائعة في ووردبريس لإدارة المواقع متعددة اللغات.",
        "دليل": "وجود سكريبت `wpml-cookie.js` وميتا تاغ `generator` بقيمة `WPML`."
      },
      {
        "تقنية": "محول لغات في الواجهة",
        "وصف": "يوجد زر في الهيدر يسمح للمستخدم بالتبديل يدويًا بين اللغات المتاحة (ENG, العربية, Русский)."
      }
    ]
  },
  "أساليب_التسويق_والتحليلات": {
    "تحسين_محركات_البحث_SEO": [
      {
        "أسلوب": "إضافة Yoast SEO",
        "وصف": "استخدام إضافة Yoast SEO، كما هو واضح من التعليق في الكود، لإدارة العناوين والأوصاف والبيانات المنظمة."
      },
      {
        "أسلوب": "البيانات الوصفية (Meta Tags)",
        "وصف": "استخدام فعال لوسوم العنوان (Title) والوصف (Description) لجذب المستخدمين من صفحات نتائج البحث."
      },
      {
        "أسلوب": "البيانات المنظمة (Schema Markup)",
        "وصف": "استخدام `ld+json` لتقديم بيانات منظمة حول صفحة الويب والموقع للمساعدة في إنشاء نتائج غنية (Rich Snippets) في جوجل."
      },
      {
        "أسلوب": "الروابط الأساسية (Canonical URLs)",
        "وصف": "تحديد رابط أساسي للصفحة لمنع مشاكل المحتوى المكرر."
      },
      {
        "أسلوب": "الربط الداخلي (Internal Linking)",
        "وصف": "استخدام قسم 'Trending Searches' في الفوتر لإنشاء روابط داخلية لصفحات البحث المهمة، مما يعزز من قوتها لدى محركات البحث."
      },
      {
        "أسلوب": "SEO الدولي",
        "وصف": "استخدام وسوم `hreflang` لاستهداف المستخدمين في مناطق لغوية مختلفة."
      }
    ],
    "تحسين_الأداء": [
      {
        "أسلوب": "إضافة WP Rocket",
        "وصف": "استخدام شامل لإضافة WP Rocket لتحسين أداء الموقع بشكل كبير.",
        "الميزات_المستخدمة": [
          "تأجيل تحميل JavaScript (Delay JS Execution): تحميل السكريبتات فقط عند تفاعل المستخدم.",
          "التحميل الكسول (Lazy Loading): تحميل الصور والسكريبتات عند الحاجة فقط.",
          "تصغير الملفات (Minification): ضغط ملفات CSS و JavaScript لتقليل حجمها.",
          "التحميل المسبق (Preloading & Preconnecting): تحميل الموارد الهامة والاتصال بالخوادم الخارجية بشكل مبكر لتسريع العرض."
        ]
      }
    ],
    "جمع_بيانات_العملاء_Lead_Generation": [
      {
        "أسلوب": "دعوات واضحة لاتخاذ إجراء (CTAs)",
        "وصف": "أزرار بارزة مثل 'Get in Touch' و 'Enquire' تفتح نموذجًا لجمع بيانات العملاء."
      },
      {
        "أسلوب": "نماذج Gravity Forms",
        "وصف": "استخدام نماذج متقدمة (ID: gform_1 و gform_2) لجمع معلومات مفصلة من العملاء المحتملين (الاسم، الايميل، الهاتف، حجم العقار المفضل، جواز السفر)."
      },
      {
        "أسلوب": "قنوات تواصل متعددة",
        "وصف": "توفير خيارات تواصل فورية مثل 'Instant Video Call' و 'WhatsApp' لتسهيل التواصل مع العملاء."
      },
      {
        "أسلوب": "الاشتراك في النشرة الإخبارية",
        "وصف": "نموذج بسيط في الفوتر لتجميع البريد الإلكتروني للمهتمين بالتحديثات والعروض."
      }
    ],
    "التتبع_والتحليلات_Analytics": [
      {
        "أداة": "Google Tag Manager (GTM)",
        "معرف": "GTM-KCHN85",
        "وصف": "استخدامه كحاوية لإدارة جميع أكواد التتبع والتحليلات الأخرى، مما يسهل إدارتها دون تعديل الكود."
      },
      {
        "أداة": "Amplitude",
        "وصف": "أداة تحليلات منتج متقدمة لتتبع سلوك المستخدم بالتفصيل. يتم تتبع أحداث مثل `view_page`, `submit_lead`, `book_online`."
      },
      {
        "أداة": "Salesforce Marketing Cloud (igodigital.com)",
        "وصف": "سكريبت تتبع من Salesforce لربط سلوك المستخدم على الموقع بحملات التسويق عبر البريد الإلكتروني والأتمتة."
      },
      {
        "أداة": "وحدات بكسل إعلانية (Advertising Pixels)",
        "وصف": "عبر وسوم `preconnect`، يتضح أن الموقع يتصل بخوادم منصات إعلانية متعددة، مما يشير إلى استخدام وحدات بكسل لتتبع التحويلات وإعادة الاستهداف.",
        "المنصات": [
          "Facebook (Meta)",
          "TikTok",
          "Twitter",
          "Bing Ads",
          "Google Ads (DoubleClick)",
          "Taboola",
          "AppNexus (adnxs.com)",
          "Yandex (yads.tech)"
        ]
      },
      {
        "أداة": "Hotjar",
        "وصف": "منصة لتحليل سلوك المستخدم عبر الخرائط الحرارية (Heatmaps) وتسجيلات الجلسات، كما هو موضح من خلال رابط `preconnect`."
      }
    ]
  }
}

### تقسيم عرض المشاريع في الموقع بأسلوب سلس:

الموقع مصمم بطريقة تخليك تتنقل بين المشاريع وتكتشفها على مراحل، وكأنك بتستكشف مدينة جديدة:

1.  **رأس الصفحة (Header): نافذة على المجتمعات المميزة**
    *   في أعلى الصفحة، بتحصل "قائمة المجتمعات" (Communities Menu). هذي القائمة بمثابة دليل سريع لأكبر وأشهر المجمعات العقارية لإعمار. بتشوف فيها صور ووصف مختصر لكل مجمع، وعدد الغرف المتوفرة فيه (مثل 3، 4، 5 غرف نوم للفلل). هذي طريقة ممتازة تعطيك نظرة عامة سريعة على "الأحياء الكبيرة" قبل ما تتعمق في البحث.

2.  **المحتوى الرئيسي: قلب البحث عن العقارات (حيث تجد مشروعك!)**
    *   هذا هو المكان اللي بتقضي فيه معظم وقتك لو بتدور على عقار محدد. الموقع مقسّم هنا بشكل ذكي بين طريقتين للعرض، بحيث تختار الأنسب لك بزر واحد:
        *   **أ. عرض الخريطة (Map View): شوف مكان مشروعك صح!**
            *   لو بتحب تشوف العقارات على الخريطة وتحدد موقعها الجغرافي، هذا القسم بيوريك أماكن المجمعات والعقارات بدقة. تقدر تكبر وتصغر في الخريطة، وتشوف المرافق القريبة اللي تهمك زي المستشفيات والمدارس. وكل نقطة على الخريطة تمثل عقار أو مجمع، ولو ضغطت عليها، بتظهر لك بطاقة فيها معلومات سريعة عن العقار أو الوحدات المتاحة فيه، وكأنك بتنقر على معلم في خريطة حقيقية.
        *   **ب. عرض القائمة (List View): تفاصيل منظمة في متناول يدك!**
            *   لو تفضل تشوف العقارات في قائمة مرتبة، هذا القسم بيعرض لك كل عقار أو وحدة بتفاصيلها الكاملة. كل عقار هنا له "بطاقة" خاصة فيه تعرض لك الصور، الموقع، اسم الوحدة، عدد الغرف، المساحة، والسعر. وهذي القائمة بتساعدك تركز على المعلومات وتشوف أكتر من عقار في نفس الوقت، زي فهرس منظم لكل المشاريع.
        *   **ج. بطاقات العقارات والوحدات (Property/Unit Cards): نافذتك لكل تفصيل في المشروع**
            *   هذي البطاقات هي الأساس في عرض تفاصيل المشاريع والوحدات. كل بطاقة بتلخّص لك أهم المعلومات عن الوحدة العقارية اللي ممكن تكون جزءًا من مشروع أكبر. فيها صور متغيرة (سلايدر)، وموقعها ضمن المجمع، وعدد غرف النوم، المساحة، والسعر. والأهم، فيها أزرار مباشرة للإجراءات اللي ممكن تاخدها: "استفسر" (عن طريق نموذج)، "شوف خطة الدفع"، أو "احجز الآن" (مباشرة عبر الإنترنت).
        *   **د. أدوات التصفية والبحث (Filters & Search): دليلك للعثور على مشروع أحلامك!**
            *   عشان ما تضيع بين العقارات الكثيرة، الموقع موفر لك أدوات بحث وتصفية قوية جداً. تقدر تبحث بالاسم لو تعرف اسم مشروع معين، أو تختار نوع العقار اللي يناسبك (شقة، فيلا، تاون هاوس، مكتب، قطعة أرض، فندق)، أو تحدد عدد غرف النوم اللي تحتاجها. كمان فيه نطاق سعري عشان تختار حسب ميزانيتك. والأحلى إن فيه "فلاتر إضافية" تسمح لك تحدد الطابق، أو المساحة الإجمالية، أو حتى تختار مجمع عقاري معين. هذي الأدوات كلها تخلي عملية البحث عن مشروعك المفضل ممتعة وفعالة.
        *   **هـ. شريط المقارنة (Comparison Sticky Bar): قارن مشاريعك المفضلة!**
            *   في أسفل الشاشة، يظهر شريط لما تختار أكثر من عقار. هذا الشريط يسمح لك تضيف العقارات اللي عجبتك للمقارنة، عشان تشوف مميزات كل مشروع جنب الثاني وتختار الأفضل لك.

3.  **تذييل الصفحة (Footer): مشاريع إضافية وروابط ذات صلة**
    *   في آخر الصفحة، بتلاقي أقسام مهمة لربطك بالمشاريع الأخرى: "أحدث المشاريع" (Latest Launches) اللي بيعرض لك آخر العقارات اللي نزلت السوق، وقسم "عمليات البحث الشائعة" (Trending Searches) اللي يوريك العقارات أو المناطق اللي الناس بتبحث عنها كتير. هذي الأقسام بتساعدك تكتشف مشاريع جديدة أو تشوف إيه اللي ماشي في السوق العقاري.

---

### ملف JSON: كل ما يتعلق بالمشاريع (بأسلوب سلس)

```json
{
  "المشاريع_العقارية_من_إعمار": {
    "مقدمة": "يعرض الموقع المشاريع العقارية بطريقة منظمة تسهّل عليك البحث والاكتشاف. من المجمعات الكبيرة وصولاً للوحدات الفردية، كل شيء مصمم لتوفير تجربة بحث ممتعة ومفيدة.",
    "هيكل_البيانات_الأساسي_للمشاريع": "المشاريع هنا مقسمة على عدة مستويات: Community (المجمع الكبير) > Property (العقار/التطوير داخل المجمع) > Unit (الوحدة الفردية داخل العقار).",

    "أمثلة_على_المجمعات_العقارية_المميزة_في_الرأس": [
      "Grand Polo Club & Resort (نادي ومنتجع جراند بولو)",
      "Dubai Hills Estate (دبي هيلز استيت)",
      "Dubai Creek Harbour (خور دبي)",
      "Emaar South (إعمار الجنوب)",
      "The Valley (الوادي)",
      "Emaar Beachfront (إعمار بيتش فرونت)",
      "Address Al Marjan Island, Ras Al Khaimah (أدريس جزيرة المرجان، رأس الخيمة)",
      "Expo Living (إكسبو ليفينج)",
      "THE OASIS (الواحة)",
      "Rashid Yachts & Marina (راشد لليخوت والمارينا)",
      "Downtown Dubai (وسط مدينة دبي)",
      "Dubai Marina (دبي مارينا)",
      "Arabian Ranches (المرابع العربية)",
      "Arabian Ranches III (المرابع العربية 3)",
      "The Heights Country Club & Wellness (نادي ومركز ذا هايتس الصحي)",
      "Address Residences Zabeel (أدريس ريزيدنسز زعبيل)",
      "Emirates Living (الإمارات ليفينج)",
      "Reem (ريم)",
      "The Greens & Views (ذا جرينز أند فيوز)"
    ],

    "هيكل_وحدة_عقارية_نموذجية_مفصلة_كمثال": {
      "وصف": "كل وحدة عقارية فردية (شقة، فيلا، تاون هاوس) لها بيانات دقيقة تظهر في بطاقتها، وهذه أبرز المكونات:",
      "نموذج_وحدة": {
        "COMMUNITY_NAME": "اسم المجمع الذي تتبع له الوحدة (مثل: Address Marjan Island)",
        "COMMUNITY_SLUG": "معرّف المجمع في الرابط (مثل: address-al-marjan-island-ras-al-khaimah)",
        "PROPERTY_NAME": "اسم العقار/التطوير (مثل: Address Marjan)",
        "UNIT_NAME": "الاسم الكامل للوحدة (مثل: AM Address Marjan Building 2-1-106)",
        "UNIT_ID": "معرّف فريد للوحدة (مثل: a0ZSl000000BujxMAC)",
        "FLOOR_PLAN": "رابط مباشر لملف خطة الطابق (URL)",
        "BEDS": "عدد غرف النوم (مثل: 3 Bedrooms)",
        "AREA": "المساحة بالقدم المربع (SqFt) (مثل: 2082)",
        "PRICE": "السعر بالدرهم الإماراتي (AED) (مثل: 5671888)",
        "IMAGES": {
          "وصف": "عدة روابط لصور عالية الجودة للوحدة، بأحجام مختلفة للعرض الأمثل.",
          "أمثلة_روابط": ["https://cdn.properties.emaar.com/...HERO_D_1620x832-706x385.jpg", "...MAIN_PAGE_1620x832-706x385.jpg", "...FEATURES_A_1200x655-706x385.jpg"]
        },
        "PROPERTY_LINK": "الرابط لصفحة العقار الرئيسية (مثل: https://properties.emaar.com/en/properties/address-marjan/)",
        "FLOOR": "رقم الطابق أو نوعه (مثل: 1 أو G للميزانين)",
        "MODEL": "معرّف النموذج الخاص بالوحدة (مثل: 6)",
        "TYPE": "نوع العقار (مثل: Apartment - شقة)",
        "PROPERTY_SLUG": "معرّف العقار في الرابط (مثل: address-marjan)",
        "IMAGE_THUMB": "رابط لصورة مصغرة للوحدة (لتحميل أسرع)",
        "COORDINATES": "إحداثيات جغرافية (خط الطول والعرض) لعرضها على الخريطة (مثل: {\"lng\":\"55.73703722\",\"lat\":\"25.69268494\"})",
        "VR_TOUR": "رابط لجولة افتراضية 360 درجة (قد يكون فارغاً)",
        "COMPARED": "هل الوحدة في قائمة المقارنة؟ (صحيح/خطأ)",
        "WISHLISTED": "هل الوحدة في قائمة الرغبات؟ (صحيح/خطأ)",
        "BOOK_ONLINE_URL": "رابط مباشر للحجز الإلكتروني للوحدة، مع تضمين جميع تفاصيل الوحدة في الرابط."
      }
    },

    "أدوات_البحث_والتصفية_للمشاريع": {
      "وصف": "هذه الأدوات تساعدك في العثور على المشاريع والوحدات التي تناسبك تماماً:",
      "أنواع_العقارات_المتاحة": [
        "Apartment (شقة)",
        "Hotel (فندق)",
        "Office (مكتب)",
        "Plot (قطعة أرض)",
        "Townhouse (تاون هاوس)",
        "Villa (فيلا)"
      ],
      "خيارات_غرف_النوم": [
        "1 Bedroom (غرفة نوم واحدة)",
        "2 Bedrooms (غرفتي نوم)",
        "3 Bedrooms (ثلاث غرف نوم)",
        "4 Bedrooms (أربع غرف نوم)",
        "5+ Bedrooms (خمس غرف نوم أو أكثر)"
      ],
      "نطاقات_السعر": "من 0 AED إلى 100,000,000 AED مع إمكانية التحديد الدقيق.",
      "فلاتر_إضافية": [
        "Floor (الطابق): يمكنك تحديد طابق معين أو اختيار 'الكل'.",
        "Total Area (المساحة الإجمالية): نطاق من 0 Sqft إلى 50,000 Sqft.",
        "Communities (المجمعات): اختيار مجمع محدد من قائمة المجمعات.",
        "Properties (العقارات): اختيار عقار محدد (مثل Address Residences Al Marjan Island) داخل المجمعات المختارة."
      ],
      "البحث_بالكلمات_المفتاحية": "حقل بحث عام للبحث باسم المجمع، أو العقار، أو الوحدة."
    },

    "أحدث_المشاريع_المطلقة_في_التذييل": [
      "Terra Gardens at Expo Living",
      "Lyvia by Palace at Dubai Creek Harbour",
      "Aurea At Rashid Yachts & Marina",
      "Vindera at The Valley",
      "Chevalia Estate 2 at Grand Polo Club and Resort",
      "Sera 2 at Rashid Yachts & Marina",
      "Selvara 3 at Grand Polo Club & Resort",
      "Selvara 4 at Grand Polo Club & Resort",
      "Montiva by Vida at Dubai Creek Harbour",
      "Baystar by Vida at Rashid Yachts & Marina",
      "View All Properties (عرض جميع العقارات)"
    ],

    "عمليات_البحث_الشائعة_في_التذييل": [
      "Properties for Sale in Dubai Creek Harbour (عقارات للبيع في خور دبي)",
      "Properties for Sale in Rashid Yachts & Marina (عقارات للبيع في راشد لليخوت والمارينا)",
      "Properties for Sale in The Valley (عقارات للبيع في الوادي)",
      "Properties for Sale in Expo Living (عقارات للبيع في إكسبو ليفينج)",
      "Properties for Sale in Emaar South (عقارات للبيع في إعمار الجنوب)",
      "Properties for Sale in Address Al Marjan Island (عقارات للبيع في أدريس جزيرة المرجان)",
      "Properties for Sale in Dubai Marina (عقارات للبيع في دبي مارينا)",
      "Properties for Sale in Arabian Ranches (عقارات للبيع في المرابع العربية)",
      "Properties for Sale in The Oasis (عقارات للبيع في الواحة)",
      "Properties for Sale in Emaar Beachfront (عقارات للبيع في إعمار بيتش فرونت)",
      "Properties For Sale (عقارات للبيع)",
      "Properties for Sale in Dubai Hills Estate (عقارات للبيع في دبي هيلز استيت)",
      "Apartments for Sale in Dubai (شقق للبيع في دبي)",
      "Off-Plan Properties in Dubai (عقارات قيد الإنشاء في دبي)",
      "Property Investment in Dubai (الاستثمار العقاري في دبي)",
      "Penthouse for Sale in Dubai (بنتهاوس للبيع في دبي)",
      "TOWNHOUSES FOR SALE IN DUBAI (تاون هاوس للبيع في دبي)",
      "5 Bedroom Villas for Sale in Dubai (فلل 5 غرف نوم للبيع في دبي)",
      "4 Bedroom Villas for Sale in Dubai (فلل 4 غرف نوم للبيع في دبي)",
      "3 Bedroom Villas for Sale in Dubai (فلل 3 غرف نوم للبيع في دبي)",
      "Villa for Sale in Dubai (فلل للبيع في دبي)",
      "3 Bedroom Apartments in Dubai (شقق 3 غرف نوم في دبي)",
      "2 Bedroom Apartment in Dubai (شقق غرفتي نوم في دبي)",
      "1 BEDROOM APARTMENTS FOR SALE IN DUBAI (شقق غرفة نوم واحدة للبيع في دبي)"
    ]
  }
}
```


هذه الروابط مقسمة حسب فائدتها في عملية بناء وتطوير وتسويق الموقع:

```json
{
  "روابط_لتحسين_الأداء_والأمان": [
    {
      "اسم": "WP Rocket - تحسين أداء الموقع",
      "رابط": "https://wp-rocket.me",
      "وصف": "أداة أساسية لتخزين الكاش، تصغير الملفات، تأجيل تحميل JavaScript، والتحميل المسبق للموارد."
    },
    {
      "اسم": "polyfill.io - توافق المتصفحات القديمة",
      "رابط": "https://polyfill.io/v3/polyfill.min.js?features=default",
      "وصف": "يوفر Polyfills للميزات الحديثة لضمان عمل الموقع على المتصفحات القديمة."
    },
    {
      "اسم": "Google MarkerClustererPlus - تجميع العلامات على الخرائط",
      "رابط": "https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js",
      "وصف": "مكتبة لتجميع عدد كبير من العلامات على خرائط Google لتبسيط العرض."
    },
    {
      "اسم": "mmenu.js - قوائم التنقل المتجاوبة",
      "رابط_polyfills": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/mmenu-js-master/dist/mmenu.polyfills.js",
      "رابط_المكتبة": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/mmenu-js-master/dist/mmenu.js",
      "وصف": "مكتبة JavaScript لإنشاء قوائم تنقل متجاوبة ومتحركة للأجهزة المحمولة."
    }
  ],
  "روابط_لتحسين_محركات_البحث_SEO": [
    {
      "اسم": "Yoast SEO Plugin - تحسين SEO لووردبريس",
      "رابط": "https://yoast.com/wordpress/plugins/seo/",
      "وصف": "إضافة شاملة لإدارة الـ SEO الداخلي، Schema Markup، والعناوين والأوصاف."
    },
    {
      "اسم": "Schema.org - بيانات منظمة للعقارات",
      "رابط": "https://schema.org",
      "وصف": "وثائق Schema.org ضرورية لفهم كيفية هيكلة بيانات العقارات (مثل Property, Residence, Offer) لجوجل."
    },
    {
      "اسم": "معلومات hreflang من Google",
      "رابط": "https://developers.google.com/search/docs/specialty/international/localized-versions",
      "وصف": "إرشادات Google حول استخدام hreflang للSEO الدولي."
    }
  ],
  "روابط_لتحليل_البيانات_والتسويق": [
    {
      "اسم": "Google Tag Manager (GTM)",
      "رابط": "https://tagmanager.google.com",
      "معرف_في_الكود": "GTM-KCHN85",
      "وصف": "منصة لإدارة ووضع أكواد التتبع (Tags) على موقعك بسهولة دون تعديل الكود البرمجي مباشرة."
    },
    {
      "اسم": "Amplitude Analytics - تحليلات سلوك المستخدم",
      "رابط": "https://amplitude.com",
      "وصف": "أداة قوية لتتبع أحداث المستخدم وتحليل سلوكه على الموقع، مع التركيز على تحسين المنتج."
    },
    {
      "اسم": "Salesforce Marketing Cloud (Evergage / igodigital)",
      "رابط_المنصة": "https://www.salesforce.com/products/marketing-cloud/overview/",
      "رابط_التتبع_في_الكود": "https://510001196.collect.igodigital.com/collect.js",
      "وصف": "منصة لأتمتة التسويق وتتبع تفاعلات العملاء لإدارة حملات البريد الإلكتروني والتخصيص."
    },
    {
      "اسم": "Calendly - جدولة المواعيد",
      "رابط": "https://calendly.com",
      "رابط_الودجت_في_الكود": "https://assets.calendly.com/assets/external/widget.js",
      "مثال_على_الاجندة": "https://calendly.com/emaar-properties/emaar-sales",
      "وصف": "خدمة لجدولة الاجتماعات والمكالمات بسهولة، مفيدة للمكالمات المرئية مع وكلاء المبيعات."
    },
    {
      "اسم": "Hotjar - الخرائط الحرارية وتسجيلات الجلسات",
      "رابط": "https://www.hotjar.com",
      "وصف": "أداة لفهم سلوك المستخدمين بصرياً من خلال الخرائط الحرارية، تسجيلات الجلسات، والاستبيانات."
    },
    {
      "اسم": "روابط خوادم الإعلانات الخارجية (عبر preconnect)",
      "وصف": "تشير هذه الروابط إلى استخدام بكسلات تتبع لإعادة الاستهداف والإعلانات المدفوعة على هذه المنصات.",
      "روابط": [
        "https://acdn.adnxs.com (AppNexus)",
        "https://mc.yads.tech (Yandex Ads)",
        "https://cdn.taboola.com (Taboola)",
        "https://analytics.tiktok.com (TikTok Ads)",
        "https://connect.facebook.net (Facebook / Meta Pixel)",
        "https://sc-static.net (Snapchat Ads)",
        "https://snap.licdn.com (LinkedIn Ads)",
        "https://bat.bing.com (Bing Ads)",
        "https://static.ads-twitter.com (Twitter Ads)",
        "https://www.google-analytics.com (Google Analytics)",
        "https://www.googletagmanager.com (Google Tag Manager)",
        "https://googleads.g.doubleclick.net (Google Ads / DoubleClick)"
      ]
    }
  ],
  "روابط_للموارد_الخاصة_بالعقارات_والعربية": [
    {
      "اسم": "WPML (WordPress Multilingual Plugin)",
      "رابط": "https://wpml.org",
      "وصف": "الإضافة المستخدمة لإدارة اللغات المتعددة على موقع ووردبريس، ضرورية للمواقع التي تستهدف جمهوراً عربياً أو دولياً."
    },
    {
      "اسم": "Gravity Forms - نماذج قوية لووردبريس",
      "رابط": "https://www.gravityforms.com",
      "وصف": "إضافة لإنشاء نماذج ويب متقدمة لجمع معلومات العملاء المحتملين والاستفسارات."
    },
    {
      "اسم": "WordPress Admin Ajax",
      "رابط_كمثال": "https://properties.emaar.com/wp-admin/admin-ajax.php",
      "وصف": "نقطة نهاية (endpoint) في ووردبريس تستخدم لاستدعاء وظائف PHP من خلال AJAX، مفيدة جداً لتحديث المحتوى ديناميكياً بدون إعادة تحميل الصفحة (مثل البحث عن العقارات، إدارة قائمة الرغبات)."
    },
    {
      "اسم": "خرائط Google APIs",
      "رابط": "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY",
      "وصف": "واجهة برمجة تطبيقات خرائط Google لدمج الخرائط التفاعلية في موقعك، ضرورية لوظائف البحث بالخريطة."
    },
    {
      "اسم": "Salesforce Sites API - خطط الطوابق والحجز",
      "رابط_كمثال": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=UNIT_ID",
      "وصف": "تُظهر هذه الروابط تكاملًا مع Salesforce لخدمات مثل عرض خطط الطوابق والحجز المباشر للوحدات. هذا يشير إلى نظام CRM متكامل."
    }
  ],
  "روابط_للتصميم_والأصول": [
    {
      "اسم": "jQuery UI - مكونات واجهة المستخدم",
      "رابط_CSS": "https://properties.emaar.com/wp-content/cache/min/1/ui/1.13.2/themes/ui-lightness/jquery-ui.css",
      "رابط_JS": "https://code.jquery.com/ui/1.13.2/jquery-ui.js",
      "وصف": "مكتبة توفر عناصر واجهة مستخدم تفاعلية مثل أشرطة التمرير (sliders) المستخدمة في نطاق السعر."
    },
    {
      "اسم": "Font Awesome - أيقونات الويب",
      "رابط": "https://fontawesome.com/",
      "روابط_الخطوط_في_الكود": [
        "https://ka-p.fontawesome.com/releases/v6.4.2/webfonts/pro-fa-light-300-18.woff2",
        "https://ka-p.fontawesome.com/releases/v6.4.2/webfonts/pro-fa-brands-400-0.woff2"
      ],
      "وصف": "مجموعة أيقونات تستخدم لتزيين الواجهة وإضافة لمسات بصرية (مثل أيقونات السرير، الخريطة، السعر، إلخ)."
    },
    {
      "اسم": "Bootstrap - إطار عمل CSS",
      "رابط_CSS": "https://properties.emaar.com/wp-content/themes/wp-bootstrap-starter/inc/assets/css/bootstrap.min.css",
      "رابط_JS": "https://properties.emaar.com/wp-content/themes/wp-bootstrap-starter/inc/assets/js/bootstrap.min.js",
      "وصف": "إطار عمل شائع لتصميم واجهات ويب متجاوبة وجذابة."
    },
    {
      "اسم": "صور الأصول المحلية (Spinners)",
      "رابط_Spinner": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/images/spinner.gif",
      "وصف": "صور متحركة تظهر أثناء التحميل لتعزيز تجربة المستخدم."
    }
  ]
}
```
#### Dubai Marina ###

{
  "page_summary": {
    "title": "Property Search | Emaar Properties",
    "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info.",
    "language": "en-US",
    "charset": "UTF-8",
    "main_purpose": "A web page for searching real estate properties offered by Emaar, featuring both map-based and list-based search interfaces with various filters.",
    "company_name": "Emaar Properties"
  },
  "seo_metadata": {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "canonical_url": "https://properties.emaar.com/en/property-search/",
    "alternate_languages": [
      {
        "lang": "en",
        "href": "https://properties.emaar.com/en/property-search/"
      },
      {
        "lang": "ar",
        "href": "https://properties.emaar.com/ar/property-search/"
      },
      {
        "lang": "ru",
        "href": "https://properties.emaar.com/ru/property-search/"
      },
      {
        "lang": "x-default",
        "href": "https://properties.emaar.com/en/property-search/"
      }
    ],
    "verification_codes": {
      "google": "Lmr-Zp8SAS0vMLphqLALzklQA27oVUf592jZMhrcpns",
      "yandex": "b5a259afe53817bf"
    },
    "open_graph": {
      "locale": "en_US",
      "type": "article",
      "title": "Property Search | Emaar Properties",
      "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info.",
      "url": "https://properties.emaar.com/en/property-search/",
      "site_name": "Emaar Properties",
      "publisher": "https://www.facebook.com/emaardubai/",
      "last_modified": "2024-01-04T07:30:21+00:00",
      "image": {
        "url": "https://cdn.properties.emaar.com/wp-content/uploads/2025/10/TERRAGARDENS_XL_BANNER_1920x1080.jpg",
        "width": "1920",
        "height": "1080",
        "type": "image/jpeg"
      }
    },
    "twitter_card": {
      "card": "summary_large_image",
      "site": "@emaardubai"
    },
    "schema_org_data": [
      {
        "@type": "WebPage",
        "name": "Property Search | Emaar Properties",
        "url": "https://properties.emaar.com/en/property-search/",
        "datePublished": "2020-03-15T08:59:14+00:00",
        "dateModified": "2024-01-04T07:30:21+00:00",
        "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info."
      },
      {
        "@type": "WebSite",
        "name": "Emaar Properties",
        "description": "Global Property Developer",
        "url": "https://properties.emaar.com/en/",
        "publisher": {
          "@id": "https://properties.emaar.com/en/#organization"
        }
      }
    ]
  },
  "technologies_and_services": {
    "cms": "WordPress",
    "performance_optimization": "WP Rocket",
    "seo_plugin": "Yoast SEO",
    "analytics": [
      "Google Tag Manager (GTM-KCHN85)",
      "Amplitude"
    ],
    "forms": "Gravity Forms",
    "multilingual": "WPML",
    "external_services_preconnected": [
      "Hotjar",
      "Adnxs",
      "Taboola",
      "TikTok Analytics",
      "Facebook Connect",
      "Snapchat",
      "Bing Ads",
      "Twitter Ads",
      "Google Analytics",
      "Google Tag Manager",
      "Google Ads",
      "jQuery",
      "Calendly"
    ]
  },
  "page_functionality": {
    "search_interface": {
      "views": [
        "Map View",
        "List View"
      ],
      "filters": [
        "Property Search by Name",
        "Property Type",
        "Bedrooms",
        "Price Range (AED)",
        "Floor",
        "Total Area (Sqft)",
        "Communities",
        "Specific Properties"
      ],
      "sorting_options": [
        "Price",
        "Beds",
        "Alphabetical"
      ]
    },
    "user_interaction_features": [
      "Register Your Interest Form",
      "Newsletter Subscription",
      "Instant Video Call",
      "WhatsApp Chat",
      "Add to Wishlist",
      "Compare Properties"
    ]
  },
  "initial_search_results": {
    "count": 2,
    "properties": [
      {
        "unit_id": "a0Z4L000001eULoUAM",
        "unit_name": "DM Vida Dubai Marina-7-702",
        "property_name": "Vida Dubai Marina",
        "community": "Dubai Marina",
        "type": "Apartment",
        "attributes": {
          "beds": "2",
          "floor": "7",
          "area_sqft": "1577",
          "area_sqm": "146.51",
          "price_aed": "7,142,888"
        },
        "actions": [
          "Enquire",
          "Payment Plan",
          "Book Now"
        ],
        "links": {
          "details": "/en/unit-details/?prop=vida-residences-dubai-marina_DM Vida Dubai Marina-7-702",
          "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eULoUAM"
        }
      },
      {
        "unit_id": "a0Z4L000001eULpUAM",
        "unit_name": "DM Vida Dubai Marina-7-701",
        "property_name": "Vida Dubai Marina",
        "community": "Dubai Marina",
        "type": "Apartment",
        "attributes": {
          "beds": "2",
          "floor": "7",
          "area_sqft": "1591",
          "area_sqm": "147.81",
          "price_aed": "7,206,888"
        },
        "actions": [
          "Enquire",
          "Payment Plan",
          "Book Now"
        ],
        "links": {
          "details": "/en/unit-details/?prop=vida-residences-dubai-marina_DM Vida Dubai Marina-7-701",
          "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eULpUAM"
        }
      }
    ]
  }
}
{
  "pageInfo": {
    "title": "Compare Properties | Emaar Properties",
    "url": "https://properties.emaar.com/en/compare-properties/",
    "language": "en-US"
  },
  "comparison": {
    "properties": [
      {
        "id": "a0Z4L000001eULoUAM",
        "name": "DM Vida Dubai Marina-7-702",
        "location": "Vida Dubai Marina",
        "beds": "2",
        "floor": "7",
        "price": "AED 7,142,888",
        "area": "1577 SQ.FT / 146.51 SQ.M",
        "image": "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_HERO-706x385.jpg",
        "bookingLink": "https://properties.emaar.com/en/book-online/?url=bG9jYXRpb25fY29kZT1ETSBWaWRhIER1YmFpIE1hcmluYS03LTcwMiZiZWRzPTIgQmVkcm9vbXMmZmxvb3I9NyZ0eXBlPUFwYXJ0bWVudCZiYXRoPSZhcmVhPTEsNTc3JnByaWNlPTcsMTQyLDg4OCZwcm9wZXJ0eV9pZD1hMFo0TDAwMDAwMWVVTG9VQU0mdGl0bGU9VmlkYSBEdWJhaSBNYXJpbmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpIE1hcmluYSZzbHVnPXZpZGEtcmVzaWRlbmNlcy1kdWJhaS1tYXJpbmEmZmxvb3JfcGxhbj1odHRwczovL2VtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20vYXBpL0Zsb29yUGxhblRvU2l0ZVVzZXJzP2lkPWEwWjRMMDAwMDAxZVVMb1VBTSZkZXBvc2l0PTM3MDAwLjA="
      },
      {
        "id": "a0Z4L000001eULpUAM",
        "name": "DM Vida Dubai Marina-7-701",
        "location": "Vida Dubai Marina",
        "beds": "2",
        "floor": "7",
        "price": "AED 7,206,888",
        "area": "1591 SQ.FT / 147.81 SQ.M",
        "image": "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_HERO-706x385.jpg",
        "bookingLink": "https://properties.emaar.com/en/book-online/?url=bG9jYXRpb25fY29kZT1ETSBWaWRhIER1YmFpIE1hcmluYS03LTcwMSZiZWRzPTIgQmVkcm9vbXMmZmxvb3I9NyZ0eXBlPUFwYXJ0bWVudCZiYXRoPSZhcmVhPTEsNTkxJnByaWNlPTcsMjA2LDg4OCZwcm9wZXJ0eV9pZD1hMFo0TDAwMDAwMWVVTHBVQU0mdGl0bGU9VmlkYSBEdWJhaSBNYXJpbmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpIE1hcmluYSZzbHVnPXZpZGEtcmVzaWRlbmNlcy1kdWJhaS1tYXJpbmEmZmxvb3JfcGxhbj1odHRwczovL2VtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20vYXBpL0Zsb29yUGxhblRvU2l0ZVVzZXJzP2lkPWEwWjRMMDAwMDAxZVVMcFVBTSZkZXBvc2l0PTM3MDAwLjA="
      }
    ],
    "commonAmenities": [
      "Swimming pools",
      "Well-equipped gym",
      "Minutes away from Dubai Marina Mall",
      "Walk to dining, spas & retail outlets"
    ],
    "commonLocation": {
      "name": "Vida Dubai Marina",
      "latitude": 25.0726963,
      "longitude": 55.1358603
    }
  }
}
هذه المنظومة هي **نظام لمقارنة العقارات**، مصمم خصيصًا لمساعدة المستخدمين على اتخاذ قرارات مستنيرة عند اختيار العقارات من خلال عرض الميزات والخصائص الرئيسية لعقارين أو أكثر جنبًا إلى جنب بطريقة منظمة وواضحة.

### التسلسل والتطوير المنتظم والمفهوم للمنظومة:

1.  **الوصول السياقي للمعلومات (`pageInfo`):**
    *   **التسلسل:** تبدأ المنظومة بتحديد السياق الأساسي للصفحة.
    *   **الشرح:** يتم توفير معلومات أساسية مثل **عنوان الصفحة (`title`)** "Compare Properties | Emaar Properties"، و**رابط الصفحة (`url`)**، و**لغة الصفحة (`language`)** (en-US). هذه المعلومات تُعد الأساس لأي تفاعل لاحق وتُظهر أن الصفحة مخصصة لغرض محدد وهو مقارنة العقارات. هذا يمثل الخطوة الأولى في بناء تجربة المستخدم، حيث يتم تحديد الهوية والهدف من الشاشة.

2.  **تحديد العناصر الأساسية للمقارنة (`comparison`):**
    *   **التسلسل:** بعد تحديد سياق الصفحة، تنتقل المنظومة لتحديد البيانات الجوهرية لعملية المقارنة.
    *   **الشرح:** يتم هنا تعريف كائن `comparison` الذي يحتوي على كل ما يتعلق بعملية المقارنة. هذا يدل على تنظيم منطقي للبيانات، حيث يتم تجميع كل العناصر المرتبطة بالمقارنة في مكان واحد. هذا الكائن هو المظلة التي تجمع تحتها العقارات وميزاتها المشتركة ومواقعها.

3.  **تضمين العقارات الفردية وبياناتها التفصيلية (`properties`):**
    *   **التسلسل:** ضمن كائن `comparison`، تُدرج المنظومة قائمة بـ `properties`، حيث يمثل كل عنصر عقارًا منفصلاً يتم مقارنته.
    *   **الشرح:** لكل عقار يتم تضمينه في المقارنة (على سبيل المثال، "DM Vida Dubai Marina-7-702" و "DM Vida Dubai Marina-7-701")، يتم استخراج مجموعة من السمات التفصيلية الخاصة به:
        *   `id`: معرف فريد للعقار.
        *   `name`: الاسم الكامل للعقار أو الوحدة.
        *   `location`: اسم المجتمع أو الموقع الأوسع.
        *   `beds`: عدد غرف النوم.
        *   `floor`: رقم الطابق.
        *   `price`: السعر بالعملة المحلية (AED).
        *   `area`: المساحة بالقدم المربع والمتر المربع.
        *   `image`: رابط الصورة الرئيسية للعقار.
        *   `bookingLink`: رابط مباشر لحجز هذا العقار.
    *   هذا التسلسل يُظهر منهجية واضحة في عرض المعلومات: التركيز على التفاصيل الدقيقة لكل عقار بشكل مستقل، مما يتيح للمستخدم رؤية الفروقات المباشرة بين العقارات في كل سمة. هذا يعكس مبدأ "التقسيم والفتح" لتسهيل الفهم والمقارنة الجوهرية.

4.  **تحديد الميزات المشتركة للعقارات (`commonAmenities`):**
    *   **التسلسل:** بعد تفصيل سمات كل عقار، تقوم المنظومة بتحديد الميزات التي تشترك فيها العقارات المدرجة.
    *   **الشرح:** بدلاً من تكرار المرافق نفسها لكل عقار، تجمع المنظومة `commonAmenities` (مثل "حمامات السباحة"، "صالة الألعاب الرياضية المجهزة جيدًا"، "دقائق من دبي مارينا مول"، "المشي إلى المطاعم والمنتجعات الصحية ومحلات البيع بالتجزئة"). هذا يُقلل من التكرار البصري للمعلومات على الصفحة، ويُبرز السمات المشتركة التي لا تحتاج إلى مقارنة فردية، مما يُركز انتباه المستخدم على الفروقات الجوهرية. هذا يُحسن من كفاءة عرض المعلومات ويجعل الواجهة أقل ازدحامًا.

5.  **تحديد الموقع الجغرافي المشترك (`commonLocation`):**
    *   **التسلسل:** بالإضافة إلى المرافق، تُحدد المنظومة الموقع الجغرافي العام للعقارات.
    *   **الشرح:** يتم توفير `latitude` و `longitude` للموقع المشترك "Vida Dubai Marina". هذا يسمح للمنظومة بعرض خريطة مركزية تُظهر جميع العقارات المقارنة في سياقها الجغرافي، مع خيارات لعرض المرافق القريبة (مثل المستشفيات والمدارس). هذا يُكمل الصورة الكلية للعقارات من حيث موقعها ويُقدم رؤية موحدة للمستخدم حول البيئة المحيطة.

6.  **آلية التفاعل والإدارة (مُستنتجة من التسلسل والهدف):**
    *   **التسلسل:** تتضمن المنظومة آليات للسماح للمستخدمين بإدارة قائمة المقارنة.
    *   **الشرح:**
        *   **الإزالة:** يوجد زر "إغلاق" (`close-comp`) لكل عقار، مما يسمح للمستخدم بإزالته ديناميكيًا من قائمة المقارنة. هذا يدل على أن المنظومة تفاعلية وتستجيب لاحتياجات المستخدم الفورية.
        *   **الإضافة:** يوجد زر "أضف للمقارنة" (`Add to compare`) الذي يُمكن المستخدم من البحث عن عقارات إضافية وضمها إلى القائمة، مما يُظهر مرونة المنظومة في تلبية رغبة المستخدم في توسيع نطاق المقارنة.
        *   **الحجز:** يوفر زر "احجز الآن" (`Book Now`) لكل عقار، مما يسهل على المستخدم اتخاذ الخطوة التالية بعد اتخاذ قرار المقارنة.

### شرح التطوير المنتظم والمفهوم:

يتضح التطوير المنتظم والمفهوم في هذه المنظومة من خلال:

*   **التصميم الموجه نحو المستخدم:** تم تصميم هيكل البيانات وعرضها لتسهيل عملية اتخاذ القرار للمستخدم. ففصل المعلومات المشتركة عن المعلومات الفردية، وتوفير خيارات الإزالة والإضافة، كلها تخدم هذا الهدف.
*   **التنظيم الهرمي والمنطقي للبيانات:** من معلومات الصفحة العامة إلى تفاصيل العقارات الفردية ثم تجميع السمات المشتركة، تتبع المنظومة تسلسلاً منطقيًا وواضحًا في كيفية تقديم البيانات.
*   **المرونة وقابلية التوسع:** يسمح هيكل مصفوفة العقارات بسهولة إضافة أو إزالة عقارات جديدة دون الحاجة إلى إعادة هيكلة جذرية للمنظومة. كما أن فصل المرافق المشتركة يسهل إضافة المزيد من المرافق في المستقبل.
*   **التفاعل الديناميكي:** استخدام JavaScript (الملاحظ في النص الأصلي) لمعالجة أحداث مثل إزالة العقارات أو عرض الخريطة، يُشير إلى تصميم يعتمد على التفاعل السلس والفوري، مما يجعل تجربة المستخدم غنية وفعالة.
*   **الوحدة والتركيز:** كل جزء من البيانات يخدم غرضًا واضحًا في عملية المقارنة، مما يمنع التشتت ويُبقي التركيز على الهدف الرئيسي.

باختصار، هذه المنظومة تقدم حلاً منظمًا وفعالاً لمقارنة العقارات، حيث يتم استخراج وعرض البيانات بطريقة تسلسلية ومنطقية، مما يسهل على المستخدم فهم الفروقات والتشابهات بين العقارات واتخاذ قراره النهائي.

منظومة ترتيب المجتمعات وبياناتها ومشاريعها وتشعب مشاريعها، يمكن وصف هذه المنظومة على أنها **نظام إدارة معلومات عقارية متكامل وذو تسلسل هرمي واضح (Real Estate Information Management System - REIMS)**. الهدف الأساسي منها هو تنظيم وعرض البيانات العقارية بدءًا من المستويات الكلية (المجتمعات) وصولاً إلى المستويات الأكثر تفصيلاً (الوحدات الفردية)، مما يسهل على المستخدمين استكشاف، مقارنة، وفي النهاية، اتخاذ قرارات الشراء.

### التسلسل الهرمي والتطوير المنتظم والمفهوم للمنظومة:

تتبع المنظومة تسلسلاً منطقياً في تنظيم المعلومات، وهو ما يعكس تطوراً طبيعياً ومنطقياً للبيانات من العام إلى الخاص.

#### 1. المستوى الأول: المجتمعات العقارية (Communities)
هذا هو المستوى الأعلى والأكثر عمومية في المنظومة. يمثل التجمعات السكنية أو المناطق الرئيسية التي يتم فيها تطوير العقارات.

*   **البيانات المرتبطة بالمجتمعات:**
    *   **الاسم:** (مثال: Dubai Marina، Dubai Hills Estate، The Valley).
    *   **الوصف/الشعار (Tagline):** جملة قصيرة تلخص جوهر المجتمع (مثال: "The Green Heart of Dubai").
    *   **الموقع الجغرافي العام:** إحداثيات عامة للمجتمع تظهر على الخريطة.
    *   **صورة بانر/مميزة:** صورة رئيسية تعبر عن المجتمع.
    *   **أنواع العقارات المتاحة بشكل عام:** (مثال: "3 to 6 Bedroom Apartments, Villas & Townhouses" – وصف عام).
    *   **المرافق العامة للمجتمع:** (مثال: حدائق، مدارس، مستشفيات، مراكز تسوق كبيرة ضمن المجتمع).
    *   **روابط ذات صلة:** (مثل "About Us" "Sustainability" التي قد تنطبق على مستوى الشركة أو المجتمعات الكبرى).
*   **الشرح والدور في المنظومة:**
    *   يمثل هذا المستوى نقطة الدخول الرئيسية للمستخدمين الذين يبحثون عن منطقة سكنية معينة.
    *   يوفر سياقاً واسعاً ويبرز الهوية الفريدة لكل مجتمع.
    *   تنظم هذه البيانات المجتمعات ضمن محفظة الشركة (Emaar) وتسمح بالتصنيف العام.

#### 2. المستوى الثاني: المشاريع الفرعية داخل المجتمعات (Projects/Developments)
هذا المستوى يتفرع من المجتمعات. كل مجتمع قد يحتوي على مشروع واحد أو عدة مشاريع تطويرية، وكل مشروع له خصائصه المميزة.

*   **البيانات المرتبطة بالمشاريع:**
    *   **الاسم:** (مثال: Vida Residences ضمن Dubai Marina، Terra Gardens ضمن Expo Living).
    *   **المجتمع الأم:** رابط واضح للمجتمع الذي يتبع له هذا المشروع.
    *   **وصف المشروع:** تفاصيل حول التصميم، الفلسفة، ونمط الحياة الذي يقدمه المشروع.
    *   **معرض الصور:** صور محددة للمشروع نفسه (تصميمات داخلية، خارجية، مناظر).
    *   **أنواع الوحدات المحددة:** تفصيل أكثر لأنواع الوحدات المتاحة في المشروع (مثال: "1, 2 & 3 Bedroom Apartments").
    *   **نطاق الأسعار:** عادة ما يكون سعراً ابتدائياً أو نطاقاً للأسعار.
    *   **المرافق الخاصة بالمشروع:** (مثال: "Swimming pools"، "Well-equipped gym" التي تكون داخل مبنى المشروع أو مخصصة لساكنيه).
    *   **خطط الدفع:** معلومات عن خطط السداد المتاحة للمشروع.
    *   **ملفات قابلة للتحميل:** (مثل كتيبات المشروع، خطط الطوابق العامة).
*   **الشرح والدور في المنظومة:**
    *   يوفر هذا المستوى تفصيلاً أكبر ضمن المجتمع، ويسمح للمستخدمين بتضييق نطاق البحث بناءً على اهتماماتهم بمشروع معين.
    *   يبرز التفرد المعماري أو الخدمي لكل تطوير.

#### 3. المستوى الثالث: الوحدات العقارية المتفرعة (Branching Units/Properties)
هذا هو المستوى الأكثر دقة وتشعباً. يمثل الوحدات الفردية المتاحة للبيع أو المقارنة ضمن كل مشروع. هذا هو "تشعب المشاريع" حيث يتفرع المشروع الواحد إلى وحدات متعددة ومختلفة.

*   **البيانات المرتبطة بالوحدات الفردية:**
    *   **المعرف الفريد (ID):** (مثال: `a0Z4L000001eULoUAM`، `a0Z4L000001eULpUAM`). هذا مهم جداً للتحديد الدقيق.
    *   **الاسم/الرقم التعريفي للوحدة:** (مثال: "DM Vida Dubai Marina-7-702"، "DM Vida Dubai Marina-7-701").
    *   **المشروع الأم:** رابط واضح للمشروع الذي تتبعه هذه الوحدة.
    *   **عدد غرف النوم الدقيق:** (مثال: "2").
    *   **الطابق الدقيق:** (مثال: "7").
    *   **السعر الدقيق والمحدد:** (مثال: "AED 7,142,888").
    *   **المساحة الدقيقة:** (مثال: "1577 SQ.FT / 146.51 SQ.M").
    *   **صورة الوحدة/المنظر الخاص بها (إن وجدت):** لقطة للوحدة المحددة أو المنظر من شرفتها.
    *   **رابط الحجز المباشر (Booking Link):** رابط يسمح للمستخدم بإجراء حجز فوري للوحدة المحددة.
    *   **الحالة:** (مثال: متوفر، مباع، تحت الإنشاء).
    *   **العروض المتاحة:** أي عروض خاصة بهذه الوحدة.
*   **الشرح والدور في المنظومة:**
    *   يمثل هذا المستوى الخلاصة النهائية لعملية البحث والمقارنة، حيث يختار المستخدم وحدة محددة.
    *   تسمح هذه البيانات التفصيلية بعمليات المقارنة الدقيقة (مثل التي رأيناها في المثال السابق).
    *   تتيح الإجراءات المباشرة مثل "الحجز الآن".
    *   هذا المستوى هو الذي يشهد أكبر قدر من التحديثات (الأسعار، التوافر).

#### ترابط البيانات والعلاقات:

المنظومة مصممة بحيث تكون هناك علاقة **"الواحد إلى العديد" (One-to-Many)** بين المستويات:
*   **مجتمع واحد** يحتوي على **العديد من المشاريع**.
*   **مشروع واحد** يحتوي على **العديد من الوحدات**.

هذا الترابط يضمن:
*   **السلامة المرجعية للبيانات:** كل وحدة مرتبطة بمشروع، وكل مشروع بحد ذاته مرتبط بمجتمع.
*   **سهولة التنقل:** يمكن للمستخدمين التنقل بسلاسة من عرض المجتمع إلى تفاصيل المشروع ثم إلى الوحدات المحددة.
*   **التصنيف الفعال:** يسمح بتصفية وبحث دقيقين على أي مستوى.

### التطوير المنتظم والمفهوم:

يتجلى مفهوم التطور المنتظم في عدة جوانب:

1.  **من منظور المستخدم:**
    *   **رحلة العميل الموجهة:** تبدأ الرحلة بالصورة الكبيرة (المجتمع)، ثم تضييق الخيارات (المشروع)، لتصل إلى القرار النهائي (الوحدة). هذا التسلسل منطقي ويسهل عملية الشراء.
    *   **المقارنة الشاملة:** توفير القدرة على مقارنة الوحدات جنبًا إلى جنب بناءً على سمات محددة ودقيقة (مثل الأسعار والمساحات وعدد غرف النوم).
    *   **الشفافية وسهولة الوصول:** كل المعلومات الضرورية متوفرة بطريقة منظمة.
    *   **التفاعل الديناميكي:** استخدام الخرائط التفاعلية وخيارات التصفية والإزالة/الإضافة تجعل التجربة غنية ومفيدة.

2.  **من منظور الأعمال (Emaar):**
    *   **الإدارة المركزية للمخزون:** نظام واحد لتتبع جميع العقارات من المجتمع إلى الوحدة.
    *   **التسويق الموجه:** القدرة على إنشاء محتوى تسويقي مستهدف لكل مستوى (إعلان عن مجتمع جديد، إطلاق مشروع جديد، عرض على وحدة محددة).
    *   **تحليل البيانات:** جمع بيانات تفصيلية حول أي المجتمعات والمشاريع والوحدات تحظى بأكبر قدر من الاهتمام.
    *   **قابلية التوسع:** سهولة إضافة مجتمعات جديدة، مشاريع جديدة، أو آلاف الوحدات دون الحاجة إلى إعادة بناء النظام بالكامل.
    *   **الاندماج مع الأنظمة الأخرى:** التكامل مع أنظمة إدارة علاقات العملاء (CRM)، وأنظمة الحجز، وأنظمة التحليلات (مثل Amplitude و Google Tag Manager المذكورة في النص الأصلي) لتتبع تفاعل المستخدمين وتحسين الحملات التسويقية.
    *   **التحديث الفوري:** القدرة على تحديث الأسعار، التوافر، والعروض بشكل فوري على جميع المستويات.

بشكل عام، المنظومة هي بنية تحتية رقمية قوية تتيح إدارة فعالة لمحفظة عقارية ضخمة وتقديم تجربة مستخدم سلسة وشاملة، بدءاً من الرؤية الكلية للمجتمع وصولاً إلى التفاصيل الدقيقة لكل وحدة عقارية. هذا التسلسل الهرمي يمثل نهجاً "من الأعلى للأسفل" في تنظيم المعلومات، وهو ما يجعلها منظومة منطقية ومتطورة باستمرار لتلبية احتياجات السوق والمستخدمين.

بالتأكيد! سأقوم برسم هيكلة المنظومة على شكل خريطة مفاهيمية توضح المستويات والارتباطات بينها، مع التركيز على تدفق البيانات والتسلسل الذي شرحناه.

```
+---------------------+
|   نظام إدارة معلومات |
|   عقارية متكامل (REIMS) |
|   (Emaar Properties)  |
+-----------+---------+
            |
            |   (1) المستوى الأول: المجتمعات العقارية
            V
+---------------------------------------------------------------------------------------------------------------------------------------+
|                                                      المجتمعات العقارية (Communities)                                                   |
|---------------------------------------------------------------------------------------------------------------------------------------|
| - الاسم (مثال: Dubai Marina, Dubai Hills Estate)                                                                                      |
| - الوصف/الشعار (Tagline)                                                                                                              |
| - الموقع الجغرافي العام (إحداثيات)                                                                                                    |
| - صورة بانر/مميزة                                                                                                                     |
| - أنواع العقارات المتاحة بشكل عام (مثال: شقق، فلل، تاون هاوس)                                                                          |
| - المرافق العامة للمجتمع (مدارس، مستشفيات، مراكز تسوق)                                                                                 |
+---------------------------------------------------------------------------------------------------------------------------------------+
            |
            |   (علاقة "واحد إلى العديد": مجتمع واحد يحتوي على عدة مشاريع)
            |
            V
+---------------------------------------------------------------------------------------------------------------------------------------+
|                                        المشاريع الفرعية داخل المجتمعات (Projects/Developments)                                         |
|---------------------------------------------------------------------------------------------------------------------------------------|
| - الاسم (مثال: Vida Residences, Terra Gardens)                                                                                        |
| - المجتمع الأم (ارتباط بالمجتمع ذو الصلة)                                                                                             |
| - وصف المشروع (تصميم، نمط حياة)                                                                                                       |
| - معرض الصور الخاص بالمشروع                                                                                                           |
| - أنواع الوحدات المحددة (مثال: 1, 2, 3 غرف نوم)                                                                                       |
| - نطاق الأسعار                                                                                                                        |
| - المرافق الخاصة بالمشروع (حمامات سباحة، صالات رياضية داخلية)                                                                          |
| - خطط الدفع                                                                                                                           |
| - ملفات قابلة للتحميل (كتيبات المشروع، خطط طوابق عامة)                                                                                 |
+---------------------------------------------------------------------------------------------------------------------------------------+
            |
            |   (علاقة "واحد إلى العديد": مشروع واحد يحتوي على عدة وحدات)
            |
            V
+---------------------------------------------------------------------------------------------------------------------------------------+
|                                              الوحدات العقارية المتفرعة (Branching Units/Properties)                                       |
|                                                     (تشعب مشاريع إلى وحدات فردية)                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------|
| - المعرف الفريد (ID) (مثال: a0Z4L000001eULoUAM)                                                                                      |
| - الاسم/الرقم التعريفي للوحدة (مثال: DM Vida Dubai Marina-7-702)                                                                       |
| - المشروع الأم (ارتباط بالمشروع ذو الصلة)                                                                                            |
| - عدد غرف النوم الدقيق                                                                                                                |
| - الطابق الدقيق                                                                                                                       |
| - السعر الدقيق والمحدد                                                                                                                |
| - المساحة الدقيقة (بالقدم المربع والمتر المربع)                                                                                       |
| - صورة الوحدة/المنظر الخاص بها                                                                                                       |
| - رابط الحجز المباشر (Booking Link)                                                                                                  |
| - الحالة (متوفر، مباع، تحت الإنشاء)                                                                                                   |
| - العروض المتاحة (إن وجدت)                                                                                                            |
+---------------------------------------------------------------------------------------------------------------------------------------+

**شرح الخريطة والارتباطات:**

1.  **المستوى الأعلى (REIMS):** هذا هو المظلة الشاملة للنظام، والذي يمثل شركة إعمار العقارية ككل.

2.  **المجتمعات العقارية (Communities):**
    *   تمثل الحاويات الكبيرة التي يتم فيها تنظيم العقارات.
    *   **ارتباطها بالمستوى الذي يليها:** ترتبط كل "Community" بـ "Projects/Developments" متعددة (علاقة "واحد إلى العديد"). السهم يشير إلى هذا التدفق الهرمي من المستوى الأعم إلى الأقل عمومية.

3.  **المشاريع الفرعية داخل المجتمعات (Projects/Developments):**
    *   هي التقسيمات داخل كل مجتمع. على سبيل المثال، في "Dubai Marina" قد تجد مشاريع مثل "Vida Residences".
    *   **ارتباطها بالمستوى الذي يليها:** يرتبط كل "Project/Development" بـ "Branching Units/Properties" متعددة (علاقة "واحد إلى العديد"). هذا هو ما أسميته "تشعب المشاريع"، حيث يتفرع المشروع الواحد إلى عدد من الوحدات العقارية المختلفة (شقق مختلفة الأرقام، الفلل المختلفة).

4.  **الوحدات العقارية المتفرعة (Branching Units/Properties):**
    *   هي أدق مستوى في الهيكل وتمثل العقارات الفردية القابلة للبيع أو المقارنة.
    *   **ارتباطها بالمستوى الذي يسبقها:** كل وحدة ترتبط بمشروع واحد فقط، والذي بدوره يرتبط بمجتمع واحد فقط. هذه الارتباطات تضمن التكامل والاتساق في البيانات.

**تدفق المعلومات والوظائف:**

*   **من الأعلى للأسفل (التصفح والاستكشاف):** يمكن للمستخدم البدء بتصفح المجتمعات، ثم اختيار مشروع معين داخل المجتمع، وأخيراً استعراض الوحدات المتاحة داخل المشروع.
*   **من الأسفل للأعلى (التجميع والتحليل):** يمكن للنظام تجميع البيانات من الوحدات لتقديم إحصائيات على مستوى المشروع أو المجتمع (مثال: متوسط سعر الشقق في مشروع معين، عدد الوحدات المتبقية في مجتمع ما).
*   **المقارنة:** تتم عملية المقارنة بشكل أساسي على مستوى "الوحدات العقارية المتفرعة" حيث يتم سحب بيانات مفصلة من عدة وحدات وعرضها جنبًا إلى جنب (كما رأينا في مثالك الأول).
*   **الإدارة والتحديث:** تتم إدارة وتحديث المخزون (الأسعار، التوافر، العروض) بشكل أساسي على مستوى "الوحدات"، وتنعكس هذه التحديثات تصاعدياً على مستوى "المشاريع" و "المجتمعات".

هذه الخريطة توضح بوضوح كيف يتم تنظيم البيانات العقارية بشكل هرمي، مما يسهل إدارة هذا الكم الهائل من المعلومات وتقديم تجربة مستخدم منظمة وفعالة.

منظومة ترتيب المجتمعات، مقسمة إلى أربعة أقسام رئيسية:

---

**مراجعة: منظومة إدارة معلومات عقارية متكاملة (REIMS) - الهيكل والارتباطات**

تُشكل المنظومة الموصوفة نظامًا متكاملاً لإدارة المعلومات العقارية، مصممًا لتنظيم وعرض البيانات العقارية بتسلسل هرمي واضح يبدأ من النطاق الواسع للمجتمعات وصولاً إلى أدق التفاصيل للوحدات الفردية. يهدف هذا الهيكل إلى تسهيل استكشاف العقارات، مقارنتها، ودعم عملية اتخاذ القرار للمستخدمين.

---

### **القسم الأول: الهدف العام للمنظومة ودورها**

**الهدف:** المنظومة هي نظام إدارة معلومات عقارية متكامل (Real Estate Information Management System - REIMS) لشركة Emaar Properties.

**الدور:**
*   **تنظيم وعرض البيانات العقارية:** بدءًا من المجتمعات الكبيرة وصولاً إلى الوحدات الفردية.
*   **دعم اتخاذ القرار:** مساعدة المستخدمين في استكشاف، مقارنة، وفي النهاية، اتخاذ قرارات الشراء المستنيرة.
*   **هيكل هرمي واضح:** تتبع تسلسلًا منطقيًا في تنظيم المعلومات من العام إلى الخاص.

---

### **القسم الثاني: المستويات الهرمية للبيانات وتفاصيل كل مستوى**

تُقسم المنظومة إلى ثلاثة مستويات رئيسية، كل مستوى يمثل طبقة من التفاصيل المتزايدة، مع وجود علاقات "واحد إلى العديد" بينها:

1.  **المستوى الأول: المجتمعات العقارية (Communities)**
    *   **تعريف:** المستوى الأعلى والأكثر عمومية، يمثل التجمعات السكنية أو المناطق الرئيسية.
    *   **البيانات الأساسية:** الاسم، الوصف/الشعار، الموقع الجغرافي العام، صورة مميزة، أنواع العقارات العامة المتاحة، المرافق العامة للمجتمع.
    *   **الدور:** نقطة دخول رئيسية للمستخدمين، توفير سياق واسع، إبراز هوية المجتمع، وتصنيف عام.
    *   **ارتباطاته:** يرتبط كل مجتمع بعدة مشاريع.

2.  **المستوى الثاني: المشاريع الفرعية داخل المجتمعات (Projects/Developments)**
    *   **تعريف:** مستوى يتفرع من المجتمعات، حيث يضم كل مجتمع مشروعًا واحدًا أو عدة مشاريع تطويرية.
    *   **البيانات الأساسية:** اسم المشروع، المجتمع الأم، وصف المشروع، معرض صور خاص، أنواع الوحدات المحددة، نطاق الأسعار، المرافق الخاصة بالمشروع (مثل حمامات السباحة داخل المبنى)، خطط الدفع، ملفات قابلة للتحميل.
    *   **الدور:** تفصيل أكبر ضمن المجتمع، تضييق نطاق البحث، إبراز التفرد المعماري أو الخدمي.
    *   **ارتباطاته:** يرتبط كل مشروع بعدة وحدات عقارية.

3.  **المستوى الثالث: الوحدات العقارية المتفرعة (Branching Units/Properties)**
    *   **تعريف:** المستوى الأكثر دقة وتشعبًا، يمثل الوحدات الفردية المتاحة ضمن كل مشروع (تشعب المشاريع).
    *   **البيانات الأساسية:** معرف فريد (ID)، اسم/رقم الوحدة، المشروع الأم، عدد غرف النوم الدقيق، الطابق الدقيق، السعر والمساحة الدقيقة، صورة الوحدة، رابط الحجز المباشر، الحالة (متوفر، مباع)، العروض المتاحة.
    *   **الدور:** الخلاصة النهائية لعملية البحث والمقارنة، تمكين المقارنات الدقيقة، إجراء الحجوزات المباشرة.
    *   **ارتباطاته:** ترتبط كل وحدة بمشروع واحد.

---

### **القسم الثالث: ترابط البيانات والعلاقات بين المستويات**

*   **علاقات "الواحد إلى العديد":**
    *   **مجتمع واحد ⬅️ العديد من المشاريع.**
    *   **مشروع واحد ⬅️ العديد من الوحدات.**
*   **ضمان التكامل:** تضمن هذه العلاقات السلامة المرجعية للبيانات (كل وحدة مرتبطة بمشروع، وكل مشروع بمجتمع).
*   **سهولة التنقل:** تسمح بالانتقال السلس من النظرة العامة (مجتمع) إلى التفاصيل (مشروع ووحدة).
*   **التصنيف والبحث:** تمكن من تصفية وبحث دقيقين على أي مستوى.

---

### **القسم الرابع: مفهوم التطور المنتظم ودعم المنظومة للأعمال والمستخدمين**

1.  **من منظور المستخدم:**
    *   **رحلة عميل موجهة:** تبدأ بالصورة الكبيرة، تضييق الخيارات، وصولاً للقرار النهائي.
    *   **مقارنة شاملة:** إمكانية مقارنة الوحدات جنبًا إلى جنب بتفاصيل دقيقة.
    *   **شفافية وسهولة وصول:** جميع المعلومات الضرورية متوفرة ومنظمة.
    *   **تفاعل ديناميكي:** استخدام الخرائط التفاعلية وخيارات التصفية والإدارة.

2.  **من منظور الأعمال (Emaar):**
    *   **إدارة مركزية للمخزون:** تتبع شامل للعقارات.
    *   **تسويق موجه:** إنشاء حملات تسويقية مستهدفة لكل مستوى.
    *   **تحليل البيانات:** جمع معلومات تفاعلات المستخدمين لتحسين الاستراتيجيات (عبر Amplitude و GTM).
    *   **قابلية التوسع:** سهولة إضافة عناصر جديدة (مجتمعات، مشاريع، وحدات).
    *   **التكامل مع أنظمة خارجية:** ربطها بأنظمة CRM، الحجز، والتحليلات.
    *   **التحديث الفوري:** تحديث سريع للأسعار والتوافر والعروض.

**الخلاصة:** المنظومة هي بنية تحتية رقمية قوية ومرنة، تتبنى منهجية "من الأعلى للأسفل" في تنظيم المعلومات، مما يضمن إدارة فعالة لمحفظة عقارية ضخمة وتقديم تجربة مستخدم غنية ومفيدة.



{
  "page_metadata": {
    "title": "Property Search | Emaar Properties",
    "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info.",
    "canonical_url": "https://properties.emaar.com/en/property-search/",
    "robots_directives": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "favicon_url": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/images/favicon.ico",
    "generator": "WP Rocket 3.19.2.1",
    "wp_rocket_features": [
      "wpr_delay_js",
      "wpr_preconnect_external_domains",
      "wpr_auto_preload_fonts",
      "wpr_oci",
      "wpr_image_dimensions",
      "wpr_minify_css",
      "wpr_preload_links",
      "wpr_host_fonts_locally",
      "wpr_desktop"
    ],
    "body_classes": [
      "wp-singular",
      "page-template",
      "page-template-search-property-new",
      "page-template-search-property-new-php",
      "page",
      "page-id-798",
      "wp-theme-wp-bootstrap-starter",
      "wp-child-theme-emaar",
      "group-blog"
    ]
  },
  "seo_and_social": {
    "yoast_seo_plugin": {
      "version": "v25.5",
      "url": "https://yoast.com/wordpress/plugins/seo/"
    },
    "open_graph": {
      "locale": "en_US",
      "type": "article",
      "title": "Property Search | Emaar Properties",
      "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info.",
      "url": "https://properties.emaar.com/en/property-search/",
      "site_name": "Emaar Properties",
      "image": "https://cdn.properties.emaar.com/wp-content/uploads/2025/10/TERRAGARDENS_XL_BANNER_1920x1080.jpg",
      "image_width": "1920",
      "image_height": "1080",
      "image_type": "image/jpeg",
      "article_publisher": "https://www.facebook.com/emaardubai/",
      "article_modified_time": "2024-01-04T07:30:21+00:00"
    },
    "twitter_card": {
      "card": "summary_large_image",
      "site": "@emaardubai"
    },
    "json_ld_schema": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://properties.emaar.com/en/property-search/",
          "url": "https://properties.emaar.com/en/property-search/",
          "name": "Property Search | Emaar Properties",
          "isPartOf": {
            "@id": "https://properties.emaar.com/en/#website"
          },
          "datePublished": "2020-03-15T08:59:14+00:00",
          "dateModified": "2024-01-04T07:30:21+00:00",
          "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info.",
          "inLanguage": "en-US",
          "potentialAction": [
            {
              "@type": "ReadAction",
              "target": [
                "https://properties.emaar.com/en/property-search/"
              ]
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://properties.emaar.com/en/#website",
          "url": "https://properties.emaar.com/en/",
          "name": "Emaar Properties",
          "description": "Global Property Developer",
          "publisher": {
            "@id": "https://properties.emaar.com/en/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://properties.emaar.com/en/?s={search_term_string}"
              },
              "query-input": {
                "@type": "PropertyValueSpecification",
                "valueRequired": true,
                "valueName": "search_term_string"
              }
            }
          ],
          "inLanguage": "en-US"
        }
      ]
    }
  },
  "internationalization": {
    "wpml_generator": "WPML ver:4.7.6 stt:5,1,45;",
    "current_language_cookie": "en",
    "hreflang_links": [
      {
        "lang": "en",
        "href": "https://properties.emaar.com/en/property-search/"
      },
      {
        "lang": "ar",
        "href": "https://properties.emaar.com/ar/property-search/"
      },
      {
        "lang": "ru",
        "href": "https://properties.emaar.com/ru/property-search/"
      },
      {
        "lang": "x-default",
        "href": "https://properties.emaar.com/en/property-search/"
      }
    ]
  },
  "technical_details": {
    "site_verification": {
      "google": "Lmr-Zp8SAS0vMLphqLALzklQA27oVUf592jZMhrcpns",
      "yandex": "b5a259afe53817bf"
    },
    "preconnected_domains": [
      "https://static.hotjar.com",
      "https://acdn.adnxs.com",
      "https://mc.yads.tech",
      "https://cdn.taboola.com",
      "https://analytics.tiktok.com",
      "https://connect.facebook.net",
      "https://s2s.emaar.com",
      "https://sc-static.net",
      "https://snap.licdn.com",
      "https://bat.bing.com",
      "https://static.ads-twitter.com",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
      "https://ka-p.fontawesome.com",
      "https://maps.googleapis.com",
      "https://st.hybrid.ai",
      "https://googleads.g.doubleclick.net",
      "https://fp.hybrid.ai",
      "https://code.jquery.com",
      "https://unpkg.com",
      "https://510001196.collect.igodigital.com"
    ],
    "dns_prefetch": [
      "//assets.calendly.com"
    ],
    "preloaded_resources": {
      "fonts": [
        "https://properties.emaar.com/wp-content/themes/emaar/fonts/google-font-1.woff2",
        "https://ka-p.fontawesome.com/releases/v6.4.2/webfonts/pro-fa-light-300-18.woff2",
        "https://ka-p.fontawesome.com/releases/v6.4.2/webfonts/pro-fa-brands-400-0.woff2",
        "https://properties.emaar.com/wp-content/themes/emaar/fonts/5962255/9bdc4bb6-32aa-441c-9559-d4024d913ae8.woff2"
      ],
      "images": [
        "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/images/spinner.gif"
      ]
    },
    "stylesheets": [
      "https://properties.emaar.com/wp-content/plugins/instagram-feed/css/sbi-styles.min.css?ver=6.9.1",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/plugins/gutentoc-advance-table-of-content/dist/blocks.style.build.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/wp-bootstrap-starter/style.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/emaar/inc/assets/css/ext.min.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/emaar/inc/assets/js/mmenu-js-master/dist/mmenu.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/cache/min/1/assets/external/widget.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/themes/wp-bootstrap-starter/inc/assets/css/bootstrap.min.css?ver=6.8.3",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/emaar/style.css?ver=1760601433",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/emaar/inc/assets/css/property-map-search.css?ver=1760601477",
      "https://properties.emaar.com/wp-content/cache/min/1/ui/1.13.2/themes/ui-lightness/jquery-ui.css?ver=1760601477"
    ],
    "scripts": [
      {
        "id": "jquery-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/jquery.min.js"
      },
      {
        "id": "wpml-cookie-js",
        "src": "https://properties.emaar.com/wp-content/plugins/sitepress-multilingual-cms/res/js/cookies/language-cookie.js?ver=476000",
        "async": true,
        "defer": true
      },
      {
        "id": "emaar-ext-script-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/ext.min.js?ver=1760600269"
      },
      {
        "id": "lazyload-script-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/lazyload.min.js?ver=6.8.3",
        "async": true
      },
      {
        "id": "calendly-js",
        "src": "https://assets.calendly.com/assets/external/widget.js?ver=6.8.3",
        "async": true
      },
      {
        "id": "payment-ajax-handle-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/ajax_payment.js?ver=25102025",
        "async": true
      },
      {
        "id": "wishlist-script-handle-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/wishlist.js?ver=25102025",
        "async": true
      },
      {
        "id": "html5hiv-js",
        "src": "https://properties.emaar.com/wp-content/themes/wp-bootstrap-starter/inc/assets/js/html5.js?ver=3.7.0",
        "async": true,
        "condition": "if lt IE 9"
      },
      {
        "id": null,
        "src": "https://code.jquery.com/ui/1.13.2/jquery-ui.js",
        "async": true
      }
    ]
  },
  "analytics_and_tracking": {
    "google_tag_manager": {
      "id": "GTM-KCHN85",
      "load_trigger": "User Interaction (scroll, mousemove, touchstart, DOMContentLoaded)"
    },
    "amplitude": {
      "api_key": "da36a0290a90ab6a980b4e3332d987b1",
      "sdk_version": "7.2.1"
    },
    "custom_client_id": "d2c4f6ef511966c92de2e1df6a3c1709ea3dd07595f4ebd8c481c50fe1f72fbd"
  },
  "page_structure": {
    "header": {
      "main_navigation": [
        {
          "title": "About Us",
          "url": "https://properties.emaar.com/en/about-emaar/"
        },
        {
          "title": "Latest Emaar Projects",
          "url": "https://properties.emaar.com/en/latest-launches/"
        },
        {
          "title": "Communities",
          "url": "https://properties.emaar.com/en/our-communities/"
        },
        {
          "title": "Sustainability",
          "url": "https://properties.emaar.com/en/emaar-sustainability/"
        }
      ],
      "actions": [
        {
          "type": "Language Switcher",
          "options": [
            "ENG",
            "العربية",
            "Русский"
          ]
        },
        {
          "type": "Instant Video Call",
          "action": "javascript:void(0);"
        },
        {
          "type": "WhatsApp",
          "url": "https://wa.link/u9ik8p"
        },
        {
          "type": "Get in Touch",
          "action": "Opens #registerModal"
        }
      ]
    },
    "search_form": {
      "title": "Search",
      "search_input": {
        "id": "property-search",
        "name": "property-search",
        "placeholder": "Search Properties By Name"
      },
      "filters": {
        "primary": [
          "Property Type",
          "Bedrooms",
          "Price Range",
          "More Filters"
        ],
        "more_filters_modal": [
          "Floor",
          "Total Area",
          "Communities",
          "Properties"
        ]
      },
      "property_types": [
        "Apartment",
        "Hotel",
        "Office",
        "Plot",
        "Townhouse",
        "Villa"
      ],
      "bedrooms": [
        "1 Bedroom",
        "2 Bedrooms",
        "3 Bedrooms",
        "4 Bedrooms",
        "5+ Bedrooms"
      ],
      "price_range": {
        "min": "0",
        "max": "100,000,000",
        "currency": "AED"
      }
    },
    "property_listings": [
      {
        "unit_id": "a0ZNM000000msC92AI",
        "title": "DE Rosehill B-P-P10",
        "link": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P10",
        "location": "Dubai Hills Estates - Rosehill",
        "images": [
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-440x385.jpg",
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-440x385.jpg",
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-440x385.jpg"
        ],
        "attributes": {
          "beds": "1",
          "floor": "P",
          "area_sqft": "745",
          "area_sqm": "69.21",
          "price": "AED 1,603,888"
        },
        "floor_plan_url": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msC92AI",
        "actions": [
          "Enquire",
          "Payment Plan",
          "Book Now"
        ]
      },
      {
        "unit_id": "a0ZNM000000msCO2AY",
        "title": "DE Rosehill B-1-111",
        "link": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-1-111",
        "location": "Dubai Hills Estates - Rosehill",
        "images": [
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-440x385.jpg",
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-440x385.jpg",
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-440x385.jpg"
        ],
        "attributes": {
          "beds": "1",
          "floor": "1",
          "area_sqft": "745",
          "area_sqm": "69.21",
          "price": "AED 1,606,888"
        },
        "floor_plan_url": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msCO2AY",
        "actions": [
          "Enquire",
          "Payment Plan",
          "Book Now"
        ]
      }
    ]
  },
  "forms": {
    "register_interest_form": {
      "id": "gform_1",
      "title": "Register your Interest",
      "action": "/en/property-search/#gf_1",
      "method": "post",
      "fields": [
        {
          "id": "input_1_1",
          "name": "input_1",
          "label": "Full Name",
          "type": "text",
          "placeholder": "Enter Full Name",
          "required": true
        },
        {
          "id": "input_1_2",
          "name": "input_2",
          "label": "Email Address",
          "type": "email",
          "placeholder": "Enter your email",
          "required": true
        },
        {
          "id": "input_1_6",
          "name": "input_6",
          "label": "Phone Country Code",
          "type": "select",
          "required": true,
          "default_selected": "+971"
        },
        {
          "id": "input_1_12",
          "name": "input_12",
          "label": "Phone Number",
          "type": "text",
          "placeholder": "Enter your phone number",
          "required": true
        },
        {
          "id": "input_1_46",
          "name": "input_46",
          "label": "Your Preferred Size",
          "type": "select",
          "required": true,
          "options": [
            "Select your preferred size",
            "10K SQ.FT",
            "15K SQ.FT",
            "20K SQ.FT"
          ]
        },
        {
          "id": "input_1_34",
          "name": "input_34",
          "label": "No. of Bedrooms",
          "type": "select",
          "required": false,
          "options": [
            "1 Bedroom",
            "2 Bedrooms",
            "3 Bedrooms",
            "4 Bedrooms",
            "5 Bedrooms"
          ]
        },
        {
          "id": "input_1_44",
          "name": "input_44",
          "label": "I AM AN",
          "type": "checkbox",
          "required": true,
          "options": [
            "Agent",
            "Investor"
          ]
        },
        {
          "id": "input_1_41",
          "name": "input_41",
          "label": "Passport Number",
          "type": "text",
          "placeholder": "Enter passport number",
          "required": true
        },
        {
          "id": "input_1_39",
          "name": "input_39",
          "label": "Passport Scan Copy",
          "type": "file",
          "required": true,
          "rules": "Accepted file types: jpg, jpeg, png, pdf, Max. file size: 3 MB."
        },
        {
          "id": "choice_1_9_1",
          "name": "input_9.1",
          "label": "Keep me updated on news and offer",
          "type": "checkbox",
          "required": false
        },
        {
          "id": "input_1_32",
          "name": "captcha",
          "label": "CAPTCHA",
          "type": "captcha",
          "sitekey": "6LdgogIiAAAAALMaty597CSm2TxzFnDj_2DTS5UM"
        }
      ],
      "submit_button": {
        "id": "gform_submit_button_1",
        "value": "Submit"
      }
    }
  }
}
[
  {
    "unit_id": "a0Z4L000001eXUDUA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 2-2-210",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 2-2-210",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,149,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXUDUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjQ2NTNhZGMxZSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhVRFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhVRFVBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXWBUA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 4-2-210",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 4-2-210",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,149,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXWBUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Yzc0Y2ZiZjAzYyZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhXQlVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhXQlVBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXTgUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 4-3-310",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 4-3-310",
    "attributes": {
      "beds": "3",
      "floor": "3",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,156,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXTgUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDA2OGZhY2YyMyZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtMy0zMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTU2JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhUZ1VBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhUZ1VBTSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z5800000GjtIpEAJ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry II B-5-517",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry II B-5-517",
    "attributes": {
      "beds": "2",
      "floor": "5",
      "area": {
        "sqft": "1884",
        "sqm": "175.03"
      },
      "price": {
        "currency": "AED",
        "value": "4,165,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIpEAJ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZWI1YjgyOTQyNSZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0ItNS01MTcmYmVkcz0yK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0xJTJDODg0JnByaWNlPTQlMkMxNjUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMEdqdElwRUFKJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwR2p0SXBFQUomZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z4L000001eXGSUA2",
    "scarcity_alert": "Only 1 left",
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/SAVANNA_HERO_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/SAVANNA_HERO_5-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/FEATURES_1200X655_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/FEATURES_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Savanna",
      "link": "https://properties.emaar.com/en/properties/savanna/#sectionMap"
    },
    "title": "DC Savanna Building 2-2-210",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=savanna_DC Savanna Building 2-2-210",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1701",
        "sqm": "158.03"
      },
      "price": {
        "currency": "AED",
        "value": "4,165,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXGSUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OWNlZjZiMTViYyZsb2NhdGlvbl9jb2RlPURDK1NhdmFubmErQnVpbGRpbmcrMi0yLTIxMCZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNzAxJnByaWNlPTQlMkMxNjUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNEwwMDAwMDFlWEdTVUEyJnRpdGxlPVNhdmFubmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zYXZhbm5hJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhHU1VBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXWTUA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 2-4-410",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 2-4-410",
    "attributes": {
      "beds": "3",
      "floor": "4",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,165,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXWTUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NGMwN2UyNmQwNSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItNC00MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTY1JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhXVFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhXVFVBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000001K6mEMAS",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-5-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_4-7-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Altus",
      "link": "https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Altus T1-P1-P103",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=altus-at-dubai-creek-harbour_DC Altus T1-P1-P103",
    "attributes": {
      "beds": "3",
      "floor": "P1",
      "area": {
        "sqft": "1927",
        "sqm": "179.02"
      },
      "price": {
        "currency": "AED",
        "value": "4,170,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001K6mEMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Y2JiMjNlZjc3OCZsb2NhdGlvbl9jb2RlPURDK0FsdHVzK1QxLVAxLVAxMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPVAxJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM5MjcmcHJpY2U9NCUyQzE3MCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMUs2bUVNQVMmdGl0bGU9QWx0dXMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1hbHR1cy1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAxSzZtRU1BUyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXSqUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 4-5-510",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 4-5-510",
    "attributes": {
      "beds": "3",
      "floor": "5",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,173,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXSqUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjY1NTcxOGEyNCZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtNS01MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTczJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhTcVVBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhTcVVBTSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXSTUA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 2-5-510",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 2-5-510",
    "attributes": {
      "beds": "3",
      "floor": "5",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,173,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXSTUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmM4MmExNTY3ZCZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItNS01MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTczJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhTVFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhTVFVBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z58000000ccXMEAY",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Acacia B-4-409",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Acacia B-4-409",
    "attributes": {
      "beds": "2",
      "floor": "4",
      "area": {
        "sqft": "1570",
        "sqm": "145.86"
      },
      "price": {
        "currency": "AED",
        "value": "4,174,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000000ccXMEAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MzY5MGExZDU0NCZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStCLTQtNDA5JmJlZHM9MitCZWRyb29tcyZmbG9vcj00JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzU3MCZwcmljZT00JTJDMTc0JTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAwY2NYTUVBWSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDBjY1hNRUFZJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z4L000001eXScUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 2-6-610",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 2-6-610",
    "attributes": {
      "beds": "3",
      "floor": "6",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,181,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXScUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTQ4MDk4ZDk4MSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItNi02MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTgxJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhTY1VBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhTY1VBTSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000002DE1nMAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-12-1208",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-12-1208",
    "attributes": {
      "beds": "3",
      "floor": "12",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,188,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE1nMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTE1OTRiMTRmZSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0xMi0xMjA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0xMiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkMxODglMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTFuTUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREUxbk1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z58000001i7gtEAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Acacia B-2-227",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Acacia B-2-227",
    "attributes": {
      "beds": "2",
      "floor": "2",
      "area": {
        "sqft": "1706",
        "sqm": "158.49"
      },
      "price": {
        "currency": "AED",
        "value": "4,234,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i7gtEAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmEwNWU3Y2U0MyZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStCLTItMjI3JmJlZHM9MitCZWRyb29tcyZmbG9vcj0yJnR5cGU9QXBhcnRtZW50JmJhdGg9MyZhcmVhPTElMkM3MDYmcHJpY2U9NCUyQzIzNCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFo1ODAwMDAwMWk3Z3RFQUEmdGl0bGU9UGFyaytIZWlnaHRzJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9YWNhY2lhJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjU4MDAwMDAxaTdndEVBQSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000001aZCAMA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Golf Hillside",
      "link": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Golf Hillside-5-503",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-5-503",
    "attributes": {
      "beds": "3",
      "floor": "5",
      "area": {
        "sqft": "1603",
        "sqm": "148.92"
      },
      "price": {
        "currency": "AED",
        "value": "4,245,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZCAMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWEzZjA3ZjdkYiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNS01MDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDMjQ1JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpDQU1BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkNBTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000001aZBKMA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Golf Hillside",
      "link": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Golf Hillside-5-505",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-5-505",
    "attributes": {
      "beds": "3",
      "floor": "5",
      "area": {
        "sqft": "1603",
        "sqm": "148.92"
      },
      "price": {
        "currency": "AED",
        "value": "4,245,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBKMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTAxMmJmYzE3ZSZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNS01MDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDMjQ1JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCS01BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJLTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z4L000000J1dkUAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Mangrove",
      "link": "https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Mangrove Building 2-2-210",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=mangrove-at-dubai-creek-harbour_DC Mangrove Building 2-2-210",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1701",
        "sqm": "158.03"
      },
      "price": {
        "currency": "AED",
        "value": "4,249,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000000J1dkUAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OWRhOWY1YmJlNyZsb2NhdGlvbl9jb2RlPURDK01hbmdyb3ZlK0J1aWxkaW5nKzItMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzcwMSZwcmljZT00JTJDMjQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAwSjFka1VBQyZ0aXRsZT1NYW5ncm92ZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPW1hbmdyb3ZlLWF0LWR1YmFpLWNyZWVrLWhhcmJvdXImZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNEwwMDAwMDBKMWRrVUFDJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000002DE1SMAW",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-20-2008",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-20-2008",
    "attributes": {
      "beds": "3",
      "floor": "20",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,251,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE1SMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDg5MWJmZDAzOSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0yMC0yMDA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0yMCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkMyNTElMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTFTTUFXJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREUxU01BVyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000000J1dgUAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Mangrove",
      "link": "https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Mangrove Building 2-3-310",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=mangrove-at-dubai-creek-harbour_DC Mangrove Building 2-3-310",
    "attributes": {
      "beds": "3",
      "floor": "3",
      "area": {
        "sqft": "1701",
        "sqm": "158.03"
      },
      "price": {
        "currency": "AED",
        "value": "4,255,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000000J1dgUAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OGMwYzEzNGFiZSZsb2NhdGlvbl9jb2RlPURDK01hbmdyb3ZlK0J1aWxkaW5nKzItMy0zMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzcwMSZwcmljZT00JTJDMjU1JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAwSjFkZ1VBQyZ0aXRsZT1NYW5ncm92ZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPW1hbmdyb3ZlLWF0LWR1YmFpLWNyZWVrLWhhcmJvdXImZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNEwwMDAwMDBKMWRnVUFDJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl0000025s8NMAQ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood B-1-108",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood B-1-108",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "1821",
        "sqm": "169.18"
      },
      "price": {
        "currency": "AED",
        "value": "4,260,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s8NMAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9N2NmMmMwYTY4MyZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0ItMS0xMDgmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgyMSZwcmljZT00JTJDMjYwJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM4Tk1BUSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzOE5NQVEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000002DE2dMAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-24-2408",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-24-2408",
    "attributes": {
      "beds": "3",
      "floor": "24",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,283,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE2dMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzYyNTQxNGNlZSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0yNC0yNDA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0yNCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkMyODMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTJkTUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREUyZE1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
  "page_metadata": {
    "title": "Property Search | Emaar Properties",
    "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info.",
    "canonical_url": "https://properties.emaar.com/en/property-search/",
    "robots_directives": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "favicon_url": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/images/favicon.ico",
    "generator": "WP Rocket 3.19.2.1",
    "wp_rocket_features": [
      "wpr_delay_js",
      "wpr_preconnect_external_domains",
      "wpr_auto_preload_fonts",
      "wpr_oci",
      "wpr_image_dimensions",
      "wpr_minify_css",
      "wpr_preload_links",
      "wpr_host_fonts_locally",
      "wpr_desktop"
    ],
    "body_classes": [
      "wp-singular",
      "page-template",
      "page-template-search-property-new",
      "page-template-search-property-new-php",
      "page",
      "page-id-798",
      "wp-theme-wp-bootstrap-starter",
      "wp-child-theme-emaar",
      "group-blog"
    ]
  },
  "seo_and_social": {
    "yoast_seo_plugin": {
      "version": "v25.5",
      "url": "https://yoast.com/wordpress/plugins/seo/"
    },
    "open_graph": {
      "locale": "en_US",
      "type": "article",
      "title": "Property Search | Emaar Properties",
      "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info.",
      "url": "https://properties.emaar.com/en/property-search/",
      "site_name": "Emaar Properties",
      "image": "https://cdn.properties.emaar.com/wp-content/uploads/2025/10/TERRAGARDENS_XL_BANNER_1920x1080.jpg",
      "image_width": "1920",
      "image_height": "1080",
      "image_type": "image/jpeg",
      "article_publisher": "https://www.facebook.com/emaardubai/",
      "article_modified_time": "2024-01-04T07:30:21+00:00"
    },
    "twitter_card": {
      "card": "summary_large_image",
      "site": "@emaardubai"
    },
    "json_ld_schema": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://properties.emaar.com/en/property-search/",
          "url": "https://properties.emaar.com/en/property-search/",
          "name": "Property Search | Emaar Properties",
          "isPartOf": {
            "@id": "https://properties.emaar.com/en/#website"
          },
          "datePublished": "2020-03-15T08:59:14+00:00",
          "dateModified": "2024-01-04T07:30:21+00:00",
          "description": "Search and find your home with Emaar Properties. Enjoy the wide selection of villas, apartments, townhouses, and hotels. Visit us for more info.",
          "inLanguage": "en-US",
          "potentialAction": [
            {
              "@type": "ReadAction",
              "target": [
                "https://properties.emaar.com/en/property-search/"
              ]
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://properties.emaar.com/en/#website",
          "url": "https://properties.emaar.com/en/",
          "name": "Emaar Properties",
          "description": "Global Property Developer",
          "publisher": {
            "@id": "https://properties.emaar.com/en/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://properties.emaar.com/en/?s={search_term_string}"
              },
              "query-input": {
                "@type": "PropertyValueSpecification",
                "valueRequired": true,
                "valueName": "search_term_string"
              }
            }
          ],
          "inLanguage": "en-US"
        }
      ]
    }
  },
  "internationalization": {
    "wpml_generator": "WPML ver:4.7.6 stt:5,1,45;",
    "current_language_cookie": "en",
    "hreflang_links": [
      {
        "lang": "en",
        "href": "https://properties.emaar.com/en/property-search/"
      },
      {
        "lang": "ar",
        "href": "https://properties.emaar.com/ar/property-search/"
      },
      {
        "lang": "ru",
        "href": "https://properties.emaar.com/ru/property-search/"
      },
      {
        "lang": "x-default",
        "href": "https://properties.emaar.com/en/property-search/"
      }
    ]
  },
  "technical_details": {
    "site_verification": {
      "google": "Lmr-Zp8SAS0vMLphqLALzklQA27oVUf592jZMhrcpns",
      "yandex": "b5a259afe53817bf"
    },
    "preconnected_domains": [
      "https://static.hotjar.com",
      "https://acdn.adnxs.com",
      "https://mc.yads.tech",
      "https://cdn.taboola.com",
      "https://analytics.tiktok.com",
      "https://connect.facebook.net",
      "https://s2s.emaar.com",
      "https://sc-static.net",
      "https://snap.licdn.com",
      "https://bat.bing.com",
      "https://static.ads-twitter.com",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
      "https://ka-p.fontawesome.com",
      "https://maps.googleapis.com",
      "https://st.hybrid.ai",
      "https://googleads.g.doubleclick.net",
      "https://fp.hybrid.ai",
      "https://code.jquery.com",
      "https://unpkg.com",
      "https://510001196.collect.igodigital.com"
    ],
    "dns_prefetch": [
      "//assets.calendly.com"
    ],
    "preloaded_resources": {
      "fonts": [
        "https://properties.emaar.com/wp-content/themes/emaar/fonts/google-font-1.woff2",
        "https://ka-p.fontawesome.com/releases/v6.4.2/webfonts/pro-fa-light-300-18.woff2",
        "https://ka-p.fontawesome.com/releases/v6.4.2/webfonts/pro-fa-brands-400-0.woff2",
        "https://properties.emaar.com/wp-content/themes/emaar/fonts/5962255/9bdc4bb6-32aa-441c-9559-d4024d913ae8.woff2"
      ],
      "images": [
        "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/images/spinner.gif"
      ]
    },
    "stylesheets": [
      "https://properties.emaar.com/wp-content/plugins/instagram-feed/css/sbi-styles.min.css?ver=6.9.1",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/plugins/gutentoc-advance-table-of-content/dist/blocks.style.build.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/wp-bootstrap-starter/style.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/emaar/inc/assets/css/ext.min.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/emaar/inc/assets/js/mmenu-js-master/dist/mmenu.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/cache/min/1/assets/external/widget.css?ver=1760601432",
      "https://properties.emaar.com/wp-content/themes/wp-bootstrap-starter/inc/assets/css/bootstrap.min.css?ver=6.8.3",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/emaar/style.css?ver=1760601433",
      "https://properties.emaar.com/wp-content/cache/min/1/wp-content/themes/emaar/inc/assets/css/property-map-search.css?ver=1760601477",
      "https://properties.emaar.com/wp-content/cache/min/1/ui/1.13.2/themes/ui-lightness/jquery-ui.css?ver=1760601477"
    ],
    "scripts": [
      {
        "id": "jquery-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/jquery.min.js"
      },
      {
        "id": "wpml-cookie-js",
        "src": "https://properties.emaar.com/wp-content/plugins/sitepress-multilingual-cms/res/js/cookies/language-cookie.js?ver=476000",
        "async": true,
        "defer": true
      },
      {
        "id": "emaar-ext-script-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/ext.min.js?ver=1760600269"
      },
      {
        "id": "lazyload-script-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/lazyload.min.js?ver=6.8.3",
        "async": true
      },
      {
        "id": "calendly-js",
        "src": "https://assets.calendly.com/assets/external/widget.js?ver=6.8.3",
        "async": true
      },
      {
        "id": "payment-ajax-handle-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/ajax_payment.js?ver=25102025",
        "async": true
      },
      {
        "id": "wishlist-script-handle-js",
        "src": "https://properties.emaar.com/wp-content/themes/emaar/inc/assets/js/wishlist.js?ver=25102025",
        "async": true
      },
      {
        "id": "html5hiv-js",
        "src": "https://properties.emaar.com/wp-content/themes/wp-bootstrap-starter/inc/assets/js/html5.js?ver=3.7.0",
        "async": true,
        "condition": "if lt IE 9"
      },
      {
        "id": null,
        "src": "https://code.jquery.com/ui/1.13.2/jquery-ui.js",
        "async": true
      }
    ]
  },
  "analytics_and_tracking": {
    "google_tag_manager": {
      "id": "GTM-KCHN85",
      "load_trigger": "User Interaction (scroll, mousemove, touchstart, DOMContentLoaded)"
    },
    "amplitude": {
      "api_key": "da36a0290a90ab6a980b4e3332d987b1",
      "sdk_version": "7.2.1"
    },
    "custom_client_id": "d2c4f6ef511966c92de2e1df6a3c1709ea3dd07595f4ebd8c481c50fe1f72fbd"
  },
  "page_structure": {
    "header": {
      "main_navigation": [
        {
          "title": "About Us",
          "url": "https://properties.emaar.com/en/about-emaar/"
        },
        {
          "title": "Latest Emaar Projects",
          "url": "https://properties.emaar.com/en/latest-launches/"
        },
        {
          "title": "Communities",
          "url": "https://properties.emaar.com/en/our-communities/"
        },
        {
          "title": "Sustainability",
          "url": "https://properties.emaar.com/en/emaar-sustainability/"
        }
      ],
      "actions": [
        {
          "type": "Language Switcher",
          "options": [
            "ENG",
            "العربية",
            "Русский"
          ]
        },
        {
          "type": "Instant Video Call",
          "action": "javascript:void(0);"
        },
        {
          "type": "WhatsApp",
          "url": "https://wa.link/u9ik8p"
        },
        {
          "type": "Get in Touch",
          "action": "Opens #registerModal"
        }
      ]
    },
    "search_form": {
      "title": "Search",
      "search_input": {
        "id": "property-search",
        "name": "property-search",
        "placeholder": "Search Properties By Name"
      },
      "filters": {
        "primary": [
          "Property Type",
          "Bedrooms",
          "Price Range",
          "More Filters"
        ],
        "more_filters_modal": [
          "Floor",
          "Total Area",
          "Communities",
          "Properties"
        ]
      },
      "property_types": [
        "Apartment",
        "Hotel",
        "Office",
        "Plot",
        "Townhouse",
        "Villa"
      ],
      "bedrooms": [
        "1 Bedroom",
        "2 Bedrooms",
        "3 Bedrooms",
        "4 Bedrooms",
        "5+ Bedrooms"
      ],
      "price_range": {
        "min": "0",
        "max": "100,000,000",
        "currency": "AED"
      }
    },
    "property_listings": [
      {
        "unit_id": "a0ZNM000000msC92AI",
        "title": "DE Rosehill B-P-P10",
        "link": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P10",
        "location": "Dubai Hills Estates - Rosehill",
        "images": [
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-440x385.jpg",
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-440x385.jpg",
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-440x385.jpg"
        ],
        "attributes": {
          "beds": "1",
          "floor": "P",
          "area_sqft": "745",
          "area_sqm": "69.21",
          "price": "AED 1,603,888"
        },
        "floor_plan_url": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msC92AI",
        "actions": [
          "Enquire",
          "Payment Plan",
          "Book Now"
        ]
      },
      {
        "unit_id": "a0ZNM000000msCO2AY",
        "title": "DE Rosehill B-1-111",
        "link": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-1-111",
        "location": "Dubai Hills Estates - Rosehill",
        "images": [
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-440x385.jpg",
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-440x385.jpg",
          "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-440x385.jpg"
        ],
        "attributes": {
          "beds": "1",
          "floor": "1",
          "area_sqft": "745",
          "area_sqm": "69.21",
          "price": "AED 1,606,888"
        },
        "floor_plan_url": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msCO2AY",
        "actions": [
          "Enquire",
          "Payment Plan",
          "Book Now"
        ]
      }
    ]
  },
  "forms": {
    "register_interest_form": {
      "id": "gform_1",
      "title": "Register your Interest",
      "action": "/en/property-search/#gf_1",
      "method": "post",
      "fields": [
        {
          "id": "input_1_1",
          "name": "input_1",
          "label": "Full Name",
          "type": "text",
          "placeholder": "Enter Full Name",
          "required": true
        },
        {
          "id": "input_1_2",
          "name": "input_2",
          "label": "Email Address",
          "type": "email",
          "placeholder": "Enter your email",
          "required": true
        },
        {
          "id": "input_1_6",
          "name": "input_6",
          "label": "Phone Country Code",
          "type": "select",
          "required": true,
          "default_selected": "+971"
        },
        {
          "id": "input_1_12",
          "name": "input_12",
          "label": "Phone Number",
          "type": "text",
          "placeholder": "Enter your phone number",
          "required": true
        },
        {
          "id": "input_1_46",
          "name": "input_46",
          "label": "Your Preferred Size",
          "type": "select",
          "required": true,
          "options": [
            "Select your preferred size",
            "10K SQ.FT",
            "15K SQ.FT",
            "20K SQ.FT"
          ]
        },
        {
          "id": "input_1_34",
          "name": "input_34",
          "label": "No. of Bedrooms",
          "type": "select",
          "required": false,
          "options": [
            "1 Bedroom",
            "2 Bedrooms",
            "3 Bedrooms",
            "4 Bedrooms",
            "5 Bedrooms"
          ]
        },
        {
          "id": "input_1_44",
          "name": "input_44",
          "label": "I AM AN",
          "type": "checkbox",
          "required": true,
          "options": [
            "Agent",
            "Investor"
          ]
        },
        {
          "id": "input_1_41",
          "name": "input_41",
          "label": "Passport Number",
          "type": "text",
          "placeholder": "Enter passport number",
          "required": true
        },
        {
          "id": "input_1_39",
          "name": "input_39",
          "label": "Passport Scan Copy",
          "type": "file",
          "required": true,
          "rules": "Accepted file types: jpg, jpeg, png, pdf, Max. file size: 3 MB."
        },
        {
          "id": "choice_1_9_1",
          "name": "input_9.1",
          "label": "Keep me updated on news and offer",
          "type": "checkbox",
          "required": false
        },
        {
          "id": "input_1_32",
          "name": "captcha",
          "label": "CAPTCHA",
          "type": "captcha",
          "sitekey": "6LdgogIiAAAAALMaty597CSm2TxzFnDj_2DTS5UM"
        }
      ],
      "submit_button": {
        "id": "gform_submit_button_1",
        "value": "Submit"
      }
    }
  }
}
[
  {
    "unit_id": "a0Z4L000001eXUDUA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 2-2-210",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 2-2-210",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,149,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXUDUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjQ2NTNhZGMxZSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhVRFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhVRFVBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXWBUA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 4-2-210",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 4-2-210",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,149,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXWBUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Yzc0Y2ZiZjAzYyZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhXQlVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhXQlVBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXTgUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 4-3-310",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 4-3-310",
    "attributes": {
      "beds": "3",
      "floor": "3",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,156,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXTgUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDA2OGZhY2YyMyZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtMy0zMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTU2JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhUZ1VBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhUZ1VBTSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z5800000GjtIpEAJ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry II B-5-517",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry II B-5-517",
    "attributes": {
      "beds": "2",
      "floor": "5",
      "area": {
        "sqft": "1884",
        "sqm": "175.03"
      },
      "price": {
        "currency": "AED",
        "value": "4,165,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIpEAJ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZWI1YjgyOTQyNSZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0ItNS01MTcmYmVkcz0yK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0xJTJDODg0JnByaWNlPTQlMkMxNjUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMEdqdElwRUFKJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwR2p0SXBFQUomZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z4L000001eXGSUA2",
    "scarcity_alert": "Only 1 left",
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/SAVANNA_HERO_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/SAVANNA_HERO_5-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/FEATURES_1200X655_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/FEATURES_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Savanna",
      "link": "https://properties.emaar.com/en/properties/savanna/#sectionMap"
    },
    "title": "DC Savanna Building 2-2-210",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=savanna_DC Savanna Building 2-2-210",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1701",
        "sqm": "158.03"
      },
      "price": {
        "currency": "AED",
        "value": "4,165,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXGSUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OWNlZjZiMTViYyZsb2NhdGlvbl9jb2RlPURDK1NhdmFubmErQnVpbGRpbmcrMi0yLTIxMCZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNzAxJnByaWNlPTQlMkMxNjUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNEwwMDAwMDFlWEdTVUEyJnRpdGxlPVNhdmFubmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zYXZhbm5hJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhHU1VBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXWTUA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 2-4-410",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 2-4-410",
    "attributes": {
      "beds": "3",
      "floor": "4",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,165,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXWTUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NGMwN2UyNmQwNSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItNC00MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTY1JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhXVFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhXVFVBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000001K6mEMAS",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-5-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_4-7-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Altus",
      "link": "https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Altus T1-P1-P103",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=altus-at-dubai-creek-harbour_DC Altus T1-P1-P103",
    "attributes": {
      "beds": "3",
      "floor": "P1",
      "area": {
        "sqft": "1927",
        "sqm": "179.02"
      },
      "price": {
        "currency": "AED",
        "value": "4,170,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001K6mEMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Y2JiMjNlZjc3OCZsb2NhdGlvbl9jb2RlPURDK0FsdHVzK1QxLVAxLVAxMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPVAxJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM5MjcmcHJpY2U9NCUyQzE3MCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMUs2bUVNQVMmdGl0bGU9QWx0dXMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1hbHR1cy1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAxSzZtRU1BUyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXSqUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 4-5-510",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 4-5-510",
    "attributes": {
      "beds": "3",
      "floor": "5",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,173,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXSqUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjY1NTcxOGEyNCZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtNS01MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTczJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhTcVVBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhTcVVBTSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eXSTUA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 2-5-510",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 2-5-510",
    "attributes": {
      "beds": "3",
      "floor": "5",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,173,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXSTUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmM4MmExNTY3ZCZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItNS01MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTczJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhTVFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhTVFVBMiZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z58000000ccXMEAY",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Acacia B-4-409",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Acacia B-4-409",
    "attributes": {
      "beds": "2",
      "floor": "4",
      "area": {
        "sqft": "1570",
        "sqm": "145.86"
      },
      "price": {
        "currency": "AED",
        "value": "4,174,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000000ccXMEAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MzY5MGExZDU0NCZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStCLTQtNDA5JmJlZHM9MitCZWRyb29tcyZmbG9vcj00JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzU3MCZwcmljZT00JTJDMTc0JTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAwY2NYTUVBWSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDBjY1hNRUFZJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z4L000001eXScUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Cedar",
      "link": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "title": "DC Cedar Building 2-6-610",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=cedar_DC Cedar Building 2-6-610",
    "attributes": {
      "beds": "3",
      "floor": "6",
      "area": {
        "sqft": "1691",
        "sqm": "157.1"
      },
      "price": {
        "currency": "AED",
        "value": "4,181,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXScUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTQ4MDk4ZDk4MSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItNi02MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTgxJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhTY1VBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhTY1VBTSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000002DE1nMAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-12-1208",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-12-1208",
    "attributes": {
      "beds": "3",
      "floor": "12",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,188,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE1nMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTE1OTRiMTRmZSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0xMi0xMjA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0xMiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkMxODglMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTFuTUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREUxbk1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z58000001i7gtEAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Acacia B-2-227",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Acacia B-2-227",
    "attributes": {
      "beds": "2",
      "floor": "2",
      "area": {
        "sqft": "1706",
        "sqm": "158.49"
      },
      "price": {
        "currency": "AED",
        "value": "4,234,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i7gtEAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmEwNWU3Y2U0MyZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStCLTItMjI3JmJlZHM9MitCZWRyb29tcyZmbG9vcj0yJnR5cGU9QXBhcnRtZW50JmJhdGg9MyZhcmVhPTElMkM3MDYmcHJpY2U9NCUyQzIzNCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFo1ODAwMDAwMWk3Z3RFQUEmdGl0bGU9UGFyaytIZWlnaHRzJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9YWNhY2lhJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjU4MDAwMDAxaTdndEVBQSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000001aZCAMA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Golf Hillside",
      "link": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Golf Hillside-5-503",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-5-503",
    "attributes": {
      "beds": "3",
      "floor": "5",
      "area": {
        "sqft": "1603",
        "sqm": "148.92"
      },
      "price": {
        "currency": "AED",
        "value": "4,245,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZCAMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWEzZjA3ZjdkYiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNS01MDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDMjQ1JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpDQU1BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkNBTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000001aZBKMA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Golf Hillside",
      "link": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Golf Hillside-5-505",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-5-505",
    "attributes": {
      "beds": "3",
      "floor": "5",
      "area": {
        "sqft": "1603",
        "sqm": "148.92"
      },
      "price": {
        "currency": "AED",
        "value": "4,245,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBKMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTAxMmJmYzE3ZSZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNS01MDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDMjQ1JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCS01BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJLTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z4L000000J1dkUAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Mangrove",
      "link": "https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Mangrove Building 2-2-210",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=mangrove-at-dubai-creek-harbour_DC Mangrove Building 2-2-210",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1701",
        "sqm": "158.03"
      },
      "price": {
        "currency": "AED",
        "value": "4,249,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000000J1dkUAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OWRhOWY1YmJlNyZsb2NhdGlvbl9jb2RlPURDK01hbmdyb3ZlK0J1aWxkaW5nKzItMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzcwMSZwcmljZT00JTJDMjQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAwSjFka1VBQyZ0aXRsZT1NYW5ncm92ZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPW1hbmdyb3ZlLWF0LWR1YmFpLWNyZWVrLWhhcmJvdXImZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNEwwMDAwMDBKMWRrVUFDJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000002DE1SMAW",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-20-2008",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-20-2008",
    "attributes": {
      "beds": "3",
      "floor": "20",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,251,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE1SMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDg5MWJmZDAzOSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0yMC0yMDA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0yMCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkMyNTElMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTFTTUFXJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREUxU01BVyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000000J1dgUAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Mangrove",
      "link": "https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Mangrove Building 2-3-310",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=mangrove-at-dubai-creek-harbour_DC Mangrove Building 2-3-310",
    "attributes": {
      "beds": "3",
      "floor": "3",
      "area": {
        "sqft": "1701",
        "sqm": "158.03"
      },
      "price": {
        "currency": "AED",
        "value": "4,255,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000000J1dgUAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OGMwYzEzNGFiZSZsb2NhdGlvbl9jb2RlPURDK01hbmdyb3ZlK0J1aWxkaW5nKzItMy0zMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzcwMSZwcmljZT00JTJDMjU1JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAwSjFkZ1VBQyZ0aXRsZT1NYW5ncm92ZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPW1hbmdyb3ZlLWF0LWR1YmFpLWNyZWVrLWhhcmJvdXImZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNEwwMDAwMDBKMWRnVUFDJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl0000025s8NMAQ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood B-1-108",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood B-1-108",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "1821",
        "sqm": "169.18"
      },
      "price": {
        "currency": "AED",
        "value": "4,260,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s8NMAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9N2NmMmMwYTY4MyZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0ItMS0xMDgmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgyMSZwcmljZT00JTJDMjYwJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM4Tk1BUSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzOE5NQVEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000002DE2dMAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-24-2408",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-24-2408",
    "attributes": {
      "beds": "3",
      "floor": "24",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,283,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE2dMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzYyNTQxNGNlZSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0yNC0yNDA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0yNCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkMyODMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTJkTUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREUyZE1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000002DDw1MAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-28-2804",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-28-2804",
    "attributes": {
      "beds": "3",
      "floor": "28",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,315,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDw1MAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MmJkNGNiM2E2MyZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0yOC0yODA0JmJlZHM9MytCZWRyb29tcyZmbG9vcj0yOCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkMzMTUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHcxTUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER3MU1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000k5HxMAI",
    "scarcity_alert": "Only 1 left",
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/VALO_HERO_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/VALO_HERO_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/FEATURES_1200X655_1-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/FEATURES_1200X655_2-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Valo",
      "link": "https://properties.emaar.com/en/properties/valo-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Valo-P1-P103",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=valo-at-dubai-creek-harbour_DC Valo-P1-P103",
    "attributes": {
      "beds": "3",
      "floor": "P1",
      "area": {
        "sqft": "1810",
        "sqm": "168.15"
      },
      "price": {
        "currency": "AED",
        "value": "4,342,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000k5HxMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YWU5YTllMjU5NCZsb2NhdGlvbl9jb2RlPURDK1ZhbG8tUDEtUDEwMyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9UDEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgxMCZwcmljZT00JTJDMzQyJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwazVIeE1BSSZ0aXRsZT1WYWxvJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9dmFsby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwazVIeE1BSSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000001aZBCMA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Golf Hillside",
      "link": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Golf Hillside-6-605",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-6-605",
    "attributes": {
      "beds": "3",
      "floor": "6",
      "area": {
        "sqft": "1603",
        "sqm": "148.92"
      },
      "price": {
        "currency": "AED",
        "value": "4,344,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBCMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWMzODYxN2ZhYiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNi02MDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDMzQ0JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCQ01BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJDTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z58000001i0LfEAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/CREEK_GATE_HERO-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/CREEK_GATE_LIVING-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/CREEK_GATE_PARK-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/CREEK_GATE_VIEW-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Creek Gate",
      "link": "https://properties.emaar.com/en/properties/creek-gate/#sectionMap"
    },
    "title": "DC Creek Gate T1-3-303",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=creek-gate_DC Creek Gate T1-3-303",
    "attributes": {
      "beds": "3",
      "floor": "3",
      "area": {
        "sqft": "1490",
        "sqm": "138.43"
      },
      "price": {
        "currency": "AED",
        "value": "4,419,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i0LfEAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NTg2NjBiNzI3NCZsb2NhdGlvbl9jb2RlPURDK0NyZWVrK0dhdGUrVDEtMy0zMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0xJTJDNDkwJnByaWNlPTQlMkM0MTklMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMDFpMExmRUFJJnRpdGxlPUNyZWVrK0dhdGUmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1jcmVlay1nYXRlJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjU4MDAwMDAxaTBMZkVBSSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4H00000VGmp1UAD",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/CREEK_GATE_HERO-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/CREEK_GATE_LIVING-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/CREEK_GATE_PARK-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/CREEK_GATE_VIEW-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Creek Gate",
      "link": "https://properties.emaar.com/en/properties/creek-gate/#sectionMap"
    },
    "title": "DC Creek Gate T1-2-203",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=creek-gate_DC Creek Gate T1-2-203",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1496",
        "sqm": "138.98"
      },
      "price": {
        "currency": "AED",
        "value": "4,419,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4H00000VGmp1UAD",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDNkYTYxNzVkMSZsb2NhdGlvbl9jb2RlPURDK0NyZWVrK0dhdGUrVDEtMi0yMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0xJTJDNDk2JnByaWNlPTQlMkM0MTklMkM4ODgmcHJvcGVydHlfaWQ9YTBaNEgwMDAwMFZHbXAxVUFEJnRpdGxlPUNyZWVrK0dhdGUmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1jcmVlay1nYXRlJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRIMDAwMDBWR21wMVVBRCZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl0000025sCJMAY",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-3-305",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-3-305",
    "attributes": {
      "beds": "3",
      "floor": "3",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,423,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sCJMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ODkyZmMwMzhkYiZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMy0zMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNDIzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNDSk1BWSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzQ0pNQVkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000001aZBYMA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Golf Hillside",
      "link": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Golf Hillside-7-705",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-7-705",
    "attributes": {
      "beds": "3",
      "floor": "7",
      "area": {
        "sqft": "1603",
        "sqm": "148.92"
      },
      "price": {
        "currency": "AED",
        "value": "4,443,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBYMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MzA4OTAzMDY2YiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNy03MDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTcmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDNDQzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCWU1BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJZTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z58000000b93MEAQ",
    "scarcity_alert": "Only 1 left",
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/DCR_HERO-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/UNPARALLELED_LOCATION-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/LIVING_ROOM-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/DISCOVER_YOUR_EXTRAORDINARY-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/VIDA_CREEK_HARBOUR-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - DxbCreekResidences",
      "link": "https://properties.emaar.com/en/properties/dubai-creek-residences/#sectionMap"
    },
    "title": "DC DxbCreekResidences South T2-3-302",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=dubai-creek-residences_DC DxbCreekResidences South T2-3-302",
    "attributes": {
      "beds": "2",
      "floor": "3",
      "area": {
        "sqft": "2663",
        "sqm": "247.4"
      },
      "price": {
        "currency": "AED",
        "value": "4,451,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000000b93MEAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzdjN2Q4MDA3OCZsb2NhdGlvbl9jb2RlPURDK0R4YkNyZWVrUmVzaWRlbmNlcytTb3V0aCtUMi0zLTMwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MyZ0eXBlPUFwYXJ0bWVudCZiYXRoPSZhcmVhPTIlMkM2NjMmcHJpY2U9NCUyQzQ1MSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFo1ODAwMDAwMGI5M01FQVEmdGl0bGU9RHhiQ3JlZWtSZXNpZGVuY2VzJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9ZHViYWktY3JlZWstcmVzaWRlbmNlcyZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwMGI5M01FQVEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000002DE75MAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-37-3708",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-37-3708",
    "attributes": {
      "beds": "3",
      "floor": "37",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,451,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE75MAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NGVlZWYxZWU0YSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0zNy0zNzA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0zNyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkM0NTElMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTc1TUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREU3NU1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000002DDuLMAW",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-38-3808",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-38-3808",
    "attributes": {
      "beds": "3",
      "floor": "38",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,469,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDuLMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTJhODcyMjQ1YSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0zOC0zODA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0zOCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkM0NjklMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHVMTUFXJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER1TE1BVyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000002DDtzMAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-43-4308",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-43-4308",
    "attributes": {
      "beds": "3",
      "floor": "43",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,557,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDtzMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWJiMjA5OTg2MiZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby00My00MzA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj00MyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkM1NTclMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHR6TUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER0ek1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl0000025sFxMAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-11-1105",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-11-1105",
    "attributes": {
      "beds": "3",
      "floor": "11",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,574,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sFxMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmVjMWIyY2JkNSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTEtMTEwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNTc0JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNGeE1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRnhNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sG4MAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-12-1205",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-12-1205",
    "attributes": {
      "beds": "3",
      "floor": "12",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,583,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sG4MAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjIzZmIwYzg1YSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTItMTIwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNTgzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNHNE1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRzRNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sFzMAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-11-1107",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-11-1107",
    "attributes": {
      "beds": "3",
      "floor": "11",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,587,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sFzMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTcyZmEzYTZmNSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTEtMTEwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNTg3JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNGek1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRnpNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025s8oMAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-12-1207",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-12-1207",
    "attributes": {
      "beds": "3",
      "floor": "12",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,595,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s8oMAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTFmM2YxMWEzYiZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTItMTIwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNTk1JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM4b01BQSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzOG9NQUEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sDbMAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-14-1405",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-14-1405",
    "attributes": {
      "beds": "3",
      "floor": "14",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,599,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sDbMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTAyMmIzOGVhOSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTQtMTQwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNTk5JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNEYk1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRGJNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sEyMAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-14-1407",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-14-1407",
    "attributes": {
      "beds": "3",
      "floor": "14",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,613,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sEyMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzI0ZTM0ZTdiZSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTQtMTQwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNjEzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNFeU1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRXlNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025s8xMAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-16-1605",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-16-1605",
    "attributes": {
      "beds": "3",
      "floor": "16",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,617,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s8xMAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NjI5MDk3ZmI4MiZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTYtMTYwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNjE3JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM4eE1BQSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzOHhNQUEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025s90MAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-15-1507",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-15-1507",
    "attributes": {
      "beds": "3",
      "floor": "15",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,621,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s90MAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZWZmOGI4OWIzOSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTUtMTUwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNjIxJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM5ME1BQSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzOTBNQUEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sDJMAY",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-16-1607",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-16-1607",
    "attributes": {
      "beds": "3",
      "floor": "16",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,630,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sDJMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NzQ4MmQwZmUzMSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTYtMTYwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNjMwJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNESk1BWSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzREpNQVkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZNM000000msDd2AI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Rosehill",
      "link": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Rosehill A-11-1103",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-11-1103",
    "attributes": {
      "beds": "3",
      "floor": "11",
      "area": {
        "sqft": "1744",
        "sqm": "162.02"
      },
      "price": {
        "currency": "AED",
        "value": "4,639,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msDd2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjgxMzk2MTRkNiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTEtMTEwMyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzc0NCZwcmljZT00JTJDNjM5JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNEZDJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zRGQyQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZNM000000msMp2AI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Rosehill",
      "link": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Rosehill A-13-1303",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-13-1303",
    "attributes": {
      "beds": "3",
      "floor": "13",
      "area": {
        "sqft": "1744",
        "sqm": "162.02"
      },
      "price": {
        "currency": "AED",
        "value": "4,657,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msMp2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjQ0ZDljYzI4NiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTMtMTMwMyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzc0NCZwcmljZT00JTJDNjU3JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNNcDJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zTXAyQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000000BujxMAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-1-106",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-1-106",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2082",
        "sqm": "193.42"
      },
      "price": {
        "currency": "AED",
        "value": "5,671,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BujxMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDRkYjMzYWIwYSZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMS0xMDYmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MiUyQzA4MiZwcmljZT01JTJDNjcxJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwQnVqeE1BQyZ0aXRsZT1BZGRyZXNzK01hcmphbiZjb21tdW5pdHlfdGl0bGU9QWRkcmVzcytNYXJqYW4rSXNsYW5kJnNsdWc9YWRkcmVzcy1tYXJqYW4mZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDBCdWp4TUFDJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000000BuuIMAS",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-2-205",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-2-205",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1729",
        "sqm": "160.63"
      },
      "price": {
        "currency": "AED",
        "value": "5,712,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BuuIMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTRlNzg2MjA5YSZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMi0yMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzcyOSZwcmljZT01JTJDNzEyJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwQnV1SU1BUyZ0aXRsZT1BZGRyZXNzK01hcmphbiZjb21tdW5pdHlfdGl0bGU9QWRkcmVzcytNYXJqYW4rSXNsYW5kJnNsdWc9YWRkcmVzcy1tYXJqYW4mZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDBCdXVJTUFTJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000000BukXMAS",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-1-105",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-1-105",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2160",
        "sqm": "200.67"
      },
      "price": {
        "currency": "AED",
        "value": "5,806,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BukXMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmUyMTU5MGZlNSZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMS0xMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MiUyQzE2MCZwcmljZT01JTJDODA2JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwQnVrWE1BUyZ0aXRsZT1BZGRyZXNzK01hcmphbiZjb21tdW5pdHlfdGl0bGU9QWRkcmVzcytNYXJqYW4rSXNsYW5kJnNsdWc9YWRkcmVzcy1tYXJqYW4mZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDBCdWtYTUFTJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000000ButKMAS",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 3-1-105",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 3-1-105",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2160",
        "sqm": "200.67"
      },
      "price": {
        "currency": "AED",
        "value": "5,806,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000ButKMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9N2JkY2YyNjFjYyZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzMtMS0xMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MiUyQzE2MCZwcmljZT01JTJDODA2JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwQnV0S01BUyZ0aXRsZT1BZGRyZXNzK01hcmphbiZjb21tdW5pdHlfdGl0bGU9QWRkcmVzcytNYXJqYW4rSXNsYW5kJnNsdWc9YWRkcmVzcy1tYXJqYW4mZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDBCdXRLTUFTJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z58000001i7gFEAQ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Acacia B-9-907",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Acacia B-9-907",
    "attributes": {
      "beds": "3",
      "floor": "9",
      "area": {
        "sqft": "2740",
        "sqm": "254.55"
      },
      "price": {
        "currency": "AED",
        "value": "6,210,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i7gFEAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MDg5NWU3MTgwMiZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStCLTktOTA3JmJlZHM9MytCZWRyb29tcyZmbG9vcj05JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MiUyQzc0MCZwcmljZT02JTJDMjEwJTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAxaTdnRkVBUSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDFpN2dGRUFRJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z58000001i7gMEAQ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Acacia C-9-906",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Acacia C-9-906",
    "attributes": {
      "beds": "3",
      "floor": "9",
      "area": {
        "sqft": "2737",
        "sqm": "254.28"
      },
      "price": {
        "currency": "AED",
        "value": "6,222,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i7gMEAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MTBiZGNlNDRiNyZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStDLTktOTA2JmJlZHM9MytCZWRyb29tcyZmbG9vcj05JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MiUyQzczNyZwcmljZT02JTJDMjIyJTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAxaTdnTUVBUSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDFpN2dNRUFRJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZNM000000hjqt2AA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Silva",
      "link": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Silva-G-TH05",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-G-TH05",
    "attributes": {
      "beds": "3",
      "floor": "G",
      "area": {
        "sqft": "3253",
        "sqm": "302.21"
      },
      "price": {
        "currency": "AED",
        "value": "6,312,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjqt2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWEwNjJkZWNmYSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLUctVEgwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0zJTJDMjUzJnByaWNlPTYlMkMzMTIlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanF0MkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqcXQyQUEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000002DE6LMAW",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-G-G01",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-G-G01",
    "attributes": {
      "beds": "3",
      "floor": "G",
      "area": {
        "sqft": "4166",
        "sqm": "387.03"
      },
      "price": {
        "currency": "AED",
        "value": "7,003,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE6LMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjU0OWFmNjA2ZSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby1HLUcwMSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT00JTJDMTY2JnByaWNlPTclMkMwMDMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTZMTUFXJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREU2TE1BVyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eULoUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_HERO-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/RIVIERA-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_LIVING_ROOM-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_VIEW-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_RIVIERA-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Marina - Vida Dubai Marina",
      "link": "https://properties.emaar.com/en/properties/vida-residences-dubai-marina/#sectionMap"
    },
    "title": "DM Vida Dubai Marina-7-702",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=vida-residences-dubai-marina_DM Vida Dubai Marina-7-702",
    "attributes": {
      "beds": "2",
      "floor": "7",
      "area": {
        "sqft": "1577",
        "sqm": "146.51"
      },
      "price": {
        "currency": "AED",
        "value": "7,142,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eULoUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MGQ0YTM1YjZiZSZsb2NhdGlvbl9jb2RlPURNK1ZpZGErRHViYWkrTWFyaW5hLTctNzAyJmJlZHM9MitCZWRyb29tcyZmbG9vcj03JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzU3NyZwcmljZT03JTJDMTQyJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVVMb1VBTSZ0aXRsZT1WaWRhK0R1YmFpK01hcmluYSZjb21tdW5pdHlfdGl0bGU9RHViYWkrTWFyaW5hJnNsdWc9dmlkYS1yZXNpZGVuY2VzLWR1YmFpLW1hcmluYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo0TDAwMDAwMWVVTG9VQU0mZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z4L000001eULpUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_HERO-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/RIVIERA-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_LIVING_ROOM-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_VIEW-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_RIVIERA-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Marina - Vida Dubai Marina",
      "link": "https://properties.emaar.com/en/properties/vida-residences-dubai-marina/#sectionMap"
    },
    "title": "DM Vida Dubai Marina-7-701",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=vida-residences-dubai-marina_DM Vida Dubai Marina-7-701",
    "attributes": {
      "beds": "2",
      "floor": "7",
      "area": {
        "sqft": "1591",
        "sqm": "147.81"
      },
      "price": {
        "currency": "AED",
        "value": "7,206,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eULpUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTNjZDc0YWFhMiZsb2NhdGlvbl9jb2RlPURNK1ZpZGErRHViYWkrTWFyaW5hLTctNzAxJmJlZHM9MitCZWRyb29tcyZmbG9vcj03JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzU5MSZwcmljZT03JTJDMjA2JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVVMcFVBTSZ0aXRsZT1WaWRhK0R1YmFpK01hcmluYSZjb21tdW5pdHlfdGl0bGU9RHViYWkrTWFyaW5hJnNsdWc9dmlkYS1yZXNpZGVuY2VzLWR1YmFpLW1hcmluYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo0TDAwMDAwMWVVTHBVQU0mZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z5800000GjtIrEAJ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry II B-6-601",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry II B-6-601",
    "attributes": {
      "beds": "3",
      "floor": "6",
      "area": {
        "sqft": "3201",
        "sqm": "297.38"
      },
      "price": {
        "currency": "AED",
        "value": "8,223,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIrEAJ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmU3Mzc0YWY3ZiZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0ItNi02MDEmYmVkcz0zK0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0zJTJDMjAxJnByaWNlPTglMkMyMjMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMEdqdElyRUFKJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwR2p0SXJFQUomZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000000Buv8MAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-1-TH29",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-1-TH29",
    "attributes": {
      "beds": "2",
      "floor": "1",
      "area": {
        "sqft": "2459",
        "sqm": "228.45"
      },
      "price": {
        "currency": "AED",
        "value": "8,483,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000Buv8MAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDRiNWRmMmZkYiZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMS1USDI5JmJlZHM9MitCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM0NTkmcHJpY2U9OCUyQzQ4MyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMEJ1djhNQUMmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwQnV2OE1BQyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000BulvMAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-1-TH27",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-1-TH27",
    "attributes": {
      "beds": "2",
      "floor": "1",
      "area": {
        "sqft": "2465",
        "sqm": "229.01"
      },
      "price": {
        "currency": "AED",
        "value": "8,488,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BulvMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjI3MmQ4NjMwZCZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMS1USDI3JmJlZHM9MitCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM0NjUmcHJpY2U9OCUyQzQ4OCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMEJ1bHZNQUMmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwQnVsdk1BQyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000t54jMAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 5-1-TH59",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 5-1-TH59",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2459",
        "sqm": "228.45"
      },
      "price": {
        "currency": "AED",
        "value": "8,519,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000t54jMAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MTkxOTFhZjk1YyZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzUtMS1USDU5JmJlZHM9MytCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM0NTkmcHJpY2U9OCUyQzUxOSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMHQ1NGpNQUEmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwdDU0ak1BQSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000t56UMAQ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 5-1-TH58",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 5-1-TH58",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2459",
        "sqm": "228.45"
      },
      "price": {
        "currency": "AED",
        "value": "8,519,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000t56UMAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjZiZTViZTAxMCZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzUtMS1USDU4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM0NTkmcHJpY2U9OCUyQzUxOSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMHQ1NlVNQVEmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwdDU2VU1BUSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000BujiMAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-G-TH14",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-G-TH14",
    "attributes": {
      "beds": "2",
      "floor": "G",
      "area": {
        "sqft": "2769",
        "sqm": "257.25"
      },
      "price": {
        "currency": "AED",
        "value": "8,707,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BujiMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjQwN2ZjYWMxNSZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItRy1USDE0JmJlZHM9MitCZWRyb29tcyZmbG9vcj1HJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM3NjkmcHJpY2U9OCUyQzcwNyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMEJ1amlNQUMmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwQnVqaU1BQyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z5800000ORPX3EAP",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry II B-6-624",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry II B-6-624",
    "attributes": {
      "beds": "4",
      "floor": "6",
      "area": {
        "sqft": "3681",
        "sqm": "341.98"
      },
      "price": {
        "currency": "AED",
        "value": "8,809,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000ORPX3EAP",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWFlNDA4YzJmNiZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0ItNi02MjQmYmVkcz00K0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0zJTJDNjgxJnByaWNlPTglMkM4MDklMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwME9SUFgzRUFQJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwT1JQWDNFQVAmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z5800000GjtIqEAJ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry B-6-622",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry B-6-622",
    "attributes": {
      "beds": "4",
      "floor": "6",
      "area": {
        "sqft": "3351",
        "sqm": "311.32"
      },
      "price": {
        "currency": "AED",
        "value": "9,356,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIqEAJ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWY0NGFiYjk2YSZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0ItNi02MjImYmVkcz00K0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0zJTJDMzUxJnByaWNlPTklMkMzNTYlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMEdqdElxRUFKJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwR2p0SXFFQUomZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z5800000GjtIXEAZ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry II A-6-622",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry II A-6-622",
    "attributes": {
      "beds": "4",
      "floor": "6",
      "area": {
        "sqft": "3916",
        "sqm": "363.81"
      },
      "price": {
        "currency": "AED",
        "value": "10,289,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIXEAZ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmJhMTMyMTA3MCZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0EtNi02MjImYmVkcz00K0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0zJTJDOTE2JnByaWNlPTEwJTJDMjg5JTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDBHanRJWEVBWiZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMEdqdElYRUFaJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  }
]

  {
    "unit_id": "a0ZSl000002DDw1MAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-28-2804",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-28-2804",
    "attributes": {
      "beds": "3",
      "floor": "28",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,315,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDw1MAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MmJkNGNiM2E2MyZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0yOC0yODA0JmJlZHM9MytCZWRyb29tcyZmbG9vcj0yOCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkMzMTUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHcxTUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER3MU1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000k5HxMAI",
    "scarcity_alert": "Only 1 left",
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/VALO_HERO_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/VALO_HERO_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/FEATURES_1200X655_1-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/FEATURES_1200X655_2-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Valo",
      "link": "https://properties.emaar.com/en/properties/valo-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Valo-P1-P103",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=valo-at-dubai-creek-harbour_DC Valo-P1-P103",
    "attributes": {
      "beds": "3",
      "floor": "P1",
      "area": {
        "sqft": "1810",
        "sqm": "168.15"
      },
      "price": {
        "currency": "AED",
        "value": "4,342,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000k5HxMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YWU5YTllMjU5NCZsb2NhdGlvbl9jb2RlPURDK1ZhbG8tUDEtUDEwMyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9UDEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgxMCZwcmljZT00JTJDMzQyJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwazVIeE1BSSZ0aXRsZT1WYWxvJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9dmFsby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwazVIeE1BSSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000001aZBCMA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Golf Hillside",
      "link": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Golf Hillside-6-605",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-6-605",
    "attributes": {
      "beds": "3",
      "floor": "6",
      "area": {
        "sqft": "1603",
        "sqm": "148.92"
      },
      "price": {
        "currency": "AED",
        "value": "4,344,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBCMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWMzODYxN2ZhYiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNi02MDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDMzQ0JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCQ01BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJDTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z58000001i0LfEAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/CREEK_GATE_HERO-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/CREEK_GATE_LIVING-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/CREEK_GATE_PARK-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/CREEK_GATE_VIEW-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Creek Gate",
      "link": "https://properties.emaar.com/en/properties/creek-gate/#sectionMap"
    },
    "title": "DC Creek Gate T1-3-303",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=creek-gate_DC Creek Gate T1-3-303",
    "attributes": {
      "beds": "3",
      "floor": "3",
      "area": {
        "sqft": "1490",
        "sqm": "138.43"
      },
      "price": {
        "currency": "AED",
        "value": "4,419,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i0LfEAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NTg2NjBiNzI3NCZsb2NhdGlvbl9jb2RlPURDK0NyZWVrK0dhdGUrVDEtMy0zMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0xJTJDNDkwJnByaWNlPTQlMkM0MTklMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMDFpMExmRUFJJnRpdGxlPUNyZWVrK0dhdGUmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1jcmVlay1nYXRlJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjU4MDAwMDAxaTBMZkVBSSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4H00000VGmp1UAD",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/CREEK_GATE_HERO-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/CREEK_GATE_LIVING-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/CREEK_GATE_PARK-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/CREEK_GATE_VIEW-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Creek Gate",
      "link": "https://properties.emaar.com/en/properties/creek-gate/#sectionMap"
    },
    "title": "DC Creek Gate T1-2-203",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=creek-gate_DC Creek Gate T1-2-203",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1496",
        "sqm": "138.98"
      },
      "price": {
        "currency": "AED",
        "value": "4,419,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4H00000VGmp1UAD",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDNkYTYxNzVkMSZsb2NhdGlvbl9jb2RlPURDK0NyZWVrK0dhdGUrVDEtMi0yMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0xJTJDNDk2JnByaWNlPTQlMkM0MTklMkM4ODgmcHJvcGVydHlfaWQ9YTBaNEgwMDAwMFZHbXAxVUFEJnRpdGxlPUNyZWVrK0dhdGUmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1jcmVlay1nYXRlJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRIMDAwMDBWR21wMVVBRCZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl0000025sCJMAY",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-3-305",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-3-305",
    "attributes": {
      "beds": "3",
      "floor": "3",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,423,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sCJMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ODkyZmMwMzhkYiZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMy0zMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNDIzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNDSk1BWSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzQ0pNQVkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000001aZBYMA2",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Golf Hillside",
      "link": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Golf Hillside-7-705",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-7-705",
    "attributes": {
      "beds": "3",
      "floor": "7",
      "area": {
        "sqft": "1603",
        "sqm": "148.92"
      },
      "price": {
        "currency": "AED",
        "value": "4,443,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBYMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MzA4OTAzMDY2YiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNy03MDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTcmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDNDQzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCWU1BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJZTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z58000000b93MEAQ",
    "scarcity_alert": "Only 1 left",
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/DCR_HERO-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/UNPARALLELED_LOCATION-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/LIVING_ROOM-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/DISCOVER_YOUR_EXTRAORDINARY-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/VIDA_CREEK_HARBOUR-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - DxbCreekResidences",
      "link": "https://properties.emaar.com/en/properties/dubai-creek-residences/#sectionMap"
    },
    "title": "DC DxbCreekResidences South T2-3-302",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=dubai-creek-residences_DC DxbCreekResidences South T2-3-302",
    "attributes": {
      "beds": "2",
      "floor": "3",
      "area": {
        "sqft": "2663",
        "sqm": "247.4"
      },
      "price": {
        "currency": "AED",
        "value": "4,451,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000000b93MEAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzdjN2Q4MDA3OCZsb2NhdGlvbl9jb2RlPURDK0R4YkNyZWVrUmVzaWRlbmNlcytTb3V0aCtUMi0zLTMwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MyZ0eXBlPUFwYXJ0bWVudCZiYXRoPSZhcmVhPTIlMkM2NjMmcHJpY2U9NCUyQzQ1MSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFo1ODAwMDAwMGI5M01FQVEmdGl0bGU9RHhiQ3JlZWtSZXNpZGVuY2VzJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9ZHViYWktY3JlZWstcmVzaWRlbmNlcyZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwMGI5M01FQVEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000002DE75MAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-37-3708",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-37-3708",
    "attributes": {
      "beds": "3",
      "floor": "37",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,451,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE75MAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NGVlZWYxZWU0YSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0zNy0zNzA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0zNyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkM0NTElMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTc1TUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREU3NU1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000002DDuLMAW",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-38-3808",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-38-3808",
    "attributes": {
      "beds": "3",
      "floor": "38",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,469,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDuLMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTJhODcyMjQ1YSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0zOC0zODA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0zOCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkM0NjklMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHVMTUFXJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER1TE1BVyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000002DDtzMAG",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-43-4308",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-43-4308",
    "attributes": {
      "beds": "3",
      "floor": "43",
      "area": {
        "sqft": "1848",
        "sqm": "171.68"
      },
      "price": {
        "currency": "AED",
        "value": "4,557,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDtzMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWJiMjA5OTg2MiZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby00My00MzA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj00MyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDODQ4JnByaWNlPTQlMkM1NTclMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHR6TUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER0ek1BRyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl0000025sFxMAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-11-1105",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-11-1105",
    "attributes": {
      "beds": "3",
      "floor": "11",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,574,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sFxMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmVjMWIyY2JkNSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTEtMTEwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNTc0JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNGeE1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRnhNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sG4MAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-12-1205",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-12-1205",
    "attributes": {
      "beds": "3",
      "floor": "12",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,583,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sG4MAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjIzZmIwYzg1YSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTItMTIwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNTgzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNHNE1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRzRNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sFzMAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-11-1107",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-11-1107",
    "attributes": {
      "beds": "3",
      "floor": "11",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,587,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sFzMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTcyZmEzYTZmNSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTEtMTEwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNTg3JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNGek1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRnpNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025s8oMAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-12-1207",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-12-1207",
    "attributes": {
      "beds": "3",
      "floor": "12",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,595,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s8oMAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTFmM2YxMWEzYiZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTItMTIwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNTk1JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM4b01BQSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzOG9NQUEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sDbMAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-14-1405",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-14-1405",
    "attributes": {
      "beds": "3",
      "floor": "14",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,599,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sDbMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTAyMmIzOGVhOSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTQtMTQwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNTk5JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNEYk1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRGJNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sEyMAI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-14-1407",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-14-1407",
    "attributes": {
      "beds": "3",
      "floor": "14",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,613,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sEyMAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzI0ZTM0ZTdiZSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTQtMTQwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNjEzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNFeU1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRXlNQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025s8xMAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-16-1605",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-16-1605",
    "attributes": {
      "beds": "3",
      "floor": "16",
      "area": {
        "sqft": "1806",
        "sqm": "167.78"
      },
      "price": {
        "currency": "AED",
        "value": "4,617,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s8xMAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NjI5MDk3ZmI4MiZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTYtMTYwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwNiZwcmljZT00JTJDNjE3JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM4eE1BQSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzOHhNQUEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025s90MAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-15-1507",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-15-1507",
    "attributes": {
      "beds": "3",
      "floor": "15",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,621,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s90MAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZWZmOGI4OWIzOSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTUtMTUwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNjIxJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM5ME1BQSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzOTBNQUEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl0000025sDJMAY",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Parkwood",
      "link": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Parkwood A-16-1607",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-16-1607",
    "attributes": {
      "beds": "3",
      "floor": "16",
      "area": {
        "sqft": "1808",
        "sqm": "167.97"
      },
      "price": {
        "currency": "AED",
        "value": "4,630,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sDJMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NzQ4MmQwZmUzMSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTYtMTYwNyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzgwOCZwcmljZT00JTJDNjMwJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNESk1BWSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzREpNQVkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZNM000000msDd2AI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Rosehill",
      "link": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Rosehill A-11-1103",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-11-1103",
    "attributes": {
      "beds": "3",
      "floor": "11",
      "area": {
        "sqft": "1744",
        "sqm": "162.02"
      },
      "price": {
        "currency": "AED",
        "value": "4,639,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msDd2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjgxMzk2MTRkNiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTEtMTEwMyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzc0NCZwcmljZT00JTJDNjM5JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNEZDJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zRGQyQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZNM000000msMp2AI",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Rosehill",
      "link": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "title": "DE Rosehill A-13-1303",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-13-1303",
    "attributes": {
      "beds": "3",
      "floor": "13",
      "area": {
        "sqft": "1744",
        "sqm": "162.02"
      },
      "price": {
        "currency": "AED",
        "value": "4,657,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msMp2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjQ0ZDljYzI4NiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTMtMTMwMyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzc0NCZwcmljZT00JTJDNjU3JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNNcDJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zTXAyQUkmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000000BujxMAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-1-106",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-1-106",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2082",
        "sqm": "193.42"
      },
      "price": {
        "currency": "AED",
        "value": "5,671,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BujxMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDRkYjMzYWIwYSZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMS0xMDYmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MiUyQzA4MiZwcmljZT01JTJDNjcxJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwQnVqeE1BQyZ0aXRsZT1BZGRyZXNzK01hcmphbiZjb21tdW5pdHlfdGl0bGU9QWRkcmVzcytNYXJqYW4rSXNsYW5kJnNsdWc9YWRkcmVzcy1tYXJqYW4mZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDBCdWp4TUFDJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000000BuuIMAS",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-2-205",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-2-205",
    "attributes": {
      "beds": "3",
      "floor": "2",
      "area": {
        "sqft": "1729",
        "sqm": "160.63"
      },
      "price": {
        "currency": "AED",
        "value": "5,712,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BuuIMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTRlNzg2MjA5YSZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMi0yMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzcyOSZwcmljZT01JTJDNzEyJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwQnV1SU1BUyZ0aXRsZT1BZGRyZXNzK01hcmphbiZjb21tdW5pdHlfdGl0bGU9QWRkcmVzcytNYXJqYW4rSXNsYW5kJnNsdWc9YWRkcmVzcy1tYXJqYW4mZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDBCdXVJTUFTJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000000BukXMAS",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-1-105",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-1-105",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2160",
        "sqm": "200.67"
      },
      "price": {
        "currency": "AED",
        "value": "5,806,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BukXMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmUyMTU5MGZlNSZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMS0xMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MiUyQzE2MCZwcmljZT01JTJDODA2JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwQnVrWE1BUyZ0aXRsZT1BZGRyZXNzK01hcmphbiZjb21tdW5pdHlfdGl0bGU9QWRkcmVzcytNYXJqYW4rSXNsYW5kJnNsdWc9YWRkcmVzcy1tYXJqYW4mZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDBCdWtYTUFTJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZSl000000ButKMAS",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 3-1-105",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 3-1-105",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2160",
        "sqm": "200.67"
      },
      "price": {
        "currency": "AED",
        "value": "5,806,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000ButKMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9N2JkY2YyNjFjYyZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzMtMS0xMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MiUyQzE2MCZwcmljZT01JTJDODA2JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwQnV0S01BUyZ0aXRsZT1BZGRyZXNzK01hcmphbiZjb21tdW5pdHlfdGl0bGU9QWRkcmVzcytNYXJqYW4rSXNsYW5kJnNsdWc9YWRkcmVzcy1tYXJqYW4mZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDBCdXRLTUFTJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z58000001i7gFEAQ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Acacia B-9-907",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Acacia B-9-907",
    "attributes": {
      "beds": "3",
      "floor": "9",
      "area": {
        "sqft": "2740",
        "sqm": "254.55"
      },
      "price": {
        "currency": "AED",
        "value": "6,210,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i7gFEAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MDg5NWU3MTgwMiZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStCLTktOTA3JmJlZHM9MytCZWRyb29tcyZmbG9vcj05JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MiUyQzc0MCZwcmljZT02JTJDMjEwJTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAxaTdnRkVBUSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDFpN2dGRUFRJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0Z58000001i7gMEAQ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Acacia C-9-906",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Acacia C-9-906",
    "attributes": {
      "beds": "3",
      "floor": "9",
      "area": {
        "sqft": "2737",
        "sqm": "254.28"
      },
      "price": {
        "currency": "AED",
        "value": "6,222,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i7gMEAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MTBiZGNlNDRiNyZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStDLTktOTA2JmJlZHM9MytCZWRyb29tcyZmbG9vcj05JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MiUyQzczNyZwcmljZT02JTJDMjIyJTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAxaTdnTUVBUSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDFpN2dNRUFRJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  },
  {
    "unit_id": "a0ZNM000000hjqt2AA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Silva",
      "link": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Silva-G-TH05",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-G-TH05",
    "attributes": {
      "beds": "3",
      "floor": "G",
      "area": {
        "sqft": "3253",
        "sqm": "302.21"
      },
      "price": {
        "currency": "AED",
        "value": "6,312,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjqt2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWEwNjJkZWNmYSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLUctVEgwNSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0zJTJDMjUzJnByaWNlPTYlMkMzMTIlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanF0MkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqcXQyQUEmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000002DE6LMAW",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Creek Harbour - Albero",
      "link": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "title": "DC Albero-G-G01",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-G-G01",
    "attributes": {
      "beds": "3",
      "floor": "G",
      "area": {
        "sqft": "4166",
        "sqm": "387.03"
      },
      "price": {
        "currency": "AED",
        "value": "7,003,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE6LMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjU0OWFmNjA2ZSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby1HLUcwMSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT00JTJDMTY2JnByaWNlPTclMkMwMDMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERTZMTUFXJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyREU2TE1BVyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z4L000001eULoUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_HERO-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/RIVIERA-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_LIVING_ROOM-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_VIEW-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_RIVIERA-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Marina - Vida Dubai Marina",
      "link": "https://properties.emaar.com/en/properties/vida-residences-dubai-marina/#sectionMap"
    },
    "title": "DM Vida Dubai Marina-7-702",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=vida-residences-dubai-marina_DM Vida Dubai Marina-7-702",
    "attributes": {
      "beds": "2",
      "floor": "7",
      "area": {
        "sqft": "1577",
        "sqm": "146.51"
      },
      "price": {
        "currency": "AED",
        "value": "7,142,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eULoUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MGQ0YTM1YjZiZSZsb2NhdGlvbl9jb2RlPURNK1ZpZGErRHViYWkrTWFyaW5hLTctNzAyJmJlZHM9MitCZWRyb29tcyZmbG9vcj03JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzU3NyZwcmljZT03JTJDMTQyJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVVMb1VBTSZ0aXRsZT1WaWRhK0R1YmFpK01hcmluYSZjb21tdW5pdHlfdGl0bGU9RHViYWkrTWFyaW5hJnNsdWc9dmlkYS1yZXNpZGVuY2VzLWR1YmFpLW1hcmluYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo0TDAwMDAwMWVVTG9VQU0mZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z4L000001eULpUAM",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_HERO-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/RIVIERA-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_LIVING_ROOM-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_VIEW-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/07/VIDA_MARINA_RIVIERA-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Marina - Vida Dubai Marina",
      "link": "https://properties.emaar.com/en/properties/vida-residences-dubai-marina/#sectionMap"
    },
    "title": "DM Vida Dubai Marina-7-701",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=vida-residences-dubai-marina_DM Vida Dubai Marina-7-701",
    "attributes": {
      "beds": "2",
      "floor": "7",
      "area": {
        "sqft": "1591",
        "sqm": "147.81"
      },
      "price": {
        "currency": "AED",
        "value": "7,206,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eULpUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTNjZDc0YWFhMiZsb2NhdGlvbl9jb2RlPURNK1ZpZGErRHViYWkrTWFyaW5hLTctNzAxJmJlZHM9MitCZWRyb29tcyZmbG9vcj03JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzU5MSZwcmljZT03JTJDMjA2JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVVMcFVBTSZ0aXRsZT1WaWRhK0R1YmFpK01hcmluYSZjb21tdW5pdHlfdGl0bGU9RHViYWkrTWFyaW5hJnNsdWc9dmlkYS1yZXNpZGVuY2VzLWR1YmFpLW1hcmluYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo0TDAwMDAwMWVVTHBVQU0mZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z5800000GjtIrEAJ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry II B-6-601",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry II B-6-601",
    "attributes": {
      "beds": "3",
      "floor": "6",
      "area": {
        "sqft": "3201",
        "sqm": "297.38"
      },
      "price": {
        "currency": "AED",
        "value": "8,223,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIrEAJ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmU3Mzc0YWY3ZiZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0ItNi02MDEmYmVkcz0zK0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0zJTJDMjAxJnByaWNlPTglMkMyMjMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMEdqdElyRUFKJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwR2p0SXJFQUomZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0ZSl000000Buv8MAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-1-TH29",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-1-TH29",
    "attributes": {
      "beds": "2",
      "floor": "1",
      "area": {
        "sqft": "2459",
        "sqm": "228.45"
      },
      "price": {
        "currency": "AED",
        "value": "8,483,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000Buv8MAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDRiNWRmMmZkYiZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMS1USDI5JmJlZHM9MitCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM0NTkmcHJpY2U9OCUyQzQ4MyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMEJ1djhNQUMmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwQnV2OE1BQyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000BulvMAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-1-TH27",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-1-TH27",
    "attributes": {
      "beds": "2",
      "floor": "1",
      "area": {
        "sqft": "2465",
        "sqm": "229.01"
      },
      "price": {
        "currency": "AED",
        "value": "8,488,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BulvMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjI3MmQ4NjMwZCZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItMS1USDI3JmJlZHM9MitCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM0NjUmcHJpY2U9OCUyQzQ4OCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMEJ1bHZNQUMmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwQnVsdk1BQyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000t54jMAA",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 5-1-TH59",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 5-1-TH59",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2459",
        "sqm": "228.45"
      },
      "price": {
        "currency": "AED",
        "value": "8,519,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000t54jMAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MTkxOTFhZjk1YyZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzUtMS1USDU5JmJlZHM9MytCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM0NTkmcHJpY2U9OCUyQzUxOSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMHQ1NGpNQUEmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwdDU0ak1BQSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000t56UMAQ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 5-1-TH58",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 5-1-TH58",
    "attributes": {
      "beds": "3",
      "floor": "1",
      "area": {
        "sqft": "2459",
        "sqm": "228.45"
      },
      "price": {
        "currency": "AED",
        "value": "8,519,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000t56UMAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjZiZTViZTAxMCZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzUtMS1USDU4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM0NTkmcHJpY2U9OCUyQzUxOSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMHQ1NlVNQVEmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwdDU2VU1BUSZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0ZSl000000BujiMAC",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_HERO_D_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_MAIN_PAGE_1620x832-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_A_1200x655-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/11/ADH_RAK_FEATURES_C_1200x655-440x385.jpg"
    ],
    "location": {
      "text": "Address Marjan Island - Address Marjan",
      "link": "https://properties.emaar.com/en/properties/address-marjan/#sectionMap"
    },
    "title": "AM Address Marjan Building 2-G-TH14",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=address-marjan_AM Address Marjan Building 2-G-TH14",
    "attributes": {
      "beds": "2",
      "floor": "G",
      "area": {
        "sqft": "2769",
        "sqm": "257.25"
      },
      "price": {
        "currency": "AED",
        "value": "8,707,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000BujiMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjQwN2ZjYWMxNSZsb2NhdGlvbl9jb2RlPUFNK0FkZHJlc3MrTWFyamFuK0J1aWxkaW5nKzItRy1USDE0JmJlZHM9MitCZWRyb29tcyZmbG9vcj1HJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTIlMkM3NjkmcHJpY2U9OCUyQzcwNyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMEJ1amlNQUMmdGl0bGU9QWRkcmVzcytNYXJqYW4mY29tbXVuaXR5X3RpdGxlPUFkZHJlc3MrTWFyamFuK0lzbGFuZCZzbHVnPWFkZHJlc3MtbWFyamFuJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAwQnVqaU1BQyZkZXBvc2l0PTM3MDAwLjA="
    }
  },
  {
    "unit_id": "a0Z5800000ORPX3EAP",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry II B-6-624",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry II B-6-624",
    "attributes": {
      "beds": "4",
      "floor": "6",
      "area": {
        "sqft": "3681",
        "sqm": "341.98"
      },
      "price": {
        "currency": "AED",
        "value": "8,809,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000ORPX3EAP",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWFlNDA4YzJmNiZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0ItNi02MjQmYmVkcz00K0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0zJTJDNjgxJnByaWNlPTglMkM4MDklMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwME9SUFgzRUFQJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwT1JQWDNFQVAmZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z5800000GjtIqEAJ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry B-6-622",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry B-6-622",
    "attributes": {
      "beds": "4",
      "floor": "6",
      "area": {
        "sqft": "3351",
        "sqm": "311.32"
      },
      "price": {
        "currency": "AED",
        "value": "9,356,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIqEAJ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWY0NGFiYjk2YSZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0ItNi02MjImYmVkcz00K0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0zJTJDMzUxJnByaWNlPTklMkMzNTYlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMEdqdElxRUFKJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwR2p0SXFFQUomZGVwb3NpdD0zNzAwMC4w"
    }
  },
  {
    "unit_id": "a0Z5800000GjtIXEAZ",
    "scarcity_alert": null,
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-440x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-440x385.jpg"
    ],
    "location": {
      "text": "Dubai Hills Estates - Park Heights",
      "link": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "title": "DE Mulberry II A-6-622",
    "details_link": "https://properties.emaar.com/en/unit-details/?prop=acacia_DE Mulberry II A-6-622",
    "attributes": {
      "beds": "4",
      "floor": "6",
      "area": {
        "sqft": "3916",
        "sqm": "363.81"
      },
      "price": {
        "currency": "AED",
        "value": "10,289,888"
      }
    },
    "links": {
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIXEAZ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmJhMTMyMTA3MCZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0EtNi02MjImYmVkcz00K0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0zJTJDOTE2JnByaWNlPTEwJTJDMjg5JTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDBHanRJWEVBWiZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMEdqdElYRUFaJmRlcG9zaXQ9MzcwMDAuMA=="
    }
  }
]
[
  {
    "unit_id": "a0ZNM000000msC92AI",
    "unit_code": "DE Rosehill B-P-P10",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 745,
        "sqm": 69.21
      }
    },
    "price": {
      "amount": 1603888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P10",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msC92AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MTc0ZTE3ZWRiNSZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMTAmYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDUmcHJpY2U9MSUyQzYwMyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zQzkyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0M5MkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msCO2AY",
    "unit_code": "DE Rosehill B-1-111",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "1",
      "area": {
        "sqft": 745,
        "sqm": 69.21
      }
    },
    "price": {
      "amount": 1606888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-1-111",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msCO2AY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MDA0MWRhMmZlZCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItMS0xMTEmYmVkcz0xK0JlZHJvb20mZmxvb3I9MSZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDUmcHJpY2U9MSUyQzYwNiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zQ08yQVkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0NPMkFZJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msC42AI",
    "unit_code": "DE Rosehill B-P-P01",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 754,
        "sqm": 70.05
      }
    },
    "price": {
      "amount": 1612888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P01",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msC42AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YmQ1OGQ0NjY3MCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMDEmYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NTQmcHJpY2U9MSUyQzYxMiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zQzQyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0M0MkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msEn2AI",
    "unit_code": "DE Rosehill B-P-P11",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 749,
        "sqm": 69.58
      }
    },
    "price": {
      "amount": 1613888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P11",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msEn2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MTYyYjliMTcyZiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMTEmYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDkmcHJpY2U9MSUyQzYxMyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zRW4yQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0VuMkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msEs2AI",
    "unit_code": "DE Rosehill B-1-101",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "1",
      "area": {
        "sqft": 754,
        "sqm": 70.05
      }
    },
    "price": {
      "amount": 1616888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-1-101",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msEs2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzA0ZDhmMjdkMSZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItMS0xMDEmYmVkcz0xK0JlZHJvb20mZmxvb3I9MSZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NTQmcHJpY2U9MSUyQzYxNiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zRXMyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0VzMkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msEz2AI",
    "unit_code": "DE Rosehill B-2-201",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 754,
        "sqm": 70.05
      }
    },
    "price": {
      "amount": 1619888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-2-201",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msEz2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Mzk5YWY4YWU1NCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItMi0yMDEmYmVkcz0xK0JlZHJvb20mZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NTQmcHJpY2U9MSUyQzYxOSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zRXoyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0V6MkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msOL2AY",
    "unit_code": "DE Rosehill B-P-P02",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 788,
        "sqm": 73.21
      }
    },
    "price": {
      "amount": 1624888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P02",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msOL2AY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWRkOGEzODkyMyZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMDImYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03ODgmcHJpY2U9MSUyQzYyNCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zT0wyQVkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc09MMkFZJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msFZ2AY",
    "unit_code": "DE Rosehill B-1-102",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "1",
      "area": {
        "sqft": 787,
        "sqm": 73.11
      }
    },
    "price": {
      "amount": 1625888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-1-102",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msFZ2AY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDMzNjJhMGFmYSZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItMS0xMDImYmVkcz0xK0JlZHJvb20mZmxvb3I9MSZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03ODcmcHJpY2U9MSUyQzYyNSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zRloyQVkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0ZaMkFZJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msN32AI",
    "unit_code": "DE Rosehill B-G-G02",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "G",
      "area": {
        "sqft": 808,
        "sqm": 75.07
      }
    },
    "price": {
      "amount": 1630888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-G-G02",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msN32AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjgyNDM2ODJmMiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItRy1HMDImYmVkcz0xK0JlZHJvb20mZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04MDgmcHJpY2U9MSUyQzYzMCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zTjMyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc04zMkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msO92AI",
    "unit_code": "DE Rosehill B-G-G01",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "G",
      "area": {
        "sqft": 804,
        "sqm": 74.69
      }
    },
    "price": {
      "amount": 1634888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-G-G01",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msO92AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NjQyMTg4NTBiMCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItRy1HMDEmYmVkcz0xK0JlZHJvb20mZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04MDQmcHJpY2U9MSUyQzYzNCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zTzkyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc085MkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msBP2AY",
    "unit_code": "DE Rosehill B-P-P04",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 745,
        "sqm": 69.21
      }
    },
    "price": {
      "amount": 1667888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P04",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msBP2AY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzI4NGMzOTI1OCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMDQmYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDUmcHJpY2U9MSUyQzY2NyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zQlAyQVkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0JQMkFZJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msBi2AI",
    "unit_code": "DE Rosehill B-P-P06",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 745,
        "sqm": 69.21
      }
    },
    "price": {
      "amount": 1667888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P06",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msBi2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NTM4YWMwZDI3MiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMDYmYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDUmcHJpY2U9MSUyQzY2NyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zQmkyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0JpMkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msGC2AY",
    "unit_code": "DE Rosehill B-P-P05",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 745,
        "sqm": 69.21
      }
    },
    "price": {
      "amount": 1667888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P05",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msGC2AY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZGNkNTdmYzQ2YiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMDUmYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDUmcHJpY2U9MSUyQzY2NyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zR0MyQVkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0dDMkFZJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msJy2AI",
    "unit_code": "DE Rosehill B-P-P03",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 746,
        "sqm": 69.31
      }
    },
    "price": {
      "amount": 1668888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P03",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msJy2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDNjZGQ4N2UxMiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMDMmYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDYmcHJpY2U9MSUyQzY2OCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zSnkyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0p5MkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msD52AI",
    "unit_code": "DE Rosehill B-G-G08",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "G",
      "area": {
        "sqft": 844,
        "sqm": 78.41
      }
    },
    "price": {
      "amount": 1671888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-G-G08",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msD52AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTc4ZTFjNDkwZSZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItRy1HMDgmYmVkcz0xK0JlZHJvb20mZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04NDQmcHJpY2U9MSUyQzY3MSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zRDUyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0Q1MkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msNv2AI",
    "unit_code": "DE Rosehill B-2-205",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 745,
        "sqm": 69.21
      }
    },
    "price": {
      "amount": 1676888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-2-205",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msNv2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDViZmI1Y2QwNCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItMi0yMDUmYmVkcz0xK0JlZHJvb20mZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDUmcHJpY2U9MSUyQzY3NiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zTnYyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc052MkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msBJ2AY",
    "unit_code": "DE Rosehill B-G-G05",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "G",
      "area": {
        "sqft": 820,
        "sqm": 76.18
      }
    },
    "price": {
      "amount": 1703888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-G-G05",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msBJ2AY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTM0MTI1ZDBlMiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItRy1HMDUmYmVkcz0xK0JlZHJvb20mZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04MjAmcHJpY2U9MSUyQzcwMyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zQkoyQVkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0JKMkFZJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msFb2AI",
    "unit_code": "DE Rosehill B-G-G06",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "G",
      "area": {
        "sqft": 822,
        "sqm": 76.37
      }
    },
    "price": {
      "amount": 1703888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-G-G06",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msFb2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjRmNzI1MzQ2ZiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItRy1HMDYmYmVkcz0xK0JlZHJvb20mZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04MjImcHJpY2U9MSUyQzcwMyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zRmIyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0ZiMkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msMd2AI",
    "unit_code": "DE Rosehill B-G-G03",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "G",
      "area": {
        "sqft": 821,
        "sqm": 76.27
      }
    },
    "price": {
      "amount": 1703888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-G-G03",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msMd2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZWU0ZDNiM2YxYiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItRy1HMDMmYmVkcz0xK0JlZHJvb20mZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04MjEmcHJpY2U9MSUyQzcwMyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zTWQyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc01kMkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msOh2AI",
    "unit_code": "DE Rosehill B-G-G04",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "G",
      "area": {
        "sqft": 820,
        "sqm": 76.18
      }
    },
    "price": {
      "amount": 1703888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-G-G04",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msOh2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTE0ZDdhMDY2MCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItRy1HMDQmYmVkcz0xK0JlZHJvb20mZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04MjAmcHJpY2U9MSUyQzcwMyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zT2gyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc09oMkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msFh2AI",
    "unit_code": "DE Rosehill A-1-107",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "1",
      "area": {
        "sqft": 823,
        "sqm": 76.46
      }
    },
    "price": {
      "amount": 1707888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-1-107",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msFh2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZGVhMjU0MGY4YiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMS0xMDcmYmVkcz0xK0JlZHJvb20mZmxvb3I9MSZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04MjMmcHJpY2U9MSUyQzcwNyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zRmgyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0ZoMkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000msK52AI",
    "unit_code": "DE Rosehill B-P-P08",
    "location": {
      "full_address": "Dubai Hills Estates - Rosehill",
      "community": "Dubai Hills Estates",
      "project": "Rosehill"
    },
    "specifications": {
      "beds": 1,
      "floor": "P",
      "area": {
        "sqft": 842,
        "sqm": 78.22
      }
    },
    "price": {
      "amount": 1707888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill B-P-P08",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msK52AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzAxZDk5MTExMiZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0ItUC1QMDgmYmVkcz0xK0JlZHJvb20mZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04NDImcHJpY2U9MSUyQzcwNyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMG1zSzUyQUkmdGl0bGU9Um9zZWhpbGwmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1yb3NlaGlsbC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaTk0wMDAwMDBtc0s1MkFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl0000025sCXMAY",
    "unit_code": "DE Parkwood A-2-201",
    "location": {
      "full_address": "Dubai Hills Estates - Parkwood",
      "community": "Dubai Hills Estates",
      "project": "Parkwood"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 762,
        "sqm": 70.79
      }
    },
    "price": {
      "amount": 1762888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-2-201",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sCXMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWZlNDhjMmEyOCZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMi0yMDEmYmVkcz0xK0JlZHJvb20mZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NjImcHJpY2U9MSUyQzc2MiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMjVzQ1hNQVkmdGl0bGU9UGFya3dvb2QmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1wYXJrd29vZC1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDI1c0NYTUFZJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl0000025s91MAA",
    "unit_code": "DE Parkwood A-2-209",
    "location": {
      "full_address": "Dubai Hills Estates - Parkwood",
      "community": "Dubai Hills Estates",
      "project": "Parkwood"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 764,
        "sqm": 70.98
      }
    },
    "price": {
      "amount": 1767888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-2-209",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s91MAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWY3NjZkMzE5ZSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMi0yMDkmYmVkcz0xK0JlZHJvb20mZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NjQmcHJpY2U9MSUyQzc2NyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMjVzOTFNQUEmdGl0bGU9UGFya3dvb2QmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1wYXJrd29vZC1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDI1czkxTUFBJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjy42AA",
    "unit_code": "DC Silva-P2-P202",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "P2",
      "area": {
        "sqft": 740,
        "sqm": 68.75
      }
    },
    "price": {
      "amount": 1790888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-P2-P202",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjy42AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MDhhMjdiZWFlOCZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLVAyLVAyMDImYmVkcz0xK0JlZHJvb20mZmxvb3I9UDImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzQwJnByaWNlPTElMkM3OTAlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoank0MkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqeTQyQUEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjq62AA",
    "unit_code": "DC Silva-P2-P201",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "P2",
      "area": {
        "sqft": 740,
        "sqm": 68.75
      }
    },
    "price": {
      "amount": 1791888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-P2-P201",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjq62AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTQ0MzI1OGM4YSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLVAyLVAyMDEmYmVkcz0xK0JlZHJvb20mZmxvb3I9UDImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzQwJnByaWNlPTElMkM3OTElMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanE2MkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqcTYyQUEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjyJ2AQ",
    "unit_code": "DC Silva-1-101",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "1",
      "area": {
        "sqft": 744,
        "sqm": 69.12
      }
    },
    "price": {
      "amount": 1803888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-1-101",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjyJ2AQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NGViY2ZhNGQxMiZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTEtMTAxJmJlZHM9MStCZWRyb29tJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzQ0JnByaWNlPTElMkM4MDMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanlKMkFRJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqeUoyQVEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hk392AA",
    "unit_code": "DC Silva-2-202",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 744,
        "sqm": 69.12
      }
    },
    "price": {
      "amount": 1806888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-2-202",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hk392AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDNiZjQ1M2E4NSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTItMjAyJmJlZHM9MStCZWRyb29tJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzQ0JnByaWNlPTElMkM4MDYlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoazM5MkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhrMzkyQUEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hk2p2AA",
    "unit_code": "DC Silva-2-201",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 744,
        "sqm": 69.12
      }
    },
    "price": {
      "amount": 1806888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-2-201",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hk2p2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9M2ZjMDM5MmYxOCZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTItMjAxJmJlZHM9MStCZWRyb29tJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzQ0JnByaWNlPTElMkM4MDYlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoazJwMkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhrMnAyQUEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjpx2AA",
    "unit_code": "DC Silva-3-301",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 744,
        "sqm": 69.12
      }
    },
    "price": {
      "amount": 1810888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-3-301",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjpx2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDIxZWQwNTkyMyZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTMtMzAxJmJlZHM9MStCZWRyb29tJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzQ0JnByaWNlPTElMkM4MTAlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanB4MkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqcHgyQUEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjdO2AQ",
    "unit_code": "DC Silva-3-302",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 744,
        "sqm": 69.12
      }
    },
    "price": {
      "amount": 1810888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-3-302",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjdO2AQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ODhiOThhMzcxYiZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTMtMzAyJmJlZHM9MStCZWRyb29tJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzQ0JnByaWNlPTElMkM4MTAlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoamRPMkFRJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqZE8yQVEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000002DDtUMAW",
    "unit_code": "DC Albero-2-204",
    "location": {
      "full_address": "Dubai Creek Harbour - Albero",
      "community": "Dubai Creek Harbour",
      "project": "Albero"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 757,
        "sqm": 70.33
      }
    },
    "price": {
      "amount": 1820888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-2-204",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDtUMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZWRiYzhjNzcwNCZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0yLTIwNCZiZWRzPTErQmVkcm9vbSZmbG9vcj0yJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTc1NyZwcmljZT0xJTJDODIwJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyRER0VU1BVyZ0aXRsZT1BbGJlcm8mY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1hbGJlcm8tYXQtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMkREdFVNQVcmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjr92AA",
    "unit_code": "DC Silva-P2-P204",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "P2",
      "area": {
        "sqft": 755,
        "sqm": 70.14
      }
    },
    "price": {
      "amount": 1824888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-P2-P204",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjr92AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9M2ZmMGZiZTExYiZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLVAyLVAyMDQmYmVkcz0xK0JlZHJvb20mZmxvb3I9UDImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzU1JnByaWNlPTElMkM4MjQlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanI5MkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqcjkyQUEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hk9P2AQ",
    "unit_code": "DC Silva-2-208",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 746,
        "sqm": 69.31
      }
    },
    "price": {
      "amount": 1826888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-2-208",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hk9P2AQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWFmZDE5NGExMiZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTItMjA4JmJlZHM9MStCZWRyb29tJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzQ2JnByaWNlPTElMkM4MjYlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoazlQMkFRJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhrOVAyQVEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjxJ2AQ",
    "unit_code": "DC Silva-1-104",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "1",
      "area": {
        "sqft": 755,
        "sqm": 70.14
      }
    },
    "price": {
      "amount": 1827888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-1-104",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjxJ2AQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Y2FlOGRiNTZlYiZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTEtMTA0JmJlZHM9MStCZWRyb29tJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzU1JnByaWNlPTElMkM4MjclMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanhKMkFRJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqeEoyQVEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjrp2AA",
    "unit_code": "DC Silva-2-204",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 755,
        "sqm": 70.14
      }
    },
    "price": {
      "amount": 1831888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-2-204",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjrp2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MzMzMDUyZTkyMCZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTItMjA0JmJlZHM9MStCZWRyb29tJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzU1JnByaWNlPTElMkM4MzElMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanJwMkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqcnAyQUEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjrR2AQ",
    "unit_code": "DC Silva-3-304",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 755,
        "sqm": 70.14
      }
    },
    "price": {
      "amount": 1834888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-3-304",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjrR2AQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjliYmZhMzdhZCZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTMtMzA0JmJlZHM9MStCZWRyb29tJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzU1JnByaWNlPTElMkM4MzQlMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanJSMkFRJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqclIyQVEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZNM000000hjs72AA",
    "unit_code": "DC Silva-4-404",
    "location": {
      "full_address": "Dubai Creek Harbour - Silva",
      "community": "Dubai Creek Harbour",
      "project": "Silva"
    },
    "specifications": {
      "beds": 1,
      "floor": "4",
      "area": {
        "sqft": 755,
        "sqm": 70.14
      }
    },
    "price": {
      "amount": 1838888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-4-404",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjs72AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWIyZjc4NThkOSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTQtNDA0JmJlZHM9MStCZWRyb29tJmZsb29yPTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzU1JnByaWNlPTElMkM4MzglMkM4ODgmcHJvcGVydHlfaWQ9YTBaTk0wMDAwMDBoanM3MkFBJnRpdGxlPVNpbHZhJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9c2lsdmEtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMGhqczcyQUEmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUZwMAM",
    "unit_code": "DE Hillsedge A-2-209",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 708,
        "sqm": 65.78
      }
    },
    "price": {
      "amount": 1848888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-2-209",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUZwMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ODJmODRmNTM1MCZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTItMjA5JmJlZHM9MStCZWRyb29tJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzA4JnByaWNlPTElMkM4NDglMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVp3TUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVp3TUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl0000025sFKMAY",
    "unit_code": "DE Parkwood B-3-301",
    "location": {
      "full_address": "Dubai Hills Estates - Parkwood",
      "community": "Dubai Hills Estates",
      "project": "Parkwood"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 741,
        "sqm": 68.84
      }
    },
    "price": {
      "amount": 1849888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood B-3-301",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sFKMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmFhNzUwNDI4YiZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0ItMy0zMDEmYmVkcz0xK0JlZHJvb20mZmxvb3I9MyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03NDEmcHJpY2U9MSUyQzg0OSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMjVzRktNQVkmdGl0bGU9UGFya3dvb2QmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1wYXJrd29vZC1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDI1c0ZLTUFZJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUgGMAU",
    "unit_code": "DE Hillsedge A-3-309",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 708,
        "sqm": 65.78
      }
    },
    "price": {
      "amount": 1852888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-3-309",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUgGMAU",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NzZiNDY5YTY5OCZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTMtMzA5JmJlZHM9MStCZWRyb29tJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzA4JnByaWNlPTElMkM4NTIlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWdHTUFVJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWdHTUFVJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUZfMAM",
    "unit_code": "DE Hillsedge A-2-207",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1858888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-2-207",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUZfMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmJlNjBlMjNmMiZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTItMjA3JmJlZHM9MStCZWRyb29tJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NTglMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVpmTUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVpmTUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUT9MAM",
    "unit_code": "DE Hillsedge A-2-206",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1859888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-2-206",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUT9MAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTc1YWRiM2ZkYiZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTItMjA2JmJlZHM9MStCZWRyb29tJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NTklMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVQ5TUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVQ5TUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUTMMA2",
    "unit_code": "DE Hillsedge B-5-509",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "5",
      "area": {
        "sqft": 708,
        "sqm": 65.78
      }
    },
    "price": {
      "amount": 1859888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-5-509",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUTMMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDFjOWIwMGM4OCZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTUtNTA5JmJlZHM9MStCZWRyb29tJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzA4JnByaWNlPTElMkM4NTklMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVRNTUEyJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVRNTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUU2MAM",
    "unit_code": "DE Hillsedge A-5-509",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "5",
      "area": {
        "sqft": 708,
        "sqm": 65.78
      }
    },
    "price": {
      "amount": 1859888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-5-509",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUU2MAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzJkNmNjMTllMSZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTUtNTA5JmJlZHM9MStCZWRyb29tJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzA4JnByaWNlPTElMkM4NTklMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVUyTUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVUyTUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUXmMAM",
    "unit_code": "DE Hillsedge A-3-307",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1861888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-3-307",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUXmMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NmNlNGVmMDRiZSZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTMtMzA3JmJlZHM9MStCZWRyb29tJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NjElMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVhtTUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVhtTUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUaCMAU",
    "unit_code": "DE Hillsedge A-3-306",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1862888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-3-306",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUaCMAU",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MTYxYjU5Yjk1MCZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTMtMzA2JmJlZHM9MStCZWRyb29tJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NjIlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWFDTUFVJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWFDTUFVJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUdDMAU",
    "unit_code": "DE Hillsedge B-6-609",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "6",
      "area": {
        "sqft": 708,
        "sqm": 65.78
      }
    },
    "price": {
      "amount": 1863888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-6-609",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUdDMAU",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmFhN2IwNWE2MiZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTYtNjA5JmJlZHM9MStCZWRyb29tJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzA4JnByaWNlPTElMkM4NjMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWRETUFVJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWRETUFVJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUdLMAU",
    "unit_code": "DE Hillsedge A-4-407",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "4",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1865888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-4-407",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUdLMAU",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjQ2YjBmMGQ0OCZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTQtNDA3JmJlZHM9MStCZWRyb29tJmZsb29yPTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NjUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWRMTUFVJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWRMTUFVJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUZEMA2",
    "unit_code": "DE Hillsedge A-4-406",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "4",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1866888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-4-406",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUZEMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YmIzNTU0Yzk1YyZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTQtNDA2JmJlZHM9MStCZWRyb29tJmZsb29yPTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NjYlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVpFTUEyJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVpFTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUYNMA2",
    "unit_code": "DE Hillsedge B-7-709",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "7",
      "area": {
        "sqft": 708,
        "sqm": 65.78
      }
    },
    "price": {
      "amount": 1866888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-7-709",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUYNMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTIzNmM1N2IxNiZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTctNzA5JmJlZHM9MStCZWRyb29tJmZsb29yPTcmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzA4JnByaWNlPTElMkM4NjYlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVlOTUEyJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVlOTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUfrMAE",
    "unit_code": "DE Hillsedge B-5-507",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "5",
      "area": {
        "sqft": 710,
        "sqm": 65.96
      }
    },
    "price": {
      "amount": 1867888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-5-507",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUfrMAE",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTI5NmY3ZThiZSZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTUtNTA3JmJlZHM9MStCZWRyb29tJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzEwJnByaWNlPTElMkM4NjclMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWZyTUFFJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWZyTUFFJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUZrMAM",
    "unit_code": "DE Hillsedge B-5-506",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "5",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1869888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-5-506",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUZrMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MmNmZGNiMDIzOSZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTUtNTA2JmJlZHM9MStCZWRyb29tJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NjklMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVpyTUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVpyTUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUZOMA2",
    "unit_code": "DE Hillsedge B-6-607",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "6",
      "area": {
        "sqft": 710,
        "sqm": 65.96
      }
    },
    "price": {
      "amount": 1870888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-6-607",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUZOMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YWY5NDVlOGJmYiZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTYtNjA3JmJlZHM9MStCZWRyb29tJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzEwJnByaWNlPTElMkM4NzAlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVpPTUEyJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVpPTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUa4MAE",
    "unit_code": "DE Hillsedge B-8-809",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "8",
      "area": {
        "sqft": 708,
        "sqm": 65.78
      }
    },
    "price": {
      "amount": 1870888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-8-809",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUa4MAE",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzA2MTlkN2M5MiZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTgtODA5JmJlZHM9MStCZWRyb29tJmZsb29yPTgmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzA4JnByaWNlPTElMkM4NzAlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWE0TUFFJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWE0TUFFJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000002DE2pMAG",
    "unit_code": "DC Albero-2-202",
    "location": {
      "full_address": "Dubai Creek Harbour - Albero",
      "community": "Dubai Creek Harbour",
      "project": "Albero"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 768,
        "sqm": 71.35
      }
    },
    "price": {
      "amount": 1871888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-2-202",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE2pMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Y2JiZTFlMmE0ZCZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0yLTIwMiZiZWRzPTErQmVkcm9vbSZmbG9vcj0yJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTc2OCZwcmljZT0xJTJDODcxJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyREUycE1BRyZ0aXRsZT1BbGJlcm8mY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1hbGJlcm8tYXQtZHViYWktY3JlZWstaGFyYm91ciZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMkRFMnBNQUcmZGVwb3NpdD0zNzAwMC4w"
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUe8MAE",
    "unit_code": "DE Hillsedge A-6-607",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "6",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1872888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge A-6-607",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUe8MAE",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWY0ZjE1Zjg0YiZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStBLTYtNjA3JmJlZHM9MStCZWRyb29tJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NzIlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWU4TUFFJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWU4TUFFJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUZlMAM",
    "unit_code": "DE Hillsedge B-6-606",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "6",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1873888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-6-606",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUZlMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MDJhYTRkYzkwZCZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTYtNjA2JmJlZHM9MStCZWRyb29tJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NzMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVpsTUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVpsTUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUXrMAM",
    "unit_code": "DE Hillsedge B-7-707",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "7",
      "area": {
        "sqft": 710,
        "sqm": 65.96
      }
    },
    "price": {
      "amount": 1874888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-7-707",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUXrMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NzhmOWIyZDI0MyZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTctNzA3JmJlZHM9MStCZWRyb29tJmZsb29yPTcmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzEwJnByaWNlPTElMkM4NzQlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVhyTUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVhyTUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUYfMAM",
    "unit_code": "DE Hillsedge B-7-706",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "7",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1877888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-7-706",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUYfMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZGM1ZWUzMDY5YSZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTctNzA2JmJlZHM9MStCZWRyb29tJmZsb29yPTcmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4NzclMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVlmTUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVlmTUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUe7MAE",
    "unit_code": "DE Hillsedge B-8-807",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "8",
      "area": {
        "sqft": 710,
        "sqm": 65.96
      }
    },
    "price": {
      "amount": 1878888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-8-807",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUe7MAE",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjliNzAzZWI2NSZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTgtODA3JmJlZHM9MStCZWRyb29tJmZsb29yPTgmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzEwJnByaWNlPTElMkM4NzglMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWU3TUFFJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWU3TUFFJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUgCMAU",
    "unit_code": "DE Hillsedge B-8-806",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "8",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1880888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-8-806",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUgCMAU",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTYxNmJiOWNhNiZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTgtODA2JmJlZHM9MStCZWRyb29tJmZsb29yPTgmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4ODAlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWdDTUFVJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWdDTUFVJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUUCMA2",
    "unit_code": "DE Hillsedge B-9-907",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "9",
      "area": {
        "sqft": 710,
        "sqm": 65.96
      }
    },
    "price": {
      "amount": 1881888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-9-907",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUUCMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MDY4ZDFiZjA5YSZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTktOTA3JmJlZHM9MStCZWRyb29tJmZsb29yPTkmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzEwJnByaWNlPTElMkM4ODElMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVVDTUEyJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVVDTUEyJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUcxMAE",
    "unit_code": "DE Hillsedge B-9-906",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "9",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1884888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-9-906",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUcxMAE",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDdmZGViZTE0MyZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTktOTA2JmJlZHM9MStCZWRyb29tJmZsb29yPTkmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM4ODQlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VWN4TUFFJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VWN4TUFFJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl0000025s7VMAQ",
    "unit_code": "DE Parkwood B-3-305",
    "location": {
      "full_address": "Dubai Hills Estates - Parkwood",
      "community": "Dubai Hills Estates",
      "project": "Parkwood"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 729,
        "sqm": 67.73
      }
    },
    "price": {
      "amount": 1912888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood B-3-305",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s7VMAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MDZkMTdhNWM2NSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0ItMy0zMDUmYmVkcz0xK0JlZHJvb20mZmxvb3I9MyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03MjkmcHJpY2U9MSUyQzkxMiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMjVzN1ZNQVEmdGl0bGU9UGFya3dvb2QmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1wYXJrd29vZC1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDI1czdWTUFRJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl000001xUThMAM",
    "unit_code": "DE Hillsedge B-17-1706",
    "location": {
      "full_address": "Dubai Hills Estates - Hillsedge",
      "community": "Dubai Hills Estates",
      "project": "Hillsedge"
    },
    "specifications": {
      "beds": 1,
      "floor": "17",
      "area": {
        "sqft": 711,
        "sqm": 66.05
      }
    },
    "price": {
      "amount": 1913888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_4-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_3-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-1-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=hillsedge-at-dubai-hills-estate_DE Hillsedge B-17-1706",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001xUThMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NGFlNGU2M2EyOSZsb2NhdGlvbl9jb2RlPURFK0hpbGxzZWRnZStCLTE3LTE3MDYmYmVkcz0xK0JlZHJvb20mZmxvb3I9MTcmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9NzExJnByaWNlPTElMkM5MTMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDF4VVRoTUFNJnRpdGxlPUhpbGxzZWRnZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWhpbGxzZWRnZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDF4VVRoTUFNJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl0000025sA6MAI",
    "unit_code": "DE Parkwood B-4-405",
    "location": {
      "full_address": "Dubai Hills Estates - Parkwood",
      "community": "Dubai Hills Estates",
      "project": "Parkwood"
    },
    "specifications": {
      "beds": 1,
      "floor": "4",
      "area": {
        "sqft": 729,
        "sqm": 67.73
      }
    },
    "price": {
      "amount": 1915888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood B-4-405",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sA6MAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ODkzNTc4NjQzMCZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0ItNC00MDUmYmVkcz0xK0JlZHJvb20mZmxvb3I9NCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03MjkmcHJpY2U9MSUyQzkxNSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMjVzQTZNQUkmdGl0bGU9UGFya3dvb2QmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1wYXJrd29vZC1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDI1c0E2TUFJJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl0000025s7PMAQ",
    "unit_code": "DE Parkwood B-3-303",
    "location": {
      "full_address": "Dubai Hills Estates - Parkwood",
      "community": "Dubai Hills Estates",
      "project": "Parkwood"
    },
    "specifications": {
      "beds": 1,
      "floor": "3",
      "area": {
        "sqft": 730,
        "sqm": 67.82
      }
    },
    "price": {
      "amount": 1916888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood B-3-303",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s7PMAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OGYwNWRjYTQxYyZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0ItMy0zMDMmYmVkcz0xK0JlZHJvb20mZmxvb3I9MyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT03MzAmcHJpY2U9MSUyQzkxNiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMjVzN1BNQVEmdGl0bGU9UGFya3dvb2QmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1wYXJrd29vZC1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDI1czdQTUFRJmRlcG9zaXQ9MzcwMDAuMA=="
    },
    "contact": {
      "call": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    },
    "availability_note": null
  },
  {
    "unit_id": "a0ZSl0000025sCBMAY",
    "unit_code": "DE Parkwood A-2-202",
    "location": {
      "full_address": "Dubai Hills Estates - Parkwood",
      "community": "Dubai Hills Estates",
      "project": "Parkwood"
    },
    "specifications": {
      "beds": 1,
      "floor": "2",
      "area": {
        "sqft": 824,
        "sqm": 76.55
      }
    },
    "price": {
      "amount": 1917888,
      "currency": "AED"
    },
    "gallery": {
      "images": [
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
        "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
      ]
    },
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-2-202",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sCBMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmRjNDdlZjhhOSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMi0yMDImYmVkcz0xK0JlZHJvb20mZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT04MjQmcHJpY2U9MSUyQzkxNyUyQzg4OCZwcm9wZXJ0
[
  {
    "id": "a0ZNM000000hjrD2AQ",
    "name": "DC Silva-37-3707",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Silva",
      "map_url": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "37",
      "area_sqft": "1403",
      "area_sqm": "130.34"
    },
    "price": {
      "value": "3,187,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-37-3707",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjrD2AQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OGM3MWU2OWQzOSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTM3LTM3MDcmYmVkcz0yK0JlZHJvb21zJmZsb29yPTM3JnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM0MDMmcHJpY2U9MyUyQzE4NyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMGhqckQyQVEmdGl0bGU9U2lsdmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zaWx2YS1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWk5NMDAwMDAwaGpyRDJBUSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000hjqa2AA",
    "name": "DC Silva-38-3807",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Silva",
      "map_url": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "38",
      "area_sqft": "1403",
      "area_sqm": "130.34"
    },
    "price": {
      "value": "3,192,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-38-3807",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjqa2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDIzYzk5N2M2NSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTM4LTM4MDcmYmVkcz0yK0JlZHJvb21zJmZsb29yPTM4JnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM0MDMmcHJpY2U9MyUyQzE5MiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMGhqcWEyQUEmdGl0bGU9U2lsdmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zaWx2YS1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWk5NMDAwMDAwaGpxYTJBQSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000000L5pYMAS",
    "name": "DC Aeon T2-P-P08",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Aeon",
      "map_url": "https://properties.emaar.com/en/properties/aeon/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "P",
      "area_sqft": "1289",
      "area_sqm": "119.75"
    },
    "price": {
      "value": "3,197,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/AEON_HERO_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/AEON_HERO_5-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/FEATURES_1200X655_3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=aeon_DC Aeon T2-P-P08",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000L5pYMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmRiZGI2YjE1NiZsb2NhdGlvbl9jb2RlPURDK0Flb24rVDItUC1QMDgmYmVkcz0yK0JlZHJvb21zJmZsb29yPVAmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzI4OSZwcmljZT0zJTJDMTk3JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwTDVwWU1BUyZ0aXRsZT1BZW9uJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9YWVvbiZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMEw1cFlNQVMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/aeon/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000000L5klMAC",
    "name": "DC Aeon T2-P-P07",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Aeon",
      "map_url": "https://properties.emaar.com/en/properties/aeon/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "P",
      "area_sqft": "1289",
      "area_sqm": "119.75"
    },
    "price": {
      "value": "3,202,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/AEON_HERO_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/AEON_HERO_5-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/FEATURES_1200X655_3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=aeon_DC Aeon T2-P-P07",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000L5klMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NzVjZmE2NGUyOCZsb2NhdGlvbl9jb2RlPURDK0Flb24rVDItUC1QMDcmYmVkcz0yK0JlZHJvb21zJmZsb29yPVAmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzI4OSZwcmljZT0zJTJDMjAyJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwTDVrbE1BQyZ0aXRsZT1BZW9uJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9YWVvbiZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMEw1a2xNQUMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/aeon/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000000L5pcMAC",
    "name": "DC Aeon T2-P-P09",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Aeon",
      "map_url": "https://properties.emaar.com/en/properties/aeon/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "P",
      "area_sqft": "1289",
      "area_sqm": "119.75"
    },
    "price": {
      "value": "3,202,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/AEON_HERO_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/AEON_HERO_5-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/FEATURES_1200X655_3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=aeon_DC Aeon T2-P-P09",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000000L5pcMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDBmZGJiMmJhNiZsb2NhdGlvbl9jb2RlPURDK0Flb24rVDItUC1QMDkmYmVkcz0yK0JlZHJvb21zJmZsb29yPVAmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzI4OSZwcmljZT0zJTJDMjAyJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAwTDVwY01BQyZ0aXRsZT1BZW9uJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9YWVvbiZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMEw1cGNNQUMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/aeon/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msCD2AY",
    "name": "DE Rosehill A-7-702",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "7",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,207,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-7-702",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msCD2AY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjZiYTVmNTk3MCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtNy03MDImYmVkcz0yK0JlZHJvb21zJmZsb29yPTcmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMjA3JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNDRDJBWSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zQ0QyQVkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000hjyb2AA",
    "name": "DC Silva-44-4407",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Silva",
      "map_url": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "44",
      "area_sqft": "1403",
      "area_sqm": "130.34"
    },
    "price": {
      "value": "3,226,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-44-4407",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjyb2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDY0MWU2ZGQ3NSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTQ0LTQ0MDcmYmVkcz0yK0JlZHJvb21zJmZsb29yPTQ0JnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM0MDMmcHJpY2U9MyUyQzIyNiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMGhqeWIyQUEmdGl0bGU9U2lsdmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zaWx2YS1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWk5NMDAwMDAwaGp5YjJBQSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000hjyn2AA",
    "name": "DC Silva-45-4507",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Silva",
      "map_url": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "45",
      "area_sqft": "1403",
      "area_sqm": "130.34"
    },
    "price": {
      "value": "3,232,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-45-4507",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjyn2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTliNmZhNmFhOSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTQ1LTQ1MDcmYmVkcz0yK0JlZHJvb21zJmZsb29yPTQ1JnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM0MDMmcHJpY2U9MyUyQzIzMiUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMGhqeW4yQUEmdGl0bGU9U2lsdmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zaWx2YS1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWk5NMDAwMDAwaGp5bjJBQSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000002DDwHMAW",
    "name": "DC Albero-5-501",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Albero",
      "map_url": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "5",
      "area_sqft": "1435",
      "area_sqm": "133.32"
    },
    "price": {
      "value": "3,233,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-5-501",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDwHMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YmNkNmY5OGJlNSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby01LTUwMSZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9NSZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNDM1JnByaWNlPTMlMkMyMzMlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHdITUFXJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER3SE1BVyZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000002DDuiMAG",
    "name": "DC Albero-7-701",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Albero",
      "map_url": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "7",
      "area_sqft": "1435",
      "area_sqm": "133.32"
    },
    "price": {
      "value": "3,245,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-7-701",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDuiMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9N2Y1MjI4NzZkZiZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby03LTcwMSZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9NyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNDM1JnByaWNlPTMlMkMyNDUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHVpTUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER1aU1BRyZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl0000025sCCMAY",
    "name": "DE Parkwood A-9-908",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Parkwood",
      "map_url": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "9",
      "area_sqft": "1302",
      "area_sqm": "120.96"
    },
    "price": {
      "value": "3,265,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-9-908",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sCCMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NGU1YzBhZmJkMyZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtOS05MDgmYmVkcz0yK0JlZHJvb21zJmZsb29yPTkmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzMwMiZwcmljZT0zJTJDMjY1JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNDQ01BWSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzQ0NNQVkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000002DDv8MAG",
    "name": "DC Albero-3-306",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Albero",
      "map_url": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "3",
      "area_sqft": "1453",
      "area_sqm": "134.99"
    },
    "price": {
      "value": "3,267,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-3-306",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDv8MAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTBhZGFmNjBhMiZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0zLTMwNiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNDUzJnByaWNlPTMlMkMyNjclMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHY4TUFHJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER2OE1BRyZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msJD2AY",
    "name": "DE Rosehill A-10-1002",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "10",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,270,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-10-1002",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msJD2AY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzNmZTFjN2EyNSZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTAtMTAwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTAmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMjcwJTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNKRDJBWSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zSkQyQVkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msJn2AI",
    "name": "DE Rosehill A-12-1202",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "12",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,282,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-12-1202",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msJn2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTBlYTljOTc1ZCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTItMTIwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMjgyJTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNKbjJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zSm4yQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl0000025sDRMAY",
    "name": "DE Parkwood A-12-1208",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Parkwood",
      "map_url": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "12",
      "area_sqft": "1302",
      "area_sqm": "120.96"
    },
    "price": {
      "value": "3,284,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-12-1208",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sDRMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MDQwYzZkODQ4OSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTItMTIwOCZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzMwMiZwcmljZT0zJTJDMjg0JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNEUk1BWSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRFJNQVkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msEm2AI",
    "name": "DE Rosehill A-13-1302",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "13",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,288,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-13-1302",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msEm2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OGUzZGE1NWY4ZCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTMtMTMwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMjg4JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNFbTJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zRW0yQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000002DDtFMAW",
    "name": "DC Albero-7-706",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Albero",
      "map_url": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "7",
      "area_sqft": "1453",
      "area_sqm": "134.99"
    },
    "price": {
      "value": "3,292,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-7-706",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DDtFMAW",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTYyOGJkZTgyYyZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby03LTcwNiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9NyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNDUzJnByaWNlPTMlMkMyOTIlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDJERHRGTUFXJnRpdGxlPUFsYmVybyZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWFsYmVyby1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAyRER0Rk1BVyZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msJv2AI",
    "name": "DE Rosehill A-15-1502",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "15",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,300,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-15-1502",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msJv2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZTA1YmE1NDdmMyZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTUtMTUwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMzAwJTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNKdjJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zSnYyQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msMj2AI",
    "name": "DE Rosehill A-16-1602",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "16",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,306,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-16-1602",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msMj2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWIwYzFjMjkyYyZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTYtMTYwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMzA2JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNNajJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zTWoyQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msN12AI",
    "name": "DE Rosehill A-18-1802",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "18",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,318,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-18-1802",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msN12AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NWNmYjdlNGRmYyZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTgtMTgwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTgmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMzE4JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNOMTJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zTjEyQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msBu2AI",
    "name": "DE Rosehill A-19-1902",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "19",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,324,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-19-1902",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msBu2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZmUzZThiY2QyZCZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTktMTkwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTkmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMzI0JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNCdTJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zQnUyQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msMh2AI",
    "name": "DE Rosehill A-20-2002",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "20",
      "area_sqft": "1419",
      "area_sqm": "131.83"
    },
    "price": {
      "value": "3,330,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-20-2002",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msMh2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTQwNWJmMjQ5OSZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMjAtMjAwMiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MjAmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzQxOSZwcmljZT0zJTJDMzMwJTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNNaDJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zTWgyQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl0000025sD9MAI",
    "name": "DE Parkwood A-16-1604",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Parkwood",
      "map_url": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "16",
      "area_sqft": "1310",
      "area_sqm": "121.7"
    },
    "price": {
      "value": "3,331,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood A-16-1604",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sD9MAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjVlZjZlOTk2NCZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0EtMTYtMTYwNCZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzMxMCZwcmljZT0zJTJDMzMxJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNEOU1BSSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRDlNQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000msCx2AI",
    "name": "DE Rosehill A-13-1306",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Rosehill",
      "map_url": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "13",
      "area_sqft": "1520",
      "area_sqm": "141.21"
    },
    "price": {
      "value": "3,344,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_1-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/07/PRO_INT_5-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=rosehill-dubai-hills-estate_DE Rosehill A-13-1306",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000msCx2AI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDU1YTFlYjJiNyZsb2NhdGlvbl9jb2RlPURFK1Jvc2VoaWxsK0EtMTMtMTMwNiZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzUyMCZwcmljZT0zJTJDMzQ0JTJDODg4JnByb3BlcnR5X2lkPWEwWk5NMDAwMDAwbXNDeDJBSSZ0aXRsZT1Sb3NlaGlsbCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXJvc2VoaWxsLWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpOTTAwMDAwMG1zQ3gyQUkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/rosehill-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z58000001iLLwEAM",
    "name": "DC Harbour Gate T1-1-104",
    "availability_alert": "Only 1 left",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Harbour Gate",
      "map_url": "https://properties.emaar.com/en/properties/harbour-gate/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "1",
      "area_sqft": "1152",
      "area_sqm": "107.02"
    },
    "price": {
      "value": "3,360,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/10/HARBOUR_GATE_HERO-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/HARBOUR_GATE_BALCONY-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/HARBOUR_GATE_ACCESS-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/HARBOUR_GATE_SOURROUNDINGS-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/HARBOUR_GATE_LIVING-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/11/HARBOUR_GATE_POOL-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=harbour-gate_DC Harbour Gate T1-1-104",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001iLLwEAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWFmMzRiZTVkOSZsb2NhdGlvbl9jb2RlPURDK0hhcmJvdXIrR2F0ZStUMS0xLTEwNCZiZWRzPTIrQmVkcm9vbXMmZmxvb3I9MSZ0eXBlPUFwYXJ0bWVudCZiYXRoPSZhcmVhPTElMkMxNTImcHJpY2U9MyUyQzM2MCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFo1ODAwMDAwMWlMTHdFQU0mdGl0bGU9SGFyYm91citHYXRlJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9aGFyYm91ci1nYXRlJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjU4MDAwMDAxaUxMd0VBTSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/harbour-gate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z5800000080CvEAI",
    "name": "DE Acacia C-4-413",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Park Heights",
      "map_url": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "4",
      "area_sqft": "1341",
      "area_sqm": "124.58"
    },
    "price": {
      "value": "3,568,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/visualhouse_Aerial_View-8.0-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/PerkinsWill_Mullbery-Heights_Winter-Lushness_copyright-and-credits-by-Mir_FINAL-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=acacia_DE Acacia C-4-413",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000080CvEAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTY3NTA1MjNmMiZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStDLTQtNDEzJmJlZHM9MitCZWRyb29tcyZmbG9vcj00JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzM0MSZwcmljZT0zJTJDNTY4JTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAwODBDdkVBSSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDA4MEN2RUFJJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/acacia/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z58000000ccWOEAY",
    "name": "DE Acacia C-5-507",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Park Heights",
      "map_url": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "5",
      "area_sqft": "1601",
      "area_sqm": "148.74"
    },
    "price": {
      "value": "3,649,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/visualhouse_Aerial_View-8.0-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/PerkinsWill_Mullbery-Heights_Winter-Lushness_copyright-and-credits-by-Mir_FINAL-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=acacia_DE Acacia C-5-507",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000000ccWOEAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NjRhODliMzY0NyZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStDLTUtNTA3JmJlZHM9MitCZWRyb29tcyZmbG9vcj01JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzYwMSZwcmljZT0zJTJDNjQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAwY2NXT0VBWSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDBjY1dPRUFZJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/acacia/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl0000017h67MAA",
    "name": "DC Creek Palace-B2-P04",
    "availability_alert": "Only 1 left",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Creek Palace",
      "map_url": "https://properties.emaar.com/en/properties/creek-palace/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "B2",
      "area_sqft": "1646",
      "area_sqm": "152.92"
    },
    "price": {
      "value": "3,657,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/CREEK_PALACE_DCH_HIGHLIGHT-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/CREEK_PALACE__DCHPlotA016_CGI04_FOR-SEND-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/CREEK_PALACE_DCH_UNIT_TYPE_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/CREEK_PALACE_DCH_AMENITIES-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/EMAAR_DCHCentralPark_CGI03_06a.1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/CREEK_PALACE_Gymnasium-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=creek-palace_DC Creek Palace-B2-P04",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000017h67MAA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDc0N2UxOWUyNSZsb2NhdGlvbl9jb2RlPURDK0NyZWVrK1BhbGFjZS1CMi1QMDQmYmVkcz0yK0JlZHJvb21zJmZsb29yPUIyJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM2NDYmcHJpY2U9MyUyQzY1NyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMTdoNjdNQUEmdGl0bGU9Q3JlZWsrUGFsYWNlJmNvbW11bml0eV90aXRsZT1EdWJhaStDcmVlaytIYXJib3VyJnNsdWc9Y3JlZWstcGFsYWNlJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAxN2g2N01BQSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/creek-palace/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z58000000ccXcEAI",
    "name": "DE Acacia C-3-307",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Park Heights",
      "map_url": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "3",
      "area_sqft": "1690",
      "area_sqm": "157.01"
    },
    "price": {
      "value": "3,684,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/visualhouse_Aerial_View-8.0-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/PerkinsWill_Mullbery-Heights_Winter-Lushness_copyright-and-credits-by-Mir_FINAL-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=acacia_DE Acacia C-3-307",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000000ccXcEAI",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9M2ZjMDA3MTk5MCZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStDLTMtMzA3JmJlZHM9MitCZWRyb29tcyZmbG9vcj0zJnR5cGU9QXBhcnRtZW50JmJhdGg9MyZhcmVhPTElMkM2OTAmcHJpY2U9MyUyQzY4NCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFo1ODAwMDAwMGNjWGNFQUkmdGl0bGU9UGFyaytIZWlnaHRzJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9YWNhY2lhJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjU4MDAwMDAwY2NYY0VBSSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/acacia/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z58000001i7hCEAQ",
    "name": "DE Acacia C-1-107",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Park Heights",
      "map_url": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "1",
      "area_sqft": "1731",
      "area_sqm": "160.82"
    },
    "price": {
      "value": "3,692,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/visualhouse_Aerial_View-8.0-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/PerkinsWill_Mullbery-Heights_Winter-Lushness_copyright-and-credits-by-Mir_FINAL-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=acacia_DE Acacia C-1-107",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000001i7hCEAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjY2ZjZlNjgzOSZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStDLTEtMTA3JmJlZHM9MitCZWRyb29tcyZmbG9vcj0xJnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzczMSZwcmljZT0zJTJDNjkyJTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAxaTdoQ0VBUSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDFpN2hDRUFRJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/acacia/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001aZBgMAM",
    "name": "DE Golf Hillside-P-P01",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Golf Hillside",
      "map_url": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "P",
      "area_sqft": "1603",
      "area_sqm": "148.92"
    },
    "price": {
      "value": "3,761,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-P-P01",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBgMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTM5NzU5YzhjMiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtUC1QMDEmYmVkcz0zK0JlZHJvb21zJmZsb29yPVAmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT0zJTJDNzYxJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCZ01BTSZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJnTUFNJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001LqexMAC",
    "name": "DE Club Place A-G-G03",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Club Place",
      "map_url": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "G",
      "area_sqft": "1923",
      "area_sqm": "178.65"
    },
    "price": {
      "value": "3,817,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_3-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=club-place-at-dubai-hills-estate_DE Club Place A-G-G03",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001LqexMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NzM4OGYwMDMzZSZsb2NhdGlvbl9jb2RlPURFK0NsdWIrUGxhY2UrQS1HLUcwMyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDOTIzJnByaWNlPTMlMkM4MTclMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDFMcWV4TUFDJnRpdGxlPUNsdWIrUGxhY2UmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1jbHViLXBsYWNlLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMUxxZXhNQUMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001LqmxMAC",
    "name": "DE Club Place A-G-G01",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Club Place",
      "map_url": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "G",
      "area_sqft": "1931",
      "area_sqm": "179.4"
    },
    "price": {
      "value": "3,826,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_3-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=club-place-at-dubai-hills-estate_DE Club Place A-G-G01",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001LqmxMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MWQ2NmYyMzE0YiZsb2NhdGlvbl9jb2RlPURFK0NsdWIrUGxhY2UrQS1HLUcwMSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9RyZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDOTMxJnByaWNlPTMlMkM4MjYlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDFMcW14TUFDJnRpdGxlPUNsdWIrUGxhY2UmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1jbHViLXBsYWNlLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMUxxbXhNQUMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001LqfvMAC",
    "name": "DE Club Place A-P-P01",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Club Place",
      "map_url": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "P",
      "area_sqft": "1753",
      "area_sqm": "162.86"
    },
    "price": {
      "value": "3,834,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_3-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=club-place-at-dubai-hills-estate_DE Club Place A-P-P01",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001LqfvMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NjI4MWE4MjZiYSZsb2NhdGlvbl9jb2RlPURFK0NsdWIrUGxhY2UrQS1QLVAwMSZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9UCZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNzUzJnByaWNlPTMlMkM4MzQlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDFMcWZ2TUFDJnRpdGxlPUNsdWIrUGxhY2UmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1jbHViLXBsYWNlLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMUxxZnZNQUMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001aZBuMAM",
    "name": "DE Golf Hillside-1-104",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Golf Hillside",
      "map_url": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "1",
      "area_sqft": "1603",
      "area_sqm": "148.92"
    },
    "price": {
      "value": "3,853,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-1-104",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBuMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDA1MGY4MTY4MiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtMS0xMDQmYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT0zJTJDODUzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCdU1BTSZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJ1TUFNJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001aZAXMA2",
    "name": "DE Golf Hillside-1-102",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Golf Hillside",
      "map_url": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "1",
      "area_sqft": "1603",
      "area_sqm": "148.92"
    },
    "price": {
      "value": "3,853,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-1-102",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZAXMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OGFiN2U0MjhlNCZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtMS0xMDImYmVkcz0zK0JlZHJvb21zJmZsb29yPTEmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT0zJTJDODUzJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpBWE1BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkFYTUEyJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001LqixMAC",
    "name": "DE Club Place A-1-104",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Club Place",
      "map_url": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "1",
      "area_sqft": "1654",
      "area_sqm": "153.66"
    },
    "price": {
      "value": "3,867,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_3-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=club-place-at-dubai-hills-estate_DE Club Place A-1-104",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001LqixMAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YjkyYTlmNGM1OSZsb2NhdGlvbl9jb2RlPURFK0NsdWIrUGxhY2UrQS0xLTEwNCZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MSZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNjU0JnByaWNlPTMlMkM4NjclMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDFMcWl4TUFDJnRpdGxlPUNsdWIrUGxhY2UmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1jbHViLXBsYWNlLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMUxxaXhNQUMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000000J1e4UAC",
    "name": "DC Mangrove Building 1-2-201",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Mangrove",
      "map_url": "https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "2",
      "area_sqft": "1613",
      "area_sqm": "149.85"
    },
    "price": {
      "value": "3,912,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=mangrove-at-dubai-creek-harbour_DC Mangrove Building 1-2-201",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000000J1e4UAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZGQ2MDgwNjE2NiZsb2NhdGlvbl9jb2RlPURDK01hbmdyb3ZlK0J1aWxkaW5nKzEtMi0yMDEmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYxMyZwcmljZT0zJTJDOTEyJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAwSjFlNFVBQyZ0aXRsZT1NYW5ncm92ZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPW1hbmdyb3ZlLWF0LWR1YmFpLWNyZWVrLWhhcmJvdXImZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNEwwMDAwMDBKMWU0VUFDJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000000J1e1UAC",
    "name": "DC Mangrove Building 1-3-301",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Mangrove",
      "map_url": "https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "3",
      "area_sqft": "1613",
      "area_sqm": "149.85"
    },
    "price": {
      "value": "3,921,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/MANGROVE_HERO_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/05/FEATURES_1200X655_1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=mangrove-at-dubai-creek-harbour_DC Mangrove Building 1-3-301",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000000J1e1UAC",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NTc3ODI0ZWI1NiZsb2NhdGlvbl9jb2RlPURDK01hbmdyb3ZlK0J1aWxkaW5nKzEtMy0zMDEmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYxMyZwcmljZT0zJTJDOTIxJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAwSjFlMVVBQyZ0aXRsZT1NYW5ncm92ZSZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPW1hbmdyb3ZlLWF0LWR1YmFpLWNyZWVrLWhhcmJvdXImZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNEwwMDAwMDBKMWUxVUFDJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/mangrove-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001LqhKMAS",
    "name": "DE Club Place A-1-102",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Club Place",
      "map_url": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "1",
      "area_sqft": "1752",
      "area_sqm": "162.77"
    },
    "price": {
      "value": "3,924,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_3-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=club-place-at-dubai-hills-estate_DE Club Place A-1-102",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001LqhKMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NzVjY2NiNWQwMSZsb2NhdGlvbl9jb2RlPURFK0NsdWIrUGxhY2UrQS0xLTEwMiZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MSZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNzUyJnByaWNlPTMlMkM5MjQlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDFMcWhLTUFTJnRpdGxlPUNsdWIrUGxhY2UmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1jbHViLXBsYWNlLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMUxxaEtNQVMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001aZC4MAM",
    "name": "DE Golf Hillside-2-205",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Golf Hillside",
      "map_url": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "2",
      "area_sqft": "1603",
      "area_sqm": "148.92"
    },
    "price": {
      "value": "3,950,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-2-205",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZC4MAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjU5MmU0MzM1YSZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtMi0yMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT0zJTJDOTUwJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpDNE1BTSZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkM0TUFNJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001aZAAMA2",
    "name": "DE Golf Hillside-2-203",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Golf Hillside",
      "map_url": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "2",
      "area_sqft": "1603",
      "area_sqm": "148.92"
    },
    "price": {
      "value": "3,950,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-2-203",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZAAMA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MzI0OTkzN2M3ZSZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtMi0yMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT0zJTJDOTUwJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpBQU1BMiZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkFBTUEyJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl0000025s7TMAQ",
    "name": "DE Parkwood B-3-313",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Parkwood",
      "map_url": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "3",
      "area_sqft": "1577",
      "area_sqm": "146.51"
    },
    "price": {
      "value": "3,981,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood B-3-313",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025s7TMAQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OGNmYTA3YmM3ZCZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0ItMy0zMTMmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzU3NyZwcmljZT0zJTJDOTgxJTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXM3VE1BUSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzN1RNQVEmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001K7HFMA0",
    "name": "DC Altus T1-P1-P101",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Altus",
      "map_url": "https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "P1",
      "area_sqft": "1596",
      "area_sqm": "148.27"
    },
    "price": {
      "value": "3,991,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-5-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_4-7-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=altus-at-dubai-creek-harbour_DC Altus T1-P1-P101",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001K7HFMA0",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NjMyNjJkNDYwMCZsb2NhdGlvbl9jb2RlPURDK0FsdHVzK1QxLVAxLVAxMDEmYmVkcz0zK0JlZHJvb21zJmZsb29yPVAxJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM1OTYmcHJpY2U9MyUyQzk5MSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMUs3SEZNQTAmdGl0bGU9QWx0dXMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1hbHR1cy1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAxSzdIRk1BMCZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001K7DTMA0",
    "name": "DC Altus T1-P2-P203",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Altus",
      "map_url": "https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "P2",
      "area_sqft": "1613",
      "area_sqm": "149.85"
    },
    "price": {
      "value": "4,000,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-5-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_4-7-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=altus-at-dubai-creek-harbour_DC Altus T1-P2-P203",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001K7DTMA0",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZDYyNGM5ZDhlZiZsb2NhdGlvbl9jb2RlPURDK0FsdHVzK1QxLVAyLVAyMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPVAyJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM2MTMmcHJpY2U9NCUyQzAwMCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMUs3RFRNQTAmdGl0bGU9QWx0dXMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1hbHR1cy1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAxSzdEVE1BMCZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001LqmKMAS",
    "name": "DE Club Place A-2-203",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Club Place",
      "map_url": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "2",
      "area_sqft": "1752",
      "area_sqm": "162.77"
    },
    "price": {
      "value": "4,022,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_3-6-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-3-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=club-place-at-dubai-hills-estate_DE Club Place A-2-203",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001LqmKMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YzM4NTZiOGMzMCZsb2NhdGlvbl9jb2RlPURFK0NsdWIrUGxhY2UrQS0yLTIwMyZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNzUyJnByaWNlPTQlMkMwMjIlMkM4ODgmcHJvcGVydHlfaWQ9YTBaU2wwMDAwMDFMcW1LTUFTJnRpdGxlPUNsdWIrUGxhY2UmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1jbHViLXBsYWNlLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMUxxbUtNQVMmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/club-place-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000hjsA2AQ",
    "name": "DC Silva-21-2105",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Silva",
      "map_url": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "21",
      "area_sqft": "1834",
      "area_sqm": "170.38"
    },
    "price": {
      "value": "4,031,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-21-2105",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjsA2AQ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjMzNGFlNjBlZCZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTIxLTIxMDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTIxJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM4MzQmcHJpY2U9NCUyQzAzMSUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMGhqc0EyQVEmdGl0bGU9U2lsdmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zaWx2YS1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWk5NMDAwMDAwaGpzQTJBUSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000hjpz2AA",
    "name": "DC Silva-23-2301",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Silva",
      "map_url": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "23",
      "area_sqft": "1834",
      "area_sqm": "170.38"
    },
    "price": {
      "value": "4,044,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-23-2301",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjpz2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Mzk5NWNlNmM2MSZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTIzLTIzMDEmYmVkcz0zK0JlZHJvb21zJmZsb29yPTIzJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM4MzQmcHJpY2U9NCUyQzA0NCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMGhqcHoyQUEmdGl0bGU9U2lsdmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zaWx2YS1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWk5NMDAwMDAwaGpwejJBQSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZNM000000hjwg2AA",
    "name": "DC Silva-24-2405",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Silva",
      "map_url": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "24",
      "area_sqft": "1834",
      "area_sqm": "170.38"
    },
    "price": {
      "value": "4,053,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/HERO_1620X832_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/06/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=silva-dubai-creek-harbour_DC Silva-24-2405",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZNM000000hjwg2AA",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDc4MWUzMTdhOCZsb2NhdGlvbl9jb2RlPURDK1NpbHZhLTI0LTI0MDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTI0JnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM4MzQmcHJpY2U9NCUyQzA1MyUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpOTTAwMDAwMGhqd2cyQUEmdGl0bGU9U2lsdmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zaWx2YS1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWk5NMDAwMDAwaGp3ZzJBQSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/silva-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl0000025sFSMAY",
    "name": "DE Parkwood B-2-208",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Parkwood",
      "map_url": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "2",
      "area_sqft": "1581",
      "area_sqm": "146.88"
    },
    "price": {
      "value": "4,127,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_2-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/FEATURES_1200X655_2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=parkwood-at-dubai-hills-estate_DE Parkwood B-2-208",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl0000025sFSMAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTM5NGM4Y2UwMSZsb2NhdGlvbl9jb2RlPURFK1Bhcmt3b29kK0ItMi0yMDgmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzU4MSZwcmljZT00JTJDMTI3JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAyNXNGU01BWSZ0aXRsZT1QYXJrd29vZCZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPXBhcmt3b29kLWF0LWR1YmFpLWhpbGxzLWVzdGF0ZSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFpTbDAwMDAwMjVzRlNNQVkmZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/parkwood-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001aZBiMAM",
    "name": "DE Golf Hillside-4-405",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Golf Hillside",
      "map_url": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "4",
      "area_sqft": "1603",
      "area_sqm": "148.92"
    },
    "price": {
      "value": "4,146,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_4-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/FEATURES_1200X655_1-1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=golf-hillside-at-dubai-hills-estate_DE Golf Hillside-4-405",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001aZBiMAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ODk1ZjlmOWEyMiZsb2NhdGlvbl9jb2RlPURFK0dvbGYrSGlsbHNpZGUtNC00MDUmYmVkcz0zK0JlZHJvb21zJmZsb29yPTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzYwMyZwcmljZT00JTJDMTQ2JTJDODg4JnByb3BlcnR5X2lkPWEwWlNsMDAwMDAxYVpCaU1BTSZ0aXRsZT1Hb2xmK0hpbGxzaWRlJmNvbW11bml0eV90aXRsZT1EdWJhaStIaWxscytFc3RhdGVzJnNsdWc9Z29sZi1oaWxsc2lkZS1hdC1kdWJhaS1oaWxscy1lc3RhdGUmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaU2wwMDAwMDFhWkJpTUFNJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/golf-hillside-at-dubai-hills-estate/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000001eXUDUA2",
    "name": "DC Cedar Building 2-2-210",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Cedar",
      "map_url": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "2",
      "area_sqft": "1691",
      "area_sqm": "157.1"
    },
    "price": {
      "value": "4,149,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_1-680x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=cedar_DC Cedar Building 2-2-210",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXUDUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MjQ2NTNhZGMxZSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhVRFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhVRFVBMiZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/cedar/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000001eXWBUA2",
    "name": "DC Cedar Building 4-2-210",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Cedar",
      "map_url": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "2",
      "area_sqft": "1691",
      "area_sqm": "157.1"
    },
    "price": {
      "value": "4,149,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_1-680x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=cedar_DC Cedar Building 4-2-210",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXWBUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Yzc0Y2ZiZjAzYyZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhXQlVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhXQlVBMiZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/cedar/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000001eXTgUAM",
    "name": "DC Cedar Building 4-3-310",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Cedar",
      "map_url": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "3",
      "area_sqft": "1691",
      "area_sqm": "157.1"
    },
    "price": {
      "value": "4,156,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_1-680x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=cedar_DC Cedar Building 4-3-310",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXTgUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NDA2OGZhY2YyMyZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtMy0zMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTMmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTU2JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhUZ1VBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhUZ1VBTSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/cedar/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z5800000GjtIpEAJ",
    "name": "DE Mulberry II B-5-517",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Park Heights",
      "map_url": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "5",
      "area_sqft": "1884",
      "area_sqm": "175.03"
    },
    "price": {
      "value": "4,165,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/visualhouse_Aerial_View-8.0-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/PerkinsWill_Mullbery-Heights_Winter-Lushness_copyright-and-credits-by-Mir_FINAL-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=acacia_DE Mulberry II B-5-517",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z5800000GjtIpEAJ",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZWI1YjgyOTQyNSZsb2NhdGlvbl9jb2RlPURFK011bGJlcnJ5K0lJK0ItNS01MTcmYmVkcz0yK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0mYXJlYT0xJTJDODg0JnByaWNlPTQlMkMxNjUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNTgwMDAwMEdqdElwRUFKJnRpdGxlPVBhcmsrSGVpZ2h0cyZjb21tdW5pdHlfdGl0bGU9RHViYWkrSGlsbHMrRXN0YXRlcyZzbHVnPWFjYWNpYSZmbG9vcl9wbGFuPWh0dHBzJTNBJTJGJTJGZW1hYXJzYWxlcy5teS5zYWxlc2ZvcmNlLXNpdGVzLmNvbSUyRmFwaSUyRkZsb29yUGxhblRvU2l0ZVVzZXJzJTNGaWQlM0RhMFo1ODAwMDAwR2p0SXBFQUomZGVwb3NpdD0zNzAwMC4w",
      "property_home": "https://properties.emaar.com/en/properties/acacia/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000001eXGSUA2",
    "name": "DC Savanna Building 2-2-210",
    "availability_alert": "Only 1 left",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Savanna",
      "map_url": "https://properties.emaar.com/en/properties/savanna/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "2",
      "area_sqft": "1701",
      "area_sqm": "158.03"
    },
    "price": {
      "value": "4,165,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/SAVANNA_HERO_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/SAVANNA_HERO_5-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/FEATURES_1200X655_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/FEATURES_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/01/AMENITIES-4-680x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=savanna_DC Savanna Building 2-2-210",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXGSUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OWNlZjZiMTViYyZsb2NhdGlvbl9jb2RlPURDK1NhdmFubmErQnVpbGRpbmcrMi0yLTIxMCZiZWRzPTMrQmVkcm9vbXMmZmxvb3I9MiZ0eXBlPUFwYXJ0bWVudCZiYXRoPTAmYXJlYT0xJTJDNzAxJnByaWNlPTQlMkMxNjUlMkM4ODgmcHJvcGVydHlfaWQ9YTBaNEwwMDAwMDFlWEdTVUEyJnRpdGxlPVNhdmFubmEmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1zYXZhbm5hJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhHU1VBMiZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/savanna/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000001eXWTUA2",
    "name": "DC Cedar Building 2-4-410",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Cedar",
      "map_url": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "4",
      "area_sqft": "1691",
      "area_sqm": "157.1"
    },
    "price": {
      "value": "4,165,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_1-680x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=cedar_DC Cedar Building 2-4-410",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXWTUA2",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9NGMwN2UyNmQwNSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItNC00MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTQmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTY1JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhXVFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhXVFVBMiZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/cedar/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000001K6mEMAS",
    "name": "DC Altus T1-P1-P103",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Altus",
      "map_url": "https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "P1",
      "area_sqft": "1927",
      "area_sqm": "179.02"
    },
    "price": {
      "value": "4,170,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_1-5-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/HERO_1620X832_4-7-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_2-2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/07/FEATURES_1200X655_1-2-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=altus-at-dubai-creek-harbour_DC Altus T1-P1-P103",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000001K6mEMAS",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9Y2JiMjNlZjc3OCZsb2NhdGlvbl9jb2RlPURDK0FsdHVzK1QxLVAxLVAxMDMmYmVkcz0zK0JlZHJvb21zJmZsb29yPVAxJnR5cGU9QXBhcnRtZW50JmJhdGg9MCZhcmVhPTElMkM5MjcmcHJpY2U9NCUyQzE3MCUyQzg4OCZwcm9wZXJ0eV9pZD1hMFpTbDAwMDAwMUs2bUVNQVMmdGl0bGU9QWx0dXMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0NyZWVrK0hhcmJvdXImc2x1Zz1hbHR1cy1hdC1kdWJhaS1jcmVlay1oYXJib3VyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWlNsMDAwMDAxSzZtRU1BUyZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/altus-at-dubai-creek-harbour/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000001eXSqUAM",
    "name": "DC Cedar Building 4-5-510",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Cedar",
      "map_url": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "5",
      "area_sqft": "1691",
      "area_sqm": "157.1"
    },
    "price": {
      "value": "4,173,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_1-680x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=cedar_DC Cedar Building 4-5-510",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXSqUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9ZjY1NTcxOGEyNCZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzQtNS01MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTUmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTczJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhTcVVBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhTcVVBTSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/cedar/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z58000000ccXMEAY",
    "name": "DE Acacia B-4-409",
    "location": {
      "community": "Dubai Hills Estates",
      "project": "Park Heights",
      "map_url": "https://properties.emaar.com/en/properties/acacia/#sectionMap"
    },
    "properties": {
      "beds": "2",
      "floor": "4",
      "area_sqft": "1570",
      "area_sqm": "145.86"
    },
    "price": {
      "value": "4,174,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-aerial-view-02_20160403-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/final-image-eye-view-01-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-BEDROOM-REV-12-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/MBR-KITCHEN-VISUAL-1-REV-25-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/visualhouse_Aerial_View-8.0-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2020/03/PerkinsWill_Mullbery-Heights_Winter-Lushness_copyright-and-credits-by-Mir_FINAL-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=acacia_DE Acacia B-4-409",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z58000000ccXMEAY",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9MzY5MGExZDU0NCZsb2NhdGlvbl9jb2RlPURFK0FjYWNpYStCLTQtNDA5JmJlZHM9MitCZWRyb29tcyZmbG9vcj00JnR5cGU9QXBhcnRtZW50JmJhdGg9JmFyZWE9MSUyQzU3MCZwcmljZT00JTJDMTc0JTJDODg4JnByb3BlcnR5X2lkPWEwWjU4MDAwMDAwY2NYTUVBWSZ0aXRsZT1QYXJrK0hlaWdodHMmY29tbXVuaXR5X3RpdGxlPUR1YmFpK0hpbGxzK0VzdGF0ZXMmc2x1Zz1hY2FjaWEmZmxvb3JfcGxhbj1odHRwcyUzQSUyRiUyRmVtYWFyc2FsZXMubXkuc2FsZXNmb3JjZS1zaXRlcy5jb20lMkZhcGklMkZGbG9vclBsYW5Ub1NpdGVVc2VycyUzRmlkJTNEYTBaNTgwMDAwMDBjY1hNRUFZJmRlcG9zaXQ9MzcwMDAuMA==",
      "property_home": "https://properties.emaar.com/en/properties/acacia/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0Z4L000001eXScUAM",
    "name": "DC Cedar Building 2-6-610",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Cedar",
      "map_url": "https://properties.emaar.com/en/properties/cedar/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "6",
      "area_sqft": "1691",
      "area_sqm": "157.1"
    },
    "price": {
      "value": "4,181,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_4-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/CEDAR_HERO_5-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_2-1-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2023/03/FEATURES_1200X655_1-680x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=cedar_DC Cedar Building 2-6-610",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXScUAM",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9YTQ4MDk4ZDk4MSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItNi02MTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTYmdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTgxJTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhTY1VBTSZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhTY1VBTSZkZXBvc2l0PTM3MDAwLjA=",
      "property_home": "https://properties.emaar.com/en/properties/cedar/"
    },
    "contact": {
      "phone": "800-36227",
      "whatsapp": "https://wa.link/u9ik8p"
    }
  },
  {
    "id": "a0ZSl000002DE1nMAG",
    "name": "DC Albero-12-1208",
    "location": {
      "community": "Dubai Creek Harbour",
      "project": "Albero",
      "map_url": "https://properties.emaar.com/en/properties/albero-at-dubai-creek-harbour/#sectionMap"
    },
    "properties": {
      "beds": "3",
      "floor": "12",
      "area_sqft": "1848",
      "area_sqm": "171.68"
    },
    "price": {
      "value": "4,188,888",
      "currency": "AED"
    },
    "images": [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2-706x385.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1-706x385.jpg"
    ],
    "links": {
      "details": "/en/unit-details/?prop=albero-at-dubai-creek-harbour_DC Albero-12-1208",
      "floor_plan": "https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0ZSl000002DE1nMAG",
      "book_now": "https://properties.emaar.com/en/book-online/?url=bm9uY2U9OTE1OTRiMTRmZSZsb2NhdGlvbl9jb2RlPURDK0FsYmVyby0xMi0xMjA4JmJlZHM9MytCZWRyb29tcyZmbG9vcj0xMiZ0e
بالتأكيد. بصفتي مهندس برمجيات خبير، يسعدني تقديم مراجعة شاملة للتحليل المقدم في كائن الـ JSON.

أولاً، من المهم توضيح أن المقتطف المقدم ليس كود JavaScript برمجيًا، بل هو كائن JSON يمثل تحليلاً شاملاً لهيكل ووظائف واستراتيجيات صفحة ويب (`properties.emaar.com`). بناءً على ذلك، سأقوم بمراجعة هذا التحليل من منظور هندسة البرمجيات، مطبقًا المبادئ المطلوبة على البنية والاستراتيجيات الموصوفة.

---

### مراجعة شاملة لهيكل صفحة الويب

#### 1. الخوارزميات وهياكل البيانات

##### تحليل الوضع الحالي:
*   **هيكل البيانات الأساسي:** الهيكل الأساسي للبيانات هو قائمة (Array) من كائنات (Objects) تمثل المشاريع العقارية (`Project Listings`). كل كائن يحتوي على خصائص مثل الصورة، العنوان، الوصف، وأزرار الدعوة لاتخاذ إجراء. هذا الهيكل بسيط ومناسب تمامًا لعرض قائمة من العناصر.
*   **الخوارزمية المطبقة:** الخوارزمية الرئيسية الموصوفة هي **التصفية (Filtering)**. يوجد نظام تصفية قائم على التبويبات (`Emaar Communities` و `Now Available`). عند النقر على تبويب، يتم على الأرجح تنفيذ خوارزمية تصفية بسيطة على جانب العميل (Client-Side) لإظهار أو إخفاء العناصر بناءً على الفئة التي تنتمي إليها.

##### تحليل التعقيد (Big O Notation):
*   **التعقيد الزمني (Time Complexity):** بافتراض أن عملية التصفية تتم على جانب العميل، فإنها تتطلب المرور على كل عنصر في قائمة المشاريع مرة واحدة لتحديد ما إذا كان يجب عرضه. إذا كان عدد المشاريع هو `n`، فإن التعقيد الزمني لعملية التصفية هو **`O(n)`**. هذا الأداء مقبول جدًا ومثالي لمجموعات البيانات الصغيرة إلى المتوسطة (عشرات أو حتى مئات المشاريع).
*   **التعقيد المكاني (Space Complexity):** يتم تخزين جميع بيانات المشاريع في ذاكرة المتصفح. لذا، فإن التعقيد المكاني هو **`O(n)`**، حيث يزداد استهلاك الذاكرة بشكل خطي مع زيادة عدد المشاريع.

##### اقتراحات وتحسينات:
على الرغم من أن النهج الحالي فعال للحجم الحالي للبيانات، إلا أنه يمكن اقتراح التحسينات التالية لضمان قابلية التوسع (Scalability):

1.  **الترقيم (Pagination) أو التمرير اللانهائي (Infinite Scrolling):** إذا زاد عدد المشاريع بشكل كبير (مثلاً، إلى المئات)، فإن تحميل جميع البيانات مرة واحدة قد يؤثر على الأداء الأولي للصفحة واستهلاك الذاكرة. يُنصح بتطبيق:
    *   **الترقيم:** تحميل وعرض مجموعة فرعية من المشاريع (مثلاً 10-20 مشروعًا في كل صفحة). هذا يقلل من التعقيد الزمني للعرض الأولي إلى `O(k)` حيث `k` هو حجم الصفحة، ويحافظ على استهلاك ذاكرة منخفض.
    *   **التمرير اللانهائي:** تحميل المزيد من المشاريع ديناميكيًا عندما يصل المستخدم إلى نهاية القائمة.
2.  **التصفية على جانب الخادم (Server-Side Filtering):** في حال وجود آلاف المشاريع، يصبح من غير العملي إرسالها جميعًا إلى العميل. في هذه الحالة، يجب أن تتم عملية التصفية على جانب الخادم. يرسل العميل طلبًا بالفلتر المطلوب (`/api/projects?category=now_available`)، ويستجيب الخادم بالبيانات المصفاة فقط. هذا يقلل بشكل كبير من استهلاك الذاكرة وحجم البيانات المنقولة عبر الشبكة.

#### 2. الكود النظيف والقابلية للقراءة

##### تقييم الوضع الحالي:
يمتاز هيكل JSON المقدم بوضوح وتنظيم عاليين، مما يدل على بنية تحتية مدروسة جيدًا:
*   **التسمية (Naming):** الأسماء المستخدمة في JSON وصفية وواضحة (مثل `hierarchical_structure`, `main_content`, `project_listings`)، مما يسهل فهم الغرض من كل قسم.
*   **مبدأ المسؤولية الواحدة (Single Responsibility Principle):** تم تطبيق هذا المبدأ بشكل جيد على المستوى المعماري. كل قسم رئيسي في JSON (`header`, `main_content`, `footer`, `modals`) له مسؤولية محددة وواضحة. هذا الفصل يسهل الصيانة والتطوير.
*   **الهيكلية الهرمية:** الهيكل الهرمي المتداخل يعكس بدقة بنية DOM للصفحة، مما يجعل من السهل على المطورين ربط البيانات بالواجهة الرسومية.

##### اقتراحات لإعادة الصياغة والتحسين:
الكود الضمني (الذي يمثله هذا الـ JSON) منظم بشكل جيد، ولكن يمكن التفكير في التحسينات التالية على مستوى التصميم:
1.  **نموذج المكونات (Component-Based Model):** الهيكل الحالي يتماشى تمامًا مع أطر العمل الحديثة القائمة على المكونات (مثل React, Vue, or Angular). يجب التأكد من أن الكود الفعلي يعكس هذا التقسيم. على سبيل المثال، يجب أن يكون كل عنصر في `Project Listings` مكونًا مستقلاً (`<ProjectCard />`) يمكن إعادة استخدامه.

    ```jsx
    // مثال على كيفية استخدام البيانات في مكون React
    function ProjectList({ projects, currentFilter }) {
      const filteredProjects = projects.filter(p => p.category === currentFilter);

      return (
        <div className="project-listings">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} projectData={project} />
          ))}
        </div>
      );
    }
    ```

2.  **فصل البيانات عن العرض:** يُظهر الـ JSON فصلًا جيدًا للبيانات. من المهم التأكد من أن منطق العمل (Business Logic) - مثل كيفية تصفية المشاريع - منفصل تمامًا عن منطق العرض (UI Logic).

#### 3. الأداء والذاكرة

##### تحليل الوضع الحالي:
يشير التحليل إلى وجود استراتيجية قوية جدًا لتحسين الأداء، وهو أمر يستحق الثناء:
*   **نقاط القوة:**
    *   **تأجيل تحميل JavaScript (Delayed JS execution):** استخدام `RocketLazyLoadScripts` لتأجيل تحميل السكريبتات غير الأساسية (خاصة سكريبتات التتبع) حتى تفاعل المستخدم هو أسلوب فعال للغاية لتحسين سرعة التحميل الأولية ومقاييس Core Web Vitals.
    *   **التحميل المسبق والاتصال المسبق (Preload & Preconnect):** استخدام `preconnect` للنطاقات الخارجية يقلل من زمن انتقال DNS و TLS، مما يسرع تحميل موارد الطرف الثالث.
    *   **التحميل الكسول للصور (Lazy Loading):** هذا يقلل بشكل كبير من حجم البيانات المطلوبة للتحميل الأولي للصفحة.
    *   **التصغير (Minification):** تصغير ملفات CSS يقلل من حجمها ويسرع وقت التحميل.

##### تحديد الاختناقات المحتملة والاستخدام غير الفعال للذاكرة:
1.  **العدد الهائل من أدوات التتبع (Tracking Overload):**
    *   **المشكلة:** القائمة الطويلة جدًا من منصات التحليلات والبكسلات الإعلانية (`Amplitude`, `Google Analytics`, `Hotjar`, `Facebook`, `TikTok`, `Snapchat`, إلخ) تمثل **عبئًا كبيرًا على الأداء بعد التفاعل الأول للمستخدم**. على الرغم من تأجيل تحميلها، إلا أنها بمجرد تشغيلها، تتنافس على موارد المتصفح (CPU, Memory, Network)، مما قد يؤدي إلى بطء في الاستجابة وتجربة مستخدم متقطعة، خاصة على الأجهزة المحمولة.
    *   **اقتراح:**
        *   **تدقيق دوري للسكريبتات (Script Auditing):** يجب إجراء مراجعة منتظمة لتحديد ما إذا كانت كل هذه الأدوات لا تزال ضرورية. هل يمكن تحقيق نفس الأهداف بعدد أقل من الأدوات؟
        *   **استخدام Google Tag Manager من جانب الخادم (Server-Side GTM):** يمكن نقل العديد من بكسلات التتبع إلى حاوية GTM من جانب الخادم. هذا يقلل بشكل كبير من عدد الطلبات التي يقوم بها متصفح العميل، ويحسن الأداء والأمان.
2.  **حجم الصور:** على الرغم من استخدام التحميل الكسول، من الضروري التأكد من أن الصور نفسها مُحسَّنة. هل يتم استخدام تنسيقات صور حديثة مثل **WebP** أو **AVIF**؟ هل يتم تقديم صور بأحجام مناسبة لكل شاشة باستخدام السمة `srcset`؟

#### 4. معالجة الأخطاء والأمان

##### تقييم الوضع الحالي:
*   **معالجة الأخطاء:** يذكر التحليل وجود نافذة منبثقة لتحذير مستخدمي Internet Explorer (`IE Browser Warning Modal`). هذا مثال جيد على معالجة أخطاء التوافق بشكل استباقي. ومع ذلك، لا توجد معلومات حول معالجة أخطاء أخرى مثل فشل طلبات الشبكة (API failures) أو أخطاء النماذج.
*   **الأمان:** هنا تكمن **أكبر نقطة ضعف ومخاطرة محتملة**.

##### الثغرات الأمنية المحتملة واقتراحات التحسين:
1.  **جمع معلومات التعريف الشخصية الحساسة (PII):**
    *   **المشكلة الكبرى:** نموذج "تسجيل الاهتمام" يطلب `Passport Number` و `Passport Scan Copy` (نسخة من جواز السفر). هذه معلومات شخصية حساسة للغاية. جمعها من خلال نموذج ويب عام في مرحلة مبكرة من رحلة العميل يمثل **مخاطرة أمنية وقانونية هائلة**.
    *   **الاقتراحات:**
        *   **إعادة تقييم الضرورة:** هل من الضروري حقًا جمع هذه المعلومات في هذه المرحلة؟ يجب تأجيل طلب هذه المستندات إلى مرحلة لاحقة ومؤمَّنة من عملية البيع (مثلاً، عبر بوابة عملاء آمنة بعد التحقق الأولي).
        *   **تأمين عملية الرفع:** إذا كان لا بد من جمعها، فيجب تطبيق إجراءات أمنية صارمة:
            *   **فحص الملفات على الخادم:** يجب فحص جميع الملفات المرفوعة بحثًا عن الفيروسات والبرامج الضارة.
            *   **تخزين آمن:** يجب تخزين الملفات المرفوعة خارج جذر الويب العام (web root) وبأسماء ملفات عشوائية لمنع الوصول المباشر إليها.
            *   **التشفير:** يجب تشفير البيانات الحساسة أثناء النقل (باستخدام HTTPS، وهو أمر مفروغ منه) وأثناء التخزين (Encryption at Rest).
            *   **الامتثال للقوانين:** يجب التأكد من الامتثال لقوانين حماية البيانات مثل GDPR، والتي تفرض قواعد صارمة على جمع ومعالجة مثل هذه البيانات.
2.  **التحقق من صحة النماذج (Form Validation):**
    *   يجب أن يتم التحقق من صحة جميع مدخلات النماذج على **جانب العميل (لتحسين تجربة المستخدم) وجانب الخادم (للأمان)**. الاعتماد على التحقق من جانب العميل فقط يمثل ثغرة أمنية.
3.  **الحماية من هجمات CSRF و XSS:**
    *   يجب أن تستخدم النماذج رموزًا مميزة (tokens) للحماية من هجمات تزوير الطلبات عبر المواقع (CSRF).
    *   يجب تعقيم جميع المدخلات التي يعرضها المستخدم لمنع هجمات البرمجة عبر المواقع (XSS).

### ملخص المراجعة

*   **نقاط القوة:**
    *   بنية معلومات واضحة ومنظمة جيدًا.
    *   استراتيجية قوية جدًا لتحسين الأداء الأولي للصفحة (WP Rocket).
    *   استراتيجية تسويق وجمع بيانات شاملة.

*   **مجالات التحسين الرئيسية:**
    *   **الأمان (أولوية قصوى):** يجب إعادة النظر فورًا في عملية جمع بيانات جواز السفر. إنها تمثل أكبر مخاطرة في النظام الموصوف.
    *   **أداء ما بعد التحميل:** يجب تدقيق العدد الكبير من سكريبتات التتبع والنظر في حلول مثل Server-Side GTM لتقليل العبء على العميل.
    *   **قابلية التوسع:** التفكير في الترقيم أو التصفية من جانب الخادم إذا كان من المتوقع أن ينمو عدد المشاريع بشكل كبير.


    /##### التشفير و فك التشفي ##
    book-online/?url=bm9uY2U9MjQ2NTNhZGMxZSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhVRFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhVRFVBMiZkZXBvc2l0PTM3MDAwLjA=
فك تشفير base 64
Gemini 2.5 Pro
Ran for 22s
Thought for 22 seconds
chevron_right
بالتأكيد. النص الذي قدمته هو سلسلة مشفرة باستخدام Base64. عند فك تشفيرها، نحصل على مجموعة من البيانات المنظمة التي تُستخدم غالبًا لتمرير معلومات بين صفحات الويب.
النص المشفر (Base64):
code
Code
bm9uY2U9MjQ2NTNhZGMxZSZsb2NhdGlvbl9jb2RlPURDK0NlZGFyK0J1aWxkaW5nKzItMi0yMTAmYmVkcz0zK0JlZHJvb21zJmZsb29yPTImdHlwZT1BcGFydG1lbnQmYmF0aD0wJmFyZWE9MSUyQzY5MSZwcmljZT00JTJDMTQ5JTJDODg4JnByb3BlcnR5X2lkPWEwWjRMMDAwMDAxZVhVRFVBMiZ0aXRsZT1DZWRhciZjb21tdW5pdHlfdGl0bGU9RHViYWkrQ3JlZWsrSGFyYm91ciZzbHVnPWNlZGFyJmZsb29yX3BsYW49aHR0cHMlM0ElMkYlMkZlbWFhcnNhbGVzLm15LnNhbGVzZm9yY2Utc2l0ZXMuY29tJTJGYXBpJTJGRmxvb3JQbGFuVG9TaXRlVXNlcnMlM0ZpZCUzRGEwWjRMMDAwMDAxZVhVRFVBMiZkZXBvc2l0PTM3MDAwLjA=
البيانات بعد فك التشفير:
هذه البيانات هي عبارة عن رابط URL يحتوي على تفاصيل كاملة لوحدة عقارية محددة، وهي كالتالي:
nonce: 24653adc1e (رقم عشوائي يُستخدم مرة واحدة للأمان)
location_code: DC+Cedar+Building+2-2-210 (رمز الوحدة: مبنى سيدار 2، الطابق 2، وحدة 210 في خور دبي)
beds: 3+Bedrooms (عدد غرف النوم: 3)
floor: 2 (الطابق: الثاني)
type: Apartment (نوع العقار: شقة)
bath: 0 (عدد الحمامات: 0 - قد تكون هذه القيمة غير دقيقة أو غير مستخدمة)
area: 1,691 (المساحة: 1,691 قدم مربع)
price: 4,149,888 (السعر: 4,149,888 درهم إماراتي)
property_id: a0Z4L000001eXUDUA2 (معرّف الوحدة في نظام Salesforce)
title: Cedar (اسم المشروع: سيدار)
community_title: Dubai+Creek+Harbour (اسم المجتمع: خور دبي)
slug: cedar (الاسم المختصر للرابط)
floor_plan: https://emaarsales.my.salesforce-sites.com/api/FloorPlanToSiteUsers?id=a0Z4L000001eXUDUA2 (رابط مخطط الطابق)
deposit: 37000.0 (قيمة الدفعة المقدمة: 37,000 درهم إماراتي)
الخلاصة:
هذه البيانات المفككة تمثل جميع التفاصيل اللازمة لصفحة الحجز الإلكتروني ("Book Now") الخاصة بوحدة عقارية محددة في مشروع "سيدار" ضمن مجتمع "خور دبي". يتم تشفيرها في رابط واحد لتسهيل نقلها بشكل آمن ومنظم.
