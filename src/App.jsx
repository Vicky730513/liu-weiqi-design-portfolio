import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, EnvelopeSimple, WechatLogo, X } from '@phosphor-icons/react'

const aicgPosters = [
  { title: '量子场', en: 'QUANTUM FIELD', image: '/assets/aicg-poster-01.webp' },
  { title: '机械起源', en: 'MACHINE GENESIS', image: '/assets/aicg-poster-02.webp' },
  { title: '时间裂隙', en: 'TEMPORAL RIFT', image: '/assets/aicg-poster-03.webp' },
  { title: '深海信标', en: 'ABYSSAL SIGNAL', image: '/assets/aicg-poster-04.webp' },
  { title: '轨道余晖', en: 'ORBITAL AFTERGLOW', image: '/assets/aicg-poster-05.webp' },
  { title: '共振纪元', en: 'RESONANCE ERA', image: '/assets/aicg-poster-06.webp' },
]

const commercialPosters = [
  { title: '精密之境', en: 'PRECISION IN FORM', image: '/assets/commercial-poster-01.webp' },
  { title: '静默香气', en: 'SCENT IN SILENCE', image: '/assets/commercial-poster-02.webp' },
  { title: '看见气流', en: 'AIR IN MOTION', image: '/assets/commercial-poster-03.webp' },
  { title: '光的边界', en: 'EDGE OF LIGHT', image: '/assets/commercial-poster-04.png' },
  { title: '日常新序', en: 'A NEW DAILY ORDER', image: '/assets/commercial-poster-05.webp' },
  { title: '物质之后', en: 'BEYOND MATTER', image: '/assets/commercial-poster-06.webp' },
]

const commercialPosterProject = {
  title: '商业海报',
  subtitle: '平面设计 · 商业视觉系列',
  description: '六组原创商业视觉，以产品形态、材质质感与光影秩序建立克制而鲜明的视觉表达。',
  gallery: commercialPosters,
  galleryLabel: '商业视觉',
}

const businessCardProject = {
  title: '名片设计',
  subtitle: '平面设计 · 品牌名片系列',
  description: '四组名片设计合集，涵盖精品服务、生活方式、餐饮、空间与创意行业的不同视觉语言。',
  galleryLabel: '名片设计',
  galleryClass: 'gallery--boards',
  gallery: [
    { title: '精品商务系列', en: 'PREMIUM BUSINESS SERIES', image: '/assets/business-card-01.webp' },
    { title: '生活方式系列', en: 'LIFESTYLE IDENTITY SERIES', image: '/assets/business-card-02.webp' },
    { title: '创意品牌系列', en: 'CREATIVE BRAND SERIES', image: '/assets/business-card-03.webp' },
    { title: '自然与空间系列', en: 'NATURE & SPACE SERIES', image: '/assets/business-card-04.webp' },
  ],
}

const brochureProject = {
  title: '画册与折页',
  subtitle: '平面设计 · 编辑与印刷设计',
  description: '四组画册与折页案例，涵盖公益传播、产品目录、建筑空间与香氛材质叙事。',
  galleryLabel: '编辑设计',
  galleryClass: 'gallery--boards gallery--editorial',
  gallery: [
    { title: '城市公益折页', en: 'URBAN COMMUNITY FOLDOUT', image: '/assets/brochure-01.png' },
    { title: '陶瓷产品目录', en: 'CERAMIC PRODUCT CATALOG', image: '/assets/brochure-02.png' },
    { title: '空间建筑画册', en: 'FORM / SPACE EDITORIAL', image: '/assets/brochure-03.webp' },
    { title: '香氛材质折页', en: 'SENSE / MATTER EDITION', image: '/assets/brochure-04.webp' },
  ],
}

const wayfindingProject = {
  title: '导视系统',
  subtitle: '平面设计 · 空间信息设计',
  description: '四组空间导视案例，覆盖商业空间、主题场馆、公共设施与校园环境的信息识别系统。',
  galleryLabel: '导视系统',
  galleryClass: 'gallery--boards gallery--editorial',
  gallery: [
    { title: '商业空间导视', en: 'COMMERCIAL WAYFINDING', image: '/assets/wayfinding-01.png' },
    { title: '海洋主题导视', en: 'OCEAN THEME WAYFINDING', image: '/assets/wayfinding-02.webp' },
    { title: '公共空间导视', en: 'PUBLIC SPACE WAYFINDING', image: '/assets/wayfinding-03.png' },
    { title: '校园环境导视', en: 'CAMPUS WAYFINDING', image: '/assets/wayfinding-04.png' },
  ],
}

const infographicProject = {
  title: '信息长图',
  subtitle: '平面设计 · 信息梳理与长图表达',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '展会信息长图', en: '', image: '/assets/graphic/infographic-01.jpg' },
    { title: '环保数据长图', en: '', image: '/assets/graphic/infographic-02.webp' },
  ],
}

const createPackagingProject = (title, images) => ({
  title,
  subtitle: '包装设计',
  description: '',
  galleryLabel: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: images.map((image, index) => ({
    title: `${title}-${index + 1}`,
    en: '',
    image,
  })),
})

const packagingProjects = {
  rice: createPackagingProject('粮食礼盒', [
    '/assets/packaging/rice-01.png',
    '/assets/packaging/rice-02.png',
  ]),
  wine: createPackagingProject('葡萄酒礼盒', [
    '/assets/packaging/wine-01.png',
    '/assets/packaging/wine-02.png',
  ]),
  tea: createPackagingProject('茶礼盒系列', [
    '/assets/packaging/tea-01.webp',
    '/assets/packaging/tea-02.webp',
  ]),
  skincare: createPackagingProject('美妆个护系列', [
    '/assets/packaging/skincare-02.png',
    '/assets/packaging/skincare-01.png',
    '/assets/packaging/beauty-box.png',
  ]),
  petFood: createPackagingProject('宠物食品系列', [
    '/assets/packaging/catfood-01.webp',
    '/assets/packaging/catfood-02.webp',
    '/assets/packaging/catfood-03.webp',
  ]),
  beverage: createPackagingProject('饮品系列', [
    '/assets/packaging/juice-01.png',
    '/assets/packaging/juice-02.png',
    '/assets/packaging/juice-03.webp',
    '/assets/packaging/coffee-carton.webp',
  ]),
  electronics: createPackagingProject('数码与汽车用品', [
    '/assets/packaging/charger-01.png',
    '/assets/packaging/charger-02.png',
    '/assets/packaging/gaming-box.png',
  ]),
  healthcare: createPackagingProject('医疗健康礼盒', [
    '/assets/packaging/medical-box.png',
  ]),
  brandBag: createPackagingProject('品牌手提袋', [
    '/assets/packaging/culture-bag.png',
  ]),
  labels: createPackagingProject('标签瓶贴', [
    '/assets/packaging/label-pomelo.webp',
    '/assets/packaging/label-lemon.webp',
    '/assets/packaging/label-vinegar.png',
    '/assets/packaging/label-beef-sauce.webp',
    '/assets/packaging/label-water-01.webp',
    '/assets/packaging/label-water-02.webp',
  ]),
}

