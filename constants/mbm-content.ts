import type { FormatGroup, GlossaryTerm, ProgramBlock, RuleItem, SourceShot, SpecialCase } from "@/types/mbm";

export const navItems = [
  { id: "top", label: "Beranda" },
  { id: "tampilan", label: "Tampilan" },
  { id: "istilah", label: "Istilah" },
  { id: "sumber", label: "Sumber" },
  { id: "istilah-baru", label: "Istilah Baru" },
  { id: "format", label: "Format" },
  { id: "kepala", label: "Kepala MBM" },
  { id: "rules", label: "Rules" },
  { id: "referensi", label: "Referensi" },
] as const;

export const glossary: GlossaryTerm[] = [
  {
    term: "CG",
    definition: "Character Generator",
    keywords: ["Lower Third", "Caption", "Grafis"],
  },
  {
    term: "OBB",
    definition: "Opening Broadcast Bumper",
  },
  { term: "HL", definition: "Highlight" },
  { term: "VT", definition: "Video Tape" },
  {
    term: "SOT",
    definition: "Sound On Tape",
  },
  {
    term: "LOT",
    definition: "Live On Tape (Tayang Live, Kadang-Kadang Tapping)",
  },
  {
    term: "Wwc",
    definition: "Wawancara",
  },
  {
    term: "Wwc By Phone",
    definition: "Wawancara By Telepon",
  },
  {
    term: "Voxpop",
    definition: "Wawancara Sejumlah Warga Tentang Topik Yang Sedang Hangat",
  },
  { term: "LR", definition: "Live Report (Tayang Live)" },
  { term: "LR By Phone", definition: "Live Report By Phone " },
  { term: "LR By Video Call", definition: "Live Report By Video Call" },
  { term: "Teleconference", definition: "Wawancara Narasum Live (Zoom)"},
  { term: "Dialog", definition: "Wawancara Narasum Live (Studio)" },
  { term: "Telewicara", definition: "Wawancara Narasum Live (Telpon Suara)" },
  { term: "Break / CB", definition: "Commercial Break (CB) " },
  { term: "Teaser", definition: "Acara Selanjutnya " },
  { term: "CT", definition: "Credit Title" },
  { term: "Infografis", definition: "Informasi Berupa Chart, Dll Untuk Membuat Penonton Lebih Mudah Menerima"},
];

export const newGlossary: GlossaryTerm[] = [
  {
    term: "SOT",
    definition: "Sound On Tape",
    format: "Format Penulisan: (SOT: Nama, Jabatan)",
  },
  {
    term: "Wwc",
    definition: "Wawancara",
    format: "Format Penulisan: (Wwc: Nama, Jabatan)",
  },
  {
    term: "Voxpop",
    definition: "Wawancara Sejumlah Warga Mengenai Suatu Topik Yang Ringan Dan Sedang Hangat",
    format: "Format Penulisan: (Voxpop: Jabatan)",
  },
  {
    term: "Dialog",
    definition: "Wawancara Dengan Narasumber Secara Live",
    format:
      "Format Penulisan:\n- (Dialog: Nama, Jabatan) Atau\n- (Teleconference: Nama, Jabatan) Atau\n- (Telewicara: Nama, Jabatan)",
  },
  {
    term: "Infografis",
    definition: "Informasi Berupa Chart, Dll",
    format: "Format Penulisan: (Infografis: Judul Infografis)",
  },
  {
    term: "LOT",
    definition: "Live On Tape",
    format: "Format Penulisan: (LOT: Nama – Lokasi, Lokasi)",
  },
  {
    term: "LR",
    definition: "Live Report",
    format: "Format Penulisan: (LR: Nama – Lokasi, Lokasi)",
  },
];

