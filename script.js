// Halalan Thayyiban - Functional Scripts

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 3. Catalog Filtering (Specific to katalog.html)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    if (filterBtns.length > 0 && menuCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.textContent.trim().toLowerCase();

                menuCards.forEach(card => {
                    const category = card.getAttribute('data-category')?.toLowerCase() || 'semua';
                    
                    if (filterValue === 'semua' || category === filterValue) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 4. Booking / Order Simulation
    const orderBtns = document.querySelectorAll('.btn-order, .btn-primary, .btn-gold');
    orderBtns.forEach(btn => {
        if (btn.tagName === 'A' && btn.getAttribute('href') === '#') {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Terima kasih! Pesanan Anda sedang diproses. Kami akan segera menghubungi Anda melalui WhatsApp.');
            });
        }
    });

    // 5. Dashboard Tab Simulation
    const sideMenuLinks = document.querySelectorAll('.side-menu a');
    const mainContentHeader = document.querySelector('.main-content h1');
    const recentOrdersSection = document.querySelector('.recent-orders');
    const dashCardsSection = document.querySelector('.dash-cards');

    if (sideMenuLinks.length > 0) {
        sideMenuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href') === '#') {
                    e.preventDefault();
                    const tabName = link.textContent.trim();
                    
                    // Only run if not returning to overview via link
                    if (tabName !== 'Ikhtisar' && tabName !== 'Kembali ke Web') {
                         sideMenuLinks.forEach(l => l.classList.remove('active'));
                         link.classList.add('active');
                         if (mainContentHeader) mainContentHeader.textContent = `Menu: ${tabName}`;
                         
                         if (dashCardsSection) dashCardsSection.style.display = 'none';
                         if (recentOrdersSection) recentOrdersSection.innerHTML = `
                             <div style="text-align: center; padding: 5rem;">
                                 <i class="fas fa-tools" style="font-size: 4rem; color: #10b981; margin-bottom: 2rem;"></i>
                                 <h3 style="margin-bottom: 1rem;">Halaman ${tabName} Sedang Dikembangkan</h3>
                                 <p style="color: #64748b;">Fitur manajemen ${tabName.toLowerCase()} akan segera hadir untuk memudahkan bisnis Anda.</p>
                                 <button class="btn-primary" style="margin-top: 2rem;" onclick="location.reload()">Kembali ke Ikhtisar</button>
                             </div>
                         `;
                    }
                }
            });
        });
    }
    // 6. Education Article Modal
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-modal');
    const readMoreBtns = document.querySelectorAll('.read-more');

    const articles = {
        '1': {
            title: 'Perbedaan Antara Halal dan Thayyib',
            img: 'https://placehold.co/800x500/044e3b/ffffff?text=Halal+and+Thayyib',
            content: `
                <p>Konsep <strong>Halalan Thayyiban</strong> merupakan satu kesatuan yang tidak dapat dipisahkan dalam syariat Islam mengenai makanan. Halal merujuk pada keabsahan suatu zat dan cara perolehannya menurut hukum Islam, sementara Thayyib merujuk pada kualitas, kesehatan, dan keamanan makanan tersebut.</p>
                <p>Makanan yang Halal namun tidak Thayyib bisa jadi adalah makanan yang diperbolehkan secara hukum (seperti daging sapi) namun diolah dengan cara yang tidak higienis atau sudah kedaluwarsa sehingga membahayakan tubuh.</p>
                <p>Sebaliknya, makanan yang Thayyib namun tidak Halal adalah makanan yang bergizi tinggi dan bersih (seperti daging babi yang diproses di laboratorium canggih) namun tetap dilarang oleh syariat. Islam mewajibkan umatnya untuk mengonsumsi makanan yang memenuhi kedua kriteria tersebut agar mendapatkan keberkahan dan kesehatan lahir batin.</p>
            `
        },
        '2': {
            title: 'Menu Halal untuk Generasi Modern',
            img: 'https://placehold.co/800x500/044e3b/ffffff?text=Halal+Lifestyle',
            content: `
                <p>Di era globalisasi, makanan halal telah berevolusi menjadi sebuah gaya hidup atau <em>lifestyle</em>. Generasi modern saat ini tidak hanya mencari rasa yang lezat, tetapi juga kisah di balik makanan tersebut dan bagaimana komitmen produsen terhadap etika serta kebersihan.</p>
                <p>Industri halal kini mencakup inovasi produk mulai dari Korean Food halal hingga Western Cuisine yang disesuaikan dengan prinsip syariah tanpa mengurangi autentisitas rasanya.</p>
                <p>Kami terus berinovasi dalam mengemas hidangan tradisional Indonesia dengan presentasi modern agar tetap relevan dan dibanggakan oleh generasi muda Muslim saat ini.</p>
            `
        },
        'latar-belakang': {
            title: 'Latar Belakang: Halalan Thayyiban di Era Digital',
            img: 'https://placehold.co/800x500/044e3b/ffffff?text=Academic+Background',
            content: `
                <p>Dalam ajaran Islam, konsumsi makanan tidak hanya sekadar untuk memenuhi kebutuhan biologis, melainkan juga merupakan bentuk ketaatan ibadah kepada Allah SWT. Al-Qur’an secara tegas memerintahkan seluruh umat manusia untuk mengonsumsi makanan yang halal dan thayyib (baik), sebagaimana termaktub dalam <strong>QS. Al-Baqarah ayat 168</strong>.</p>
                <p>Seiring dengan meningkatnya kesadaran beragama dan tren gaya hidup halal (halal lifestyle), permintaan masyarakat terhadap layanan kuliner yang terjamin kehalalannya semakin meningkat drastis. Urgensi ini juga diperkuat oleh kebijakan pemerintah melalui <strong>Undang-Undang Nomor 33 Tahun 2014 tentang Jaminan Produk Halal (JPH)</strong>. Sistem informasi manajemen dan e-katalog berbasis web ini hadir sebagai solusi strategis.</p>
                <p>Teknologi informasi bukan sekadar alat bisnis, melainkan <strong>Wasilah (sarana)</strong> untuk menjaga amanah dan kejujuran dalam berniaga, memastikan rekam jejak (traceability) sertifikasi halal dari setiap bahan baku yang digunakan.</p>
            `
        }
    };

    if (readMoreBtns.length > 0 && modal) {
        readMoreBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const id = btn.getAttribute('data-article');
                const article = articles[id];

                if (article) {
                    modalBody.innerHTML = `
                        <h2>${article.title}</h2>
                        <img src="${article.img}" alt="${article.title}">
                        ${article.content}
                    `;
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; 
                }
            });
        });

        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Animation helper
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 2rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            border-top: 1px solid #eee;
        }
        .nav-links.active a {
            color: #1a202c !important;
            padding: 1rem 0;
        }
    }
`;
document.head.appendChild(style);