const packagingHub = {
  title: '包装设计',
  subtitle: '食品、饮品、礼盒与消费品包装系统',
  categoryHub: [
    { title: '粮食礼盒', count: '02', cover: '/assets/packaging/rice-01.png', project: packagingProjects.rice },
    { title: '茶礼盒', count: '02', cover: '/assets/packaging/tea-02.webp', project: packagingProjects.tea },
    { title: '葡萄酒礼盒', count: '02', cover: '/assets/packaging/wine-01.png', project: packagingProjects.wine },
    { title: '美妆个护', count: '03', cover: '/assets/packaging/skincare-02.png', project: packagingProjects.skincare },
    { title: '宠物食品', count: '03', cover: '/assets/packaging/catfood-01.webp', project: packagingProjects.petFood },
    { title: '饮品包装', count: '04', cover: '/assets/packaging/juice-03.webp', project: packagingProjects.beverage },
    { title: '标签瓶贴', count: '06', cover: '/assets/packaging/label-pomelo.webp', project: packagingProjects.labels },
    { title: '数码包装', count: '03', cover: '/assets/packaging/charger-01.png', project: packagingProjects.electronics },
    { title: '医疗健康', count: '01', cover: '/assets/packaging/medical-box.png', project: packagingProjects.healthcare },
    { title: '品牌手提袋', count: '01', cover: '/assets/packaging/culture-bag.png', project: packagingProjects.brandBag },
  ],
}

const ecommerceProjects = {
  spiralHolder: createPackagingProject('螺旋式纸巾架', [
    '/assets/ecommerce/ecommerce-01.webp',
    '/assets/ecommerce/ecommerce-02.webp',
  ]),
  wallHolder: createPackagingProject('壁挂纸巾架', [
    '/assets/ecommerce/ecommerce-03.png',
  ]),
  woodShelf: createPackagingProject('木质置物纸巾架', [
    '/assets/ecommerce/ecommerce-04.webp',
    '/assets/ecommerce/ecommerce-05.webp',
  ]),
  storageBasket: createPackagingProject('浴室收纳篮', [
    '/assets/ecommerce/ecommerce-06.webp',
    '/assets/ecommerce/ecommerce-07.webp',
  ]),
  towelBar: createPackagingProject('浴室毛巾杆', [
    '/assets/ecommerce/ecommerce-08.png',
    '/assets/ecommerce/ecommerce-09.webp',
  ]),
  rugs: createPackagingProject('户外地毯系列', [
    '/assets/ecommerce/ecommerce-10.webp',
    '/assets/ecommerce/ecommerce-11.webp',
    '/assets/ecommerce/ecommerce-12.webp',
    '/assets/ecommerce/ecommerce-13.webp',
    '/assets/ecommerce/ecommerce-14.webp',
    '/assets/ecommerce/ecommerce-15.webp',
    '/assets/ecommerce/ecommerce-16.webp',
    '/assets/ecommerce/ecommerce-17.webp',
    '/assets/ecommerce/ecommerce-18.webp',
  ]),
}

const ecommerceHub = {
  title: '电商详情页',
  subtitle: '平面设计 · 电商视觉与产品信息设计',
  categoryHub: [
    { title: '螺旋式纸巾架', count: '02', cover: '/assets/ecommerce/ecommerce-01.webp', project: ecommerceProjects.spiralHolder },
    { title: '壁挂纸巾架', count: '01', cover: '/assets/ecommerce/ecommerce-03.png', project: ecommerceProjects.wallHolder },
    { title: '木质置物纸巾架', count: '02', cover: '/assets/ecommerce/ecommerce-04.webp', project: ecommerceProjects.woodShelf },
    { title: '浴室收纳篮', count: '02', cover: '/assets/ecommerce/ecommerce-06.webp', project: ecommerceProjects.storageBasket },
    { title: '浴室毛巾杆', count: '02', cover: '/assets/ecommerce/ecommerce-08.png', project: ecommerceProjects.towelBar },
    { title: '户外地毯系列', count: '09', cover: '/assets/ecommerce/ecommerce-14.webp', project: ecommerceProjects.rugs },
  ],
}

const graphicDesignHub = {
  title: '平面设计',
  subtitle: '版式、信息与商业视觉设计',
  categoryHub: [
    { title: '名片设计', count: '04', cover: '/assets/business-card-03.webp', project: businessCardProject },
    { title: '商业海报', count: '06', cover: '/assets/commercial-poster-03.webp', project: commercialPosterProject },
    { title: '画册与折页', count: '04', cover: '/assets/brochure-04.webp', project: brochureProject },
    { title: '电商详情页', count: '06', cover: '/assets/ecommerce/ecommerce-01.webp', project: ecommerceHub },
    { title: '信息长图', count: '02', cover: '/assets/graphic/infographic-02.webp', project: infographicProject },
    { title: '导视系统', count: '04', cover: '/assets/wayfinding-02.webp', project: wayfindingProject },
  ],
}

const viSystemProject = {
  title: 'VI系统',
  subtitle: '品牌与IP · 视觉识别系统',
  description: '',
  galleryLabel: '',
  galleryClass: 'gallery--vi',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: Array.from({ length: 27 }, (_, index) => ({
    title: `艺猫美鞋VI系统-${index + 1}`,
    en: '',
    image: `/assets/brand-vi/vi-${String(index + 1).padStart(2, '0')}.jpg`,
  })),
}

const brandIllustrationProject = {
  title: '品牌插画',
  subtitle: '品牌与IP · 角色视觉与品牌触点',
  description: '以统一的角色线条、表情语言与应用系统，让插画从单张视觉延展为可持续的品牌资产。',
  galleryLabel: '',
  galleryClass: 'gallery--brand-illustration',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '咖啡品牌角色插画', en: '', image: '/assets/brand-illustration/brand-illustration-01.png' },
    { title: '咖啡品牌应用插画', en: '', image: '/assets/brand-illustration/brand-illustration-02.png' },
    { title: '茶饮品牌角色系统', en: '', image: '/assets/brand-illustration/brand-illustration-03.png' },
  ],
}

const ipCharacterProject = {
  title: 'IP角色设定',
  subtitle: '品牌与IP · 角色造型与三视图设定',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '蓝色小牛IP设定', en: '', image: '/assets/brand-ip/ip-characters/ip-character-01.png' },
    { title: '珊瑚橙萌兽IP设定', en: '', image: '/assets/brand-ip/ip-characters/ip-character-02.png' },
    { title: '嫩芽精灵IP设定', en: '', image: '/assets/brand-ip/ip-characters/ip-character-03.png' },
    { title: '红帽女孩IP设定', en: '', image: '/assets/brand-ip/ip-characters/ip-character-04.png' },
  ],
}

