// This is a placeholder implementation
// In a real application, you would use a proper MDX library to load and process MDX files

export async function getAllCourses() {
  // In a real implementation, this would load MDX files from the content/courses directory
  return [
    {
      slug: "tieng-anh-giao-tiep",
      title: "Tiếng Anh giao tiếp",
      description: "Khóa học giúp bạn tự tin giao tiếp tiếng Anh trong mọi tình huống",
      image: "/placeholder.svg?height=400&width=600&text=English Communication",
      level: "Cơ bản - Nâng cao",
      category: "general",
      audience: "Người lớn (18+ tuổi)",
      duration: "3 tháng (24 buổi)",
      schedule: "2-3 buổi/tuần",
    },
    {
      slug: "tieng-anh-thieu-nhi",
      title: "Tiếng Anh thiếu nhi",
      description: "Phương pháp học vui nhộn, hiệu quả dành cho trẻ em từ 4-15 tuổi",
      image: "/placeholder.svg?height=400&width=600&text=Kids English",
      level: "Mọi trình độ",
      category: "kids",
      audience: "Trẻ em (4-15 tuổi)",
      duration: "3 tháng (24 buổi)",
      schedule: "2 buổi/tuần",
    },
    {
      slug: "luyen-thi-ielts",
      title: "Luyện thi IELTS",
      description: "Chiến lược làm bài hiệu quả, nâng band điểm nhanh chóng",
      image: "/placeholder.svg?height=400&width=600&text=IELTS Preparation",
      level: "Trung cấp - Nâng cao",
      category: "ielts",
      audience: "Người lớn (16+ tuổi)",
      duration: "3 tháng (36 buổi)",
      schedule: "3 buổi/tuần",
    },
    {
      slug: "tieng-anh-thuong-mai",
      title: "Tiếng Anh thương mại",
      description: "Tiếng Anh chuyên ngành cho người đi làm và doanh nhân",
      image: "/placeholder.svg?height=400&width=600&text=Business English",
      level: "Trung cấp - Nâng cao",
      category: "business",
      audience: "Người đi làm",
      duration: "2 tháng (16 buổi)",
      schedule: "2 buổi/tuần",
    },
    {
      slug: "luyen-thi-toeic",
      title: "Luyện thi TOEIC",
      description: "Lộ trình luyện thi TOEIC hiệu quả, cam kết đầu ra",
      image: "/placeholder.svg?height=400&width=600&text=TOEIC Preparation",
      level: "Cơ bản - Nâng cao",
      category: "toeic",
      audience: "Người lớn (16+ tuổi)",
      duration: "2 tháng (24 buổi)",
      schedule: "3 buổi/tuần",
    },
  ]
}

export async function getCourseBySlug(slug: string) {
  const courses = await getAllCourses()
  const course = courses.find((course) => course.slug === slug)

  if (!course) return null

  // Additional course details that would come from the MDX file
  return {
    ...course,
    price: "2.500.000 VNĐ",
    objectives: [
      "Phát triển kỹ năng giao tiếp tiếng Anh tự tin",
      "Nâng cao vốn từ vựng trong các tình huống thực tế",
      "Cải thiện phát âm và ngữ điệu tự nhiên",
      "Hiểu và sử dụng thành thạo các cấu trúc ngữ pháp cơ bản",
    ],
    benefits: [
      "Lớp học quy mô nhỏ (tối đa 15 học viên)",
      "Giảng viên giàu kinh nghiệm, phát âm chuẩn",
      "Tài liệu học tập chất lượng cao",
      "Chứng chỉ hoàn thành khóa học",
      "Hỗ trợ học tập sau khóa học",
      "Cơ hội tham gia câu lạc bộ tiếng Anh miễn phí",
    ],
    includes: [
      "24 buổi học (90 phút/buổi)",
      "Giáo trình và tài liệu học tập",
      "Bài kiểm tra đánh giá định kỳ",
      "Chứng chỉ hoàn thành khóa học",
      "Tham gia câu lạc bộ tiếng Anh miễn phí",
    ],
    content: [
      {
        title: "Giao tiếp cơ bản",
        lessons: [
          { title: "Chào hỏi và giới thiệu bản thân", duration: "90 phút" },
          { title: "Giao tiếp hàng ngày", duration: "90 phút" },
          { title: "Đặt câu hỏi và trả lời", duration: "90 phút" },
          { title: "Nói về sở thích và thói quen", duration: "90 phút" },
        ],
      },
      {
        title: "Giao tiếp trong công việc",
        lessons: [
          { title: "Giao tiếp văn phòng", duration: "90 phút" },
          { title: "Tham gia cuộc họp", duration: "90 phút" },
          { title: "Thuyết trình cơ bản", duration: "90 phút" },
          { title: "Viết email công việc", duration: "90 phút" },
        ],
      },
      {
        title: "Giao tiếp khi đi du lịch",
        lessons: [
          { title: "Đặt phòng khách sạn", duration: "90 phút" },
          { title: "Đi ăn nhà hàng", duration: "90 phút" },
          { title: "Hỏi đường và di chuyển", duration: "90 phút" },
          { title: "Mua sắm và trả giá", duration: "90 phút" },
        ],
      },
    ],
  }
}

