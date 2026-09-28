document.documentElement.classList.add("js");

const PROFILES = {
  minh: {
    background: "#cfc6ff",
    index: "01 / 02",
    name: "Nguyễn Hữu Nhật Minh",
    role: "Creative Frontend Developer",
    image: "assets/images/member-1.JPG",
    quote: "Thiết kế tốt bắt đầu từ cảm giác, rồi mới đến tính năng.",
    bio: "Minh yêu thích việc biến ý tưởng thành những giao diện giàu nhịp điệu nhưng vẫn rõ ràng và dễ sử dụng. Vai trò chính là định hướng hình ảnh, xây dựng hệ thống giao diện và tạo chuyển động có chủ đích.",
    skills: ["UI Direction", "HTML / CSS", "Motion Design", "Responsive UI"],
    hobbies: ["Thiết kế", "Nhiếp ảnh", "Âm nhạc", "Khám phá web"]
  },
  quang: {
    background: "#ffc2b5",
    index: "02 / 02",
    name: "Lê Trần Lam Quang",
    role: "Product & Interaction Developer",
    image: "assets/images/member-2.jpg",
    quote: "Tương tác tốt là khi người dùng không cần nghĩ về cách sử dụng.",
    bio: "Quang tập trung vào logic sản phẩm, cấu trúc dữ liệu và các tương tác giúp trải nghiệm trở nên tự nhiên. Vai trò chính là biến luồng phức tạp thành thao tác đơn giản, nhanh và đáng tin cậy.",
    skills: ["JavaScript", "Product Logic", "UX Prototyping", "Testing"],
    hobbies: ["Công nghệ", "Thể thao", "Phim ảnh", "Giải quyết vấn đề"]
  }
};

const PROJECTS = {
  uniflow: {
    accent: "#9e88ff",
    owner: "Nguyễn Hữu Nhật Minh · UI/UX concept",
    name: "UniFlow",
    summary: "Dashboard học tập gom lịch, deadline và tiến độ môn học vào một không gian trực quan. Hệ thống ưu tiên thông tin theo thời gian để sinh viên biết chính xác việc cần làm tiếp theo.",
    role: "UI direction & frontend",
    focus: "Information hierarchy",
    tools: "Figma · HTML · CSS",
    outcome: "Concept responsive hoàn chỉnh với hệ thống component, trạng thái deadline và bố cục thích ứng từ laptop xuống điện thoại."
  },
  focusroom: {
    accent: "#d8ff62",
    owner: "Nguyễn Hữu Nhật Minh · Motion concept",
    name: "FocusRoom",
    summary: "Trải nghiệm Pomodoro tối giản, dùng chuyển động và âm sắc để tạo nhịp tập trung. Giao diện thay đổi nhẹ theo từng pha làm việc và nghỉ ngắn.",
    role: "Visual design & motion",
    focus: "Focus rhythm",
    tools: "CSS Motion · JavaScript",
    outcome: "Một prototype nhẹ, dễ dùng bằng bàn phím và duy trì cảm giác tập trung trên cả màn hình lớn lẫn điện thoại."
  },
  campuspulse: {
    accent: "#ff8d72",
    owner: "Lê Trần Lam Quang · Product concept",
    name: "Campus Pulse",
    summary: "Bản đồ sự kiện trong trường giúp sinh viên tìm hoạt động phù hợp theo thời gian, vị trí và sở thích mà không phải lục tìm thông báo rời rạc.",
    role: "Product flow & prototype",
    focus: "Event discovery",
    tools: "JavaScript · UX Flow",
    outcome: "Luồng khám phá sự kiện ngắn gọn, có trạng thái rõ ràng và thao tác một tay thuận tiện trên màn hình điện thoại."
  },
  ecotrace: {
    accent: "#78d9ff",
    owner: "Lê Trần Lam Quang · Interaction concept",
    name: "EcoTrace",
    summary: "Ứng dụng theo dõi thói quen xanh, chuyển các hành động nhỏ hàng ngày thành biểu đồ tiến bộ dễ hiểu và mục tiêu có thể duy trì.",
    role: "Interaction & data logic",
    focus: "Habit feedback",
    tools: "JavaScript · Charts · CSS",
    outcome: "Prototype thể hiện tiến độ theo tuần, phản hồi tức thời sau mỗi hành động và hệ thống mục tiêu phù hợp cho cả laptop lẫn mobile."
  }
};

