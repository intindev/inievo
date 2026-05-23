/**
 * Psychologically-targeted FAQ content for each commercial page.
 *
 * Written in Bangla (with brief English clarifications where useful) to
 * directly address the objections of Bangladeshi SME owners, founders,
 * and high-profile professionals. These answers also feed the FAQPage
 * JSON-LD schema for Google rich results.
 */

import type { FAQ } from "@/lib/types";

export const SME_FAQS: readonly FAQ[] = [
  {
    question: "আমার Facebook page-এ তো ভালোই sales হচ্ছে। Website কি সত্যিই দরকার?",
    answer:
      "Facebook হলো ভাড়া করা জায়গা — algorithm পাল্টালে আপনার reach রাতারাতি কমে যেতে পারে। Website হলো আপনার নিজের সম্পত্তি। নতুন customer যখন আপনার ব্র্যান্ড Google-এ search করেন, তখন একটা professional website থাকা মানেই credibility — যেটা DM-based business কখনোই দিতে পারে না। সবচেয়ে বড় কথা: Facebook + Website একসাথে কাজ করলে আপনার ad spend-এর ROI প্রায় দ্বিগুণ হয়ে যায়।",
  },
  {
    question: "Website বানাতে কত টাকা লাগবে এবং কতদিন সময় লাগে?",
    answer:
      "একটি launch-ready SME website সাধারণত ৳৩৫,০০০ থেকে ৳১,৫০,০০০ টাকার মধ্যে হয়, কাজের scope-এর উপর নির্ভর করে। সময় লাগে ৩–৫ সপ্তাহ। আমরা কখনো hidden cost যোগ করি না — কথা বলার পরে আপনি একটা fixed quote পাবেন এবং সেটাই final দাম।",
  },
  {
    question: "Website বানানোর পর maintain করতে কি আলাদা technical knowledge লাগবে?",
    answer:
      "একদম না। আমরা একটি সহজ Bangla-friendly admin panel দেই যেখান থেকে আপনি product, price, stock নিজে update করতে পারবেন — ঠিক Facebook post দেওয়ার মতো সহজ। আর hosting, SSL, security patch — এই সব কিছু আমাদের monthly care plan-এ included।",
  },
  {
    question: "আমার product-এর photos কি website-এ ব্যবহার করা যাবে?",
    answer:
      "অবশ্যই। আমরা আপনার existing Facebook photos নিয়ে সেগুলো optimize করি — automatic compression, lazy loading, এবং WebP format — যাতে website-এ আপনার product দেখতে আরও sharp লাগে এবং mobile data কম খরচ হয়।",
  },
  {
    question: "Website থাকলে কি আমার Facebook marketing বন্ধ করতে হবে?",
    answer:
      "কখনোই না। Facebook থাকবে আপনার discovery channel — মানুষ সেখান থেকে আপনাকে চিনবে। আর website হবে conversion engine — যেখানে এসে তারা trust করে কিনবে। দুটো মিলে যে synergy তৈরি হয়, সেটাই আজকের সবচেয়ে successful SME-দের formula।",
  },
];

