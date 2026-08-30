import type { FormatGroup, GlossaryTerm, ProgramBlock, RuleItem, SourceShot, SpecialCase } from "@/types/mbm";

export const navItems = [
  { id: "top", label: "Beranda" },
  { id: "istilah", label: "Istilah" },
  { id: "format", label: "Format" },
  { id: "kepala", label: "Kepala MBM" },
  { id: "rules", label: "Rules" },
  { id: "referensi", label: "Referensi" },
] as const;

export const glossary: GlossaryTerm[] = [
  {
    term: "CG",
    definition: "Character Generator, teks grafis on-air seperti lower-third.",
    keywords: ["lower third", "caption", "grafis"],
  },
  {
    term: "OBB",
    definition: "Opening Broadcast Bumper, bumper pembuka program.",
  },
  { term: "HL", definition: "Highlight, rangkuman beberapa topik berita." },
  { term: "VT", definition: "Video Tape, paket berita yang ditayangkan sebagai video." },
  {
    term: "SOT",
    definition: "Sound on Tape, kutipan suara narasumber dengan cakupan publik.",
    format: "(SOT: Nama, Jabatan)",
  },
  {
    term: "LOT",
    definition: "Live on Tape, laporan live atau tapping untuk paket VT.",
    format: "(LOT: Nama Reporter - Lokasi, lokasi)",
  },
  {
    term: "Wwc",
    definition: "Wawancara personal atau cuplikan dialog dari program iNews.",
    format: "(Wwc: Nama, Jabatan)",
  },
  {
    term: "Wwc by Phone",
    definition: "Wawancara melalui telepon.",
    format: "(Wwc by Phone: Nama, Jabatan)",
  },
  {
    term: "Voxpop",
    definition: "Wawancara sejumlah warga tentang topik ringan yang sedang hangat.",
    format: "(Voxpop: Jabatan)",
  },
  { term: "LR", definition: "Live Report, laporan yang tayang live.", format: "(LR: Nama Reporter - Lokasi, lokasi)" },
  { term: "LR by Phone", definition: "Live Report melalui sambungan telepon." },
  { term: "LR by Video Call", definition: "Live Report melalui video call." },
  { term: "Teleconference", definition: "Wawancara narasumber live melalui Zoom.", format: "(Teleconference: Nama, Jabatan)" },
  { term: "Dialog", definition: "Wawancara narasumber live di studio.", format: "(Dialog: Nama, Jabatan)" },
  { term: "Telewicara", definition: "Wawancara narasumber live melalui telepon suara.", format: "(Telewicara: Nama, Jabatan)" },
  { term: "Break / CB", definition: "Commercial Break. Kode CB ditulis di kolom Combreak." },
  { term: "Teaser", definition: "Pengantar acara atau berita selanjutnya." },
  { term: "CT", definition: "Credit Title pada bagian penutup program." },
  { term: "Infografis", definition: "Informasi berupa chart atau data visual agar mudah dipahami.", format: "(Infografis: Judul Infografis)" },
];

