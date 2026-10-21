import { useState, useEffect, useRef } from "react"

type Member = {
  name: string
  interest: string
  classPosition?: "Komisaris"
  handle: string
  image: string
  accent: string
  quote?: string
  caption: string
  likes?: number
}

// 27 Anggota Kelas Datalearners.XXV (Urut Abjad A-Z)
const members: Member[] = [
  {
    name: "Abdul Karim Al-Husainy",
    interest: "Data Analyst",
    handle: "@karim.xxv",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=88",
    accent: "accent-cyan",
    caption: "Halo semuanya! Saya Abdul Karim Al-Husainy dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Ahmad Fairuzy",
    interest: "UI/UX Designer",
    classPosition: "Komisaris",
    handle: "@ahmadfairuzy",
    image:
      "https://images.unsplash.com/photo-1729821728830-068bbff90645?auto=format&fit=crop&w=900&q=88",
    accent: "accent-blue",
    caption: "Halo semuanya! Saya Ahmad Fairuzy dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Alhadi Azumi",
    interest: "Web Developer",
    handle: "@alhdzm",
    image:
      "/images/personal/hadi.JPG",
    accent: "accent-violet",
    caption: "Halo semuanya! Saya Alhadi Azumi dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Anzirwan Ramadhan",
    interest: "Front-End Developer",
    handle: "@anzirwan.xxv",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=88",
    accent: "accent-teal",
    caption: "Halo semuanya! Saya Anzirwan Ramadhan dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Ayla Azzura",
    interest: "UI/UX Designer",
    handle: "@ayla.xxv",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=88",
    accent: "accent-cyan",
    caption: "Halo semuanya! Saya Ayla Azzura dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Cut Nanda Asy-Syifa",
    interest: "Data Analyst",
    handle: "@cutnanda.xxv",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=88",
    accent: "accent-blue",
    caption: "Halo semuanya! Saya Cut Nanda Asy-Syifa dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Fadhlul Hadi",
    interest: "Cybersecurity",
    handle: "@fadhlul.xxv",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=88",
    accent: "accent-violet",
    caption: "Halo semuanya! Saya Fadhlul Hadi dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Fatia Azahara",
    interest: "Mobile App Developer",
    handle: "@fatia.xxv",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=88",
    accent: "accent-teal",
    caption: "Halo semuanya! Saya Fatia Azahara dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Hassila Zuhra",
    interest: "Back-End Developer",
    handle: "@hassila.xxv",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=88",
    accent: "accent-cyan",
    caption: "Halo semuanya! Saya Hassila Zuhra dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "M Faiz Irsyad",
    interest: "Data Scientist",
    handle: "@faiz.xxv",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=88",
    accent: "accent-blue",
    caption: "Halo semuanya! Saya M Faiz Irsyad dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Muhammad Farhan",
    interest: "Graphic Designer",
    handle: "@farhan.xxv",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=88",
    accent: "accent-violet",
    caption: "Halo semuanya! Saya Muhammad Farhan dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Muhammad Ghifari Maulidan",
    interest: "Network Engineer",
    handle: "@ghifari.xxv",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=900&q=88",
    accent: "accent-teal",
    caption: "Halo semuanya! Saya Muhammad Ghifari Maulidan dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Muhammad Irham Fahri",
    interest: "Game Developer",
    handle: "@irham.xxv",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=88",
    accent: "accent-cyan",
    caption: "Halo semuanya! Saya Muhammad Irham Fahri dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Muhammad Khairul Azmi",
    interest: "Cloud Computing",
    handle: "@khairul.xxv",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=88",
    accent: "accent-blue",
    caption: "Halo semuanya! Saya Muhammad Khairul Azmi dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Muhammad Reza Fahlevi",
    interest: "Machine Learning",
    handle: "@reza.xxv",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=88",
    accent: "accent-violet",
    caption: "Halo semuanya! Saya Muhammad Reza Fahlevi dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Muhammad Zakin Nizar",
    interest: "Product Designer",
    handle: "@zakin.xxv",
    image:
      "https://images.unsplash.com/photo-1729821728945-7e1287deb341?auto=format&fit=crop&w=900&q=88",
    accent: "accent-teal",
    caption: "Halo semuanya! Saya Muhammad Zakin Nizar dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Nabila Syifa",
    interest: "Front-End Developer",
    handle: "@nabilasyifa.xxv",
    image:
      "https://images.unsplash.com/photo-1677168916969-e5a4af982664?auto=format&fit=crop&w=900&q=88",
    accent: "accent-cyan",
    caption: "Halo semuanya! Saya Nabila Syifa dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Nazwa Syaqilla Putri",
    interest: "Data Analyst",
    handle: "@nazwa.xxv",
    image:
      "https://images.unsplash.com/photo-1634707532472-00e23a3a5f43?auto=format&fit=crop&w=900&q=88",
    accent: "accent-blue",
    caption: "Halo semuanya! Saya Nazwa Syaqilla Putri dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Nurul fazillah",
    interest: "Quality Assurance",
    handle: "@nurul.xxv",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=88",
    accent: "accent-violet",
    caption: "Halo semuanya! Saya Nurul fazillah dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Rahmat Naufal",
    interest: "Back-End Developer",
    handle: "@naufal.xxv",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=88",
    accent: "accent-teal",
    caption: "Halo semuanya! Saya Rahmat Naufal dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Riska Ayu Naul",
    interest: "Digital Marketing",
    handle: "@riska.xxv",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=88",
    accent: "accent-cyan",
    caption: "Halo semuanya! Saya Riska Ayu Naul dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Said Fachrian Jamaal",
    interest: "Mobile App Developer",
    handle: "@said.xxv",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=88",
    accent: "accent-blue",
    caption: "Halo semuanya! Saya Said Fachrian Jamaal dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Silvia Iqlima",
    interest: "Database Administrator",
    handle: "@silvia.xxv",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=88",
    accent: "accent-violet",
    caption: "Halo semuanya! Saya Silvia Iqlima dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Syarifah tsalisa nur meutia",
    interest: "System Analyst",
    handle: "@tsalisa.xxv",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=900&q=88",
    accent: "accent-teal",
    caption: "Halo semuanya! Saya Syarifah tsalisa nur meutia dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Teuku Zaky Farhani",
    interest: "DevOps Engineer",
    handle: "@zakyfarhani.xxv",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=900&q=88",
    accent: "accent-cyan",
    caption: "Halo semuanya! Saya Teuku Zaky Farhani dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Wahyu Haiqal",
    interest: "AI Engineer",
    handle: "@wahyu.xxv",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=88",
    accent: "accent-blue",
    caption: "Halo semuanya! Saya Wahyu Haiqal dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
  {
    name: "Zaskya Adindazahra",
    interest: "UI/UX Designer",
    handle: "@zaskya.xxv",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=88",
    accent: "accent-violet",
    caption: "Halo semuanya! Saya Zaskya Adindazahra dari kelas Datalearners.XXV. Siap eksplorasi data & teknologi bareng! 🚀",
  },
]

type GalleryItem = {
  id: number
  title: string
  category: "Classroom" | "Hangout" | "Project" | "Events"
  image: string
  caption: string
  span?: "tall" | "wide"
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Morning Chaos & Laughter",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1764720572747-cd3753f8fdb1?auto=format&fit=crop&w=1400&q=88",
    caption: "Suasana pagi sebelum dosen masuk, selalu ada obrolan seru dan canda tawa.",
    span: "wide",
  },
  {
    id: 2,
    title: "Study Mode: Focus Please!",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1742549586702-c23994895082?auto=format&fit=crop&w=1000&q=88",
    caption: "Konsentrasi penuh saat materi praktikum coding mulai menantang.",
  },
  {
    id: 3,
    title: "Behind the Task: Deadline Energy",
    category: "Project",
    image: "https://images.unsplash.com/photo-1643216755260-cb0bc30473c8?auto=format&fit=crop&w=1000&q=88",
    caption: "Momen begadang bareng ngerjain tugas laporan dan debug code.",
  },
  {
    id: 4,
    title: "Coffee Break & Brainstorming",
    category: "Hangout",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=88",
    caption: "Nongkrong santai sepulang kuliah sambil bahas ide project angkatan.",
    span: "tall",
  },
  {
    id: 5,
    title: "Data Workshop Hands-On",
    category: "Events",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=88",
    caption: "Sesi berbagi wawasan teknologi dan algoritma data terkini.",
  },
  {
    id: 6,
    title: "Team Presentation Day",
    category: "Project",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=88",
    caption: "Presentasi hasil kolaborasi tim di hadapan dosen dan teman sekelas.",
    span: "wide",
  },
  {
    id: 7,
    title: "Foto Bersama TI 2B",
    category: "Events",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=88",
    caption: "Kenangan kompak satu angkatan yang tak ternilai harganya.",
  },
  {
    id: 8,
    title: "Coding Sprint Marathons",
    category: "Project",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=88",
    caption: "Fokus di depan laptop mengejar deadline submission tugas bersama.",
  },
  {
    id: 9,
    title: "Sunset Vibes After Class",
    category: "Hangout",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=88",
    caption: "Menikmati senja di kampus bersama teman-teman seperjuangan.",
  },
]

