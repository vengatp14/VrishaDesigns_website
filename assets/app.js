/* ---sroll --- */
// Active nav on scroll (desktop + mobile)
  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav a");

  function setActiveLink(id){
    navLinks.forEach(l=>{
      l.classList.toggle("active", l.getAttribute("href") === "#"+id);
    });
    mobileLinks.forEach(l=>{
      l.classList.toggle("active", l.getAttribute("href") === "#"+id);
    });
  }

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        setActiveLink(entry.target.id);
      }
    });
  },{threshold:0.4});

  sections.forEach(sec=>observer.observe(sec));

  // Highlight active nav link based on current page filename (desktop + mobile)
  (function setActiveByPage(){
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const isIndex = page === '' || page === 'index.html';
    // Default: mark home active on index page; otherwise match filename
    navLinks.forEach(l=>{
      const href = l.getAttribute('href').split('/').pop() || 'index.html';
      l.classList.toggle('active', (isIndex && href === 'index.html') || (!isIndex && href === page));
    });
    mobileLinks.forEach(l=>{
      const href = l.getAttribute('href').split('/').pop() || 'index.html';
      l.classList.toggle('active', (isIndex && href === 'index.html') || (!isIndex && href === page));
    });
  })();

  // Current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

// //hero slider
// const sliders = document.querySelectorAll('.hero-slider');

// sliders.forEach(slider => {
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//   });

//   slider.addEventListener('mouseleave', () => isDown = false);
//   slider.addEventListener('mouseup', () => isDown = false);

//   slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2;
//     slider.scrollLeft = scrollLeft - walk;
//   });
// });


// Touch events for mobile
slider.addEventListener('touchstart', e => startX = e.touches[0].pageX - slider.offsetLeft);
slider.addEventListener('touchmove', e => {
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft -= walk;
});


/* ---Project card ---*/
  // AOS Animation
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });

  // Filter Functionality
  document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {

    // Active button
    document.querySelectorAll('.filter-btn')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const cols = document.querySelectorAll('.project-col');

    cols.forEach((col, index) => {
      const card = col.querySelector('.project-card');
      const match =
        filter === 'all' || card.classList.contains(filter);

      if (match) {
        // SHOW
        col.classList.remove('hidden');
        col.style.display = 'block';

        card.style.opacity = '0';
        card.style.transform = 'scale(0.95) translateY(20px)';

        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
        }, index * 80);

      } else {
        // HIDE with animation
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95) translateY(20px)';

        setTimeout(() => {
          col.classList.add('hidden'); 
        }, 300);
      }
    });
  });
});

  // Project Modal Data
  const projectsData = {
    project1: {
      title: "Vrisha Heights Apartments",
      status: "Completed",
      location: "K.K. Nagar, Plot No.25B, 2nd Floor PKM Nagar, Bharathipuram 21st cross street, Just opposite to Shri Hari Hospital, Karuppayurani, Madurai, Tamil Nadu 625020",
      size: "45,000 sq.ft",
      dates: "Jan 2023 - Dec 2024",
      description: "Premium residential apartment complex featuring 48 units of 2BHK and 3BHK configurations. Modern architecture with earthquake-resistant RCC structure, rainwater harvesting system, solar power integration, and 24/7 security surveillance. Located in fast-developing K.K. Nagar with excellent connectivity to city center and IT corridor.",
      gallery: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
        "https://images.pexels.com/photos/1128717/pexels-photo-1128717.jpeg",
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      ],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d78.131!3d9.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsA1NScxNS4zIiBOIDc4wrA3JzU2LjQiIEU!5e0!3m2!1sen!2sin!4v1690000000000"
    },
    project2: {
      title: "City Square Commercial Complex",
      status: "Ongoing",
      location: "Anna Nagar, Plot No.25B, 2nd Floor PKM Nagar, Bharathipuram 21st cross street, Just opposite to Shri Hari Hospital, Karuppayurani, Madurai, Tamil Nadu 625020", 
      size: "65,000 sq.ft",
      dates: "Mar 2025 - Sep 2026",
      description: "Ground + 4 floors mixed-use commercial development featuring ground floor retail, upper floors premium office spaces. High-visibility corner plot with 150+ parking capacity, passenger lifts, fire safety compliance, and modern glass facade design.",
      gallery: [
        "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
        "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
      ],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d78.135!3d9.928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1690000000000"
    }
    // Add more projects...
  };

  // Project Card Click -> Modal
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.dataset.modal;
      const project = projectsData[modalId];
      if (project) {
        // Update title and status
        document.getElementById('projectTitle').textContent = project.title;
        document.getElementById('projectStatus').innerHTML = 
          `<i class="bi bi-check-circle"></i> ${project.status} Project`;
        
        // Update meta
        document.getElementById('projectMeta').innerHTML = `
          <div class="meta-item">
            <span class="meta-value">${project.size}</span>
            <span class="meta-label">Total Area</span>
          </div>
          <div class="meta-item">
            <span class="meta-value">${project.location}</span>
            <span class="meta-label">Location</span>
          </div>
          <div class="meta-item">
            <span class="meta-value">${project.dates}</span>
            <span class="meta-label">Timeline</span>
          </div>
        `;
        
        // Update description
        document.getElementById('projectDescription').innerHTML = 
          `<p class="lead mb-4">${project.description}</p>`;
        
        // Update gallery
        const gallery = document.getElementById('projectGallery');
        gallery.innerHTML = project.gallery.map(img => `
          <div class="gallery-item" onclick="openLightbox('${img}')">
            <img src="${img}" alt="${project.title}">
            <div class="gallery-overlay">
              <i class="bi bi-zoom-in gallery-icon"></i>
            </div>
          </div>
        `).join('');
        
        // Update map
        document.getElementById('projectMap').innerHTML = 
          `<iframe src="${project.map}" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        
        // Show modal
        new bootstrap.Modal(document.getElementById('projectModal')).show();
      }
    });
  });

  // Lightbox functionality
  window.openLightbox = function(src) {
    const lightbox = document.createElement('div');
    lightbox.innerHTML = `
      <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;">
        <span onclick="this.parentElement.remove()" style="position:absolute;top:30px;right:40px;color:#fff;font-size:3rem;cursor:pointer;z-index:1;">×</span>
        <img src="${src}" style="max-width:90vw;max-height:90vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);" alt="Project Image">
      </div>
    `;
    document.body.appendChild(lightbox.firstElementChild);
  };

/*---service---*/
// AOS Init
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });

  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });

/*--form submit--*/
// AOS Init
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Form Submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="bi bi-check-circle-fill me-2 text-success"></i>Thank you!';
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        document.getElementById('contactForm').reset();
        // Scroll to top
        document.querySelector('.contact-hero').scrollIntoView({behavior: 'smooth'});
      }, 2000);
    }, 1500);
  });

  // WhatsApp Integration
  document.querySelectorAll('[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      const message = encodeURIComponent('Hi, I\'m interested in real estate/construction services. Can we discuss my project requirements?');
      link.href += `?text=${message}`;
    });
  });

