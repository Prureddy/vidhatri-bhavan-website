(function () {
  "use strict";

  const S = window.SITE;

  const I18N = {
    en: {
      "nav.specials": "Specials",
      "nav.about": "Our story",
      "sp0.title": "Mudde Oota",
      "sp0.desc": "Our house special: soft ragi mudde with hot saaru, palya, rice and all the sides, served on a banana leaf the way Karnataka loves it.",
      "about.title": "Our story",
      "about.p1": "Vidhatri Bhavan is a pure vegetarian family hotel run by the Vidhatri Group of Hotels in Shivamogga, with branches in Gandhinagar and Gopala Gowda Extension.",
      "about.p2": "Our day begins at 6:30 in the morning with soft idlis, crisp vadas and strong filter coffee, and the chutney still comes in little bronze cups. By lunch the banana leaves are out for full meals, and the kitchen keeps going till 10:30 at night with North Indian thalis, biryanis and Chinese favourites.",
      "about.p3": "Our promise is right there on our logo: quality is our strength. Good food, honest portions, and prices a whole family can enjoy together.",
      "about.k1": "6:30 AM",
      "about.v1": "Idli, vada and filter coffee, fresh every morning",
      "about.k2": "Mon & Fri",
      "about.v2": "Holige Oota with plenty of ghee",
      "about.k3": "VB special",
      "about.v3": "Mudde Oota with ragi mudde and saaru",
      "about.k4": "Bronze cups",
      "about.v4": "Chutney served the traditional way",
      "nav.menu": "Menu",
      "nav.branches": "Branches",
      "nav.celebrations": "Celebrations",
      "hero.eyebrow": "Pure vegetarian · Shivamogga",
      "hero.lead": "From soft idlis and filter coffee at 6:30 in the morning to full meals on a banana leaf, served the traditional way at Shivamogga's favourite family hotel.",
      "hero.order": "Order on WhatsApp",
      "hero.find": "Find a branch",
      "fact.open": "AM, open every day",
      "fact.branches": "branches in Shivamogga",
      "fact.veg": "pure vegetarian",
      "status.open": "Open now · closes {t}",
      "status.closed": "Closed now · opens {t}",
      "status.holige": "Holige Oota today",
      "specials.title": "House specials",
      "specials.sub": "The dishes Shivamogga keeps coming back for.",
      "tag.monfri": "Mon & Fri",
      "tag.bestseller": "Bestseller",
      "tag.morning": "From 6:30 AM",
      "tag.favourite": "Guest favourite",
      "tag.house": "VB special",
      "sp1.title": "Holige Oota",
      "sp1.desc": "A full traditional meal with sweet holige and ghee, served every Monday and Friday.",
      "sp2.title": "Idli Vada",
      "sp2.desc": "Soft idlis, crisp vadas, hot sambar and coconut chutney.",
      "sp3.title": "Filter Coffee",
      "sp3.desc": "Strong and frothy, the way Shivamogga starts its day.",
      "sp4.title": "Veg Mughlai Biryani",
      "sp4.desc": "Fragrant, rich and generously portioned, for lunch or dinner.",
      "menu.title": "Our menu",
      "menu.sub": "From early-morning tiffin to late dinner.",
      "menu.note": "Everything we serve is pure vegetarian. The menu may vary slightly by branch.",
      "order.title": "Prefer delivery?",
      "branches.title": "Visit us",
      "branches.sub": "Two branches, the same taste.",
      "branch.daily": "Open daily",
      "branch.call": "Call",
      "branch.directions": "Directions",
      "branch.reviews": "Google reviews",
      "feat.outdoor": "Outdoor seating",
      "feat.unlimited": "Unlimited meals",
      "cel.title": "Celebrate with us",
      "cel.sub": "Birthdays, naming ceremonies, office lunches and family functions. Order tiffin, full meals and sweets in bulk, freshly made in our kitchen.",
      "cel.p1": "Bulk and party orders for any headcount",
      "cel.p2": "Tiffin, full meals and sweets",
      "cel.p3": "Pure veg menus for every budget",
      "form.title": "Send an enquiry",
      "form.name": "Your name",
      "form.phone": "Phone",
      "form.date": "Date",
      "form.guests": "Guests",
      "form.occasion": "Occasion",
      "form.branch": "Branch",
      "form.submit": "Send enquiry on WhatsApp",
      "form.error": "Please fill in your name, phone, date and number of guests.",
      "occ.birthday": "Birthday",
      "occ.naming": "Naming ceremony",
      "occ.office": "Office party",
      "occ.family": "Family function",
      "occ.bulk": "Bulk order",
      "occ.other": "Other",
      "gallery.title": "From our kitchen",
      "gallery.sub": "Cooked fresh every day and served the traditional way.",
      "gal.1": "North Indian Thali",
      "gal.2": "Our dining hall, Gopala Gowda Extension",
      "gal.3": "Masala Dosa",
      "gal.4": "Special Curd Rice",
      "gal.5": "Meals on a Banana Leaf",
      "gal.6": "Kesari Bath",
      "ratings.title": "Loved by Shivamogga",
      "reviews.from": "5-star reviews from Google",
      "reviews.read": "Read reviews on Google",
      "reviews.say": "What people say",
      "reviews.google": "Google review",
      "reviews.blog": "Food blog",
      "footer.tag": "Pure vegetarian family hotel, Shivamogga.",
      "footer.motto": "Quality is our strength",
      "footer.credits": "Photo credits",
      "footer.follow": "Follow us",
      "bar.call": "Call",
      "bar.order": "Order",
      "bar.visit": "Visit",
      "wa.order": "Hello Vidhatri Bhavan, I would like to place an order.",
    },
    kn: {
      "nav.specials": "ವಿಶೇಷ",
      "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
      "sp0.title": "ಮುದ್ದೆ ಊಟ",
      "sp0.desc": "ನಮ್ಮ ವಿಶೇಷ: ಮೃದುವಾದ ರಾಗಿ ಮುದ್ದೆ, ಬಿಸಿ ಸಾರು, ಪಲ್ಯ, ಅನ್ನ ಮತ್ತು ಎಲ್ಲಾ ಜೊತೆಗಳು, ಬಾಳೆ ಎಲೆಯ ಮೇಲೆ, ಕರ್ನಾಟಕದ ಶೈಲಿಯಲ್ಲಿ.",
      "about.title": "ನಮ್ಮ ಬಗ್ಗೆ",
      "about.p1": "ವಿಧಾತ್ರಿ ಭವನ ಶಿವಮೊಗ್ಗದ ವಿಧಾತ್ರಿ ಗ್ರೂಪ್ ಆಫ್ ಹೋಟೆಲ್ಸ್ ನಡೆಸುವ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಕುಟುಂಬದ ಹೋಟೆಲ್. ಗಾಂಧಿನಗರ ಮತ್ತು ಗೋಪಾಲಗೌಡ ಬಡಾವಣೆಯಲ್ಲಿ ನಮ್ಮ ಶಾಖೆಗಳಿವೆ.",
      "about.p2": "ನಮ್ಮ ದಿನ ಬೆಳಿಗ್ಗೆ 6:30ಕ್ಕೆ ಮೃದು ಇಡ್ಲಿ, ಗರಿಗರಿ ವಡೆ ಮತ್ತು ಘಮಘಮಿಸುವ ಫಿಲ್ಟರ್ ಕಾಫಿಯೊಂದಿಗೆ ಶುರುವಾಗುತ್ತದೆ; ಚಟ್ನಿ ಇಂದಿಗೂ ಪುಟ್ಟ ಕಂಚಿನ ಬಟ್ಟಲುಗಳಲ್ಲೇ ಬರುತ್ತದೆ. ಮಧ್ಯಾಹ್ನ ಬಾಳೆ ಎಲೆಯ ಪೂರ್ಣ ಊಟ, ಮತ್ತು ರಾತ್ರಿ 10:30ರವರೆಗೆ ಉತ್ತರ ಭಾರತೀಯ ಥಾಲಿ, ಬಿರಿಯಾನಿ ಮತ್ತು ಚೈನೀಸ್ ಖಾದ್ಯಗಳು.",
      "about.p3": "ನಮ್ಮ ಭರವಸೆ ನಮ್ಮ ಲೋಗೋದಲ್ಲೇ ಇದೆ: ಗುಣಮಟ್ಟವೇ ನಮ್ಮ ಶಕ್ತಿ. ರುಚಿಯಾದ ಊಟ, ಸರಿಯಾದ ಪ್ರಮಾಣ, ಇಡೀ ಕುಟುಂಬಕ್ಕೆ ಹೊಂದುವ ಬೆಲೆ.",
      "about.k1": "ಬೆಳಿಗ್ಗೆ 6:30",
      "about.v1": "ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ ತಾಜಾ ಇಡ್ಲಿ, ವಡೆ, ಫಿಲ್ಟರ್ ಕಾಫಿ",
      "about.k2": "ಸೋಮ ಮತ್ತು ಶುಕ್ರ",
      "about.v2": "ತುಪ್ಪದ ಹೋಳಿಗೆ ಊಟ",
      "about.k3": "ವಿಬಿ ವಿಶೇಷ",
      "about.v3": "ರಾಗಿ ಮುದ್ದೆ ಮತ್ತು ಸಾರಿನ ಮುದ್ದೆ ಊಟ",
      "about.k4": "ಕಂಚಿನ ಬಟ್ಟಲು",
      "about.v4": "ಸಾಂಪ್ರದಾಯಿಕ ರೀತಿಯಲ್ಲಿ ಚಟ್ನಿ",
      "nav.menu": "ಮೆನು",
      "nav.branches": "ಶಾಖೆಗಳು",
      "nav.celebrations": "ಸಮಾರಂಭ",
      "hero.eyebrow": "ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ · ಶಿವಮೊಗ್ಗ",
      "hero.lead": "ಬೆಳಿಗ್ಗೆ 6:30ರ ಮೃದು ಇಡ್ಲಿ, ಫಿಲ್ಟರ್ ಕಾಫಿಯಿಂದ ಬಾಳೆ ಎಲೆಯ ಪೂರ್ಣ ಊಟದವರೆಗೆ, ಶಿವಮೊಗ್ಗದ ನೆಚ್ಚಿನ ಕುಟುಂಬದ ಹೋಟೆಲ್‌ನಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ರುಚಿ.",
      "hero.order": "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",
      "hero.find": "ಶಾಖೆ ಹುಡುಕಿ",
      "fact.open": "ಬೆಳಿಗ್ಗೆಯಿಂದ, ಪ್ರತಿದಿನ",
      "fact.branches": "ಶಿವಮೊಗ್ಗದಲ್ಲಿ ಶಾಖೆಗಳು",
      "fact.veg": "ಶುದ್ಧ ಸಸ್ಯಾಹಾರ",
      "status.open": "ಈಗ ತೆರೆದಿದೆ · ಮುಚ್ಚುವ ಸಮಯ {t}",
      "status.closed": "ಈಗ ಮುಚ್ಚಿದೆ · ತೆರೆಯುವ ಸಮಯ {t}",
      "status.holige": "ಇಂದು ಹೋಳಿಗೆ ಊಟ",
      "specials.title": "ನಮ್ಮ ವಿಶೇಷಗಳು",
      "specials.sub": "ಶಿವಮೊಗ್ಗದ ಜನ ಮತ್ತೆ ಮತ್ತೆ ಬರುವುದು ಇವುಗಳಿಗಾಗಿ.",
      "tag.monfri": "ಸೋಮ ಮತ್ತು ಶುಕ್ರ",
      "tag.bestseller": "ಹೆಚ್ಚು ಮಾರಾಟ",
      "tag.morning": "ಬೆಳಿಗ್ಗೆ 6:30 ರಿಂದ",
      "tag.favourite": "ಗ್ರಾಹಕರ ನೆಚ್ಚಿನದು",
      "tag.house": "ವಿಬಿ ವಿಶೇಷ",
      "sp1.title": "ಹೋಳಿಗೆ ಊಟ",
      "sp1.desc": "ತುಪ್ಪದ ಹೋಳಿಗೆಯೊಂದಿಗೆ ಪೂರ್ಣ ಸಾಂಪ್ರದಾಯಿಕ ಊಟ. ಪ್ರತಿ ಸೋಮವಾರ ಮತ್ತು ಶುಕ್ರವಾರ.",
      "sp2.title": "ಇಡ್ಲಿ ವಡೆ",
      "sp2.desc": "ಮೃದು ಇಡ್ಲಿ, ಗರಿಗರಿ ವಡೆ, ಬಿಸಿ ಸಾಂಬಾರ್ ಮತ್ತು ಕಾಯಿ ಚಟ್ನಿ.",
      "sp3.title": "ಫಿಲ್ಟರ್ ಕಾಫಿ",
      "sp3.desc": "ಗಟ್ಟಿಯಾದ, ನೊರೆನೊರೆಯ ಕಾಫಿ. ಶಿವಮೊಗ್ಗದ ದಿನ ಶುರುವಾಗುವುದೇ ಹೀಗೆ.",
      "sp4.title": "ವೆಜ್ ಮೊಘಲಾಯಿ ಬಿರಿಯಾನಿ",
      "sp4.desc": "ಘಮಘಮಿಸುವ, ರುಚಿಕರ ಬಿರಿಯಾನಿ. ಮಧ್ಯಾಹ್ನ ಅಥವಾ ರಾತ್ರಿ ಊಟಕ್ಕೆ.",
      "menu.title": "ನಮ್ಮ ಮೆನು",
      "menu.sub": "ಬೆಳಗಿನ ತಿಂಡಿಯಿಂದ ರಾತ್ರಿಯ ಊಟದವರೆಗೆ.",
      "menu.note": "ನಮ್ಮಲ್ಲಿ ಎಲ್ಲವೂ ಶುದ್ಧ ಸಸ್ಯಾಹಾರ. ಮೆನು ಶಾಖೆಯಿಂದ ಶಾಖೆಗೆ ಸ್ವಲ್ಪ ಬದಲಾಗಬಹುದು.",
      "order.title": "ಮನೆಗೇ ತರಿಸಿಕೊಳ್ಳಬೇಕೆ?",
      "branches.title": "ನಮ್ಮಲ್ಲಿಗೆ ಬನ್ನಿ",
      "branches.sub": "ಎರಡು ಶಾಖೆಗಳು, ಒಂದೇ ರುಚಿ.",
      "branch.daily": "ಪ್ರತಿದಿನ",
      "branch.call": "ಕರೆ ಮಾಡಿ",
      "branch.directions": "ದಾರಿ ತೋರಿಸಿ",
      "branch.reviews": "ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳು",
      "feat.outdoor": "ಹೊರಾಂಗಣ ಆಸನ",
      "feat.unlimited": "ಅನ್‌ಲಿಮಿಟೆಡ್ ಊಟ",
      "cel.title": "ನಮ್ಮೊಂದಿಗೆ ಆಚರಿಸಿ",
      "cel.sub": "ಹುಟ್ಟುಹಬ್ಬ, ನಾಮಕರಣ, ಆಫೀಸ್ ಊಟ, ಕುಟುಂಬ ಸಮಾರಂಭ. ತಿಂಡಿ, ಪೂರ್ಣ ಊಟ ಮತ್ತು ಸಿಹಿತಿಂಡಿಗಳನ್ನು ಬಲ್ಕ್ ಆಗಿ ಆರ್ಡರ್ ಮಾಡಿ, ನಮ್ಮ ಅಡುಗೆಮನೆಯಲ್ಲಿ ತಾಜಾ ತಯಾರಿ.",
      "cel.p1": "ಎಷ್ಟೇ ಜನರಿಗೂ ಬಲ್ಕ್ ಮತ್ತು ಪಾರ್ಟಿ ಆರ್ಡರ್",
      "cel.p2": "ತಿಂಡಿ, ಪೂರ್ಣ ಊಟ ಮತ್ತು ಸಿಹಿತಿಂಡಿ",
      "cel.p3": "ಪ್ರತಿ ಬಜೆಟ್‌ಗೆ ತಕ್ಕ ಸಸ್ಯಾಹಾರಿ ಮೆನು",
      "form.title": "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",
      "form.name": "ನಿಮ್ಮ ಹೆಸರು",
      "form.phone": "ಫೋನ್",
      "form.date": "ದಿನಾಂಕ",
      "form.guests": "ಅತಿಥಿಗಳು",
      "form.occasion": "ಸಂದರ್ಭ",
      "form.branch": "ಶಾಖೆ",
      "form.submit": "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
      "form.error": "ದಯವಿಟ್ಟು ಹೆಸರು, ಫೋನ್, ದಿನಾಂಕ ಮತ್ತು ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ ತುಂಬಿ.",
      "occ.birthday": "ಹುಟ್ಟುಹಬ್ಬ",
      "occ.naming": "ನಾಮಕರಣ",
      "occ.office": "ಆಫೀಸ್ ಪಾರ್ಟಿ",
      "occ.family": "ಕುಟುಂಬ ಸಮಾರಂಭ",
      "occ.bulk": "ಬಲ್ಕ್ ಆರ್ಡರ್",
      "occ.other": "ಇತರೆ",
      "gallery.title": "ನಮ್ಮ ಅಡುಗೆಮನೆಯಿಂದ",
      "gallery.sub": "ಪ್ರತಿದಿನ ತಾಜಾ ತಯಾರಿ, ಸಾಂಪ್ರದಾಯಿಕ ರೀತಿಯಲ್ಲಿ ಬಡಿಸುವುದು.",
      "gal.1": "ಉತ್ತರ ಭಾರತೀಯ ಥಾಲಿ",
      "gal.2": "ನಮ್ಮ ಊಟದ ಹಾಲ್, ಗೋಪಾಲಗೌಡ ಬಡಾವಣೆ",
      "gal.3": "ಮಸಾಲೆ ದೋಸೆ",
      "gal.4": "ಸ್ಪೆಷಲ್ ಮೊಸರನ್ನ",
      "gal.5": "ಬಾಳೆ ಎಲೆ ಊಟ",
      "gal.6": "ಕೇಸರಿ ಬಾತ್",
      "ratings.title": "ಶಿವಮೊಗ್ಗದ ಮೆಚ್ಚುಗೆ",
      "reviews.from": "ಗೂಗಲ್‌ನಲ್ಲಿ 5 ನಕ್ಷತ್ರದ ವಿಮರ್ಶೆಗಳು",
      "reviews.read": "ಗೂಗಲ್‌ನಲ್ಲಿ ವಿಮರ್ಶೆಗಳನ್ನು ಓದಿ",
      "reviews.say": "ಜನರ ಮಾತು",
      "reviews.google": "ಗೂಗಲ್ ವಿಮರ್ಶೆ",
      "reviews.blog": "ಆಹಾರ ಬ್ಲಾಗ್",
      "footer.tag": "ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಕುಟುಂಬದ ಹೋಟೆಲ್, ಶಿವಮೊಗ್ಗ.",
      "footer.motto": "ಗುಣಮಟ್ಟವೇ ನಮ್ಮ ಶಕ್ತಿ",
      "footer.credits": "ಚಿತ್ರ ಕೃಪೆ",
      "footer.follow": "ನಮ್ಮನ್ನು ಫಾಲೋ ಮಾಡಿ",
      "bar.call": "ಕರೆ",
      "bar.order": "ಆರ್ಡರ್",
      "bar.visit": "ಬನ್ನಿ",
      "wa.order": "ನಮಸ್ಕಾರ ವಿಧಾತ್ರಿ ಭವನ, ನಾನು ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ.",
    },
  };

  let lang = "en";
  try {
    const saved = localStorage.getItem("vb-lang");
    if (saved === "kn" || saved === "en") lang = saved;
  } catch (e) { /* storage unavailable */ }

  let activeTab = S.menu[0].id;

  const t = (key) => I18N[lang][key] ?? I18N.en[key] ?? key;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const waLink = (text) => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(text)}`;
  const mapsLink = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const mapsEmbed = (q) => `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=16&output=embed`;

  function fmtTime(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    const suffix = h >= 12 ? "PM" : "AM";
    return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${suffix}`;
  }

  // Date and time in India, regardless of the visitor's own time zone.
  function nowIST() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23", weekday: "short",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    return {
      minutes: Number(get("hour")) * 60 + Number(get("minute")),
      weekday: get("weekday"),
      isoDate: `${get("year")}-${get("month")}-${get("day")}`,
    };
  }
  const nowMinutesIST = () => nowIST().minutes;
  const isHoligeDay = () => ["Mon", "Fri"].includes(nowIST().weekday);

  function isOpen(branch) {
    const toMin = (s) => { const [h, m] = s.split(":").map(Number); return h * 60 + m; };
    const now = nowMinutesIST();
    return now >= toMin(branch.open) && now < toMin(branch.close);
  }

  function statusText(branch) {
    return isOpen(branch)
      ? t("status.open").replace("{t}", fmtTime(branch.close))
      : t("status.closed").replace("{t}", fmtTime(branch.open));
  }

  /* ---------- Renderers ---------- */

  function renderStatus() {
    $("#statusStrip").innerHTML = S.branches.map((b) => `
      <a class="status ${isOpen(b) ? "is-open" : "is-closed"}" href="#branch-${b.id}">
        <span class="dot" aria-hidden="true"></span>
        <strong>${esc(b.name[lang])}</strong>
        <span>${esc(statusText(b))}</span>
      </a>`).join("") + (isHoligeDay() ? `<a class="status-today" href="#specials">✦ ${esc(t("status.holige"))}</a>` : "");
  }

  function renderMenu() {
    $("#menuTabs").innerHTML = S.menu.map((c) => `
      <button type="button" role="tab" class="menu-tab" id="tab-${c.id}" data-tab="${c.id}"
        aria-selected="${c.id === activeTab}" tabindex="${c.id === activeTab ? 0 : -1}">${esc(c.name[lang])}</button>`).join("");

    const cat = S.menu.find((c) => c.id === activeTab);
    const panel = $("#menuPanel");
    panel.setAttribute("aria-labelledby", `tab-${cat.id}`);
    const compact = !cat.items.some((it) => it.price);
    panel.innerHTML = `<ul class="menu-list${compact ? " is-compact" : ""}">${cat.items.map((it) => `
      <li class="menu-item">
        <span class="veg-mark" aria-label="Vegetarian"></span>
        <span class="mi-name">
          <span class="mi-primary">${esc(lang === "kn" ? it.kn : it.en)}</span>
          <span class="mi-secondary">${esc(lang === "kn" ? it.en : it.kn)}</span>
          ${it.note ? `<span class="mi-note">${esc(it.note[lang])}</span>` : ""}
          ${it.tag ? `<span class="mi-tag mi-tag-${it.tag}">${esc(t("tag." + it.tag))}</span>` : ""}
        </span>
        ${it.price ? `<span class="mi-dots" aria-hidden="true"></span><span class="mi-price">₹${it.price}</span>` : ""}
      </li>`).join("")}</ul>`;
  }

  function renderBranches() {
    $("#branchList").innerHTML = S.branches.map((b) => `
      <article class="branch" id="branch-${b.id}">
        <div class="branch-map">
          <iframe title="Map: ${esc(b.name.en)}" src="${mapsEmbed(b.mapQuery)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="branch-body">
          <div class="branch-title">
            <h3>${esc(b.name[lang])}</h3>
            <p class="branch-status ${isOpen(b) ? "is-open" : "is-closed"}"><span class="dot" aria-hidden="true"></span>${esc(statusText(b))}</p>
          </div>
          <p class="branch-addr">${esc(b.address[lang])}</p>
          <ul class="branch-feats">
            <li class="branch-fact">${esc(t("branch.daily"))} ${fmtTime(b.open)} – ${fmtTime(b.close)}</li>
            <li class="branch-fact">★ ${b.rating.value.toFixed(1)} <small>(${esc(b.rating.count)})</small></li>
            ${b.features.map((f) => `<li>${esc(t("feat." + f))}</li>`).join("")}
          </ul>
          <div class="branch-actions">
            <a class="btn btn-leaf" href="tel:${b.phone}">${esc(t("branch.call"))} · ${esc(b.phoneDisplay)}</a>
            <a class="btn btn-outline" href="${mapsLink(b.mapQuery)}" target="_blank" rel="noopener">${esc(t("branch.directions"))}</a>
          </div>
        </div>
      </article>`).join("");

    $("#branchSelect").innerHTML = S.branches.map((b) => `<option value="${esc(b.name.en)}">${esc(b.name[lang])}</option>`).join("");

    $("#footerBranches").innerHTML = S.branches.map((b) => `
      <div class="footer-branch">
        <h3>${esc(b.name[lang])}</h3>
        <p>${esc(b.address[lang])}</p>
        <p>${fmtTime(b.open)} – ${fmtTime(b.close)} · <a href="tel:${b.phone}">${esc(b.phoneDisplay)}</a></p>
      </div>`).join("");
  }

  function renderRatings() {
    $("#ratingsList").innerHTML = S.branches.map((b) => `
      <div class="rating">
        <p class="rating-value">${b.rating.value.toFixed(1)}<span>★</span></p>
        <p class="rating-label">${esc(b.name[lang])}<br><small>${esc(b.rating.count)} ${esc(t("branch.reviews"))}</small><br>
          <a href="${esc(b.reviewsUrl || mapsLink(b.mapQuery))}" target="_blank" rel="noopener">${esc(t("reviews.read"))} →</a></p>
      </div>`).join("");
  }

  /* ---------- Live Google reviews ---------- */

  let liveReviews = [];

  function compactCount(n) {
    if (n < 1000) return String(n);
    return (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "") + "K";
  }

  // Live Google reviews when they have loaded, otherwise the reviews stored in data.js.
  function currentReviews() {
    if (liveReviews.length) return liveReviews;
    return (S.reviews || []).map((r) => ({
      name: r.author,
      source: r.source,
      rating: r.rating,
      profile: r.url,
      when: r.when || t(r.source === "google" ? "reviews.google" : "reviews.blog"),
      branch: S.branches.find((b) => b.id === r.branch),
      text: r.text,
    }));
  }

  function renderReviews() {
    const list = currentReviews();
    const box = $("#reviews");
    box.hidden = list.length === 0;
    if (box.hidden) return;
    $("#reviewsHeading").textContent = t(liveReviews.length ? "reviews.from" : "reviews.say");
    $("#reviewsHead .g-mark").style.display = liveReviews.length ? "" : "none";
    const gMark = $("#reviewsHead .g-mark").outerHTML.replace(' style="display: none;"', "");
    $("#reviewsTrack").innerHTML = list.map((r) => `
      <li class="review">
        <div class="review-top">
          ${r.photo
            ? `<img class="review-avatar" src="${esc(r.photo)}" alt="" referrerpolicy="no-referrer" loading="lazy">`
            : `<span class="review-avatar" aria-hidden="true">${esc(r.name.charAt(0).toUpperCase())}</span>`}
          <div class="review-who">
            ${r.profile
              ? `<a class="review-name" href="${esc(r.profile)}" target="_blank" rel="noopener">${esc(r.name)}</a>`
              : `<span class="review-name">${esc(r.name)}</span>`}
            <span class="review-meta">${esc([r.when, r.branch && r.branch.name[lang]].filter(Boolean).join(" · "))}</span>
          </div>
          ${r.source === "google" ? gMark : ""}
        </div>
        ${r.rating === 5 ? `<p class="review-stars" aria-label="5 out of 5 stars">★★★★★</p>` : ""}
        <p class="review-text">“${esc(r.text)}”</p>
      </li>`).join("");
    // A profile photo that fails to load falls back to the reviewer's initial.
    $$("#reviewsTrack img.review-avatar").forEach((img) => img.addEventListener("error", () => {
      const span = document.createElement("span");
      span.className = "review-avatar";
      span.textContent = img.closest(".review").querySelector(".review-name").textContent.charAt(0).toUpperCase();
      img.replaceWith(span);
    }, { once: true }));
  }

  function loadGoogleMaps(key) {
    if (window.google && google.maps && google.maps.importLibrary) return Promise.resolve();
    return new Promise((resolve, reject) => {
      window.__vbMapsReady = resolve;
      const s = document.createElement("script");
      s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly&loading=async&callback=__vbMapsReady`;
      s.async = true;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function fetchBranch(Place, branch) {
    let id = branch.placeId;
    if (!id) {
      const { places } = await Place.searchByText({ textQuery: branch.mapQuery, fields: ["id"], maxResultCount: 1 });
      if (!places.length) return null;
      id = places[0].id;
      console.info(`Google place ID for ${branch.name.en}: ${id} (add it as placeId in data.js to skip this lookup)`);
    }
    const place = new Place({ id });
    await place.fetchFields({ fields: ["rating", "userRatingCount", "reviews", "googleMapsURI"] });
    return { branch, place };
  }

  // Google returns up to five reviews per place; only 5-star reviews with some text are shown.
  async function loadReviews() {
    if (!S.googleMapsKey) return;
    try {
      await loadGoogleMaps(S.googleMapsKey);
      const { Place } = await google.maps.importLibrary("places");
      const settled = await Promise.allSettled(S.branches.map((b) => fetchBranch(Place, b)));
      const results = settled.filter((r) => r.status === "fulfilled" && r.value).map((r) => r.value);
      results.forEach(({ branch, place }) => {
        if (place.rating) branch.rating = { value: place.rating, count: compactCount(place.userRatingCount || 0) };
        if (place.googleMapsURI) branch.reviewsUrl = place.googleMapsURI;
      });
      liveReviews = results.flatMap(({ branch, place }) => (place.reviews || [])
        .filter((r) => r.rating === 5 && (r.text || "").trim().length >= 30)
        .map((r) => ({
          branch,
          name: (r.authorAttribution && r.authorAttribution.displayName) || "Google user",
          photo: r.authorAttribution && r.authorAttribution.photoURI,
          profile: r.authorAttribution && r.authorAttribution.uri,
          when: r.relativePublishTimeDescription,
          time: r.publishTime ? new Date(r.publishTime).getTime() : 0,
          source: "google",
          rating: 5,
          text: r.text.trim(),
        })))
        .sort((a, b) => b.time - a.time);
      renderRatings();
      renderReviews();
      startReviewSlider();
    } catch (err) {
      console.warn("Google reviews could not be loaded:", err);
    }
  }

  // Auto-advance one card every 5 seconds; pauses while hovered, focused or off-screen.
  let sliderStarted = false;
  function startReviewSlider() {
    if (sliderStarted || !currentReviews().length) return;
    sliderStarted = true;
    const track = $("#reviewsTrack");
    const step = (dir) => {
      const card = track.querySelector(".review");
      if (!card) return;
      const width = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      const atStart = track.scrollLeft <= 4;
      if (dir > 0 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else if (dir < 0 && atStart) track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      else track.scrollBy({ left: dir * width, behavior: "smooth" });
    };
    $("#reviewsPrev").addEventListener("click", () => step(-1));
    $("#reviewsNext").addEventListener("click", () => step(1));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let paused = false;
    ["mouseenter", "focusin", "touchstart"].forEach((ev) => track.addEventListener(ev, () => { paused = true; }, { passive: true }));
    ["mouseleave", "focusout"].forEach((ev) => track.addEventListener(ev, () => { paused = false; }));
    setInterval(() => { if (!paused && !document.hidden) step(1); }, 5000);
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-kn", lang === "kn");
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("#langToggle [data-lang]").forEach((el) => el.classList.toggle("is-active", el.dataset.lang === lang));
    $$("[data-wa='order']").forEach((a) => { a.href = waLink(t("wa.order")); });
    renderStatus();
    renderMenu();
    renderBranches();
    renderRatings();
    renderReviews();
  }

  /* ---------- Static links ---------- */

  $$("[data-link]").forEach((a) => { a.href = S[a.dataset.link]; });
  $("#barCall").href = `tel:${S.branches[0].phone}`;
  $("#year").textContent = new Date().getFullYear();

  // Credit any stand-in photos that are still in use.
  if (S.photoCredits && S.photoCredits.length) {
    $("#creditList").innerHTML = S.photoCredits.map((c) => `
      <li><a href="${esc(c.source)}" target="_blank" rel="noopener">${esc(c.title)}</a> by ${esc(c.author)},
        <a href="${esc(c.licenseUrl)}" target="_blank" rel="noopener">${esc(c.license)}</a></li>`).join("");
    $("#photoCredits").hidden = false;
  }
  $("#enquiryForm [name='date']").min = nowIST().isoDate;

  /* ---------- Events ---------- */

  $("#langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "kn" : "en";
    try { localStorage.setItem("vb-lang", lang); } catch (e) { /* ignore */ }
    applyLanguage();
  });

  $("#menuTabs").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-tab]");
    if (!btn) return;
    activeTab = btn.dataset.tab;
    renderMenu();
    $(`#tab-${activeTab}`).focus();
  });

  $("#menuTabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const ids = S.menu.map((c) => c.id);
    const i = ids.indexOf(activeTab);
    activeTab = ids[(i + (e.key === "ArrowRight" ? 1 : ids.length - 1)) % ids.length];
    renderMenu();
    $(`#tab-${activeTab}`).focus();
  });

  const navToggle = $("#navToggle");
  navToggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $$("#nav a").forEach((a) => a.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));

  $("#enquiryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const err = $("#formError");
    if (!form.checkValidity()) {
      err.hidden = false;
      return;
    }
    err.hidden = true;
    const d = Object.fromEntries(new FormData(form));
    const msg = [
      "Hello Vidhatri Bhavan, I'd like to enquire about a booking.",
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Date: ${d.date}`,
      `Guests: ${d.guests}`,
      `Occasion: ${d.occasion}`,
      `Branch: ${d.branch}`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  });

  // Photos that haven't been added yet show a labelled placeholder instead of a broken image.
  $$("figure.photo img").forEach((img) => {
    const mark = () => img.closest("figure").classList.add("is-missing");
    if (img.complete && img.naturalWidth === 0 && img.loading !== "lazy") mark();
    else img.addEventListener("error", mark);
  });

  // Search engines: describe both branches as restaurants.
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": S.branches.map((b) => ({
      "@type": "Restaurant",
      name: `Vidhatri Bhavan – ${b.name.en}`,
      servesCuisine: ["South Indian", "North Indian", "Chinese", "Vegetarian"],
      priceRange: "₹",
      telephone: b.phone,
      address: { "@type": "PostalAddress", streetAddress: b.address.en, addressLocality: "Shivamogga", addressRegion: "Karnataka", addressCountry: "IN" },
      openingHours: `Mo-Su ${b.open}-${b.close}`,
      sameAs: [S.instagram],
    })),
  });
  document.head.appendChild(ld);

  // Refresh open/closed labels each minute without re-rendering (and reloading) the maps.
  function refreshBranchStatus() {
    S.branches.forEach((b) => {
      const el = $(`#branch-${b.id} .branch-status`);
      if (!el) return;
      el.className = `branch-status ${isOpen(b) ? "is-open" : "is-closed"}`;
      el.lastChild.textContent = statusText(b);
    });
  }

  applyLanguage();
  startReviewSlider();

  // Entrance effects: photos fade in once loaded, and sections rise into view as they are scrolled to.
  // Everything is visible by default; these classes are only added when the script runs.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  $$(".photo img").forEach((img) => {
    if (img.complete) return;
    const fig = img.closest(".photo");
    fig.classList.add("is-loading");
    const done = () => fig.classList.remove("is-loading");
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
  if ("IntersectionObserver" in window && !reduceMotion) {
    const targets = $$(".hero-copy > *, .hero-collage > *, .section-head, .special, .about-copy, .about-points li, .menu-card, .branch, .celebrate-copy, .enquiry, .gallery .photo, .ratings-inner, .reviews");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    targets.forEach((el) => {
      // Stagger items that sit side by side, such as cards in a row.
      const order = [...el.parentElement.children].filter((c) => targets.includes(c)).indexOf(el);
      el.style.setProperty("--reveal-delay", `${Math.min(order, 5) * 90}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  setInterval(() => { renderStatus(); refreshBranchStatus(); }, 60_000);

  // Load Google only when the ratings band is close, so visitors who never scroll that far don't trigger it.
  if (S.googleMapsKey) {
    const ratingsBand = $(".ratings");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        loadReviews();
      }, { rootMargin: "600px 0px" });
      io.observe(ratingsBand);
    } else {
      loadReviews();
    }
  }
})();
