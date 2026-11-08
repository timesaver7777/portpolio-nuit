/* ==========================================================================
   NUIT LAB (뉘이랩) — Official D2C Brand Mall & High-Conversion PDP (app.js)
   ========================================================================== */

(function () {
  'use strict';

  const FREE_SHIPPING_THRESHOLD = 50000;
  const BASE_SHIPPING_FEE = 3000;
  const WELCOME_COUPON_AMOUNT = 5000;

  /* 4-Product Official Mall Lineup */
  const STORE_PRODUCTS = [
    {
      id: 'prod-nightshot-1box',
      pdpKey: 'nightshot',
      bundleTarget: '1box',
      categories: ['all', 'nightshot'],
      badge: 'BEST · 누적 1위',
      badgeTone: 'burgundy',
      categoryLabel: 'LIPOSOMAL NIGHT AMPOULE',
      title: '리포좀 마그네슘 & 몽모랑시 타트체리 나이트 샷 (1박스 14포)',
      subtitle: '세포막 친화형 인지질 리포좀 마그네슘 150mg과 미국산 몽모랑시 타트체리 농축액 5,000mg을 담은 15kcal 무설탕 액상 스틱.',
      specHtml: '<span>용량 <strong>1박스 280g (20g × 14포)</strong></span><span>핵심성분 <strong>리포좀 마그네슘 150mg · 타트체리 5,000mg</strong></span>',
      originPrice: 42000,
      salePrice: 36900,
      discountPct: 12,
      rating: '4.9',
      reviewCount: '1,428',
      popularityRank: 1,
      thumb: 'assets/images/nuit-hero-box.jpg',
      caption: '1박스 14포 (20g × 14 액상 스틱 앰플)'
    },
    {
      id: 'prod-gift-3box',
      pdpKey: 'gift3box',
      bundleTarget: '3box',
      categories: ['all', 'nightshot', 'trial'],
      badge: '32%↓ 인기세트 · 무료배송',
      badgeTone: 'burgundy',
      categoryLabel: '6-WEEK RECOVERY GIFT SET',
      title: '6주 집중 회복 3박스 + 본품 4포 증정 스페셜 기프트 세트',
      subtitle: '구매 고객 74%가 선택한 가장 만족도 높은 6주 루틴 구성. 본품 4포 추가 증정과 기프트 메시지 카드가 동봉됩니다.',
      specHtml: '<span>용량 <strong>총 46포 (3박스 42포 + 추가 4포)</strong></span><span>혜택 <strong>32% 할인 + 조건 없이 무료배송</strong></span>',
      originPrice: 126000,
      salePrice: 85500,
      discountPct: 32,
      rating: '4.9',
      reviewCount: '964',
      popularityRank: 2,
      thumb: 'assets/images/nuit-gift-bundle-3box.jpg',
      caption: '구매 고객 74% 선택 · 3박스 + 본품 4포 기프트 에디션'
    },
    {
      id: 'prod-chamomile-1box',
      pdpKey: 'chamomile',
      bundleTarget: '1box',
      categories: ['all', 'relax'],
      badge: 'NEW · 카페인 제로',
      badgeTone: 'dark',
      categoryLabel: 'BOTANICAL RELAX AMPOULE',
      title: 'L-테아닌 & 크로아티아 캐모마일 딥 릴렉스 허브 앰플 (1박스 14포)',
      subtitle: '오후부터 저녁까지 이어지는 긴장과 스트레스를 부드럽게 정돈하는 녹차 유래 L-테아닌 250mg & 캐모마일 농축 액상.',
      specHtml: '<span>용량 <strong>1박스 280g (20g × 14포)</strong></span><span>핵심성분 <strong>L-테아닌 250mg · 크로아티아산 캐모마일 추출물</strong></span>',
      originPrice: 44000,
      salePrice: 38500,
      discountPct: 13,
      rating: '4.8',
      reviewCount: '312',
      popularityRank: 3,
      thumb: 'assets/images/nuit-chamomile-box.jpg',
      caption: 'L-테아닌 250mg & 크로아티아산 캐모마일 골든 허브 앰플'
    },
    {
      id: 'prod-trial-pouch',
      pdpKey: 'trial',
      bundleTarget: '1box',
      categories: ['all', 'trial'],
      badge: 'TRIAL · 입문/출장용',
      badgeTone: 'dark',
      categoryLabel: '5-NIGHT STARTER KIT',
      title: '나이트 샷 트라이얼 5포 & 코튼 리넨 트래블 파우치 키트',
      subtitle: '본품 구매 전 맛과 목넘김을 먼저 경험해 보거나, 출장·여행지 침실에 가볍게 챙겨 떠나는 5일 나이트 스타터 키트.',
      specHtml: '<span>구성 <strong>나이트 샷 본품 5포 + 전용 리넨 드로우스트링 파우치</strong></span><span>용도 <strong>첫 구매 체험 및 여행·선물용</strong></span>',
      originPrice: 16500,
      salePrice: 13900,
      discountPct: 16,
      rating: '4.9',
      reviewCount: '520',
      popularityRank: 4,
      thumb: 'assets/images/nuit-trial-pouch.jpg',
      caption: '나이트 샷 본품 5포 & 워시드 코튼 리넨 트래블 파우치'
    }
  ];

  const BUNDLES = {
    '1box': {
      id: '1box',
      name: '1박스 · 2주 체험 구성',
      shortName: '1박스 (14포)',
      sticks: 14,
      originPrice: 42000,
      salePrice: 36900,
      thumb: 'assets/images/nuit-hero-box.jpg'
    },
    '3box': {
      id: '3box',
      name: '3박스 + 본품 4포 추가증정',
      shortName: '3박스 + 4포 증정 [BEST]',
      sticks: 46,
      originPrice: 126000,
      salePrice: 85500,
      thumb: 'assets/images/nuit-gift-bundle-3box.jpg'
    },
    '6box': {
      id: '6box',
      name: '6박스 집중 슬립 루틴',
      shortName: '6박스 집중 루틴 (84포)',
      sticks: 84,
      originPrice: 252000,
      salePrice: 138600,
      thumb: 'assets/images/nuit-hero-box.jpg'
    }
  };

  const UPSELL_ITEM = {
    key: 'upsell-trial-5',
    name: '나이트 샷 트라이얼 5포 파우치',
    meta: '장바구니 전용 16% 특가 구성',
    unitPrice: 13900,
    qty: 1,
    thumb: 'assets/images/nuit-trial-pouch.jpg',
    isUpsell: true
  };

  const REVIEWS_DATA = [
    {
      id: 'rev-1',
      category: 'repurchase',
      badgeLabel: '3회 재구매',
      title: '알약 마그네슘 먹고 속 쓰렸던 분들 무조건 이걸로 바꾸세요',
      body: '원래 해외 직구 마그네슘 큰 알약을 먹었는데 밤에 먹고 누우면 명치가 답답하고 다음날 배가 살살 아팠거든요. 뉘이랩은 액상이라 물 없이 호로록 마시면 끝이고 속이 정말 편안해요. 1박스 먹자마자 눈 밑 떨림이랑 밤에 자다 깨는 게 확 줄어서 이번에 3박스 정기구독 걸었습니다.',
      author: '김*연 님 · 30대 직장인',
      option: '3박스 + 본품 4포 증정',
      date: '2026.11.06',
      dateRank: 8,
      helpful: 142,
      photo: 'assets/images/nuit-review-desk.jpg'
    },
    {
      id: 'rev-2',
      category: 'sleep',
      badgeLabel: '수면·컨디션',
      title: '새벽 3시마다 깨서 핸드폰 보던 습관이 사라졌어요',
      body: '잠드는 데도 오래 걸리지만 중간에 한 번 깨면 다시 못 자서 출근길마다 지옥이었는데, 밤 11시에 조명 어둡게 해놓고 한 포 마시면 몸에 긴장이 스르르 풀리는 느낌이에요. 약처럼 강제로 기절시키는 느낌이 아니라 아침에 알람 울릴 때 머리가 맑아서 놀랐습니다.',
      author: '박*현 님 · IT 기획자',
      option: '3박스 + 본품 4포 증정',
      date: '2026.11.05',
      dateRank: 7,
      helpful: 118,
      photo: 'assets/images/nuit-night-ritual.jpg'
    },
    {
      id: 'rev-3',
      category: 'taste',
      badgeLabel: '맛·목넘김',
      title: '설탕 0g인데도 떫지 않고 고급스러운 루비 타트체리 맛!',
      body: '시중 타트체리 주스는 액상과당 덩어리라 자기 전에 마시기 찝찝했는데 이건 당류 0g에 15kcal라 양치 전에 부담 없이 마셔요. 탄산수 조금에 얼음 띄워서 마시면 호텔 라운지 논알콜 칵테일 같아서 저녁 맥주 생각이 싹 사라졌습니다.',
      author: '이*서 님 · 필라테스 강사',
      option: '6박스 집중 슬립 루틴',
      date: '2026.11.04',
      dateRank: 6,
      helpful: 96,
      photo: 'assets/images/nuit-review-drink.jpg'
    },
    {
      id: 'rev-4',
      category: 'repurchase',
      badgeLabel: '2회 재구매',
      title: '남편이랑 같이 먹다가 금방 동나서 6박스로 쟁였습니다',
      body: '처음엔 반신반의하며 1박스만 샀는데 야근 잦은 남편이 뺏어 먹더니 자기가 더 찾네요. 침대 협탁에 두고 둘이 나란히 한 포씩 뜯어 마시는 게 하루 마무리 루틴이 됐어요. 패키지 디자인도 너무 세련돼서 집들이 선물로도 돌렸습니다.',
      author: '정*은 님 · 40대 맞벌이',
      option: '6박스 집중 슬립 루틴',
      date: '2026.11.03',
      dateRank: 5,
      helpful: 84,
      photo: 'assets/images/nuit-hero-box.jpg'
    },
    {
      id: 'rev-5',
      category: 'sleep',
      badgeLabel: '수면·컨디션',
      title: '카페인 예민러인데 저녁 운동 후 근육 이완용으로 최고예요',
      body: '저녁 웨이트 하고 오면 교감신경이 흥분돼서 몸은 피곤한데 눈만 말똥말똥했거든요. 샤워 후 나이트 샷 한 포 마시면 뭉친 승모근이랑 종아리 피로도 덜하고 푹 잔 느낌으로 일어납니다.',
      author: '최*우 님 · 30대 디자이너',
      option: '3박스 + 본품 4포 증정',
      date: '2026.11.01',
      dateRank: 4,
      helpful: 69,
      photo: null
    },
    {
      id: 'rev-6',
      category: 'repurchase',
      badgeLabel: '4회 재구매',
      title: '출장 갈 때 파우치에 쏙 챙겨 다니는 필수템입니다',
      body: '호텔 침대만 바뀌면 잠을 설쳐서 해외 출장 때마다 고생했는데 스틱 형태라 기내나 호텔에 챙겨가기 너무 편해요. 리포좀 액상이라 확실히 일반 정제보다 체감이 빠릅니다.',
      author: '한*민 님 · 외국계 컨설턴트',
      option: '3박스 + 본품 4포 증정 (정기구독)',
      date: '2026.10.29',
      dateRank: 3,
      helpful: 61,
      photo: 'assets/images/nuit-liquid-texture.jpg'
    },
    {
      id: 'rev-7',
      category: 'taste',
      badgeLabel: '맛·목넘김',
      title: '비릿한 미네랄 끝맛이 전혀 없어서 신기해요',
      body: '액상 마그네슘 제품 잘못 사면 쇠맛이나 떫은맛이 올라오는데, 뉘이랩은 미국산 몽모랑시 타트체리 농축액이 진하게 잡아줘서 마지막 한 방울까지 깔끔하고 맛있습니다.',
      author: '윤*아 님 · 20대 대학원생',
      option: '1박스 · 2주 체험 구성',
      date: '2026.10.27',
      dateRank: 2,
      helpful: 53,
      photo: null
    },
    {
      id: 'rev-8',
      category: 'sleep',
      badgeLabel: '수면·컨디션',
      title: '교대근무 간호사인데 낮밤 바뀔 때 큰 도움 받고 있어요',
      body: '나이트 근무 끝나고 집에 와서 암막커튼 치고 한 포 마십니다. 속 부대낌이 전혀 없고 자고 일어났을 때 입 마름이나 멍한 느낌 없이 개운하게 컨디션이 올라와요.',
      author: '송*지 님 · 30대 간호사',
      option: '3박스 + 본품 4포 증정',
      date: '2026.10.24',
      dateRank: 1,
      helpful: 77,
      photo: null
    }
  ];

  /* Application State */
  const state = {
    currentView: 'home', // 'home' | 'shop' | 'detail' | 'subscription' | 'story'
    activePdpKey: 'nightshot',
    selectedBundleId: '3box',
    isSubscription: false,
    simTier: '3box',
    shopCategory: 'all',
    shopSort: 'popular',
    couponClaimed: false,
    cart: [],
    reviewFilter: 'all',
    reviewSort: 'best',
    votedReviews: new Set(),
    cleanMode: sessionStorage.getItem('nuit_clean_mode') === '1'
  };

  /* Helpers */
  function formatKRW(num) {
    return num.toLocaleString('ko-KR') + '원';
  }

  function calcBundlePrice(bundleId, isSub) {
    const b = BUNDLES[bundleId];
    const unitPrice = isSub ? Math.round(b.salePrice * 0.9) : b.salePrice;
    const discountPct = Math.round((1 - unitPrice / b.originPrice) * 100);
    const perStick = Math.round(unitPrice / b.sticks);
    const totalSaved = b.originPrice - unitPrice;
    return {
      unitPrice,
      discountPct,
      perStick,
      totalSaved,
      isFreeShipping: isSub || unitPrice >= FREE_SHIPPING_THRESHOLD
    };
  }

  /* 1. Multi-View Official Mall Navigation */
  function switchView(viewName, options = {}) {
    const validViews = ['home', 'shop', 'detail', 'subscription', 'story'];
    const target = validViews.includes(viewName) ? viewName : 'home';
    state.currentView = target;

    document.querySelectorAll('.mall-view').forEach((el) => {
      el.classList.toggle('active-view', el.id === `view-${target}`);
    });

    document.querySelectorAll('[data-nav-view]').forEach((btn) => {
      if (btn.classList.contains('gnb-tab-btn') || btn.classList.contains('mobile-gnb-btn')) {
        btn.classList.toggle('active', btn.getAttribute('data-nav-view') === target);
      }
    });

    if (options.scrollToId) {
      setTimeout(() => {
        const anchor = document.getElementById(options.scrollToId);
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else if (!options.preserveScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function openProductDetail(pdpKey = 'nightshot', bundleId = null) {
    const prod = STORE_PRODUCTS.find((p) => p.pdpKey === pdpKey) || STORE_PRODUCTS[0];
    state.activePdpKey = prod.pdpKey;
    state.selectedBundleId = bundleId || prod.bundleTarget || '3box';

    // Update PDP Breadcrumb & Header Metadata
    document.getElementById('pdp-breadcrumb-name').textContent = prod.title;
    document.getElementById('pdp-category-kicker').textContent = prod.categoryLabel;
    document.getElementById('main-product-title').innerHTML = prod.title;
    document.getElementById('main-product-subtitle').textContent = prod.subtitle;
    document.getElementById('main-product-spec').innerHTML = prod.specHtml;

    // Update Main Gallery Image
    const mainImg = document.getElementById('main-gallery-image');
    const mainCap = document.getElementById('main-gallery-caption');
    mainImg.src = prod.thumb;
    mainCap.textContent = prod.caption;

    document.querySelectorAll('.pdp-switch-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.getAttribute('data-pdp-product') === prod.pdpKey);
    });

    renderSelectionUI();
    switchView('detail');
  }

  /* 2. Render Product Cards for HOME & SHOP */
  function createProductCardHTML(prod) {
    const badgeClass = prod.badgeTone === 'burgundy' ? 'mall-card-badge burgundy' : 'mall-card-badge';
    return `
      <article class="mall-product-card" data-product-card="${prod.id}">
        <div>
          <div class="mall-card-thumb-wrap" data-card-open-pdp="${prod.pdpKey}" data-card-bundle="${prod.bundleTarget}">
            <img src="${prod.thumb}" alt="${prod.title}" loading="lazy" />
            <span class="${badgeClass}">${prod.badge}</span>
          </div>
          <div class="mall-card-body">
            <div>
              <div class="mall-card-category">${prod.categoryLabel}</div>
              <h3 class="mall-card-title" data-card-open-pdp="${prod.pdpKey}" data-card-bundle="${prod.bundleTarget}">
                ${prod.title}
              </h3>
              <p class="mall-card-desc">${prod.subtitle}</p>
            </div>
            <div class="mall-card-price-box">
              <div class="mall-card-origin">${formatKRW(prod.originPrice)}</div>
              <div class="mall-card-price-row">
                <div>
                  <span class="mall-card-discount">${prod.discountPct}%</span>
                  <span class="mall-card-final">${formatKRW(prod.salePrice)}</span>
                </div>
                <span class="mall-card-rating"><span class="star-icons">★</span> ${prod.rating} (${prod.reviewCount})</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mall-card-actions">
          <button
            type="button"
            class="btn-card-detail"
            data-card-open-pdp="${prod.pdpKey}"
            data-card-bundle="${prod.bundleTarget}"
          >
            상세보기
          </button>
          <button
            type="button"
            class="btn-card-cart"
            data-card-add-cart="${prod.id}"
          >
            장바구니 담기
          </button>
        </div>
      </article>
    `;
  }

  function bindCatalogCardEvents(container) {
    if (!container) return;
    container.querySelectorAll('[data-card-open-pdp]').forEach((el) => {
      el.addEventListener('click', () => {
        const pdpKey = el.getAttribute('data-card-open-pdp');
        const bundleTarget = el.getAttribute('data-card-bundle');
        openProductDetail(pdpKey, bundleTarget);
      });
    });

    container.querySelectorAll('[data-card-add-cart]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-card-add-cart');
        addStoreProductToCart(prodId);
        openCartDrawer();
      });
    });
  }

  function renderHomeAndShopCatalogs() {
    // 1) Home Grid (all 4 products)
    const homeGrid = document.getElementById('home-product-grid');
    if (homeGrid) {
      homeGrid.innerHTML = STORE_PRODUCTS.map(createProductCardHTML).join('');
      bindCatalogCardEvents(homeGrid);
    }

    // 2) Shop Grid (filtered & sorted)
    const shopGrid = document.getElementById('shop-product-grid');
    if (shopGrid) {
      let filtered = STORE_PRODUCTS.filter((p) => p.categories.includes(state.shopCategory));
      if (state.shopSort === 'discount') {
        filtered = [...filtered].sort((a, b) => b.discountPct - a.discountPct);
      } else if (state.shopSort === 'price-asc') {
        filtered = [...filtered].sort((a, b) => a.salePrice - b.salePrice);
      } else {
        filtered = [...filtered].sort((a, b) => a.popularityRank - b.popularityRank);
      }
      shopGrid.innerHTML = filtered.map(createProductCardHTML).join('');
      bindCatalogCardEvents(shopGrid);
    }
  }

  /* 3. Dispatch Countdown Timer */
  function startDispatchTimer() {
    const timerEl = document.getElementById('dispatch-countdown');
    if (!timerEl) return;

    function tick() {
      const now = new Date();
      const target = new Date(now);
      target.setHours(14, 0, 0, 0);
      if (now >= target) {
        target.setDate(target.getDate() + 1);
      }
      const diffSec = Math.max(0, Math.floor((target - now) / 1000));
      const h = String(Math.floor(diffSec / 3600)).padStart(2, '0');
      const m = String(Math.floor((diffSec % 3600) / 60)).padStart(2, '0');
      const s = String(diffSec % 60).padStart(2, '0');
      timerEl.textContent = `출고 마감까지 ${h}:${m}:${s}`;
    }

    tick();
    setInterval(tick, 1000);
  }

  /* 4. Gallery Switcher */
  function initGallery() {
    const mainImg = document.getElementById('main-gallery-image');
    const mainCap = document.getElementById('main-gallery-caption');
    const thumbBtns = document.querySelectorAll('.thumb-btn');

    thumbBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-src');
        const cap = btn.getAttribute('data-caption');
        thumbBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        mainImg.style.opacity = '0.45';
        setTimeout(() => {
          mainImg.src = src;
          mainCap.textContent = cap;
          mainImg.style.opacity = '1';
        }, 110);
      });
    });
  }

  /* 5. Sync Buy Box + Bottom Sheet + Mobile Sticky Bar */
  function renderSelectionUI() {
    const isSub = state.isSubscription;
    const currentBundle = BUNDLES[state.selectedBundleId];
    const currentCalc = calcBundlePrice(state.selectedBundleId, isSub);

    Object.keys(BUNDLES).forEach((id) => {
      const c = calcBundlePrice(id, isSub);

      const pctEl = document.querySelector(`[data-price-pct="${id}"]`);
      const valEl = document.querySelector(`[data-price-val="${id}"]`);
      const stickEl = document.querySelector(`[data-per-stick="${id}"]`);
      if (pctEl) pctEl.textContent = `${c.discountPct}%↓`;
      if (valEl) valEl.textContent = formatKRW(c.unitPrice);
      if (stickEl) {
        const shipTxt = c.isFreeShipping ? '무료배송' : '배송비 3,000원';
        stickEl.textContent = `1포당 ${c.perStick.toLocaleString('ko-KR')}원 · ${shipTxt}`;
      }

      const sheetPctEl = document.querySelector(`[data-sheet-pct="${id}"]`);
      const sheetPriceEl = document.querySelector(`[data-sheet-price="${id}"]`);
      if (sheetPctEl) sheetPctEl.textContent = `${c.discountPct}%↓`;
      if (sheetPriceEl) sheetPriceEl.textContent = formatKRW(c.unitPrice);

      const cardEl = document.querySelector(`.bundle-card[data-bundle-id="${id}"]`);
      if (cardEl) {
        const active = id === state.selectedBundleId;
        cardEl.classList.toggle('selected', active);
        cardEl.setAttribute('aria-checked', String(active));
      }

      const sheetBtn = document.querySelector(`.sheet-option-btn[data-sheet-bundle="${id}"]`);
      if (sheetBtn) {
        sheetBtn.classList.toggle('selected', id === state.selectedBundleId);
      }
    });

    // Update Hero Price Display
    document.getElementById('hero-discount-pct').textContent = `${currentCalc.discountPct}%`;
    document.getElementById('hero-final-price').textContent = formatKRW(currentCalc.unitPrice);
    document.getElementById('hero-origin-price').textContent = formatKRW(currentBundle.originPrice);
    document.getElementById('hero-per-stick').textContent = `1포당 ${currentCalc.perStick.toLocaleString('ko-KR')}원꼴`;

    const shippingInfoEl = document.getElementById('buybox-shipping-text');
    if (currentCalc.isFreeShipping) {
      shippingInfoEl.innerHTML = '<strong>무료배송</strong> (현재 선택 구성 무료배송 적용)';
    } else {
      const diff = FREE_SHIPPING_THRESHOLD - currentCalc.unitPrice;
      shippingInfoEl.innerHTML = `배송비 3,000원 (<strong>${formatKRW(diff)}</strong> 추가 시 무료배송)`;
    }

    // Subscription Toggle UI sync
    const subCard = document.getElementById('subscription-card');
    const subBtn = document.getElementById('subscription-toggle-btn');
    const subBadge = document.getElementById('sub-extra-badge');
    const sheetSubCard = document.getElementById('sheet-sub-card');

    subCard.classList.toggle('active', isSub);
    sheetSubCard.classList.toggle('active', isSub);
    subBtn.setAttribute('aria-checked', String(isSub));
    subBadge.textContent = isSub ? '10% 추가할인 적용됨' : '즉시 적용';

    // Total Calculation Box
    const modeLabel = isSub ? '정기구독 추가 10% 적용' : '일회성 구매';
    document.getElementById('selected-summary-name').textContent = `${currentBundle.name} (${modeLabel})`;
    document.getElementById('selected-summary-saving').textContent =
      `정가 대비 총 ${formatKRW(currentCalc.totalSaved)} 절약 · ${currentCalc.isFreeShipping ? '무료배송 혜택' : '5만원 이상 무료배송'}`;
    document.getElementById('selected-total-price').textContent = formatKRW(currentCalc.unitPrice);

    // Mobile Sticky CTA Bar
    document.getElementById('mobile-bar-option-name').textContent =
      `${currentBundle.shortName}${isSub ? ' · 정기구독' : ''}`;
    document.getElementById('mobile-bar-discount').textContent = `${currentCalc.discountPct}%`;
    document.getElementById('mobile-bar-price').textContent = formatKRW(currentCalc.unitPrice);
  }

  /* 6. Subscription Simulator in CLUB NUIT View */
  function renderSubscriptionSimulator() {
    const tier = state.simTier;
    const bundle = BUNDLES[tier];
    const calc = calcBundlePrice(tier, true);

    document.querySelectorAll('[data-sim-tier]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-sim-tier') === tier);
    });

    document.getElementById('sim-result-title').textContent = `${bundle.name} 정기구독 시`;
    document.getElementById('sim-result-price').textContent = `회당 ${formatKRW(calc.unitPrice)} (${calc.discountPct}%↓)`;
    document.getElementById('sim-result-saving').textContent =
      `정가 대비 회당 ${formatKRW(calc.totalSaved)} 절약 · 1포당 ${calc.perStick.toLocaleString('ko-KR')}원꼴`;
  }

  /* 7. Welcome 5,000 KRW Coupon Claim */
  function claimWelcomeCoupon() {
    state.couponClaimed = true;
    const headerBtn = document.getElementById('header-coupon-btn');
    const headerLabel = document.getElementById('header-coupon-label');
    const homeBtn = document.getElementById('home-claim-coupon-btn');

    headerBtn.classList.add('claimed');
    headerLabel.textContent = '✓ 5,000원 쿠폰보유';
    if (homeBtn) {
      homeBtn.classList.add('claimed');
      homeBtn.textContent = '✓ 5,000원 웰컴 쿠폰 발급완료 (장바구니 자동적용)';
    }

    renderCartUI();
    closeAllOverlays();
    backdrop.classList.add('open');
    couponModal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  /* 8. Cart State & Free Shipping Gauge + 1-Click Upsell + Coupon */
  function addCurrentSelectionToCart() {
    const bundle = BUNDLES[state.selectedBundleId];
    const calc = calcBundlePrice(state.selectedBundleId, state.isSubscription);
    const key = `${bundle.id}-${state.isSubscription ? 'sub' : 'once'}`;

    const existing = state.cart.find((item) => item.key === key);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        key,
        name: bundle.name,
        meta: state.isSubscription ? '정기구독 (추가 10% 할인 적용)' : `총 ${bundle.sticks}포 · 일회성 구매`,
        unitPrice: calc.unitPrice,
        qty: 1,
        thumb: bundle.thumb,
        isUpsell: false
      });
    }
    renderCartUI();
  }

  function addStoreProductToCart(prodId) {
    const prod = STORE_PRODUCTS.find((p) => p.id === prodId);
    if (!prod) return;
    const existing = state.cart.find((item) => item.key === prod.id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        key: prod.id,
        name: prod.title,
        meta: `${prod.discountPct}% 공식몰 특가`,
        unitPrice: prod.salePrice,
        qty: 1,
        thumb: prod.thumb,
        isUpsell: prod.id === 'prod-trial-pouch'
      });
    }
    renderCartUI();
  }

  function addUpsellToCart() {
    const existing = state.cart.find((item) => item.key === UPSELL_ITEM.key || item.key === 'prod-trial-pouch');
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({ ...UPSELL_ITEM });
    }
    renderCartUI();
  }

  function updateCartQty(key, delta) {
    const idx = state.cart.findIndex((item) => item.key === key);
    if (idx === -1) return;
    state.cart[idx].qty += delta;
    if (state.cart[idx].qty <= 0) {
      state.cart.splice(idx, 1);
    }
    renderCartUI();
  }

  function getCartTotals() {
    const subtotal = state.cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const hasSubItem = state.cart.some((item) => item.key.endsWith('-sub'));
    const shipping = subtotal === 0 || hasSubItem || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : BASE_SHIPPING_FEE;
    const couponDiscount = subtotal > 0 && state.couponClaimed ? WELCOME_COUPON_AMOUNT : 0;
    return {
      subtotal,
      totalCount,
      shipping,
      couponDiscount,
      finalTotal: Math.max(0, subtotal - couponDiscount + shipping)
    };
  }

  function renderCartUI() {
    const { subtotal, totalCount, shipping, couponDiscount, finalTotal } = getCartTotals();

    document.getElementById('header-cart-count').textContent = String(totalCount);

    const gaugeLabel = document.getElementById('shipping-gauge-label');
    const gaugeBar = document.getElementById('shipping-gauge-bar');
    const upsellModule = document.getElementById('cart-upsell-module');
    const upsellKicker = document.getElementById('upsell-kicker-text');
    const upsellBtn = document.getElementById('cart-upsell-add-btn');
    const hasUpsell = state.cart.some((i) => i.key === UPSELL_ITEM.key || i.key === 'prod-trial-pouch');

    if (subtotal === 0) {
      gaugeLabel.innerHTML = `<strong>50,000원</strong> 이상 구매 시 조건 없이 무료배송!`;
      gaugeBar.style.width = '0%';
      gaugeBar.classList.remove('unlocked');
      upsellKicker.textContent = '장바구니 전용 트라이얼 특가 (16%↓)';
      upsellBtn.textContent = '+ 1클릭 추가';
      upsellModule.style.display = 'block';
    } else if (shipping > 0 && subtotal < FREE_SHIPPING_THRESHOLD) {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(96, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      gaugeLabel.innerHTML = `무료배송까지 <strong>${formatKRW(remaining)}</strong> 남았어요! (현재 배송비 3,000원)`;
      gaugeBar.style.width = `${pct}%`;
      gaugeBar.classList.remove('unlocked');
      upsellKicker.textContent = `⚡ 함께 담으면 배송비 3,000원 즉시 무료 전환!`;
      upsellBtn.textContent = '+ 무료배송 맞추기';
      upsellModule.style.display = 'block';
    } else {
      gaugeLabel.innerHTML = `<strong>무료배송 + 오늘 당일출고</strong> 혜택이 적용되었어요!`;
      gaugeBar.style.width = '100%';
      gaugeBar.classList.add('unlocked');
      if (hasUpsell) {
        upsellKicker.textContent = '✓ 트라이얼 파우치 추가 혜택이 적용되었습니다';
        upsellBtn.textContent = '+ 1개 더 추가';
      } else {
        upsellKicker.textContent = '휴대·선물용 트라이얼 5포 파우치 추가 특가';
        upsellBtn.textContent = '+ 1클릭 추가';
      }
    }

    const listEl = document.getElementById('cart-items-list');
    if (state.cart.length === 0) {
      listEl.innerHTML = `
        <div class="cart-empty-state">
          담긴 상품이 없습니다.<br />나에게 맞는 나이트 샷 루틴 구성을 선택해 보세요.
        </div>
      `;
    } else {
      listEl.innerHTML = state.cart
        .map(
          (item) => `
          <div class="cart-item-card">
            <img src="${item.thumb}" alt="${item.name}" class="cart-item-thumb" />
            <div>
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-sub">${item.meta}</div>
              <div class="cart-item-bottom">
                <div class="qty-control">
                  <button type="button" class="qty-btn" data-qty-key="${item.key}" data-qty-delta="-1" aria-label="수량 감소">−</button>
                  <span class="qty-num">${item.qty}</span>
                  <button type="button" class="qty-btn" data-qty-key="${item.key}" data-qty-delta="1" aria-label="수량 증가">+</button>
                </div>
                <span class="cart-item-price">${formatKRW(item.unitPrice * item.qty)}</span>
              </div>
            </div>
          </div>
        `
        )
        .join('');

      listEl.querySelectorAll('.qty-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-qty-key');
          const delta = Number(btn.getAttribute('data-qty-delta'));
          updateCartQty(key, delta);
        });
      });
    }

    const couponRow = document.getElementById('cart-coupon-row');
    if (couponRow) {
      couponRow.style.display = couponDiscount > 0 ? 'flex' : 'none';
    }

    document.getElementById('cart-subtotal-val').textContent = formatKRW(subtotal);
    document.getElementById('cart-shipping-val').textContent =
      subtotal === 0 ? '0원' : shipping === 0 ? '무료 (0원)' : formatKRW(shipping);
    document.getElementById('cart-final-val').textContent = formatKRW(finalTotal);
  }

  /* 9. Overlay / Sheet / Drawer / Modal Controls */
  const backdrop = document.getElementById('global-backdrop');
  const optionSheet = document.getElementById('mobile-option-sheet');
  const cartDrawer = document.getElementById('cart-drawer');
  const orderModal = document.getElementById('order-complete-modal');
  const couponModal = document.getElementById('coupon-modal');
  const lightboxModal = document.getElementById('review-lightbox-modal');
  const inquiryModal = document.getElementById('inquiry-modal');

  function closeAllOverlays() {
    backdrop.classList.remove('open');
    optionSheet.classList.remove('open');
    cartDrawer.classList.remove('open');
    orderModal.classList.remove('open');
    couponModal.classList.remove('open');
    lightboxModal.classList.remove('open');
    inquiryModal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function openSheet() {
    closeAllOverlays();
    backdrop.classList.add('open');
    optionSheet.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function openCartDrawer() {
    closeAllOverlays();
    backdrop.classList.add('open');
    cartDrawer.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function openOrderCompleteModal() {
    if (state.cart.length === 0) {
      addCurrentSelectionToCart();
    }
    const { finalTotal } = getCartTotals();
    const summaryNames = state.cart.map((i) => `${i.name} × ${i.qty}`).join(', ');
    const randNo = Math.floor(1000 + Math.random() * 9000);

    document.getElementById('receipt-order-no').textContent = `NL-20261108-${randNo}`;
    document.getElementById('receipt-items-summary').textContent = summaryNames;
    document.getElementById('receipt-total-paid').textContent = formatKRW(finalTotal);

    closeAllOverlays();
    backdrop.classList.add('open');
    orderModal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  /* 10. Verified Reviews Filtering, Sorting, Helpful Vote & Lightbox */
  function createReviewCardHTML(rev) {
    const isVoted = state.votedReviews.has(rev.id);
    const count = rev.helpful + (isVoted ? 1 : 0);
    const badgeClass = rev.category === 'repurchase' ? 'repurchase-tag' : 'verified-tag';

    return `
      <article class="review-card">
        <div>
          <div class="review-card-top">
            <div>
              <div class="review-meta-badges">
                <span class="star-icons" aria-label="별점 5점">★★★★★</span>
                <span class="verified-tag">실구매 인증</span>
                <span class="${badgeClass}">${rev.badgeLabel}</span>
              </div>
              <h3 class="review-title">${rev.title}</h3>
            </div>
            ${
              rev.photo
                ? `<button type="button" class="review-thumb-btn" data-lightbox-id="${rev.id}" aria-label="리뷰 사진 크게 보기">
                    <img src="${rev.photo}" alt="${rev.author} 포토 리뷰" loading="lazy" />
                  </button>`
                : ''
            }
          </div>
          <p class="review-body">${rev.body}</p>
        </div>
        <div class="review-card-footer">
          <span>${rev.author} · ${rev.option} · ${rev.date}</span>
          <button type="button" class="helpful-btn ${isVoted ? 'voted' : ''}" data-helpful-id="${rev.id}">
            도움돼요 ${count}
          </button>
        </div>
      </article>
    `;
  }

  function bindReviewEvents(container) {
    if (!container) return;
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
        const id = btn.getAttribute('data-lightbox-id');
        const rev = REVIEWS_DATA.find((r) => r.id === id);
        if (!rev || !rev.photo) return;
        document.getElementById('lightbox-author').textContent = `${rev.author} (${rev.option})`;
        document.getElementById('lightbox-img').src = rev.photo;
        document.getElementById('lightbox-text').textContent = rev.body;
        closeAllOverlays();
        backdrop.classList.add('open');
        lightboxModal.classList.add('open');
        document.body.classList.add('modal-open');
      });
    });
  }

  function renderReviews() {
    // 1) Home Featured Reviews (Top 2 photo reviews)
    const homeRevContainer = document.getElementById('home-featured-reviews');
    if (homeRevContainer) {
      const topTwo = REVIEWS_DATA.slice(0, 2);
      homeRevContainer.innerHTML = topTwo.map(createReviewCardHTML).join('');
      bindReviewEvents(homeRevContainer);
    }

    // 2) Full Filterable Reviews inside PDP
    const container = document.getElementById('review-cards-container');
    let list = REVIEWS_DATA.filter((r) =>
      state.reviewFilter === 'all' ? true : r.category === state.reviewFilter
    );

    if (state.reviewSort === 'best') {
      list = [...list].sort((a, b) => b.helpful - a.helpful);
    } else {
      list = [...list].sort((a, b) => b.dateRank - a.dateRank);
    }

    container.innerHTML = list.map(createReviewCardHTML).join('');
    bindReviewEvents(container);
  }

  /* 11. FAQ Accordion */
  function initFAQ() {
    const items = document.querySelectorAll('#faq-list .faq-item');
    items.forEach((item) => {
      const btn = item.querySelector('.faq-question-btn');
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        items.forEach((other) => {
          other.classList.remove('open');
          other.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* 12. Threads Clean Mode Toggle */
  function applyCleanMode() {
    document.body.classList.toggle('clean-mode', state.cleanMode);
    sessionStorage.setItem('nuit_clean_mode', state.cleanMode ? '1' : '0');
  }

  /* Event Wiring */
  function bindEvents() {
    // Global View Navigation Buttons
    document.querySelectorAll('[data-nav-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-nav-view');
        switchView(targetView);
      });
    });

    // Open PDP Triggers on Home & Story
    document.querySelectorAll('[data-open-pdp]').forEach((el) => {
      el.addEventListener('click', () => {
        const bundleId = el.getAttribute('data-open-pdp') || '3box';
        openProductDetail('nightshot', bundleId);
      });
    });

    // PDP Product Context Switcher Pills
    document.querySelectorAll('[data-pdp-product]').forEach((pill) => {
      pill.addEventListener('click', () => {
        const pdpKey = pill.getAttribute('data-pdp-product');
        openProductDetail(pdpKey);
      });
    });

    // Home "View All 1,428 Reviews" Button -> Jump to PDP Reviews Section
    const goAllReviewsBtn = document.getElementById('home-go-all-reviews-btn');
    if (goAllReviewsBtn) {
      goAllReviewsBtn.addEventListener('click', () => {
        switchView('detail', { scrollToId: 'reviews-section' });
      });
    }

    // Shop Category Tabs & Sort
    document.querySelectorAll('[data-shop-cat]').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('[data-shop-cat]').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        state.shopCategory = tab.getAttribute('data-shop-cat');
        renderHomeAndShopCatalogs();
      });
    });

    const shopSortSelect = document.getElementById('shop-sort-select');
    if (shopSortSelect) {
      shopSortSelect.addEventListener('change', (e) => {
        state.shopSort = e.target.value;
        renderHomeAndShopCatalogs();
      });
    }

    // Subscription Simulator Buttons
    document.querySelectorAll('[data-sim-tier]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.simTier = btn.getAttribute('data-sim-tier');
        renderSubscriptionSimulator();
      });
    });

    const simStartBtn = document.getElementById('sim-start-sub-btn');
    if (simStartBtn) {
      simStartBtn.addEventListener('click', () => {
        state.selectedBundleId = state.simTier;
        state.isSubscription = true;
        renderSelectionUI();
        addCurrentSelectionToCart();
        openCartDrawer();
      });
    }

    // Welcome 5,000 KRW Coupon Buttons
    document.getElementById('header-coupon-btn').addEventListener('click', claimWelcomeCoupon);
    const homeCouponBtn = document.getElementById('home-claim-coupon-btn');
    if (homeCouponBtn) {
      homeCouponBtn.addEventListener('click', claimWelcomeCoupon);
    }
    document.getElementById('close-coupon-modal-btn').addEventListener('click', closeAllOverlays);

    // Desktop Bundle Cards
    document.querySelectorAll('.bundle-card').forEach((card) => {
      const selectCard = () => {
        state.selectedBundleId = card.getAttribute('data-bundle-id');
        renderSelectionUI();
      };
      card.addEventListener('click', selectCard);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCard();
        }
      });
    });

    // Mobile Sheet Bundle Buttons
    document.querySelectorAll('.sheet-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.selectedBundleId = btn.getAttribute('data-sheet-bundle');
        renderSelectionUI();
      });
    });

    // Subscription Toggles (Desktop + Mobile Sheet)
    const toggleSub = () => {
      state.isSubscription = !state.isSubscription;
      renderSelectionUI();
    };
    document.getElementById('subscription-toggle-btn').addEventListener('click', toggleSub);
    document.getElementById('subscription-toggle-btn').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSub();
      }
    });
    document.getElementById('sheet-sub-toggle').addEventListener('click', toggleSub);

    // Buy Box & Sheet CTA Actions
    document.getElementById('buybox-add-cart-btn').addEventListener('click', () => {
      addCurrentSelectionToCart();
      openCartDrawer();
    });

    document.getElementById('buybox-direct-buy-btn').addEventListener('click', () => {
      addCurrentSelectionToCart();
      openCartDrawer();
    });

    document.getElementById('mobile-open-sheet-btn').addEventListener('click', openSheet);
    document.getElementById('close-sheet-btn').addEventListener('click', closeAllOverlays);

    document.getElementById('sheet-add-cart-btn').addEventListener('click', () => {
      addCurrentSelectionToCart();
      openCartDrawer();
    });

    document.getElementById('sheet-buy-now-btn').addEventListener('click', () => {
      addCurrentSelectionToCart();
      openCartDrawer();
    });

    // Header Cart & Cart Drawer Controls
    document.getElementById('header-cart-btn').addEventListener('click', openCartDrawer);
    document.getElementById('close-cart-btn').addEventListener('click', closeAllOverlays);
    document.getElementById('cart-upsell-add-btn').addEventListener('click', addUpsellToCart);
    document.getElementById('cart-checkout-btn').addEventListener('click', openOrderCompleteModal);

    // Modals & Backdrop Close
    backdrop.addEventListener('click', closeAllOverlays);
    document.getElementById('close-order-modal-btn').addEventListener('click', () => {
      state.cart = [];
      renderCartUI();
      closeAllOverlays();
    });
    document.getElementById('close-lightbox-btn').addEventListener('click', closeAllOverlays);

    // Inquiry Modal
    document.getElementById('open-inquiry-btn').addEventListener('click', () => {
      closeAllOverlays();
      backdrop.classList.add('open');
      inquiryModal.classList.add('open');
      document.body.classList.add('modal-open');
    });
    document.getElementById('close-inquiry-btn').addEventListener('click', closeAllOverlays);
    document.getElementById('confirm-inquiry-btn').addEventListener('click', closeAllOverlays);

    // Reviews Filter & Sort
    document.querySelectorAll('.review-tab-btn[data-filter]').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.review-tab-btn[data-filter]').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        state.reviewFilter = tab.getAttribute('data-filter');
        renderReviews();
      });
    });

    document.getElementById('review-sort').addEventListener('change', (e) => {
      state.reviewSort = e.target.value;
      renderReviews();
    });

    // Clean Mode Toggle (Buttons + Keyboard 'C' / Escape)
    document.getElementById('enable-clean-mode-btn').addEventListener('click', () => {
      state.cleanMode = true;
      applyCleanMode();
    });

    document.getElementById('disable-clean-mode-btn').addEventListener('click', () => {
      state.cleanMode = false;
      applyCleanMode();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllOverlays();
      }
      const tag = (e.target && e.target.tagName) || '';
      if ((e.key === 'c' || e.key === 'C') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(tag) && !e.metaKey && !e.ctrlKey) {
        state.cleanMode = !state.cleanMode;
        applyCleanMode();
      }
    });
  }

  /* Initialize */
  startDispatchTimer();
  initGallery();
  initFAQ();
  applyCleanMode();
  renderHomeAndShopCatalogs();
  renderSelectionUI();
  renderSubscriptionSimulator();
  renderCartUI();
  renderReviews();
  bindEvents();
})();