export const formatGroups: FormatGroup[] = [
  {
    id: "format-vt",
    title: "Format - Parts: VT",
    description: "Paket VT memakai nomor N, CG utama, lalu lokasi atau sumber di dalam kurung.",
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
          { value: "N2", label: "News urutan ke-2" },
          { value: "Bus Polisi Terbakar", label: "CG utama" },
          { value: "Medan, Sumut", label: "Kota, propinsi" },
        ],
      },
      {
        label: "SOT",
        text: "N6: Trump Janjikan Transisi Aman Usai Tangkap Maduro (Dokumentasi / SOT: Donald Trump, Presiden As)",
        breakdown: [
          { value: "N6", label: "News urutan ke-6" },
          { value: "Dokumentasi", label: "Sumber video" },
          { value: "Donald Trump", label: "Nama narasumber" },
          { value: "Presiden As", label: "Jabatan" },
        ],
      },
      {
        label: "Wwc",
        text: "N4: Akses Masih Terputus, Warga Batu Busuak Terisolasi (Padang, Sumbar / Wwc: Warmayanti, Warga)",
        breakdown: [
          { value: "N4", label: "News urutan ke-4" },
          { value: "Padang, Sumbar", label: "Lokasi" },
          { value: "Warmayanti, Warga", label: "Nama dan jabatan" },
        ],
      },
      {
        label: "Voxpop",
        text: "N13: Kapal Tenggelam, Pelatih Valencia Cf Ditemukan (Labuan Bajo, Ntt / Voxpop: Saksi)",
        breakdown: [
          { value: "N13", label: "News urutan ke-13" },
          { value: "Voxpop: Saksi", label: "Jenis wawancara dan jabatan" },
        ],
      },
    ],
  },
  {
    id: "format-lr",
    title: "Format - Parts: Live Report",
    description: "LR dipakai saat tayang live. LOT dipakai untuk laporan tapping atau paket VT.",
    patterns: [
      "CG Utama (LR: Nama Reporter - Lokasi, lokasi)",
      "CG Utama (LOT: Nama Reporter - Lokasi, lokasi)",
      "CG Utama (Lokasi / LOT: Nama Reporter - Lokasi, lokasi)",
    ],
    examples: [
      {
        label: "LR",
        text: "N3: Arus Balik Libur Nataru 2026 (LR: Anisa Rzyqya - Stasiun Pasar Senen, Jakarta)",
        image: "/mbm-assets/image6.png",
        breakdown: [
          { value: "N3", label: "News urutan ke-3" },
          { value: "Arus Balik Libur Nataru 2026", label: "CG utama" },
          { value: "Anisa Rzyqya", label: "Nama reporter" },
          { value: "Stasiun Pasar Senen, Jakarta", label: "Lokasi LR" },
        ],
      },
      {
        label: "LOT",
        text: "N6: Habiskan Libur Nataru Bersama Penguin Lucu (LOT: Camar Haenda - Tangsel, Banten)",
        breakdown: [
          { value: "LOT", label: "Live on Tape" },
          { value: "Camar Haenda", label: "Reporter" },
          { value: "Tangsel, Banten", label: "Lokasi" },
        ],
      },
      {
        label: "LOT dengan lokasi awal",
        text: "N6: Habiskan Libur Nataru Bersama Penguin Lucu (Jakarta / LOT: Camar Haenda - Tangsel, Banten)",
        breakdown: [
          { value: "Jakarta", label: "Lokasi sebelumnya" },
          { value: "LOT: Camar Haenda", label: "Reporter" },
        ],
      },
    ],
  },
  {
    id: "format-dialog",
    title: "Format - Parts: Dialog",
    description: "Dialog, teleconference, dan telewicara dibedakan dari medium live narasumber.",
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
          { value: "N11", label: "News urutan ke-11" },
          { value: "Pssi Pilih John Herdman Jadi Pelatih Baru Timnas", label: "CG utama" },
          { value: "Wensley Hutagalung", label: "Nama narsum" },
          { value: "Analisis Sepak Bola", label: "Jabatan" },
        ],
      },
      {
        label: "Teleconference",
        text: "N11: Pssi Pilih John Herdman Jadi Pelatih Baru Timnas (Teleconference: Zainal Arif, Mantan Pemain Timnas)",
        breakdown: [
          { value: "Teleconference", label: "Live via Zoom" },
          { value: "Zainal Arif", label: "Narasumber" },
        ],
      },
      {
        label: "Telewicara",
        text: "N7: Serang Venezuela, As Tangkap Presiden Maduro (Telewicara: Teuku Rezasyah, Pengamat Hubungan Internasional)",
        breakdown: [
          { value: "Telewicara", label: "Live via telepon suara" },
          { value: "Teuku Rezasyah", label: "Narasumber" },
        ],
      },
    ],
  },
  {
    id: "format-infografis",
    title: "Format - Parts: Infografis",
    description: "Infografis memakai judul data visual di dalam penanda khusus.",
    patterns: ["CG Utama (Infografis: Judul Infografis)"],
    examples: [
      {
        label: "Infografis",
        text: "N17: Pasal Kontroversial Dalam KUHP Baru (Infografis: Pasal-Pasal KUHP Baru)",
        image: "/mbm-assets/image41.png",
        breakdown: [
          { value: "N17", label: "News urutan ke-17" },
          { value: "Pasal Kontroversial Dalam KUHP Baru", label: "CG utama" },
          { value: "Pasal-Pasal KUHP Baru", label: "Judul infografis" },
        ],
      },
    ],
  },
];

export const specialCases: SpecialCase[] = [
  {
    title: "Sumber bukan lokasi",
    description: "Untuk IG, Youtube, X, Dokumentasi, dan sumber lain, tulis sumber singkat sebelum jenis sub-part.",
    items: [
      { status: "Salah", text: "N8: Cuaca Ekstrem, Banjir Melanda Cilegon (Sumber: IG/@febukabanten, SOT: Prabowo, Presiden RI)" },
      { status: "Benar", text: "N8: Cuaca Ekstrem, Banjir Melanda Cilegon (IG / SOT: Prabowo, Presiden RI)" },
      { status: "Benar", text: "N8: Cuaca Ekstrem, Banjir Melanda Cilegon (Dokumentasi / SOT: Prabowo, Presiden RI)" },
      { status: "Catatan", text: "Jika platform tidak diketahui, gunakan Sosmed." },
    ],
  },
  {
    title: "Tidak Ada CG",
    description: "Tetap buat CG sesuai isi berita, lalu tambahkan keterangan setelah tanda plus.",
    items: [
      { status: "Benar", text: "N1: Tewas Karena Tawuran (Jakarta / Wwc: AKBP Afrizal, Kapolsek Taman Sari) + Tidak Ada CG" },
      { status: "Catatan", text: "Untuk video scratch, blank, atau bermasalah teknis, tulis keterangan seperti + VT Bermasalah." },
    ],
  },
  {
    title: "Lebih dari satu sub-part atau CG",
    description: "Setiap tambahan ditulis setelah kurung tutup dan dipisahkan dengan tanda plus.",
    items: [
      { status: "Benar", text: "N8: Kuhp & Kuhap Baru Berlaku Januari 2026 (Dokumentasi / Wwc: Albert Aries, Anggota Tim Ahli Kuhp Nasional / SOT: Prabowo, Presiden RI) +" },
      { status: "Benar", text: "N8: Banjir Di Bandung (Bandung, Jabar) + Banjir Rusak Pertanian Di Balikpapan (Balikpapan, Kaltim)" },
      { status: "Benar", text: "N8: Banjir Di Bandung (Bandung, Jabar) + N9: Penanganan Bencana Masih Berlanjut (Jakarta)" },
    ],
  },
];

