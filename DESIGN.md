Design Guideline: Landing Page Guideline MBM

Terkait: PRD_Landing_Page_Guideline_MBM.md Arah desain: Putih dominan, aksen merah — mengambil bahasa visual dunia broadcast/newsroom itu sendiri (CG/lower-third, rundown, "ON AIR"), bukan sekadar palet korporat merah-putih.

0. Konsep Besar

Subjek halaman ini adalah aturan penulisan CG (Character Generator) — teks lower-third yang muncul di layar TV saat berita tayang. Jadi elemen visual paling khas di dunia MBM justru adalah CG bar merah itu sendiri: strip merah solid dengan teks putih kapital yang muncul di bagian bawah layar siaran.

Desain landing page ini meminjam bahasa visual tersebut secara langsung: latar halaman putih bersih (seperti kanvas video kosong), dan setiap section header serta elemen navigasi ditata seperti CG bar sungguhan — strip merah, teks kondensat putih, huruf kapital. Ini bukan dekorasi, tapi contoh hidup dari apa yang sedang diajarkan halaman tersebut.

1. Palet Warna
Token	Hex	Peran
--color-bg	
#FFFFFF	Latar utama halaman (dominan)
--color-surface	
#FAFAFA	Latar section alternatif / card, agar tidak flat putih-putih terus
--color-ink	
#141414	Warna teks utama (bukan hitam pekat #000, biar tidak terlalu keras)
--color-muted	
#6B6B6B	Teks sekunder, caption, label kecil
--color-red	
#D8102C	Merah utama — dipakai untuk CG bar, nav aktif, CTA, penanda "SALAH"
--color-red-deep	
#8C0A1D	Merah gelap — hover state, border aksen, teks di atas merah muda
--color-hairline	
#E7E5E2	Garis pemisah tipis antar section/card
--color-ok	
#1E7A46	Hijau — khusus penanda "BENAR" pada contoh do's/don'ts

Prinsip pemakaian:

Merah tidak dipakai sebagai warna latar besar. Merah selalu tampil sebagai strip/bar/aksen sempit — persis seperti CG di TV yang cuma memenuhi ~15% bagian bawah layar, bukan seluruh frame.
Rasio visual disarankan: ±85% putih/abu muda, ±10% merah, ±5% hitam/teks & aksen hijau.
Hindari gradient merah — CG broadcast selalu solid, flat, tegas. Gradasi akan terasa "dekoratif" dan menghilangkan rasa otentik siaran.
2. Tipografi
Peran	Typeface	Karakter
Display / CG label	Barlow Condensed (700, kapital, letter-spacing lebar)	Meniru font CG broadcast asli: kondensat, tegas, mudah dibaca dalam strip sempit
Body	Inter (400/500)	Netral, nyaman dibaca panjang, untuk penjelasan & definisi
Format/kode contoh	IBM Plex Mono (400/500)	Semua contoh format (N2: Bus Polisi Terbakar (Medan, Sumut)) ditulis monospace agar terlihat seperti "kode" yang presisi — memudahkan mata membedakan spasi, tanda kurung, /, +, sesuai concern utama dokumen sumber soal spasi & tanda baca

Skala tipe (contoh, berbasis 8px grid):

H1 (Hero): 48/56, Barlow Condensed 700, kapital
H2 (Nama Section, dirender sebagai CG bar): 20/24, Barlow Condensed 700, kapital, letter-spacing +0.04em
H3 (Sub-bagian format): 16/22, Inter 600
Body: 16/26, Inter 400
Caption/label: 13/18, Inter 500, warna --color-muted
Kode format: 15/24, IBM Plex Mono 500
3. Layout & Struktur

Single-page, section mengikuti IA di PRD, dengan nav anchor sticky di atas.

┌────────────────────────────────────────────┐
│ [LOGO/JUDUL]   Istilah  Format  Kepala  ⋯   │  ← nav sticky, strip putih tipis,
│                                    [Cari 🔍] │    underline merah 2px di item aktif
├────────────────────────────────────────────┤
│                                              │
│   ██████████████ HERO ██████████████        │  ← Hero: putih, judul besar Barlow
│   Guideline MBM                              │    Condensed, 1 kalimat tujuan,
│   [ Cari istilah / format... ]               │    search bar jadi CTA utama hero
│                                              │
├────────────────────────────────────────────┤
│ ▮▮▮▮▮ DAFTAR ISTILAH ▮▮▮▮▮  ← CG bar merah  │  ← setiap judul section = CG bar
│                                              │      (strip merah solid, teks putih
│  [CG] [OBB] [HL] [VT] [SOT] [LOT] ...        │      kapital, sudut tajam/no radius,
│  → grid kartu istilah, bisa difilter search  │      persis proporsi lower-third asli)
│                                              │
├────────────────────────────────────────────┤
│ ▮▮▮▮▮ FORMAT: VT ▮▮▮▮▮                       │
│  Format umum (mono, di dalam "frame video")  │  ← lihat Bagian 4: Signature Element
│  ┌ mini video frame preview ─────────┐       │
│  │ ...                    ▮CG PREVIEW▮│      │
│  └────────────────────────────────────┘      │
│  Contoh →  breakdown per komponen            │
├────────────────────────────────────────────┤
│ ▮▮▮▮▮ CATATAN PENTING ▮▮▮▮▮                  │
│  [✕ SALAH — merah]   [✓ BENAR — hijau]       │  ← side-by-side compare card
├────────────────────────────────────────────┤
│  Footer tipis: unduh PDF, versi, kontak      │
└────────────────────────────────────────────┘

