(() => {
  'use strict';

  /* ========================================================================
     Data: Kryptonite Varieties & Character Dossiers
     ======================================================================== */

  const KRYPTONITE_DATA = {
    green: {
      name: 'Green Kryptonite',
      severity: 'Lethal Threat',
      effect:
        'The most common and dangerous variety. Its radiation rapidly drains stored solar energy, induces acute physical agony, and proves fatal to Kryptonians under prolonged exposure.'
    },
    red: {
      name: 'Red Kryptonite',
      severity: 'Unpredictable',
      effect:
        'Causes bizarre, temporary physical mutations or dramatic emotional shifts—such as lowering inhibitions or sparking reckless rage. Traditionally, each chunk affects a Kryptonian only once.'
    },
    blue: {
      name: 'Blue Kryptonite',
      severity: 'Bizarro Counter',
      effect:
        'Harmless to Superman in classic continuity—and in some interpretations even stabilizes or enhances his abilities—while acting as lethal Green Kryptonite toward imperfect duplicates like Bizarro.'
    },
    gold: {
      name: 'Gold Kryptonite',
      severity: 'Power Loss',
      effect:
        'Rare and feared across the cosmos: exposure disrupts Kryptonian cellular ability to process yellow sunlight, stripping away superpowers temporarily or even permanently.'
    },
    white: {
      name: 'White Kryptonite',
      severity: 'Botanical Hazard',
      effect:
        'Poses no direct physical threat to Kryptonians or humans, but destroys all plant life—terrestrial or extraterrestrial—within its radiation radius.'
    },
    black: {
      name: 'Black Kryptonite',
      severity: 'Identity Split',
      effect:
        'Fractures a Kryptonian’s psyche and body into two distinct beings—separating Clark Kent’s compassionate humanity from a cold, unrestrained Kryptonian counterpart.'
    }
  };

  const DOSSIERS = {
    'lois-lane': {
      name: 'Lois Lane',
      alignment: 'Ally',
      alignmentKey: 'ally',
      role: 'Pulitzer-Winning Journalist · Daily Planet',
      debut: 'Action Comics #1 (June 1938)',
      origin: 'Metropolis (Army brat turned investigative star)',
      traits: 'Fearless investigative instinct, sharp wit, unshakeable moral courage',
      story: 'Superman: Up in the Sky / Action Comics #1000',
      bio: 'Debuting alongside Superman in 1938, Lois Lane is the Daily Planet’s premier investigative reporter. Long before learning Clark Kent’s secret, she challenged corrupt moguls and alien threats head-on—serving as Clark’s equal partner, confidante, and wife.'
    },
    'jimmy-olsen': {
      name: 'Jimmy Olsen',
      alignment: 'Ally',
      alignmentKey: 'ally',
      role: 'Photojournalist · Superman’s Pal',
      debut: 'Action Comics #6 (1938) / Radio (1940)',
      origin: 'Metropolis · Daily Planet',
      traits: 'Resourceful photographer, boundless optimism, ultrasonic signal watch',
      story: 'Superman’s Pal Jimmy Olsen (Matt Fraction & Steve Lieber)',
      bio: 'Starting as a teenage copyboy and rising to award-winning photojournalist, Jimmy Olsen represents the everyday heart of Metropolis. Armed with a high-frequency signal watch gifted by Superman, Jimmy regularly lands in wild sci-fi misadventures—and always gets the front-page shot.'
    },
    kents: {
      name: 'Martha & Jonathan Kent',
      alignment: 'Ally',
      alignmentKey: 'ally',
      role: 'Adoptive Parents · Smallville, Kansas',
      debut: 'Superman #1 (1939)',
      origin: 'Kent Family Farm, Smallville, Kansas',
      traits: 'Grounded wisdom, quiet courage, unconditional kindness',
      story: 'Superman for All Seasons (Jeph Loeb & Tim Sale)',
      bio: 'When a Kryptonian rocket landed in their Kansas field, Jonathan and Martha Kent chose love over fear. They raised Kal-El to see his powers not as dominance over humanity, but as a calling to help neighbors—making them the true architects of Superman’s character.'
    },
    supergirl: {
      name: 'Supergirl (Kara Zor-El)',
      alignment: 'Ally',
      alignmentKey: 'ally',
      role: 'Kryptonian Cousin · Maiden of Might',
      debut: 'Action Comics #252 (May 1959)',
      origin: 'Argo City, Krypton → National City & Metropolis',
      traits: 'Full Kryptonian solar powers, living memory of Krypton, fierce resolve',
      story: 'Supergirl: Woman of Tomorrow (Tom King & Bilquis Evely)',
      bio: 'Sent from the surviving Kryptonian dome of Argo City to protect her infant cousin, Kara arrived on Earth decades later after her pod drifted off course. Remembering Krypton’s vibrant culture firsthand, she stands beside Superman as a powerhouse hero in her own right.'
    },
    'justice-league': {
      name: 'Justice League',
      alignment: 'Ally',
      alignmentKey: 'ally',
      role: 'Earth’s Premier Superhero Team · Watchtower',
      debut: 'The Brave and the Bold #28 (1960)',
      origin: 'Hall of Justice & Orbital Watchtower',
      traits: 'Combined tactical brilliance, cosmic reach, mutual trust across worlds',
      story: 'JLA: New World Order / Kingdom Come',
      bio: 'Uniting Earth’s greatest protectors—including Batman, Wonder Woman, The Flash, Green Lantern, Aquaman, and Martian Manhunter—the Justice League gives Superman peers who challenge his perspective and stand shoulder-to-shoulder against multiversal crises.'
    },
    'perry-white': {
      name: 'Perry White',
      alignment: 'Ally',
      alignmentKey: 'ally',
      role: 'Editor-in-Chief · Daily Planet',
      debut: 'The Adventures of Superman Radio (1940) / Superman #7',
      origin: 'Suicide Slum → Metropolis Daily Planet',
      traits: 'Relentless journalistic standards, gruff mentorship, civic devotion',
      story: 'Superman: Secret Identity / Action Comics',
      bio: 'A self-made newspaperman who climbed from copyboy to Editor-in-Chief, Perry White treats the Daily Planet as Metropolis’s conscience. Though quick to bark “Great Caesar’s Ghost!” at missed deadlines, he fiercely defends his reporters and the public’s right to know.'
    },
    'lex-luthor': {
      name: 'Lex Luthor',
      alignment: 'Villain',
      alignmentKey: 'villain',
      role: 'Genius Industrialist · LexCorp Founder',
      debut: 'Action Comics #23 (April 1940)',
      origin: 'Metropolis (LexCorp Tower)',
      traits: 'Supreme scientific intellect, Kryptonite warsuit, ruthless ambition',
      story: 'Lex Luthor: Man of Steel / All-Star Superman',
      bio: 'Possessing no innate superpowers, Alexander “Lex” Luthor relies on unmatched intellect, vast corporate power, and Kryptonite weaponry. Convinced that humanity’s dependence on an alien god stifles human potential, his brilliance is perpetually undone by his own ego.'
    },
    brainiac: {
      name: 'Brainiac',
      alignment: 'Villain',
      alignmentKey: 'villain',
      role: 'Twelfth-Level Intellect · Collector of Worlds',
      debut: 'Action Comics #242 (July 1958)',
      origin: 'Planet Colu · Interstellar Skull Ship',
      traits: 'Hyper-advanced cybernetics, miniaturization tech, planetary assimilation',
      story: 'Superman: Brainiac (Geoff Johns & Gary Frank)',
      bio: 'An emotionless cybernetic conqueror roaming the galaxy aboard a living skull ship, Brainiac shrinks and bottles capital cities—including Krypton’s Kandor—before destroying their host worlds so his curated knowledge remains uniquely rare.'
    },
    'general-zod': {
      name: 'General Zod',
      alignment: 'Villain',
      alignmentKey: 'villain',
      role: 'Kryptonian Military Commander · Phantom Zone Exile',
      debut: 'Adventure Comics #283 (April 1961)',
      origin: 'Krypton → Phantom Zone',
      traits: 'Master tactician, ruthless discipline, full yellow-sun Kryptonian powers',
      story: 'Superman: Last Son / Man of Steel',
      bio: 'Once head of Krypton’s military guild, General Dru-Zod was banished to the Phantom Zone for staging an insurrection. Under Earth’s yellow sun, he commands every ability Superman holds—acting as a dark reflection of Kal-El’s Kryptonian heritage without his human compassion.'
    },
    doomsday: {
      name: 'Doomsday',
      alignment: 'Villain',
      alignmentKey: 'villain',
      role: 'Engineered Apex Monster · Unstoppable Force',
      debut: 'Superman: The Man of Steel #17 (1992)',
      origin: 'Prehistoric Krypton (Bertron’s experiments)',
      traits: 'Adaptive resurrection, bone protrusions, virtually limitless brute strength',
      story: 'The Death of Superman (1992)',
      bio: 'Created through cruel genetic cloning on ancient Krypton, Doomsday evolved to survive any environment and become immune to whatever previously killed him. His rampage into Metropolis led to one of comic history’s most iconic sacrifices.'
    },
    darkseid: {
      name: 'Darkseid',
      alignment: 'Villain',
      alignmentKey: 'villain',
      role: 'Lord of Apokolips · New God Tyrant',
      debut: 'Superman’s Pal Jimmy Olsen #134 (1970)',
      origin: 'Apokolips (Fourth World)',
      traits: 'Omega Beams, godlike strength, relentless pursuit of the Anti-Life Equation',
      story: 'Superman: The Animated Series (“Legacy”) / Final Crisis',
      bio: 'Created by Jack Kirby, Uxas—known as Darkseid—rules the fiery hellscape of Apokolips. Obsessed with subjugating all free will across the multiverse, he represents absolute tyranny in stark opposition to Superman’s creed of hope.'
    },
    bizarro: {
      name: 'Bizarro',
      alignment: 'Villain',
      alignmentKey: 'villain',
      role: 'Imperfect Mirror Duplicate · Bizarro World (Htrae)',
      debut: 'Superboy #68 (October 1958)',
      origin: 'Cloning experiments / Cube-shaped Htrae',
      traits: 'Inverted abilities (freeze vision, flame breath), backward logic, tragic innocence',
      story: 'Escape from Bizarro World / All-Star Superman',
      bio: 'Usually born from a flawed attempt to clone Superman, Bizarro possesses chalky crystalline skin, backwards speech, and reversed powers. Less malicious than misunderstood, his earnest efforts to be “hero” frequently spell disaster for Metropolis.'
    }
  };

  /* ========================================================================
     1. Mobile Navigation & Active Section Highlighting
     ======================================================================== */

  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  function setMenuOpen(isOpen) {
    if (!navToggle || !primaryNav) return;
    navToggle.setAttribute('aria-expanded', String(isOpen));
    primaryNav.classList.toggle('is-open', isOpen);
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!expanded);
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        setMenuOpen(false);
        navToggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (
        primaryNav.classList.contains('is-open') &&
        !primaryNav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    });
  }

  // Highlight active section in sticky nav accurately across all section heights
  const sections = ['origin', 'powers', 'gallery', 'timeline']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (sections.length > 0 && navLinks.length > 0) {
    let navTicking = false;

    const updateActiveNav = () => {
      navTicking = false;
      const offset = 140;
      let activeId = '';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset) {
          activeId = section.id;
        }
      }

      navLinks.forEach((link) => {
        const isMatch = activeId !== '' && link.getAttribute('href') === `#${activeId}`;
        link.classList.toggle('is-active', isMatch);
        if (isMatch) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    const scheduleNavUpdate = () => {
      if (!navTicking) {
        navTicking = true;
        window.requestAnimationFrame(updateActiveNav);
      }
    };

    window.addEventListener('scroll', scheduleNavUpdate, { passive: true });
    window.addEventListener('resize', scheduleNavUpdate, { passive: true });
    updateActiveNav();
  }

  /* ========================================================================
     2. Powers & Weaknesses Tab Switcher + Kryptonite Explorer
     ======================================================================== */

  const powerTabs = Array.from(document.querySelectorAll('[data-power-view]'));
  const pwGroups = Array.from(document.querySelectorAll('[data-pw-group]'));

  function activatePowerView(view) {
    powerTabs.forEach((tab) => {
      const isSelected = tab.dataset.powerView === view;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
    });

    pwGroups.forEach((group) => {
      const show = view === 'all' || group.dataset.pwGroup === view;
      group.hidden = !show;
      if (show) {
        group.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      }
    });
  }

  powerTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activatePowerView(tab.dataset.powerView));
    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const offset = event.key === 'ArrowRight' ? 1 : -1;
      const nextTab = powerTabs[(index + offset + powerTabs.length) % powerTabs.length];
      nextTab.focus();
      activatePowerView(nextTab.dataset.powerView);
    });
  });

  // Kryptonite isotope selector
  const kryptoPills = Array.from(document.querySelectorAll('[data-krypto]'));
  const kryptoCrystal = document.getElementById('kryptonite-crystal');
  const kryptoName = document.getElementById('krypto-name');
  const kryptoSeverity = document.getElementById('krypto-severity');
  const kryptoEffect = document.getElementById('krypto-effect');

  kryptoPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const key = pill.dataset.krypto;
      const entry = KRYPTONITE_DATA[key];
      if (!entry) return;

      kryptoPills.forEach((btn) => {
        const active = btn === pill;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });

      if (kryptoCrystal) kryptoCrystal.dataset.variant = key;
      if (kryptoName) kryptoName.textContent = entry.name;
      if (kryptoSeverity) kryptoSeverity.textContent = entry.severity;
      if (kryptoEffect) kryptoEffect.textContent = entry.effect;
    });
  });

  /* ========================================================================
     3. Allies & Rogues Gallery Filter, Search & Dossier Modal
     ======================================================================== */

  const galleryFilterBtns = Array.from(document.querySelectorAll('[data-gallery-filter]'));
  const gallerySearch = document.getElementById('gallery-search');
  const galleryCards = Array.from(document.querySelectorAll('.character-card'));
  const galleryStatus = document.getElementById('gallery-status');
  const galleryEmpty = document.getElementById('gallery-empty');
  const resetGalleryBtn = document.getElementById('reset-gallery-btn');

  let activeAlignment = 'all';

  function updateGallery() {
    const query = (gallerySearch ? gallerySearch.value : '').trim().toLowerCase();
    let visibleCount = 0;

    galleryCards.forEach((card) => {
      const alignmentMatch = activeAlignment === 'all' || card.dataset.alignment === activeAlignment;
      const textBlob = `${card.dataset.search || ''} ${card.textContent || ''}`.toLowerCase();
      const queryMatch = query === '' || textBlob.includes(query);
      const isVisible = alignmentMatch && queryMatch;

      card.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
        card.classList.add('is-visible');
      }
    });

    if (galleryStatus) {
      const label = visibleCount === 1 ? 'character' : 'characters';
      galleryStatus.textContent = `Showing ${visibleCount} of ${galleryCards.length} ${label}`;
    }

    if (galleryEmpty) {
      galleryEmpty.hidden = visibleCount > 0;
    }
  }

  galleryFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeAlignment = btn.dataset.galleryFilter || 'all';
      galleryFilterBtns.forEach((item) => {
        const selected = item === btn;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      updateGallery();
    });
  });

  if (gallerySearch) {
    gallerySearch.addEventListener('input', updateGallery);
  }

  if (resetGalleryBtn) {
    resetGalleryBtn.addEventListener('click', () => {
      activeAlignment = 'all';
      if (gallerySearch) gallerySearch.value = '';
      galleryFilterBtns.forEach((item) => {
        const isAll = item.dataset.galleryFilter === 'all';
        item.classList.toggle('is-active', isAll);
        item.setAttribute('aria-pressed', String(isAll));
      });
      updateGallery();
      if (gallerySearch) gallerySearch.focus();
    });
  }

  // Accessible Character Dossier Modal
  const dossierModal = document.getElementById('dossier-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalAlignment = document.getElementById('modal-alignment');
  const modalTitle = document.getElementById('modal-title');
  const modalRole = document.getElementById('modal-role');
  const modalBio = document.getElementById('modal-bio');
  const modalDebut = document.getElementById('modal-debut');
  const modalOrigin = document.getElementById('modal-origin');
  const modalTraits = document.getElementById('modal-traits');
  const modalStory = document.getElementById('modal-story');
  let lastTriggerEl = null;

  function openDossier(characterId, triggerEl) {
    const info = DOSSIERS[characterId];
    if (!info || !dossierModal) return;

    lastTriggerEl = triggerEl;

    if (modalAlignment) {
      modalAlignment.textContent = info.alignment;
      modalAlignment.className = `badge ${info.alignmentKey === 'ally' ? 'badge-ally' : 'badge-villain'}`;
    }
    if (modalTitle) modalTitle.textContent = info.name;
    if (modalRole) modalRole.textContent = info.role;
    if (modalBio) modalBio.textContent = info.bio;
    if (modalDebut) modalDebut.textContent = info.debut;
    if (modalOrigin) modalOrigin.textContent = info.origin;
    if (modalTraits) modalTraits.textContent = info.traits;
    if (modalStory) modalStory.textContent = info.story;

    if (typeof dossierModal.showModal === 'function') {
      dossierModal.showModal();
    } else {
      dossierModal.setAttribute('open', '');
    }

    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeDossier() {
    if (!dossierModal) return;
    if (typeof dossierModal.close === 'function' && dossierModal.open) {
      dossierModal.close();
    } else {
      dossierModal.removeAttribute('open');
    }
  }

  document.querySelectorAll('[data-open-dossier]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openDossier(btn.dataset.openDossier, btn);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeDossier);
  }

  if (dossierModal) {
    dossierModal.addEventListener('click', (event) => {
      if (event.target === dossierModal) {
        closeDossier();
      }
    });

    dossierModal.addEventListener('close', () => {
      if (lastTriggerEl && typeof lastTriggerEl.focus === 'function') {
        lastTriggerEl.focus();
      }
    });
  }

  /* ========================================================================
     4. Comics & Media Timeline Medium Filter
     ======================================================================== */

  const timelineBtns = Array.from(document.querySelectorAll('[data-timeline-filter]'));
  const timelineItems = Array.from(document.querySelectorAll('.timeline-item'));
  const timelineStatus = document.getElementById('timeline-status');

  timelineBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const medium = btn.dataset.timelineFilter || 'all';

      timelineBtns.forEach((item) => {
        const selected = item === btn;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });

      let count = 0;
      timelineItems.forEach((item) => {
        const show = medium === 'all' || item.dataset.medium === medium;
        item.hidden = !show;
        if (show) {
          count += 1;
          item.classList.add('is-visible');
        }
      });

      if (timelineStatus) {
        const unit = count === 1 ? 'milestone' : 'milestones';
        timelineStatus.textContent = `Showing ${count} ${unit}`;
      }
    });
  });

  /* ========================================================================
     5. Subtle Scroll-Reveal (Respects prefers-reduced-motion)
     ======================================================================== */

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = Array.from(document.querySelectorAll('.reveal'));

  if (!prefersReducedMotion && 'IntersectionObserver' in window && revealEls.length > 0) {
    document.documentElement.classList.add('js-reveal');

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
})();
