/**
 * NUIT LAB (뉘이랩) — Official Brand Homepage & Dual DB Lead-Gen Landing System
 * Zero E-Commerce Cart Clutter · Focused on Brand Authority, Formulation Briefing & Lead Capture
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Formulation Lineup Data (4 Bespoke Studio Visuals)
     ========================================================================== */
  const LINEUP_ITEMS = [
    {
      id: 'nuit-original',
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
     2. Tester & Partner Review Data
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
     3. State
     ========================================================================== */
  const state = {
    reviewFilter: 'all',
    reviewSort: 'helpful',
    votedReviews: new Set(),
    activeSpecItem: null,
    selectedConcern: '잠들기까지 뒤척임 완화',
    quotaRemaining: 17,
    quotaTotal: 100
  };

  /* ==========================================================================
     4. Countdown Timer
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

  /* ==========================================================================
     5. Modal Helpers
     ========================================================================== */
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
     6. Lineup Showcase & Spec Briefing Modal
     ========================================================================== */
  function renderLineup() {
    const container = document.getElementById('lineup-grid-container');
    if (!container) return;

    container.innerHTML = LINEUP_ITEMS.map((item) => {
      const badgeCls = item.badgeClass ? `lineup-badge ${item.badgeClass}` : 'lineup-badge';
      const specsHtml = item.specShort
        .map((line) => {
          const [label, rest] = line.split(': ');
          return `<span><strong>${label}:</strong> ${rest}</span>`;
        })
        .join('');

      return `
        <article class="lineup-card" data-lineup-id="${item.id}">
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
    }).join('');

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
     7. Reviews Filter, Sort, Helpful Vote & Photo Lightbox
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
      .map((r) => {
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
          <article class="review-card">
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
     8. FAQ Accordion
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
     9. Dual Lead-Capture & B2B Inquiry Forms
     ========================================================================== */
  function switchFormTab(tabKey) {
    const isB2B = tabKey === 'b2b';
    const btnB2C = document.getElementById('tab-btn-b2c');
    const btnB2B = document.getElementById('tab-btn-b2b');
    const panelB2C = document.getElementById('form-panel-b2c');
    const panelB2B = document.getElementById('form-panel-b2b');

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
    const textEl = document.getElementById('quota-remaining-text');
    const fillEl = document.getElementById('quota-bar-fill');
    const usedPct = Math.min(99, Math.round(((state.quotaTotal - state.quotaRemaining) / state.quotaTotal) * 100));

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
     10. TimeSaver Outsourcing Modal & Threads Clean Mode
     ========================================================================== */
  function initPortfolioControls() {
    const inquiryBtn = document.getElementById('open-ts-inquiry-btn');
    const enableCleanBtn = document.getElementById('enable-clean-mode-btn');
    const disableCleanBtn = document.getElementById('disable-clean-mode-btn');

    if (inquiryBtn) {
      inquiryBtn.addEventListener('click', () => openModal('inquiry-modal'));
    }

    const setCleanMode = (enabled) => {
      document.body.classList.toggle('clean-mode', enabled);
    };

    if (enableCleanBtn) {
      enableCleanBtn.addEventListener('click', () => setCleanMode(true));
    }
    if (disableCleanBtn) {
      disableCleanBtn.addEventListener('click', () => setCleanMode(false));
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('clean') === '1') {
      setCleanMode(true);
    }

    document.addEventListener('keydown', (e) => {
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }
      if (e.key === 'c' || e.key === 'C') {
        setCleanMode(!document.body.classList.contains('clean-mode'));
      }
    });
  }

  /* ==========================================================================
     Bootstrap
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initModalListeners();
    renderLineup();
    initReviewControls();
    initFaqAccordion();
    initLeadForms();
    initPortfolioControls();
  });
})();