export const CUSTOM_FAQS: readonly FAQ[] = [
  {
    question: "Ready-made software (যেমন existing ERP tools) ব্যবহার না করে custom কেন বানাবো?",
    answer:
      "Ready-made software আপনাকে তার rules অনুসরণ করতে বাধ্য করে। কিন্তু আপনার business unique — workflow, terminology, এমনকি অনেক সময় regulation-ও আলাদা। Custom software আপনার exact ভাবে কাজ করে, কোনো অপ্রয়োজনীয় feature-এর জন্য আপনাকে টাকা দিতে হয় না, এবং কোনো monthly per-user fee নেই — long-run এ এটাই সবচেয়ে সাশ্রয়ী।",
  },
  {
    question: "আমার বাজেট কম। Custom software কি আমার জন্য feasible?",
    answer:
      "হ্যাঁ — আমরা MVP-first approach-এ কাজ করি। প্রথমে শুধুমাত্র সবচেয়ে important ৩–৫টা feature নিয়ে একটি কাজ চালানোর মতো version build করি (সাধারণত ৳১,৫০,০০০–৳৪,০০,০০০)। ব্যবসা বড় হলে তারপর phase by phase নতুন feature যোগ হয়। এতে আপনার risk এবং upfront cost দুটোই অনেক কম থাকে।",
  },
  {
    question: "Software বানানোর পর আমি নিজে কিভাবে manage করবো?",
    answer:
      "প্রতিটি Inievo build-এর সাথে আমরা: (১) একটি Bangla-friendly admin dashboard, (২) সম্পূর্ণ source code এবং deployment credentials, এবং (৩) আপনার team-এর জন্য hands-on training দেই। চাইলে আমরা SLA-backed care plan-এও থাকতে পারি, কিন্তু আপনি কখনো আমাদের উপর dependent হবেন না।",
  },
  {
    question: "ভবিষ্যতে নতুন features add করতে কি নতুন করে সব বানাতে হবে?",
    answer:
      "একদমই না। আমরা clean architecture follow করি — প্রতিটি module আলাদা ভাবে design করা হয় যাতে নতুন feature যোগ করতে দিন লাগে, সপ্তাহ নয়। এটাই custom-built software-এর সবচেয়ে বড় সুবিধা।",
  },
  {
    question: "Mobile app-ও কি একই বাজেটে হবে?",
    answer:
      "আমরা React Native ব্যবহার করি — মানে একই codebase থেকে iOS এবং Android দুটোই একসাথে build হয়। এতে আলাদা আলাদা ভাবে দুটো app বানানোর তুলনায় cost প্রায় ৪০% কমে যায়, আর update-ও আসে একসাথে।",
  },
];

export const PRO_FAQS: readonly FAQ[] = [
  {
    question: "আমি ডাক্তার/ইঞ্জিনিয়ার। Website আমার কি কাজে আসবে?",
    answer:
      "আজকের patient বা client সবার আগে Google-এ আপনাকে search করে। যদি প্রথম page-এ আপনার নিজের website না থাকে, তাহলে তারা random review site বা competitor-এর pages দেখে — যা আপনার reputation-এর সম্পূর্ণ control আপনার বাইরে নিয়ে যায়। একটি professional website মানে আপনার credentials, publications, এবং appointment booking — সবকিছু আপনার নিজের narrative-এ।",
  },
  {
    question: "আমার social media account তো আছেই। Website কি আলাদা প্রয়োজন?",
    answer:
      "Social media হলো conversation-এর জায়গা, কিন্তু verification-এর জন্য মানুষ এখনো website দেখে। বিদেশে গেলে দেখবেন — প্রতিটি respected professional-এর নিজের domain-এ একটি personal site আছে। বাংলাদেশে এটা এখনো rare — মানে এটাই আপনার আলাদা ভাবে stand out করার সুযোগ।",
  },
  {
    question: "আমি tech-savvy না। আমি কি নিজে website update করতে পারবো?",
    answer:
      "হ্যাঁ — আমরা একটি extremely simple admin panel দেই যেখান থেকে নতুন publication, award, বা media appearance যোগ করা যায় Facebook post দেওয়ার মতোই সহজে। চাইলে আপনি আমাদের quarterly content refresh service-ও নিতে পারেন — তাহলে আপনাকে কিছুই করতে হবে না।",
  },
  {
    question: "Personal website কি Google-এ rank করে?",
    answer:
      "অবশ্যই — এবং এটা SME website-এর চেয়েও দ্রুত rank করে কারণ আপনার নামের সাথে competition নেই। আমরা প্রতিটি pro-presence website schema markup, proper meta data, এবং publication-rich content দিয়ে launch করি — যাতে আপনার নাম search করলে প্রথম result-এ আপনার site আসে।",
  },
  {
    question: "Website বানালে কি আমার consultation বা client বাড়বে?",
    answer:
      "আমাদের client data বলে — হ্যাঁ, এবং তা প্রায় ৬ মাসের মধ্যে measurable হয়। একজন senior cardiologist-এর case-এ inbound consultation request ৩ গুণ বেড়েছিল প্রথম বছরেই। তবে আরও বড় ব্যাপার হলো — আপনার client-এর quality উন্নত হয়, কারণ তারা ইতিমধ্যেই আপনার credentials এবং approach দেখে এসে কথা বলে।",
  },
];
