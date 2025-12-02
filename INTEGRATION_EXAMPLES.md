# Portfolio Integration Examples

Complete working examples for each section of your portfolio with animations applied.

---

## 1. Hero Section (Home)

```html
<section id="home" class="min-h-screen flex items-center justify-center pt-20">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center justify-between">
      
      <!-- Left: Text Content with Parallax -->
      <div class="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 reveal-left" data-parallax="true">
        <h1 class="text-4xl lg:text-6xl font-bold mb-4">
          Hey, I'm <span class="gradient-text">Avadh Radadiya</span>
        </h1>
        
        <div class="text-xl lg:text-2xl text-gray-400 mb-6 reveal-quick">
          <span id="typing-text" class="typing-animation"></span>
        </div>
        
        <p class="text-lg text-gray-300 mb-8 max-w-2xl reveal-fade">
          I'm Aspiring Cybersecurity with a focus on practical, hands-on skills...
        </p>
        
        <!-- CTA Buttons with stagger -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal-stagger">
          <a href="#contact" class="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition">
            Get In Touch
          </a>
          <a href="#projects" class="border border-green-500 hover:bg-green-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition">
            View Projects
          </a>
        </div>
        
        <!-- Social Links with stagger -->
        <div class="flex justify-center lg:justify-start space-x-6 mt-8 reveal-stagger">
          <a href="https://github.com" class="text-2xl hover:text-green-400 transition reveal-quick">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" class="text-2xl hover:text-green-400 transition reveal-quick">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:email@example.com" class="text-2xl hover:text-green-400 transition reveal-quick">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <!-- Right: Profile Card with Scale Animation -->
      <div class="lg:w-1/2 reveal-right">
        <div class="profile-card-container reveal-scale">
          <!-- Your existing profile card here -->
          <div class="cyber-card">
            <!-- Card content -->
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

**Key Animations:**
- `.reveal-left` on hero text with `data-parallax`
- `.reveal-quick` for typing text
- `.reveal-fade` for description
- `.reveal-stagger` for buttons and social links
- `.reveal-right` for profile card
- `.reveal-scale` for card emphasis

---

## 2. About Section

```html
<section id="about" class="py-20 section-bg reveal-element">
  <div class="container mx-auto px-4">
    
    <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text reveal-element">
      About Me
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Left Column: Text -->
      <div class="reveal-left">
        <h3 class="text-2xl font-semibold mb-6 text-green-400">
          Professional Summary
        </h3>

        <!-- Staggered content blocks -->
        <div class="space-y-6 reveal-stagger">
          <div class="card-hover p-6 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              I'm actively building my path in cybersecurity...
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card-hover p-6 rounded-lg reveal-scale">
              <h4 class="text-lg font-semibold text-green-400 mb-3">
                Areas of Interest
              </h4>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-user-secret text-green-400 mr-2"></i>Red Teaming</li>
                <li><i class="fas fa-bug text-green-400 mr-2"></i>Penetration Testing</li>
              </ul>
            </div>

            <div class="card-hover p-6 rounded-lg reveal-scale">
              <h4 class="text-lg font-semibold text-green-400 mb-3">
                Philosophy
              </h4>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-lightbulb text-green-400 mr-2"></i>Hack to learn</li>
                <li><i class="fas fa-code text-green-400 mr-2"></i>Every exploit teaches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Education & Certs -->
      <div class="reveal-right">
        <h3 class="text-2xl font-semibold mb-6 text-green-400">
          Education & Certifications
        </h3>

        <!-- Staggered education items -->
        <div class="space-y-4 reveal-stagger">
          <div class="p-4 card-hover rounded-lg reveal-quick">
            <h4 class="font-semibold">Master in Cybersecurity</h4>
            <p class="text-gray-400">Pursuing (2025-2027)</p>
          </div>

          <div class="p-4 card-hover rounded-lg reveal-quick">
            <h4 class="font-semibold">Bachelor of Computer Application</h4>
            <p class="text-gray-400">VNSG University | April 2025</p>
          </div>

          <div class="p-4 card-hover rounded-lg reveal-quick">
            <h4 class="font-semibold">Higher Secondary - Commerce</h4>
            <p class="text-gray-400">SMT L.P.D Patel School | March 2023</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

**Key Animations:**
- `.reveal-element` for section container
- `.reveal-element` for heading
- `.reveal-left` and `.reveal-right` for two-column layout
- `.reveal-stagger` for content blocks
- `.reveal-scale` for card emphasis
- `.reveal-quick` for education items

---

## 3. Skills Section