const logoDesignProject = {
  title: '标志设计',
  subtitle: '品牌与IP · 标志与符号系统',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '几何字母标志合集', en: '', image: '/assets/brand-ip/logos/logo-sheet-01.png' },
    { title: '趣味图形标志合集', en: '', image: '/assets/brand-ip/logos/logo-sheet-02.png' },
    { title: '商业图形标志合集', en: '', image: '/assets/brand-ip/logos/logo-sheet-03.png' },
    { title: '字体标志合集', en: '', image: '/assets/brand-ip/logos/logo-sheet-04.png' },
    { title: '几何符号标志合集', en: '', image: '/assets/brand-ip/logos/logo-sheet-05.png' },
    { title: '现代品牌符号合集', en: '', image: '/assets/brand-ip/logos/logo-sheet-06.png' },
  ],
}

const brandHub = {
  title: '品牌与IP',
  subtitle: '品牌识别、VI与IP延展',
  categoryHub: [
    { title: '标志设计', count: '06', cover: '/assets/brand-ip/logos/logo-sheet-01.png', project: logoDesignProject },
    { title: 'VI系统', count: '27', cover: '/assets/brand-vi/vi-13.webp', project: viSystemProject },
    { title: 'IP角色设定', count: '04', cover: '/assets/brand-ip/ip-characters/ip-character-03.png', project: ipCharacterProject },
    { title: '品牌插画', count: '03', cover: '/assets/brand-illustration/brand-illustration-03.png', project: brandIllustrationProject },
  ],
}

const aicgPosterProject = {
  title: 'AICG系列海报',
  subtitle: '视觉叙事 · 科技电影级视觉实验',
  description: '六组原创电影级CG视觉实验，以科技、空间与未来文明为共同线索。',
  gallery: aicgPosters,
}

const conceptVisualProject = {
  title: '概念视觉',
  subtitle: '视觉叙事 · 空气动力概念实验',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '空气动力概念实验', en: '', image: '/assets/visual-story/concept-visual-01.webp' },
  ],
}

const stylizedIllustrationProject = {
  title: '风格化插画',
  subtitle: '视觉叙事 · 精密流体构成',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '精密流体构成', en: '', image: '/assets/visual-story/stylized-illustration-01.webp' },
  ],
}

const mainKvProject = {
  title: '主视觉KV',
  subtitle: '视觉叙事 · 科技与未来材质视觉实验',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: 'FORM / FUTURE', en: '', image: '/assets/visual-story/main-kv/main-kv-01.png' },
    { title: 'AIR / MOTION', en: '', image: '/assets/visual-story/main-kv/main-kv-02.png' },
    { title: 'SIGNAL / FIELD', en: '', image: '/assets/visual-story/main-kv/main-kv-03.webp' },
    { title: 'MATERIAL / ZERO', en: '', image: '/assets/visual-story/main-kv/main-kv-04.png' },
  ],
}

const visualStoryHub = {
  title: '视觉叙事',
  subtitle: 'AICG海报、KV与视觉实验',
  categoryHub: [
    { title: 'AICG系列海报', count: '06', cover: '/assets/aicg-poster-01.webp', project: aicgPosterProject },
    { title: '主视觉KV', count: '04', cover: '/assets/visual-story/main-kv/main-kv-01.png', project: mainKvProject },
    { title: '概念视觉', count: '01', cover: '/assets/visual-story/concept-visual-01.webp', project: conceptVisualProject },
    { title: '风格化插画', count: '01', cover: '/assets/visual-story/stylized-illustration-01.webp', project: stylizedIllustrationProject },
  ],
}

const rollupProject = {
  title: '展架与易拉宝',
  subtitle: '广告落地 · 终端展示物料',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '展架易拉宝场景', en: '', image: '/assets/advertising/rollup-01.jpg' },
    { title: '展架易拉宝组合', en: '', image: '/assets/advertising/rollup-02.jpg' },
  ],
}

const activityKvProject = {
  title: '活动KV',
  subtitle: '广告落地 · 活动主视觉与传播延展',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '城市十周年活动KV', en: '', image: '/assets/advertising/activity-kv/activity-kv-01.png' },
    { title: '创新峰会活动KV', en: '', image: '/assets/advertising/activity-kv/activity-kv-02.webp' },
    { title: '产业峰会活动KV', en: '', image: '/assets/advertising/activity-kv/activity-kv-03.webp' },
    { title: '未来探索活动KV', en: '', image: '/assets/advertising/activity-kv/activity-kv-04.webp' },
  ],
}

const outdoorAdvertisingProject = {
  title: '户外广告',
  subtitle: '广告落地 · 门头招牌与商业空间形象',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '儿童品牌门店形象', en: '', image: '/assets/advertising/outdoor/outdoor-01.png' },
    { title: '便利店门头形象', en: '', image: '/assets/advertising/outdoor/outdoor-02.png' },
    { title: '餐饮门店户外招牌', en: '', image: '/assets/advertising/outdoor/outdoor-03.webp' },
    { title: '汽车维修中心招牌', en: '', image: '/assets/advertising/outdoor/outdoor-04.png' },
  ],
}

const storeMaterialsProject = {
  title: '门店物料',
  subtitle: '广告落地 · 终端物料与品牌应用系统',
  description: '',
  galleryClass: 'gallery--packaging',
  hideGalleryHeader: true,
  hideCaptions: true,
  gallery: [
    { title: '咖啡品牌门店物料', en: '', image: '/assets/advertising/store-materials/store-material-01.png' },
    { title: '咖啡品牌终端应用系统', en: '', image: '/assets/advertising/store-materials/store-material-02.png' },
    { title: '生活方式品牌物料', en: '', image: '/assets/advertising/store-materials/store-material-03.png' },
    { title: '抹茶饮品门店物料', en: '', image: '/assets/advertising/store-materials/store-material-04.png' },
    { title: '礼赠品牌终端物料', en: '', image: '/assets/advertising/store-materials/store-material-05.png' },
    { title: '烘焙品牌门店物料', en: '', image: '/assets/advertising/store-materials/store-material-06.png' },
  ],
}

const advertisingHub = {
  title: '广告落地',
  subtitle: '广告物料、活动与终端应用',
  categoryHub: [
    { title: '户外广告', count: '04', cover: '/assets/advertising/outdoor/outdoor-03.webp', project: outdoorAdvertisingProject },
    { title: '门店物料', count: '06', cover: '/assets/advertising/store-materials/store-material-04.png', project: storeMaterialsProject },
    { title: '展架与易拉宝', count: '02', cover: '/assets/advertising/rollup-01.jpg', project: rollupProject },
    { title: '活动KV', count: '04', cover: '/assets/advertising/activity-kv/activity-kv-03.webp', project: activityKvProject },
  ],
}

