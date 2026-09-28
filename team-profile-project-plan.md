# TEAM PROFILE WEBSITE — PROJECT PLAN & TECHNICAL SPECIFICATION

## 1. Tổng quan dự án

**Tên dự án:** Team Profile Website

**Mục tiêu:** Xây dựng một website tĩnh giới thiệu nhóm, mặc định gồm **3 thành viên**, sử dụng **HTML, CSS và JavaScript thuần**. Website phải responsive, dễ sử dụng, chạy hoàn toàn trên local và có các interaction cơ bản để thể hiện khả năng xử lý DOM bằng JavaScript.

Các chức năng chính:

- Xem danh sách thành viên.
- Xem thông tin chi tiết của từng thành viên.
- Thêm thành viên mới.
- Xóa thành viên.
- Lưu dữ liệu thêm/xóa bằng `localStorage`.
- Responsive tốt trên laptop, tablet và điện thoại.

---

# 2. Yêu cầu từ bài tập

Website cần đáp ứng các yêu cầu sau:

- Xác định rõ **đối tượng người xem** và **thông điệp chính**.
- Chỉ cần khoảng **2–3 section chính**, có thứ tự ưu tiên rõ ràng.
- Có cách trình bày phù hợp trên **màn hình rộng và màn hình hẹp**.
- Có ít nhất **một interaction nhỏ nhưng thực sự hữu ích**.
- Dùng **plain CSS** hoặc framework cơ bản; project này chọn **plain CSS**.
- Website và source code phải chạy được trên local.
- Có ảnh chụp ở viewport rộng và hẹp.
- Có demo interaction chính.
- Có thể nêu ít nhất **một lỗi đã phát hiện và sửa** trong quá trình làm.

---

# 3. Đối tượng sử dụng

Đối tượng chính:

- Giảng viên.
- Sinh viên.
- Người xem profile của nhóm.

Ưu tiên lớn nhất vẫn là **giảng viên chấm bài**, vì vậy website cần thể hiện rõ:

- HTML structure.
- CSS layout.
- Responsive design.
- JavaScript interaction.
- Tổ chức source code rõ ràng.

---

# 4. Thông điệp chính

Website truyền tải thông điệp:

> Đây là website giới thiệu các thành viên trong nhóm, giúp người xem nhanh chóng biết mỗi người là ai, có kỹ năng và đặc điểm gì, đồng thời cho phép quản lý danh sách thành viên ngay trên trình duyệt.

Có thể dùng tagline:

> **Three people. Different personalities. One team.**

---

# 5. Công nghệ sử dụng

Sử dụng:

- HTML5.
- CSS3.
- Vanilla JavaScript.
- `localStorage`.

Không sử dụng:

- React.
- Vue.
- Angular.
- Bootstrap.
- Tailwind.
- Backend.
- Database.
- API server.
- Authentication.
- Admin dashboard.

Mục tiêu là giữ project đúng phạm vi bài học HTML/CSS/JS cơ bản.

---

# 6. Cấu trúc tổng thể website

Website gồm:

```text
Team Profile Website
│
├── Header / Navbar
├── Section 1: Hero
├── Section 2: Team Members
│   ├── Add Member Button
│   ├── Member Cards
│   ├── Member Detail Modal
│   ├── Add Member Modal
│   └── Delete Confirmation Modal
├── Section 3: About Team
└── Footer
```

Ba section nội dung chính:

1. Hero.
2. Members.
3. About.

Modal không tính là một section riêng.

---

# 7. Header / Navbar

Desktop:

```text
┌────────────────────────────────────────────────────┐
│ TEAM PROFILE          Home   Members   About       │
└────────────────────────────────────────────────────┘
```

Các menu:

- Home.
- Members.
- About.

Khi click:

```text
Navbar item
    ↓
Smooth scroll
    ↓
Section tương ứng
```

Không chuyển sang trang HTML khác.

---

# 8. Section 1 — Hero

Mục đích:

- Giới thiệu nhanh website.
- Truyền tải thông điệp chính.
- Điều hướng người dùng xuống phần Members.