type ProjectItem = {
  id: number
  index: string
  category: "WEB" | "DATA" | "UI DESIGN" | "MOBILE" | "AI / ML"
  title: string
  description: string
  image: string
  status: "COMPLETED" | "IN PROGRESS" | "CONCEPT"
  author: string
  techStack: string[]
  explanation: string
  features: string[]
  githubUrl?: string
}

const projectItems: ProjectItem[] = [
  {
    id: 1,
    index: "01 / WEB",
    category: "WEB",
    title: "Dashboard Nilai & Roster Kelas",
    description: "Sistem monitoring akademik interaktif untuk melihat progres perkuliahan, kehadiran, dan pengumuman kelas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=88",
    status: "COMPLETED",
    author: "Tim Web TI 2B",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    explanation: "Project ini dikembangkan untuk mempermudah 27 mahasiswa TI 2B dalam memantau nilai praktikum, jadwal mata kuliah harian, absensi kelas, dan pembagian kelompok tugas. Menggunakan antarmuka responsif dengan visualisasi grafik interaktif.",
    features: [
      "Pelacakan IPK & Rekap Nilai per Semester",
      "Kalender Jadwal Kuliah & Ruangan Realtime",
      "Papan Informasi & Pengumuman Tugas Dosen",
      "Mode Tampilan Gelap (Dark Mode) Ergonomis"
    ],
    githubUrl: "https://github.com/AlhadiAzumi/Website-Kelas-TI-2B-PNL",
  },
  {
    id: 2,
    index: "02 / DATA",
    category: "DATA",
    title: "Analisis Data Cuaca & Iklim Lhokseumawe",
    description: "Visualisasi time-series data cuaca lokal menjadi insight grafis yang mudah dipahami oleh masyarakat.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=88",
    status: "IN PROGRESS",
    author: "Divisi Data Science",
    techStack: ["Python", "Pandas", "Matplotlib"],
    explanation: "Memanfaatkan data histori sensor cuaca wilayah pesisir Lhokseumawe untuk menganalisis anomali curah hujan, tingkat kelembapan, dan tren suhu. Hasil analisis disajikan dalam dashboard visual untuk mitigasi bencana lokal.",
    features: [
      "Pembersihan & Preprocessing Data Historis",
      "Analisis Korelasi Suhu dan Curah Hujan",
      "Grafik Interaktif Time-Series Prediktif",
      "Export Laporan Otomatis ke Format PDF/Excel"
    ],
    githubUrl: "https://github.com/AlhadiAzumi/Website-Kelas-TI-2B-PNL",
  },
  {
    id: 3,
    index: "03 / UI DESIGN",
    category: "UI DESIGN",
    title: "Class Digital Yearbook XXV",
    description: "Konsep UI/UX buku tahunan interaktif berbasis web dengan nuansa futuristik cyber & neon glass.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=88",
    status: "COMPLETED",
    author: "Tim UI/UX Designers",
    techStack: ["Figma", "Design System", "Prototyping"],
    explanation: "Desain sistem antarmuka buku tahunan digital untuk mengabadikan profil seluruh mahasiswa angkatan 2025/2026. Mengusung konsep Glassmorphism, Micro-interactions, dan layout grid bergaya modern aesthetic.",
    features: [
      "Desain Komponen Modular & Reusable",
      "Interaksi Animasi Transisi Halus (Smart Animate)",
      "Tampilan Profil & Story Highlight Mahasiswa",
      "Optimasi Tampilan Layar Desktop & Mobile"
    ],
    githubUrl: "https://github.com/AlhadiAzumi/Website-Kelas-TI-2B-PNL",
  },
  {
    id: 4,
    index: "04 / MOBILE",
    category: "MOBILE",
    title: "Jadwalin: App Pengingat Kuliah",
    description: "Aplikasi mobile manajemen jadwal mata kuliah, ruang kelas, dan notifikasi tugas praktikum harian.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=88",
    status: "IN PROGRESS",
    author: "App Dev Squad",
    techStack: ["Flutter", "Dart", "Firebase"],
    explanation: "Solusi praktis berbasis mobile untuk mengatasi masalah lupa jadwal kuliah atau deadline praktikum. Dilengkapi push notification otomatis 30 menit sebelum jadwal perkuliahan dimulai.",
    features: [
      "Notifikasi Pengingat Kuliah & Ujian",
      "Sinkronisasi Cloud dengan Akun Mahasiswa",
      "Daftar Checklist Tugas & Progress Tracker",
      "Bisa Diakses Secara Offline"
    ],
    githubUrl: "https://github.com/AlhadiAzumi/Website-Kelas-TI-2B-PNL",
  },
  {
    id: 5,
    index: "05 / AI / ML",
    category: "AI / ML",
    title: "Smart Attendance Face Recognition",
    description: "Eksperimen model deteksi wajah cerdas untuk presensi otomatis mahasiswa saat memasuki laboratorium.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=88",
    status: "CONCEPT",
    author: "Research Group",
    techStack: ["OpenCV", "TensorFlow", "Python"],
    explanation: "Penelitian kecerdasan buatan terapan menggunakan computer vision untuk mengenali wajah mahasiswa di pintu masuk laboratorium komputer, memangkas waktu absensi manual secara signifikan.",
    features: [
      "Deteksi Multi-Wajah Secara Real-Time",
      "Tingkat Akurasi Pengenalan hingga 96.8%",
      "Integrasi Database Presensi Terpusat",
      "Anti-Spoofing Pencegah Pemalsuan Foto"
    ],
    githubUrl: "https://github.com/AlhadiAzumi/Website-Kelas-TI-2B-PNL",
  },
  {
    id: 6,
    index: "06 / WEB",
    category: "WEB",
    title: "Datalearners Official Hub",
    description: "Portal pusat informasi kelas TI 2B, arsip materi presentasi, dan ruang apresiasi karya mahasiswa.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=88",
    status: "COMPLETED",
    author: "Alhadi Azumi & Tim",
    techStack: ["Vite", "React 19", "CSS Glassmorphism"],
    explanation: "Website resmi kelas Datalearners.XXV TI 2B Politeknik Negeri Lhokseumawe. Menghubungkan seluruh civitas kelas dengan fitur Instagram Feed, Galeri Dokumentasi, dan Etalase Karya Mahasiswa.",
    features: [
      "Desain Cyberpunk Blue Neon Glassmorphism",
      "Navigasi Sticky Header Halus",
      "Tampilan Instagram Profile & Story Highlight",
      "Showcase Galeri & Portfolio Tugas Mandiri"
    ],
    githubUrl: "https://github.com/AlhadiAzumi/Website-Kelas-TI-2B-PNL",
  },
]

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "flip-icon" : ""}
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`spark ${className}`}
      viewBox="0 0 48 48"
    >
      <path d="M24 2c1.6 14.4 7.6 20.4 22 22-14.4 1.6-20.4 7.6-22 22C22.4 31.6 16.4 25.6 2 24 16.4 22.4 22.4 16.4 24 2Z" />
    </svg>
  )
}

