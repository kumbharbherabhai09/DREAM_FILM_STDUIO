// Dream Film Studio - Main Application Scripts
// Dinesh Chaudhary (+91 86192 64794) & Mahendar Prajapati (+91 63776 95431)
// Official Instagram: https://www.instagram.com/dream.film.studio

const STUDIO_PHONE_1 = "918619264794"; // Dinesh Chaudhary
const STUDIO_PHONE_2 = "916377695431"; // Mahendar Prajapati

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initBeforeAfterSlider();
    initPortfolio();
    initPriceEstimator();
    initFAQ();
    initContactForm();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavigation() {
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", () => {
            const isHidden = mobileMenu.classList.contains("hidden");
            if (isHidden) {
                mobileMenu.classList.remove("hidden");
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");
            } else {
                mobileMenu.classList.add("hidden");
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            });
        });
    }

    // Header shadow on scroll
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("shadow-lg", "shadow-black/60");
        } else {
            header.classList.remove("shadow-lg", "shadow-black/60");
        }
    });
}

/* ==========================================================================
   2. BEFORE & AFTER INTERACTIVE SLIDER
   ========================================================================== */
const beforeAfterSamples = {
    portrait: {
        beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=20&sat=-40&con=10",
        afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=90",
        caption: "Showing: High-End Beauty Skin Retouch & Vibrant Color Grading"
    },
    restoration: {
        beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=20&sat=-100&con=-20&blur=2",
        afterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=90",
        caption: "Showing: 40-Year-Old Photo Scratch Removal, Facial Re-Sharpening & Natural Colorization"
    },
    grading: {
        beforeImg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=30&sat=-60&con=-10",
        afterImg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=90",
        caption: "Showing: Flat Raw Log Profile vs. Cinematic Teal & Orange Film Emulation"
    }
};

function initBeforeAfterSlider() {
    const slider = document.getElementById("ba-slider");
    const beforeWrap = document.getElementById("ba-before-wrap");
    const handle = document.getElementById("ba-handle");
    const beforeImg = document.getElementById("ba-before-img");
    const afterImg = document.getElementById("ba-after-img");
    const caption = document.getElementById("ba-caption");
    const tabButtons = document.querySelectorAll(".ba-tab-btn");

    if (!slider || !beforeWrap || !handle) return;

    function updateSlider(val) {
        beforeWrap.style.width = `${val}%`;
        handle.style.left = `${val}%`;
    }

    slider.addEventListener("input", (e) => {
        updateSlider(e.target.value);
    });

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const sampleKey = btn.getAttribute("data-sample");
            const data = beforeAfterSamples[sampleKey];
            if (!data) return;

            tabButtons.forEach(b => {
                b.className = "ba-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-studio-card border border-studio-cardBorder text-slate-300 hover:text-white hover:border-orange-400/50";
            });
            btn.className = "ba-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-md shadow-orange-500/20";

            beforeImg.src = data.beforeImg;
            afterImg.src = data.afterImg;
            caption.textContent = data.caption;

            slider.value = 50;
            updateSlider(50);
        });
    });
}

/* ==========================================================================
   3. PORTFOLIO GRID & LIGHTBOX MODAL
   ========================================================================== */
function initPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    const filterBtns = document.querySelectorAll(".portfolio-filter-btn");

    if (!grid) return;

    function renderPortfolio(category = "all") {
        grid.innerHTML = "";

        const filtered = category === "all" 
            ? portfolioData 
            : portfolioData.filter(item => item.category === category);

        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "portfolio-card group bg-studio-card border border-studio-cardBorder hover:border-orange-500/60 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between";
            
            // Badge color
            let badgeBg = "bg-orange-500/20 text-orange-400 border border-orange-500/30";
            if (item.category === "wedding-card") badgeBg = "bg-amber-500/20 text-amber-400 border border-amber-500/30";
            if (item.category === "video") badgeBg = "bg-purple-500/20 text-purple-400 border border-purple-500/30";
            if (item.category === "graphics") badgeBg = "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30";
            if (item.category === "album") badgeBg = "bg-pink-500/20 text-pink-400 border border-pink-500/30";

            card.innerHTML = `
                <div class="relative overflow-hidden aspect-[16/10]">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    
                    <span class="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md ${badgeBg}">
                        ${item.badge}
                    </span>

                    ${item.category === 'video' ? `
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all">
                                <i class="fa-solid fa-play ml-0.5 text-sm"></i>
                            </div>
                        </div>
                    ` : ''}

                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                        <span class="truncate font-semibold">${item.client}</span>
                        <span class="text-[10px] text-slate-400 shrink-0"><i class="fa-solid fa-clock mr-1"></i>${item.delivery}</span>
                    </div>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <h4 class="font-heading font-bold text-white text-base group-hover:text-orange-400 transition-colors line-clamp-1 mb-2">
                            ${item.title}
                        </h4>
                        <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                            ${item.description}
                        </p>
                    </div>

                    <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                        <div class="flex items-center gap-1.5 text-slate-500 text-[11px] overflow-hidden">
                            ${item.software.slice(0, 2).map(s => `<span class="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">${s}</span>`).join('')}
                        </div>
                        <span class="text-orange-400 font-bold flex items-center gap-1 text-[11px] shrink-0">
                            Details <i class="fa-solid fa-arrow-right text-[9px]"></i>
                        </span>
                    </div>
                </div>
            `;

            card.addEventListener("click", () => openLightbox(item));
            grid.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");

            filterBtns.forEach(b => {
                b.className = "portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-studio-card border border-studio-cardBorder text-slate-300 hover:text-white hover:border-orange-400/50";
            });
            btn.className = "portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-lg shadow-orange-500/20";

            renderPortfolio(filter);
        });
    });

    renderPortfolio("all");
    initLightboxModal();
}