Ví dụ:

```text
GROUP PROFILE

Three people.
Different personalities.
One team.

[ Meet The Team ]
```

Nút:

```text
Meet The Team
```

Hoạt động:

```text
Click
  ↓
Scroll xuống Members Section
```

Không nên đưa quá nhiều nội dung vào Hero.

---

# 9. Section 2 — Team Members

Đây là section quan trọng nhất.

Header gợi ý:

```text
OUR TEAM

Meet the members of our group.

                         [+ Add Member]
```

Ban đầu có 3 member:

```text
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│    IMAGE     │ │    IMAGE     │ │    IMAGE     │
│              │ │              │ │              │
│   Member 1   │ │   Member 2   │ │   Member 3   │
│     Role     │ │     Role     │ │     Role     │
│              │ │              │ │              │
│ View Profile │ │ View Profile │ │ View Profile │
│    Delete    │ │    Delete    │ │    Delete    │
└──────────────┘ └──────────────┘ └──────────────┘
```

---

# 10. Member Card

Mỗi card chỉ hiển thị thông tin ngắn:

- Ảnh.
- Họ tên.
- Vai trò / ngành học.
- Nút `View Profile`.
- Nút `Delete`.

Ví dụ:

```text
┌────────────────────────┐
│                        │
│         PHOTO          │
│                        │
│ Nguyễn Văn A           │
│ Software Engineering   │
│                        │
│ [View Profile]         │
│ [Delete]               │
└────────────────────────┘
```

Không nên đưa toàn bộ profile ra card.

Lý do: giữ card gọn và làm cho chức năng `View Profile` có ý nghĩa.

---

# 11. Thông tin chi tiết của mỗi thành viên

Mỗi thành viên có thể chứa:

- Avatar.
- Full Name.
- Student ID.
- Major / Class.
- Role.
- Short Bio.
- Skills.
- Hobbies.
- Social links.

Ví dụ:

```text
Nguyễn Văn A

Student ID:
24xxxxxx

Major:
Software Engineering

About:
Sinh viên yêu thích phát triển web...

Skills:
HTML
CSS
JavaScript
Java

Hobbies:
Coding
Music
Football

GitHub
Facebook
Email
```

Không bắt buộc người nào cũng phải có đầy đủ tất cả social link.

---

# 12. Xem thông tin chi tiết — Member Detail Modal

Khi click `View Profile` hoặc click card:

```text
Member
   ↓
JavaScript
   ↓
Tìm member theo ID
   ↓
Đưa dữ liệu vào modal
   ↓
Mở modal
```

Ví dụ:

```text
┌─────────────────────────────────┐
│                              X  │
│                                 │
│             PHOTO               │
│                                 │
│ Nguyễn Văn A                    │
│                                 │
│ Student ID: 24xxxxxx            │
│ Major: Software Engineering     │
│                                 │
│ About                           │
│ ...                             │
│                                 │
│ Skills                          │
│ HTML • CSS • JavaScript         │
│                                 │
│ Hobbies                         │
│ Coding • Music • Football       │
│                                 │
└─────────────────────────────────┘
```

Modal có thể đóng bằng:

- Nút `X`.
- Click ra ngoài modal.
- Phím `ESC`.

Chỉ cần dùng **một modal duy nhất**, sau đó JavaScript thay đổi nội dung tùy member được chọn.

---

# 13. Chức năng Add Member

Trong Members Section có:

```text
+ Add Member
```

Khi click:

```text
Add Member
    ↓
Open Add Member Modal
```

Form đề xuất:

```text
┌────────────────────────────────┐
│ ADD NEW MEMBER              X  │
│                                │
│ Full Name *                    │
│ [________________________]     │
│                                │
│ Student ID *                   │
│ [________________________]     │
│                                │
│ Major / Role *                 │
│ [________________________]     │
│                                │
│ Image URL                      │
│ [________________________]     │
│                                │
│ Bio                            │
│ [________________________]     │
│ [________________________]     │
│                                │
│ Skills                         │
│ [HTML, CSS, JavaScript____]    │
│                                │
│ Hobbies                        │
│ [Music, Football__________]    │
│                                │
│       [Cancel] [Add Member]    │
└────────────────────────────────┘
```

