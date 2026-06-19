---
title: "Core Web Vitals Performance Engineering Case Study"
description: "A technical case study of Dreams4u loading improvements: route splitting, below-the-fold code, image priority, stable dimensions, caching, and third-party control."
category: Case Study
tags: core web vitals case study, website performance, lcp, inp, cls, react optimization
author: Dreams4U Team
date: 2026-06-19
readTime: 8 min
image: /images/responsive-website-development-india.webp
faqs:
  - question: "Does this case study claim the site always meets Core Web Vitals?"
    answer: "No. The implementation targets the good thresholds, but final status depends on real-user field data after deployment."
  - question: "Why lazy-load below-the-fold components?"
    answer: "It reduces JavaScript needed for the initial view and lets the browser prioritize content users see first."
  - question: "Why is the hero image not lazy-loaded?"
    answer: "The hero is a likely LCP element, so delaying its request can make LCP worse."
---

## Project Summary

The Dreams4u homepage used a lightweight hero image but synchronously imported several below-the-fold sections that included animation and slider libraries. The performance work focused on initial loading, image priority, stable layout, caching, and third-party timing.

| Metric | Target | Main engineering lever |
| --- | ---: | --- |
| LCP | Under 2.5 seconds | Hero priority, asset size, server delivery |
| INP | Under 200 milliseconds | Less initial JavaScript and main-thread work |
| CLS | Under 0.1 | Dimensions, aspect ratios, stable UI |

## Initial Findings

Most images were already WebP, and production assets used long cache headers. The remaining opportunity was JavaScript: homepage imports pulled interactive sections into the initial dependency graph even though they appeared well below the first viewport.

The article hero also combined lazy loading with high fetch priority, which sent conflicting intent. The main visual now loads eagerly, while article content images remain lazy-loaded.

## Implementation

### Route and section splitting

Non-home routes already used dynamic imports. Below-the-fold homepage sections were separated so heavy slider and animation code could load outside the first critical path.

### Image behaviour

Public raster assets use WebP where available. Images include dimensions, below-the-fold images use lazy loading, and likely LCP images use eager loading and high priority. Duplicate loading attributes were removed.

### Caching and delivery

Hashed build assets and public images use long-lived cache headers. The deployment remains compatible with CDN delivery, while HTML can update independently.

### Third-party scripts

Analytics loading remains deferred after the window load event. Third-party code should continue to be reviewed because it can affect INP and total blocking time after internal bundles are optimized.

## What Was Not Claimed

No lab score was converted into a universal performance claim. Core Web Vitals status should use production field data at the 75th percentile after enough visits are collected.

Local development and Lighthouse remain useful for regression checks, but network quality, devices, cache state, and third-party behaviour vary for real users.

## Verification Plan

1. Build production assets and review chunk sizes.
2. Check the homepage and priority service route at desktop and mobile widths.
3. Confirm no console errors or missing images.
4. Run PageSpeed Insights after deployment.
5. Review Search Console Core Web Vitals groups.
6. Track real LCP element, INP interactions, and CLS sources.

## Outcome

The verified engineering outcome is a smaller critical dependency path, clearer image priorities, and stable asset delivery rules. Final Core Web Vitals pass rates remain a production measurement task.

Read the [website speed optimization guide](/blog/website-speed-optimization-guide), explore [website maintenance](/website-maintenance-services-in-faridabad), or [request a performance review](/contact).