function initLightboxModal() {
    const modal = document.getElementById("lightbox-modal");
    const closeBtn = document.getElementById("lightbox-close");
    const video = document.getElementById("lightbox-video");

    if (!modal || !closeBtn) return;

    function closeModal() {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.style.overflow = "auto";
        if (video) {
            video.pause();
            video.src = "";
        }
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });
}

function openLightbox(item) {
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img");
    const video = document.getElementById("lightbox-video");
    const cat = document.getElementById("lightbox-cat");
    const title = document.getElementById("lightbox-title");
    const desc = document.getElementById("lightbox-desc");
    const meta = document.getElementById("lightbox-meta");
    const whatsappLink = document.getElementById("lightbox-whatsapp-link");
    const videoBadge = document.getElementById("lightbox-video-badge");

    if (!modal) return;

    cat.textContent = item.badge;
    title.textContent = item.title;
    desc.textContent = item.description;

    if (item.category === "video" && item.videoSrc && video) {
        if (img) img.classList.add("hidden");
        if (videoBadge) videoBadge.classList.add("hidden");
        video.classList.remove("hidden");
        video.src = item.videoSrc;
        video.load();
        video.play().catch(() => {});
    } else {
        if (video) {
            video.pause();
            video.src = "";
            video.classList.add("hidden");
        }
        if (img) {
            img.src = item.image;
            img.classList.remove("hidden");
        }
        if (videoBadge) {
            if (item.category === "video") {
                videoBadge.classList.remove("hidden");
                videoBadge.classList.add("flex");
            } else {
                videoBadge.classList.add("hidden");
                videoBadge.classList.remove("flex");
            }
        }
    }

    meta.innerHTML = `
        <div class="flex justify-between py-1 border-b border-slate-800/60">
            <span class="text-slate-500">Project / Client:</span>
            <span class="font-semibold text-white">${item.client}</span>
        </div>
        <div class="flex justify-between py-1 border-b border-slate-800/60">
            <span class="text-slate-500">Turnaround Time:</span>
            <span class="font-semibold text-orange-400">${item.delivery}</span>
        </div>
        <div class="flex justify-between py-1">
            <span class="text-slate-500">Softwares:</span>
            <span class="font-semibold text-slate-300">${item.software.join(", ")}</span>
        </div>
    `;

    const encodedText = encodeURIComponent(`Hi Dinesh & Mahendar! I saw your work "${item.title}" (${item.badge}) on Dream Film Studio website. I want to inquire about rates and turnaround time for a similar project.`);
    whatsappLink.href = `https://wa.me/${STUDIO_PHONE_1}?text=${encodedText}`;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
}

/* ==========================================================================
   4. LIVE PRICE ESTIMATOR & INSTANT QUOTE GENERATOR
   ========================================================================== */