const profileDialog = document.querySelector("#profile-dialog");
const projectDialog = document.querySelector("#project-dialog");

function fillTags(container, values) {
  container.replaceChildren(...values.map(value => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = value;
    return tag;
  }));
}

function openProfile(key) {
  const profile = PROFILES[key];
  if (!profile) return;
  const image = document.querySelector("#profile-image");
  image.src = profile.image;
  image.alt = `Chân dung minh họa ${profile.name}`;
  document.querySelector("#profile-index").textContent = profile.index;
  document.querySelector("#profile-role").textContent = profile.role;
  document.querySelector("#profile-name").textContent = profile.name;
  document.querySelector("#profile-quote").textContent = profile.quote;
  document.querySelector("#profile-bio").textContent = profile.bio;
  profileDialog.style.setProperty("--profile-bg", profile.background);
  fillTags(document.querySelector("#profile-skills"), profile.skills);
  fillTags(document.querySelector("#profile-hobbies"), profile.hobbies);
  profileDialog.showModal();
}

function openProject(key) {
  const project = PROJECTS[key];
  if (!project) return;
  document.querySelector("#project-owner").textContent = project.owner;
  document.querySelector("#project-name").textContent = project.name;
  document.querySelector("#project-summary").textContent = project.summary;
  document.querySelector("#project-role").textContent = project.role;
  document.querySelector("#project-focus").textContent = project.focus;
  document.querySelector("#project-tools").textContent = project.tools;
  document.querySelector("#project-outcome").textContent = project.outcome;
  document.querySelector("#project-preview-name").textContent = project.name;
  projectDialog.style.setProperty("--project-accent", project.accent);
  setDevice("laptop");
  projectDialog.showModal();
}

function setDevice(device) {
  const frame = document.querySelector("#device-frame");
  frame.classList.toggle("is-mobile", device === "mobile");
  frame.classList.toggle("is-laptop", device === "laptop");
  document.querySelectorAll("[data-device]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.device === device));
  });
}

document.querySelectorAll("[data-profile]").forEach(button => {
  button.addEventListener("click", () => openProfile(button.dataset.profile));
});

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

document.querySelectorAll("[data-device]").forEach(button => {
  button.addEventListener("click", () => setDevice(button.dataset.device));
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => button.closest("dialog")?.close());
});

[profileDialog, projectDialog].forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
});

const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6%" });
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}

const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");
let ticking = false;

function updateScrollUI() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
  progress.style.transform = `scaleX(${ratio})`;
  header.classList.toggle("is-scrolled", window.scrollY > 28);
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateScrollUI);
}, { passive: true });
updateScrollUI();

const navLinks = [...document.querySelectorAll("[data-nav]")];
const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-25% 0px -55%", threshold: [0, .2, .5] });
  sections.forEach(section => navObserver.observe(section));
}

const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
if (canHover.matches) {
  document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--ry", `${(x - .5) * 9}deg`);
      card.style.setProperty("--rx", `${(.5 - y) * 9}deg`);
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--rx", "0deg");
    });
  });

  const hero = document.querySelector(".hero");
  const stage = document.querySelector("[data-stage]");
  hero.addEventListener("pointermove", event => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    hero.style.setProperty("--spot-x", `${x * 100}%`);
    hero.style.setProperty("--spot-y", `${y * 100}%`);
    stage.querySelectorAll("[data-depth]").forEach(layer => {
      const depth = Number(layer.dataset.depth) || 20;
      layer.style.setProperty("--px", `${(x - .5) * depth}px`);
      layer.style.setProperty("--py", `${(y - .5) * depth}px`);
    });
  });
}