export const programBlocks: ProgramBlock[] = [
  {
    title: "Kepala MBM",
    points: [
      "Date: Day, DD Month YYYY. Day disingkat, bulan tidak disingkat.",
      "Judul Program ditulis jelas sesuai rundown.",
      "Host/Anchor lebih dari satu memakai tanda &.",
      "Tema ditulis jika ada dialog. Jika tidak ada, hapus bagian tema.",
    ],
  },
  {
    title: "Lead In & Lead Out",
    points: ["Isi nama program sebelum dan sesudah.", "Durasi acuan: 10 menit."],
  },
  {
    title: "HL (Highlight)",
    points: ["Berisi VT dengan beberapa topik berita utama."],
  },
  {
    title: "Opening (OBB & Hosting)",
    points: ["Dipakai untuk pembuka program sebelum masuk rundown berita."],
  },
  {
    title: "Perpindahan N",
    points: ["Berpindah N saat kembali ke host."],
  },
  {
    title: "Teaser & Break",
    points: ["BREAK wajib huruf besar.", "Tidak boleh ada spasi setelah BREAK dan CB.", "Kode CB ditulis di kolom Combreak."],
  },
  {
    title: "Closing (Closing & CT)",
    points: ["Closing presenter diikuti CT sebagai penutup program."],
  },
];

export const rules: RuleItem[] = [
  {
    title: "Perhatikan spasi pada N, BREAK, dan CB",
    points: ["Spasi ekstra bisa membuat hasil otomatis tidak terbaca.", "BREAK ditulis kapital penuh dan tanpa spasi setelah kode."],
  },
  {
    title: "CG yang mengutip tokoh memakai titik koma",
    points: ["Gunakan ; untuk memisahkan nama tokoh dan kutipan.", "Jika memakai :, pembacaan otomatis bisa berhenti terlalu cepat."],
    wrong: "N6: Mahfud MD: Pandji Tidak Bisa Dihukum (Youtube / SOT: Mahfud MD, Menko Polhukam 2019-2024)",
    right: "N6: Mahfud MD; Pandji Tidak Bisa Dihukum (Youtube / SOT: Mahfud MD, Menko Polhukam 2019-2024)",
  },
  {
    title: "Selesaikan kurung sebelum tanda plus",
    points: ["Format utama harus lengkap sampai ) sebelum menambahkan elemen lain dengan +."],
    wrong: "N8: Banjir Di Bandung + (Bandung, Jabar)",
    right: "N8: Banjir Di Bandung (Bandung, Jabar) + Banjir Rusak Pertanian Di Balikpapan (Balikpapan, Kaltim)",
  },
  {
    title: "Tulis Tidak Ada CG saat tidak ada lower-third",
    points: ["Untuk video scratch, blank, atau masalah teknis, tetap tulis CG utama lalu tambah keterangan."],
    right: "N3: Perawatan Kereta Api Mudik (Semarang, Jateng) + VT Bermasalah",
  },
  {
    title: "Lokasi dengan sumber atau tanpa lokasi",
    points: ["Kalau lokasi disebut di paket berita, tetap tulis lokasi.", "Jika tidak ada lokasi, tulis Tidak Ada Lokasi setelah kurung buka."],
    right: "N1: Tewas Karena Tawuran (Tidak Ada Lokasi / Wwc: AKBP Afrizal, Kapolsek Taman Sari)",
  },
  {
    title: "Gunakan Proper Case",
    points: ["Judul, lokasi, nama, dan singkatan perlu rapi.", "Jika mengetik uppercase dulu, ubah kembali menjadi Proper Case."],
    right: "N5: OTT KPK Di Kantor Bupati Bekasi (Bekasi, Jabar)",
  },
  {
    title: "Checklist Save Files",
    points: [
      "Selalu copy template sebelum menulis MBM.",
      "Hide sheet Dayparts setelah row berlebih dihapus.",
      "Zoom selalu 100%.",
      "Sesuaikan skala axis vertical grafik.",
      "Save 1 di kepala sheet MBM, final save di sheet Grafik.",
    ],
  },
];

export const sourceShots: SourceShot[] = [
  {
    src: "/mbm-assets/image55.png",
    title: "Catatan penting",
    alt: "Screenshot catatan penting dari dokumen guideline MBM",
  },
  {
    src: "/mbm-assets/image6.png",
    title: "Live report",
    alt: "Screenshot live report dengan lower-third reporter",
  },
  {
    src: "/mbm-assets/image20.png",
    title: "Dialog atau teleconference",
    alt: "Screenshot siaran dengan lower-third narasumber",
  },
];