const projects = [
  { title: '包装设计', subtitle: '食品与消费品包装系统', image: '/assets/packaging/rice-01.png', span: 'wide', subcategories: ['食品包装','饮品包装','美妆个护','礼盒套装','标签瓶贴','系列化包装'] },
  { title: '品牌与IP', subtitle: '品牌识别、VI与IP延展', image: '/assets/brand-vi/vi-13.webp', span: 'square', subcategories: ['标志设计','VI系统','IP角色设定','品牌插画'] },
  { title: '平面设计', subtitle: '版式与商业视觉设计', image: '/assets/business-card-03.webp', span: 'square', subcategories: ['名片设计','商业海报','画册与折页','电商详情页','信息长图','导视系统'] },
  { title: '视觉叙事', subtitle: 'AICG海报、KV与视觉实验', image: '/assets/aicg-poster-01.webp', span: 'wide', subcategories: ['AICG系列海报','主视觉KV','概念视觉','风格化插画'] },
  { title: '广告落地', subtitle: '广告物料、活动与终端应用', image: '/assets/advertising/outdoor/outdoor-03.webp', span: 'full', subcategories: ['户外广告','门店物料','展架与易拉宝','活动KV'] },
]

const brandCases = [
  {
    title: '循白 XUNBAI',
    eyebrow: '品牌策略与产品系统',
    headline: '让空气科技，\n自然融入居家空间',
    description: '从品牌定位、产品家族到包装与上市传播，建立温暖、安静且具有长期识别力的家居空气品牌。',
    tags: ['品牌定位', '产品家族', '包装系统', '上市传播'],
    image: '/assets/brand-cases/xunbai/card-hero.webp',
    project: {
      title: '循白 XUNBAI',
      subtitle: '品牌全案 · 家居空气循环净护品牌',
      description: '以“让空气回到自然状态”为核心，从定位、品牌识别、产品家族、包装系统到上市传播建立完整品牌体验。',
      galleryLabel: '品牌全案',
      galleryClass: 'gallery--brand-case',
      gallery: [
        { title: '品牌定位与识别', en: 'BRAND STRATEGY & IDENTITY', image: '/assets/brand-cases/xunbai/01-brand-overview.webp' },
        { title: '产品家族系统', en: 'PRODUCT FAMILY SYSTEM', image: '/assets/brand-cases/xunbai/02-product-family.png' },
        { title: '包装与交付体验', en: 'PACKAGING EXPERIENCE', image: '/assets/brand-cases/xunbai/03-packaging-system.webp' },
        { title: '上市传播系统', en: 'LAUNCH CAMPAIGN', image: '/assets/brand-cases/xunbai/04-launch-campaign.webp' },
      ],
    },
  },
  {
    title: '风序 FENGXU',
    eyebrow: '工程品牌与全球上市',
    headline: '把精密工程，\n转化为全球品牌语言',
    description: '围绕高性能空气循环技术，统一产品平台、全球包装与零售传播，形成理性而鲜明的科技品牌秩序。',
    tags: ['品牌升级', '产品平台', '全球包装', '零售发布'],
    image: '/assets/brand-cases/fengxu/card-hero.webp',
    project: {
      title: '风序 FENGXU',
      subtitle: '品牌全案 · 精密工程空气科技品牌',
      description: '将空气动力与精密制造优势转译为可跨市场使用的品牌语言，覆盖产品平台、全球包装、渠道终端与上市发布。',
      galleryLabel: '品牌全案',
      galleryClass: 'gallery--brand-case',
      gallery: [
        { title: '品牌定位与识别', en: 'BRAND STRATEGY & IDENTITY', image: '/assets/brand-cases/fengxu/01-brand-overview.webp' },
        { title: '产品平台规划', en: 'PRODUCT PLATFORM', image: '/assets/brand-cases/fengxu/02-product-platform.webp' },
        { title: '全球包装系统', en: 'GLOBAL PACKAGING SYSTEM', image: '/assets/brand-cases/fengxu/03-global-packaging.webp' },
        { title: '全球上市发布', en: 'GLOBAL PRODUCT LAUNCH', image: '/assets/brand-cases/fengxu/04-product-launch.webp' },
      ],
    },
  },
  {
    title: '呼点 HUDIAN',
    eyebrow: '新消费品牌与模块体验',
    headline: '让模块化净护，\n成为年轻人的日常选择',
    description: '以更轻松的品牌表达串联模块产品、滤芯复购与线上发布，让科技体验清楚、友好且易于持续。',
    tags: ['品牌定位', '模块产品', '耗材体系', '电商发布'],
    image: '/assets/brand-cases/hudian/card-hero.webp',
    project: {
      title: '呼点 HUDIAN',
      subtitle: '品牌全案 · 年轻模块化空气净护品牌',
      description: '从年轻租住场景出发，以模块化产品与耗材服务建立品牌增长路径，并贯通包装、电商与线下快闪体验。',
      galleryLabel: '品牌全案',
      galleryClass: 'gallery--brand-case',
      gallery: [
        { title: '品牌定位与识别', en: 'BRAND STRATEGY & IDENTITY', image: '/assets/brand-cases/hudian/01-brand-overview.webp' },
        { title: '模块化产品家族', en: 'MODULAR PRODUCT FAMILY', image: '/assets/brand-cases/hudian/02-modular-family.webp' },
        { title: '包装与滤芯体系', en: 'PACKAGING & FILTER SYSTEM', image: '/assets/brand-cases/hudian/03-packaging-filters.webp' },
        { title: '线上上市传播', en: 'DIGITAL PRODUCT LAUNCH', image: '/assets/brand-cases/hudian/04-online-launch.webp' },
      ],
    },
  },
  {
    title: '澜玥 LUMERA',
    eyebrow: '高级晶体首饰与礼赠',
    headline: '把流动的光，\n留成贴近身体的纪念',
    description: '以晶体切割与光线为核心资产，贯通首饰系列、精品礼盒、零售陈列与节日礼赠传播。',
    tags: ['品牌定位', '首饰系列', '礼赠包装', '零售传播'],
    image: '/assets/brand-cases/lumera/card-hero.webp',
    project: {
      title: '澜玥 LUMERA',
      subtitle: '品牌全案 · 高级晶体首饰与礼赠品牌',
      description: '以“把光留在身边”为品牌主张，将晶体切割、金属镶嵌与礼赠仪式转化为一致的产品与品牌体验。',
      galleryLabel: '品牌全案',
      galleryClass: 'gallery--brand-case',
      gallery: [
        { title: '品牌定位与识别', en: 'BRAND STRATEGY & IDENTITY', image: '/assets/brand-cases/lumera/01-brand-overview.webp' },
        { title: '晶体首饰系列', en: 'CRYSTAL JEWELRY COLLECTION', image: '/assets/brand-cases/lumera/02-jewelry-collection.webp' },
        { title: '精品礼赠包装', en: 'GIFTING & PACKAGING', image: '/assets/brand-cases/lumera/03-gifting-packaging.webp' },
        { title: '上市与零售体验', en: 'LAUNCH & RETAIL EXPERIENCE', image: '/assets/brand-cases/lumera/04-launch-retail.webp' },
      ],
    },
  },
  {
    title: '欧珀雅 ORVÉA',
    eyebrow: '当代珠宝与都市零售',
    headline: '把建筑秩序，\n佩戴成当代女性的力量',
    description: '以错位弧线和玫瑰金结构构建当代珠宝语言，延展至精品包装、都市门店与会员预览体验。',
    tags: ['品牌策略', '珠宝家族', '精品包装', '门店体验'],
    image: '/assets/brand-cases/orvea/card-hero.webp',
    project: {
      title: '欧珀雅 ORVÉA',
      subtitle: '品牌全案 · 当代建筑感珠宝品牌',
      description: '从都市建筑的弧线与结构关系出发，形成可持续延展的戒指、手镯、项链与耳饰家族，并建立完整精品零售体验。',
      galleryLabel: '品牌全案',
      galleryClass: 'gallery--brand-case',
      gallery: [
        { title: '品牌定位与识别', en: 'BRAND STRATEGY & IDENTITY', image: '/assets/brand-cases/orvea/01-brand-overview.webp' },
        { title: '当代珠宝家族', en: 'CONTEMPORARY JEWELRY FAMILY', image: '/assets/brand-cases/orvea/02-jewelry-collection.webp' },
        { title: '精品礼盒系统', en: 'PREMIUM PACKAGING SYSTEM', image: '/assets/brand-cases/orvea/03-gifting-packaging.webp' },
        { title: '门店与上市发布', en: 'BOUTIQUE & LAUNCH', image: '/assets/brand-cases/orvea/04-launch-retail.webp' },
      ],
    },
  },
  {
    title: '伊洛 ELOA',
    eyebrow: '情感轻奢饰品与礼赠服务',
    headline: '让每一段关系，\n都有一个贴身的小记号',
    description: '围绕叠戴戒指、魅力手链与情感礼赠，建立模块化产品、场景礼盒和线上个性化选购体验。',
    tags: ['品牌定位', '叠戴饰品', '场景礼赠', '数字体验'],
    image: '/assets/brand-cases/eloa/card-hero.webp',
    project: {
      title: '伊洛 ELOA',
      subtitle: '品牌全案 · 情感轻奢饰品与礼赠品牌',
      description: '以“每段关系都有一个小记号”为核心，把连续环结图形延展到叠戴首饰、礼赠包装与数字化选购服务。',
      galleryLabel: '品牌全案',
      galleryClass: 'gallery--brand-case',
      gallery: [
        { title: '品牌定位与识别', en: 'BRAND STRATEGY & IDENTITY', image: '/assets/brand-cases/eloa/01-brand-overview.webp' },
        { title: '叠戴与魅力饰品', en: 'STACKING & CHARM COLLECTION', image: '/assets/brand-cases/eloa/02-jewelry-collection.webp' },
        { title: '情感礼赠系统', en: 'EMOTIONAL GIFTING SYSTEM', image: '/assets/brand-cases/eloa/03-gifting-packaging.webp' },
        { title: '数字上市与礼赠体验', en: 'DIGITAL LAUNCH & GIFTING', image: '/assets/brand-cases/eloa/04-launch-retail.webp' },
      ],
    },
  },
]