export const formatGroups: FormatGroup[] = [
  {
    id: "format-vt",
    title: "Format - Parts: VT",
    description: "Paket VT Memakai Nomor N, CG Utama, Lalu Lokasi Atau Sumber Di Dalam Kurung",
    patterns: [
      "CG Utama (Kota, Propinsi)",
      "CG Utama (Sumber / SOT: Nama, Jabatan)",
      "CG Utama (Kota, Propinsi / Wwc: Nama, Jabatan)",
      "CG Utama (Kota, Propinsi / Voxpop: Jabatan)",
    ],
    examples: [
      {
        label: "VT",
        text: "N2: Bus Polisi Terbakar (Medan, Sumut)",
        image: "/mbm-assets/image9.png",
        breakdown: [
          { value: "N2", label: "News Urutan Ke-2" },
          { value: "Bus Polisi Terbakar", label: "CG Utama" },
          { value: "Medan, Sumut", label: "Kota, Propinsi" },
        ],
      },
      {
        label: "SOT",
        text: "N6: Trump Janjikan Transisi Aman Usai Tangkap Maduro (Dokumentasi / SOT: Donald Trump, Presiden As)",
        breakdown: [
          { value: "N6", label: "News Urutan Ke-6" },
          { value: "Dokumentasi", label: "Sumber Video" },
          { value: "Donald Trump", label: "Nama Narasumber" },
          { value: "Presiden As", label: "Jabatan" },
        ],
      },
      {
        label: "Wwc",
        text: "N4: Akses Masih Terputus, Warga Batu Busuak Terisolasi (Padang, Sumbar / Wwc: Warmayanti, Warga)",
        breakdown: [
          { value: "N4", label: "News Urutan Ke-4" },
          { value: "Padang, Sumbar", label: "Lokasi" },
          { value: "Warmayanti, Warga", label: "Nama Dan Jabatan" },
        ],
      },
      {
        label: "Voxpop",
        text: "N13: Kapal Tenggelam, Pelatih Valencia Cf Ditemukan (Labuan Bajo, Ntt / Voxpop: Saksi)",
        breakdown: [
          { value: "N13", label: "News Urutan Ke-13" },
          { value: "Voxpop: Saksi", label: "Jenis Wawancara Dan Jabatan" },
        ],
      },
    ],
  },
  {
    id: "format-lr",
    title: "Format - Parts: Live Report",
    description: "LR Dipakai Saat Tayang Live LOT Dipakai Untuk Laporan Tapping Atau Paket VT",
    patterns: [
      "CG Utama (LR: Nama Reporter - Lokasi, Lokasi)",
      "CG Utama (LOT: Nama Reporter - Lokasi, Lokasi)",
      "CG Utama (Lokasi / LOT: Nama Reporter - Lokasi, Lokasi)",
    ],
    examples: [
      {
        label: "LR",
        text: "N3: Arus Balik Libur Nataru 2026 (LR: Anisa Rzyqya - Stasiun Pasar Senen, Jakarta)",
        image: "/mbm-assets/image6.png",
        breakdown: [
          { value: "N3", label: "News Urutan Ke-3" },
          { value: "Arus Balik Libur Nataru 2026", label: "CG Utama" },
          { value: "Anisa Rzyqya", label: "Nama Reporter" },
          { value: "Stasiun Pasar Senen, Jakarta", label: "Lokasi LR" },
        ],
      },
      {
        label: "LOT",
        text: "N6: Habiskan Libur Nataru Bersama Penguin Lucu (LOT: Camar Haenda - Tangsel, Banten)",
        breakdown: [
          { value: "LOT", label: "Live On Tape" },
          { value: "Camar Haenda", label: "Reporter" },
          { value: "Tangsel, Banten", label: "Lokasi" },
        ],
      },
      {
        label: "LOT Dengan Lokasi Awal",
        text: "N6: Habiskan Libur Nataru Bersama Penguin Lucu (Jakarta / LOT: Camar Haenda - Tangsel, Banten)",
        breakdown: [
          { value: "Jakarta", label: "Lokasi Sebelumnya" },
          { value: "LOT: Camar Haenda", label: "Reporter" },
        ],
      },
    ],
  },
  {
    id: "format-dialog",
    title: "Format - Parts: Dialog",
    description: "Dialog, Teleconference, Dan Telewicara Dibedakan Dari Medium Live Narasumber",
    patterns: [
      "CG Utama (Dialog: Nama Narsum, Jabatan)",
      "CG Utama (Teleconference: Nama Narsum, Jabatan)",
      "CG Utama (Telewicara: Nama Narsum, Jabatan)",
    ],
    examples: [
      {
        label: "Dialog",
        text: "N11: Pssi Pilih John Herdman Jadi Pelatih Baru Timnas (Dialog: Wensley Hutagalung, Analisis Sepak Bola)",
        image: "/mbm-assets/image20.png",
        breakdown: [
          { value: "N11", label: "News Urutan Ke-11" },
          { value: "Pssi Pilih John Herdman Jadi Pelatih Baru Timnas", label: "CG Utama" },
          { value: "Wensley Hutagalung", label: "Nama Narsum" },
          { value: "Analisis Sepak Bola", label: "Jabatan" },
        ],
      },
      {
        label: "Teleconference",
        text: "N11: Pssi Pilih John Herdman Jadi Pelatih Baru Timnas (Teleconference: Zainal Arif, Mantan Pemain Timnas)",
        breakdown: [
          { value: "Teleconference", label: "Live Via Zoom" },
          { value: "Zainal Arif", label: "Narasumber" },
        ],
      },
      {
        label: "Telewicara",
        text: "N7: Serang Venezuela, As Tangkap Presiden Maduro (Telewicara: Teuku Rezasyah, Pengamat Hubungan Internasional)",
        breakdown: [
          { value: "Telewicara", label: "Live Via Telepon Suara" },
          { value: "Teuku Rezasyah", label: "Narasumber" },
        ],
      },
    ],
  },
  {
    id: "format-infografis",
    title: "Format - Parts: Infografis",
    description: "Infografis Memakai Judul Data Visual Di Dalam Penanda Khusus",
    patterns: ["CG Utama (Infografis: Judul Infografis)"],
    examples: [
      {
        label: "Infografis",
        text: "N17: Pasal Kontroversial Dalam KUHP Baru (Jakarta / Infografis: Pasal-Pasal KUHP Baru)",
        image: "/mbm-assets/image41.png",
        breakdown: [
          { value: "N17", label: "News Urutan Ke-17" },
          { value: "Pasal Kontroversial Dalam KUHP Baru", label: "CG Utama" },
          { value: "Pasal-Pasal KUHP Baru", label: "Judul Infografis" },
        ],
      },
    ],
  },
];