Grid: 12 kolom, max-width konten 1120px, padding section 96px (desktop) / 48px (mobile). Radius: 0px pada elemen bertema "broadcast" (CG bar, nav, badge SALAH/BENAR) — CG di TV tidak pernah rounded. Card konten biasa boleh radius kecil 4px agar tidak terlalu keras dibaca lama. Hairline: gunakan --color-hairline 1px sebagai pemisah antar contoh format, bukan shadow tebal.

4. Signature Element: "Live CG Preview"

Ini elemen unik yang membedakan halaman ini dari landing page guideline biasa: setiap contoh format (VT, LR, Dialog, Infografis) ditampilkan di dalam mini frame video 16:9 berwarna gelap (
#141414), dengan CG bar merah sungguhan di bagian bawah frame yang menampilkan teks contoh persis seperti akan muncul di siaran asli.

Frame gelap = "layar TV", bukan sekadar kotak kode.
Di dalam frame, strip merah muncul di bawah berisi judul CG (mis. N2: Bus Polisi Terbakar (Medan, Sumut)) dalam Barlow Condensed kapital putih.
Tepat di bawah frame, teks yang sama ditulis ulang dalam IBM Plex Mono dengan tiap komponen (N-urutan, CG utama, kota/provinsi) diberi warna/underline berbeda + label kecil di bawahnya — ini menggantikan panah ➔ manual pada dokumen asli dengan breakdown visual yang lebih jelas.
Untuk kasus "SALAH" (mis. lupa +, pakai : bukan ;, ada spasi setelah BREAK), frame video menampilkan versi teks tersebut dengan garis coret merah + ikon ✕; versi "BENAR" ditampilkan berdampingan dengan aksen hijau + ✓.

Elemen ini sekaligus jadi alat bantu belajar (preview realistis) dan identitas visual halaman — satu-satunya tempat yang "berani" secara visual, sementara sisanya tetap tenang dan fungsional.

5. Komponen Kunci
Nav sticky: latar putih, border-bottom hairline, item aktif diberi underline merah 2px (bukan background merah penuh — supaya merah tetap terasa sebagai aksen, bukan dominan).
CG-bar section header: strip merah solid tinggi ~40–48px, teks putih Barlow Condensed kapital, sudut tajam, full width dalam container konten (bukan full viewport) — meniru rasio CG asli.
Search bar: putih dengan border 1px --color-hairline, ikon kaca pembesar, saat fokus border berubah merah --color-red.
Kartu istilah (glossary): putih/--color-surface, border hairline, singkatan dalam Barlow Condensed + definisi Inter di bawahnya.
Badge BENAR/SALAH: persegi tajam (no radius), BENAR = hijau --color-ok + ✓, SALAH = merah --color-red + ✕. Konsisten dipakai di seluruh section "Catatan Penting".
Tombol unduh PDF: outline merah, teks merah, hover → fill merah teks putih (satu-satunya tombol solid merah di halaman, agar CTA ini menonjol).
6. Motion

Minim dan fungsional, selaras dengan sifat guideline yang serius/rujukan kerja:

Scroll-reveal halus (fade + translateY 8px) saat section CG bar masuk viewport — meniru cara CG "muncul" (slide-in) di siaran asli, tapi versi sangat subtle (200ms, ease-out).
Hover pada contoh format: frame video sedikit scale (1.01) + shadow tipis, memberi kesan "diputar".
Tidak ada animasi berulang/ambient — halaman ini alat kerja referensi, bukan halaman promosi.
Hormati prefers-reduced-motion: matikan semua transisi non-esensial.
7. Aksesibilitas
Kontras teks putih di atas merah 
#D8102C sudah memenuhi AA untuk teks besar (Barlow Condensed 700 ukuran ≥18px); untuk teks kecil di atas merah, gunakan --color-red-deep sebagai latar agar tetap AA-compliant.
Semua CG-bar section header adalah heading semantik (<h2>), bukan div biasa, agar screen reader & navigasi tetap jelas.
Focus state keyboard: outline 2px --color-red dengan offset 2px pada semua elemen interaktif (nav, search, tombol unduh).