const heroCases = [brandCases[0], brandCases[3], brandCases[2]]

function DogCharacter() {
  return <svg className="dog-character" viewBox="0 0 760 390" role="img" aria-label="眨眼后向左奔跑的腊肠狗角色">
    <defs>
      <radialGradient id="fur" cx="34%" cy="18%" r="90%"><stop stopColor="#b56b42"/><stop offset=".45" stopColor="#794027"/><stop offset="1" stopColor="#3d1d17"/></radialGradient>
      <linearGradient id="furDark" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#65301f"/><stop offset="1" stopColor="#2d1513"/></linearGradient>
      <radialGradient id="tan" cx="35%" cy="20%" r="85%"><stop stopColor="#ffd09a"/><stop offset=".55" stopColor="#d9874c"/><stop offset="1" stopColor="#9c4b2e"/></radialGradient>
      <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#fff" stopOpacity=".28"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
      <filter id="soft"><feDropShadow dx="0" dy="18" stdDeviation="14" floodOpacity=".28"/></filter>
    </defs>
    <g className="dog-rig" filter="url(#soft)">
      <path className="dog-tail" d="M648 177c51-12 83-43 91-81 11 54-12 97-86 111z" fill="url(#fur)"/>
      <path className="dog-body" d="M229 167c66-29 337-31 414 4 49 23 47 93-4 116-77 33-343 27-408-3-49-23-51-94-2-117z" fill="url(#fur)"/>
      <path d="M276 169c91-20 277-17 342 4-95-2-240 3-342 22z" fill="url(#shine)" opacity=".45"/>
      <ellipse cx="525" cy="272" rx="115" ry="32" fill="#351713" opacity=".2"/>
      <g className="leg leg-back-a"><path d="M564 246c2-18 54-18 58 2l-4 82c-2 25-52 25-54 0z" fill="url(#fur)"/><ellipse cx="590" cy="335" rx="38" ry="18" fill="url(#tan)"/></g>
      <g className="leg leg-back-b"><path d="M625 241c2-17 46-17 49 1l-2 82c-2 22-45 22-47 0z" fill="url(#furDark)"/><ellipse cx="651" cy="329" rx="34" ry="16" fill="#b9683e"/></g>
      <g className="leg leg-front-b"><path d="M290 241c2-17 46-17 49 1l-2 82c-2 22-45 22-47 0z" fill="url(#furDark)"/><ellipse cx="315" cy="329" rx="34" ry="16" fill="#b9683e"/></g>
      <g className="leg leg-front-a"><path d="M236 244c2-18 53-18 57 2l-4 84c-2 24-51 24-53 0z" fill="url(#fur)"/><ellipse cx="262" cy="336" rx="38" ry="18" fill="url(#tan)"/></g>
      <g className="dog-head">
        <path d="M267 105c-14-62-76-91-128-64-52 27-64 99-35 147 27 44 94 62 139 28 35-27 43-72 24-111z" fill="url(#fur)"/>
        <path d="M134 58c37-18 81-7 105 25-35-12-78-7-111 15z" fill="url(#shine)" opacity=".45"/>
        <path d="M117 55c4-38 34-60 70-58 37 2 63 26 64 63-44-18-90-19-134-5z" fill="#e9dfcf"/>
        <path d="M108 55c45-17 101-16 151 4l-4 27c-51-17-97-18-145-3z" fill="#d7c8b5"/>
        <path d="M139 12c8 19 10 39 7 59M166 2c5 22 5 43 2 66M194 3c1 22-2 42-7 66M220 14c-3 20-8 37-14 55" fill="none" stroke="#b8a792" strokeWidth="4" opacity=".7"/>
        <circle cx="183" cy="-3" r="17" fill="#e9dfcf"/>
        <path className="dog-ear" d="M226 75c54 13 76 65 49 126-16 37-54 59-79 34 20-43 10-93-19-127 9-18 26-29 49-33z" fill="url(#furDark)"/>
        <path d="M148 143c-57-13-115 13-113 51 2 36 72 48 123 23 36-18 39-62-10-74z" fill="url(#tan)"/>
        <path d="M59 176c-18 4-28 14-23 27 7 17 36 17 48 1 9-13-7-32-25-28z" fill="#17151a"/><ellipse cx="56" cy="184" rx="7" ry="5" fill="#fff" opacity=".55"/>
        <ellipse cx="158" cy="112" rx="15" ry="20" fill="#17151a"/><ellipse cx="163" cy="106" rx="5" ry="7" fill="white"/>
        <path className="dog-wink-lid" d="M143 113q16-14 31 0" fill="none" stroke="#2a1612" strokeWidth="7" strokeLinecap="round"/>
        <path d="M103 201q27 20 58 0" fill="none" stroke="#713820" strokeWidth="5" strokeLinecap="round"/>
        <path d="M194 195q36 18 73-1" fill="none" stroke="#162437" strokeWidth="13" strokeLinecap="round"/><circle cx="242" cy="197" r="5" fill="#d7b66e"/>
      </g>
    </g>
  </svg>
}

