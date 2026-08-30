# PRD: Landing Page Guideline MBM (Master Berita/Menu Broadcast)

**Versi:** 1.0
**Tanggal:** 30 Agustus 2026
**Dokumen sumber:** MBM_GUIDELINE.docx
**Status:** Draft untuk review

---

## 1. Latar Belakang

Saat ini panduan penulisan MBM (format CG, istilah, tata cara penulisan VT/LR/Dialog/Infografis, dsb.) berbentuk file Word/PPT yang berisi campuran gambar contoh dan teks. Format ini menyulitkan tim redaksi/produksi untuk:

- Mencari aturan tertentu dengan cepat (tidak ada pencarian/index).
- Mengakses panduan dari berbagai perangkat (terutama HP saat di lapangan/studio).
- Memastikan semua orang memakai versi guideline yang sama dan terbaru (revisi tersebar di banyak file).

Dibutuhkan sebuah **landing page** yang menyajikan isi guideline MBM secara terstruktur, mudah dicari, dan mudah di-maintain.

## 2. Tujuan

1. Menyediakan satu sumber kebenaran (single source of truth) untuk aturan penulisan MBM.
2. Mempercepat proses onboarding tim baru (produser, editor, reporter, PD) dalam memahami format penulisan.
3. Mengurangi kesalahan format (spasi, tanda baca, CG, dsb.) yang sering terjadi saat ini.
4. Memudahkan pencarian istilah dan contoh format kapan saja, di perangkat apa saja.

## 3. Target Pengguna

| Persona | Kebutuhan |
|---|---|
| Produser / PD | Referensi cepat saat menyusun rundown/MBM |
| Reporter / Editor naskah | Cek format CG (VT, LR, Dialog, Voxpop, Infografis) sebelum submit |
| Tim baru / Trainee | Belajar istilah & format dari nol secara berurutan |
| QC / Supervisor | Mengecek kepatuhan format redaksi terhadap guideline |

## 4. Ruang Lingkup

### Termasuk (In-Scope)
- Landing page 1 halaman utama (single page dengan section/anchor navigation) berisi seluruh isi guideline.
- Struktur konten mengikuti isi dokumen asli (lihat Bagian 6).
- Fitur pencarian istilah/format di dalam halaman.
- Versi responsif (desktop & mobile).
- Opsi unduh/lihat versi PDF dari guideline asli.

### Tidak Termasuk (Out-of-Scope)
- CMS/admin panel untuk edit konten oleh non-developer (fase berikutnya, jika dibutuhkan).
- Sistem login/otentikasi (asumsi: guideline bersifat internal tapi tidak rahasia, kecuali ditentukan lain).
- Multi-bahasa (guideline saat ini hanya Bahasa Indonesia).

## 5. Asumsi & Pertanyaan Terbuka

- **Asumsi:** Landing page bersifat internal (dibagikan via link), tidak perlu SEO publik.
- **Open question:** Apakah perlu proteksi akses (password/SSO)?
- **Open question:** Apakah konten akan diperbarui berkala? Jika ya, siapa pemilik update-nya dan seberapa sering?
- **Open question:** Apakah gambar contoh asli (screenshot rundown/CG) boleh ditampilkan apa adanya, atau perlu di-redesign ulang agar konsisten secara visual?

## 6. Struktur Konten (Information Architecture)

Berdasarkan isi dokumen guideline, landing page dibagi menjadi section berikut, dengan navigasi anchor/menu di bagian atas:

1. **Hero / Pembuka**
   - Judul: "Guideline MBM"
   - Ringkasan singkat tujuan guideline
   - Navigasi cepat ke tiap section

2. **Daftar Istilah**
   - Daftar singkatan & definisi: CG, OBB, HL, VT, SOT, LOT, Wwc, Wwc by Phone, Voxpop, LR, LR by Phone, LR by Video Call, Teleconference, Dialog, Telewicara, Break/CB, Teaser, CT, Infografis.
   - Ditampilkan sebagai kartu/tabel yang bisa dicari (search box).

3. **Format Penulisan per Jenis Konten**
   - Format – Parts: VT (CG Utama, SOT, Wwc, Voxpop + contoh)
   - Format – Parts: Live Report (LR & LOT + contoh)
   - Format – Parts: Dialog (Dialog, Teleconference, Telewicara + contoh)
   - Format – Parts: Infografis
   - Format – Lainnya (kasus khusus: sumber bukan lokasi/IG/Youtube/X/Dokumentasi, tidak ada CG, tidak ada lokasi, lebih dari 1 sub-part, segmen khusus, lebih dari 1 CG utama dalam 1 N, 2 N dalam 1 menit)
   - Setiap sub-section menampilkan: **Format umum** → **Contoh** → **Penjelasan tiap komponen (breakdown)**.