export async function getAllPosts() {
  // In a real implementation, this would load MDX files from the content/blog directory
  return [
    {
      slug: "5-phuong-phap-hoc-tieng-anh-hieu-qua-tai-nha",
      title: "5 phương pháp học tiếng Anh hiệu quả tại nhà",
      description: "Khám phá các phương pháp học tiếng Anh tại nhà hiệu quả, tiết kiệm thời gian và chi phí.",
      image: "/placeholder.svg?height=400&width=600&text=English Learning",
      date: "2025-04-01",
      readingTime: "8",
      tags: ["phương pháp học", "tự học", "tiếng Anh"],
    },
    {
      slug: "lam-the-nao-de-cai-thien-ky-nang-nghe-tieng-anh",
      title: "Làm thế nào để cải thiện kỹ năng nghe tiếng Anh",
      description: "Những bí quyết giúp bạn nâng cao khả năng nghe hiểu tiếng Anh một cách nhanh chóng.",
      image: "/placeholder.svg?height=400&width=600&text=Listening Skills",
      date: "2025-03-25",
      readingTime: "6",
      tags: ["kỹ năng nghe", "phương pháp học", "tiếng Anh"],
    },
    {
      slug: "tu-vung-tieng-anh-thong-dung-trong-cong-viec",
      title: "Từ vựng tiếng Anh thông dụng trong công việc",
      description: "Tổng hợp các từ vựng và cụm từ tiếng Anh thường được sử dụng trong môi trường làm việc.",
      image: "/placeholder.svg?height=400&width=600&text=Business English",
      date: "2025-03-18",
      readingTime: "10",
      tags: ["từ vựng", "tiếng Anh thương mại", "công việc"],
    },
    {
      slug: "cach-phat-am-tieng-anh-chuan-nhu-nguoi-ban-xu",
      title: "Cách phát âm tiếng Anh chuẩn như người bản xứ",
      description: "Hướng dẫn chi tiết cách phát âm tiếng Anh chuẩn, tự nhiên như người bản xứ.",
      image: "/placeholder.svg?height=400&width=600&text=Pronunciation",
      date: "2025-03-10",
      readingTime: "12",
      tags: ["phát âm", "ngữ điệu", "tiếng Anh"],
    },
    {
      slug: "10-kenh-youtube-hoc-tieng-anh-hay-nhat",
      title: "10 kênh YouTube học tiếng Anh hay nhất",
      description: "Giới thiệu 10 kênh YouTube giúp bạn học tiếng Anh hiệu quả và thú vị.",
      image: "/placeholder.svg?height=400&width=600&text=YouTube Channels",
      date: "2025-03-05",
      readingTime: "7",
      tags: ["tài nguyên học tập", "YouTube", "tiếng Anh"],
    },
  ]
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts()
  const post = posts.find((post) => post.slug === slug)

  if (!post) return null

  // Additional post details that would come from the MDX file
  return {
    ...post,
    headings: [
      { id: "gioi-thieu", text: "Giới thiệu", level: 2 },
      { id: "phuong-phap-1", text: "Phương pháp 1: Học qua phim ảnh và âm nhạc", level: 2 },
      { id: "phuong-phap-2", text: "Phương pháp 2: Luyện nghe mỗi ngày", level: 2 },
      { id: "phuong-phap-3", text: "Phương pháp 3: Học từ vựng theo chủ đề", level: 2 },
      { id: "phuong-phap-4", text: "Phương pháp 4: Luyện nói với người bản xứ", level: 2 },
      { id: "phuong-phap-5", text: "Phương pháp 5: Đọc sách tiếng Anh", level: 2 },
      { id: "loi-khuyen", text: "Lời khuyên khi tự học tiếng Anh", level: 2 },
      { id: "ung-dung-hoc-tap", text: "Các ứng dụng học tập hữu ích", level: 3 },
      { id: "ket-luan", text: "Kết luận", level: 2 },
    ],
    content: {
      // This would be the compiled MDX content
      // For demo purposes, we're just using a placeholder
    },
  }
}