---

# 14. Validation khi thêm thành viên

Các field bắt buộc:

- Full Name.
- Student ID.
- Major / Role.

Ví dụ:

```text
Full Name:
""

→ Full name is required.
```

Khi dữ liệu hợp lệ:

```text
Submit
  ↓
Create member object
  ↓
Add vào members[]
  ↓
Save localStorage
  ↓
Render lại danh sách
  ↓
Close modal
```

Không cho thêm dữ liệu bắt buộc bị rỗng.

---

# 15. Xử lý ảnh khi Add Member

Để giữ project đơn giản, dùng:

```text
Image URL
```

Nếu không nhập ảnh:

```text
image = default-avatar.png
```

Không cần xử lý upload file thật trong phiên bản này.

---

# 16. Chức năng Delete Member

Mỗi card có nút:

```text
Delete
```

Không xóa ngay khi click.

Flow:

```text
Delete
  ↓
Open Confirmation Modal
```

Ví dụ:

```text
┌──────────────────────────────────┐
│ Delete member?                   │
│                                  │
│ Are you sure you want to delete  │
│ Nguyễn Văn A?                    │
│                                  │
│       [Cancel]      [Delete]     │
└──────────────────────────────────┘
```

Nếu chọn `Cancel`:

```text
Không thay đổi dữ liệu
```

Nếu chọn `Delete`:

```text
Remove member
    ↓
Save localStorage
    ↓
Render lại giao diện
```

---

# 17. Member ID

Mỗi thành viên phải có ID riêng.

Cấu trúc:

```text
Member
│
├── id
├── name
├── studentId
├── major
├── role
├── image
├── bio
├── skills[]
├── hobbies[]
└── social
```

Không nên xóa dựa vào vị trí:

```text
index = 0
index = 1
index = 2
```

Nên dùng:

```text
member.id
```

vì index có thể thay đổi sau khi thêm/xóa.

Có thể tạo ID bằng:

```text
Date.now()
```

hoặc:

```text
crypto.randomUUID()
```

nếu trình duyệt hỗ trợ.

---

# 18. Data Model

Nguồn dữ liệu chính nằm trong một array:

```text
members
│
├── member
│   ├── id
│   ├── name
│   ├── studentId
│   ├── major
│   ├── role
│   ├── image
│   ├── bio
│   ├── skills[]
│   ├── hobbies[]
│   └── social
│
├── member
└── member
```

Ví dụ về mặt cấu trúc:

```text
Member {
    id
    name
    studentId
    major
    role
    image
    bio
    skills
    hobbies
    social
}
```

---

# 19. Dữ liệu mặc định

Khi mở website lần đầu:

```text
localStorage chưa có members
            ↓
Load 3 members mặc định
            ↓
Save vào localStorage
```

Những lần sau:

```text
localStorage có dữ liệu
        ↓
Load dữ liệu đã lưu
        ↓
renderMembers()
```

---

# 20. LocalStorage

Nếu không dùng `localStorage`:

```text
Add member
   ↓
Member xuất hiện
   ↓
F5
   ↓
Mất dữ liệu
```

Khi dùng `localStorage`:

```text
Add / Delete
      ↓
members[]
      ↓
JSON.stringify()
      ↓
localStorage
```

Khi reload:

```text
localStorage
      ↓
JSON.parse()
      ↓
members[]
      ↓
renderMembers()
```

Kết quả:

```text
F5
↓
Dữ liệu vẫn còn
```

---

# 21. Nguyên tắc render giao diện

Nguồn dữ liệu chính:

```text
members[]
```

Không nên sửa HTML card thủ công từng member.

Tư duy:

```text
members[]
    ↓
renderMembers()
    ↓
HTML Cards
```

Sau khi Add:

```text
members.push(newMember)
      ↓
saveMembers()
      ↓
renderMembers()
```

Sau khi Delete:

```text
members = members.filter(...)
      ↓
saveMembers()
      ↓
renderMembers()
```

UI luôn phải được render lại từ dữ liệu hiện tại.

---

# 22. Responsive Design

## Desktop / Laptop lớn

Khoảng:

```text
> 900px
```

Hiển thị:

```text
3 columns
```

Ví dụ:

```text
┌───────┐ ┌───────┐ ┌───────┐
│   A   │ │   B   │ │   C   │
└───────┘ └───────┘ └───────┘
```

Nếu thêm Member 4:

```text
┌───────┐ ┌───────┐ ┌───────┐
│   A   │ │   B   │ │   C   │
└───────┘ └───────┘ └───────┘

┌───────┐
│   D   │
└───────┘
```

---

# 23. Tablet / Mobile

Khoảng:

```text
401px – 900px
```

Hiển thị:

```text
2 columns
```

Ví dụ 3 member:

```text
┌───────┐ ┌───────┐
│   A   │ │   B   │
└───────┘ └───────┘

┌───────┐
│   C   │
└───────┘
```

Nếu có 4:

```text
┌───────┐ ┌───────┐
│   A   │ │   B   │
└───────┘ └───────┘

┌───────┐ ┌───────┐
│   C   │ │   D   │
└───────┘ └───────┘
```

Đây là layout chính theo yêu cầu.

---

# 24. Small Mobile

Khoảng:

```text
≤ 400px
```

Chuyển thành:

```text
1 column
```

Ví dụ:

```text
┌────────────┐
│ Member 1   │
└────────────┘

┌────────────┐
│ Member 2   │
└────────────┘

┌────────────┐
│ Member 3   │
└────────────┘
```

Lý do:

- Card không bị quá hẹp.
- Text không xuống dòng quá nhiều.
- Button không bị chật.
- Ảnh không quá nhỏ.

---

# 25. Breakpoint dự kiến

Có thể dùng:

```text
Desktop:
> 900px
→ 3 columns

Tablet / Mobile:
401px – 900px
→ 2 columns

Small Mobile:
≤ 400px
→ 1 column
```

Có thể điều chỉnh breakpoint trong quá trình test thực tế.

---

# 26. Công nghệ layout

## Members

Dùng:

```text
CSS Grid
```

vì đây là layout hàng/cột.

## Navbar

Dùng:

```text
Flexbox
```

## Modal

Dùng:

```text
Flexbox
```

để căn giữa modal.

---

# 27. Section 3 — About Our Team

Section này ngắn gọn.

Ví dụ:

```text
ABOUT OUR TEAM

We are a group of students interested
in technology and web development.

Our goal is to learn, build and improve together.
```

Có thể thêm:

```text
3+ Members

1 Team

1 Shared Goal
```

Không nên biến phần About thành section quá dài.

---

# 28. Footer

Footer đơn giản:

```text
© 2026 Group Profile

Built with HTML, CSS & JavaScript
```

Có thể thêm GitHub link nếu nhóm đưa project lên GitHub.

---

# 29. Cấu trúc thư mục

Đề xuất:

```text
team-profile/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── assets/
    └── images/
        ├── member-1.jpg
        ├── member-2.jpg
        ├── member-3.jpg
        └── default-avatar.png
```

---

# 30. Trách nhiệm của từng file

## `index.html`

Chịu trách nhiệm:

- Structure.
- Navbar.
- Hero.
- Members container.
- Modal structure.
- About.
- Footer.

HTML không nên chứa logic xử lý phức tạp.

---

## `style.css`

Chịu trách nhiệm:

- Layout.
- Color.
- Spacing.
- Typography.
- Card design.
- Button design.
- Modal design.
- Animation.
- Hover effect.
- Responsive.
- Media queries.

Responsive nên xử lý bằng CSS, không dùng JavaScript.

---

## `script.js`

Chịu trách nhiệm:

- Member data.
- Render members.
- Open detail modal.
- Close modal.
- Add member.
- Delete member.
- Validation.
- `localStorage`.
- Event listeners.

---

# 31. Kiến trúc JavaScript

Nên chia logic theo nhiệm vụ:

