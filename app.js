/**
 * NUIT LAB (뉘이랩) — Official Brand Homepage & Dual DB Lead-Gen Landing System (Round 4)
 * Bespoke Editorial Motion & Micro-Interactions across every section
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    document.documentElement.classList.add('js-motion-ready');
  }

  /* ==========================================================================
     1. Section Interactive Content Dictionaries
     ========================================================================== */
  const PHILOSOPHY_NOTES = [
    {
      tag: 'LAB NOTE 01',
      text: '해바라기 유래 인지질 이중층이 마그네슘 이온의 금속성 자극을 감싸 위산과의 직접 마찰을 줄이고, 늦은 밤 빈속에도 편안한 목넘김을 구현합니다.'
    },
    {
      tag: 'LAB NOTE 02',
      text: '일교차가 큰 미국 미시간주 과수원의 몽모랑시 타트체리만을 선별하고, 유럽산 비유전자변형(Non-GMO) 해바라기 레시틴 원산지를 전 배치 투명하게 공개합니다.'
    },
    {
      tag: 'LAB NOTE 03',
      text: '취침 직전 혈당 스파이크가 수면의 질을 방해하지 않도록 설탕·액상과당·물엿을 완전히 배제하고 자연 유래 알룰로스로 깔끔한 15kcal 산미를 완성했습니다.'
    }
  ];

  const MECHANISM_STEPS = [
    {
      chip: 'STEP 01 · 인지질 이중 보호막 형성',
      title: 'Step 01 · 위산 방어 인지질 코팅',
      body: '300nm 미만의 미세 해바라기 레시틴 구형 캡슐이 마그네슘 이온을 감싸 위산에 의한 파괴를 막고 상큼한 타트체리 풍미만 전달합니다.'
    },
    {
      chip: 'STEP 02 · 고체 붕해 과정 없는 즉시 분산',
      title: 'Step 02 · 위장 체류 부담을 줄인 액상 분산',
      body: '단단하게 압축된 고체 타정 알약처럼 위에서 녹는 시간을 기다릴 필요 없이, 섭취 즉시 미세 리포좀 입자 상태로 균일하게 퍼집니다.'
    },
    {
      chip: 'STEP 03 · 장 점막 세포막 친화 흡수',
      title: 'Step 03 · 삼투압 자극 없는 세포막 융합 전달',
      body: '인체 세포막과 동일한 인지질 성분으로 구성되어 장내 수분을 과도하게 끌어당기지 않고 다음 날 아침까지 속이 편안하게 흡수됩니다.'
    }
  ];

  const COMPARISON_INSIGHTS = [
    {
      badge: '설계 포인트 01',
      text: '산화마그네슘 대비 체내 전달 효율이 높은 인지질 리포좀 액상 공법을 적용해 한 포만으로 일일 나이트 이완 루틴에 충분한 미네랄 밀도를 채웁니다.'
    },
    {
      badge: '설계 포인트 02',
      text: '타정 알약 제조에 쓰이는 화학 부형제 대신 미시간 몽모랑시 타트체리 2,400mg과 발효 GABA·L-테아닌을 한 포에 배합해 저녁 시너지를 완성했습니다.'
    },
    {
      badge: '설계 포인트 03',
      text: '잠들기 직전 물을 많이 마시면 야간 각성의 원인이 됩니다. 물 없이도 3초 만에 깔끔하게 비울 수 있는 20mL 고농축 스틱으로 설계했습니다.'
    },
    {
      badge: '설계 포인트 04',
      text: '일반 과채주스의 높은 당류(12~24g)는 밤사이 깊은 휴식을 방해합니다. 뉘이랩은 당류 0g·15kcal 설계로 양치 전이나 다이어트 중에도 부담이 없습니다.'
    },
    {
      badge: '설계 포인트 05',
      text: '산도가 높은 농축액 단독 섭취나 무거운 무기염 정제의 단점을 보완해, 위장이 예민한 분들도 매일 밤 거르지 않고 마실 수 있도록 pH 밸런스를 조율했습니다.'
    }
  ];

  /* ==========================================================================
     2. Formulation Lineup Data (With Interactive Filter Categories)
     ========================================================================== */
  const LINEUP_ITEMS = [
    {
      id: 'nuit-original',
      groups: ['personal', 'partner'],
      code: 'FORMULATION 01',
      badge: 'BEST · 대표 시그니처',
      badgeClass: 'burgundy',
      title: '나이트 샷 오리지널',
      selectValue: '나이트 샷 오리지널 (리포좀 마그네슘 & 타트체리)',
      defaultTab: 'b2c',
      image: 'assets/images/nuit-hero-box.jpg',
      desc: '해바라기 레시틴 인지질 리포좀 마그네슘 150mg과 미시간 몽모랑시 타트체리를 한 포에 담은 시그니처 액상 앰플.',
      specShort: [
        '핵심성분: 리포좀 Mg 150mg · 타트체리 2,400mg',
        '규격/열량: 20mL × 14포 (2주 루틴) · 무설탕 15kcal'
      ],
      modalSpecs: [
        ['1포 용량 · 규격', '20mL 액상 스틱 × 14포입 (총 280mL)'],
        ['핵심 미네랄', '인지질 리포좀 마그네슘 150mg (일일 권장량 48%)'],
        ['시너지 원료', '미국 미시간산 몽모랑시 타트체리 · 발효 GABA · L-테아닌'],
        ['당류 · 열량', '당류 0g (알룰로스·에리스리톨 블렌딩) / 15kcal'],
        ['추천 대상', '정제 알약 삼킴이 불편하거나 빈속 속쓰림이 잦은 분']
      ]
    },
    {
      id: 'nuit-gift-3box',
      groups: ['partner'],
      code: 'FORMULATION 02',
      badge: 'VIP 기프트 · 클리닉 인기',
      badgeClass: '',
      title: '6주 리커버리 기프트 에디션',
      selectValue: '6주 리커버리 기프트 에디션 (3박스 구성)',
      defaultTab: 'b2b',
      image: 'assets/images/nuit-gift-bundle-3box.jpg',
      desc: '42일 집중 나이트 루틴을 위한 3박스 하드케이스 패키지. 기업 임직원 웰니스 기프트 및 클리닉 프로그램용 베스트 구성.',
      specShort: [
        '구성품목: 나이트 샷 본품 3박스(42포) + 전용 기프트 슬리브',
        '활용처: VIP 답례품 · 클리닉 6주 집중 케어 패키지'
      ],
      modalSpecs: [
        ['패키지 구성', '20mL × 42포 (14포입 본품 3박스 + 패브릭 텍스처 하드케이스)'],
        ['커스텀 옵션', '50세트 이상 기업 로고 각인 슬리브 및 감사 카드 동봉 지원'],
        ['보관 방법', '직사광선을 피한 실온 보관 (제조일로부터 18개월)'],
        ['제휴 채널', '수면·기능의학 클리닉, 프리미엄 에스테틱, 기업 복지몰'],
        ['샘플 안내', '기업·기관 담당자 신청 시 본품 패키지 실물 샘플 발송']
      ]
    },
    {
      id: 'nuit-chamomile',
      groups: ['personal'],
      code: 'FORMULATION 03',
      badge: 'MILD RELAX',
      badgeClass: '',
      title: 'L-테아닌 & 캐모마일 릴렉스 앰플',
      selectValue: 'L-테아닌 & 캐모마일 릴렉스 앰플',
      defaultTab: 'b2c',
      image: 'assets/images/nuit-chamomile-box.jpg',
      desc: '산미에 민감한 분들을 위해 유기농 크로아티아산 캐모마일 추출물과 녹차 유래 L-테아닌 250mg을 부드럽게 배합한 허벌 앰플.',
      specShort: [
        '핵심성분: L-테아닌 250mg · 크로아티아산 캐모마일',
        '풍미특징: 산미 없는 은은한 허벌 플로럴 티 타입'
      ],
      modalSpecs: [
        ['1포 용량 · 규격', '20mL 액상 스틱 × 14포입'],
        ['핵심 아미노산', '고순도 L-테아닌 250mg + 리포좀 마그네슘 100mg'],
        ['식물성 부원료', '크로아티아산 캐모마일 꽃 추출물 · 패션플라워 · 레몬밤'],
        ['음용 팁', '따뜻한 물 120mL에 희석하면 은은한 나이트 허브티로 완성'],
        ['추천 대상', '과일 산미보다 차분한 캐모마일 티 풍미를 선호하시는 분']
      ]
    },
    {
      id: 'nuit-starter-kit',
      groups: ['personal', 'partner'],
      code: 'FORMULATION 04',
      badge: 'TRIAL · 호텔 어메니티',
      badgeClass: 'burgundy',
      title: '5-Night 리넨 트래블 스타터 키트',
      selectValue: '5-Night 리넨 트래블 스타터 키트',
      defaultTab: 'b2c',
      image: 'assets/images/nuit-trial-pouch.jpg',
      desc: '해외 출장·여행지에서의 낯선 침실 적응을 돕는 5포입 컴팩트 키트와 전용 보태니컬 리넨 파우치 구성.',
      specShort: [
        '구성품목: 오리지널 5포 + 전용 워셔블 리넨 파우치',
        '활용처: 첫 입문 테스트 · 호텔 웰컴 턴다운 어메니티'
      ],
      modalSpecs: [
        ['패키지 구성', '20mL × 5포입 + 내추럴 코튼 리넨 트래블 파우치'],
        ['기내 반입', '개별 20mL 소포장 액상으로 국내·국제선 기내 휴대 가능'],
        ['어메니티 제휴', '부티크 호텔·리조트 객실 턴다운 서비스 전용 납품 품목'],
        ['체험 혜택', '하단 무료 샘플키트 신청 시 2포 체험팩 우선 발송'],
        ['권장 섭취', '장거리 비행 전후 및 출장지 취침 30분 전 1포']
      ]
    }
  ];

  /* ==========================================================================
     3. Tester & Partner Review Data
     ========================================================================== */
  const REVIEWS = [
    {
      id: 'rev-1',
      category: 'sleep',
      stars: 5,
      verified: '사전 테스터 4주 완주',
      badge: '본품 전환 확정',
      title: '알약 마그네슘 먹고 속 쓰렸던 분들께 진심으로 추천합니다',
      body: '기존에 해외 직구 마그네슘 정제를 먹으면 알이 너무 커서 목에 걸리는 느낌도 싫고 아침까지 속이 더부룩했거든요. 뉘이랩은 잠들기 직전에 찢어서 마셔도 위가 정말 편안하고, 5일 차쯤부터 새벽에 깨서 시계 보는 횟수가 확 줄었습니다.',
      author: '김*연 · 34세 브랜드 디렉터',
      date: '2026.02.24',
      helpful: 64,
      photo: 'assets/images/nuit-review-desk.jpg',
      photoCaption: '침대 협탁에 두고 매일 밤 11시 반마다 챙겨 마시는 2주 루틴 인증샷입니다.'
    },
    {
      id: 'rev-2',
      category: 'taste',
      stars: 5,
      verified: '무료 샘플키트 체험자',
      badge: '얼리버드 신청완료',
      title: '비린 미네랄 맛이 전혀 없고 고급 타트체리 에이드 같아요',
      body: '액상 미네랄 특유의 쇠 맛이나 텁텁한 끝맛을 걱정했는데 첫 모금 마시자마자 감탄했습니다. 저녁 샤워 끝나고 얼음 띄운 탄산수 한 잔에 한 포 타서 마시면 야식이나 와인 생각도 싹 사라지고 기분 좋게 나른해집니다.',
      author: '박*현 · 29세 프로덕트 디자이너',
      date: '2026.02.21',
      helpful: 51,
      photo: 'assets/images/nuit-review-drink.jpg',
      photoCaption: '탄산수 150mL에 나이트 샷 1포를 넣으면 루비빛 나이트 칵테일처럼 즐길 수 있어요.'
    },
    {
      id: 'rev-3',
      category: 'routine',
      stars: 5,
      verified: '제휴 약국 약사 리포트',
      badge: '성수 공식 입점처',
      title: '약국 상담 시 액상 흡수율과 무설탕 설계에서 신뢰도가 높습니다',
      body: '야근이 잦은 직장인 고객분들은 정제 영양제를 챙겨 드시는 것 자체에 피로감을 느끼십니다. 인지질 리포좀 공법에 당류 0g 설계라 야간 혈당 걱정 없이 권해드릴 수 있고, 시음 후 재방문 문의가 가장 빠른 품목입니다.',
      author: '이*훈 대표약사 · 서울 성동구 제휴 약국',
      date: '2026.02.19',
      helpful: 47,
      photo: null,
      photoCaption: ''
    },
    {
      id: 'rev-4',
      category: 'sleep',
      stars: 5,
      verified: '사전 테스터 2주 완주',
      badge: '재신청 의사 100%',
      title: '일어났을 때 머리가 멍하지 않고 눈이 개운하게 떠져요',
      body: '중요한 프레젠테이션 앞두고 긴장될 때마다 마셨습니다. 억지로 잠을 재우는 느낌이 아니라 어깨랑 눈가의 팽팽한 긴장이 스르르 풀리는 느낌이라 다음 날 아침 컨디션이 훨씬 가볍습니다.',
      author: '정*우 · 38세 IT 서비스 기획자',
      date: '2026.02.16',
      helpful: 39,
      photo: null,
      photoCaption: ''
    },
    {
      id: 'rev-5',
      category: 'routine',
      stars: 5,
      verified: '기업 웰니스 담당자',
      badge: '임직원 기프트 도입',
      title: '하반기 전사 리프레시 키트로 120세트 도입했는데 반응이 최고였습니다',
      body: '뻔한 홍삼이나 드링크 대신 감도 높은 패키지와 실질적인 수면 케어 스토리가 담긴 제품을 찾고 있었습니다. 기프트 슬리브 마감도 훌륭하고 구성원 만족도 설문에서 1위를 기록해 분기별 정기 납품을 검토 중입니다.',
      author: '최*진 · 스타트업 피플팀 매니저',
      date: '2026.02.12',
      helpful: 33,
      photo: null,
      photoCaption: ''
    },
    {
      id: 'rev-6',
      category: 'taste',
      stars: 5,
      verified: '무료 샘플키트 체험자',
      badge: '출장 필수템',
      title: '2포 샘플 받아서 해외 출장 비행기에서 마셔보고 바로 정착했습니다',
      body: '호텔 침대만 바뀌면 새벽 내내 뒤척이는 편인데 파우치에 쏙 들어가는 스틱이라 물 없이도 바로 마실 수 있어 정말 편했습니다. 당류가 0g이라 양치 전에 부담 없는 점도 마음에 듭니다.',
      author: '한*민 · 41세 해외영업 팀장',
      date: '2026.02.09',
      helpful: 28,
      photo: null,
      photoCaption: ''
    }
  ];

  /* ==========================================================================
     4. State
     ========================================================================== */
  const state = {
    lineupFilter: 'all',
    reviewFilter: 'all',
    reviewSort: 'helpful',
    votedReviews: new Set(),
    activeSpecItem: null,
    selectedConcern: '잠들기까지 뒤척임 완화',
    quotaRemaining: 17,
    quotaTotal: 100,
    manualSynergyLockUntil: 0
  };

  /* ==========================================================================
     5. Editorial Scroll-Reveal, Progress Bar, Scroll-Spy & Hero Parallax
     ========================================================================== */
  function initScrollReveal() {
    const items = document.querySelectorAll('.reveal-item, .reveal-scale');
    items.forEach((el) => {
      const delay = el.getAttribute('data-delay');
      if (delay) {
        el.style.setProperty('--reveal-delay', `${delay}ms`);
      }
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -28px 0px' }
    );

    items.forEach((el) => observer.observe(el));
  }

  function initScrollProgressAndSpy() {
    const headerEl = document.getElementById('site-header');
    const progressBar = document.getElementById('scroll-progress-bar');
    const spyLinks = Array.from(document.querySelectorAll('[data-spy-target]'));
    const sectionIds = [
      'philosophy-section',
      'science-section',
      'lineup-section',
      'routine-section',
      'voice-section',
      'faq-section',
      'conversion-section'
    ];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    let ticking = false;
    let lastActiveId = '';

    const updateOnScroll = () => {
      ticking = false;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

      if (progressBar) {
        progressBar.style.width = `${pct.toFixed(1)}%`;
      }
      if (headerEl) {
        headerEl.classList.toggle('is-scrolled', scrollTop > 18);
      }

      // Determine active section for GNB & Mobile Quick Bar
      const triggerLine = scrollTop + 180;
      let activeId = '';
      for (const sec of sections) {
        if (sec.offsetTop <= triggerLine) {
          activeId = sec.id;
        }
      }

      if (activeId !== lastActiveId) {
        lastActiveId = activeId;
        spyLinks.forEach((link) => {
          const isMatch = link.getAttribute('data-spy-target') === activeId;
          link.classList.toggle('active-spy', isMatch);
          if (isMatch && link.classList.contains('mobile-anchor-link')) {
            const bar = document.getElementById('mobile-anchor-bar');
            if (bar && bar.scrollWidth > bar.clientWidth) {
              const targetLeft = link.offsetLeft - (bar.clientWidth - link.offsetWidth) / 2;
              bar.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
            }
          }
        });
      }
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateOnScroll);
          ticking = true;
        }
      },
      { passive: true }
    );

    updateOnScroll();
  }

  function initHeroVideoController() {
    const videoA = document.getElementById('hero-bg-video');
    const videoB = document.getElementById('hero-bg-video-b');
    const toggleBtn = document.getElementById('hero-video-toggle-btn');
    const toggleLabel = document.getElementById('hero-video-toggle-label');
    const toggleIcon = document.getElementById('hero-video-toggle-icon');
    const filmDot = document.getElementById('hero-film-dot');
    const heroSection = document.getElementById('hero-section');
    if (!videoA) return;

    const layers = videoB ? [videoA, videoB] : [videoA];
    layers.forEach((v) => {
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
    });

    const CROSSFADE_DURATION = 0.8; // seconds before end to trigger 700ms A/B crossfade
    let activeKey = 'A';
    let isTransitioning = false;
    let userManuallyPaused = false;
    let crossfadeTimer = null;

    const getActiveVideo = () => (activeKey === 'A' || !videoB ? videoA : videoB);
    const getStandbyVideo = () => (activeKey === 'A' ? videoB : videoA);

    const syncUi = (isPaused) => {
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-pressed', isPaused ? 'true' : 'false');
        toggleBtn.setAttribute('aria-label', isPaused ? '배경 영상 재생' : '배경 영상 일시정지');
      }
      if (toggleLabel) {
        toggleLabel.textContent = isPaused ? '재생' : '일시정지';
      }
      if (toggleIcon) {
        toggleIcon.textContent = isPaused ? '▶' : '❚❚';
      }
      if (filmDot) {
        filmDot.classList.toggle('is-paused', isPaused);
      }
    };

    const safePlayActive = () => {
      const activeVid = getActiveVideo();
      const playPromise = activeVid.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise
          .then(() => syncUi(false))
          .catch(() => syncUi(true));
      } else {
        syncUi(activeVid.paused);
      }
    };

    const pauseAll = () => {
      if (crossfadeTimer) {
        window.clearTimeout(crossfadeTimer);
        crossfadeTimer = null;
      }
      isTransitioning = false;
      layers.forEach((v) => {
        if (!v.paused) v.pause();
      });
    };

    // Pre-prime standby layer so frame 0 is decoded in GPU memory before first crossfade
    if (videoB) {
      videoB.addEventListener(
        'loadeddata',
        () => {
          try {
            videoB.currentTime = 0;
          } catch {}
        },
        { once: true }
      );
    }

    // Dual-Video A/B Seamless Crossfade Loop (components-seamless-video-loop skill)
    const handleTimeUpdate = (video, key) => {
      if (!videoB || activeKey !== key || isTransitioning || userManuallyPaused) return;
      if (!video.duration || Number.isNaN(video.duration)) return;

      if (video.currentTime >= video.duration - CROSSFADE_DURATION) {
        isTransitioning = true;
        const nextKey = key === 'A' ? 'B' : 'A';
        const nextVideo = getStandbyVideo();
        if (!nextVideo) {
          isTransitioning = false;
          return;
        }

        const commitCrossfade = () => {
          nextVideo.classList.add('is-active');
          video.classList.remove('is-active');
          activeKey = nextKey;

          crossfadeTimer = window.setTimeout(() => {
            if (activeKey !== key) {
              if (!video.paused) video.pause();
              try {
                video.currentTime = 0;
              } catch {}
            }
            isTransitioning = false;
            crossfadeTimer = null;
          }, 720);
        };

        try {
          nextVideo.currentTime = 0;
        } catch {}
        const p = nextVideo.play();
        if (p && typeof p.then === 'function') {
          p.then(commitCrossfade).catch(commitCrossfade);
        } else {
          commitCrossfade();
        }
      }
    };

    videoA.addEventListener('timeupdate', () => handleTimeUpdate(videoA, 'A'));
    if (videoB) {
      videoB.addEventListener('timeupdate', () => handleTimeUpdate(videoB, 'B'));
    }

    // Fallback if browser throttles timeupdate in background tab
    layers.forEach((v, idx) => {
      const key = idx === 0 ? 'A' : 'B';
      v.addEventListener('ended', () => {
        if (userManuallyPaused) return;
        if (!isTransitioning && activeKey === key) {
          v.currentTime = 0;
          safePlayActive();
        }
      });
    });

    if (prefersReducedMotion) {
      pauseAll();
      userManuallyPaused = true;
      syncUi(true);
    } else {
      safePlayActive();
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const activeVid = getActiveVideo();
        if (activeVid.paused) {
          userManuallyPaused = false;
          safePlayActive();
        } else {
          userManuallyPaused = true;
          pauseAll();
          syncUi(true);
        }
      });
    }

    if ('IntersectionObserver' in window && heroSection) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              pauseAll();
              syncUi(true);
            } else if (!userManuallyPaused && !prefersReducedMotion) {
              safePlayActive();
            }
          });
        },
        { threshold: 0.08 }
      );
      heroObserver.observe(heroSection);
    }
  }

  /* ==========================================================================
     6. Odometer Count-Up & Animated Bioavailability / Quota Gauges
     ========================================================================== */
  function animateNumber(el, target, decimals, suffix, useComma, duration = 1050) {
    if (prefersReducedMotion) {
      const formatted = useComma ? Math.round(target).toLocaleString('ko-KR') : target.toFixed(decimals);
      el.textContent = `${formatted}${suffix}`;
      return;
    }

    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // EaseOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;
      const formatted = useComma
        ? Math.round(current).toLocaleString('ko-KR')
        : current.toFixed(decimals);
      el.textContent = `${formatted}${suffix}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function initCountUpAndGauges() {
    const countEls = document.querySelectorAll('[data-countup]');
    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      const countObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const target = parseFloat(el.getAttribute('data-countup') || '0');
              const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
              const suffix = el.getAttribute('data-suffix') || '';
              const useComma = el.getAttribute('data-comma') === 'true';
              animateNumber(el, target, decimals, suffix, useComma);
              obs.unobserve(el);
            }
          });
        },
        { threshold: 0.25 }
      );
      countEls.forEach((el) => countObserver.observe(el));

      // Science Bioavailability Bars + Percentage Counter
      const scienceBars = document.getElementById('science-bars');
      if (scienceBars) {
        const barObs = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                scienceBars.classList.add('bars-animated');
                scienceBars.querySelectorAll('[data-bar-counter]').forEach((counterEl) => {
                  const target = parseFloat(counterEl.getAttribute('data-bar-counter') || '0');
                  animateNumber(counterEl, target, 1, '% 전달', false, 1100);
                });
                obs.unobserve(scienceBars);
              }
            });
          },
          { threshold: 0.22 }
        );
        barObs.observe(scienceBars);
      }

      // Voice Satisfaction Mini-Bars
      const voiceBars = document.getElementById('voice-sat-bars');
      if (voiceBars) {
        const satObs = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                voiceBars.classList.add('bars-animated');
                obs.unobserve(voiceBars);
              }
            });
          },
          { threshold: 0.25 }
        );
        satObs.observe(voiceBars);
      }

      // Conversion Quota Gauge
      const quotaCard = document.getElementById('quota-status-card');
      if (quotaCard) {
        const quotaObs = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                quotaCard.classList.add('quota-animated');
                obs.unobserve(quotaCard);
              }
            });
          },
          { threshold: 0.25 }
        );
        quotaObs.observe(quotaCard);
      }
    } else {
      document.getElementById('science-bars')?.classList.add('bars-animated');
      document.getElementById('voice-sat-bars')?.classList.add('bars-animated');
      document.getElementById('quota-status-card')?.classList.add('quota-animated');
    }
  }

  /* ==========================================================================
     7. Section Micro-Interactions (Philosophy, Science, Comparison, 14-Night)
     ========================================================================== */
  function initPhilosophyPillars() {
    const buttons = document.querySelectorAll('[data-pillar-idx]');
    const tagEl = document.getElementById('pillar-readout-tag');
    const textEl = document.getElementById('pillar-readout-text');
    if (!buttons.length || !tagEl || !textEl) return;

    const activatePillar = (idx) => {
      const note = PHILOSOPHY_NOTES[idx];
      if (!note) return;
      buttons.forEach((btn, i) => {
        const active = i === idx;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });
      tagEl.textContent = note.tag;
      textEl.textContent = note.text;
    };

    buttons.forEach((btn) => {
      const idx = parseInt(btn.getAttribute('data-pillar-idx') || '0', 10);
      btn.addEventListener('click', () => activatePillar(idx));
      btn.addEventListener('pointerenter', (e) => {
        if (e.pointerType !== 'touch') activatePillar(idx);
      });
    });
  }

  function initScienceMechanismExplorer() {
    const stepBtns = document.querySelectorAll('[data-mech-idx]');
    const chipEl = document.getElementById('science-visual-chip');
    const titleEl = document.getElementById('mech-detail-title');
    const bodyEl = document.getElementById('mech-detail-body');
    if (!stepBtns.length) return;

    const activateStep = (idx) => {
      const info = MECHANISM_STEPS[idx];
      if (!info) return;
      stepBtns.forEach((btn, i) => {
        const active = i === idx;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });
      if (chipEl) chipEl.textContent = info.chip;
      if (titleEl) titleEl.textContent = info.title;
      if (bodyEl) bodyEl.textContent = info.body;
    };

    stepBtns.forEach((btn) => {
      const idx = parseInt(btn.getAttribute('data-mech-idx') || '0', 10);
      btn.addEventListener('click', () => activateStep(idx));
      btn.addEventListener('pointerenter', (e) => {
        if (e.pointerType !== 'touch') activateStep(idx);
      });
    });
  }

  function initComparisonSpotlight() {
    const rows = document.querySelectorAll('.comp-row[data-comp-idx]');
    const badgeEl = document.getElementById('comp-insight-badge');
    const textEl = document.getElementById('comp-insight-text');
    if (!rows.length) return;

    const highlightRow = (idx) => {
      const insight = COMPARISON_INSIGHTS[idx];
      if (!insight) return;
      rows.forEach((r, i) => r.classList.toggle('is-highlighted', i === idx));
      if (badgeEl) badgeEl.textContent = insight.badge;
      if (textEl) textEl.textContent = insight.text;
    };

    rows.forEach((row) => {
      const idx = parseInt(row.getAttribute('data-comp-idx') || '0', 10);
      row.addEventListener('click', () => highlightRow(idx));
      row.addEventListener('pointerenter', (e) => {
        if (e.pointerType !== 'touch') highlightRow(idx);
      });
    });
  }

  function initRoutineSynergyTimeline() {
    const timelineCards = Array.from(document.querySelectorAll('#routine-timeline-list .timeline-card'));
    const ingRows = Array.from(document.querySelectorAll('#ingredient-spec-list .ing-row'));
    const railFill = document.getElementById('timeline-rail-fill');
    if (!timelineCards.length || !ingRows.length) return;

    const activateSynergy = (synergyKey, isManual = false) => {
      if (isManual) {
        state.manualSynergyLockUntil = Date.now() + 2400;
      }
      let railPct = '25';
      timelineCards.forEach((card) => {
        const match = card.getAttribute('data-synergy') === synergyKey;
        card.classList.toggle('is-active', match);
        if (match) {
          railPct = card.getAttribute('data-rail-pct') || '25';
        }
      });
      ingRows.forEach((row) => {
        row.classList.toggle('is-active', row.getAttribute('data-synergy') === synergyKey);
      });
      if (railFill) {
        railFill.style.height = `${railPct}%`;
      }
    };

    timelineCards.forEach((card) => {
      const key = card.getAttribute('data-synergy');
      card.addEventListener('click', () => activateSynergy(key, true));
      card.addEventListener('pointerenter', (e) => {
        if (e.pointerType !== 'touch') activateSynergy(key, true);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateSynergy(key, true);
        }
      });
    });

    ingRows.forEach((row) => {
      const key = row.getAttribute('data-synergy');
      row.addEventListener('click', () => activateSynergy(key, true));
      row.addEventListener('pointerenter', (e) => {
        if (e.pointerType !== 'touch') activateSynergy(key, true);
      });
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateSynergy(key, true);
        }
      });
    });

    // Scroll-linked progression on mobile/desktop when scrolling naturally
    if ('IntersectionObserver' in window) {
      const cardObs = new IntersectionObserver(
        (entries) => {
          if (Date.now() < state.manualSynergyLockUntil) return;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const key = entry.target.getAttribute('data-synergy');
              if (key) activateSynergy(key, false);
            }
          });
        },
        { rootMargin: '-32% 0px -45% 0px', threshold: 0.2 }
      );
      timelineCards.forEach((c) => cardObs.observe(c));
    }
  }

  /* ==========================================================================
     8. Countdown Timer & Modal Helpers
     ========================================================================== */
  function initCountdown() {
    const timerEl = document.getElementById('dispatch-countdown');
    if (!timerEl) return;

    let remainingSeconds = 4 * 3600 + 42 * 60 + 19;

    const renderTick = () => {
      const hrs = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
      const secs = String(remainingSeconds % 60).padStart(2, '0');
      timerEl.textContent = `${hrs}:${mins}:${secs}`;
      remainingSeconds = remainingSeconds > 0 ? remainingSeconds - 1 : 4 * 3600 + 59 * 60 + 59;
    };

    renderTick();
    setInterval(renderTick, 1000);
  }

  const backdropEl = document.getElementById('modal-backdrop');

  function openModal(modalId) {
    closeAllModals();
    const modal = document.getElementById(modalId);
    if (!modal) return;
    if (backdropEl) backdropEl.classList.add('open');
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function closeAllModals() {
    document.querySelectorAll('.center-modal.open').forEach((m) => m.classList.remove('open'));
    if (backdropEl) backdropEl.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function initModalListeners() {
    if (backdropEl) {
      backdropEl.addEventListener('click', closeAllModals);
    }
    document.querySelectorAll('[data-close-modal]').forEach((btn) => {
      btn.addEventListener('click', closeAllModals);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });
  }

  /* ==========================================================================
     9. Lineup Showcase, Filter Pills & Spec Briefing Modal
     ========================================================================== */
  function renderLineup() {
    const container = document.getElementById('lineup-grid-container');
    if (!container) return;

    const filtered = LINEUP_ITEMS.filter(
      (item) => state.lineupFilter === 'all' || item.groups.includes(state.lineupFilter)
    );

    container.innerHTML = filtered
      .map((item, idx) => {
        const badgeCls = item.badgeClass ? `lineup-badge ${item.badgeClass}` : 'lineup-badge';
        const specsHtml = item.specShort
          .map((line) => {
            const [label, rest] = line.split(': ');
            return `<span><strong>${label}:</strong> ${rest}</span>`;
          })
          .join('');

        return `
          <article class="lineup-card" data-lineup-id="${item.id}" style="--card-delay: ${idx * 70}ms">
            <div>
              <div class="lineup-thumb-wrap" data-open-spec="${item.id}" role="button" tabindex="0" aria-label="${item.title} 배합 상세 보기">
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
                <span class="${badgeCls}">${item.badge}</span>
              </div>
              <div class="lineup-body">
                <div>
                  <span class="lineup-code">${item.code}</span>
                  <h3 class="lineup-title">${item.title}</h3>
                  <p class="lineup-desc">${item.desc}</p>
                </div>
                <div class="lineup-spec-tags">
                  ${specsHtml}
                </div>
              </div>
            </div>
            <div class="lineup-footer">
              <button type="button" class="btn-lineup-spec" data-open-spec="${item.id}">배합·성분 브리핑</button>
              <button type="button" class="btn-lineup-apply" data-apply-lineup="${item.id}">샘플·제휴 신청</button>
            </div>
          </article>
        `;
      })
      .join('');

    container.querySelectorAll('[data-open-spec]').forEach((el) => {
      el.addEventListener('click', () => openSpecModal(el.getAttribute('data-open-spec')));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openSpecModal(el.getAttribute('data-open-spec'));
        }
      });
    });

    container.querySelectorAll('[data-apply-lineup]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = LINEUP_ITEMS.find((x) => x.id === btn.getAttribute('data-apply-lineup'));
        if (item) {
          jumpToConversionForm(item.defaultTab, item);
        }
      });
    });
  }

  function initLineupControls() {
    document.querySelectorAll('[data-lineup-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-lineup-filter]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.lineupFilter = btn.getAttribute('data-lineup-filter') || 'all';
        renderLineup();
      });
    });

    const specApplyBtn = document.getElementById('spec-modal-apply-btn');
    if (specApplyBtn) {
      specApplyBtn.addEventListener('click', () => {
        const targetItem = state.activeSpecItem;
        closeAllModals();
        if (targetItem) {
          jumpToConversionForm(targetItem.defaultTab, targetItem);
        }
      });
    }

    renderLineup();
  }

  function openSpecModal(lineupId) {
    const item = LINEUP_ITEMS.find((x) => x.id === lineupId);
    if (!item) return;
    state.activeSpecItem = item;

    const codeEl = document.getElementById('spec-modal-code');
    const titleEl = document.getElementById('spec-modal-title');
    const descEl = document.getElementById('spec-modal-desc');
    const rowsEl = document.getElementById('spec-modal-rows');

    if (codeEl) codeEl.textContent = item.code;
    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.desc;
    if (rowsEl) {
      rowsEl.innerHTML = item.modalSpecs
        .map(
          ([k, v]) => `
            <div class="modal-summary-line">
              <span>${k}</span>
              <strong>${v}</strong>
            </div>
          `
        )
        .join('');
    }

    openModal('spec-modal');
  }

  /* ==========================================================================
     10. Reviews Filter, Sort, Helpful Vote & Photo Lightbox
     ========================================================================== */
  function renderReviews() {
    const container = document.getElementById('review-cards-container');
    if (!container) return;

    let list = REVIEWS.filter((r) => state.reviewFilter === 'all' || r.category === state.reviewFilter);

    if (state.reviewSort === 'helpful') {
      list = [...list].sort((a, b) => {
        const aScore = a.helpful + (state.votedReviews.has(a.id) ? 1 : 0);
        const bScore = b.helpful + (state.votedReviews.has(b.id) ? 1 : 0);
        return bScore - aScore;
      });
    } else {
      list = [...list].sort((a, b) => b.date.localeCompare(a.date));
    }

    container.innerHTML = list
      .map((r, idx) => {
        const isVoted = state.votedReviews.has(r.id);
        const count = r.helpful + (isVoted ? 1 : 0);
        const stars = '★'.repeat(r.stars);

        const thumbHtml = r.photo
          ? `
            <button type="button" class="review-thumb-btn" data-lightbox-id="${r.id}" aria-label="${r.author} 포토 리뷰 확대 보기">
              <img src="${r.photo}" alt="${r.title}" loading="lazy" />
            </button>
          `
          : '';

        return `
          <article class="review-card" style="--card-delay: ${idx * 55}ms">
            <div class="review-card-top">
              <div>
                <div class="review-meta-badges">
                  <span class="star-icons" aria-label="별점 5점">${stars}</span>
                  <span class="verified-tag">${r.verified}</span>
                  <span class="repurchase-tag">${r.badge}</span>
                </div>
                <h3 class="review-title">${r.title}</h3>
                <p class="review-body">${r.body}</p>
              </div>
              ${thumbHtml}
            </div>
            <div class="review-card-footer">
              <span>${r.author} · ${r.date}</span>
              <button type="button" class="helpful-btn ${isVoted ? 'voted' : ''}" data-helpful-id="${r.id}">
                도움돼요 ${count}
              </button>
            </div>
          </article>
        `;
      })
      .join('');

    container.querySelectorAll('[data-helpful-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-helpful-id');
        if (state.votedReviews.has(id)) {
          state.votedReviews.delete(id);
        } else {
          state.votedReviews.add(id);
        }
        renderReviews();
      });
    });

    container.querySelectorAll('[data-lightbox-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const rev = REVIEWS.find((x) => x.id === btn.getAttribute('data-lightbox-id'));
        if (!rev || !rev.photo) return;
        const imgEl = document.getElementById('lightbox-img');
        const reviewerEl = document.getElementById('lightbox-reviewer');
        const capEl = document.getElementById('lightbox-caption');
        if (imgEl) imgEl.src = rev.photo;
        if (reviewerEl) reviewerEl.textContent = `${rev.author} (${rev.verified})`;
        if (capEl) capEl.textContent = rev.photoCaption || rev.body;
        openModal('review-lightbox-modal');
      });
    });
  }

  function initReviewControls() {
    document.querySelectorAll('.review-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.review-tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.reviewFilter = btn.getAttribute('data-filter') || 'all';
        renderReviews();
      });
    });

    const sortSelect = document.getElementById('review-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        state.reviewSort = sortSelect.value;
        renderReviews();
      });
    }

    renderReviews();
  }

  /* ==========================================================================
     11. Smooth Grid-Row FAQ Accordion
     ========================================================================== */
  function initFaqAccordion() {
    const faqContainer = document.getElementById('faq-accordion');
    if (!faqContainer) return;

    faqContainer.querySelectorAll('.faq-question-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('open');

        faqContainer.querySelectorAll('.faq-item').forEach((other) => {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ==========================================================================
     12. Dual Lead-Capture & B2B Inquiry Forms (With Sliding Tab Glider)
     ========================================================================== */
  function switchFormTab(tabKey) {
    const isB2B = tabKey === 'b2b';
    const tabsWrap = document.getElementById('form-mode-tabs');
    const btnB2C = document.getElementById('tab-btn-b2c');
    const btnB2B = document.getElementById('tab-btn-b2b');
    const panelB2C = document.getElementById('form-panel-b2c');
    const panelB2B = document.getElementById('form-panel-b2b');

    if (tabsWrap) {
      tabsWrap.setAttribute('data-active-mode', isB2B ? 'b2b' : 'b2c');
    }

    if (btnB2C && btnB2B && panelB2C && panelB2B) {
      btnB2C.classList.toggle('active', !isB2B);
      btnB2C.setAttribute('aria-selected', String(!isB2B));
      btnB2B.classList.toggle('active', isB2B);
      btnB2B.setAttribute('aria-selected', String(isB2B));

      panelB2C.classList.toggle('active', !isB2B);
      panelB2B.classList.toggle('active', isB2B);
    }
  }

  function jumpToConversionForm(tabKey, lineupItem) {
    switchFormTab(tabKey);

    if (lineupItem) {
      if (tabKey === 'b2c') {
        const selectEl = document.getElementById('b2c-product');
        if (selectEl) {
          selectEl.value = lineupItem.selectValue;
        }
      } else {
        const msgEl = document.getElementById('b2b-message');
        if (msgEl && !msgEl.value.trim()) {
          msgEl.value = `[관심 품목: ${lineupItem.title}] 시음 샘플 및 B2B 공급 단가 제안서를 요청합니다.`;
        }
      }
    }

    const section = document.getElementById('conversion-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function formatPhoneNumber(raw) {
    const digits = raw.replace(/\D/g, '').slice(0, 11);
    if (digits.length < 4) return digits;
    if (digits.length < 8) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }

  function updateQuotaDisplay() {
    const cardEl = document.getElementById('quota-status-card');
    const textEl = document.getElementById('quota-remaining-text');
    const fillEl = document.getElementById('quota-bar-fill');
    const usedPct = Math.min(99, Math.round(((state.quotaTotal - state.quotaRemaining) / state.quotaTotal) * 100));

    if (cardEl) cardEl.classList.add('quota-animated');
    if (textEl) {
      textEl.textContent = `잔여 ${state.quotaRemaining} / ${state.quotaTotal}세트 (${usedPct}% 마감)`;
    }
    if (fillEl) {
      fillEl.style.width = `${usedPct}%`;
    }
  }

  function generateReferenceCode(prefix) {
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-2603-${rand}`;
  }

  function showFormError(el, message) {
    if (!el) return;
    el.textContent = message;
    el.classList.add('visible');
  }

  function clearFormError(el) {
    if (!el) return;
    el.textContent = '';
    el.classList.remove('visible');
  }

  function initLeadForms() {
    document.querySelectorAll('[data-form-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        switchFormTab(btn.getAttribute('data-form-tab'));
      });
    });

    document.querySelectorAll('[data-jump-form]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        jumpToConversionForm(btn.getAttribute('data-jump-form') || 'b2c');
      });
    });

    ['b2c-phone', 'b2b-phone'].forEach((id) => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          input.value = formatPhoneNumber(input.value);
        });
      }
    });

    const chipWrap = document.getElementById('b2c-concern-chips');
    if (chipWrap) {
      chipWrap.querySelectorAll('.concern-chip-btn').forEach((chip) => {
        chip.addEventListener('click', () => {
          chipWrap.querySelectorAll('.concern-chip-btn').forEach((c) => c.classList.remove('selected'));
          chip.classList.add('selected');
          state.selectedConcern = chip.getAttribute('data-concern') || '';
        });
      });
    }

    // B2C Submit
    const formB2C = document.getElementById('form-panel-b2c');
    const errB2C = document.getElementById('b2c-error-msg');
    if (formB2C) {
      formB2C.addEventListener('submit', (e) => {
        e.preventDefault();
        clearFormError(errB2C);

        const name = (document.getElementById('b2c-name')?.value || '').trim();
        const phone = (document.getElementById('b2c-phone')?.value || '').trim();
        const product = document.getElementById('b2c-product')?.value || '';
        const privacy = document.getElementById('b2c-privacy')?.checked;

        if (name.length < 2) {
          showFormError(errB2C, '성함을 2자 이상 정확히 입력해 주세요.');
          document.getElementById('b2c-name')?.focus();
          return;
        }
        if (phone.replace(/\D/g, '').length < 10) {
          showFormError(errB2C, '알림톡을 수신하실 휴대폰 번호를 정확히 입력해 주세요.');
          document.getElementById('b2c-phone')?.focus();
          return;
        }
        if (!privacy) {
          showFormError(errB2C, '샘플키트 및 혜택 안내를 위해 개인정보 수집·이용에 동의해 주세요.');
          return;
        }

        if (state.quotaRemaining > 1) {
          state.quotaRemaining -= 1;
          updateQuotaDisplay();
        }

        const refCode = generateReferenceCode('NL');
        const titleEl = document.getElementById('lead-success-title');
        const subEl = document.getElementById('lead-success-sub');
        const summaryEl = document.getElementById('lead-success-summary');

        if (titleEl) titleEl.textContent = `${name}님, 샘플키트 & 얼리버드 신청 완료`;
        if (subEl) {
          subEl.textContent = '입력하신 연락처로 무료 2포 샘플키트 배송지 입력 알림톡과 30% 시크릿 프리오더 코드가 즉시 발송됩니다.';
        }
        if (summaryEl) {
          summaryEl.innerHTML = `
            <div class="modal-summary-line"><span>접수 번호</span><strong>${refCode}</strong></div>
            <div class="modal-summary-line"><span>수신 연락처</span><strong>${phone}</strong></div>
            <div class="modal-summary-line"><span>관심 라인업</span><strong>${product}</strong></div>
            <div class="modal-summary-line"><span>수면 고민</span><strong>${state.selectedConcern}</strong></div>
          `;
        }

        formB2C.reset();
        const privacyBox = document.getElementById('b2c-privacy');
        if (privacyBox) privacyBox.checked = true;
        openModal('lead-success-modal');
      });
    }

    // B2B Submit
    const formB2B = document.getElementById('form-panel-b2b');
    const errB2B = document.getElementById('b2b-error-msg');
    if (formB2B) {
      formB2B.addEventListener('submit', (e) => {
        e.preventDefault();
        clearFormError(errB2B);

        const company = (document.getElementById('b2b-company')?.value || '').trim();
        const manager = (document.getElementById('b2b-manager')?.value || '').trim();
        const phone = (document.getElementById('b2b-phone')?.value || '').trim();
        const email = (document.getElementById('b2b-email')?.value || '').trim();
        const partnerType = document.getElementById('b2b-type')?.value || '';
        const privacy = document.getElementById('b2b-privacy')?.checked;

        if (company.length < 2) {
          showFormError(errB2B, '상호·약국명 또는 기업명을 입력해 주세요.');
          document.getElementById('b2b-company')?.focus();
          return;
        }
        if (manager.length < 2) {
          showFormError(errB2B, '담당자 성함 및 직함을 입력해 주세요.');
          document.getElementById('b2b-manager')?.focus();
          return;
        }
        if (phone.replace(/\D/g, '').length < 9) {
          showFormError(errB2B, '회신 받으실 연락처를 정확히 입력해 주세요.');
          document.getElementById('b2b-phone')?.focus();
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          showFormError(errB2B, '제안서를 수신하실 이메일 주소를 정확히 입력해 주세요.');
          document.getElementById('b2b-email')?.focus();
          return;
        }
        if (!privacy) {
          showFormError(errB2B, 'B2B 상담 및 제안서 발송을 위한 정보 수집에 동의해 주세요.');
          return;
        }

        const refCode = generateReferenceCode('B2B');
        const titleEl = document.getElementById('lead-success-title');
        const subEl = document.getElementById('lead-success-sub');
        const summaryEl = document.getElementById('lead-success-summary');

        if (titleEl) titleEl.textContent = `${company} 제휴·납품 문의 접수 완료`;
        if (subEl) {
          subEl.textContent = '전담 B2B 파트너십 매니저가 영업일 기준 24시간 이내에 공급 단가표 및 본품 시음 박스 발송 일정을 안내해 드립니다.';
        }
        if (summaryEl) {
          summaryEl.innerHTML = `
            <div class="modal-summary-line"><span>제휴 접수번호</span><strong>${refCode}</strong></div>
            <div class="modal-summary-line"><span>담당자</span><strong>${manager} (${phone})</strong></div>
            <div class="modal-summary-line"><span>수신 이메일</span><strong>${email}</strong></div>
            <div class="modal-summary-line"><span>희망 분야</span><strong>${partnerType}</strong></div>
          `;
        }

        formB2B.reset();
        const privacyBox = document.getElementById('b2b-privacy');
        if (privacyBox) privacyBox.checked = true;
        openModal('lead-success-modal');
      });
    }
  }

  /* ==========================================================================
     Bootstrap
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initModalListeners();
    initLineupControls();
    initReviewControls();
    initFaqAccordion();
    initLeadForms();

    // Round 4 Editorial Motion & Interactive Section Controllers
    initScrollReveal();
    initScrollProgressAndSpy();
    initHeroVideoController();
    initCountUpAndGauges();
    initPhilosophyPillars();
    initScienceMechanismExplorer();
    initComparisonSpotlight();
    initRoutineSynergyTimeline();
  });
})();