function PrettyDog() {
  return <div className="pretty-dog" role="img" aria-label="手绘腊肠狗角色">
    <span className="handdog-sprite" aria-hidden="true" />
    <img className="complete-dog" src="/assets/dog-complete.webp" alt="" decoding="async" />
    <span className="run-sprite" aria-hidden="true" />
    <span className="complete-wink" />
  </div>
}

function Intro({ onDone }) {
  const [phase, setPhase] = useState('idle')
  useEffect(() => {
    const wink = setTimeout(() => setPhase('wink'), 1000)
    const run = setTimeout(() => setPhase('run'), 2300)
    const done = setTimeout(onDone, 3900)
    return () => [wink, run, done].forEach(clearTimeout)
  }, [onDone])

  return <div className={`intro intro--${phase}`} aria-label="作品集开场动画">
    <button className="skip" onClick={onDone}>跳过开场</button>
    <div className="intro-copy">
      <span>刘伟琪</span>
      <p>让视觉建立价值，也留下记忆。</p>
    </div>
    <div className="intro-title" aria-hidden="true"><span>BRAND &amp; PACKAGING</span><strong>视觉，让品牌<br/>被记住。</strong><em>VISUAL DESIGN PORTFOLIO · 2026</em></div>
    <div className="intro-side" aria-hidden="true"><span>SELECTED WORKS</span><i>品牌识别　包装系统　视觉叙事</i></div>
    <PrettyDog />
    <div className="intro-orb intro-orb-a" /><div className="intro-orb intro-orb-b" />
    <div className="intro-floor" /><div className="intro-glass" />
  </div>
}

function TiltCard({ children, className = '', onClick }) {
  const ref = useRef(null)
  const move = (event) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (event.clientX - r.left) / r.width - .5
    const y = (event.clientY - r.top) / r.height - .5
    el.style.setProperty('--rx', `${-y * 4}deg`)
    el.style.setProperty('--ry', `${x * 5}deg`)
    el.style.setProperty('--mx', `${(x + .5) * 100}%`)
    el.style.setProperty('--my', `${(y + .5) * 100}%`)
  }
  const leave = () => {
    const el = ref.current
    el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg')
  }
  return <article ref={ref} className={`glass-card tilt-card ${className}`} onMouseMove={move} onMouseLeave={leave} onClick={onClick}>{children}</article>
}

function CursorFollower() {
  const cursor = useRef(null)
  const dot = useRef(null)
  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return
    let targetX = innerWidth / 2
    let targetY = innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let frame
    const move = (event) => { targetX = event.clientX; targetY = event.clientY; dot.current?.style.setProperty('transform', `translate3d(${targetX}px,${targetY}px,0)`) }
    const over = (event) => cursor.current?.classList.toggle('is-active', Boolean(event.target.closest('a,button,[data-cursor]')))
    const down = () => cursor.current?.classList.add('is-down')
    const up = () => cursor.current?.classList.remove('is-down')
    const tick = () => {
      currentX += (targetX - currentX) * .16
      currentY += (targetY - currentY) * .16
      cursor.current?.style.setProperty('transform', `translate3d(${currentX}px,${currentY}px,0)`)
      frame = requestAnimationFrame(tick)
    }
    addEventListener('pointermove', move, { passive: true })
    addEventListener('pointerover', over, { passive: true })
    addEventListener('pointerdown', down, { passive: true })
    addEventListener('pointerup', up, { passive: true })
    frame = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(frame); removeEventListener('pointermove', move); removeEventListener('pointerover', over); removeEventListener('pointerdown', down); removeEventListener('pointerup', up) }
  }, [])
  return <><span ref={cursor} className="cursor-ring" aria-hidden="true"/><span ref={dot} className="cursor-dot" aria-hidden="true"/></>
}

function MotionMarquee() {
  return <div className="motion-marquee" aria-hidden="true"><div><span>STRATEGY</span><i>品牌策略</i><span>IDENTITY</span><i>视觉识别</i><span>PACKAGING</span><i>包装系统</i><span>LAUNCH</span><i>上市传播</i><span>STRATEGY</span><i>品牌策略</i><span>IDENTITY</span><i>视觉识别</i><span>PACKAGING</span><i>包装系统</i><span>LAUNCH</span><i>上市传播</i></div></div>
}