```text
script.js
│
├── DEFAULT DATA
│
├── STATE
│   └── members[]
│
├── STORAGE
│   ├── loadMembers()
│   └── saveMembers()
│
├── RENDER
│   └── renderMembers()
│
├── MEMBER DETAIL
│   ├── openMemberModal()
│   └── closeMemberModal()
│
├── ADD MEMBER
│   ├── openAddModal()
│   ├── validateForm()
│   └── addMember()
│
├── DELETE MEMBER
│   ├── openDeleteConfirm()
│   └── deleteMember()
│
└── EVENTS
    └── event listeners
```

Không nên viết toàn bộ logic thành một khối dài.

---

# 32. Phân chia trách nhiệm HTML / CSS / JS

Nguyên tắc:

```text
HTML
→ Structure

CSS
→ Appearance + Layout + Responsive

JavaScript
→ Behavior + Data + Interaction
```

Ví dụ:

Sai:

```text
JavaScript kiểm tra screen width
→ đổi số cột
```

Đúng:

```text
CSS Media Query
→ đổi số cột
```

---

# 33. Style tổng thể

Phong cách:

- Minimal.
- Modern.
- Clean.

Màu sắc:

- White / light background.
- Dark text.
- 1 primary color.
- 1 danger color cho Delete.

Không nên dùng:

- Quá nhiều màu.
- Quá nhiều gradient.
- Neon mạnh.
- Animation 3D.
- Nhiều font khác nhau.

---

# 34. Typography

Nên dùng:

- 1 font family.
- Tối đa 2 font family.

Phân cấp chữ rõ ràng:

```text
H1
↓
H2
↓
Member Name
↓
Body Text
```

Ví dụ:

```text
H1: 48px
H2: 32px
Member Name: 22px
Body: 16px
```

Trên mobile giảm kích thước phù hợp.

---

# 35. Hover Effects

Member card:

```text
Normal
   ↓ hover
translateY nhẹ
shadow tăng
image zoom nhẹ
```

Button:

```text
Normal
↓
Hover
↓
Background thay đổi nhẹ
```

Animation nên khoảng:

```text
0.2s – 0.3s
```

Không nên quá mạnh hoặc quá chậm.

---

# 36. Form UX

Input cần có:

```text
<label>
<input>
```

Không chỉ dùng placeholder.

Ví dụ tốt:

```text
Full Name
[Enter full name]
```

Không nên chỉ có:

```text
[Full Name]
```

---

# 37. Accessibility cơ bản

Yêu cầu:

- Ảnh có `alt`.
- Button dùng `<button>`.
- Form input có `<label>`.
- Modal close là button.
- Có thể dùng `ESC` để đóng modal.
- Không dùng `<div onclick="">` thay cho button khi đó là một hành động.

---

# 38. An toàn khi render dữ liệu

Dữ liệu người dùng nhập như:

- name.
- bio.
- skills.

Không nên đưa trực tiếp vào `innerHTML` nếu không cần.

Ưu tiên:

```text
textContent
```

cho text do người dùng nhập.

---

# 39. Trạng thái không có member

Vì website cho phép xóa member, cần xử lý trường hợp:

```text
members.length === 0
```

Hiển thị:

```text
No members yet.

Add your first member to get started.

[+ Add Member]
```

Không để Members Section trống hoàn toàn.

---

# 40. Luồng hoạt động tổng thể

```text
USER OPEN WEBSITE
        │
        ▼
Check localStorage
        │
        ├── Có data
        │      ↓
        │  Load members
        │
        └── Không có
               ↓
         Load default members
               ↓
         Save localStorage
        │
        ▼
renderMembers()
        │
        ├─────────────┬──────────────┐
        │             │              │
        ▼             ▼              ▼
View Profile       Add Member    Delete Member
        │             │              │
        ▼             ▼              ▼
Detail Modal       Add Form      Confirmation
                      │              │
                      ▼              ▼
                  Validation       Delete
                      │              │
                      └──────┬───────┘
                             ▼
                        members[]
                             ↓
                      localStorage
                             ↓
                      renderMembers()
```