export const specialCases: SpecialCase[] = [
  {
    title: "Sumber Bukan Lokasi",
    description: "Untuk IG, Youtube, X, Dokumentasi, Dan Sumber Lain, Tulis Sumber Singkat Sebelum Jenis Sub-Part",
    items: [
      { status: "Salah", text: "N8: Cuaca Ekstrem, Banjir Melanda Cilegon (Sumber: IG/@febukabanten, SOT: Prabowo, Presiden RI)" },
      { status: "Benar", text: "N8: Cuaca Ekstrem, Banjir Melanda Cilegon (IG / SOT: Prabowo, Presiden RI)" },
      { status: "Benar", text: "N8: Cuaca Ekstrem, Banjir Melanda Cilegon (Dokumentasi / SOT: Prabowo, Presiden RI)" },
      { status: "Catatan", text: "Jika Platform Tidak Diketahui, Gunakan Sosmed" },
    ],
  },
  {
    title: "Tidak Ada CG",
    description: "Tetap Buat CG Sesuai Isi Berita, Lalu Tambahkan Keterangan Setelah Tanda Plus",
    items: [
      { status: "Benar",
        text2: "N1: Tewas Karena Tawuran (Jakarta / Wwc: AKBP Afrizal, Kapolsek Taman Sari) + Tidak Ada CG" ,
        text: 'Tetap Buat CG Sesuai Isi Berita Beri Keterangan Di Akhir Format Menggunakan + (Plus) ➔ + Tidak Ada CG'},
      { status: "Catatan", text: "Apabila Tampilan Video Scratch, Blank Atau Terdapat Kesalahan Teknis Lainnya, Beri Keterangan", text2: 'N3: Perawatan Kereta Api Mudik (Semarang, Jateng) + VT Bermasalah' },
    ],
  },
  {
    title: "Lebih Dari Satu Sub-Part Atau CG",
    description: "Setiap Tambahan Ditulis Setelah Kurung Tutup Dan Dipisahkan Dengan Tanda Plus",
    items: [
      { status: "Benar", text: "N8: Kuhp & Kuhap Baru Berlaku Januari 2026 (Dokumentasi / Wwc: Albert Aries, Anggota Tim Ahli Kuhp Nasional) + SOT: Prabowo, Presiden RI)" },
      { status: "Benar", text: "N8: Banjir Di Bandung (Bandung, Jabar) + Banjir Rusak Pertanian Di Balikpapan (Balikpapan, Kaltim)" },
      { status: "Benar", text: "N8: Banjir Di Bandung (Bandung, Jabar) + N9: Penanganan Bencana Masih Berlanjut (Jakarta)" },
    ],
  },
];