function ProjectModal({ project, onClose, onSelect }) {
  if (!project) return null
  if (project.categoryHub) return <div className="modal modal--hub" role="dialog" aria-modal="true" aria-label={`${project.title}分类目录`}>
    <button className="modal-close" onClick={onClose} aria-label="关闭项目"><X size={22} /></button>
    <header className="hub-head"><span>{project.subtitle}</span><h2>{project.title}</h2></header>
    <div className="category-hub">{project.categoryHub.map((item,index)=><button key={item.title} className={item.pending ? 'is-pending' : ''} onClick={()=>item.project && onSelect(item.project)} disabled={item.pending}>
      {item.cover ? <img src={item.cover} alt="" loading="lazy" decoding="async"/> : <span className="category-placeholder" aria-hidden="true" />}
      <span className="category-number">0{index+1}</span>
      <span className="category-meta"><strong>{item.title}</strong><em>{item.pending ? '预留作品位置' : `${item.count} 组作品`}</em></span>
      {!item.pending && <ArrowUpRight size={20}/>} 
    </button>)}</div>
  </div>
  if (project.gallery) return <div className={`modal modal--gallery ${project.hideGalleryHeader ? 'modal--image-only' : ''}`} role="dialog" aria-modal="true" aria-label={`${project.title}项目详情`}>
    <button className="modal-close" onClick={onClose} aria-label="关闭项目"><X size={22} /></button>
    {!project.hideGalleryHeader && <header className="gallery-head"><span>{project.subtitle}</span><h2>{project.title}</h2><p>{project.description || '六组原创电影级CG视觉实验，以科技、空间与未来文明为共同线索。'}</p></header>}
    <div className={`aicg-gallery ${project.galleryClass || ''}`}>{project.gallery.map((poster,index)=><figure key={poster.title}><img src={poster.image} alt={`${poster.title}作品`} loading="lazy" decoding="async"/>{!project.hideCaptions && <figcaption><span>0{index+1} · {project.galleryLabel || 'AICG视觉实验'} · 2026</span><h3>{poster.title}</h3><em>{poster.en}</em></figcaption>}</figure>)}</div>
  </div>
  return <div className="modal" role="dialog" aria-modal="true" aria-label={`${project.title}项目详情`}>
    <button className="modal-close" onClick={onClose} aria-label="关闭项目"><X size={22} /></button>
    <div className="modal-media"><img src={project.image} alt={project.title} loading="lazy" decoding="async" /></div>
    <div className="modal-copy"><span>{project.subtitle}</span><h2>{project.title}</h2><p>从视觉概念、色彩系统到最终应用，构建统一、清晰且具有记忆点的品牌表达。</p><div className="modal-tags">{project.subcategories?.map(item=><em key={item}>{item}</em>)}</div></div>
  </div>
}