---

# 41. Interaction chính và phụ

## Interaction chính

- Click Member → View Detail Modal.
- Add Member → Form → tạo card mới.
- Delete Member → Confirm → xóa card.

## Interaction phụ

- Smooth scrolling navbar.
- Hover card.
- Hover button.
- Close modal bằng `X`.
- Close modal bằng click overlay.
- Close modal bằng `ESC`.

---

# 42. Chức năng bắt buộc

Phiên bản hoàn chỉnh phải có:

- [x] Display members.
- [x] Responsive layout.
- [x] Desktop 3 columns.
- [x] Mobile 2 columns.
- [x] Small mobile 1 column.
- [x] View member detail.
- [x] Open / close modal.
- [x] Add member.
- [x] Validate add form.
- [x] Delete member.
- [x] Delete confirmation.
- [x] Save vào `localStorage`.
- [x] Load từ `localStorage`.
- [x] Empty state.
- [x] Smooth scroll.
- [x] Hover effect.

---

# 43. Chức năng chưa làm trong phiên bản này

Không làm:

- Edit Member.
- Login.
- Register.
- Database.
- Backend.
- Upload ảnh thật.
- Search.
- Filter.
- Sort.
- Authentication.
- Admin dashboard.

Flow hiện tại:

```text
Create
Read
Delete
```

Không cần ép thành CRUD đầy đủ.

---

# 44. Test responsive

Cần test ít nhất:

| Viewport | Expected |
|---|---|
| 1440px | 3 columns |
| 1024px | 3 columns |
| 768px | 2 columns |
| 430px | 2 columns |
| 375px | 1 column |

Kiểm tra:

- Không horizontal scroll.
- Text không tràn card.
- Ảnh không méo.
- Card không vỡ.
- Modal không vượt viewport.
- Form dùng được trên mobile.
- Delete confirmation nhìn rõ.

---

# 45. Test chức năng Add Member

Test case:

```text
1. Click Add Member
→ form mở

2. Submit form rỗng
→ báo lỗi

3. Nhập dữ liệu hợp lệ
→ member mới xuất hiện

4. F5
→ member vẫn tồn tại

5. Thêm Member 4
→ layout tự xuống hàng

6. Mobile
→ member mới vẫn theo layout responsive
```

---

# 46. Test chức năng Delete Member

Test case:

```text
Click Delete
      ↓
Confirmation xuất hiện
```

### Case 1

```text
Cancel
→ member vẫn còn
```

### Case 2

```text
Confirm Delete
→ member biến mất
```

### Case 3

```text
F5
→ member đã xóa không quay lại
```

---

# 47. Một lỗi có thể dùng để trình bày với giảng viên

Ví dụ lỗi hợp lý:

## Before

```text
Modal Add Member cao hơn màn hình mobile
→ nút Add Member bên dưới bị khuất
```

## Nguyên nhân

Modal chưa giới hạn chiều cao.

## Cách sửa

```text
max-height
+
overflow-y: auto
```

## After

```text
Modal nằm trong viewport
+
có thể scroll nội dung bên trong
```

Có thể trình bày theo flow:

```text
Problem
↓
Cause
↓
Solution
↓
Result
```

---

# 48. Quan hệ giữa yêu cầu bài tập và project

| Yêu cầu | Cách project đáp ứng |
|---|---|
| Đối tượng người xem | Giảng viên / sinh viên |
| Thông điệp chính | Giới thiệu và quản lý thành viên nhóm |
| 2–3 section | Hero, Members, About |
| Section ưu tiên | Members |
| Màn hình rộng | 3 columns |
| Màn hình hẹp | 2 columns |
| Small mobile | 1 column |
| Interaction hữu ích | View / Add / Delete |
| Plain CSS | Có |
| HTML/CSS/JS | Có |
| Site chạy local | Có |
| Screenshot rộng/hẹp | Có |
| Demo interaction | Add / Delete / View |
| Lỗi phát hiện và sửa | Modal overflow trên mobile |

---

# 49. Thứ tự triển khai code