4. **Format Kepala MBM & Struktur Program**
   - Format Kepala MBM (Date, Judul Program, Host/Anchor, Tema)
   - Bagian-bagian MBM: Lead In & Lead Out, HL (Highlight), Opening (OBB & Hosting), Perpindahan N, Teaser & Break, Closing (Closing & CT)

5. **Catatan Penting (Rules & Pitfalls)**
   - Aturan spasi pada N & Break/CB
   - Penulisan CG yang mengutip tokoh (gunakan `;` bukan `:`)
   - Aturan penutupan kurung `)` sebelum tanda `+`
   - Aturan "Tidak ada CG" untuk video scratch/blank/masalah teknis
   - Aturan lokasi dengan sumber / tidak ada lokasi
   - Aturan huruf kapital di setiap kata (Proper Case)
   - Checklist penyimpanan file (Save Files): copy template, hide sheet Dayparts, zoom 100%, skala axis grafik, urutan save (sheet MBM → sheet Grafik sebagai final save)

6. **Pencarian & Referensi Cepat**
   - Search bar global untuk mencari istilah/format berdasarkan kata kunci.
   - Tombol "kembali ke atas" dan anchor menu sticky.

7. **Unduh Guideline**
   - Tombol unduh versi PDF/Word asli sebagai cadangan referensi.

## 7. Functional Requirements

| ID | Requirement | Prioritas |
|---|---|---|
| FR-1 | Halaman menampilkan seluruh section pada Bagian 6 dalam satu halaman dengan navigasi anchor | Must |
| FR-2 | Search bar dapat memfilter/highlight istilah dan judul format sesuai kata kunci | Must |
| FR-3 | Setiap contoh format ditampilkan dengan breakdown penjelasan (bagian mana yang N, CG, lokasi, dsb.) seperti pada dokumen asli | Must |
| FR-4 | Catatan penting/aturan (do's & don'ts) ditandai visual jelas (misal warna merah untuk "SALAH", hijau untuk "BENAR") | Must |
| FR-5 | Tombol unduh dokumen guideline asli (PDF) tersedia | Should |
| FR-6 | Navigasi sticky/menu tetap terlihat saat scroll, menunjukkan section aktif | Should |
| FR-7 | Tampilan responsif untuk mobile (dipakai di lapangan/studio) | Must |
| FR-8 | Struktur konten mudah diperbarui oleh tim non-teknis di masa depan (misal via file konten terpisah / CMS ringan) | Could |

## 8. Non-Functional Requirements

- **Performa:** Halaman dapat dimuat < 3 detik pada koneksi kantor standar.
- **Kompatibilitas:** Berfungsi baik di browser umum (Chrome, Edge, Safari) desktop & mobile.
- **Aksesibilitas:** Kontras teks memadai, struktur heading semantik (H1–H3) agar mudah dinavigasi.
- **Maintainability:** Konten disusun modular per section agar mudah ditambah/diubah tanpa merombak layout.

## 9. Desain & Konten Visual

- Gunakan tone visual yang bersih dan profesional, konsisten dengan identitas redaksi (warna, tipografi) — perlu konfirmasi brand guideline jika ada.
- Gambar contoh (screenshot rundown) dari dokumen asli dapat digunakan sebagai referensi visual pada section "Format Penulisan", didampingi teks yang bisa di-copy (sesuai catatan "TULISAN BASE ON PICT YANG BISA DI COPAS" pada dokumen sumber).
- Contoh yang berlabel "SALAH" vs "BENAR" ditampilkan berdampingan agar mudah dibandingkan.

## 10. Metrik Keberhasilan

- Jumlah kesalahan format MBM (CG, spasi, dsb.) menurun setelah landing page dipakai tim (dibandingkan dengan baseline sebelum ada landing page).
- Waktu onboarding tim baru terhadap standar MBM lebih singkat.
- Tingkat penggunaan search bar / halaman diakses rutin oleh tim redaksi (jika ada analytics).

## 11. Milestone (Usulan)

| Tahap | Deliverable | Estimasi |
|---|---|---|
| 1. Content mapping | Finalisasi struktur & isi konten dari dokumen guideline | 1–2 hari |
| 2. Desain UI | Wireframe/mockup landing page | 2–3 hari |
| 3. Development | Build landing page (frontend, search, responsive) | 3–5 hari |
| 4. Review & revisi | Review isi oleh tim redaksi/QC | 1–2 hari |
| 5. Rilis | Publish & sosialisasi ke tim | 1 hari |

## 12. Risiko

- Konten guideline masih bisa berubah (revisi format) → perlu proses update yang jelas agar landing page tidak cepat usang.
- Gambar-gambar contoh dalam dokumen asli beresolusi rendah/tidak konsisten → mungkin perlu dirapikan ulang agar enak dilihat di web.

---

*Dokumen ini disusun berdasarkan isi MBM_GUIDELINE.docx yang diunggah. Bagian scope, prioritas fitur, dan open questions perlu dikonfirmasi bersama stakeholder sebelum masuk ke tahap desain/development.*