function Logo() {
  return (
    <div className="brand-mark">
      <img src="/datalearners-logo.png" alt="" />
    </div>
  )
}

function FloatingProfile({
  member,
  className,
}: {
  member: Member
  className: string
}) {
  return (
    <div key={member.name} className={`floating-profile ${className}`}>
      <img src={member.image} alt="" />
      <div>
        <strong>{member.handle}</strong>
        <span>{member.interest}</span>
      </div>
      <span className="profile-status" aria-label="Online" />
    </div>
  )
}

function MemberCard({
  member,
  index,
  onSelect,
  isClone = false,
}: {
  member: Member
  index: number
  onSelect: (member: Member) => void
  isClone?: boolean
}) {
  return (
    <article
      className={`member-card ${member.accent}`}
      role="button"
      tabIndex={isClone ? -1 : 0}
      aria-hidden={isClone || undefined}
      aria-label={`Lihat profil ${member.name}`}
      onClick={() => onSelect(member)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onSelect(member)
        }
      }}
    >
      <div className="member-photo-wrap">
        <img
          className="member-photo"
          src={member.image}
          alt={`Portrait of ${member.name}`}
          loading="lazy"
        />
        <div className="photo-no">{String(index + 1).padStart(2, "0")}</div>
        <span className="photo-spark">✦</span>
      </div>
      <div className="member-meta">
        <span className="role-pill">{member.interest}</span>
        <h3>{member.name}</h3>
        <div className="member-bottom">
          <span>{member.handle}</span>
          <span className="mini-arrow">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </article>
  )
}

// Helper Instagram Icons
function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "#ff3366" : "none"} stroke={filled ? "#ff3366" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function BookmarkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}

function FeedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "people" | "gallery" | "projects">("home")
  const [activeNav, setActiveNav] = useState<"home" | "people" | "gallery" | "projects" | "about">("home")
  const [revealedSections, setRevealedSections] = useState<Set<string>>(() => new Set())
  const [isScrolled, setIsScrolled] = useState(false)
  const [feedView, setFeedView] = useState<"grid" | "feed">("grid")
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({})
  const [activeIndex, setActiveIndex] = useState(0)
  const [galleryFilter, setGalleryFilter] = useState<string>("All")
  const [projectFilter, setProjectFilter] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isFollowing, setIsFollowing] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [floatingProfilesIndex, setFloatingProfilesIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const mobileMemberTrackRef = useRef<HTMLDivElement>(null)

  const showToast = (message: string) => {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current))
    }, 2800)
  }

  const copyToClipboard = async (text: string, description: string) => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API is unavailable")
      }
      await navigator.clipboard.writeText(text)
      showToast(`${description} disalin ke clipboard! 📋`)
    } catch (error) {
      console.error("Gagal menyalin ke clipboard:", error)
      showToast("Gagal menyalin otomatis. Silakan salin secara manual.")
    }
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const closeMobileMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }
    const closeMenuOnDesktop = () => {
      if (window.matchMedia("(min-width: 851px)").matches) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", closeMobileMenu)
    window.addEventListener("resize", closeMenuOnDesktop)
    return () => {
      document.removeEventListener("keydown", closeMobileMenu)
      window.removeEventListener("resize", closeMenuOnDesktop)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (currentPage !== "home") return

    const rotation = window.setInterval(() => {
      setFloatingProfilesIndex((index) => (index + 1) % members.length)
    }, 3500)

    return () => window.clearInterval(rotation)
  }, [currentPage])

  useEffect(() => {
    if (currentPage !== "home") return

    const track = mobileMemberTrackRef.current
    if (!track) return

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>(":scope > .member-card"),
    )
    if (cards.length !== members.length + 2) return

    let activeMemberIndex = 0
    let lastInteractionAt = 0
    let initialized = false

    const centeredScrollLeft = (card: HTMLElement) => {
      const cardRect = card.getBoundingClientRect()
      return (
        track.scrollLeft +
        cardRect.left +
        cardRect.width / 2 -
        track.getBoundingClientRect().left -
        track.clientWidth / 2
      )
    }

    const setActiveCard = (index: number) => {
      cards.forEach((card, cardIndex) => {
        card.classList.toggle(
          "member-card-active",
          cardIndex === index + 1,
        )
      })
    }

    const goToMember = (index: number, behavior: ScrollBehavior = "auto") => {
      track.scrollTo({
        left: centeredScrollLeft(cards[index + 1]),
        behavior,
      })
    }

    const onScroll = () => {
      if (!track.clientWidth) return

      const firstActualLeft = centeredScrollLeft(cards[1])
      const lastActualLeft = centeredScrollLeft(cards[members.length])
      const beforeFirstThreshold =
        (centeredScrollLeft(cards[0]) + firstActualLeft) / 2
      const afterLastThreshold =
        (lastActualLeft + centeredScrollLeft(cards[members.length + 1])) / 2

      if (track.scrollLeft < beforeFirstThreshold) {
        activeMemberIndex = members.length - 1
        setActiveCard(activeMemberIndex)
        goToMember(activeMemberIndex)
        return
      }
      if (track.scrollLeft > afterLastThreshold) {
        activeMemberIndex = 0
        setActiveCard(activeMemberIndex)
        goToMember(activeMemberIndex)
        return
      }

      let nearestIndex = 0
      let nearestDistance = Number.POSITIVE_INFINITY
      for (let index = 0; index < members.length; index += 1) {
        const distance = Math.abs(
          centeredScrollLeft(cards[index + 1]) - track.scrollLeft,
        )
        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestIndex = index
        }
      }
      activeMemberIndex = nearestIndex
      setActiveCard(activeMemberIndex)
    }

    const onInteraction = () => {
      lastInteractionAt = Date.now()
    }

    const initializeIfVisible = () => {
      if (!track.clientWidth) return
      setActiveCard(activeMemberIndex)
      if (!initialized) {
        goToMember(activeMemberIndex)
        initialized = true
      } else {
        goToMember(activeMemberIndex)
      }
    }

    initializeIfVisible()

    const autoplay = window.setInterval(() => {
      if (
        !track.clientWidth ||
        document.hidden ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        Date.now() - lastInteractionAt < 5000
      ) {
        return
      }

      const nextIndex = (activeMemberIndex + 1) % members.length
      activeMemberIndex = nextIndex
      if (nextIndex === 0) {
        track.scrollTo({
          left: centeredScrollLeft(cards[members.length + 1]),
          behavior: "smooth",
        })
      } else {
        goToMember(nextIndex, "smooth")
      }
    }, 6500)

    track.addEventListener("scroll", onScroll, { passive: true })
    track.addEventListener("pointerdown", onInteraction, { passive: true })
    track.addEventListener("wheel", onInteraction, { passive: true })
    track.addEventListener("focusin", onInteraction)
    window.addEventListener("resize", initializeIfVisible)

    return () => {
      window.clearInterval(autoplay)
      track.removeEventListener("scroll", onScroll)
      track.removeEventListener("pointerdown", onInteraction)
      track.removeEventListener("wheel", onInteraction)
      track.removeEventListener("focusin", onInteraction)
      window.removeEventListener("resize", initializeIfVisible)
    }
  }, [currentPage])

  useEffect(() => {
    const activeModal = selectedMember || selectedProject || selectedGalleryItem
    if (!activeModal) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const focusableElements = () =>
      modalRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )

    focusableElements()?.[0]?.focus()

    const handleModalKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null)
        setSelectedProject(null)
        setSelectedGalleryItem(null)
        return
      }

      if (event.key !== "Tab") return
      const focusable = focusableElements()
      if (!focusable?.length) {
        event.preventDefault()
        modalRef.current?.focus()
        return
      }

      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", handleModalKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleModalKeyDown)
    }
  }, [selectedMember, selectedProject, selectedGalleryItem])

  // Scroll listener for sticky glassmorphism navbar & scroll-reveal elements
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      if (currentPage === "home") {
        const sections = ["home", "people", "gallery", "projects", "about"] as const
        let currentSection: (typeof sections)[number] = "home"
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId)
          if (section && section.getBoundingClientRect().top <= 180) {
            currentSection = sectionId
          }
        }
        setActiveNav(currentSection)
      } else {
        setActiveNav(currentPage)
      }

      // Trigger scroll reveals
      const reveals = document.querySelectorAll(".scroll-reveal")
      const sectionsToReveal: string[] = []
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.88 && el.id) {
          sectionsToReveal.push(el.id)
        }
      })
      if (sectionsToReveal.length) {
        setRevealedSections((previous) => {
          if (sectionsToReveal.every((id) => previous.has(id))) return previous
          const next = new Set(previous)
          sectionsToReveal.forEach((id) => next.add(id))
          return next
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [currentPage])

  const toggleLike = (name: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const navigateTo = (page: "home" | "people" | "gallery" | "projects", hash?: string) => {
    setCurrentPage(page)
    if (page === "home" && hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 60)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const CARDS_PER_SLIDE = 4
  const totalSlides = Math.ceil(members.length / CARDS_PER_SLIDE)

  const changeSlide = (direction: number) => {
    setActiveIndex(
      (current) => (current + direction + totalSlides) % totalSlides,
    )
  }

  const currentMembers = members.slice(
    activeIndex * CARDS_PER_SLIDE,
    (activeIndex + 1) * CARDS_PER_SLIDE,
  )

  const filteredGallery = galleryFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === galleryFilter)

  const filteredProjects = projectFilter === "All"
    ? projectItems
    : projectItems.filter((item) => item.category === projectFilter)

  return (
    <main className="site-shell">
      <div className="intro-screen" aria-hidden="true">
        <div className="intro-screen-mark">
          <img src="/datalearners-logo.png" alt="" />
        </div>
        <span className="intro-screen-label">DATALEARNERS.XXV</span>
        <div className="intro-screen-progress" />
      </div>
      <div className="background-grid" aria-hidden="true" />
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />

      {/* Sticky Glassmorphism Header */}
      <header className={`navbar-wrap ${isScrolled ? "scrolled" : ""}`}>
        <nav className="navbar" aria-label="Main navigation">
          <a 
            className="brand" 
            href="#home" 
            aria-label="Datalearners home"
            onClick={(e) => {
              e.preventDefault()
              navigateTo("home", "#home")
            }}
          >
            <Logo />
            <span>DATALEARNERS.XXV</span>
          </a>

          <div className="nav-links">
            <a
              className={activeNav === "home" ? "active" : ""}
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                navigateTo("home", "#home")
              }}
            >
              Home
            </a>
            <a
              className={activeNav === "people" ? "active" : ""}
              href="#people"
              onClick={(e) => {
                e.preventDefault()
                navigateTo("people")
              }}
            >
              People
            </a>
            <a
              className={activeNav === "gallery" ? "active" : ""}
              href="#gallery"
              onClick={(e) => {
                e.preventDefault()
                navigateTo("gallery")
              }}
            >
              Galeri
            </a>
            <a
              className={activeNav === "projects" ? "active" : ""}
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                navigateTo("projects")
              }}
            >
              Tugas &amp; Project
            </a>
            <a
              className={activeNav === "about" ? "active" : ""}
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                navigateTo("home", "#about")
              }}
            >
              About Us
            </a>
          </div>

          <button
            type="button"
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <a 
            className="contact-button" 
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              navigateTo("home", "#contact")
            }}
          >
            Hubungi Kami
            <ArrowIcon />
          </a>

          {isMobileMenuOpen && (
            <div className="mobile-nav-panel" id="mobile-navigation">
              <a
                className={activeNav === "home" ? "active" : ""}
                href="#home"
                onClick={(event) => {
                  event.preventDefault()
                  setIsMobileMenuOpen(false)
                  navigateTo("home", "#home")
                }}
              >
                Home
              </a>
              <a
                className={activeNav === "people" ? "active" : ""}
                href="#people"
                onClick={(event) => {
                  event.preventDefault()
                  setIsMobileMenuOpen(false)
                  navigateTo("people")
                }}
              >
                People
              </a>
              <a
                className={activeNav === "gallery" ? "active" : ""}
                href="#gallery"
                onClick={(event) => {
                  event.preventDefault()
                  setIsMobileMenuOpen(false)
                  navigateTo("gallery")
                }}
              >
                Galeri
              </a>
              <a
                className={activeNav === "projects" ? "active" : ""}
                href="#projects"
                onClick={(event) => {
                  event.preventDefault()
                  setIsMobileMenuOpen(false)
                  navigateTo("projects")
                }}
              >
                Tugas &amp; Project
              </a>
              <a
                className={activeNav === "about" ? "active" : ""}
                href="#about"
                onClick={(event) => {
                  event.preventDefault()
                  setIsMobileMenuOpen(false)
                  navigateTo("home", "#about")
                }}
              >
                About Us
              </a>
              <a
                className="mobile-contact-link"
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  setIsMobileMenuOpen(false)
                  navigateTo("home", "#contact")
                }}
              >
                Hubungi Kami <ArrowIcon />
              </a>
            </div>
          )}
        </nav>
      </header>

      {currentPage === "home" ? (
        <>
          <section className="hero" id="home">
            <div className="hero-kicker">
              <span className="pulse-dot" />TI 2B · 2026
            </div>

            <div className="hero-title-wrap">
              <span className="eyebrow-note">THE PEOPLE BEHIND THE DATA</span>
              <h1>
                <span>DATALEARNERS</span>
                <span className="outline-word">PEOPLE</span>
              </h1>

              <svg
                className="doodle-arrow arrow-top"
                viewBox="0 0 180 100"
                aria-hidden="true"
              >
                <path d="M7 86c35-4 61-16 76-38 11-16 1-32-13-25-15 8 10 38 91 21" />
                <path d="m145 29 19 15-17 17" />
              </svg>
              <svg
                className="doodle-arrow arrow-bottom"
                viewBox="0 0 160 120"
                aria-hidden="true"
              >
                <path d="M143 8c-3 42-32 77-104 81" />
                <path d="m53 71-19 19 23 11" />
              </svg>

              <Spark className="spark-one" />
              <Spark className="spark-two" />
              <span className="doodle-cross cross-one">×</span>
              <span className="doodle-cross cross-two">×</span>
            </div>

            <FloatingProfile
              member={members[floatingProfilesIndex % members.length]}
              className="float-one"
            />
            <FloatingProfile
              member={members[(floatingProfilesIndex + 9) % members.length]}
              className="float-two"
            />
            <FloatingProfile
              member={members[(floatingProfilesIndex + 18) % members.length]}
              className="float-three"
            />

            <div className="hero-footer">
              <p>
                Satu kelas, banyak cerita.
                <br />
                Kenalan dengan para <strong>data learners!</strong>
              </p>
              <a 
                className="scroll-cue" 
                href="#people"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.querySelector("#people")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span>SCROLL TO EXPLORE</span>
                <span className="scroll-icon">↓</span>
              </a>
              <div 
                className="student-count" 
                style={{ cursor: "pointer" }}
                onClick={() => navigateTo("people")}
                title="Buka Instagram Feed Anggota"
              >
                <div className="avatar-stack">
                  {members.slice(0, 3).map((member) => (
                    <img key={member.name} src={member.image} alt="" />
                  ))}
                </div>
                <div>
                  <strong>27</strong>
                  <span>creative minds (view feed →)</span>
                </div>
              </div>
            </div>
          </section>

          <div className="wave-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
              <path
                className="wave-back"
                d="M0 70c220 95 390-60 618 10 219 67 349 77 822-18v118H0Z"
              />
              <path
                className="wave-front"
                d="M0 112c232 43 349-83 613-24 264 60 503 59 827-25v117H0Z"
              />
            </svg>
          </div>

          <section className={`people-section scroll-reveal ${revealedSections.has("people") ? "revealed" : ""}`} id="people">
            <div className="dot-field dot-field-left" aria-hidden="true" />
            <div className="dot-field dot-field-right" aria-hidden="true" />

            <header className="section-heading">
              <div>
                <div className="section-label">
                  <span>02</span>
                  OUR PEOPLE
                </div>
                <h2>
                  ANGGOTA <span>KELAS</span>
                </h2>
              </div>
              <div className="heading-side">
                <p>
                  Unik dalam karakter,
                  <br />
                  kompak dalam tujuan.
                </p>
                <button
                  className="round-button"
                  type="button"
                  aria-label="View next slide"
                  onClick={() => changeSlide(1)}
                >
                  <ArrowIcon />
                </button>
              </div>
            </header>

            <div className="carousel">
              <button
                className="carousel-control prev"
                type="button"
                aria-label="Previous slide"
                onClick={() => changeSlide(-1)}
              >
                <ArrowIcon direction="left" />
              </button>

              <div className="member-grid" aria-live="polite">
                {currentMembers.map((member) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    index={members.indexOf(member)}
                    onSelect={setSelectedMember}
                  />
                ))}
              </div>
              <div
                className="member-grid-mobile"
                ref={mobileMemberTrackRef}
                role="region"
                aria-label="Carousel anggota kelas, geser untuk menjelajah secara melingkar"
              >
                <MemberCard
                  key={`clone-${members[members.length - 1].name}`}
                  member={members[members.length - 1]}
                  index={members.length - 1}
                  onSelect={setSelectedMember}
                  isClone
                />
                {members.map((member, index) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    index={index}
                    onSelect={setSelectedMember}
                  />
                ))}
                <MemberCard
                  key={`clone-${members[0].name}`}
                  member={members[0]}
                  index={0}
                  onSelect={setSelectedMember}
                  isClone
                />
              </div>
              <p className="member-swipe-hint">
                Otomatis berputar · geser untuk lihat {members.length} anggota
                <span aria-hidden="true">→</span>
              </p>

              <button
                className="carousel-control next"
                type="button"
                aria-label="Next slide"
                onClick={() => changeSlide(1)}
              >
                <ArrowIcon />
              </button>
            </div>

            <div className="pagination" aria-label="Carousel pagination">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  className={index === activeIndex ? "active" : ""}
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "42px" }}>
              <button
                type="button"
                className="explore-feed-btn"
                onClick={() => navigateTo("people")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Buka Instagram Feed Kelas (27 Members) →
              </button>
            </div>
          </section>

          <section className={`gallery-section scroll-reveal ${revealedSections.has("gallery") ? "revealed" : ""}`} id="gallery">
            <div className="gallery-intro">
              <div>
                <div className="section-label">
                  <span>03</span>
                  OUR MOMENTS
                </div>
                <h2>
                  CERITA DALAM
                  <br />
                  <span>SATU FRAME.</span>
                </h2>
              </div>
              <div className="gallery-copy">
                <span className="handwritten">no boring days here!</span>
                <p>
                  Potongan kecil dari keseharian kami—belajar, bercanda, dan tumbuh
                  bareng sebagai satu kelas.
                </p>
              </div>
            </div>

            <div className="gallery-grid">
              <figure className="gallery-card gallery-main" style={{ cursor: "pointer" }} onClick={() => setSelectedGalleryItem(galleryItems[0])}>
                <img
                  src="https://images.unsplash.com/photo-1764720572747-cd3753f8fdb1?auto=format&fit=crop&w=1400&q=88"
                  alt="Students sharing a moment in class"
                />
                <figcaption>
                  <div>
                    <span>CLASS MOMENT · 01</span>
                    <strong>Morning Chaos</strong>
                  </div>
                  <span className="gallery-arrow">
                    <ArrowIcon />
                  </span>
                </figcaption>
              </figure>

              <figure className="gallery-card gallery-top" style={{ cursor: "pointer" }} onClick={() => setSelectedGalleryItem(galleryItems[1])}>
                <img
                  src="https://images.unsplash.com/photo-1742549586702-c23994895082?auto=format&fit=crop&w=1000&q=88"
                  alt="Students focusing during a classroom session"
                />
                <figcaption>
                  <div>
                    <span>STUDY MODE · 02</span>
                    <strong>Focus, Please!</strong>
                  </div>
                </figcaption>
              </figure>

              <figure className="gallery-card gallery-bottom" style={{ cursor: "pointer" }} onClick={() => setSelectedGalleryItem(galleryItems[2])}>
                <img
                  src="https://images.unsplash.com/photo-1643216755260-cb0bc30473c8?auto=format&fit=crop&w=1000&q=88"
                  alt="Student working at a classroom desk"
                />
                <figcaption>
                  <div>
                    <span>BEHIND THE TASK · 03</span>
                    <strong>Deadline Energy</strong>
                  </div>
                </figcaption>
              </figure>

              <div className="gallery-note">
                <span>∞</span>
                <p>Memories loading...</p>
              </div>
            </div>

            <div className="home-section-cta">
              <button 
                type="button" 
                className="view-more-btn"
                onClick={() => navigateTo("gallery")}
              >
                Lihat Semua Foto Galeri Kelas ({galleryItems.length} Momen) →
              </button>
            </div>
          </section>

          <section className={`projects-section scroll-reveal ${revealedSections.has("projects") ? "revealed" : ""}`} id="projects">
            <div className="projects-orbit orbit-one" aria-hidden="true" />
            <div className="projects-orbit orbit-two" aria-hidden="true" />
            <header className="projects-heading">
              <div>
                <div className="section-label">
                  <span>04</span>
                  WHAT WE BUILD
                </div>
                <h2>
                  TUGAS &amp; <span>PROJECT</span>
                </h2>
              </div>
              <p>
                Bukan cuma tugas sekolah. Ini tempat ide kecil berubah jadi sesuatu
                yang bisa diklik, dilihat, dan dibanggakan.
              </p>
            </header>

            <div className="project-list">
              <article 
                className="project-card project-featured" 
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label={`Lihat penjelasan ${projectItems[0].title}`}
                onClick={() => setSelectedProject(projectItems[0])}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedProject(projectItems[0])
                  }
                }}
                title="Klik untuk melihat penjelasan lengkap"
              >
                <div className="project-index">01 / WEB</div>
                <div className="project-visual dashboard-visual">
                  <div className="visual-browser">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="visual-chart">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="visual-code">&lt;/&gt;</div>
                </div>
                <div className="project-info">
                  <span className="project-status">COMPLETED</span>
                  <h3>Dashboard Nilai Kelas</h3>
                  <p>
                    Eksperimen dashboard interaktif untuk melihat perkembangan
                    belajar seluruh anggota kelas.
                  </p>
                  <div className="tech-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                  </div>
                </div>
              </article>

              <article 
                className="project-card project-small project-purple"
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label={`Lihat penjelasan ${projectItems[1].title}`}
                onClick={() => setSelectedProject(projectItems[1])}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedProject(projectItems[1])
                  }
                }}
                title="Klik untuk melihat penjelasan lengkap"
              >
                <div className="project-index">02 / DATA</div>
                <div className="mini-project-icon">01</div>
                <div className="project-info">
                  <span className="project-status">IN PROGRESS</span>
                  <h3>Data Cuaca Harian</h3>
                  <p>Mengolah data sederhana menjadi cerita visual.</p>
                  <div className="progress-track">
                    <span />
                  </div>
                </div>
              </article>

              <article 
                className="project-card project-small project-cyan"
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label={`Lihat penjelasan ${projectItems[2].title}`}
                onClick={() => setSelectedProject(projectItems[2])}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedProject(projectItems[2])
                  }
                }}
                title="Klik untuk melihat penjelasan lengkap"
              >
                <div className="project-index">03 / UI DESIGN</div>
                <div className="mini-project-icon">Aa</div>
                <div className="project-info">
                  <span className="project-status">CONCEPT</span>
                  <h3>Class Digital Yearbook</h3>
                  <p>Arsip digital untuk menyimpan cerita satu angkatan.</p>
                  <span style={{ color: "var(--cyan-bright)", fontSize: "11px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    DETAIL PENJELASAN <ArrowIcon />
                  </span>
                </div>
              </article>
            </div>

            <div className="home-section-cta">
              <button 
                type="button" 
                className="view-more-btn"
                onClick={() => navigateTo("projects")}
              >
                Lihat Semua Tugas &amp; Project ({projectItems.length} Project) →
              </button>
            </div>
          </section>

          <section className={`about-section scroll-reveal ${revealedSections.has("about") ? "revealed" : ""}`} id="about">
            <div className="about-panel">
              <div className="about-logo-wrap">
                <div className="logo-rings" aria-hidden="true" />
                <img src="/datalearners-logo.png" alt="Datalearners class logo" />
                <span>EST. 2025</span>
              </div>

              <div className="about-content">
                <div className="section-label">
                  <span>05</span>
                  ABOUT OUR CLASS
                </div>
                <h2>
                  WE LEARN.
                  <br />
                  WE BUILD. <span>TOGETHER.</span>
                </h2>
                <p>
                  Datalearners.XXV adalah rumah untuk 27 kepala dengan sejuta ide.
                  Kami percaya teknologi jadi lebih seru saat dipelajari bersama,
                  satu error dan satu tawa dalam satu waktu.
                </p>

                <div className="class-values">
                  <div>
                    <strong>27</strong>
                    <span>ANGGOTA</span>
                  </div>
                  <div>
                    <strong>1</strong>
                    <span>KELAS</span>
                  </div>
                  <div>
                    <strong>∞</strong>
                    <span>IDE BESAR</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : currentPage === "gallery" ? (
        /* ================= FULL GALLERY PAGE ================= */
        <section className="subpage-container">
          <div className="ig-back-bar">
            <button
              type="button"
              className="ig-back-btn"
              onClick={() => navigateTo("home", "#gallery")}
            >
              ← Kembali ke Beranda
            </button>
            <span style={{ fontSize: "13px", color: "var(--cyan-bright)", fontWeight: 600 }}>
              Koleksi Dokumentasi Angkatan XXV
            </span>
          </div>

          <header className="subpage-header">
            <div className="subpage-title-wrap">
              <div>
                <div className="section-label">
                  <span>03</span>
                  FULL GALLERY
                </div>
                <h1>GALERI <span>MOMEN KELAS</span></h1>
              </div>
              <p style={{ margin: 0, color: "#9bc4dc", maxWidth: "420px", fontSize: "13px", lineHeight: 1.6 }}>
                Arsip foto bersama, praktikum di laboratorium, kegiatan kampus, hingga momen nongkrong santai seluruh mahasiswa TI 2B.
              </p>
            </div>

            <div className="subpage-category-filters">
              {["All", "Classroom", "Hangout", "Project", "Events"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${galleryFilter === cat ? "active" : ""}`}
                  onClick={() => setGalleryFilter(cat)}
                >
                  {cat === "All" ? "Semua Foto" : cat}
                </button>
              ))}
            </div>
          </header>

          <div className="full-gallery-grid">
            {filteredGallery.map((item) => (
              <figure 
                key={item.id} 
                className={`full-gallery-card ${item.span || ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedGalleryItem(item)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption className="full-gallery-overlay">
                  <span className="gallery-tag-pill">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : currentPage === "projects" ? (
        /* ================= FULL PROJECTS PAGE ================= */
        <section className="subpage-container">
          <div className="ig-back-bar">
            <button
              type="button"
              className="ig-back-btn"
              onClick={() => navigateTo("home", "#projects")}
            >
              ← Kembali ke Beranda
            </button>
            <span style={{ fontSize: "13px", color: "var(--cyan-bright)", fontWeight: 600 }}>
              Koleksi Karya &amp; Portfolio TI 2B
            </span>
          </div>

          <header className="subpage-header">
            <div className="subpage-title-wrap">
              <div>
                <div className="section-label">
                  <span>04</span>
                  ALL PROJECTS &amp; TASKS
                </div>
                <h1>TUGAS &amp; <span>PROJECT KELAS</span></h1>
              </div>
              <p style={{ margin: 0, color: "#9bc4dc", maxWidth: "440px", fontSize: "13px", lineHeight: 1.6 }}>
                Eksplorasi pembuatan aplikasi web, data analysis, UI/UX design, mobile apps, hingga riset machine learning oleh mahasiswa Datalearners.XXV.
              </p>
            </div>

            <div className="subpage-category-filters">
              {["All", "WEB", "DATA", "UI DESIGN", "MOBILE", "AI / ML"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${projectFilter === cat ? "active" : ""}`}
                  onClick={() => setProjectFilter(cat)}
                >
                  {cat === "All" ? "Semua Kategori" : cat}
                </button>
              ))}
            </div>
          </header>

          <div className="full-projects-grid">
            {filteredProjects.map((p) => (
              <article key={p.id} className="project-showcase-card">
                <div className="project-banner-preview">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="project-cat-badge">{p.category}</span>
                  <span className={`project-status-badge ${p.status === "COMPLETED" ? "completed" : p.status === "IN PROGRESS" ? "in-progress" : ""}`}>
                    {p.status}
                  </span>
                </div>

                <div className="project-showcase-body">
                  <div style={{ fontSize: "11px", color: "var(--cyan-bright)", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "6px" }}>
                    {p.index}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <div className="project-tags">
                    {p.techStack.map((tech) => (
                      <span key={tech} className="project-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-team-row">
                    <span className="project-team-author">
                      Karya: <strong>{p.author}</strong>
                    </span>
                    <button 
                      type="button"
                      style={{ background: "transparent", border: "none", color: "var(--cyan-bright)", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}
                      onClick={() => setSelectedProject(p)}
                    >
                      Lihat Penjelasan Project <ArrowIcon />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        /* ================= INSTAGRAM FEED PAGE ================= */
        <section className="ig-page">
          <div className="ig-back-bar">
            <button
              type="button"
              className="ig-back-btn"
              onClick={() => navigateTo("home", "#people")}
            >
              ← Kembali ke Beranda
            </button>

            <div className="ig-view-toggle">
              <button
                type="button"
                className={`ig-toggle-btn ${feedView === "grid" ? "active" : ""}`}
                onClick={() => setFeedView("grid")}
              >
                <GridIcon />
                <span>Grid 3x3</span>
              </button>
              <button
                type="button"
                className={`ig-toggle-btn ${feedView === "feed" ? "active" : ""}`}
                onClick={() => setFeedView("feed")}
              >
                <FeedIcon />
                <span>Feed Timeline</span>
              </button>
            </div>
          </div>

          {/* Instagram Profile Header */}
          <header className="ig-profile-header">
            <div className="ig-avatar-ring">
              <div className="ig-avatar-inner">
                <img src="/datalearners-logo.png" alt="Datalearners XXV Profile" />
              </div>
            </div>

            <div className="ig-profile-info">
              <div className="ig-profile-top">
                <h1 className="ig-username">
                  datalearners.xxv
                  <span className="ig-verified-badge" title="Verified Class Profile">✓</span>
                </h1>
                <button 
                  type="button" 
                  className="ig-follow-btn"
                  onClick={() => {
                    setIsFollowing(!isFollowing)
                    showToast(isFollowing ? "Berhenti mengikuti @datalearners.xxv" : "Terima kasih sudah mengikuti @datalearners.xxv! ✨")
                  }}
                >
                  {isFollowing ? "Mengikuti ✓" : "Follow"}
                </button>
              </div>

              <div className="ig-stats-row">
                <span className="ig-stat">
                  <strong>{members.length}</strong> posts
                </span>
                <span className="ig-stat">
                  <strong>{2700 + (isFollowing ? 1 : 0)}</strong> followers
                </span>
                <span className="ig-stat">
                  <strong>1</strong> following
                </span>
              </div>

              <div className="ig-bio">
                <h3>Datalearners XXV · TI 2B 2026</h3>
                <p>
                  Official Class Feed &amp; Roster 🎓
                  <br />
                  Data Science, Coding &amp; Creative Minds.
                  <br />
                  <span className="ig-bio-tag">#TI2B #DataLearnersXXV #FutureTech</span>
                </p>
              </div>
            </div>
          </header>

          {/* Stories / Highlights */}
          <div className="ig-stories" aria-label="Stories highlights">
            <div className="ig-story-item" onClick={() => setSelectedMember(members[1])}>
              <div className="ig-story-circle">
                <img src={members[1].image} alt="Komisaris" />
              </div>
              <span className="ig-story-title">👑 Komisaris</span>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="ig-tabs-bar">
            <button
              type="button"
              className={`ig-tab ${feedView === "grid" ? "active" : ""}`}
              onClick={() => setFeedView("grid")}
            >
              <GridIcon />
              POSTS GRID ({members.length})
            </button>
            <button
              type="button"
              className={`ig-tab ${feedView === "feed" ? "active" : ""}`}
              onClick={() => setFeedView("feed")}
            >
              <FeedIcon />
              TIMELINE FEED
            </button>
          </div>

          {/* View 1: 3-Column Instagram Profile Grid */}
          {feedView === "grid" ? (
            <div className="ig-grid-container">
              {members.map((member, index) => {
                const isLiked = likedPosts[member.name]
                return (
                  <div
                    key={member.name}
                    className="ig-grid-item"
                    onClick={() => setSelectedMember(member)}
                  >
                    <img src={member.image} alt={member.name} loading="lazy" />
                    <div className="ig-grid-overlay">
                      <span className="ig-overlay-role">{member.interest}</span>
                      <strong className="ig-overlay-name">{member.name}</strong>
                      <div className="ig-overlay-stats">
                        <span>❤️ {(member.likes || 142) + (isLiked ? 1 : 0)}</span>
                        <span>💬 {12 + (index % 15)}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* View 2: Instagram Feed Post Cards (Vertical Timeline) */
            <div className="ig-feed-container">
              {members.map((member, index) => {
                const isLiked = likedPosts[member.name]
                const currentLikes = (member.likes || 128 + index * 9) + (isLiked ? 1 : 0)

                return (
                  <article key={member.name} className="ig-post-card">
                    <header className="ig-card-header">
                      <div className="ig-user-badge">
                        <div className="ig-user-avatar">
                          <img src={member.image} alt={member.name} />
                        </div>
                        <div className="ig-user-text">
                          <strong>{member.handle.replace("@", "")}</strong>
                          <span>{member.name}</span>
                        </div>
                      </div>
                      <span className="ig-card-badge">{member.interest}</span>
                    </header>

                    <div 
                      className="ig-card-photo-wrap"
                      onDoubleClick={() => toggleLike(member.name)}
                      title="Double click untuk like"
                    >
                      <img src={member.image} alt={`Post by ${member.name}`} />
                    </div>

                    <div className="ig-card-actions">
                      <div className="ig-action-left">
                        <button
                          type="button"
                          className={`ig-action-btn ${isLiked ? "liked" : ""}`}
                          onClick={() => toggleLike(member.name)}
                          aria-label="Like post"
                        >
                          <HeartIcon filled={isLiked} />
                        </button>
                        <button
                          type="button"
                          className="ig-action-btn"
                          onClick={() => setSelectedMember(member)}
                          aria-label="Comment"
                        >
                          <CommentIcon />
                        </button>
                        <button
                          type="button"
                          className="ig-action-btn"
                          onClick={() => void copyToClipboard(member.handle, `Handle ${member.handle}`)}
                          aria-label="Share"
                        >
                          <ShareIcon />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="ig-action-btn"
                        aria-label="Save post"
                      >
                        <BookmarkIcon />
                      </button>
                    </div>

                    <div className="ig-card-content">
                      <div className="ig-card-likes">
                        {currentLikes.toLocaleString()} suka
                      </div>
                      <div className="ig-card-caption">
                        <strong>{member.handle.replace("@", "")}</strong>
                        {member.caption}
                      </div>
                      <div className="ig-card-tags">
                        <span>#DataLearnersXXV</span>
                        <span>#TI2B</span>
                        <span>#{member.interest.replace(/\s+/g, "")}</span>
                        <span>#TechFamily</span>
                      </div>
                      <div className="ig-card-time">
                        {index + 1} HARI LALU · JAKARTA, INDONESIA
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          {/* Modal Detail Popup ala Instagram */}
          {/* Enhanced Member Detail Modal */}
          {selectedMember && (
            <div 
              className="ig-modal-backdrop" 
              onClick={() => setSelectedMember(null)}
            >
              <div 
                className="ig-modal-box" 
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-label={`Profil ${selectedMember.name}`}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="ig-modal-close"
                  onClick={() => setSelectedMember(null)}
                  aria-label="Tutup modal"
                >
                  ✕
                </button>

                <div className="ig-modal-photo">
                  <img src={selectedMember.image} alt={selectedMember.name} />
                </div>

                <div className="ig-modal-side">
                  <div className="ig-card-header" style={{ padding: "0 0 16px", borderBottom: "1px solid var(--line)" }}>
                    <div className="ig-user-badge">
                      <div className="ig-user-avatar">
                        <img src={selectedMember.image} alt={selectedMember.name} />
                      </div>
                      <div className="ig-user-text">
                        <strong>{selectedMember.handle.replace("@", "")}</strong>
                        <span>{selectedMember.name}</span>
                      </div>
                    </div>
                    <span className="ig-card-badge">{selectedMember.interest}</span>
                  </div>

                  <div className="member-modal-content" style={{ padding: "18px 0", flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
                    {/* Interactive Quote */}
                    <div className="member-modal-quote">
                      {selectedMember.caption}
                    </div>

                    {/* Interactive Stat Cards */}
                    <div className="member-modal-stat-grid">
                      <div className="member-modal-stat">
                        <strong>#{String(members.indexOf(selectedMember) + 1).padStart(2, "0")}</strong>
                        <span>Urutan</span>
                      </div>
                      <div className="member-modal-stat">
                        <strong>{(selectedMember.likes || 178) + (likedPosts[selectedMember.name] ? 1 : 0)}</strong>
                        <span>Likes</span>
                      </div>
                      <div className="member-modal-stat">
                        <strong>XXV</strong>
                        <span>Angkatan</span>
                      </div>
                    </div>

                    {/* Position Card */}
                    <div className="member-modal-position" style={{ background: "rgba(0, 30, 61, 0.4)", padding: "14px", borderRadius: "12px", border: "1px solid rgba(91, 220, 255, 0.2)" }}>
                      <span style={{ fontSize: "11px", color: "var(--cyan-bright)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {selectedMember.classPosition ? "Posisi di Kelas" : "Bidang IT yang Diminati"}
                      </span>
                      <h4 style={{ margin: "4px 0 0", fontSize: "16px", color: "var(--white)" }}>
                        {selectedMember.classPosition ? "👑 " : ""}{selectedMember.classPosition || selectedMember.interest}
                      </h4>
                      <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#9bc4dc" }}>
                        Kelas TI 2B · Politeknik Negeri Lhokseumawe · 2026
                      </p>
                    </div>

                    <div className="ig-card-tags">
                      <span>#DataLearnersXXV</span>
                      <span>#StudentLife</span>
                      <span>#TI2B</span>
                      <span>#CampusMoments</span>
                    </div>
                  </div>

                  <div className="member-modal-footer" style={{ borderTop: "1px solid var(--line)", paddingTop: "14px" }}>
                    <div className="ig-card-actions" style={{ padding: 0 }}>
                      <div className="ig-action-left">
                        <button
                          type="button"
                          className={`ig-action-btn ${likedPosts[selectedMember.name] ? "liked" : ""}`}
                          onClick={() => {
                            toggleLike(selectedMember.name)
                            if (!likedPosts[selectedMember.name]) {
                              showToast(`Kamu menyukai profil ${selectedMember.name} ❤️`)
                            }
                          }}
                        >
                          <HeartIcon filled={likedPosts[selectedMember.name]} />
                        </button>
                        <button type="button" className="ig-action-btn" onClick={() => showToast(`Komentar untuk ${selectedMember.name} segera hadir! 💬`)}>
                          <CommentIcon />
                        </button>
                        <button
                          type="button" 
                          className="ig-action-btn"
                          aria-label={`Salin handle ${selectedMember.handle}`}
                          onClick={() => void copyToClipboard(selectedMember.handle, `Handle ${selectedMember.handle}`)}
                        >
                          <ShareIcon />
                        </button>
                      </div>
                      <button type="button" className="ig-action-btn" onClick={() => showToast(`Profil ${selectedMember.name} tersimpan! 🔖`)}>
                        <BookmarkIcon />
                      </button>
                    </div>
                    <div className="ig-card-likes" style={{ margin: "8px 0 0" }}>
                      {((selectedMember.likes || 178) + (likedPosts[selectedMember.name] ? 1 : 0)).toLocaleString()} suka
                    </div>
                    <div className="ig-card-time" style={{ marginTop: "4px" }}>
                      TERDAFTAR DI DATALEARNERS.XXV · 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {selectedMember && currentPage === "home" && (
        <div
          className="ig-modal-backdrop"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="ig-modal-box"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Profil ${selectedMember.name}`}
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="ig-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Tutup modal"
            >
              ✕
            </button>
            <div className="ig-modal-photo">
              <img src={selectedMember.image} alt={selectedMember.name} />
            </div>
            <div className="ig-modal-side">
              <div className="ig-card-header member-modal-header">
                <div className="ig-user-badge">
                  <div className="ig-user-avatar">
                    <img src={selectedMember.image} alt="" />
                  </div>
                  <div className="ig-user-text">
                    <strong>{selectedMember.handle.replace("@", "")}</strong>
                    <span>{selectedMember.name}</span>
                  </div>
                </div>
                <span className="ig-card-badge">{selectedMember.interest}</span>
              </div>
              <div className="member-modal-content">
                <div className="member-modal-quote">
                  {selectedMember.caption}
                </div>
                <div className="member-modal-stat-grid">
                  <div className="member-modal-stat">
                    <strong>#{String(members.indexOf(selectedMember) + 1).padStart(2, "0")}</strong>
                    <span>Urutan</span>
                  </div>
                  <div className="member-modal-stat">
                    <strong>{(selectedMember.likes || 178) + (likedPosts[selectedMember.name] ? 1 : 0)}</strong>
                    <span>Likes</span>
                  </div>
                  <div className="member-modal-stat">
                    <strong>XXV</strong>
                    <span>Angkatan</span>
                  </div>
                </div>
                <div className="member-modal-position">
                  <span>{selectedMember.classPosition ? "Posisi di Kelas" : "Bidang IT yang Diminati"}</span>
                  <h4>{selectedMember.classPosition ? "👑 " : ""}{selectedMember.classPosition || selectedMember.interest}</h4>
                  <p>Kelas TI 2B · Politeknik Negeri Lhokseumawe · 2026</p>
                </div>
                <div className="ig-card-tags">
                  <span>#DataLearnersXXV</span>
                  <span>#StudentLife</span>
                  <span>#TI2B</span>
                </div>
              </div>
              <div className="member-modal-footer">
                <div className="ig-card-actions">
                  <div className="ig-action-left">
                    <button
                      type="button"
                      className={`ig-action-btn ${likedPosts[selectedMember.name] ? "liked" : ""}`}
                      aria-label={likedPosts[selectedMember.name] ? "Batal menyukai profil" : "Sukai profil"}
                      onClick={() => toggleLike(selectedMember.name)}
                    >
                      <HeartIcon filled={likedPosts[selectedMember.name]} />
                    </button>
                    <button
                      type="button"
                      className="ig-action-btn"
                      aria-label="Salin handle"
                      onClick={() => void copyToClipboard(selectedMember.handle, `Handle ${selectedMember.handle}`)}
                    >
                      <ShareIcon />
                    </button>
                  </div>
                  <span className="ig-card-likes">
                    {((selectedMember.likes || 178) + (likedPosts[selectedMember.name] ? 1 : 0)).toLocaleString()} suka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ PROJECT DETAIL MODAL ============ */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-card"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup modal"
            >
              ✕
            </button>

            <div className="project-modal-hero">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="project-modal-hero-badge">
                <span className="badge-category">{selectedProject.category}</span>
                <span className={`badge-status ${selectedProject.status === "COMPLETED" ? "completed" : selectedProject.status === "IN PROGRESS" ? "in-progress" : "concept"}`}>
                  {selectedProject.status}
                </span>
              </div>
            </div>

            <div className="project-modal-body">
              <h2 id="project-modal-title">{selectedProject.title}</h2>

              <div className="project-modal-details-grid">
                <div className="project-explanation-text">
                  <h4>📋 Penjelasan Project</h4>
                  <p>{selectedProject.explanation}</p>

                  <h4>✦ Fitur Utama</h4>
                  <ul className="project-feature-list">
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-meta-box">
                  <div className="meta-field">
                    <label>Kategori</label>
                    <span>{selectedProject.category}</span>
                  </div>
                  <div className="meta-field">
                    <label>Status</label>
                    <span>{selectedProject.status}</span>
                  </div>
                  <div className="meta-field">
                    <label>Tim / Pembuat</label>
                    <span>{selectedProject.author}</span>
                  </div>
                  <div className="meta-field">
                    <label>Tech Stack</label>
                    <div className="project-tech-stack-pills">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="project-tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-modal-actions">
                {selectedProject.githubUrl && (
                  <a
                    className="btn-github-link"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => showToast(`Menuju repository ${selectedProject.title}... 🚀`)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Lihat di GitHub
                  </a>
                )}
                <button
                  type="button"
                  className="btn-github-link"
                  style={{ background: "rgba(0, 20, 45, 0.6)", color: "var(--cyan-bright)", border: "1px solid rgba(91, 220, 255, 0.4)" }}
                  onClick={() => setSelectedProject(null)}
                >
                  Tutup Penjelasan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ GALLERY LIGHTBOX MODAL ============ */}
      {selectedGalleryItem && (
        <div
          className="gallery-lightbox-backdrop"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div
            className="gallery-lightbox-box"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ${selectedGalleryItem.title}`}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gallery-lightbox-image-wrap">
              <img src={selectedGalleryItem.image} alt={selectedGalleryItem.title} />
              <span className="gallery-lightbox-counter">
                {galleryItems.indexOf(selectedGalleryItem) + 1} / {galleryItems.length}
              </span>

              {/* Previous button */}
              <button
                type="button"
                className="gallery-lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIndex = galleryItems.indexOf(selectedGalleryItem)
                  const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
                  setSelectedGalleryItem(galleryItems[prevIndex])
                }}
                aria-label="Foto sebelumnya"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6" /></svg>
              </button>

              {/* Next button */}
              <button
                type="button"
                className="gallery-lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIndex = galleryItems.indexOf(selectedGalleryItem)
                  const nextIndex = (currentIndex + 1) % galleryItems.length
                  setSelectedGalleryItem(galleryItems[nextIndex])
                }}
                aria-label="Foto selanjutnya"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>

            <div className="gallery-lightbox-body">
              <div className="gallery-lightbox-info">
                <div className="gallery-lightbox-category">{selectedGalleryItem.category}</div>
                <h3>{selectedGalleryItem.title}</h3>
                <p>{selectedGalleryItem.caption}</p>
              </div>
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setSelectedGalleryItem(null)}
                aria-label="Tutup lightbox"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============ TOAST NOTIFICATION ============ */}
      {toastMessage && (
        <div className="toast-container" role="status" aria-live="polite">
          <span className="toast-icon" aria-hidden="true">✦</span>
          <span>{toastMessage}</span>
          <button
            type="button"
            className="toast-dismiss"
            aria-label="Tutup notifikasi"
            onClick={() => setToastMessage(null)}
          >
            ✕
          </button>
        </div>
      )}

      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <div>
            <span className="footer-kicker">
              LET&apos;S MAKE SOMETHING COOL
            </span>
            <h2>
              SAY HELLO,
              <br />
              <span>JANGAN MALU!</span>
            </h2>
          </div>
          <a className="footer-cta" href="mailto:datalearners.xxv@example.com">
            <span>HUBUNGI KAMI</span>
            <ArrowIcon />
          </a>
        </div>
        <div className="footer-bottom">
          <a className="brand" href="#home">
            <Logo />
            <span>DATALEARNERS.XXV</span>
          </a>
          <p>MADE WITH CURIOSITY, COFFEE &amp; A LOT OF CTRL + Z.</p>
          <span>© 2026 · TI 2B</span>
        </div>
      </footer>
    </main>
  )
}