## Phase 1 — Structure

1. Tạo folder project.
2. Tạo `index.html`.
3. Tạo `style.css`.
4. Tạo `script.js`.
5. Tạo HTML semantic structure.

## Phase 2 — Static UI

6. Navbar.
7. Hero.
8. Members Section.
9. Member Card.
10. About.
11. Footer.

## Phase 3 — Responsive

12. Desktop 3 columns.
13. Mobile 2 columns.
14. Small mobile 1 column.

## Phase 4 — Member Detail

15. Detail Modal.
16. Open modal.
17. Load member data.
18. Close modal.

## Phase 5 — Add Member

19. Add button.
20. Add modal.
21. Form.
22. Validation.
23. Create member.
24. Render member.

## Phase 6 — Delete Member

25. Delete button.
26. Confirmation modal.
27. Delete bằng member ID.
28. Render lại.

## Phase 7 — Storage

29. Save `localStorage`.
30. Load `localStorage`.
31. Test reload.

## Phase 8 — Testing

32. Desktop test.
33. Tablet test.
34. Mobile test.
35. Add test.
36. Delete test.
37. Refresh test.
38. Fix bug.
39. Screenshot.
40. Demo.

---

# 50. Kiến trúc cuối cùng

```text
                    TEAM PROFILE
                         │
          ┌──────────────┼──────────────┐
          │              │              │
         HTML           CSS         JavaScript
          │              │              │
       Structure       Layout         Logic
          │              │              │
          │          Responsive         │
          │         ┌────┼────┐         │
          │         │    │    │         │
          │        3col  2col 1col      │
          │                             │
          │                       members[]
          │                             │
          │             ┌───────────────┼──────────────┐
          │             │               │              │
          │            View            Add           Delete
          │             │               │              │
          │             ▼               ▼              ▼
          │          Detail          Form          Confirm
          │          Modal              │              │
          │                             └──────┬───────┘
          │                                    │
          │                                    ▼
          │                              localStorage
          │                                    │
          └────────────────────────────────────┘
                           ↓
                     Render UI
```

---

# 51. Definition of Done

Project chỉ được xem là hoàn thành khi:

- [x] Website mở local bình thường.
- [x] Có 3 member mặc định.
- [x] Desktop = 3 columns.
- [x] Mobile = 2 columns.
- [x] Small mobile = 1 column.
- [x] Click member → detail modal.
- [x] Add member hoạt động.
- [x] Không add dữ liệu thiếu.
- [x] Delete có confirmation.
- [x] Delete đúng member.
- [x] Add/Delete được lưu bằng `localStorage`.
- [x] F5 dữ liệu vẫn đúng.
- [x] Có empty state khi xóa hết member.
- [x] Không bị horizontal scroll.
- [x] Modal chạy tốt trên mobile.
- [x] Có ảnh desktop.
- [x] Có ảnh mobile.
- [x] Có thể demo một lỗi và cách sửa.
- [x] Source code rõ ràng, dễ giải thích.

---

# 52. Nguyên tắc kiến trúc quan trọng nhất

Giữ đúng luồng:

```text
members[] = nguồn dữ liệu chính

        ↓

localStorage = nơi lưu dữ liệu

        ↓

renderMembers() = biến dữ liệu thành giao diện
```

Mọi thao tác Add hoặc Delete nên cập nhật `members[]`, lưu lại bằng `localStorage`, sau đó gọi `renderMembers()`.

Không chỉnh sửa từng card thủ công nếu không cần.

---

# 53. Phạm vi project cần giữ

Không over-engineer.

Không cần:

```text
Login
Database
API
Backend
React
Admin
CRUD đầy đủ
Search
Filter
Authentication
```

Mục tiêu chính là làm tốt:

```text
HTML Structure
      +
CSS Layout
      +
Responsive Design
      +
JavaScript DOM
      +
Add / Delete
      +
localStorage
```

Nếu các phần trên hoạt động sạch, responsive tốt và nhóm giải thích được cách code hoạt động thì project đã đáp ứng đúng tinh thần bài tập.