export const programBlocks: ProgramBlock[] = [
  {
    title: "Kepala MBM",
    images: ["/mbm-assets/kpl-mbm.png"],
    points: [
      {
        text: "Date: Day, DD Month YYYY",
        children: ["Day Disingkat, Bulan Tidak Disingkat"],
      },
      "Judul Program",
      {
        text:"Host/Anchor",
        children: ["Nama Anchor Lebih Dari Satu Menggunakan Tanda “&”"],
      },
      {
        text: "Tema Ditulis Jika Ada Dialog",
        children: ["Jika Tidak Ada Dialog, Hapus Saja Temanya, Hanya Sampai Titik Di Host Ada, Hapus Bagian Tema"],
      },
    ],
  },
  {
    title: "Lead In & Lead Out",
    images: ["/mbm-assets/LEAD IN.png", "/mbm-assets/LEAD OUT.png"],
    points: ["NAMA PROGRAM SEBELUM DAN SESUDAH", "Lead In = 10 Menit", "Lead Out = 10 Menit"],
  },
  {
    title: "HL (Highlight)",
    images: ["/mbm-assets/HL_1.png", "/mbm-assets/HL_2.png"],
    points: ["Berisi VT Dengan Beberapa Topik Berita"],
  },
  {
    title: "Opening (OBB & Hosting)",
    images: ["/mbm-assets/HOSTING_1 [OBB + HOSTING].png", "/mbm-assets/HOSTING_2.png"],

    points: ["Dipakai Untuk Pembuka Program Sebelum Masuk Rundown Berita"],
  },
  {
    title: "Perpindahan N",
    images: ["/mbm-assets/PERPINDAHAN N.png", "/mbm-assets/PERPINDAHAN N_N10.png", "/mbm-assets/PERPINDAHAN N_N11.png"],
    points: ["Berpindah N Saat Kembali Ke Host"],
  },
  {
    title: "Teaser & Break",
    images: ["/mbm-assets/BREAK_2.png", "/mbm-assets/BREAK_0 TEASER.png", "/mbm-assets/BREAK_1.png"],
    points: ["BREAK Wajib Huruf Besar", "Tidak Boleh Ada Spasi Setelah BREAK Dan CB", "Kode CB Ditulis Di Kolom Combreak"],
  },
  {
    title: "Closing (Closing & CT)",
    images: ["/mbm-assets/BREAK_3 HOST CLOSING.png", "/mbm-assets/CT.png"],
    points: ["Closing Presenter Diikuti CT Sebagai Penutup Program"],
  },
];