export default function App() {
  const [intro, setIntro] = useState(() => new URLSearchParams(window.location.search).get('skipIntro') !== '1')
  const [active, setActive] = useState(null)
  const [heroIndex, setHeroIndex] = useState(0)
  const [categoryIndex, setCategoryIndex] = useState(0)
  useEffect(() => {
    let queued = false
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      const hero = document.querySelector('.hero')
      const range = Math.max(1, (hero?.offsetHeight || innerHeight) - innerHeight)
      document.documentElement.style.setProperty('--page-progress', max ? scrollY / max : 0)
      document.documentElement.style.setProperty('--hero-progress', Math.min(1, Math.max(0, scrollY / range)))
      document.documentElement.classList.toggle('is-scrolled', scrollY > 48)
      queued = false
    }
    const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(update) } }
    update(); addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll)
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll) }
  }, [])
  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return
    const nodes = document.querySelectorAll('.magnetic')
    const move = (event) => {
      const node = event.currentTarget
      const rect = node.getBoundingClientRect()
      node.style.setProperty('--mag-x', `${(event.clientX - rect.left - rect.width / 2) * .18}px`)
      node.style.setProperty('--mag-y', `${(event.clientY - rect.top - rect.height / 2) * .18}px`)
    }
    const leave = (event) => { event.currentTarget.style.setProperty('--mag-x', '0px'); event.currentTarget.style.setProperty('--mag-y', '0px') }
    nodes.forEach(node => { node.addEventListener('pointermove', move); node.addEventListener('pointerleave', leave) })
    return () => nodes.forEach(node => { node.removeEventListener('pointermove', move); node.removeEventListener('pointerleave', leave) })
  }, [intro])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: .12 })
    const nodes = document.querySelectorAll('.reveal,.section-head,.project,.about-card,.service-card,.contact')
    nodes.forEach(node => { node.classList.add('reveal'); observer.observe(node) })
    return () => observer.disconnect()
  }, [intro])
  const finishIntro = useCallback(() => setIntro(false), [])
  const transition = useCallback((update) => document.startViewTransition ? document.startViewTransition(update) : update(), [])
  const openProject = useCallback((project) => transition(() => setActive(
    project.title === '平面设计'
      ? graphicDesignHub
      : project.title === '包装设计'
        ? packagingHub
        : project.title === '品牌与IP'
          ? brandHub
          : project.title === '视觉叙事'
            ? visualStoryHub
            : project.title === '广告落地'
              ? advertisingHub
              : project
  )), [transition])
  const closeProject = useCallback(() => transition(() => setActive(null)), [transition])
  const selectProject = useCallback((project) => transition(() => setActive(project)), [transition])
  return <>
    <CursorFollower />
    <div className="page-progress" aria-hidden="true" />
    {intro && <Intro onDone={finishIntro} />}
    <main className={intro ? 'site site--waiting' : 'site site--ready'}>
      <nav className="nav">
        <a className="brand" href="#top">刘伟琪</a>
        <div className="nav-links"><a className="magnetic" href="#work">作品</a><a className="magnetic" href="#brand-cases">品牌全案</a><a className="magnetic" href="#capabilities">能力</a><a className="magnetic" href="#about">关于</a><a className="magnetic" href="#contact">联系</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="aurora aurora-a" /><div className="aurora aurora-b" />
        <div className="hero-bento">
          <div className="hero-feature hero-stage" onPointerMove={(event) => {
            if (event.pointerType === 'touch') return
            const rect = event.currentTarget.getBoundingClientRect()
            event.currentTarget.style.setProperty('--stage-x', `${((event.clientX - rect.left) / rect.width - .5) * 12}px`)
            event.currentTarget.style.setProperty('--stage-y', `${((event.clientY - rect.top) / rect.height - .5) * 9}px`)
          }} onPointerLeave={(event) => {
            event.currentTarget.style.setProperty('--stage-x', '0px')
            event.currentTarget.style.setProperty('--stage-y', '0px')
          }}>
            <button className="hero-stage__visual" onClick={() => openProject(heroCases[heroIndex].project)} aria-label={`查看${heroCases[heroIndex].title}品牌全案`}>
              {heroCases.map((item, index) => <img key={item.title} className={index === heroIndex ? 'is-active' : ''} src={item.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" fetchPriority={index === 0 ? 'high' : 'auto'} />)}
              <span className="hero-stage__shade" aria-hidden="true" />
            </button>
            <div className="hero-copy"><h1>品牌与包装<br />设计师</h1><p>以清晰的策略和敏锐的视觉，<br />让产品被看见，也被记住。</p><button onClick={() => openProject(heroCases[heroIndex].project)}>查看品牌全案 <ArrowUpRight size={17} /></button></div>
            <div className="hero-project-name"><span>{heroCases[heroIndex].eyebrow}</span><strong>{heroCases[heroIndex].title}</strong></div>
            <nav className="hero-curation" aria-label="精选品牌全案">
              {heroCases.map((item, index) => <button key={item.title} className={index === heroIndex ? 'active' : ''} onPointerEnter={() => setHeroIndex(index)} onFocus={() => setHeroIndex(index)} onClick={() => index === heroIndex ? openProject(item.project) : setHeroIndex(index)}><i>0{index + 1}</i><span>{item.title}</span><em>{item.eyebrow}</em></button>)}
            </nav>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <header className="category-navigator-head reveal"><span>按能力查看作品</span></header>
        <div className="category-navigator reveal">
          <button className="category-preview" onClick={() => openProject(projects[categoryIndex])} aria-label={`查看${projects[categoryIndex].title}`}>
            {projects.map((project,index)=><img key={project.title} className={index===categoryIndex?'is-active':''} src={project.image} alt="" loading="lazy" decoding="async" />)}
            <span><i>0{categoryIndex+1}</i><strong>{projects[categoryIndex].title}</strong><ArrowUpRight size={18}/></span>
          </button>
          <nav className="category-list" aria-label="作品分类">
            {projects.map((project,index)=><button key={project.title} className={index===categoryIndex?'active':''} onPointerEnter={(event)=>event.pointerType!=='touch'&&setCategoryIndex(index)} onClick={()=>index===categoryIndex?openProject(project):setCategoryIndex(index)}><i>0{index+1}</i><strong>{project.title}</strong><ArrowUpRight size={17}/></button>)}
          </nav>
        </div>
        <header className="brand-case-section-head reveal" id="brand-cases"><span>品牌全案案例</span><p>六个独立品牌，从定位、产品系统到上市传播</p></header>
        <div className="brand-case-grid reveal" aria-label="品牌全案">
          {brandCases.map((item, index) => <button className="brand-case-card" key={item.title} onClick={() => setActive(item.project)}>
            <img src={item.image} alt="" loading="lazy" decoding="async" />
            <span className="brand-case-card__shade" aria-hidden="true" />
            <span className="brand-case-card__top"><em>SELECTED BRAND CASE</em><i>0{index + 1} / 06</i></span>
            <span className="brand-case-card__body"><strong>{item.title}</strong><small>{item.eyebrow}</small></span>
            <span className="brand-case-card__foot"><i>查看案例 <ArrowUpRight size={17} /></i></span>
          </button>)}
        </div>
      </section>

      <MotionMarquee />

      <section className="capabilities-section" id="capabilities">
        <header className="section-head reveal"><div><span>专业能力</span><h2>把复杂的问题，<br />整理成清晰的视觉系统。</h2></div><p>从品牌起点到真实应用</p></header>
        <article className="capability-showreel reveal">
          <div className="capability-showreel__head">
            <div><span>能力概览</span><h3>从判断到落地</h3></div>
            <small>DESIGN CAPABILITY · 00:23</small>
          </div>
          <video
            className="capability-showreel__video"
            controls
            playsInline
            preload="metadata"
            poster="/assets/capability/capability-showreel-poster.jpg"
            aria-label="刘伟琪专业能力动态介绍"
          >
            <source src="/assets/capability/capability-showreel.mp4" type="video/mp4" />
            当前浏览器不支持视频播放。
          </video>
        </article>
        <div className="capability-grid">
          <article className="capability-item reveal"><span>品牌策略与识别</span><h3>建立品牌<br />独有的视觉语言</h3><p>梳理品牌定位、核心价值与受众认知，将抽象策略转化为清晰、可持续使用的识别系统。</p><small>品牌定位　标志系统　色彩与字体　VI规范</small></article>
          <article className="capability-item reveal"><span>包装系统设计</span><h3>让产品在货架与<br />屏幕中被看见</h3><p>兼顾信息层级、视觉记忆与系列延展，让包装既有鲜明个性，也能适应真实生产和销售场景。</p><small>包装策略　系列架构　版式系统　应用延展</small></article>
          <article className="capability-item reveal"><span>IP与品牌延展</span><h3>创造可以持续<br />生长的品牌角色</h3><p>从角色设定到表情、动作与传播物料，构建更有温度、更容易被消费者记住的品牌资产。</p><small>IP设定　动作表情　周边延展　传播物料</small></article>
          <article className="capability-item reveal"><span>创意视觉与KV</span><h3>用一个画面<br />讲清核心信息</h3><p>围绕传播主题建立概念与视觉焦点，完成海报、主视觉及线上线下物料的统一表达。</p><small>创意概念　主视觉　海报设计　活动延展</small></article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-statement reveal"><span>关于我</span><h2><span>设计不是表面的装饰，</span><span>而是让品牌被理解、</span><span>被选择、被记住。</span></h2></div>
        <div className="about-detail reveal"><p>我是刘伟琪，一名专注于品牌识别与包装设计的平面设计师。我关注策略、视觉与实际应用之间的关系，希望每个项目不仅好看，也拥有清晰的逻辑和可以长期生长的生命力。</p><p>我习惯从品牌和产品本身寻找答案，再通过字体、色彩、图形、材料与叙事建立独有的视觉性格。</p><div className="about-meta"><span><i>身份</i>品牌与包装设计师</span><span><i>合作方式</i>项目制／长期设计支持</span><span><i>所在地</i>中国 · 可远程合作</span></div></div>
        <div className="process reveal"><span>合作流程</span><ol><li><em>01</em><strong>需求沟通</strong><p>了解品牌背景、目标与项目范围</p></li><li><em>02</em><strong>策略梳理</strong><p>确认核心方向与视觉机会</p></li><li><em>03</em><strong>设计推进</strong><p>从概念到系统化方案逐步落地</p></li><li><em>04</em><strong>交付延展</strong><p>完成规范、文件与后续应用支持</p></li></ol></div>
      </section>

      <section className="contact" id="contact"><span>开始一段新的合作</span><h2>让你的产品，<br />拥有值得被记住的样子。</h2><div className="contact-actions"><a href="mailto:lwqq1177@163.com"><EnvelopeSimple size={24} /><span>发送合作需求<small>lwqq1177@163.com</small></span></a><a href="tel:18578768864"><WechatLogo size={25} /><span>185 7876 8864<small>电话／微信同号</small></span></a></div></section>
      <footer><span>刘伟琪｜品牌与包装设计师</span><span>© 2026</span></footer>
    </main>
    <ProjectModal project={active} onClose={closeProject} onSelect={selectProject} />
  </>
}