function initPriceEstimator() {
    const categoryButtons = document.querySelectorAll(".calc-cat-btn");
    const tierButtons = document.querySelectorAll(".calc-tier-btn");
    const qtySlider = document.getElementById("calc-qty-slider");
    const qtyDisplay = document.getElementById("calc-qty-display");
    const addonExpress = document.getElementById("addon-express");
    const addonSource = document.getElementById("addon-source");
    const totalPriceEl = document.getElementById("calc-total-price");
    const breakdownTextEl = document.getElementById("calc-breakdown-text");
    const whatsappBtn = document.getElementById("calc-whatsapp-btn");

    if (!qtySlider || !totalPriceEl) return;

    const rates = {
        video: {
            name: "Professional Video Editing",
            basic: 349,
            standard: 699,
            premium: 1499,
            unit: "Video(s)"
        },
        "wedding-card": {
            name: "Wedding Card (Kankotri)",
            basic: 199,
            standard: 499,
            premium: 999,
            unit: "Design / Batch"
        },
        photo: {
            name: "Photoshop Retouching",
            basic: 99,
            standard: 199,
            premium: 499,
            unit: "Photo(s)"
        },
        album: {
            name: "Wedding Album (Canvera/Karizma)",
            basic: 1499,
            standard: 2999,
            premium: 5999,
            unit: "Album Sheet(s)"
        }
    };

    let selectedCat = "video";
    let selectedTier = "standard";

    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedCat = btn.getAttribute("data-cat");
            calculateEstimate();
        });
    });

    tierButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tierButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedTier = btn.getAttribute("data-tier");
            calculateEstimate();
        });
    });

    qtySlider.addEventListener("input", (e) => {
        const qty = e.target.value;
        const unit = rates[selectedCat].unit;
        qtyDisplay.textContent = `${qty} ${unit}`;
        calculateEstimate();
    });

    if (addonExpress) addonExpress.addEventListener("change", calculateEstimate);
    if (addonSource) addonSource.addEventListener("change", calculateEstimate);

    function calculateEstimate() {
        const catData = rates[selectedCat] || rates.video;
        const baseRate = catData[selectedTier];
        const qty = parseInt(qtySlider.value, 10);
        let total = baseRate * qty;

        let extrasList = [];
        if (addonExpress && addonExpress.checked) {
            total += 200;
            extrasList.push("Express 24h (+₹200)");
        }
        if (addonSource && addonSource.checked) {
            total += 350;
            extrasList.push("Source Files (+₹350)");
        }

        const tierName = selectedTier.charAt(0).toUpperCase() + selectedTier.slice(1);

        totalPriceEl.textContent = `₹${total.toLocaleString("en-IN")}`;
        breakdownTextEl.textContent = `${catData.name} • ${tierName} Tier • ${qty} ${catData.unit}`;

        let extrasMsg = extrasList.length > 0 ? extrasList.join(", ") : "None";
        let message = `Hello Dinesh & Mahendar! I generated an instant estimate on Dream Film Studio website:%0A%0A` +
                      `📌 *Service:* ${catData.name}%0A` +
                      `⭐ *Quality Tier:* ${tierName}%0A` +
                      `🔢 *Quantity:* ${qty} ${catData.unit}%0A` +
                      `⚡ *Extras:* ${extrasMsg}%0A` +
                      `💰 *Estimated Total:* ₹${total.toLocaleString("en-IN")}%0A%0A` +
                      `Please confirm my booking and how I can share the raw files/content.`;

        whatsappBtn.href = `https://wa.me/${STUDIO_PHONE_1}?text=${message}`;
    }

    calculateEstimate();
}

/* ==========================================================================
   5. FAQ ACCORDION (SAFEGUARD)
   ========================================================================== */
function initFAQ() {
    const faqCards = document.querySelectorAll(".faq-card");

    faqCards.forEach(card => {
        const toggleBtn = card.querySelector(".faq-toggle");
        const content = card.querySelector(".faq-content");
        const chevron = card.querySelector("i");

        if (toggleBtn && content) {
            toggleBtn.addEventListener("click", () => {
                const isOpen = !content.classList.contains("hidden");

                faqCards.forEach(other => {
                    other.querySelector(".faq-content").classList.add("hidden");
                    const icon = other.querySelector("i");
                    if (icon) icon.style.transform = "rotate(0deg)";
                });

                if (!isOpen) {
                    content.classList.remove("hidden");
                    if (chevron) chevron.style.transform = "rotate(180deg)";
                }
            });
        }
    });
}

/* ==========================================================================
   6. CONTACT FORM VIA WHATSAPP (DIRECT TO DINESH & MAHENDAR)
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const statusMsg = document.getElementById("form-status");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("form-name").value.trim();
        const phone = document.getElementById("form-phone").value.trim();
        const service = document.getElementById("form-service").value;
        const message = document.getElementById("form-message").value.trim();

        if (!name || !phone) {
            alert("Please provide your name and contact number.");
            return;
        }

        const formattedMsg = `*New Website Inquiry - Dream Film Studio*%0A%0A` +
                             `👤 *Name:* ${encodeURIComponent(name)}%0A` +
                             `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
                             `🎯 *Service Required:* ${encodeURIComponent(service)}%0A` +
                             `📝 *Project Details:* ${encodeURIComponent(message || 'No additional notes')}`;

        if (statusMsg) {
            statusMsg.classList.remove("hidden");
        }

        setTimeout(() => {
            window.open(`https://wa.me/${STUDIO_PHONE_1}?text=${formattedMsg}`, "_blank");
            form.reset();
            if (statusMsg) {
                setTimeout(() => statusMsg.classList.add("hidden"), 4000);
            }
        }, 600);
    });
}