export const rules: RuleItem[] = [
  {
    title: "Perhatikan Spasi Pada N, BREAK, Dan CB",
    points: ["Spasi Ekstra Bisa Membuat Hasil Otomatis Tidak Terbaca", "BREAK Ditulis Kapital Penuh Dan Tanpa Spasi Setelah Kode"],
  },
  {
    title: "Penulisan CG Yang Mengutip Tokoh Memakai Titik Koma",
    points: ["Gunakan ; Untuk Memisahkan Nama Tokoh Dan Kutipan", "Jika Memakai :, Pembacaan Otomatis Bisa Berhenti Terlalu Cepat"],
    wrong: "N6: Mahfud MD: Pandji Tidak Bisa Dihukum (Youtube / SOT: Mahfud MD, Menko Polhukam 2019-2024)",
    right: "N6: Mahfud MD; Pandji Tidak Bisa Dihukum (Youtube / SOT: Mahfud MD, Menko Polhukam 2019-2024)",
  },
  {
    title: "Selesaikan Kurung Sebelum Tanda Plus",
    points: ["Format Utama Harus Lengkap Sampai ) Sebelum Menambahkan Elemen Lain Dengan +"],
    wrong: "N8: Banjir Di Bandung + (Bandung, Jabar)",
    right: "N8: Banjir Di Bandung (Bandung, Jabar) + Banjir Rusak Pertanian Di Balikpapan (Balikpapan, Kaltim)",
  },
  {
    title: "Tulis Tidak Ada CG",
    points: ["Apabila Tampilan Video Scratch, Blank Atau Terdapat Kesalahan Teknis Lainnya, Beri Keterangan"],
    right: "N3: Perawatan Kereta Api Mudik (Semarang, Jateng) + VT Bermasalah",
    right2: "N1: Tewas Karena Tawuran (Jakarta / Wwc: AKBP Afrizal, Kapolsek Taman Sari) + Tidak Ada CG",
  },
  {
    title: "Lokasi Dengan Sumber Atau Tidak Ada Lokasi",
    right: "N1: Tewas Karena Tawuran (Tidak Ada Lokasi / Wwc: AKBP Afrizal, Kapolsek Taman Sari)",
  },
  {
    title: "Gunakan Proper Case",
    points: ["Jika Mau Ketik Dengan Huruf Besar Dulu (Upper), Kalian Harus Ubah Setelahnya Menjadi Proper", "Atau Penulisan Sudah Rapi, Dengan Kata Awal Huruf Besar, Penulisan Lokasi, Nama, Singkatan"],
    right: "N4: Mahfud MD; Pandji Tidak Bisa Di Penjara (Youtube)",
    right2: "N5: OTT KPK Di Kantor Bupati Bekasi (Bekasi, Jabar)",
  },
  {
    title: "Checklist Save Files",
    points: [
      "Selalu Copy Template Sebelum Menulis MBM",
      "Hide Sheet Dayparts Setelah Row Berlebih Dihapus",
      "Zoom Selalu 100%",
      "Sesuaikan Skala Axis Vertical Grafik",
      "Save 1 Di Kepala Sheet MBM, Final Save Di Sheet Grafik",
    ],
  },
];

export const sourceShots: SourceShot[] = [
  {
    src: "/mbm-assets/image55.png",
    title: "Catatan Penting",
    alt: "Screenshot Catatan Penting Dari Dokumen Guideline MBM",
  },
  {
    src: "/mbm-assets/image6.png",
    title: "Live Report",
    alt: "Screenshot Live Report Dengan Lower-Third Reporter",
  },
  {
    src: "/mbm-assets/image20.png",
    title: "Dialog Atau Teleconference",
    alt: "Screenshot Siaran Dengan Lower-Third Narasumber",
  },
];
