// Dream Film Studio - Official Portfolio Works Dataset
// Dinesh Chaudhary (+91 86192 64794) & Mahendar Prajapati (+91 63776 95431)

const portfolioData = [
    {
        id: "p1",
        category: "video",
        title: "Cinematic Royal Wedding Teaser",
        client: "Aman & Sneha Wedding Film",
        software: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        badge: "4K Teaser",
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-for-their-wedding-photos-41666-large.mp4",
        description: "Cinematic drone shots, slow-motion mangalsutra moment, and custom emotional audio layering with royal color grading by Dinesh Chaudhary.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        date: "Nov 2024",
        delivery: "48 Hours"
    },
    {
        id: "p2",
        category: "wedding-card",
        title: "Royal Velvet Gold Foil Wedding Card (Kankotri)",
        client: "Chaudhary & Patel Family",
        software: ["CorelDraw", "Photoshop CC", "Illustrator"],
        badge: "Wedding Card",
        description: "Traditional Sanskrit shloka typography, gold foil digital embossing, custom Ganesha icon, and matching digital WhatsApp video invite.",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
        date: "Oct 2024",
        delivery: "24-48 Hours"
    },
    {
        id: "p3",
        category: "retouch",
        title: "Bridal Skin Retouch & Tone Enhancement",
        client: "Studio Bridal Session",
        software: ["Photoshop CC", "Camera Raw"],
        badge: "Photoshop Edit",
        description: "Frequency separation skin retouching, jewellery shimmer enhancement, eye sparkle, and warm skin tone grading without losing skin texture.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        date: "Oct 2024",
        delivery: "Same Day"
    },
    {
        id: "p4",
        category: "video",
        title: "Commercial Brand Video & Beat Sync",
        client: "Commercial Brand Showcase",
        software: ["Premiere Pro", "CapCut Pro"],
        badge: "Commercial Video",
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-newlywed-couple-walking-in-a-forest-41668-large.mp4",
        description: "Dynamic sound effects (SFX), whip pan transitions, cinematic motion transitions, and bass sync cuts for @dream.film.studio.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
        date: "Nov 2024",
        delivery: "24 Hours"
    },
    {
        id: "p5",
        category: "wedding-card",
        title: "Luxury Floral Laser-Cut Invitation Card",
        client: "Royal Rajput Wedding",
        software: ["Illustrator", "Photoshop"],
        badge: "Wedding Card",
        description: "Laser cut royal gate fold design with pastel rose gold sheet, golden dori packaging, and printed RSVP inserts.",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
        date: "Nov 2024",
        delivery: "3 Days"
    },
    {
        id: "p6",
        category: "retouch",
        title: "40-Year-Old Damaged Photo Restoration",
        client: "Family Heirloom Portrait",
        software: ["Photoshop CC"],
        badge: "Restoration",
        description: "Removed deep tears, water stains, restored missing facial details using AI neural filters + manual brush reconstruction, and converted to natural color.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        date: "Sep 2024",
        delivery: "2 Days"
    },
    {
        id: "p7",
        category: "album",
        title: "Velvet Box Acrylic Wedding Album (Canvera Style)",
        client: "Vikram & Neha Wedding",
        software: ["Photoshop Album Designer"],
        badge: "Karizma Album",
        description: "40 sheets / 80 pages photobook with metallic feather-touch paper, seamless panorama spreads, and laser-engraved acrylic front glass.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        date: "Nov 2024",
        delivery: "5 Days"
    },
    {
        id: "p8",
        category: "graphics",
        title: "Grand Shop Opening Flex Banner (12x8 ft)",
        client: "Royal Jewellers",
        software: ["Photoshop CC", "CorelDraw"],
        badge: "Flex Banner",
        description: "High resolution 12x8 ft hoarding design with gold luxury gradient, sharp Hindi/English typography, and 300 DPI cmyk print proof.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
        date: "Oct 2024",
        delivery: "24 Hours"
    },
    {
        id: "p9",
        category: "video",
        title: "Commercial Cafe & Restaurant Promo Video",
        client: "The Urban Roast Cafe",
        software: ["Premiere Pro", "After Effects"],
        badge: "Commercial Ad",
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-bride-and-groom-holding-hands-41670-large.mp4",
        description: "Mouth-watering slow-mo food shots, speed ramps, customized 3D menu motion graphics, and background chill-hop music licensed for ads.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        date: "Oct 2024",
        delivery: "3 Days"
    },
    {
        id: "p10",
        category: "wedding-card",
        title: "Digital Animated WhatsApp Invitation Video",
        client: "Gaurav & Pooja",
        software: ["After Effects", "Premiere Pro"],
        badge: "Digital Invite",
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-groom-putting-the-wedding-ring-on-the-brides-finger-41671-large.mp4",
        description: "Instagram story format (9:16) animated wedding card with couple caricature, function timeline, map location link, and romantic music.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
        date: "Oct 2024",
        delivery: "24 Hours"
    },
    {
        id: "p11",
        category: "album",
        title: "Pre-Wedding Cinematic Photobook",
        client: "Rohan & Riya Pre-Shoot",
        software: ["Photoshop", "InDesign"],
        badge: "Photobook",
        description: "Magazine-style typography spreads, golden hour outdoor color scheme, and matte laminated pages.",
        image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
        date: "Nov 2024",
        delivery: "4 Days"
    },
    {
        id: "p12",
        category: "graphics",
        title: "Luxury Visiting Card & Brand Identity",
        client: "Apex Realty",
        software: ["Illustrator", "Photoshop"],
        badge: "Visiting Card",
        description: "Minimalist dark aesthetic business card with spot UV finish guidelines, QR code for digital contact save, and sleek modern typography.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
        date: "Aug 2024",
        delivery: "24 Hours"
    }
];