```html
<section id="skills" class="py-20 reveal-element">
  <div class="container mx-auto px-4">
    
    <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text reveal-element">
      Technical Skills
    </h2>

    <!-- Skills grid with stagger effect -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-stagger">
      
      <!-- Programming Languages -->
      <div class="card-hover rounded-lg p-6 reveal-scale">
        <h3 class="text-xl font-semibold mb-6 text-green-400 flex items-center">
          <i class="fas fa-code mr-3"></i>Programming & Scripting
        </h3>
        
        <div class="grid grid-cols-3 gap-6 justify-items-center">
          <div class="text-center group">
            <div class="lang-icon text-6xl mb-2">
              <i class="fab fa-js"></i>
            </div>
            <span class="text-sm text-gray-400 group-hover:text-orange-400 transition">
              JavaScript
            </span>
          </div>
          
          <div class="text-center group">
            <div class="lang-icon text-6xl mb-2">
              <i class="fab fa-python"></i>
            </div>
            <span class="text-sm text-gray-400 group-hover:text-yellow-400 transition">
              Python
            </span>
          </div>
          
          <!-- More languages... -->
        </div>
      </div>

      <!-- Security Tools -->
      <div class="card-hover rounded-lg p-6 reveal-scale">
        <h3 class="text-xl font-semibold mb-6 text-green-400 flex items-center">
          <i class="fas fa-shield-alt mr-3"></i>Security Tools
        </h3>
        
        <!-- Grid of tools with stagger -->
        <div class="grid grid-cols-2 gap-3 reveal-stagger">
          <div class="bg-gray-800/50 p-3 rounded text-center hover:bg-cyan-900/50 transition reveal-quick">
            Metasploit
          </div>
          <div class="bg-gray-800/50 p-3 rounded text-center hover:bg-cyan-900/50 transition reveal-quick">
            Burp Suite
          </div>
          <!-- More tools... -->
        </div>
      </div>

      <!-- Development Tools -->
      <div class="card-hover rounded-lg p-6 reveal-scale">
        <!-- Similar structure -->
      </div>

    </div>
  </div>
</section>
```

**Key Animations:**
- `.reveal-element` for section and heading
- `.reveal-stagger` for skill category cards
- `.reveal-scale` for individual skill boxes
- `.reveal-quick` for tool items

---

## 4. Projects Section

```html
<section id="projects" class="py-20 reveal-element">
  <div class="container mx-auto px-4">
    
    <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text reveal-element">
      Projects
    </h2>

    <!-- Project cards with stagger effect -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">

      <article class="card-hover rounded-lg p-6 flex flex-col bg-gray-900/70 reveal-scale">
        <h3 class="text-xl font-bold mb-2 text-green-400 flex items-center">
          <i class="fas fa-network-wired mr-2"></i>Multi-floor Enterprise Network
        </h3>
        
        <div class="text-sm italic text-gray-400 mb-2">
          Enterprise multi-floor network design in Cisco Packet Tracer.
        </div>
        
        <div class="text-gray-300 text-sm mb-4 flex-grow">
          <li>VLAN segmentation per department</li>
          <li>Layer-3 inter-VLAN routing</li>
          <li>OSPF dynamic routing</li>
        </div>
        
        <div class="mt-auto flex gap-3 items-center">
          <a href="#" class="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded font-semibold transition">
            <i class="fab fa-github mr-2"></i>GitHub
          </a>
          <span class="ml-auto text-green-400 text-2xl">
            <i class="fas fa-network-wired"></i>
          </span>
        </div>
      </article>

      <!-- More project cards... -->

    </div>
  </div>
</section>
```

**Key Animations:**
- `.reveal-element` for section container and heading
- `.reveal-stagger` for project grid
- `.reveal-scale` for individual project cards

---

## 5. Contact Section

```html
<section id="contact" class="py-20 reveal-element">
  <div class="container mx-auto px-4">
    
    <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text reveal-element">
      Get In Touch
    </h2>

    <!-- Contact form with animation -->
    <div class="max-w-2xl mx-auto reveal-scale">
      <form 
        id="contact-form" 
        action="https://formspree.io/f/YOUR_ID" 
        method="post"
        class="terminal-form p-8 rounded-xl shadow-2xl bg-black/70 border border-cyan-700"
      >

        <!-- Staggered form fields -->
        <div class="reveal-stagger">
          <div class="terminal-field reveal-quick">
            <label class="terminal-label">
              <span class="dollar">$</span>
              <span class="var">NAME</span>
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Enter full name..."
              class="terminal-input-field"
            />
          </div>

          <div class="terminal-field reveal-quick">
            <label class="terminal-label">
              <span class="dollar">$</span>
              <span class="var">EMAIL</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="Enter email address..."
              class="terminal-input-field"
            />
          </div>

          <div class="terminal-field reveal-quick">
            <label class="terminal-label">
              <span class="dollar">$</span>
              <span class="var">MESSAGE</span>
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              placeholder="Enter your message..."
              class="terminal-input-field terminal-textarea"
            ></textarea>
          </div>
        </div>

        <div class="mt-6 text-center reveal-quick">
          <button 
            type="submit" 
            id="submitBtn"
            class="primary-cta inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            <span>Send Message</span>
            <i class="fa fa-paper-plane"></i>
          </button>
        </div>

        <div id="statusMessage" class="mt-4 text-center" style="display: none;"></div>
      </form>
    </div>
  </div>
</section>
```

**Key Animations:**
- `.reveal-element` for section container
- `.reveal-element` for heading
- `.reveal-scale` for form container
- `.reveal-stagger` for form fields
- `.reveal-quick` for individual inputs and submit button

---

## CSS to Add to Your Stylesheet

```css
/* Ensure smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Optional: Add fade-in for page load */
@media (prefers-reduced-motion: no-preference) {
  body {
    animation: fadeIn 0.6s ease-out;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Optimize for different device sizes */
@media (max-width: 768px) {
  /* Faster animations on mobile */
  .reveal-element,
  .reveal-left,
  .reveal-right,
  .reveal-scale {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  /* Simplify parallax on mobile */
  [data-parallax] {
    transform: none !important;
  }
}
```

---

## Notes

- Replace `#YOUR_ID` with your actual Formspree ID
- Adjust reveal selectors and timing based on your needs
- Test on multiple devices to ensure smooth performance
- Use DevTools to monitor animations and performance

---

See `SCROLL_ANIMATIONS_GUIDE.md` for detailed documentation.
