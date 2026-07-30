/**
 * All copy lives here so it can be edited without touching components.
 * Swap the photo by dropping your image at: public/me.jpg
 */

export const profile = {
  name: "Philip Waluisachi",
  role: "Software Engineer",
  eyebrow: "My Taaluma Story",
  tagline:
    "I build for the version of me who once had no plan — and moved anyway.",
  photo: "/me.jpg",
  initials: "PW",
};

export const sections = [
  {
    id: "photo",
    num: "01",
    nav: "The Photo",
    kicker: "Something meaningful about me",
    title: "Where it clicked",
    lead: "Headphones in. Printed notes beside the laptop. A borrowed desk and a lot of PHP.",
    body: [
      "That's me in campus, early — the stretch where engineering stopped being syntax and coursework and started being something real. I was building websites in PHP: not an assignment, an actual thing someone would pay for.",
      "School gave us computer science. It never handed us a real system to build, which always felt like the part that mattered most. So that desk is where I went looking for one.",
    ],
    pull: "That's the moment the work became mine, not the curriculum's.",
  },
  {
    id: "turning-point",
    num: "02",
    nav: "Turning Point",
    kicker: "One turning point that shaped me",
    title: "The year the floor moved",
    lead: "Late 2018 into 2019.",
    body: [
      "My brother had a big place and offered me a room — I'd save on rent, so I moved in. Some months later he travelled to Uganda to close a business deal. He never came back. I still don't know what went down.",
      "Overnight I was standing in a house I could not possibly afford, with no next step and exams a few days out. I had to leave.",
      "That week is where the drive came from. Not from a plan working out — from having none and moving anyway. I still run on it.",
    ],
    pull: "I found myself in that week. I've been running on it since.",
  },
  {
    id: "mentor",
    num: "03",
    nav: "The Mentor",
    kicker: "The person who changed my direction",
    title: "Two hours a day, after work",
    lead: "A cousin. A brother, really.",
    body: [
      "We've known each other from way back — properly since 2012, when he first opened up the world of computers to me. Nothing professional about it. Just curiosity, and someone willing to show me.",
      "When I got to campus he offered to teach me to program. I still can't remember exactly how we landed there. We'd meet in town after my classes and after his workday, and go two to four hours, most days, before breaking.",
      "That's when it stopped being lines on a screen. That's when I truly got the hang of what code could do.",
    ],
    pull: "Someone gave me hours they didn't owe me. That's the whole story.",
  },
];

export const superpower = {
  id: "superpower",
  num: "04",
  nav: "Superpower",
  kicker: "My strongest professional superpower",
  title: "Best foot forward. Every time.",
  lead: "Three things you can count on from me.",
  traits: [
    {
      icon: "Flame",
      title: "Best foot forward",
      body: "Whatever the situation, whatever the constraints or the timeline — the work leaves my hands at my best. That standard doesn't move with the conditions.",
    },
    {
      icon: "Shuffle",
      title: "Diverse by default",
      body: "Frontend, backend, infrastructure, product. I move toward the problem instead of waiting for it to arrive in my lane.",
    },
    {
      icon: "Ear",
      title: "Listen, then learn",
      body: "I'd rather understand the room than perform for it. Quiet questions have taught me more than loud opinions ever did.",
    },
  ],
};

export const mission = {
  id: "mission",
  num: "05",
  nav: "For Taaluma",
  kicker: "What I hope to help Taaluma achieve",
  title: "Careers shaped for the person",
  lead: "Not for the template.",
  body: [
    "I want us to genuinely shape careers — built around who someone actually is and where the work is actually going.",
    "Because the map changed. What a career looked like in 2010 doesn't hold anymore. The paths people are really breaking through on today are new ones, and they don't appear in the old advice.",
    "So the most useful thing we can do is study how people are actually getting in — and build Taaluma around that reality instead of the one we inherited.",
  ],
  pull: "Learn from how people are breaking through now. Build for that.",
};

export const needs = {
  id: "needs",
  num: "06",
  nav: "What I Need",
  kicker: "What I'll need from the team",
  title: "To do my best work",
  lead: "Three things, and I'll take it from there.",
  items: [
    {
      icon: "Compass",
      title: "Context, not just tickets",
      body: "Tell me the why behind the work. Hand me the problem and I'll build the right thing; hand me only the spec and I'll build exactly what it says.",
    },
    {
      icon: "MessageSquare",
      title: "Say it early, say it straight",
      body: "If something I've built or said is off, I want to hear it in week one, not week six. Direct beats polite. I won't take it personally.",
    },
    {
      icon: "Share2",
      title: "Share what you know, openly",
      body: "I learn by listening. The more freely you pass on what's in your head — the customer calls, the failed attempts, the reasons — the faster I'm useful to you.",
    },
  ],
};

export const meta = {
  event: "Taaluma Team Workshop",
  footerNote: ""//"Prepared for team introductions — one page, one story.",
};
