/*
 * Site content lives here. Edit this file to update branches, prices or contact numbers;
 * nothing else needs to change.
 *
 * Values marked TODO are placeholders until confirmed with the restaurant.
 */
window.SITE = {
  // TODO: confirm the WhatsApp number used for orders (digits only, with country code).
  whatsapp: "919480502269",
  instagram: "https://www.instagram.com/vidhatribhavanrestaurant/",

  // Google Maps API key for live Google reviews. Leave empty to hide the review cards.
  // The key needs the "Maps JavaScript API" and "Places API (New)" enabled, and should be
  // restricted to this website's address in Google Cloud Console.
  googleMapsKey: "",

  // Reviews shown in the "Loved by Shivamogga" band when live Google reviews are off.
  // Only copy in real reviews, word for word (for example from the restaurant's Google Maps page).
  // source "google" shows the Google logo; rating 5 shows five stars; branch is "gopalagowda" or "gandhinagar".
  reviews: [
    {
      author: "Masala Chai Media",
      source: "blog",
      url: "https://masalachaimedia.com/vidhatri-bhavan-best-hotel-in-shimoga-town/",
      text: "The idlis are very soft, and vadas are crisp outside and soft inside.",
    },
    {
      author: "Google reviewer",
      source: "google",
      branch: "gopalagowda",
      text: "An aesthetically designed restaurant in Shimoga, giving one all the old-school vibes with their rustic interiors.",
    },
    {
      author: "Masala Chai Media",
      source: "blog",
      url: "https://masalachaimedia.com/vidhatri-bhavan-best-hotel-in-shimoga-town/",
      text: "One of the famous and best hotels in Shimoga town.",
    },
  ],
  zomato: "https://www.zomato.com/shimoga/vidhathri-bhawan-shimoga-locality/order",

  branches: [
    {
      id: "gopalagowda",
      name: { en: "Gopala Gowda Extension", kn: "ಗೋಪಾಲಗೌಡ ಬಡಾವಣೆ" },
      address: {
        en: "Site E, 2, Gopala Gowda Road, Gopala Gowda Extension, Shivamogga",
        kn: "ಸೈಟ್ ಇ, 2, ಗೋಪಾಲಗೌಡ ರಸ್ತೆ, ಗೋಪಾಲಗೌಡ ಬಡಾವಣೆ, ಶಿವಮೊಗ್ಗ",
      },
      // TODO: confirm phone number and hours for this branch.
      phone: "+919449755105",
      phoneDisplay: "094497 55105",
      open: "06:30",
      close: "22:30",
      features: ["outdoor", "unlimited"],
      rating: { value: 4.3, count: "2K" },
      mapQuery: "Vidhatri Bhavan, Gopala Gowda Extension, Shivamogga",
    },
    {
      id: "gandhinagar",
      name: { en: "Gandhinagar", kn: "ಗಾಂಧಿನಗರ" },
      address: {
        en: "Manjunath Tower, B Block, near Bharath Gas, Gandhinagar, Shivamogga 577201",
        kn: "ಮಂಜುನಾಥ ಟವರ್, ಬಿ ಬ್ಲಾಕ್, ಭಾರತ್ ಗ್ಯಾಸ್ ಹತ್ತಿರ, ಗಾಂಧಿನಗರ, ಶಿವಮೊಗ್ಗ 577201",
      },
      phone: "+919480502269",
      phoneDisplay: "094805 02269",
      open: "06:30",
      close: "22:30",
      features: ["unlimited"],
      rating: { value: 4.0, count: "4.2K" },
      mapQuery: "WHVF+7F6 Shivamogga, Karnataka",
    },
  ],

  // Dish names come from the restaurant's Zomato listing and customer reviews (October 2026).
  // Prices are left out until the dine-in menu card is confirmed: Zomato shows delivery prices,
  // which are higher. Add `price: 45` to any item and it appears on the site.
  menu: [
    {
      id: "tiffin",
      name: { en: "Tiffin", kn: "ತಿಂಡಿ" },
      items: [
        { en: "Idli Vada", kn: "ಇಡ್ಲಿ ವಡೆ", tag: "bestseller" },
        { en: "Idli", kn: "ಇಡ್ಲಿ" },
        { en: "Masala Dosa", kn: "ಮಸಾಲೆ ದೋಸೆ", tag: "bestseller" },
        { en: "Set Dosa", kn: "ಸೆಟ್ ದೋಸೆ" },
        { en: "Khara Bath", kn: "ಖಾರಾ ಬಾತ್" },
        { en: "Kesari Bath", kn: "ಕೇಸರಿ ಬಾತ್" },
        { en: "Rice Bath", kn: "ರೈಸ್ ಬಾತ್" },
        { en: "Puri Sagu", kn: "ಪೂರಿ ಸಾಗು" },
        { en: "Filter Coffee", kn: "ಫಿಲ್ಟರ್ ಕಾಫಿ", tag: "bestseller" },
        { en: "Tea", kn: "ಟೀ" },
      ],
    },
    {
      id: "meals",
      name: { en: "Meals", kn: "ಊಟ" },
      items: [
        { en: "South Indian Meals (unlimited)", kn: "ಊಟ (ಅನ್‌ಲಿಮಿಟೆಡ್)", tag: "bestseller" },
        { en: "Holige Oota", kn: "ಹೋಳಿಗೆ ಊಟ", tag: "monfri" },
        { en: "Mudde Oota", kn: "ಮುದ್ದೆ ಊಟ", tag: "house", note: { en: "Ragi mudde with saaru, palya and rice", kn: "ರಾಗಿ ಮುದ್ದೆ, ಸಾರು, ಪಲ್ಯ ಮತ್ತು ಅನ್ನ" } },
        { en: "North Indian Thali", kn: "ಉತ್ತರ ಭಾರತೀಯ ಥಾಲಿ" },
        { en: "Bisi Bele Bath", kn: "ಬಿಸಿಬೇಳೆ ಬಾತ್" },
        { en: "Special Curd Rice", kn: "ಸ್ಪೆಷಲ್ ಮೊಸರನ್ನ" },
      ],
    },
    {
      id: "rice",
      name: { en: "Rice & Biryani", kn: "ರೈಸ್ ಮತ್ತು ಬಿರಿಯಾನಿ" },
      items: [
        { en: "Mughlai Biryani", kn: "ಮೊಘಲಾಯಿ ಬಿರಿಯಾನಿ", tag: "bestseller" },
        { en: "Veg Biryani", kn: "ವೆಜ್ ಬಿರಿಯಾನಿ" },
        { en: "Veg Hyderabadi Biryani", kn: "ವೆಜ್ ಹೈದರಾಬಾದಿ ಬಿರಿಯಾನಿ" },
        { en: "Paneer Biryani", kn: "ಪನೀರ್ ಬಿರಿಯಾನಿ" },
        { en: "Mushroom Biryani", kn: "ಮಶ್ರೂಮ್ ಬಿರಿಯಾನಿ" },
        { en: "Dal Khichdi", kn: "ದಾಲ್ ಖಿಚಡಿ" },
        { en: "Ghee Rice", kn: "ಘೀ ರೈಸ್" },
        { en: "Jeera Rice", kn: "ಜೀರಾ ರೈಸ್" },
        { en: "Veg Pulao", kn: "ವೆಜ್ ಪಲಾವ್" },
        { en: "Peas Pulao", kn: "ಬಟಾಣಿ ಪಲಾವ್" },
      ],
    },
    {
      id: "breads",
      name: { en: "Rotis", kn: "ರೊಟ್ಟಿ" },
      items: [
        { en: "Roti", kn: "ರೋಟಿ" },
        { en: "Butter Roti", kn: "ಬಟರ್ ರೋಟಿ" },
        { en: "Naan", kn: "ನಾನ್" },
        { en: "Butter Naan", kn: "ಬಟರ್ ನಾನ್" },
        { en: "Kulcha", kn: "ಕುಲ್ಚಾ" },
        { en: "Butter Kulcha", kn: "ಬಟರ್ ಕುಲ್ಚಾ" },
        { en: "Aloo Paratha", kn: "ಆಲೂ ಪರೋಟ" },
      ],
    },
    {
      id: "chinese",
      name: { en: "Chinese & Soups", kn: "ಚೈನೀಸ್ ಮತ್ತು ಸೂಪ್" },
      items: [
        { en: "Paneer Chilli", kn: "ಪನೀರ್ ಚಿಲ್ಲಿ", tag: "bestseller" },
        { en: "Gobi Manchurian", kn: "ಗೋಬಿ ಮಂಚೂರಿ" },
        { en: "Veg Fried Rice", kn: "ವೆಜ್ ಫ್ರೈಡ್ ರೈಸ್" },
        { en: "Veg Noodles", kn: "ವೆಜ್ ನೂಡಲ್ಸ್" },
        { en: "Veg Manchow Soup", kn: "ವೆಜ್ ಮಂಚೌ ಸೂಪ್" },
        { en: "Hot and Sour Soup", kn: "ಹಾಟ್ ಅಂಡ್ ಸೌರ್ ಸೂಪ್" },
        { en: "Sweet Corn Soup", kn: "ಸ್ವೀಟ್ ಕಾರ್ನ್ ಸೂಪ್" },
        { en: "Tomato Soup", kn: "ಟೊಮ್ಯಾಟೊ ಸೂಪ್" },
      ],
    },
    {
      id: "drinks",
      name: { en: "Juices & Desserts", kn: "ಜ್ಯೂಸ್ ಮತ್ತು ಸಿಹಿ" },
      items: [
        { en: "Falooda", kn: "ಫಾಲೂದ" },
        { en: "Fruit Salad with Ice Cream", kn: "ಫ್ರೂಟ್ ಸಲಾಡ್ ಐಸ್ ಕ್ರೀಮ್" },
        { en: "Milkshakes", kn: "ಮಿಲ್ಕ್‌ಶೇಕ್", note: { en: "Vanilla, butterscotch, strawberry, apple, pomegranate", kn: "ವೆನಿಲ್ಲಾ, ಬಟರ್‌ಸ್ಕಾಚ್, ಸ್ಟ್ರಾಬೆರಿ, ಸೇಬು, ದಾಳಿಂಬೆ" } },
        { en: "Fresh Juices", kn: "ತಾಜಾ ಜ್ಯೂಸ್", note: { en: "Mosambi, orange, pineapple, grape, watermelon, lemon", kn: "ಮೂಸಂಬಿ, ಕಿತ್ತಳೆ, ಅನಾನಸ್, ದ್ರಾಕ್ಷಿ, ಕಲ್ಲಂಗಡಿ, ನಿಂಬೆ" } },
        { en: "Buttermilk", kn: "ಮಜ್ಜಿಗೆ" },
        { en: "Lemon Soda", kn: "ಲೆಮನ್ ಸೋಡಾ" },
      ],
    },
  ],

  // Stand-in food photos from Wikimedia Commons and Flickr, used under Creative Commons licences
  // that require crediting the photographer. Remove an entry when its photo is replaced with the restaurant's own.
  photoCredits: [
    { file: "gallery-6.jpg", title: "Kesari Bath", author: "mynameisharsha", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", source: "https://www.flickr.com/photos/27526538@N07/5832083727" },
    { file: "party-order.jpg", title: "India - Colours of India - 006 - Wedding Meal", author: "McKay Savage", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://commons.wikimedia.org/w/index.php?curid=11800550" },
    { file: "gallery-5.jpg", title: "South Indian vegetarian thali served on a banana leaf. Hyderabad", author: "Gill jassu", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/w/index.php?curid=195510914" },
    { file: "idli-vada.jpg", title: "Ondu Plate Idli Vada", author: "Harsha K R from Bangalore, India", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", source: "https://commons.wikimedia.org/w/index.php?curid=45149331" },
    { file: "filter-coffee.jpg", title: "Indian Filter Coffee", author: "mrsdkrebs", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/56041749@N02/9892155006" },
    { file: "holige-oota.jpg", title: "Obbattu-026 1", author: "Mallikarjuna.shan", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/w/index.php?curid=40861055" },
    { file: "gallery-3.jpg", title: "Masala Dosa as served in Tamil Nadu,India", author: "KARTY JazZ", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/w/index.php?curid=36997950" },
  ],
};
