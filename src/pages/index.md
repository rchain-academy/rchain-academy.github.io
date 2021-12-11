---
title: 'RChain Academy'
description: ''
layout: '@/layouts/MainLayout.astro'
setup: |
  import {Markdown} from 'astro/components';

  import BannerSection from '@/sections/banner/BannerSection.astro';
  import Banner from '@/sections/banner/Banner.astro';

---

<BannerSection>
  <Banner>
    <div style="display: flex; flex-direction: column;">
    <h3 class="float-md-start mb-0"><b style="color: #A93226;">RChain</b> Academy</h3>
    <span>...Coming soon...</span>
    </div>
  </Banner>
  
</BannerSection>
